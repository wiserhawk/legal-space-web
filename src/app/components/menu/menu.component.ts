import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { map } from 'rxjs';
import { FilesService } from 'src/app/services/files.service';
import { ActiveBlogs, BlogModel } from '../../models/common.model';

@Component({
  selector: 'menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  activeServices!: string[]
  blogModels: BlogModel[] = [];

  private dirPath: string = "/assets/blogs-data/";
  

  public constructor(private fileService: FilesService) {}

  ngOnInit() {
    const filePath = this.dirPath + "ACTIVE-BLOGS.json";
    this.fileService.getActiveBlogs(filePath).pipe(
      map(blog => {
        return blog.activeBlogs;
      })
    ).subscribe(blogs => {
      blogs.forEach (val => {
        let blogFilePath = this.dirPath + val + '.json';
        this.fileService.getBlogModel(blogFilePath).subscribe(blog => {
          this.blogModels.push(blog);
        });
      })
    });
  }
  

}
