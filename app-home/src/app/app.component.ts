import { Component } from '@angular/core';
import { singleSpaPropsSubject } from '../single-spa/single-spa-props';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-home-root',
    imports: [CommonModule],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'app-home';
  singleSpaProps$ = singleSpaPropsSubject.asObservable();
}
