import { Injectable } from '@angular/core';
import { Global } from './global';

@Injectable()
export class UploadService {
  public url: string;
  constructor() {
    this.url = Global.url;
  }

  makeFileRequest(url: string, params: string[], files: File[], name: string) {
    return new Promise((resolve, reject) => {
      const formData: FormData = new FormData();
      const xhr = new XMLHttpRequest();

      for (const file of files) formData.append(name, file, file.name);

      //Preparar petición ajax
      xhr.onreadystatechange = () => {
        if (xhr.readyState == 4) {
          if (xhr.status == 200) {
            resolve(xhr.response);
          } else {
            reject(xhr.response);
          }
        }
      };

      //Realizar peticion
      xhr.open('POST', url, true);
      xhr.send(formData);
    });
  }
}
