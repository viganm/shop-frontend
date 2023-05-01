import React from "react";
import Card from "../UI/Card";
import Item from "./Item";
import "./ItemContainer.css";

const ItemContainer = (props) => {
  return (
    <Card className="expenses">
      <Item title={props.items[0].title} amount={props.items[0].amount} />
      <Item title={props.items[1].title} amount={props.items[1].amount} />
      <Item title={props.items[2].title} amount={props.items[2].amount} />
      <Item title={props.items[3].title} amount={props.items[3].amount} />
      <Item title={props.items[4].title} amount={props.items[4].amount} />
      <Item title={props.items[3].title} amount={props.items[3].amount} />
      <Item title={props.items[3].title} amount={props.items[3].amount} />
      <Item title={props.items[3].title} amount={props.items[3].amount} />
    </Card>
  );
};

export default ItemContainer;
