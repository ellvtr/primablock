import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Contributor } from './contributor';
import { CONTRIBUTORS } from './contributors-mock';

@Injectable({
  providedIn: 'root'
})
export class ContributorsService {

  constructor() { }

  getAll(): Observable<Contributor[]> {
    return of(CONTRIBUTORS);
  }

}
