export interface ColorDto {
    colorHex: string;
    error?: string;
    validationFailures?: string[];
    isSuccess: boolean;
}