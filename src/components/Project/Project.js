import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Project.css";

import {FiLinkedin, FiGithub} from "react-icons/fi";
import { FaEnvelope } from "react-icons/fa";

function Project() {
  return (
    <section id="projects" className="container container-project">
      <span className="purple-text">
        ‍💻Tools I Know
        
      </span>
     
        <div className="project-box">
        <ul className="tech-stack">
        <li>Python</li>
        <li>Css</li>
        <li>Java Script</li>
        <li>Php</li>
        <li>Typescript</li>
        <li>Reactjs</li>
        <li>Nodejs</li>
        <li>C</li>
        <li>C++</li>
        <li>java</li>
        <li>Mysql</li> 
        <li>Git</li> 
        <li>Bootstrap</li>
        <li>Material UI</li>
        <li>Linux</li>
        <li>Postgres</li>
        <li>Wordpress</li>
        <li>React Native</li>
        <li>Flutter</li>
        <li>npm</li>
        <li>Wireshark</li>

        <li>Html</li>

       </ul>
        </div>
        <span className="purple-text" style={{textAlign: "center"}}>Connect with me</span>
        <div id="footer" className="container-fluid text-center py-5">
        <div className="container">
   
          <br/>
					<div className="row">
						<div className="col-12 col-sm-12 col-md-8 ">
							<a
              style={{
                margin: "3px"}}
								href="mailto:takwa.laffet@esprit.tn"
                target="_blank"
                rel="noreferrer"
                className="icon-colour home-social-icons">
				<FaEnvelope/>
							</a>
							<a
              style={{
                margin: "3px"}}
								className="mx-3"
								href="https://github.com/takwa-laffet"
								target="_blank"
								rel="noopener noreferrer">
								<FiGithub/>
							</a>
							<a
              style={{
                margin: "3px"}}
								className="mx-3"
                href="https://www.linkedin.com/in/takwa-laffet-883239211/"
								target="_blank"
								rel="noopener noreferrer">
										<FiLinkedin/>
							</a>
						</div>
          </div>
          </div>
</div>
    </section>
  );
}

export default Project;
