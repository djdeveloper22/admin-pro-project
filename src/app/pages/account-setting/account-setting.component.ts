import { Component, OnInit } from '@angular/core';
import { SettingService } from 'src/app/service/setting.service';

@Component({
  selector: 'app-account-setting',
  templateUrl: './account-setting.component.html',
  styleUrls: ['./account-setting.component.css']
})
export class AccountSettingComponent implements OnInit {

  constructor(private settingService: SettingService) { }

  ngOnInit(): void {
    this.settingService.checkCurrentTheme();
  }

  changeTheme(theme: string){
    this.settingService.changeTheme( theme );
  }


}
