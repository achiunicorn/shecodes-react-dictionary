import React from "react";
import Meaning from "./Meaning.js";
import "./Results.css";
import Synonyms from "./Synonyms.js";

export default function Results(props) {
  console.log(props);
  if (props.results) {
    return (
      <div className="Results">
        <h2>{props.results.word}</h2>
        <Synonyms synonyms={props.results.meanings[0].synonyms} />
        {props.results.meanings.map(function (meaning, index) {
          return (
            <div key={index}>
              <Meaning meaning={meaning} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
