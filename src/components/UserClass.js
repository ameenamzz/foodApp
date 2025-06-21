import React from "react";
import UsesrContext from "../utils/UserContext";
class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "dummy",
        avatar: "https:/hds;l.com",
      },
    };

    // console.log(this.props.name, "constructor");
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/ameenamzz");
    const json = await data.json();
    this.setState({
      userInfo: json,
    });
  }

  render() {
    const { login } = this.state.userInfo;
    return (
      <div>
        <h1>--------git hub api-----------</h1>
        <img src="https://avatars.githubusercontent.com/u/118591766?v=4"></img>
        <h3>Name: {login}</h3>
        <div>
          <UsesrContext.Consumer>
            {(data) => {
              return <h1>{data.loggedInUser}</h1>;
            }}
          </UsesrContext.Consumer>
        </div>
      </div>
    );
  }
}

export default UserClass;
