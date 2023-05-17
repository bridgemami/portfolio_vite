import { useState } from "react";
import Button from "react-bootstrap/Button";
import { useForm, ValidationError } from "@formspree/react";
import { StyledForm, StyledThanks } from "../../styled/style";

export default function Form() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [state, handleSubmit] = useForm("xdovaqqg");
  if (state.succeeded) {
    return <StyledThanks>Thank you for reaching out!</StyledThanks>;
  }
  return (
    <form onSubmit={handleSubmit}>
      <StyledForm>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <ValidationError prefix="email" field="email" errors={state.errors} />
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Name"
          // required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <ValidationError prefix="name" field="name" errors={state.errors} />
        <label htmlFor="subject">Subject:</label>
        <input
          type="text"
          name="subject"
          id="subject"
          placeholder="Subject"
          // required
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        />
        <ValidationError
          prefix="subject"
          field="subject"
          errors={state.errors}
        />
        <label htmlFor="message">Message/Inquiry:</label>
        <textarea
          placeholder="Your message or inquiry"
          id="message"
          name="message"
          // required
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
        <Button type="submit" disabled={state.submitting}>
          Submit
        </Button>
      </StyledForm>
    </form>
  );
}
