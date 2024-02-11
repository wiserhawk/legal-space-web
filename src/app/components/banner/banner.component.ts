import { Component } from '@angular/core';

@Component({
  selector: 'banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent {

  public current = 1;

  public constructor() {}

  ngAfterViewInit(){
    setInterval(() => {
      this.current = (this.current == 3) ? 1 : this.current+1;
    }, 5000);
  }

}
