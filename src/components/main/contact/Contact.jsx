import Form from "./Form";
import { StyledContactContainer } from "../../styled/style";
import s from './contact.module.css'
import './override.css'
import 'animate.css';


export default function Contact() {
  return (
    <StyledContactContainer id="contact">
      <h2 className={`animate__animated animate__backInLeft ${s.title}`}>Contact</h2>
      <div className={`animate__animated animate__backInRight ${s.container}`}>
      <p className={s.message}> If you have any questions about me or my projects, or discuss about travel or Star Wars.
      <br /><br />
      I am available to grab a coffee and chat! Drop a comment, question, concern, or and thanks for stopping by!
      <br /><br />
      Straight shot to my inbox: <a href ="mailto:mdbridgeman@gmail.com?subject=Get in Touch with Michael Bridgeman" target="_blank"  aria-hidden= "true" rel="noreferrer" title="Email Michael directly" className={s.email}>
        mdbridgeman@gmail.com</a>.
      </p>
      <Form  className={s.form}/>
      </div>
    </StyledContactContainer>
  );
}
