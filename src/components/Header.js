import React from 'react';
import { Link } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { green100, green500, green700 } from 'material-ui/styles/colors';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import { List, ListItem } from 'material-ui/List';
import injectTapEventPlugin from 'react-tap-event-plugin';
//import '../css/materialize.min.css';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import prickly from '../images/prickly.png'
import { purple500, blueGrey500 } from 'material-ui/styles/colors';

// The Header creates links that can be used to navigate
// between routes.
//injectTapEventPlugin();

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: purple500,
    accent1Color: blueGrey500,
  },
});
const imgStyle = {
  height: "70px",
  width: "70px",
};



//const Header = () => (
class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      drawerOpened: false,
    };
  }
  _toggleDrawer() {
    this.setState({
      drawerOpened: !this.state.drawerOpened,
    });
  }

  render() {
    return (
      // <div>
      //   <nav className="navbar navbar-default">
      //     <div className="container">
      //       <div className="navbar-header">
      //         <ul className="nav navbar-nav">
      //           <li>
      //             <Link to={'/home'}>Home</Link>
      //           </li>
      //           <li>
      //             <Link to={'/bootstrap'}>Bootstrap</Link>
      //           </li>
      //           <li>
      //             <Link to={'/colors'}>Colors</Link>
      //           </li>
      //           <li>
      //             <Link to={'/background'}>Background</Link>
      //           </li>
      //           <li>
      //             <Link to={'/cssFrameworks'}>CSS Frameworks</Link>
      //           </li>
      //           <li>
      //             <Link to={'/intro'}>Introduction</Link>
      //           </li>
      //           <li>
      //             <Link to={'/materialize'}>Materialize</Link>
      //           </li>
      //         </ul>
      //       </div>
      //     </div>
      //   </nav>
      //   <hr />
      // </div>

      <MuiThemeProvider muiTheme={muiTheme}>
        <div>
          <AppBar
            title="Prickly Pear Programming"
            onLeftIconButtonTouchTap={() => this._toggleDrawer()}
            iconElementRight={<img style={imgStyle} src={prickly} alt="Logo" />} />
          <Drawer
            open={this.state.drawerOpened}
            docked={false}
            onRequestChange={() => this._toggleDrawer()}
          >
            <List>
              <ListItem>
                <Link to={'/home'}>Home</Link>
              </ListItem>
              <ListItem>
                <Link to={'/intro'}>Introduction</Link>
              </ListItem>
              <ListItem>
                <Link to={'/background'}>Background</Link>
              </ListItem>
              <ListItem>
                <Link to={'/materialize'}>Materialize</Link>
              </ListItem>
              <ListItem>
                <Link to={'/colors'}>Colors</Link>
              </ListItem>
              <ListItem>
                <Link to={'/cssFrameworks'}>CSS Frameworks</Link>
              </ListItem>
            </List>
          </Drawer>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default Header;
