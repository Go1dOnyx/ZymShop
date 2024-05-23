import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home';
import { StoreComponent } from './store';
import { VideoComponent } from './videos';
import { AboutComponent } from './about';

const routes: Routes = [
    {path: 'Home', component: HomeComponent},
    {path: 'Store', component: StoreComponent},
    {path: 'Video', component: VideoComponent},
    {path: 'About', component: AboutComponent},

    //otherwise - error **
];

export const navRoutes = RouterModule.forRoot(routes);