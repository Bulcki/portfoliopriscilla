import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from 'src/app/home/home.component';
import { CareUComponent } from './care-u/care-u.component';
import { DressMeSlowComponent } from './dress-me-slow/dress-me-slow.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'care-u', component: CareUComponent},
  { path: 'dress-me-slow', component: DressMeSlowComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
