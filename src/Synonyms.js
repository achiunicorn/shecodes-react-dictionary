import React from "react";

export default function Synonyms(props) {
  //console.log(props);
  if (props.synonyms) {
    return (
      <p>
        Synonyms:
        <ul className="Synonyms">
          {props.synonyms.map(function (synonym, index) {
            return <li key={index}>{synonym}</li>;
          })}
        </ul>
      </p>
    );
  } else {
    return null;
  }
}
