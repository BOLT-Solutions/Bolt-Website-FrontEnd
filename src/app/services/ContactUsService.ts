import { Injectable } from '@angular/core';
import { BaseService } from '../services/shared-services/base-service';
import { API_CONSTANTS } from "../services/shared-services/api-constants";
import { HttpParams, HttpClient } from '@angular/common/http';
import { ApiResponse } from '../models/http-models/api-response';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { ContactRequestModel } from '../models/http-models/ConatctRequestModel';

@Injectable({
  providedIn: 'root'
})

export class ContactUsService extends BaseService {
  constructor(private httpClient: HttpClient) {
    super(httpClient);
  }

  CreateContactRequest(contactRequestToCreate: ContactRequestModel): Observable<ApiResponse> {   // Create Contact Request
    return this.post(API_CONSTANTS.Create_Contact_Reuqest, contactRequestToCreate);
  }

}
