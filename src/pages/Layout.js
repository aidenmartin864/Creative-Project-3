import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
        <Link class='homeLink' to="/">Home</Link>
        <ol>
          <li>
            <Link class='riddleLink' to="/riddle1">You see a boat filled with people, yet there isn’t a single person on board. How is that possible?</Link>
          </li>
          <li>
            <Link class ='riddleLink' to="/riddle2">A man who was outside in the rain without an umbrella or hat didn’t get a single hair on his head wet. Why?</Link>
          </li>
        </ol>
        <a href='https://github.com/aidenmartin864/Creative-Project-3.git'>Github Repository</a>
      </nav>
      <Outlet />
    </>
  )
};

export default Layout;