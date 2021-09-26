import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Project } from 'src/app/models/project';
import { Global } from 'src/app/services/global';
import { ProjectService } from 'src/app/services/project.service';
import { UploadService } from 'src/app/services/upload.service';

@Component({
  selector: 'app-edit',
  templateUrl: '../create/create.component.html',
  styleUrls: ['./edit.component.css'],
  providers: [ProjectService, UploadService],
})
export class EditComponent implements OnInit {
  public url: string;
  public title: string;
  public project: Project;
  public status: string;
  public filesToUpload: File[];

  constructor(
    private projectService: ProjectService,
    private uploadService: UploadService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.title = 'Editar proyecto';
    this.url = Global.url;
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

  onSubmit(form: any) {
    this.projectService.updateProject(this.project).subscribe(
      (response) => {
        if (response.project) {
          //Si hay imagen subirla
          if (this.filesToUpload && this.filesToUpload.length > 0) {
            //Subir imagen
            this.uploadService
              .makeFileRequest(
                `${Global.url}upload-image/${response.project._id}`,
                [],
                this.filesToUpload,
                'image'
              )
              .then((response) => {
                this.status = 'success';
                this.filesToUpload = [];
              })
              .catch((error) => console.log(error));
          } else {
            this.status = 'success';
            this.filesToUpload = [];
          }
          //Set project
          this.project = response.project;
        } else {
          this.status = 'failed';
        }
      },
      (error) => {
        console.log(error);
      }
    );
  }

  fileChangeEvent(fileInput: any): void {
    this.filesToUpload = fileInput.target.files;
  }
}
