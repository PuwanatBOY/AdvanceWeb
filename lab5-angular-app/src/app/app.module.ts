import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgclassComponent } from './component/ngclass/ngclass.component';
import { NgstyleComponent } from './component/ngstyle/ngstyle.component';
import { NgifComponent } from './component/ngif/ngif.component';
import { NgswitchComponent } from './component/ngswitch/ngswitch.component';
import { NgforComponent } from './component/ngfor/ngfor.component';

@NgModule({
  declarations: [
    AppComponent,
    NgclassComponent,
    NgstyleComponent,
    NgifComponent,
    NgswitchComponent,
    NgforComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
