import { useParams } from "react-router-dom";

export default function MailboxDetails({ mailboxes }) {
  // Destructure mailboxes
  const { mailboxId } = useParams();
  const mailbox = mailboxes.find((m) => m._id === parseInt(mailboxId, 10)); // Ensure proper ID comparison

  if (!mailbox) {
    return <h2>Mailbox not found!</h2>;
  }

  return (
    <div className="mailbox-details">
      <h2>Mailbox Details</h2>
      <p>Box ID: {mailbox._id}</p>
      <p>Boxholder Name: {mailbox.boxholder}</p>
      <p>Box Size: {mailbox.boxSize}</p>
    </div>
  );
}
