import React, { Component } from "react";
import { Link } from "react-router-dom";

import outroproducts from "./products/outrocuteness.json";
import "./../../../styles/components/shopStyles.css";

import { outroMemeArray } from "./OutroCutenessImages";

export default class OutroCuteness extends Component {
  render() {

    var finalprofucts = outroproducts.products.map(x => (
      <CuteProduct id={x.id} imgSrc={x.memId} />
    ));

    var listedProducts = finalprofucts.map((x, index) => (
      <li key={index} className="flex-item">{x}</li>
    ));

    return (
      <div className="content">
        <div className="productHeader" >
          <h1 className="productHeader">Outro Cuteness</h1>
        </div>
        <ul className="flex-container">{listedProducts}</ul>
      </div>
    );
  }
}

const CuteProduct = props => {

  return (
    <Link to={`/outrocuteness/${props.id}`}>
      <div className="listedOutro">
        <img className="listedOutro" alt="" src={outroMemeArray[props.id]} />
      </div>
    </Link>
  );
};
