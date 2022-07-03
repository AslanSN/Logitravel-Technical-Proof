import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleIsOpen } from "../reducers/modalSlice.js";
import { addItem, generateId } from "../reducers/itemSlice.js";

import { PrimaryButtonStyled } from "../Static/Styled/Buttons/PrimaryButtonStyled";
import { SecondaryButtonStyled } from "../Static/Styled/Buttons/SecondaryButtonStyled";
import { InputStyled } from "../Static/Styled/InputStyled";
import { Overlay } from "../Static/Styled/OverlayStyled";

import "./ModalBoxStyles.scss";

const ModalBox = () => {
  const dispatch = useDispatch();

  const submitItem = (evt) => {
    evt.preventDefault();

    const { target } = evt;
    const content = target.item.value;
    target.item.value = "";

    dispatch(addItem(content));
    dispatch(toggleIsOpen());
  };


  return (
    <Overlay>
      <card className="modal-card">
        <div className="modal-box">
          <p>Add item to list</p>
          <form onSubmit={submitItem}>
            <InputStyled
              name="item"
              type="text"
              placeholder="Type your item here..."
            />

            <footer>
              <PrimaryButtonStyled type="submit">ADD</PrimaryButtonStyled>
              <SecondaryButtonStyled onClick={() => dispatch(toggleIsOpen())}>
                CANCEL
              </SecondaryButtonStyled>
            </footer>
          </form>
        </div>
      </card>
    </Overlay>
  );
};

export default ModalBox;
