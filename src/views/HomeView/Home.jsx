import React from "react";
import { useDispatch } from "react-redux";
import { ActionCreators } from "redux-undo";
// Components
import { SecondaryButtonStyled } from "../../components/Styled/Buttons/SecondaryButtonStyled";
import { PrimaryButtonStyled } from "../../components/Styled/Buttons/PrimaryButtonStyled";
import { Icon } from "@iconify/react";
import Items from "../../components/ItemList/Items";
// Reducers
import { toggleIsOpen } from "../../features/reducers/modalSlice";
import { deleteSelected } from "../../features/reducers/itemSlice.js";
// Styles
import "./HomeStyles.scss";

/**
 * ! HOME - Container
 * * AslanSN - 22-07-02
 * @returns Component - React
 */
const Home = () => {
  const dispatch = useDispatch(),
    toggleOpen = () => dispatch(toggleIsOpen()),
    deletion = () => dispatch(deleteSelected());

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
          <Items />
        </content>
        <footer>
          <span className="left">
            <SecondaryButtonStyled
              className="first"
              aria-label="Undo last change"
              width="4.5vmax"
              onClick={() => dispatch(ActionCreators.undo())}>
              <Icon icon="la:undo-alt" color="#324bff" width="2vmin" />
            </SecondaryButtonStyled>
            <SecondaryButtonStyled
              className="first"
              aria-label="Redo last change"
              width="4.5vmax"
              onClick={() => dispatch(ActionCreators.redo())}>
              <Icon icon="fad:redo" color="#324bff" width="2vmin" />
            </SecondaryButtonStyled>
            <SecondaryButtonStyled onClick={deletion}>
              DELETE
            </SecondaryButtonStyled>
          </span>
          <PrimaryButtonStyled onClick={toggleOpen}>ADD</PrimaryButtonStyled>
        </footer>
      </container>
    </card>
  );
};

export default Home;
