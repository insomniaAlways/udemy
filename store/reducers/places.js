import { SET_PLACES, REMOVE_PLACE } from "../actions/actionTypes";

const initialState = {
  places: [],
  selectedPlace: null
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PLACES: {
      return {
        ...state,
        places: action.places
      }
    }

    case REMOVE_PLACE: {
      return {
        ...state,
        places : state.places.filter((p) => p.key != action.key)
      }
    }
    
    default:
      return state;
  }
}

export default reducer;