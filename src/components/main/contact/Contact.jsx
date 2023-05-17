import Intro from "./Intro";
import Form from "./Form";
import { StyledContactContainer } from "../../styled/style";
import './override.css'

export default function Contact() {
  return (
    <StyledContactContainer id="contact">
      <Intro />
      <Form />
    </StyledContactContainer>
  );
}
