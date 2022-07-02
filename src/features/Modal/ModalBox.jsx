import React from "react";
import { PrimaryButtonStyled } from "../Static/Styled/Buttons/PrimaryButtonStyled";
import { SecondaryButtonStyled } from "../Static/Styled/Buttons/SecondaryButtonStyled";
import { InputStyled } from "../Static/Styled/InputStyled";

import "./ModalBoxStyles.scss";

const ModalBox = () => {
	return (
    <card className="modal-card">
      <div className="modal-box">
        <p>Add item to list</p>
        <InputStyled type="text" placeholder="Type your item here..." />
        <footer>
          <PrimaryButtonStyled>ADD</PrimaryButtonStyled>
          <SecondaryButtonStyled>CANCEL</SecondaryButtonStyled>
        </footer>
      </div>
    </card>
  );
}

export default ModalBox;