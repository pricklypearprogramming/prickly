import React from 'react';
import {Link} from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {green100, green500, green700} from 'material-ui/styles/colors';
// import injectTapEventPlugin from 'react-tap-event-plugin';

// The Header creates links that can be used to navigate
// between routes.
const Header = () => (
  <MuiThemeProvider>
    <div>
      <nav className="navbar navbar-default">
        <div className="container">
          <div className="navbar-header">
            <ul className="nav navbar-nav">
              <li>
                <Link to={'/home'}>Home</Link>
              </li>
              <li>
                <Link to={'/bootstrap'}>Bootstrap</Link>
              </li>
              <li>
                <Link to={'/colors'}>Colors</Link>
              </li>
              <li>
                <Link to={'/background'}>Background</Link>
              </li>
              <li>
                <Link to={'/cssFrameworks'}>CSS Frameworks</Link>
              </li>
              <li>
                <Link to={'/intro'}>Introduction</Link>
              </li>
              <li>
                <Link to={'/materialize'}>Materialize</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <hr />
    </div>
  </MuiThemeProvider>
);

export default Header;
