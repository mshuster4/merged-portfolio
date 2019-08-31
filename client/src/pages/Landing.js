import React, { Component } from "react";
import ScrollAnimation from 'react-animate-on-scroll';
import LandingContainer from "../components/LandingContainer";
import LandingImg from "../components/LandingImg";
import { MDBBtn } from "mdbreact";
import { Link, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';


class Landing extends Component {

    render() {
        return (
           <ScrollAnimation animateIn="fadeIn">
              <LandingContainer>
                 <LandingImg className="d-flex justify-content-start">
                    <div className="landing-content">
                       <div className="headline-container">
                            <h1 className="h1-responsive">My name is <span className="accent-color">Marguerite Shuster</span>.</h1>
                            <h1 className="h1-responsive">I am a <span className="accent-color">Web Developer</span> and <span className="accent-color"> UI Designer</span>.</h1>
                        </div>
                        <div className="button-container">
                            <Link
                               to="portfolio" spy={true} 
                               smooth={true}
                               offset={-30}
                               duraton={500}
                            >
                                <MDBBtn className="landing-botton" outline={true}>
                                    View My Creations 
                                </MDBBtn>
                            </Link>
                        </div>
                    </div>
                 </LandingImg>
              </LandingContainer>
          </ScrollAnimation>
        );
    }
}


export default Landing;