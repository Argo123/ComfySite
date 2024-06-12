import { Observable } from "rxjs";

export interface RandomColorBaseService {
    getColor(): Observable<string>;
}