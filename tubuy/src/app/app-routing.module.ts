import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';
import { EditItemComponent } from './edititem/edititem.component';
import { HomeComponent } from './home/home.component';
import { CreateItemComponent } from './createitem/createitem.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { ItemDetailComponent } from './item-detail/item-detail.component';
import { AuthguardService } from './auth-guard/authguard.service';
import { SearchComponent} from './search/search.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'list', component: ListComponent, canActivate: [AuthguardService] },
  { path: 'create', component: CreateItemComponent },
  { path: 'edit/:id', component: EditItemComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: 'item/:id', component: ItemDetailComponent },
  { path: 'search/:name', component: SearchComponent },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthguardService] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
