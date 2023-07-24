import { Component, OnInit } from '@angular/core';
import { SettingService } from 'src/app/service/setting.service';
@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent implements OnInit {

  constructor(private msg: SettingService ) { }

  ngOnInit(): void {

  }
}
