import { Component } from '@angular/core';
import { AppConstants } from '../../constants/app.constant';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [],
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.scss'
})
export class NotFoundComponent {
  invalidText = AppConstants.invalidUrlMessage;
}
