import "./Header.css";
import hi from "../../images/ezgif.com-gif-maker.gif";

export default function Header() {
  return (
    <section className="header">
      <header>
        <h1  className="header-title"> Hello! <img src={hi} style={{width:"48px",height:"48px"}}></img></h1>
        <div className="header-title-box">
        👩‍💻 full stack developer form tunisia
        </div>
      </header>
    </section>
  );
}
