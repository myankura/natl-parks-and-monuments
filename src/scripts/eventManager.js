//function for deleting park from the api
const handleParkDelete = () => {
  console.log("delete button clicked", event.target.id.split("--")[1]);
  let parkId = event.target.id.split("--")[1];


   deletePark(parkId)
    .then(() => listNationalParks())
};

//function for deleting monument from the api
const handleMonumentDelete = () => {
  console.log("delete button has been clicked", event.target.id.split("--")[1]);
  let monumentId = event.target.id.split("--")[1];

  deleteMonument(monumentId)
    .then(() => listNationalMonuments())
}