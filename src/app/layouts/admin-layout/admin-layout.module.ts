import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ClipboardModule } from 'ngx-clipboard';

import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AuthGuardService } from '../../guards/access.guard';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { ModalComponent } from 'src/app/modal/modal.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    HttpClientModule,
    NgbModule,
    ClipboardModule
  ],
  providers: [ AuthGuardService ],
  declarations: [
    DashboardComponent,
    UserProfileComponent,
    ModalComponent
  ]
})

export class AdminLayoutModule {}
