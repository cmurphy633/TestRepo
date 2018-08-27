import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {BugService} from './services/bug_service';
import {UserService} from './services/user_service';
import {FormsModule} from '@angular/forms';
import { BugViewerComponent } from './components/bugs/bug-viewer/bug-viewer.component';
import { UserViewerComponent } from './components/users/user-viewer/user-viewer.component';
import { BugTableComponent } from './components/bugs/bug-table/bug-table.component';
import { BugDetailComponent } from './components/bugs/bug-detail/bug-detail.component';
import { BugFormComponent } from './components/bugs/bug-form/bug-form.component';
import { UserTableComponent } from './components/users/user-table/user-table.component';
import {RouterModule} from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import {AppComponent} from './app.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';

@NgModule({
  declarations: [
    BugViewerComponent,
    BugTableComponent,
    BugDetailComponent,
    BugFormComponent,
    UserTableComponent,
    UserViewerComponent,
    LoginComponent,
    AppComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      {path: 'bugs', component: BugViewerComponent},
      {path: 'bugs/:id', component: BugDetailComponent},
      {path: 'home', component: DashboardComponent},
      {path: 'users', component: UserViewerComponent},
      {path: 'login', component: LoginComponent},
      {path: '', redirectTo: 'login', pathMatch: 'full'},
      {path: '**', redirectTo: 'login', pathMatch: 'full'}
    ])
  ],
  providers: [
    BugService,
    UserService],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
}




