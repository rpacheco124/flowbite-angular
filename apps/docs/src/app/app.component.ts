import { Component } from '@angular/core';
import { NavbarComponent, SidebarService } from 'flowbite-angular';

import { components } from './common';

@Component({
  selector: 'flowbite-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [NavbarComponent]
})
export class AppComponent {
  components = components;

  constructor(readonly sidebarService: SidebarService) {}
}
