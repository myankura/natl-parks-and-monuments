//gets all monuments from api and lists them in an array
const listNationalMonuments = () => {
    getAllMonuments().then(monumentsArray => {
        console.log("monumentsArray", monumentsArray)
        let monumentsFragment = document.createDocumentFragment();
        //loops through array and builds html elements
        monumentsArray.forEach(monument => {
            let monumentHtml = buildMonumentHtml(monument);
            monumentsFragment.appendChild(monumentHtml);
        });
        //targets national--monuments element by id, clears the element, and then appends the fragment
        const nationalMonumentsSection = document.querySelector("#national--monuments");
        clearElement(nationalMonumentsSection)
        nationalMonumentsSection.appendChild(monumentsFragment)
    });
};