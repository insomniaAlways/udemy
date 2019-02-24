import { SET_PLACES, REMOVE_PLACE } from "./actionTypes";
import { startLoading, stopLoading } from './index';

export const addPlace = (placeName, location, image) => {
  return dispatch => {
    dispatch(startLoading())
    return fetch('https://us-central1-rn-project-1550512411254.cloudfunctions.net/storeImage', {
      method: "POST",
      body: JSON.stringify({
        image: image.base64
      })
    })
    .then(res => res.json())
    .then(res =>  {
      const data = {
        name: placeName, //placeName:
        location: location,
        image: res.imageUrl
      }
      return fetch('https://rn-project-1550512411254.firebaseio.com/places.json', {
        method: "POST",
        body: JSON.stringify(data)
      })
    }).then((res) => {
      dispatch(stopLoading())
    })
    .catch(e => {
      dispatch(stopLoading())
      console.log(e)
    })
  }
};

export const getPlace = () => {
  return dispatch => {
    return fetch('https://rn-project-1550512411254.firebaseio.com/places.json')
    .then((res) => res.json())
    .then((res) => {
      console.log(res)
      const places = []
      for(let key in res) {
        places.push({
          ...res[key],
          key: key,
          image: {
            uri: res[key].image
          }
        })
      }
      dispatch(setPlace(places))
    })
    .catch(e => console.log(e))
  }
}

export const setPlace = (places) => {
  return {
    type: SET_PLACES,
    places: places
  }
}

export const deletePlace = (key) => {
  return dispatch => {
    return fetch('https://rn-project-1550512411254.firebaseio.com/places/' + key + '.json', {
        method: "DELETE",
      })
      .then(res => res.json())
      .then(res => {
        dispatch(removePlace(key))
        console.log(res)
      })
      .catch(e => console.log(e))
  }
};

export const removePlace = key => {
  return {
    type: REMOVE_PLACE,
    key: key
  }
}
