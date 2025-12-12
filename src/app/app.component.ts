import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DetailComponent } from "./detail/detail.component";
import { FormsModule } from '@angular/forms';
import { ConfirmAndReviewComponent } from "./confirm-and-review/confirm-and-review.component";
import { NavbarComponent } from "./navbar/navbar.component";
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DetailComponent, FormsModule, ConfirmAndReviewComponent, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'HomeWork2';
}
