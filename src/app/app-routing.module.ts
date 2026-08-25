import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './pages/landing/landing.component';
import { WalkieTalkieRentalComponent } from './pages/walkie-talkie-rental/walkie-talkie-rental.component';

const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'walkie-talkie-rental', component: WalkieTalkieRentalComponent },
  { path: 'about', redirectTo: '' },
  { path: 'contact', redirectTo: '' },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    anchorScrolling: 'enabled',
    scrollPositionRestoration: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
