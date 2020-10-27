const properties = {
  urls: {
    beersUrl: "http://localhost:8080/",
    loginUrl: "http://localhost:8080/authenticate",
  },
  uris: {
    allBeersUri: "api/beers/all",
    tastedBeersUri: "api/beers/tasted",
    likeUri: "api/beers/like",
    tastedUntastedUri: "add-to-tasted",
    newArrivalsUri: "api/beers/get-new-arrivals",
  },
  beersPerPage: 5,
  allBeersColumns: ["Beer name", "Brewery", "Alchohol %", "Style", "Tasted"],
  allBeersExcludes: ["beerId", "drinkerBeerId", "liked"],

  tastedBeersColumns: ["Beer name", "Brewery", "Alchohol %", "Style", "Liked"],
  tastedBeersExcludes: ["beerId", "drinkerBeerId", "tasted"],

  newArrivalsColumns: [
    "Beer name",
    "Brewery",
    "Alchohol %",
    "Style",
    "Added on",
  ],
  newArrivalsExcludes: ["beerId", "drinkerBeerId", "tasted", "liked"],
};

export { properties };
