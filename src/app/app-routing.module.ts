import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {ProductsComponent} from "./products/products.component";
import {ImprintComponent} from "./imprint/imprint.component";
import {PrivacyPolicyComponent} from "./privacy-policy/privacy-policy.component";
import {SustainabilityComponent} from "./sustainability/sustainability.component";
import {ContactComponent} from "./contact/contact.component";

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'produkte', component: ProductsComponent},
  {path: 'imprint-component', component: ImprintComponent},
  {path: 'privacy-policy-component', component: PrivacyPolicyComponent},
  {path: 'nachhaltigkeit', component: SustainabilityComponent},
  {path: 'kontakt', component: ContactComponent},
  {path: '**', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
