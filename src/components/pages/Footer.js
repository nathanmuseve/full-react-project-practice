import { Link } from "react-router-dom";
import NavigationBar from "../../Layouts/NavigationBar";

export default function Footer() {
  return (
    <div>
      <div className="footer">
        <footer>
          <ul>
            <li>Direct Contacts</li>
            <li>+2547907112</li>
            <li>musevenathan</li>
            <li>Location</li>
          </ul>
        </footer>
        <NavigationBar />
        <div className="others">
          <Link to="">Blogs</Link>
          <Link to="">Security</Link>
          <Link to="">Pages</Link>
          <Link to="">terms & Conditions</Link>
          <Link to="">other</Link>
        </div>
        <section className="footer">
          <div className="last">
            <p>Copyright &copy; 2020</p>
            <p>Designed by Nathan Museven</p>
            <div className="social-links">
              <Link to="">github</Link>
              <Link to="">linkdein</Link>
              <Link to="">discord</Link>
              <Link to="">x</Link>
              <Link to="">Email</Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
