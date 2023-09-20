import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FilesService } from 'src/app/services/files.service';
import { ServiceModel } from '../../models/common.model';

@Component({
  selector: 'service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent {

  model!: ServiceModel

  private dirPath: string = "/assets/services-data/";

  public constructor(private route: ActivatedRoute, private fileService: FilesService) { }

  ngOnInit() {
    let serviceName;
    this.route.params.subscribe( params => serviceName = params['name'] ); 
    const fullPath = this.dirPath + serviceName + '.json';
    this.fileService.getServiceModel(fullPath).subscribe(srvModel => {
      this.model = srvModel
    });
  }

}
