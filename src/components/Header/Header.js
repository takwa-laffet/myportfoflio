import "./Header.css";
import hi from "../../images/ezgif.com-gif-maker.gif";

export default function Header() {
  return (
    <section className="header">
      <header>
        <h1  className="header-title"> Hello! it's <span className="purple-text">takwa laffet</span><img src={hi} style={{width:"48px",height:"48px"}}></img></h1>
        <div className="header-title-box">
        👩‍💻 full stack developer && cybersecurity Engineering Student form tunisia
        </div>
      </header>
    </section>
  );
}
