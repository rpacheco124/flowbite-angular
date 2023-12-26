import { Component } from '@angular/core';

import { components } from '../../common';
import { RouterModule } from '@angular/router';
import { NgClass } from '@angular/common';

@Component({
  standalone: true,
  imports: [RouterModule, NgClass],
  selector: 'flowbite-dashboard-page',
  templateUrl: './dashboard-page.component.html',
})
export class DashboardPageComponent {
  components = components.filter((component) => !!component.card);
}
