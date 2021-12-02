import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import {MatToolbarModule} from '@angular/material/toolbar';

// import '@angular/material/prebuilt-themes/deeppurple-amber.css';

@NgModule({
  imports: [
    CommonModule, 
    MatToolbarModule
  ],
  declarations: [
    HeaderComponent,
    
  ],
  exports: [
    HeaderComponent
  ]
})
export class StoreUiSharedModule {}
