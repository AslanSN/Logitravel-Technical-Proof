import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { SecondaryButtonStyled } from "../Static/SecondaryButtonStyled";
import { PrimaryButtonStyled } from "../Static/PrimaryButtonStyled";
import "./HomeStyles.scss";

const Home = () => {
  return (
    <card className="home-card">
      <container>
        <header>
          <h2>This is a Technical Proof</h2>
          <p className="header-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            lacinia massa purus, vel vulputate neque porttitor eu. Nulla
            facilisi. Aenean commodo, felis vel scelerisque vehicula, arcu
            sapien sagittis mi, in consectetur tortor est suscipit diam.
          </p>
        </header>
        <SecondaryButtonStyled>Reverse</SecondaryButtonStyled>
        <SecondaryButtonStyled>DELETE</SecondaryButtonStyled>
        <PrimaryButtonStyled>ADD</PrimaryButtonStyled>
      </container>
    </card>
  );
};

export default Home;
