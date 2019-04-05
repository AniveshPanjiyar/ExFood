import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { StudentProfilePage } from './student-profile.page';
import { ComponentsModule } from '../../../components/components.module';
import {PipeModule} from '../../../pipes/pipe.module'

const routes: Routes = [
  {
    path: '',
    component: StudentProfilePage
  },{ path: 'health-form', loadChildren: './health-form/health-form.module#HealthFormPageModule' },
    { path: 'contact-form', loadChildren: './contact-form/contact-form.module#ContactFormPageModule' },
    { path: 'student-form', loadChildren: './student-form/student-form.module#StudentFormPageModule' }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    ComponentsModule,PipeModule

  ],
  declarations: [StudentProfilePage]
})
export class StudentProfilePageModule {}
