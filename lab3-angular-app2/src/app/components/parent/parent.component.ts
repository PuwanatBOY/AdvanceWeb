import {
  Component, OnInit, ViewChild, OnChanges, DoCheck,
  AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy} from '@angular/core';
import { ChildComponent } from '../child/child/child.component'
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit,
  ViewChild,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy {

  @ViewChild(ChildComponent)
  childComponent: ChildComponent;

  parentData: number;
  childData: number;
  textMessage: string;
  status: string;
  public showChild = true;

  constructor() { console.log('Constructor Work!') }
  descendants: boolean;
  first: boolean;
  read: any;
  isViewQuery: boolean;
  selector: any;
  static?: boolean;
  ngOnInit(): void {
    this.parentData = 0;
    this.childData = 0;
    console.log('ngOnInit Work!');
  }

  ngOnChanges(){ 
    console.log('ngOnChanges Work!');
  }

  ngDoCheck(){
    console.log(this.textMessage)
    console.log('ngDoCheck Work!');
  }

  ngAfterContentInit(){
    console.log('ngAfterContentInit Work!');
  }

  ngAfterContentChecked(){
    if(this.textMessage == "B6004804"){
      this.status = "Your ID is OK"
    }else{
      this.status = "Error";
    }
    console.log('ngAfterContentChecked Work!');
  }

  ngAfterViewInit(){
    console.log('ngAfterViewInit Work!');
  }

  ngAfterViewChecked(){
    console.log('ngAfterViewChecked Work!');
  }

  ngOnDestroy(){
    console.log('ngOnDestroy Work!');
  }

  onClick2Child() {
    this.parentData += 1;
  }

  receiveData($event) {
    this.childData = $event;
  }

  onClickViewChild() {
    this.childComponent.onClick2Parent();
  }

  update(){
    this.showChild = !this.showChild;
  }

}
