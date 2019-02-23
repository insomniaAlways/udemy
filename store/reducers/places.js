import { ADD_PLACE, DELETE_PLACE } from "../actions/actionTypes";

const initialState = {
  places: [],
  selectedPlace: null
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PLACE: {
      return {
        ...state,
        places: state.places.concat({
            key: state.places.length,
            name: action.placeName,
            location: action.location,
            image: {
              uri: action.image.uri
            }
          })
      }
    }

    case DELETE_PLACE: {
      return {
        ...state,
        places : state.places.filter((p) => p.key != action.placeKey)
      }
    }
    
    default:
    return state;
  }
}

export default reducer;