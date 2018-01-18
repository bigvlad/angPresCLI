import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeroChildComponent } from './hero-child-component/hero-child-component.component';
import { HeroParentComponent } from './hero-parent-component/hero-parent-component.component';
import { SiblingComponentComponent } from './sibling-component/sibling-component.component';
import { MsgServiceService } from './msg-service.service';


@NgModule({
  declarations: [
    AppComponent,
    HeroChildComponent,
    HeroParentComponent,
    SiblingComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [MsgServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
