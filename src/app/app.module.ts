// Angular Modules

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

// Third-party Modules

import { NgScrollbarModule } from 'ngx-scrollbar';

// Global Components

import { AppComponent } from './app.component';
import { ModalComponent } from './modal/modal.component';
import { SidebarComponent } from './sidebar/sidebar.component';

// Page Components

import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';

// Components

import { ProjectComponent } from './project/project.component';
import { TaskComponent } from './task/task.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HomeComponent,
    ProjectsComponent,
    ProjectComponent,
    TaskComponent,
    ModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgScrollbarModule.withConfig({
      visibility: 'hover',
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
