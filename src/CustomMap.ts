
// imported User and Company to provide types for within methods

/*not needed since no longer called in addMarker
import { User } from './User';
import { Company } from './Company';
*/

//instructions to every other class on 
//on how they can be an argument to 'addMarker' ie best method
export interface Mappable {//added export so it can be imported and used as a type
    location: {
        lat: number;
        lng: number;
    };
    markerContent(): string;
    color: string;
}

export class CustomMap {
    private googleMap: google.maps.Map;

    constructor(divId: string) {
        this.googleMap = new google.maps.Map(document.getElementById(divId), {
            zoom: 1,
            center: {
                lat: 0,
                lng: 0
            }
        });
    }

    /* Not ideal code; can condense
    addUserMarker(user: User): void {
        new google.maps.Marker({
            map: this.googleMap,
            position: {
                lat: user.location.lat,
                lng: user.location.lng
            }
        });
    }

    addCompanyMarker(company: Company): void {
        new google.maps.Marker({
            map: this.googleMap,
            position: {
                lat: company.location.lat,
                lng: company.location.lng
            }
        })
    }
    */

    //Better method, but not very scalable

    //side note: the User or Company checks only for common properties between both types (ie location is the only property name shared between the two)
    
    /*addMarker(mappable: User | Company): void {
        new google.maps.Marker({
            map: this.googleMap,
            position: {
                lat: mappable.location.lat,
                lng: mappable.location.lng
            }
        });
    }*/

    // Best method - use interfaces
    //now anything that satisfies Mappable interface (ie has a lng and lat) can use this method
    addMarker(mappable: Mappable): void {
        const marker = new google.maps.Marker({
            map: this.googleMap,
            position: {
                lat: mappable.location.lat,
                lng: mappable.location.lng
            }
        });

        marker.addListener('click', () => {
            const infoWindow = new google.maps.InfoWindow({
                content: mappable.markerContent()
            });   
            
            infoWindow.open(this.googleMap, marker);
        });
    }

}