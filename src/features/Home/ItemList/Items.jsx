import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  toggleSelectedOf,
  individualDeletion,
  selectItem,
} from "../../reducers/itemSlice.js";
import { ItemStyled } from "./ItemStyled.js";

const Items = () => {
  const dispatch = useDispatch();
  const list = useSelector(selectItem);
  const selected = (id) => {
    // console.log(id);
    dispatch(toggleSelectedOf(id));
  };
  const deletion = (id) => {
    dispatch(individualDeletion(id));
  };

  return (
    <ul>
      {list.map((item) => (
        <ItemStyled
          className={item.selected ? "selected" : null}
          key={item.id}
          onClick={() => selected(item.id)}
          onDoubleClick={() => deletion(item.id)}>
          {item.content}
        </ItemStyled>
      ))}
    </ul>
  );
};

export default Items;
