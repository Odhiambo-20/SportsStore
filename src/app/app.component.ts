// src/app/app.component.ts

import { Component } from '@angular/core';
import { StoreModule } from './store/store.module';
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    standalone: true, // Add standalone: true
    imports: [StoreModule,RouterOutlet]
})


export class AppComponent {
  title = 'SportsStore';
}
