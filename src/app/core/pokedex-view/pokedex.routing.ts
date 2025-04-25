import { Route } from "@angular/router";
import { PokedexViewComponent } from "./pokedex-view.component";

export default [
    {
        path: '',
        component: PokedexViewComponent,
    }
] satisfies Route[];