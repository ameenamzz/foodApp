import { useState } from "react";
const User = (props) => {
  const [count, setCount] = useState(0);

  return (
    <div className="user-div">
      <h1>Count: {count}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        add
      </button>
      <h1>Ameen: {props.name} </h1>
      <h3>Ksd: {props.place}</h3>
      <h4>azzzzzz12343</h4>
    </div>
  );
};

export default User;
