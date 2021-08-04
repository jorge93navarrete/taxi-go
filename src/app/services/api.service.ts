import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subscriber } from 'rxjs';
import { environment } from 'src/environments/environment';
import {
  CoUModelResponse,
  DModelResponse,
  RModelResponse,
} from '@core/interfaces/index';

@Injectable({
  providedIn: 'root',
})
export abstract class ApiService<ModelType> {
  public client: HttpClient;

  public api = environment.apiUrl;
  public endpoint = '';
  public module = '';
  public method = '';
  public codeView: string = '';
  protected requested = false;
  protected entities: ModelType[];
  constructor(client: HttpClient) {
    this.client = client;
  }

  getUrl() {
    return `${this.api}/${this.module}/${this.endpoint}/`;
  }

  getSpecificUrl() {
    return `${this.api}/${this.module}/${this.endpoint}/${this.method}/`;
  }

  get(): Observable<any> {
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${this.getToken()}`,
      }),
    };

    return this.client.get(this.getUrl(), options);
  }
  getByID(id: number): Observable<any> {
    return this.client.get<any>(`${this.getUrl()}${id}`, {
      headers: this.getHeaders(),
    });
  }

  getEntities(cache = true) {
    return new Observable<ModelType[]>((observer) => {
      if (this.entities && cache) {
        observer.next(this.entities);
        observer.complete();
      } else if (!this.requested) {
        this.requested = true;
        this.client
          .get<RModelResponse<ModelType>>(this.getUrl(), {
            headers: this.getHeaders(),
          })
          .subscribe((response) => {
            this.entities = response.entities;
            observer.next(this.entities);
            observer.complete();
          });
      }
    });
  }

  create(body: ModelType): Observable<CoUModelResponse<ModelType>> {
    return this.client.post<CoUModelResponse<ModelType>>(this.getUrl(), body, {
      headers: this.getHeaders(),
    });
  }

  update(body: ModelType, id: string): Observable<CoUModelResponse<ModelType>> {
    return this.client.put<CoUModelResponse<ModelType>>(
      `${this.getUrl()}${id}`,
      body,
      {
        headers: this.getHeaders(),
      }
    );
  }

  delete(id: number): Observable<DModelResponse> {
    return this.client.delete<DModelResponse>(this.getUrl() + id, {
      headers: this.getHeaders(),
    });
  }

  getHeaders(): HttpHeaders {
    let headers = new HttpHeaders();
    headers = headers.set('Code-View', this.codeView);
    return headers;
  }

  getToken() {
    let authentication = localStorage.getItem('token');
    if (authentication) {
      authentication = JSON.parse(authentication);
      return authentication;
    }
    return null;
  }

  getModuleUrl() {
    return `${this.api}/${this.module}`;
  }

  errorCallback(err: any, observer: Subscriber<any>) {
    observer.error(err);
    observer.complete();
  }

  get Items() {
    return this.entities;
  }

  clearEntities() {
    this.entities = [];
  }

  get cacheEntites() {
    return this.entities;
  }
}
