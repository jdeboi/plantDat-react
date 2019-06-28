import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';

class Footer extends React.Component {
  render() {
    return(
      <footer className="page-footer font-small plantColor pt-4">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6 mt-md-0 mt-3 text-center text-md-left">
              <h5>Mission</h5>
              <hr />
              <p>Plant Dat seeks to promote indigenous plants, pavement removal, and green infrastructure for sustainable water management in New Orleans.</p>
            </div>
            <div className="col-md-6 mt-md-0 mt-3 text-center">
              <a href="https://www.instagram.com/plant_dat/">
                <FontAwesomeIcon icon={faInstagram} className="fa-4x" />
              </a>
              <a href="https://www.facebook.com/plant_dat/">
                <FontAwesomeIcon icon={faFacebook} className="fa-4x" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer
