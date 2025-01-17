import { Component } from '@angular/core';
import { MatDialogActions, MatDialogClose, MatDialogContent, MatDialogTitle } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';


@Component({
  selector: 'app-delete-pokemon-confirmation-dialog',
  imports: [MatDialogActions, MatDialogActions, MatDialogClose, MatDialogContent, MatDialogTitle, MatButtonModule],
  templateUrl: './delete-pokemon-confirmation-dialog.component.html',
  styleUrl: './delete-pokemon-confirmation-dialog.component.scss'
})
export class DeletePokemonConfirmationDialogComponent {

}
