import { Component, EventEmitter, Input, model, output, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  imports: [ FormsModule ],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.scss'
})
export class SearchBarComponent {

  search = model<string>('Initial');
 
  searchButtonClicked = output({alias: "click"});

  searchClick(){
    this.searchButtonClicked.emit()
  }
}
