import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styleUrls: ['./incrementador.component.css']
})
export class IncrementadorComponent implements OnInit {

  //dato enviado desde el componente padre
  @Input() progreso: number = 10;
  @Input() btnClass: string = 'btn-primary'
  //envia datos desde el hijo al padre
  @Output() valorSalida: EventEmitter<number> = new EventEmitter();

  ngOnInit(): void {
    this.btnClass = `btn ${this.btnClass}`;
  }

  contador(valor: number): void{
    this.progreso < 0 || this.progreso > 100
    ?
      this.valorSalida.emit(this.progreso = 0)
    :
      this.valorSalida.emit(this.progreso += valor);
  }
}
