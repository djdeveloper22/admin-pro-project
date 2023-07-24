import { Component, OnInit } from '@angular/core';
import { ServiceSadibarService } from 'src/app/service/service-sadibar.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  menuItems: any [];

  constructor(private SidebarService: ServiceSadibarService) {
    this.menuItems = SidebarService.menu
    console.log(this.menuItems);
   }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
