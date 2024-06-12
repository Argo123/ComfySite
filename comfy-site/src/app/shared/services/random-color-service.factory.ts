import { Injectable } from "@angular/core";
import { ColorServiceSource } from "../models/color-service-source.enum";
import { RandomColorBaseService } from "./random-color-base.service";
import { RandomColorService } from "./random-color.service";
import { HttpClient } from "@angular/common/http";
import { RandomColorApiService } from "./random-color-api.service";

@Injectable({
    providedIn: 'root'
})
export class RandomColorServiceFactory {
    constructor(private _httpClient: HttpClient) { }

    public getColorService(colorServiceSource: ColorServiceSource): RandomColorBaseService {
        switch(colorServiceSource) {
            case ColorServiceSource.Local:
                return new RandomColorService();
            case ColorServiceSource.Api:
                return new RandomColorApiService(this._httpClient);
            default:
                throw 'Unknown service source!';
        }
    }
}