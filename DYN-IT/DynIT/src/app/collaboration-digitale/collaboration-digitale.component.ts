import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-collaboration-digitale',
  standalone: true,
  imports: [],
  templateUrl: './collaboration-digitale.component.html',
  styleUrls: ['./collaboration-digitale.component.css'],
})
export class COLLABORATIONDIGITALEComponent {
  constructor(
    private router: Router,
    private viewportScroller: ViewportScroller
  ) {}

  goToAccueil() {
    this.router.navigate(['/accueil']).then(() => {
      this.viewportScroller.scrollToPosition([0, 0]);
    });
  }

  goToQuiSommesNous() {
    this.router.navigate(['/qui-sommes-nous']).then(() => {
      this.viewportScroller.scrollToPosition([0, 0]);
    });
  }

  goToCollaborationDigitale() {
    this.router.navigate(['/collaboration-digitale']).then(() => {
      this.viewportScroller.scrollToPosition([0, 0]);
    });
  }

  goT0ServicesCloud() {
    this.router.navigate(['/services-cloud']).then(() => {
      this.viewportScroller.scrollToPosition([0, 0]);
    });
  }
  goToFormationCertification() {
    this.router.navigate(['/formation-et-certification']).then(() => {
      this.viewportScroller.scrollToPosition([0, 0]);
    });
  }
  goToContact() {
    this.router.navigate(['/contact']).then(() => {
      this.viewportScroller.scrollToPosition([0, 0]);
    });
  }
}
