import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedComponentsModule } from '@nintendo/shared-components';

@Component({
  standalone: true,
  selector: 'nintendo-root',
  imports: [RouterModule, SharedComponentsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
}
