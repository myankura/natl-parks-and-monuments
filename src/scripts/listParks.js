//gets all parks from api and lists them in an array
const listNationalParks = () => {
  getAllParks().then(parksArray => {
    console.log("parksArray", parksArray)
    let nationParksFragment = document.createDocumentFragment();
    //loops through array and builds html elements
    parksArray.forEach(park => {
      let parkHtml = buildParkHtml(park);
      nationParksFragment.appendChild(parkHtml);
    });
    //targets national--parks element by id, clears the element, and then appends the fragment
    const nationalParksSection = document.querySelector("#national--parks");
    clearElement(nationalParksSection)
    nationalParksSection.appendChild(nationParksFragment)
  });
};