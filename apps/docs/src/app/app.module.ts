import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FlowbiteModule } from 'flowbite-angular';
import { ScullyLibModule } from '@scullyio/ng-lib';

import 'prismjs';
import 'prismjs/components/prism-xml-doc';
import 'prismjs/components/prism-typescript';

import { AppComponent } from './app.component';
import { RoutingModule } from './routing/routing.module';
import {
  FormsPageComponent,
  InputFieldPageComponent,
  FloatingLabelPageComponent,
} from './pages';

const PAGES_COMPONENTS = [
  FormsPageComponent,
  InputFieldPageComponent,
  FloatingLabelPageComponent,
];

@NgModule({
  declarations: [AppComponent, PAGES_COMPONENTS],
  imports: [BrowserModule, RoutingModule, FlowbiteModule, ScullyLibModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
