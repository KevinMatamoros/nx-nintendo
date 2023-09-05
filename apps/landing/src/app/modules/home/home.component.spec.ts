import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeComponent } from './home.component';
import { Store, StoreModule } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { GamesFeature } from '@nintendo/shared-store';
import { SharedComponentsModule } from '@nintendo/shared-components';

class StoreMock { 
  select =  jasmine.createSpy()
  dispatch = jasmine.createSpy();
}

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let Store: Store<GamesFeature.GamesState>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeComponent],
      imports: [
        StoreModule.forRoot(provideMockStore),
        SharedComponentsModule
      ],
      providers: [
        {
          provide: Store,
          useClass: StoreMock,
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
