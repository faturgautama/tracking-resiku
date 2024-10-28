import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';
import { BehaviorSubject, catchError, map, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class HttpService {

    ShowLoading$ = new BehaviorSubject<boolean>(false);

    constructor(
        private _httpClient: HttpClient,
        private _messageService: MessageService,
    ) { }

    getRequest(url: string): Observable<any> {
        this.ShowLoading$.next(true);

        return this._httpClient
            .get<any>(url, {
                headers: {
                    'x-api-key': '671eed9182cca6b553f4fcf5'
                }
            })
            .pipe(
                map((result) => {
                    // ** Error 200
                    if (!result.status) {
                        this.handleError200(result.message);
                    }

                    this.ShowLoading$.next(false);
                    return result;
                }),
                catchError((error) => {
                    this.ShowLoading$.next(false);
                    this.handleError(error);
                    throw error;
                })
            )
    }

    postRequest(url: string, payload: any): Observable<any> {
        this.ShowLoading$.next(true);

        return this._httpClient
            .post<any>(url, payload, {
                headers: {
                    'x-api-key': '671eed9182cca6b553f4fcf5'
                }
            })
            .pipe(
                map((result) => {
                    // ** Error 200
                    if (!result.status) {
                        this.handleError200(result.message);
                    }

                    this.ShowLoading$.next(false);
                    return result;
                }),
                catchError((error) => {
                    this.ShowLoading$.next(false);
                    this.handleError(error);
                    throw error;
                })
            )
    }

    putRequest(url: string, payload: any): Observable<any> {
        this.ShowLoading$.next(true);

        return this._httpClient
            .put<any>(url, payload)
            .pipe(
                map((result) => {
                    // ** Error 200
                    if (!result.status) {
                        this.handleError200(result.message);
                    }

                    this.ShowLoading$.next(false);
                    return result;
                }),
                catchError((error) => {
                    this.ShowLoading$.next(false);
                    this.handleError(error);
                    throw error;
                })
            )
    }

    deleteRequest(url: string): Observable<any> {
        this.ShowLoading$.next(true);

        return this._httpClient
            .delete<any>(url)
            .pipe(
                map((result) => {
                    // ** Error 200
                    if (!result.status) {
                        this.handleError200(result.message);
                    }

                    this.ShowLoading$.next(false);
                    return result;
                }),
                catchError((error) => {
                    this.ShowLoading$.next(false);
                    this.handleError(error);
                    throw error;
                })
            )
    }

    private handleError200(message: string[]) {
        this._messageService.clear();

        for (const item of message) {
            this._messageService.add({ severity: 'error', summary: 'Oops', detail: item });
        }
    }

    private handleError(error: HttpErrorResponse) {
        this._messageService.clear();

        for (const item of error.error.message) {
            this._messageService.add({ severity: 'error', summary: 'Oops', detail: item });
        }
    }
}
