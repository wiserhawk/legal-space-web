import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { map } from 'rxjs';
import { FilesService } from 'src/app/services/files.service';
import { ActiveServices, ServiceModel } from '../../models/common.model';

@Component({
  selector: 'menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  activeServices!: string[]
  serviceModels: ServiceModel[] = [];

  private dirPath: string = "/assets/services-data/";
  

  public constructor(private fileService: FilesService) {}

  ngOnInit() {
    const filePath = this.dirPath + "ACTIVE-SERVICES.json";
    this.fileService.getActiveServices(filePath).pipe(
      map(srv => {
        return srv.activeServices;
      })
    ).subscribe(services => {
      services.forEach (val => {
        let serviceFilePath = this.dirPath + val + '.json';
        this.fileService.getServiceModel(serviceFilePath).subscribe(srvModel => {
          this.serviceModels.push(srvModel);
        });
      })
    });
  }
  

}
