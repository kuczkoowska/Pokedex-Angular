import {Component} from '@angular/core';
import {ShellNavbarComponent} from "@poke-ang/shell/components/shell-navbar/shell-navbar.component";
import {RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss'],
  standalone: true,
  imports: [ShellNavbarComponent, RouterOutlet]
})
export class ShellComponent {
}
