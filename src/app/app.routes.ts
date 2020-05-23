import { RouterModule, Routes } from '@angular/router';

import {
    AboutComponent,
    PortafolioComponent,
    ProductoComponent
} from "./components/index.paginas";
import { SearchComponent } from './components/pages/search/search.component';

const app_routes: Routes = [
    { path: '', component: PortafolioComponent },
    { path: 'home', component: PortafolioComponent },
    { path: 'about', component: AboutComponent },
    { path: 'producto/:id', component: ProductoComponent },
    { path: 'search/:termino', component: SearchComponent },  
    { path: '**', pathMatch: 'full', redirectTo: '' }
];

export const app_routing = RouterModule.forRoot(app_routes, { useHash:true });