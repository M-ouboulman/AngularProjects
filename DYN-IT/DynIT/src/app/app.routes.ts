import { Routes } from '@angular/router';

import { AccueilComponent } from './accueil/accueil.component';
import { QUISOMMESNOUSComponent } from './qui-sommes-nous/qui-sommes-nous.component';
import { COLLABORATIONDIGITALEComponent } from './collaboration-digitale/collaboration-digitale.component';
import { SERVICESCLOUDComponent } from './services-cloud/services-cloud.component';
import { FORMATIONETCERTIFICATIONComponent } from './formation-et-certification/formation-et-certification.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
  { path: '', redirectTo: '/accueil', pathMatch: 'full' },
  { path: 'accueil', component: AccueilComponent },
  { path: 'qui-sommes-nous', component: QUISOMMESNOUSComponent },
  { path: 'collaboration-digitale', component: COLLABORATIONDIGITALEComponent },
  { path: 'services-cloud', component: SERVICESCLOUDComponent },
  {
    path: 'formation-et-certification',
    component: FORMATIONETCERTIFICATIONComponent,
  },
  { path: 'contact', component: ContactComponent },
];
