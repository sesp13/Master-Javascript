import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/models/project';
import { Global } from 'src/app/services/global';
import { ProjectService } from 'src/app/services/project.service';
import { UploadService } from 'src/app/services/upload.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
  providers: [ProjectService, UploadService],
})
export class CreateComponent implements OnInit {
  public title: string;
  public project: Project;
  public status: string;
  public filesToUpload: File[];

  constructor(
    private projectService: ProjectService,
    private uploadService: UploadService
  ) {
    this.title = 'Crear proyecto';
    // this.project = new Project(
    //   '',
    //   '',
    //   '',
    //   '',
    //   new Date().getFullYear(),
    //   '',
    //   ''
    // );
    this.project = new Project(
      '',
      'Mi primer proyecto',
      'descripcion',
      'categoría',
      2021,
      'Lenguas',
      ''
    );
  }

  ngOnInit(): void {}

  onSubmit(form: any): void {
    this.projectService.saveProject(this.project).subscribe(
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
                form.reset();
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
