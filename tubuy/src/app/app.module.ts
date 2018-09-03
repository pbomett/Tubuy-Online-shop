import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ItemDetailComponent } from './item-detail/item-detail.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CardholderComponent } from './cardholder/cardholder.component';

import { DataService } from './data-service/data.service';
import { AuthenticationService } from './authenitcation-service/authentication.service';
import { AuthguardService } from './auth-guard/authguard.service';
import { ListComponent } from './list/list.component';
import { CreateItemComponent } from './createitem/createitem.component';
import { EditItemComponent } from './edititem/edititem.component';
import { SlideComponent } from './slide/slide.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { SearchComponent } from './search/search.component';

export const firebaseConfig = {
  apiKey: "AIzaSyC9CJuvmatRf3h3mJBc1X-YA7wIuVuHEeI",
  authDomain: "tubuy-8ecba.firebaseapp.com",
  databaseURL: "https://tubuy-8ecba.firebaseio.com",
  projectId: "tubuy-8ecba",
  storageBucket: "tubuy-8ecba.appspot.com",
  messagingSenderId: "1055565933051"
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ItemDetailComponent,
    HeaderComponent,
    FooterComponent,
    CardholderComponent,
    ListComponent,
    CreateItemComponent,
    EditItemComponent,
    SlideComponent,
    SignupComponent,
    LoginComponent,
    ProfileComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpModule,
    AngularFireModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireAuthModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [DataService, AuthenticationService, AuthguardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
