let campgrounds = [
    { number: 1, view: "ocean", partySize: 8, isReserved: false },
    { number: 5, view: "ocean", partySize: 4, isReserved: false },
    { number: 12, view: "ocean", partySize: 4, isReserved: true },
    { number: 18, view: "forest", partySize: 4, isReserved: false },
    { number: 23, view: "forest", partySize: 4, isReserved: true },
];

function campsiteCount(campgrounds) {
    return campgrounds.length;
}

function campgroundCapacity(campground) {
    let maxCapacity = 0;
    for (let i = 0; i < campground.length; i++) {
        maxCapacity += campground[i].partySize;
    }
    return maxCapacity;
}

function availableCampsites(campgrounds) {
    let unreservedCampsites = [];
    for (let i = 0; i < campgrounds.length; i++) {
        if (campgrounds[i].isReserved == false) {
            unreservedCampsites.push(campgrounds[i].number);
        }
    }
    return unreservedCampsites;
}

function additionalCapacity(campgrounds) {
    return campgroundCapacity(availableCampsites(campgrounds));
}

function countByView(campgrounds, view) {
    let matchingView = [];
    for (let i = 0; i < campgrounds.length; i++) {
        if (view === campgrounds[i].view) {
            matchingView.push(campgrounds[i]);
        }
    }
    return matchingView;
}

function findMyCampsites(campgrounds, desiredView, partySize) {
    let myCampsites = [];
    for (let i = 0; i < campgrounds.length; i++) {
        if (partySize <= campgrounds[i].partySize && campgrounds[i].view === desiredView && campgrounds[i].isReserved == false) {
            myCampsites.push(campgrounds[i].number)
        }
    }
    return myCampsites;
}

console.log(findMyCampsites(campgrounds, "ocean", 4));

let howManyCampSites = campsiteCount(campgrounds);
let campgroundMaxCapacity = campgroundCapacity(campgrounds);
let whatCampsitesAreAvailable = availableCampsites(campgrounds);
let availableCampsitesCapacity = additionalCapacity(campgrounds);


console.log(howManyCampSites);

let campdemo = document.getElementById("campdemo");
let countButton = document.getElementById("how-many-campsites");
let serchView = document.getElementById("searchview");
let viewMatch = document.getElementById('view-match');

serchView.addEventListener('keyup', function (event) {
    let desiredView = serchView.value;
    let matchingView = countByView(campgrounds, desiredView);
    viewMatch.innerHTML = matchingView.length + " campsites have the " + desiredView + " view";
})

countButton.addEventListener("click", function (event) {
    campdemo.innerHTML = "Howdy <br>";
    campdemo.innerHTML += "We have " + howManyCampSites + " campsites."
    campdemo.innerHTML += "<br> Our Max Capacity is: " + campgroundMaxCapacity;
    campdemo.innerHTML += "<br>Our campsites available now are: " + whatCampsitesAreAvailable;
});
