import { useState } from 'react';

function SubmitForm() {
  const [name, setName] = useState('');
  const [lastName, setlastName] = useState('');
  const [email, setEmail] = useState('');
  const [tel, setTel] = useState('');
  const [reason, setReason] = useState('');
  const [message, setMessage] = useState('');

  return (
    <form action="submit">
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="First Name*"
        required
      />
      <input
        type="text"
        value={lastName}
        onChange={(e) => setlastName(e.target.value)}
        placeholder="Last Name"
      />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email*"
        required
      />
      <input
        type="tel"
        value={tel}
        onChange={(e) => setTel(e.target.value)}
        placeholder="Phone Number"
      />
      <input
        type="text"
        value={reason}
        onChange={(e) => setReason(e.target.value)}
        placeholder="Reason for Visit*"
        required
      />
      <textarea
        name="message"
        id="message"
        cols={30}
        rows={10}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Your Message"
      ></textarea>
      <button>Submit Message</button>
    </form>
  );
}

export default SubmitForm;
