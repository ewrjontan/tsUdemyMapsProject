//capitalized file name is standard practice when exporting classes

import faker from 'faker';
import { Mappable } from './CustomMap';

//implements added to create direct dependency with Mappable
//makes it so every user is required to satisfy the parameters of Mappable
//Not necessary but makes it so TS can point us to the true source of error
export class User implements Mappable{ 
    name: string;
    location: {
        lat: number;
        lng: number;
    };
    color: string = 'red'; //added to show implements

    constructor() {
        this.name = faker.name.firstName();
        this.location= {
            //faker provides lat/lng as strings to must convert to numbers
            lat: parseFloat(faker.address.latitude()),
            lng: parseFloat(faker.address.longitude())
        }
    }

    markerContent(): string {
        return `User Name: ${this.name}`;
    }
}