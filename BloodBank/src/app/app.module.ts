import { CampaignService } from 'src/app/shared_services/campaign.service';
import { AdminService } from 'src/app/shared_services/admin.service';
import { UserAuthGuard } from './shared_services/user-auth-guard.service';
import { StaffAuthGuard } from './shared_services/staff-auth-guard.service';
import { AdminAuthGuard } from './shared_services/admin-auth-guard.service';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule,Routes} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import {UserService } from './shared_services/user.service';
import {FormsModule} from '@angular/forms';
import { HomeComponent } from './components/home/home.component';
import { HttpModule } from '@angular/http';
import { RegisterUserComponent } from './components/register-user/register-user.component';
import { ListUsersComponent } from './components/list-users/list-users.component';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { LoginStaffComponent } from './components/login-staff/login-staff.component';
import { StaffService } from './shared_services/staff.service';
import { StaffDetailsComponent } from './components/staff-details/staff-details.component';
import { StaffDashboardComponent } from './components/staff-dashboard/staff-dashboard.component';
import { UserCreateUpdateByStaffComponent } from './components/user-create-update-by-staff/user-create-update-by-staff.component';
import { LoginAdminComponent } from './components/login-admin/login-admin.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { AdminDetailsComponent } from './components/admin-details/admin-details.component';
import { ListStaffsComponent } from './components/list-staffs/list-staffs.component';
import { StaffCreateUpdateFormByAdminComponent } from './components/staff-create-update-form-by-admin/staff-create-update-form-by-admin.component';
import { UserDashboardComponent } from './components/user-dashboard/user-dashboard.component';
import { NotificationsComponent } from './components/notifications/notifications.component';
import { CampaignsComponent } from './components/campaigns/campaigns.component';
import { DonationFormComponent } from './components/donation-form/donation-form.component';
import { FooterComponent } from './components/footer/footer.component';
import { CampaignCreateComponent } from './components/campaign-create/campaign-create.component';
import { ListCampaignComponent } from './components/list-campaign/list-campaign.component';
import { ListBloodBankComponent } from './components/list-blood-bank/list-blood-bank.component';
import { BloodBankCUComponent } from './components/blood-bank-cu/blood-bank-cu.component';
import { ListNotificationComponent } from './components/list-notification/list-notification.component';
import { NotificationCUComponent } from './components/notification-cu/notification-cu.component';
import { IndexComponent } from './components/index/index.component';
import { FeedbackFormComponent } from './components/feedback-form/feedback-form.component';
import { BloodBankService } from './shared_services/blood-bank.service';
import { FeedbackService } from './shared_services/feedback.service';
import { NotificationService } from './shared_services/notification.service';
import { CampaignComponent } from './components/campaign/campaign.component';
import { DonorConsentComponent } from './components/donor-consent/donor-consent.component';

const appRoutes:Routes=[
  {path:'home',component:HomeComponent},
  {path:'ud',component:UserDetailsComponent, canActivate:[UserAuthGuard]},
  {path:'ru',component:RegisterUserComponent},
  {path:'listUsers',component:ListUsersComponent, canActivate:[StaffAuthGuard]},
  {path:'fb',component:FeedbackComponent},
  {path:'ls',component:LoginStaffComponent},
  {path:'sd',component:StaffDetailsComponent, canActivate:[StaffAuthGuard]},
  {path:'sdb',component:StaffDashboardComponent, canActivate:[StaffAuthGuard]},
  {path:'cuUser',component:UserCreateUpdateByStaffComponent, canActivate:[StaffAuthGuard]},
  {path:'udb',component:UserDashboardComponent, canActivate:[UserAuthGuard]},
  {path:'adb',component:AdminDashboardComponent, canActivate:[AdminAuthGuard]},
  {path:'la',component:LoginAdminComponent},
  {path:'ad',component:AdminDetailsComponent, canActivate:[AdminAuthGuard]},
  {path:'listStaffs',component:ListStaffsComponent, canActivate:[AdminAuthGuard]},  
  {path:'cuStaff',component:StaffCreateUpdateFormByAdminComponent, canActivate:[AdminAuthGuard]},
  {path:'notis',component:NotificationsComponent, canActivate:[UserAuthGuard]},
  {path:'camps',component:CampaignsComponent, canActivate:[UserAuthGuard]},
  {path:'donForm',component:DonationFormComponent, canActivate:[UserAuthGuard]},
  {path:'createCamp',component:CampaignCreateComponent},
  {path:'listCamps',component:ListCampaignComponent},
  {path:'listBBanks',component:ListBloodBankComponent},
  {path:'cuBBank',component:BloodBankCUComponent},
  {path:'cuNotif',component:NotificationCUComponent},
  {path:'listNotifs',component:ListNotificationComponent},
  {path:'',component:IndexComponent},
  {path:'ff',component:FeedbackFormComponent},
  {path:'camp',component:CampaignComponent},
  {path:'donor',component:DonorConsentComponent}
  
  

  


]

@NgModule({
  declarations: [
    AppComponent,
    UserDetailsComponent,
    HomeComponent,
    RegisterUserComponent,
    ListUsersComponent,
    NavigationBarComponent,
    FeedbackComponent,
    LoginStaffComponent,
    StaffDetailsComponent,
    StaffDashboardComponent,
    UserCreateUpdateByStaffComponent,
    LoginAdminComponent,
    AdminDashboardComponent,
    AdminDetailsComponent,
    ListStaffsComponent,
    StaffCreateUpdateFormByAdminComponent,
    UserDashboardComponent,
    NotificationsComponent,
    CampaignsComponent,
    DonationFormComponent,
    FooterComponent,
    CampaignCreateComponent,
    ListCampaignComponent,
    ListBloodBankComponent,
    BloodBankCUComponent,
    ListNotificationComponent,
    NotificationCUComponent,
    IndexComponent,
    FeedbackFormComponent,
    CampaignComponent,
    DonorConsentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpModule,HttpClientModule
  ],
  providers: [
    UserService,
    StaffService,
    AdminService,
    BloodBankService,
    CampaignService,
    FeedbackService,
    NotificationService,

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }