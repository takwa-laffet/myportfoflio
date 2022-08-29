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
        I am a Grade 3 student studying @ higher Institute of Technological Studies of Kebili,tunisia<br/>
        I’m currently learning Java, flutter and ReactJS.
        </p>
        <span className="white-text">
          <a href="">Portfolio</a>
        </span>
        <ul className="tech-stack">
          <li>full stack Web Developer</li>
          <li>full stack mobile Developer</li>
          <li>Ui/Ux Designer</li>
        </ul>
        <a className="about-see" href="#">more {"->"} </a>
      </div>
      <div className="about-right">
        <img src={iconImage} alt="" />
      </div>
    </section>
  );
};
