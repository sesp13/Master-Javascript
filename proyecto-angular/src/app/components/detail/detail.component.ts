import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Project } from 'src/app/models/project';
import { Global } from 'src/app/services/global';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
  providers: [ProjectService],
})
export class DetailComponent implements OnInit {
  public project: Project;
  public url: string;
  public confirm: boolean;

  constructor(
    private projectService: ProjectService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.url = Global.url;
    this.confirm = false;
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const id = params.id;
      this.getProject(id);
    });
  }

  getProject(id) {
    this.projectService.getProject(id).subscribe(
      (response) => {
        this.project = response.project;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  deleteProject(id: string) {
    this.projectService.deleteProject(id).subscribe(
      (response) => {
        if (response.project) {
          this.router.navigate(['/proyectos']);
        }
      },
      (error) => {
        console.log(error);
      }
    );
  }

  changeConfirm() {
    this.confirm = !this.confirm;
  }
  
}
