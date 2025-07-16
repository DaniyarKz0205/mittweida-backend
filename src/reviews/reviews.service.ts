import { Injectable } from '@nestjs/common';
import { Review } from './review.interface';
import * as fs from 'fs';
import * as path from 'path';

const FILE_PATH = path.join(__dirname, '..', '..', 'data', 'reviews.json');

@Injectable()
export class ReviewsService {
    saveReview(review: Review): string {
        const newReview = {
            ...review,
            timestamp: new Date().toISOString(),
        };

        let existing: Review[] = [];
        if (fs.existsSync(FILE_PATH)) {
            const content = fs.readFileSync(FILE_PATH, 'utf-8');
            existing = JSON.parse(content);
        }

        existing.push(newReview);

        fs.writeFileSync(FILE_PATH, JSON.stringify(existing, null, 2));

        return 'Review saved';
    }
}
