import { Link } from "react-router-dom";

export default function MailboxList({ mailboxes }) {
  return (
    <div>
      <h2>Mailbox List</h2>
      <div className="mailbox-list">
        {mailboxes.length === 0 ? (
          <p>No mailboxes available.</p>
        ) : (
          mailboxes.map((mailbox) => (
            <div key={mailbox._id} className="mailbox-container">
              <Link to={`/mailboxes/${mailbox._id}`}>
                <div>Mailbox ID: {mailbox._id}</div>
              </Link>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
