import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleSelectedOf } from "../../reducers/itemSlice.js";
import { ItemStyled } from "./ItemStyled.js";

const Items = () => {
  const dispatch = useDispatch();
  const list = useSelector((state) => state.items.itemsList);
  const selected = (id) => {
    // console.log(id);
    dispatch(toggleSelectedOf(id));
  };

  return (
    <ul>
      {list.map((item) => (
        <ItemStyled
          className={item.selected ? "selected" : null}
          key={item.id}
          onClick={() => selected(item.id)}>
          {item.content}
        </ItemStyled>
      ))}
    </ul>
  );
};

export default Items;
