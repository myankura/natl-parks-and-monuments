const apiUrl = "http://localhost:8088"

//fetch all parks from api
const getAllParks = () => fetch(`${apiUrl}/parks`).then(response => response.json())

const deletePark = (parkId) => fetch(`${apiUrl}/parks/${parkId}`, {
    method: "DELETE"
  })
//fetch all monuments from api
const getAllMonuments = () => fetch(`${apiUrl}/monuments`).then(response => response.json())
const deleteMonument = (monumentId) => fetch(`${apiUrl}/monuments/${monumentId}`, {
    method: "DELETE"
  })