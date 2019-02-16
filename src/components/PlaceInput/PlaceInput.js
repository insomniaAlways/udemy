import React from "react";
import InputBox from '../Elements/InputBox/InputBox';

const PlaceInput = (props) => (
  <InputBox placeholder="Place Name" value={props.placeName} onChangeText={props.onChangeText} style={props.style}/>
)

export default PlaceInput;
