import { useState } from 'react';
import '../styles/SubmitForm.css';

function SubmitForm() {
  const [name, setName] = useState('');
  const [lastName, setlastName] = useState('');
  const [email, setEmail] = useState('');
  const [tel, setTel] = useState('');
  const [reason, setReason] = useState('');
  const [message, setMessage] = useState('');

  return (
    <form action="submit" className="form">
      <h1 className="h3">Make an Appointment</h1>
      <div className="form-grid">
        <input
          className="input"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="First Name*"
          required
        />
        <input
          className="input"
          type="text"
          value={lastName}
          onChange={(e) => setlastName(e.target.value)}
          placeholder="Last Name"
        />
        <input
          className="input"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email*"
          required
        />
        <input
          className="input"
          type="tel"
          value={tel}
          onChange={(e) => setTel(e.target.value)}
          placeholder="Phone Number"
        />
        <input
          className="input"
          type="text"
          value={reason}
          onChange={(e) => setReason(e.target.value)}
          placeholder="Reason for Visit*"
          required
        />
        <textarea
          className="input"
          name="message"
          id="message"
          cols={30}
          rows={10}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Your Message"
        ></textarea>
        <button type="submit" className="submit-btn">
          SUBMIT MESSAGE
        </button>
      </div>
    </form>
  );
}

export default SubmitForm;
