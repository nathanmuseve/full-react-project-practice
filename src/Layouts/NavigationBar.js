import "./NavigationBar.css"
import { NavLink, Outlet } from 'react-router-dom'
export default function NavigationBar() {
  return (
    <div>
      <header>
        <img src={require("./home-pg.jpg")} alt="" />
        <nav>
          <NavLink to="/" >Home</NavLink>
          <NavLink to="about" >About</NavLink>
          <NavLink to="services" >Services</NavLink>
          <NavLink to="careers" >Careers</NavLink>
          <NavLink to="help" >help</NavLink>
        </nav>
      </header>
      <main className="oulet">
        <Outlet />
      </main>
    </div>
  )
}
