import React from 'react';

class Contributor extends React.Component {
  render() {
    return (
      <div>
        <div class="body orange lighten-2">
          <nav>
            <div class="nav-wrapper sky blue lighten-2">
              <img src="images/prickly.png" class="brand-logo" />
              <ul id="nav-mobile" class="right hide-on-med-and-down">
                <li>
                  <a href="../../contributor-registration.html">Register</a>
                </li>
                <li>
                  <a href="badges.html">Log-In</a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <h1>Welcome to Contributor Section!</h1>
        <div>
          <h2>Ways to Contribute</h2>
          <p>Lorem Ipsum</p>
          <h3>Create a Video</h3>
          <img id="buildVideo" src="images/buildVideo.png" />
          <p>Lorem Ipsum</p>
          <h5>Sample Video</h5>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/jljZESJf-Gw"
            frameborder="0"
            allowfullscreen
          />
          <h6>This video was created by Christopher Greene-Szmadzinski</h6>
          <h3>Create an Infographic</h3>
          <img id="buildInfographic" src="images/buildInfographic.png" />
        </div>
      </div>
    );
  }
}

export default Contributor;
