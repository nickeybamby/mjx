import "./services.css";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaSquareXTwitter } from "react-icons/fa6";

const Services = () => {
  return (
    <>
      <div id="services"></div>
      <section
        className="services w-full h-full items-center justify-center "
      >
        <h2 className="gradient__text text-2xl"> Services</h2>
        <p className="subtext">Hover to read more about services we offer</p>

        <div className="cards">
          <div className="about__team-card-container">
            <div className="team-card">
              <div className="team-image">
                {/* <img src={mayo} alt="" /> */}
              </div>

              <div className="card-image-content">
                <div className="contentBx">
                  <h3>
                    Web3 Marketing <br />
                    <span>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Commodi porro, velit non vero deleniti laborum iste
                      assumenda maxime inventore minus.
                    </span>
                  </h3>
                </div>
                <ul className="sci">
                  <li className="sci-icon" style={{ "--i": 1 }}>
                    <IoLogoLinkedin />
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="about__team-card-container">
            <div className="team-card">
              <div className="team-image">
                {/* <img src={mayo} alt="" /> */}
              </div>

              <div className="card-image-content">
                <div className="contentBx">
                  <h3>
                    Brand Strategist <br />
                    <span>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Commodi porro, velit non vero deleniti laborum iste
                      assumenda maxime inventore minus.
                    </span>
                  </h3>
                </div>
                <ul className="sci">
                  <li className="sci-icon" style={{ "--i": 1 }}>
                    <IoLogoLinkedin />
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="about__team-card-container">
            <div className="team-card">
              <div className="team-image">
                {/* <img src={mayo} alt="" /> */}
              </div>

              <div className="card-image-content">
                <div className="contentBx">
                  <h3>
                    Crypto Xchange <br />
                    <span>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Commodi porro, velit non vero deleniti laborum iste
                      assumenda maxime inventore minus.
                    </span>
                  </h3>
                </div>
                <ul className="sci">
                  <li className="sci-icon" style={{ "--i": 1 }}>
                    <IoLogoLinkedin />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
