import React from 'react'
import { Link, withSiteData } from 'react-static'
import Particles from 'react-particles-js';
import { Animate } from 'react-move'

import './home.css'

export default withSiteData(() => (
    <div className="home-container">


      <div className="home-text-container">
        <h1 style={{ textAlign: 'center' }}>DEVELOPER</h1>
        <span className="home-text-container-location">SANTA BARBARA, CA</span>
        <div className="home-links">
          <div className="home-link" >
            <Link to="/about" className="home-link-text" style={{backgroundColor: 'black', color: 'white'}}>LEARN MORE</Link>
          </div>
          <div className="home-link" >
            <Link to="/portfolio" className="home-link-text" style={{backgroundColor: '#cf000f'}}>VIEW PORTFOLIO</Link>
          </div>
        </div>
      </div>
    </div>
  )
)
