import { Review } from './Review';

export class Restaurant {

    restaurantId: number;
    streetAddress: string;
    city: string;
    zipCode: string;
    picture: Blob;
    ownerId: number;
    culture: string;
    reviews: Array<Review>;
    constructor() {
    }

    public static isNull(rest: Restaurant): boolean {
        return rest.restaurantId === null;
    }

}
