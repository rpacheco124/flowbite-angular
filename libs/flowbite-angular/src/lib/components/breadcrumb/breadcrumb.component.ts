import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'flowbite-breadcrumb',
  template: `
    <nav aria-label="Breadcrumb">
      <ol class="flex items-center">
        <ng-content></ng-content>
      </ol>
    </nav>
  `,
})
export class BreadcrumbComponent {}
