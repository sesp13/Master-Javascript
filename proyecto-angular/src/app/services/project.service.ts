import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Project } from '../models/project';
import { Global } from './global';

@Injectable()
export class ProjectService {
  public url: string;
  public jsonHeaders: HttpHeaders;

  constructor(private _http: HttpClient) {
    this.url = Global.url;
    this.jsonHeaders = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Access-Control-Allow-Origin', '*');
  }

  getProject(id): Observable<any> {
    return this._http.get(`${this.url}project/${id}`, {
      headers: this.jsonHeaders,
    });
  }

  getProjects(): Observable<any> {
    return this._http.get(`${this.url}projects`, { headers: this.jsonHeaders });
  }

  saveProject(project: Project): Observable<any> {
    const params = JSON.stringify(project);
    return this._http.post(`${this.url}save-project`, params, {
      headers: this.jsonHeaders,
    });
  }

  updateProject(project: Project): Observable<any> {
    const params: string = JSON.stringify(project);
    return this._http.put(`${this.url}project/${project._id}`, params, {
      headers: this.jsonHeaders,
    });
  }

  deleteProject(id: string): Observable<any> {
    return this._http.delete(`${this.url}project/${id}`, {
      headers: this.jsonHeaders,
    });
  }
}
