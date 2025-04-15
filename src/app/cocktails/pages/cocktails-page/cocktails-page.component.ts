import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SearchPanelComponent } from '@app/cocktails/components/search-panel/search-panel.component';
import { CocktailListComponent } from '@app/cocktails/components/cocktail-list/cocktail-list.component';
import { Toast } from 'primeng/toast';

@Component({
  selector: 'app-cocktails-page',
  templateUrl: './cocktails-page.component.html',
  styleUrl: './cocktails-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [FormsModule, SearchPanelComponent, CocktailListComponent, Toast],
})
export default class CocktailsPageComponent {}
