import { animate, keyframes, state, style, transition, trigger } from "@angular/animations";

export const GradientAnimations = {
    gradientTransition: trigger('gradientTransition', [
        state('old', style({ fill: '{{ oldColor }}' }), { params: { oldColor: '#FFFFFF' }}),
        state('new', style({ fill: '{{ newColor }}' }), { params: { newColor: '#FFFFFF' }}),
        transition('old => new', [
            animate('1s', keyframes([
                style({ fill: '{{ oldColor }}', offset: 0 }),
                style({ fill: '{{ newColor }}', offset: 0.8 })
            ]))
        ], { params: { newColor: '#FFFFFF', oldColor: '#FFFFFF' }})
    ])
}