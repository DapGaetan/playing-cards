import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletePokemonConfirmationDialogComponent } from './delete-pokemon-confirmation-dialog.component';

describe('DeletePokemonConfirmationDialogComponent', () => {
  let component: DeletePokemonConfirmationDialogComponent;
  let fixture: ComponentFixture<DeletePokemonConfirmationDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeletePokemonConfirmationDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeletePokemonConfirmationDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
