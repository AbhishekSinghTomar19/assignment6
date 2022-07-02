import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DetailsOfEmployeeComponent } from './details-of-employee/details-of-employee.component';
import { DetailsCompanyComponent } from './details-company/details-company.component';
import { NewEmployeeComponent } from './new-employee/new-employee.component';
import { AboutEmployeeComponent } from './about-employee/about-employee.component';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';


const appRoutes: Routes = [
  {
    path: 'Info', component: DetailsOfEmployeeComponent,
  },
  {
    path: 'new', component: NewEmployeeComponent
  },
  {
    path:'detail',component:DetailsCompanyComponent
  },
  {
    path: 'about/:Id/:Employee/:Designation', component: AboutEmployeeComponent
  }

]

@NgModule({
  declarations: [
    AppComponent,
    DetailsOfEmployeeComponent,
    DetailsCompanyComponent,
    NewEmployeeComponent,
    AboutEmployeeComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
