import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterEpisodesComponent } from './character-episodes.component';

describe('CharacterEpisodesComponent', () => {
  let component: CharacterEpisodesComponent;
  let fixture: ComponentFixture<CharacterEpisodesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharacterEpisodesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CharacterEpisodesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
