import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-status',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.scss'],
})
export class StatusComponent {
  date = new Date();
  userAgent = window.navigator.userAgent;
  language = window.navigator.language;
  cookie = navigator.cookieEnabled;
  logical = window.navigator.hardwareConcurrency;
  point = navigator.maxTouchPoints;
}
