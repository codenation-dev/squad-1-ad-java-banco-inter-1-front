import { Routes } from '@angular/router';
import { AuthGuardService } from '../../guards/access.guard';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';

export const AdminLayoutRoutes: Routes = [
    {   
        path: 'dashboard', 
        component: DashboardComponent,
        canActivate: [AuthGuardService]
     },
    // { path: 'user-profile',   component: UserProfileComponent },
    // { path: 'tables',         component: TablesComponent },
];
