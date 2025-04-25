import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./shell/shell.component').then(m => m.ShellComponent),
        children: [
            {
                path: '',
                loadChildren: () => import('@poke-ang/core/home-view/home.routing')
            },
            {
                path: 'pokedex',
                loadChildren: () => import('@poke-ang/core/pokedex-view/pokedex.routing')
            }
           
        ]
    },
    {
        path: '**',
        redirectTo: '/'
    },
];
