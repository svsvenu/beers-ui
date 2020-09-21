const properties = {
  urls: {
    beersUrl: "http://localhost:8080/",
    loginUrl: "http://localhost:8080/authenticate",
  },
  uris: {
    allBeersUri: "api/beers/all",
    tastedBeersUri: "api/beers/tasted",
  },
  beersPerPage: 5,
  allBeersColumns: ["Beer name", "Brewery", "Alchohol %", "Style", "Tasted"],
  tastedBeersColumns: ["Beer name", "Brewery", "Alchohol %", "Style"],
};

export { properties };
