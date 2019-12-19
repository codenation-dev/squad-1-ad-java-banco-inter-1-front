import { Routes } from '@angular/router';
import { AuthGuardService } from '../../guards/access.guard';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';	


export const AdminLayoutRoutes: Routes = [
    {   
        path: 'dashboard', 
        component: DashboardComponent,
        canActivate: [AuthGuardService]
     },
    { 
        path: 'user-profile',   
        component: UserProfileComponent,
        canActivate: [AuthGuardService]
     },
    // { path: 'tables',         component: TablesComponent },
];
