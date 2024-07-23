import { Form, Link } from "react-router-dom";
import Footer from "../Footer";

export default function Contacts() {
  return (
    <div>
      <div className="contacts">
        <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
        <div className="myform">
          <Form method="POST" action="/" >
            <div className="inputs">
              <label htmlFor="lname" className="lname">Last Name</label>
              <input type="text" name="lname" id="lname" placeholder="Last Name" />
            </div>
            <div className="inputs">
              <label htmlFor="mname" className="mname">Middle Name</label>
              <input type="text" name="mname" id="mname" placeholder="Middle Name" />
            </div>
            <div className="inputs">
              <label htmlFor="fname" className="fname">First Name</label>
              <input type="text" name="fname" id="fname" placeholder="First Name" />
            </div>
            <div className="inputs">
              <label htmlFor="email" className="email">Email</label>
              <input type="email" name="email" id="email" placeholder="Email" />
            </div>
            <div className="inputs">
              <label htmlFor="subject" className="subject">Subject</label>
              <input type="text" name="subject" id="subject" placeholder="Subject" />
            </div>
            <div className="inputs">
              <textarea name="textarea" id="textarea" placeholder="message"></textarea>
            </div>
            <div className="inputs">
              <input type="checkbox" name="terms" id="terms" /><p>By clicking you agree to our <Link to="">Terms and Conditions</Link></p>
            </div>
            <div className="inputs">
              <button type="submit">SEND MESSAGE</button>
            </div>
            <div className="inputs">
              <label htmlFor="reset" className="reset">Cancel Submission</label>
              <input type="reset" name="reset" id="reset" />
            </div>
          </Form>
        </div>
      </div>
      <Footer />
    </div>
  )
}
