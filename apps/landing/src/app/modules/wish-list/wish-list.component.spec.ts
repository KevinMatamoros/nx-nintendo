import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WishListComponent } from './wish-list.component';
import { GamesFeature } from '@nintendo/shared-store';
import { Store, StoreModule } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';

class StoreMock { 
  select =  jasmine.createSpy()
  dispatch = jasmine.createSpy();
}

describe('WishListComponent', () => {
  let component: WishListComponent;
  let fixture: ComponentFixture<WishListComponent>;
  let Store: Store<GamesFeature.GamesState>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WishListComponent],
      imports: [
        StoreModule.forRoot(provideMockStore),
      ],
      providers: [
        {
          provide: Store,
          useClass: StoreMock,
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(WishListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
