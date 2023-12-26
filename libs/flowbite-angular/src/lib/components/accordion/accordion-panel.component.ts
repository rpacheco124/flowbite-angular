import { Component, Input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'flowbite-accordion-panel',
  template: ` <div>
    <ng-content></ng-content>
  </div>`,
})
export class AccordionPanelComponent {
  @Input() open?: boolean;

  setOpen(open: boolean) {
    this.open = open;
  }
}
