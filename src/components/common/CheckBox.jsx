import React, { useState, useEffect, useRef } from "react";
import { properties } from "../../utils/properties";
import { callHttpGet } from "../../utils/http";

export default function CheckBox(props) {
  const tasted = props.tasted === "1" ? true : false;
  const [currState, setCurrState] = useState(tasted);
  const isInitialMount = useRef(true);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    if (isInitialMount.current) {

      isInitialMount.current = false;
      return;
    }
    console.log("In hook" + currState);
    const headers = {
      Authorization: "Bearer " + localStorage.getItem("jwt"),
    };
    const url =
      properties.urls.beersUrl +
      "api/beers/add-to-tasted/" +
      props.beerId +
      "/" +
      currState;
    const response = callHttpGet(url, headers);
  }, [currState]);

  const checkedBox = () => {
    setCurrState(!currState);

    console.log(currState);
  };

  return (
    <input
      className="form-check-input"
      type="checkbox"
      value=""
      id="defaultCheck1"
      onChange={checkedBox}
      checked={currState}
    ></input>
  );
}
