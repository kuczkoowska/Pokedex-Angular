import { IMenuItem } from '@poke-ang/shell/components/shell-navbar/models/i-menu-item';

export const MENU_ITEMS: IMenuItem[] = [
    {
        icon: null,
        caption: 'Home',
        route: '',
        blocked: false
    },
    {
        icon: null,
        caption: 'Pokedex',
        route: '/pokedex',
        blocked: false
    },
    {
        icon: null,
        caption: 'Favorites',
        route: '/favorites',
        blocked: true
    },
]