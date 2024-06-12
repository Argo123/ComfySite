import { Component, ViewEncapsulation } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./shared/components/header/header.component";
import { BehaviorSubject, Observable } from 'rxjs';
import { ColorFormComponent } from "./shared/components/color-form/color-form.component";
import { ColorGradient } from './modules/gradient/models/color-gradient.model';
import { CommonModule } from '@angular/common';
import { FooterComponent } from "./shared/components/footer/footer.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    encapsulation: ViewEncapsulation.None,
    imports: [RouterOutlet, HeaderComponent, ColorFormComponent, CommonModule, FooterComponent]
})
export class AppComponent {
    private _colorChangedSubject$ = new BehaviorSubject<ColorGradient>({} as ColorGradient);
    
    public title: string = 'comfy-site';
    
    public get colorChangedObservable$(): Observable<ColorGradient> {
        return this._colorChangedSubject$.asObservable();
    }

    public colorChanged(event: ColorGradient): void {
        this._colorChangedSubject$.next(event);
    }
}
