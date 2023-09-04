import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { SharedComponentsModule } from '@nintendo/shared-components';
import { GamesFeature, GamesSelectors } from '@nintendo/shared-store';

@Component({
  standalone: true,
  imports: [RouterModule, SharedComponentsModule],
  selector: 'nintendo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit{
  title = 'wish-list';

  constructor(private store: Store<GamesFeature.GamesState>) { }

  ngOnInit() {
    this.store.pipe(select(GamesSelectors.selectGames)).subscribe(c => console.log(c));
  }
}
