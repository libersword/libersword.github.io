import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from '../Home'
import About from '../About'
import AllWeb from '../WebProjectsAll'
import AllGD from '../GDProjectsAll'
import AllIllustration from '../IllustrationAll'
import AllPhotography from '../PhotographyAll'
import Contact from '../Contact'

const routes = [
  {
    path: "/",
    exact: true,
    main: () => <Home />
  },
  {
    path: "/about",
    main: () => <About />
  },
  {
    path: "/web",
    main: () => <AllWeb />
  },
  {
    path: "/graphic-design",
    main: () => <AllGD />
  },
  {
    path: "/illustration",
    main: () => <AllIllustration />
  },
  {
    path: "/photography",
    main: () => <AllPhotography />
  },
  {
    path: "/contact",
    main: () => <Contact />
  }
];

export default function SideNav(){
    return(
    <Router>
      <div>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/web">Web</Link>
            </li>
            <li>
              <Link to="/graphic-design">Graphic Design</Link>
            </li>
            <li>
              <Link to="/illustration">Illustration</Link>
            </li>
            <li>
              <Link to="/photography">Photography</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>

          <Switch>
            {routes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
              />
            ))}
          </Switch>
        </div>

        <div>
          <Switch>
            {routes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                children={<route.main />}
              />
            ))}
          </Switch>
        </div>
      </div>
    </Router>
    )};
