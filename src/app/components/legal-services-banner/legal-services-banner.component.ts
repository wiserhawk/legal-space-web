import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'legal-services-banner',
  templateUrl: './legal-services-banner.component.html',
  styleUrls: ['./legal-services-banner.component.css']
})
export class LegalServicesBannerComponent {

  public constructor(private router: Router) {}

  public goto() {
      this.router.navigateByUrl("/legal-services");
  }

}
