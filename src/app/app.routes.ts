import { Routes } from '@angular/router';
import { PantallaunoComponent } from './pantallauno/pantallauno.component';
import { PantalladosComponent } from './pantallados/pantallados.component';

export const routes: Routes = [
    {
        path: 'pantallauno',
        component: PantallaunoComponent
    },
    {
        path: 'pantallados',
        component: PantalladosComponent
    }
];
