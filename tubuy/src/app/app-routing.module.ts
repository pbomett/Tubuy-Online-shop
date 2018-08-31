import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';
import { EditissueComponent } from './editissue/editissue.component';
import { HomeComponent } from './home/home.component';
import { CreateissueComponent } from './createissue/createissue.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { ItemDetailComponent } from './item-detail/item-detail.component';
import { AuthguardService } from './auth-guard/authguard.service';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'list', component: ListComponent },
  { path: 'create', component: CreateissueComponent },
  { path: 'edit/:id', component: EditissueComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: 'item/:id', component: ItemDetailComponent },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthguardService] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
