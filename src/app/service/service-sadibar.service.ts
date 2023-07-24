import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceSadibarService {
  menu: any = [
    {
      titulo: 'Principal!!',
      icono: 'mdi mdi-gauge',
      submenu: [
        {titulo: 'Main', url: '/'},
        {titulo: 'ProgressBar', url: 'progress'},
        {titulo: 'Graficas', url: 'grafica1'},
      ]
    }
  ]
  constructor() { }
}
