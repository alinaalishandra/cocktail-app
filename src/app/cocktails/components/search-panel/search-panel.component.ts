import { ChangeDetectionStrategy, Component, DestroyRef, inject, signal } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CocktailsService } from '@app/cocktails/services/cocktails.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { tap } from 'rxjs';
import { RandomCocktailModalComponent } from '@app/cocktails/components/random-cocktail-modal/random-cocktail-modal.component';

@Component({
  selector: 'app-search-panel',
  templateUrl: './search-panel.component.html',
  styleUrl: './search-panel.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [InputTextModule, ButtonModule, FormsModule, RandomCocktailModalComponent],
})
export class SearchPanelComponent {
  readonly searchValue = signal<string>('');
  readonly showModal = signal<boolean>(false);

  protected cocktailsService = inject(CocktailsService);
  protected destroyRef = inject(DestroyRef);

  searchCocktails(): void {
    const searchValue = this.searchValue();

    if (searchValue) {
      this.cocktailsService.fetchCocktailsByName(searchValue).pipe(takeUntilDestroyed(this.destroyRef)).subscribe();
    }
  }

  searchRandomCocktail(): void {
    this.cocktailsService
      .getRandomCocktail()
      .pipe(
        takeUntilDestroyed(this.destroyRef),
        tap(() => this.showModal.set(true)),
      )
      .subscribe();
  }
}
