import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'documentations-banner',
  templateUrl: './documentations-banner.component.html',
  styleUrls: ['./documentations-banner.component.css']
})
export class DocumentationsBannerComponent {

  public constructor(private router: Router) {}

  public goto() {
      this.router.navigateByUrl("/documentations");
  }

}
