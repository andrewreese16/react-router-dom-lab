import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function MailboxForm({ addBox }) {
  const [boxholder, setBoxholder] = useState("");
  const [boxSize, setBoxSize] = useState("Small");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newMailbox = {
      _id: Date.now(),
      boxholder,
      boxSize,
    };
    addBox(newMailbox);
    navigate("/mailboxes");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="boxholder">Box holder</label>
      <input
        type="text"
        value={boxholder}
        onChange={(e) => setBoxholder(e.target.value)}
        name="boxholder"
        id="boxholder"
      />
      <label htmlFor="boxSize">Box Size</label>
      <select
        value={boxSize}
        onChange={(e) => setBoxSize(e.target.value)}
        id="boxSize"
      >
        <option value="Small">Small</option>
        <option value="Medium">Medium</option>
        <option value="Large">Large</option>
      </select>
      <button type="submit">Create Mailbox</button>
    </form>
  );
}
