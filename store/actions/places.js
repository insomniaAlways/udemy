import { ADD_PLACE, DELETE_PLACE } from "./actionTypes";

export const addPlace = (placeName, location, image) => {
  return dispatch => {
    return fetch('https://us-central1-rn-project-1550512411254.cloudfunctions.net/storeImage', {
      method: "POST",
      body: JSON.stringify({
        image: image.base64
      })
    })
    .then(res => res.json())
    .then(res =>  {
      console.log(res)
      const data = {
        name: placeName, //placeName:
        location: location,
        image: res.imageUrl
      }
      return fetch('https://rn-project-1550512411254.firebaseio.com/places.json', {
        method: "POST",
        body: JSON.stringify(data)
      })
    })
    .catch(e => console.log(e))
  }
};

export const deletePlace = (key) => {
  return {
    type: DELETE_PLACE,
    placeKey: key
  }
};
