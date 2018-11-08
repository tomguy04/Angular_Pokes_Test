import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DisplayComponent } from './display/display.component';

const routes: Routes = [
  { path: '' , component: DisplayComponent}
]

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
})

 

export class AppRoutingModule {}