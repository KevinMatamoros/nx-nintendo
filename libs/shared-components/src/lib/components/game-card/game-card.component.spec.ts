import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GameCardComponent } from './game-card.component';

describe('GameCardComponent', () => {
  let component: GameCardComponent;
  let fixture: ComponentFixture<GameCardComponent>;
  let compiled: any;


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GameCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GameCardComponent);
    component = fixture.componentInstance;
    component.game = {
      id: '1',
      image: '',
      name: 'Test element',
      date: new Date().toString(),
      price: 2500,
      platform: 'Nintendo switch'
    }
    compiled = fixture.debugElement.nativeElement;
    fixture.detectChanges();
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });

  it('should have title value of "Test element"', () => {
    expect(compiled.querySelector('h1').textContent).toContain('Test element');
  });

  it(`should have date value of ${new Date().toString()}`, () => {
    expect(compiled.querySelector('h6').textContent).toContain(new Date().toString());
  });

  it(`should have price value of "$2,500.00"`, () => {
    expect(compiled.querySelector('h2').textContent).toContain('$2,500.00');
  });

  it(`should have platform value of "Nintendo switch"`, () => {
    expect(compiled.querySelector('h4').textContent).toContain('Nintendo switch');
  });

});
