import { createContext } from "react";

const UsesrContext = createContext({
  loggedInUser: "Default User",
});

export default UsesrContext;
