import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { JobFormComponent } from '../job-form/job-form.component';
import { MaterialModule } from '../material/material.module';
import { ServicesRoutingModule } from './services-routing.module';
import { ServicesComponent } from './services.component';



@NgModule({
  declarations: [
    ServicesComponent,
    JobFormComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    ServicesRoutingModule,
  ]
})
export class ServicesModule { }
