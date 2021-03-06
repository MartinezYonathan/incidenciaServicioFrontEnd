import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css'],
})
export class PaginationComponent implements OnInit {
  @Input() private page: number;

  @Input() private totalPages: number;

  @Input() public numShops: number;

  @Output() paginaEmitter: EventEmitter<number> = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  siguiente() {
    this.page++;

    this.pasarPagina();
  }

  anterior() {
    this.page--;

    this.pasarPagina();
  }

  pasarPagina() {
    this.paginaEmitter.emit(this.page);
  }
}
