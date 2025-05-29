const root = ReactDOM.createRoot(document.getElementById("root"));

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", { id: "h1" }, "this is nested"),
    React.createElement("h2", { id: "h2" }, "this is neste h2"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "im 2nd h1"),
    React.createElement("h2", {}, "this is 2nd H2"),
  ]),
]);

root.render(parent);
