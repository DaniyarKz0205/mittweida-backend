import { IsString, IsNumber } from 'class-validator';

export class ReviewDto {
    @IsString()
    routeId!: string;

    @IsString()
    review!: string;

    @IsNumber()
    stars!: number;
}
