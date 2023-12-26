import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
    standalone: true,
    imports: [CommonModule],
    selector: 'flowbite-modal-body',
    template: `
        <div class="p-6 space-y-6">
            <ng-content></ng-content>
        </div>
    `,
})
export class ModalBodyComponent {
}