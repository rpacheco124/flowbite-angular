import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import {
  FormFieldModule,
} from './components';
import { SidebarService, ThemeService } from './services';
import { SanitizeHtmlPipe } from './pipes';

const SERVICES = [SidebarService, ThemeService];

const PIPES = [SanitizeHtmlPipe];

@NgModule({
  imports: [CommonModule, RouterModule, FormFieldModule],
  exports: [FormFieldModule],
  providers: [SERVICES, PIPES],
})
export class FlowbiteModule {}
