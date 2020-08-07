import React, { useEffect } from "react";
import { useSelector } from "react-redux";

const ExtraComponent = () => {
  let todos = [];

  todos = useSelector((state) => state.todos);
  const name = useSelector((state) => state.username);

  const text = `${name} says: Prograils rules! We have ${todos.length} things to do.`;

  return <h4>{text}</h4>;
};

export default ExtraComponent;
