import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BodyComponent } from './components/body/body.component';
import { HttpClientModule } from '@angular/common/http';
import { ProfileComponent } from './components/profile/profile.component';
import { FooterComponent } from './components/footer/footer.component';
import { FeedComponent } from './components/feed/feed.component';
import { EditProfileComponent } from './components/edit-profile/edit-profile.component';
import {LoginComponent} from './components/login/login.component';
import { FeedCardsComponent } from './components/feed-cards/feed-cards.component';
import { ConnectionsComponent } from './components/connections/connections.component';
import { RequestsComponent } from './components/requests/requests.component';
@NgModule({
  declarations: [
    NavbarComponent,
    BodyComponent,
    ProfileComponent,
    FeedComponent,
    EditProfileComponent,
    FooterComponent,
    AppComponent,
    LoginComponent,
    FeedCardsComponent,
    ConnectionsComponent,
    RequestsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
