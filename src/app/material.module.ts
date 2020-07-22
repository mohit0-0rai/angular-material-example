import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from '@angular/cdk/layout';

import { MatFormFieldModule,
         MatInputModule,
         MatButtonModule,
         MatSidenavModule,
         MatIconModule,
         MatGridListModule,
         MatCardModule,
         MatRadioModule,
         MatToolbarModule,
         MatDividerModule,
         MatMenuModule,
         MatListModule, 
         MatSlideToggleModule} from '@angular/material'

const Material = [
  LayoutModule,
  MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatInputModule,
  MatGridListModule,
  MatCardModule,
  MatRadioModule,
  MatFormFieldModule,
  MatInputModule,
  MatDividerModule,
  MatMenuModule,
  MatListModule,
  MatSlideToggleModule
]

@NgModule({
  imports: [
    CommonModule,
    Material  
  ],
  exports: [
    Material,
  ]
})
export class MaterialModule { }
