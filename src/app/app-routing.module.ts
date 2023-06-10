import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssetIComponent } from './asset-i/asset-i.component';

const routes: Routes = [
  {path:'', component: AssetIComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
