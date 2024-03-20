import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'legal-services',
  templateUrl: './legal-services.component.html',
  styleUrls: ['./legal-services.component.css']
})
export class LegalServicesComponent {

  public constructor(private router: Router) {}

  public goto() {
    this.router.navigateByUrl("/consultation-request");
  }

}
