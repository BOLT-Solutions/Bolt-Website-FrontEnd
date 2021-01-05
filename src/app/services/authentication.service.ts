import { BaseService } from './shared-services/base-service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiResponse } from '../models/http-models/api-response';
import { API_CONSTANTS } from './shared-services/api-constants';
import { Injectable } from '@angular/core';
import { LoginModel } from '../models/auth-models/LoginModel';
import { RegisterModel } from '../models/auth-models/RegisterModel';
import { JwtHelperService } from "@auth0/angular-jwt";


@Injectable({
    providedIn: 'root'
})
export class AuthenticationService extends BaseService {

    constructor(private httpClient: HttpClient) {
        super(httpClient);
    }

    jwtHelper = new JwtHelperService();

    setToken(token: string) {
        localStorage.setItem("access_token", token);
    }

    getToken(): string {
        const token = localStorage.getItem("access_token");
        if (token) {
            return token;
        }
    }

    removeToken(): void {
        localStorage.removeItem("access_token");
    }

    isAuthenticated(): boolean {
        try {
            const token = this.getToken();
            if (token && !this.jwtHelper.isTokenExpired(token)) {
                return true;
            }
            return false;
        }
        catch {
            return false;
        }
    }

    isInRole(roleName: string): boolean {
        const token = this.getToken();
        if (token) {
            let roles: string[];
            const { role } = this.jwtHelper.decodeToken(token);
            roles = role;
            const res = roles.includes(roleName);
            if (res) {
                return true;
            }
        }
        return false;
    }

    login(model: LoginModel): Observable<ApiResponse> {
      return this.post(API_CONSTANTS.Login, model);
    }

    register(model: RegisterModel): Observable<ApiResponse> {
      return this.post(API_CONSTANTS.Register, model);
    }
}
