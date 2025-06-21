import User from "./User";
import UserClass from "./UserClass";
import React from "react";

class About extends React.Component {
  constructor(props) {
    super(props);
    console.log("Parent constructor");
  }

  componentDidMount() {
    console.log("Parent Component Did Mount");
  }

  render() {
    console.log("Parent REnder");
    return (
      <div>
        <h1>About Us</h1>
        <User
          name={"this is Props name from function comp"}
          place={"this is Props place from function comp"}
        />
        <UserClass
          name={" first"}
          place={"Props place from class comp"}
        />
  
      </div>
    );
  }
}

export default About;
