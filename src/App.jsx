import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import "./App.css";

import NavBar from "./components/NavBar.jsx";
import MailboxList from "./components/MailboxList.jsx";
import MailboxForm from "./components/MailboxForm.jsx";
import MailboxDetails from "./components/MailboxDetails.jsx";

const App = () => {
  const [mailboxes, setMailboxes] = useState([]);

  const addBox = (newMailbox) => {
    setMailboxes((prevMailboxes) => [...prevMailboxes, newMailbox]);
  };

  return (
    <>
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={
            <main>
              <h1>Post Office</h1>
            </main>
          }
        />
        <Route
          path="/mailboxes"
          element={<MailboxList mailboxes={mailboxes} />}
        />
        <Route path="/new-mailbox" element={<MailboxForm addBox={addBox} />} />
        <Route
          path="/mailboxes/:mailboxId"
          element={<MailboxDetails mailboxes={mailboxes} />}
        />
      </Routes>
    </>
  );
};

export default App;
