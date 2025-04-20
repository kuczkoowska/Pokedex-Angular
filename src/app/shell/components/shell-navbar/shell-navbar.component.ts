import { ChangeDetectionStrategy, Component, signal, WritableSignal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { IMenuItem } from './models/i-menu-item';
import { MENU_ITEMS } from '@poke-ang/shell/const/menu-item';

@Component({
  selector: 'app-shell-navbar',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './shell-navbar.component.html',
  styleUrl: './shell-navbar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShellNavbarComponent {
  public readonly MENU_ITEMS: WritableSignal<IMenuItem[]> = signal(MENU_ITEMS);
}
