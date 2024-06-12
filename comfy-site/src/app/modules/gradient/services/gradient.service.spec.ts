import { TestBed } from '@angular/core/testing';

import { GradientService } from './gradient.service';

describe('GradientService', () => {
    let service: GradientService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(GradientService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('should return null on invalid start color', () => {
        const result = service.getGradientColors('', 1);
        expect(result).toBeNull();
    });

    it('should return null on invalid end color', () => {
        const result = service.getGradientColors('#FFFFFF', 1, '');
        expect(result).toBeNull();
    });

    it('should return null on step number lesser than 1', () => {
        const result = service.getGradientColors('#FFFFFF', 0);
        expect(result).toBeNull();
    });
    
    it ('should generate valid gradient colors', () => {
        const result = service.getGradientColors('#164f8c', 3, '#FFFFFF');
        expect(result!.length).toEqual(3);
        expect(result![0]).toEqual('#648ab2');
        expect(result![1]).toEqual('#b1c4d9');
        expect(result![2]).toEqual('#ffffff');
    });
});
