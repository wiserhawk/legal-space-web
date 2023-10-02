import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ActiveServices, ServiceModel } from 'src/app/models/common.model';
import { FilesService } from 'src/app/services/files.service';

@Component({
  selector: 'service-offerings',
  templateUrl: './service-offerings.component.html',
  styleUrls: ['./service-offerings.component.css']
})
export class ServiceOfferingsComponent {

  services: ServiceModel[] = []

  private dirPath: string = "/assets/services-data/";

  public constructor(private route: ActivatedRoute, private fileService: FilesService) { }

  ngOnInit() {
    let availableActiveServices!: ActiveServices;
    const activeServiceFilePath = this.dirPath + 'ACTIVE-SERVICES.json';
    this.fileService.getActiveServices(activeServiceFilePath).subscribe(activeSrv => {
      activeSrv.activeServices.forEach(srvName => {
        this.loadData(srvName);
      });
    });
  }

  private loadData(serviceName: string) {
    const filePath = this.dirPath + serviceName + '.json';
    this.fileService.getServiceModel(filePath).subscribe(srvModel => {
      this.services.push(srvModel);
    });
  }

}
