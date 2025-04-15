import type { OnInit } from '@angular/core';
import { ChangeDetectionStrategy, Component, DestroyRef, inject, signal } from '@angular/core';
import { CardModule } from 'primeng/card';
import { CocktailsService } from '@app/cocktails/services/cocktails.service';
import { LoaderComponent } from '@app/shared/components/loader/loader.component';
import type { Cocktail } from '@app/cocktails/utils/interfaces';
import { tap } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cocktail-list',
  templateUrl: './cocktail-list.component.html',
  styleUrl: './cocktail-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CardModule, LoaderComponent],
})
export class CocktailListComponent implements OnInit {
  readonly cocktails = signal<Array<Cocktail>>([]);

  protected cocktailsService = inject(CocktailsService);
  protected destroyRef = inject(DestroyRef);
  protected router = inject(Router);
  protected route = inject(ActivatedRoute);

  ngOnInit(): void {
    this.cocktailsService.foundDrinks$
      .pipe(
        takeUntilDestroyed(this.destroyRef),
        tap(res => this.cocktails.set(res)),
      )
      .subscribe();
  }

  goToCard(id: string): void {
    void this.router.navigate([id], { relativeTo: this.route });
  }
}
