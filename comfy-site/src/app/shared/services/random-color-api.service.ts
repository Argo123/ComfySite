import { Observable, catchError, map } from "rxjs";
import { RandomColorBaseService } from "./random-color-base.service";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../environments/environment";
import { ColorDto } from "../models/color-dto.model";

export class RandomColorApiService implements RandomColorBaseService {
    private readonly _colorEndpoint: string = 'api/color/getcolor';

    constructor(private _httpClient: HttpClient) { }
    
    public getColor(): Observable<string> {
        return this._httpClient.get<ColorDto>(`${environment.colorMicroserviceBaseUrl}${this._colorEndpoint}`)
            .pipe(
                map((response: ColorDto): string => {
                    if (response.isSuccess) {
                        return response.colorHex;
                    }

                    console.error(response.error);
                    return environment.baseColor;
                }),
                catchError((error: Error): string => {
                    console.error(error);
                    console.warn('For API color generation the ColorMicroservice project must be set up!');

                    return environment.baseColor;
                })
            );
    }
}