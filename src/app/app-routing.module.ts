import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import{ BodyComponent } from './components/body/body.component';
import {LoginComponent} from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { FeedComponent } from './components/feed/feed.component';
import { EditProfileComponent } from './components/edit-profile/edit-profile.component';
import { FeedCardsComponent } from './components/feed-cards/feed-cards.component';

import { RequestsComponent } from './components/requests/requests.component';
import {ConnectionsComponent }from './components/connections/connections.component';
const routes:Routes=[
   { path: '', component:BodyComponent,
    children: [
      {
        path: 'login', 
        component: LoginComponent,
      },
      {
        path: 'profile',
        component: ProfileComponent,
      },
      {
        path: 'feed',
        component: FeedComponent,
      },
      {
        path: 'edit-profile',
        component: EditProfileComponent,
      },
      {
        path: 'feedcards',
        component: FeedCardsComponent,
      },
      {
        path: 'connection',
        component: ConnectionsComponent,
      },
      {
        path: 'requests',
        component: RequestsComponent,
      },
    ],
    },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
