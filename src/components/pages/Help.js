
import { NavLink, Outlet } from "react-router-dom";

export default function Help() {
  return (
    <div>
      <div className="help">
        <h1>Help</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis nostrum natus sint! Ut, eius? Similique architecto aliquid blanditiis, tempore, facilis porro ratione perspiciatis, voluptate repudiandae assumenda eius! Neque, ex repudiandae.</p>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui excepturi adipisci tempore, ab ipsum ullam aut, sit quam repellat, maiores molestiae dolorem. Qui, odit eos. Aliquam optio blanditiis quaerat quod?</p>
      </div>
      <div className="layouts">
        <NavLink to="faq">Frequently Asked Questions</NavLink>
        <NavLink to="contacts">Contact Us</NavLink>
      </div>
      <main>
        <Outlet />
      </main>
    </div>
  )
}
