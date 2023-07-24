import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingService {
  private linkTheme = document.querySelector('#theme');

  constructor() {
    console.log("Inicializando el servicio");
    const url = localStorage.getItem('theme') || './assets/css/colors/default-dark.css'
    this.linkTheme.setAttribute('href', url);
  }

  changeTheme(theme: string) {
    let ruta = `./assets/css/colors/${theme}.css`
    this.linkTheme.setAttribute('href', ruta);
    localStorage.setItem('theme', ruta);

    this.checkCurrentTheme();
  }

  checkCurrentTheme(): void{
    let link = document.querySelectorAll('.selector');
    link.forEach(el=>{
      el.classList.remove('working');
      const btnTheme = el.getAttribute('data-theme');
      const btnUrl = `./assets/css/colors/${btnTheme}.css`
      const currentTheme = this.linkTheme.getAttribute('href');

      if(btnUrl === currentTheme){
        el.classList.add('working')
      }
    })
  }
}
