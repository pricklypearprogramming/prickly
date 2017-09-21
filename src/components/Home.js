import React from 'react';
import prickly from '../images/prickly.png';
import Grid from 'material-ui/Grid';
import { FormLabel, FormControlLabel } from 'material-ui/Form';
import Radio, { RadioGroup } from 'material-ui/Radio';
import { Paper, Columns } from 'material-ui';

const imgStyle = {
  height: "70px",
  width: "70px",
};
const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing.unit * 2,
  },
});
const classes = this.props.classes;
const { spacing } = this.state;
class Home extends React.Component {


  render() {
    return (
      <div>
        <div>
          {/* <h2>This is Home Page</h2> */}
          <img style={imgStyle} src={prickly} alt="Logo" />
          <p>Your name is, your age is</p>
          <button className="btn btn-primary">Make me older</button>
          <hr />
          <button className="btn btn-primary">Change Name</button>
        </div>
        <Grid container className={classes.root}>
          <Grid item xs={12}>
            <Grid container className={classes.demo} justify="center" spacing={Number(spacing)}>
              {[0, 1, 2].map(value => (
                <Grid key={value} item>
                  <Paper className={classes.paper} />
                </Grid>
              ))}
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Paper className={classes.control}>
              <Grid container>
                <Grid item>
                  <FormLabel>spacing</FormLabel>
                  <RadioGroup
                    name="spacing"
                    aria-label="spacing"
                    value={spacing}
                    onChange={this.handleChange('spacing')}
                    row
                  >
                    <FormControlLabel value="0" control={<Radio />} label="0" />
                    <FormControlLabel value="8" control={<Radio />} label="8" />
                    <FormControlLabel value="16" control={<Radio />} label="16" />
                    <FormControlLabel value="24" control={<Radio />} label="24" />
                    <FormControlLabel value="40" control={<Radio />} label="40" />
                  </RadioGroup>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}


export default Home;
