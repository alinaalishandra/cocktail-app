import type { OnInit } from '@angular/core';
import { ChangeDetectionStrategy, Component, computed, DestroyRef, inject, model, signal } from '@angular/core';
import { CocktailsService } from '@app/cocktails/services/cocktails.service';
import type { Cocktail } from '@app/cocktails/utils/interfaces';
import { tap } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Router } from '@angular/router';
import { DialogModule } from 'primeng/dialog';
import CocktailDetailPageComponent from '@app/cocktails/pages/cocktail-detail-page/cocktail-detail-page.component';

@Component({
  selector: 'app-cocktail-modal',
  templateUrl: './random-cocktail-modal.component.html',
  styleUrl: './random-cocktail-modal.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [DialogModule, CocktailDetailPageComponent],
})
export class RandomCocktailModalComponent implements OnInit {
  readonly visible = model(false);
  readonly cocktail = signal<Cocktail | null>(null);
  readonly dialogHeader = computed(() => this.cocktail()?.strDrink ?? 'Карточка коктейля');

  protected cocktailsService = inject(CocktailsService);
  protected destroyRef = inject(DestroyRef);
  protected router = inject(Router);

  ngOnInit(): void {
    this.cocktailsService.randomDrink$
      .pipe(
        takeUntilDestroyed(this.destroyRef),
        tap(res => res && this.cocktail.set(res)),
      )
      .subscribe();
  }
}
