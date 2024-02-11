import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogModel } from 'src/app/models/common.model';
import { FilesService } from 'src/app/services/files.service';

@Component({
  selector: 'blog-card',
  templateUrl: './blog-card.component.html',
  styleUrls: ['./blog-card.component.css']
})
export class BlogCardComponent {
  
  blogs: BlogModel[] = []

  private dirPath: string = "/assets/blogs-data/";

  public constructor(private route: ActivatedRoute, private fileService: FilesService) { }

  ngOnInit() {
    const blogFilePath = this.dirPath + 'ACTIVE-BLOGS.json';
    this.fileService.getActiveBlogs(blogFilePath).subscribe(blog => {
      blog.activeBlogs.forEach(blogName => {
        this.loadData(blogName);
      });
    });
  }

  private loadData(blogName: string) {
    const filePath = this.dirPath + blogName + '.json';
    this.fileService.getBlogModel(filePath).subscribe(blog => {
      this.blogs.push(blog);
    });
  }

}
