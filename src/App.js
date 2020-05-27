import React from "react";
import "./App.css";

import userbase from "userbase-js";

function App() {
  const userbaseInit = () => {
    console.log("① Initialising");
    userbase
      .init({
        appId: "80bff789-a1b2-4f66-b931-05905ad36241",
        // I know this shouldn't be exposed -- this is my test base which
        // will never be prod.
      })
      .then((session) => {
        if (session.user) {
          console.log(
            `② Session established. Username: ${session.user.username}`
          );
        } else {
          console.log("② Session not established, no previous login");
        }
      })
      .catch((e) => console.error(e));
  };

  const userbaseSignIn = () => {
    console.log("③•⓪ About to sign in");
    userbase
      .signIn({
        username: "johnny",
        password: "Password123",
      })
      .then((user) => {
        console.log(`③•① User signed in: ${user.username}`);
      })
      .catch((e) => console.error(`③•② Error: ${e}`));
  };

  const userbaseSignOut = () => {
    console.log("④•⓪ About to sign out");
    userbase
      .signOut()
      .then(() => console.log("④•① Signed out"))
      .catch((e) => console.error(`④•② Error: ${e}`));
  };

  return (
    <div className="App">
      <p>Console has messages, be watching there.</p>
      <button onClick={userbaseInit}>Init (gotta do me first)</button>
      <br />
      <button onClick={userbaseSignIn}>Sign in</button>
      <br />
      <button onClick={userbaseSignOut}>Sign out</button>
    </div>
  );
}

export default App;
