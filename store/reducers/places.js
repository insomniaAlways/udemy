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
            image: {
              uri: "https://cdn.vox-cdn.com/thumbor/Djzh8yHtQAO4k-kNbcbF7SV37oM=/0x0:2040x1360/1200x800/filters:focal(857x517:1183x843)/cdn.vox-cdn.com/uploads/chorus_image/image/55407865/jbareham_170504_1691_0004.0.0.jpg"
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