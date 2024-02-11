import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FilesService } from 'src/app/services/files.service';
import { BlogModel } from '../../models/common.model';

@Component({
  selector: 'blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent {

  model!: BlogModel

  private dirPath: string = "/assets/blogs-data/";

  public constructor(private route: ActivatedRoute, private fileService: FilesService) { }

  ngOnInit() {
    let blogName;
    this.route.params.subscribe( params => blogName = params['name'] ); 
    const fullPath = this.dirPath + blogName + '.json';
    this.fileService.getBlogModel(fullPath).subscribe(blog => {
      this.model = blog
    });
  }

}
