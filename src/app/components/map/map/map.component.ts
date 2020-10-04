import { Component, OnInit, AfterViewInit, Input, ElementRef } from '@angular/core';
import Feature from 'ol/Feature';
import Point from 'ol/geom/Point';
import Icon from 'ol/style/Icon';
import Style from 'ol/style/Style';
import MousePosition from 'ol/control/MousePosition';
import { transform } from 'ol/proj';
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import VectorSource from 'ol/source/Vector';
import VectorLayer from 'ol/layer/Vector';
import { createStringXY } from 'ol/coordinate';
import XYZ from 'ol/source/XYZ';
import { OSM } from 'ol/source';
import * as Proj from 'ol/proj';
import {
  defaults as defaultControls,
  Control,
} from 'ol/control';

export const DEFAULT_HEIGHT = '500px';
export const DEFAULT_WIDTH = '500px';
export const DEFAULT_LAT = 19.312155871512488;
export const DEFAULT_LON = -99.05758380889891;
export const DEFAULT_ANCHOR = [0.5, 1];
export const DEFAULT_ICON = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAMAAAC7IEhfAAAAyVBMVEUAAADnTDznTDvnTDvnTDvAOCrnTDznSzvnTDvAOCvnTDznTDznTDvnTDzAOCrnTDvnTDvnTDvnTDznTDvAOSrnTDznTDzTQjLSQjPnTDzpTDvnSzvAOCrnTDvAOSvAOCvnSzvnTDzAOCvnSzznTDznTDvnTDy/OCvnTDznTDvnTDznSzvmSzvAOCvnTDzAOCvnTDvmTDvAOCq+OCrpTDzkSzrbRjbWRDTMPi+8NinrTT3EOy3gSDjTQjPPQDLHPS/DOiu5NCjHPC5jSfbDAAAAMHRSTlMAKPgE4hr8CfPy4NzUt7SxlnpaVlRPIhYPLgLt6ebOysXAwLmej4iGgGtpYkpAPCBw95QiAAAB50lEQVQ4y42T13aDMAxAbVb2TrO6927lwQhktf//UZWVQ1sIJLnwwBEXWZYwy1Lh/buG5TXu+rzC9nByDQCCbrg+KdUmLUsgW08IqzUp9rgDf5Ds8CJv1KS3mNL3fbGlOdr1Kh1AtFgs15vke7kQGpDO7pYGtJgfbRSxiXxaf7AjgsFfy1/WPu0r73WpwGiu1Fn78bF9JpWKUBTQzYlNQIK5lDcuQ9wbKeeBiTWz3vgUv44TpS4njJhcKpXEuMzpOCN+VE2FmPA9jbxjSrOf6kdG7FvYmkBJ6aYRV0oVYIusfkZ8xeHpUMna+LeYmlShxkG+Zv8GyohLf6aRzzRj9t+YVgWaX1IO08hQyi9tapxmB3huxJUp8q/EVYzB89wQr0y/FwqrHLqoDWsoLsxQr1iWNxp1iCnlRbt9IdELwfDGcrSMKJbGxLx4LenTFsszFSYehwl6aCZhTNPnO6LdBYOGYBVFqwAfDF27+CQIvLUGrTU9lpyFBw9yeA+sCNsRkJ5WQjg2K+QFcrywEjoCBHVpe3VYGZyk9NQCLxXte/jHvc1K4XXKSNQ520PPtIhcr8f2MXPShNiavTyn4jM7wK0g75YdYgTE6KA465nN9GbsILwhoMHZETx53hM7Brtet9lRDAYFwR80rG+sfAnbpQAAAABJRU5ErkJggg==';
export const DEFAULT_ADDMARKER = false;

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit, AfterViewInit {
  @Input() lat: number = DEFAULT_LAT;
  @Input() lon: number = DEFAULT_LON;
  @Input() zoom: number;
  @Input() width: string | number = DEFAULT_WIDTH;
  @Input() height: string | number = DEFAULT_HEIGHT;
  @Input() icon: string = DEFAULT_ICON;
  @Input() anchor: number[] = DEFAULT_ANCHOR;
  @Input() addMarker: boolean = DEFAULT_ADDMARKER;

  target: string = 'map-' + Math.random().toString(36).substring(2);
  map: Map;
  private mapEl: HTMLElement;
  vectorLayer: any;

  constructor(private elementRef: ElementRef) { }

  ngOnInit(): void {
  }
  
  getCoord(event: any) {
    if (this.addMarker) {
      window.localStorage.removeItem("LONGITUD");
    window.localStorage.removeItem("LATITUD");
    
    if (this.vectorLayer) {
      var features = this.vectorLayer.getSource().getFeatures();
      features.forEach((feature) => {
        this.vectorLayer.getSource().removeFeature(feature);
      });
    }

    var coordinate = this.map.getEventCoordinate(event);
    var lonlat = transform(coordinate, 'EPSG:3857', 'EPSG:4326');

    var long = lonlat[0];
    window.localStorage.setItem("LONGITUD", JSON.stringify(long));
    var lati = lonlat[1];
    window.localStorage.setItem("LATITUD", JSON.stringify(lati));

    const marker = new Feature({
      geometry: new Point(Proj.fromLonLat([long, lati]))
    });

    const icon = new Style({
      image: new Icon({
        anchor: this.anchor,
        src: this.icon
      })
    });

    marker.setStyle(icon);

    const vectorSource = new VectorSource({
      features: [marker]
    });

    this.vectorLayer = new VectorLayer({
      source: vectorSource
    });

    this.map.addLayer(this.vectorLayer);
    }
  }

  ngAfterViewInit(): void {
    this.mapEl = this.elementRef.nativeElement.querySelector('#' + this.target);
    this.setSize();

    var mousePositionControl = new MousePosition({
      coordinateFormat: createStringXY(4),
      projection: 'EPSG:4326',
      className: 'custom-mouse-position',
      target: document.getElementById('mouse-position'),
      undefinedHTML: '&nbsp;',
    });

    this.map = new Map({
      target: this.target,
      layers: [
        new TileLayer({
          source: new OSM()
        })
      ],
      view: new View({
        center: Proj.fromLonLat([this.lon, this.lat]),
        rotation: Math.PI / -5,
        zoom: this.zoom
      }),
      controls: defaultControls({ attribution: false, zoom: false }).extend([mousePositionControl])
    });


  }

  private setSize() {
    if (this.mapEl) {
      const styles = this.mapEl.style;
      styles.height = coerceCssPixelValue(this.height) || DEFAULT_HEIGHT;
      styles.width = coerceCssPixelValue(this.width) || DEFAULT_WIDTH;
    }
  }

  public setMarker(vector: VectorLayer) {
    this.map.addLayer(vector);
  }

  public setControl(control: Control) {
    this.map.addControl(control);
  }

}

const cssUnitsPattern = /([A-Za-z%]+)$/;

function coerceCssPixelValue(value: any): string {
  if (value == null) {
    return '';
  }

  return cssUnitsPattern.test(value) ? value : `${value}px`;
}