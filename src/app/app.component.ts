// src/app/app.component.ts

import { Component } from '@angular/core';
import { StoreComponent } from './store/store.component';

@Component({
    selector: 'app-root',
    template: '<app-store></app-store>',
    standalone: true,
    imports: [StoreComponent]
})
export class AppComponent { }
