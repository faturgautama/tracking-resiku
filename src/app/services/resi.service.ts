import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.prod';
import { HttpService } from './http.service';

@Injectable({
    providedIn: 'root'
})
export class ResiService {

    constructor(
        private _httpService: HttpService
    ) { }

    getAllCouriers() {
        return this._httpService.getRequest(`${environment.webApiUrl}/couriers`)
    }

    tracking(tracking_number: string, courier_code: string) {
        return this._httpService.postRequest(`${environment.webApiUrl}/v2/trackings`, {
            tracking_number: tracking_number,
            courier_code: courier_code
        })
    }
}
