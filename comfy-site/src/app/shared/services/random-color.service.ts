import { Observable, of } from 'rxjs';
import { RandomColorBaseService } from './random-color-base.service';

export class RandomColorService implements RandomColorBaseService {
    public getColor(): Observable<string> {
        return of(`#${(Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0')}`);
    }
}
