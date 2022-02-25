import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DispalyComponent } from './dispaly/dispaly.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  { path: '', component: SearchComponent },
  { path: 'display/:id', component: DispalyComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }