import React from "react";

const WelcomeMessage = () => {
  return <h1 style={{ textAlign: "center" }}>Welcome to the Justin Berg Portfolio</h1>;
};

const GroupProject = () => {
  return (
    <a href="https://vast-savannah-12738.herokuapp.com/" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <img src="./images/groupproject.png" alt="Group Project 3, Virtual Event Pro." style={{ width: "50%", marginBottom: "10px" }} />
      <p style={{ fontSize: "20px" }}>Group Project 3, Virtual Event Pro.</p>
    </a>
  );
};

const App = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
      <WelcomeMessage />
      <GroupProject />
    </div>
  );
};

export default App;


