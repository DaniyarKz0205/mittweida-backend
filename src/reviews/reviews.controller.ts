import { Body, Controller, Post } from '@nestjs/common';
import { ReviewsService } from './reviews.service';
import { Review } from './review.interface';

@Controller('reviews')
export class ReviewsController {
    constructor(private readonly reviewsService: ReviewsService) {}

    @Post()
    addReview(@Body() review: Review) {
        return this.reviewsService.saveReview(review);
    }
}
