import { Component, OnInit, ViewChild } from '@angular/core';
import { NgstyleComponent } from './component/ngstyle/ngstyle.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, ViewChild {
  title = 'lab5-angular-app';
  @ViewChild(NgstyleComponent)
  NgstyleComponent: NgstyleComponent;
  colorProperty: string;
  public showNgstyle = true;

  parentColorProperty: string;

  constructor(){}
  descendants: boolean;
  first: boolean;
  read: any;
  isViewQuery: boolean;
  selector: any;
  static?: boolean;
  ngOnInit(): void {
    this.colorProperty = '';
    this.parentColorProperty = '';

  }
  
  receiveData($event) {
    this.colorProperty = $event;
    console.log(this.colorProperty);
    this.parentColorProperty = this.colorProperty;
  }
}
