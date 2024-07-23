import "./App.css"
import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import NavigationBar from "./Layouts/NavigationBar";
import Home from "./components/pages/Home";
import NotFound from "./components/pages/NotFound";
import About from "./components/pages/About";
import Services from "./components/pages/About"
import Careers from "./components/pages/Careers/CareersLayout";
import Help from "./components/pages/Help";
import Contacts from "./components/pages/HelpLayouts/Contacts";
import Faq from "./components/pages/HelpLayouts/Faq";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route element={<NavigationBar />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="services" element={<Services />} />
        <Route path="careers" element={<Careers />} />
        <Route path="help" element={<Help />}>
          <Route path="contacts" element={<Contacts />} />
          <Route path="faq" element={<Faq />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Route>
    </Route>
  )
)

export default router;
