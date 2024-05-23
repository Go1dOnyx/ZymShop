import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home';
import { StoreComponent } from './store';
import { VideoComponent } from './videos';
import { AboutComponent } from './about';

//list of possible routes for my navigation.
const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'store', component: StoreComponent},
    {path: 'videos', component: VideoComponent},
    {path: 'about', component: AboutComponent},

    //otherwise - error **
];

//instantiating a Router class globally and storing possible routes through the forRoots method.
export const navRoutes = RouterModule.forRoot(routes);