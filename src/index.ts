/// <reference types="@types/google.maps" />

import { Company } from './Company';
import { User } from './User';
import { CustomMap } from './CustomMap';


// creating new custom map to hide standard included methods to prevent other developers from using in order to avoid breaking things

/*
const map = new google.maps.Map(document.getElementById('map'), {
    zoom: 4,
    center: {
        lat: 0,
        lng: 0
    }
});
*/

const user = new User();
console.log(user);

const company = new Company();
console.log(company);

const customMap = new CustomMap('map');

//original method
/*customMap.addUserMarker(user);
customMap.addCompanyMarker(company);*/

//better method
customMap.addMarker(user);
customMap.addMarker(company);



