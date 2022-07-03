import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { SecondaryButtonStyled } from "../Static/Styled/Buttons/SecondaryButtonStyled";
import { PrimaryButtonStyled } from "../Static/Styled/Buttons/PrimaryButtonStyled";
import { Icon } from "@iconify/react";

import { toggleIsOpen } from "../reducers/modalSlice";

import "./HomeStyles.scss";
import Items from "./ItemList/Items";

const Home = () => {
  const dispatch = useDispatch();
  const list = useSelector((state) => state.items.itemsList);
  const toggleOpen = () => dispatch(toggleIsOpen());
  
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
        <content>
          <Items/>
        </content>
        <footer>
          <span className="left">
            <SecondaryButtonStyled className="first" width="4.5vmax">
              <Icon icon="la:undo-alt" color="#324bff" width="2vmin" />
            </SecondaryButtonStyled>
            <SecondaryButtonStyled>DELETE</SecondaryButtonStyled>
          </span>
          <PrimaryButtonStyled onClick={toggleOpen}>ADD</PrimaryButtonStyled>
        </footer>
      </container>
    </card>
  );
};

export default Home;
