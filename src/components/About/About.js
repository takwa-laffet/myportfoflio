import "./About.css";
import iconImage from "../../images/logo.jpg";

export const About = () => {
  return (
    <section id="about" className="container container-about">
      <div className="about-left">
        <span className="purple-text">
          ✋Takwa laffet{" "}
          <span className="purple-smoke-text">- Introduction</span>{" "}
        </span>
        <p className="gray-text">
        Who Am I ?
        <br/>
        I am currently a Cybersecurity Engineering student at esprit tunisia.
         I hold a bachelor's degree in Information Technology,
          specializing in Information Systems Development, which I obtained from ISET 
          (Institut Supérieur des Études Technologiques). 
          My academic journey has equipped me with strong technical skills in areas such as web development,
           artificial intelligence, and networking. I have also gained practical experience through internships and projects,
            where I worked on developing innovative solutions and optimizing systems in various professional settings. </p>
        <span className="white-text">
          <a href="">Portfolio</a>
        </span>
        <ul className="tech-stack">
          <li>full stack Web Developer</li>
          <li>full stack mobile Developer</li>
          <li>Cybersecurity Analyst</li>
<li>Security Analyst</li>
<li>SOC Analyst</li>
<li>Information Security Analyst</li>
<li>IT Security Analyst</li>


        </ul>
        <a className="about-see" href="#">more {"->"} </a>
      </div>
      <div className="about-right">
        <img src={iconImage} alt="" />
      </div>
    </section>
  );
};
