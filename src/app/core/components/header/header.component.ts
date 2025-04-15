import type { OnInit } from '@angular/core';
import { ChangeDetectionStrategy, Component, DestroyRef, inject, signal } from '@angular/core';
import type { Event } from '@angular/router';
import { NavigationEnd, Router, RouterLink } from '@angular/router';
import { Button } from 'primeng/button';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { tap } from 'rxjs';

@Component({
  selector: 'app-header',
  imports: [RouterLink, Button],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements OnInit {
  readonly isSearchCocktailsPage = signal(false);
  protected router = inject(Router);
  protected destroyRef = inject(DestroyRef);

  ngOnInit(): void {
    this.router.events.pipe(takeUntilDestroyed(this.destroyRef), tap(this.handleRouterEvent.bind(this))).subscribe();
  }

  handleRouterEvent(event: Event): void {
    if (event instanceof NavigationEnd) {
      this.isSearchCocktailsPage.set(this.router.routerState.snapshot.url === '/cocktails');
    }
  }
}
