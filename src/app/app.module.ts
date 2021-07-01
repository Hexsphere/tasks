import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AuthModule } from '@auth0/auth0-angular';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ModalComponent } from './components/modal/modal.component';
import { ProjectComponent } from './components/project/project.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { TaskComponent } from './components/task/task.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HomeComponent } from './pages/home/home.component';
import { ProjectsComponent } from './pages/projects/projects.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HomeComponent,
    ProjectsComponent,
    ProjectComponent,
    TaskComponent,
    ModalComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,

    NgScrollbarModule.withConfig({
      visibility: 'hover',
    }),

    AuthModule.forRoot({
      domain: 'hexsphere.us.auth0.com',
      clientId: 'muF3WUdhqGd0wHwg6gU7hVbZhqIxT5CF',
    }),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
