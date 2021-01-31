import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { TemplatePortal } from '@angular/cdk/portal';
import { Component, OnInit, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';
import { fromEvent, Subscription } from 'rxjs';
import { filter, take } from 'rxjs/operators';
import { Expediente } from 'src/app/model/expediente-model';
import { ExpedienteService } from 'src/app/services/expediente.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
  selector: 'app-expediente',
  templateUrl: './expediente.component.html',
  styleUrls: ['./expediente.component.css']
})
export class ExpedienteComponent implements OnInit {

  users = Array.from({ length: 10 }, () => ({
    name: "juam"
  }));
  sub: Subscription;

  overlayRef: OverlayRef | null;
  @ViewChild('userMenu') userMenu: TemplateRef<any>;

  constructor(private tokenService: TokenStorageService,
    private expedienteService: ExpedienteService,
    private router: Router,
    public overlay: Overlay,
    public viewContainerRef: ViewContainerRef) { }

    expedientes: Expediente[];
    expedientesLength: number;

  ngOnInit(): void {

    this.expedienteService.getAllExpedientesByUser().subscribe(data => {
      this.expedientes = data;
    });
  }

  goToIncidencia(expediente: Expediente): void {
    window.localStorage.removeItem('EXPEDIENTE');
    window.localStorage.setItem('EXPEDIENTE', JSON.stringify(expediente));
    this.router.navigateByUrl('incidenciasexpediente');
  }

  open({ x, y }: MouseEvent, expediente) {
    this.close();
    
    const positionStrategy = this.overlay.position()
      .flexibleConnectedTo({ x, y })
      .withPositions([
        {
          originX: 'end',
          originY: 'bottom',
          overlayX: 'end',
          overlayY: 'top',
        }
      ]);
      
    this.overlayRef = this.overlay.create({
      positionStrategy,
      scrollStrategy: this.overlay.scrollStrategies.close()
    });
   
    this.overlayRef.attach(new TemplatePortal(this.userMenu, this.viewContainerRef, {
      $implicit: expediente
    }));
    
    this.sub = fromEvent<MouseEvent>(document, 'click')
      .pipe(
        filter(event => {
          const clickTarget = event.target as HTMLElement;
          console.log(clickTarget);
          return !!this.overlayRef && !this.overlayRef.overlayElement.contains(clickTarget);
        }),
        take(1)
      ).subscribe(() => this.close())
      console.log("salio");
  }

  delete(user) {
    // delete user
    this.close();
  }

  close() {
    this.sub && this.sub.unsubscribe();
    if (this.overlayRef) {
      this.overlayRef.dispose();
      this.overlayRef = null;
    }
  }

}