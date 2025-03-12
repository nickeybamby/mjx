import "./services.css";
import { IoLogoLinkedin } from "react-icons/io5";
import Lottie from "lottie-react";
import brand from "../../brand.json";
import exchange from "../../exchange.json";
import marketing from "../../marketing.json";
import loader from "../../loader.json";
import { motion } from "motion/react";

const Services = () => {
  return (
    <>
      <div id="services"></div>
      <section className="services w-full h-full items-center justify-center ">
        <h2 className="gradient__text text-2xl"> Services</h2>
        <p className="subtext">Hover to read more about services we offer</p>

        <div className="cards">
          <div className="about__team-card-container">
            <div className="team-card">
              <div className="team-image">
              <Lottie
                  className=""
                  loop={true}
                  animationData={marketing}
                ></Lottie>
              </div>

              <div className="card-image-content">
                <div className="contentBx">
                  <h3>
                    Web3 Marketing <br />
                    <span>
                      We help drive engagement and growth with our Web3
                      marketing strategies—community building, influencer
                      outreach, and data-driven campaigns tailored for blokchain
                      projects.
                    </span>
                  </h3>
                </div>
                <ul className="sci">
                  <li className="sci-icon" style={{ "--i": 1 }}>
                  <Lottie
                  className="sci-lottie"
                  loop={true}
                  animationData={loader}
                ></Lottie>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="about__team-card-container">
            <div className="team-card">
              <div className="team-image">
                <Lottie
                  className=""
                  loop={true}
                  animationData={brand}
                ></Lottie>
              </div>

              <div className="card-image-content">
                <div className="contentBx">
                  <h3>
                    Brand Strategist <br />
                    <span>
                      We help Web3 brands define their identity, craft
                      compelling narratives, and establish a strong digital
                      presence in the decentralized space.
                    </span>
                  </h3>
                </div>
                <ul className="sci">
                  <li className="sci-icon" style={{ "--i": 1 }}>
                    <Lottie
                  className="sci-lottie"
                  loop={true}
                  animationData={loader}
                ></Lottie>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="about__team-card-container">
            <div className="team-card">
              <div className="team-image">
              <Lottie
                  className=""
                  loop={true}
                  animationData={exchange}
                ></Lottie>
              </div>

              <div className="card-image-content">
                <div className="contentBx">
                  <h3>
                    Crypto Xchange <br />
                    <span>
                      We offer secure, fast, and trasparent crypto trading. Buy,
                      sell, and swap any digital asset with ease on a
                      user-friendly platform.
                    </span>
                  </h3>
                </div>
                <ul className="sci">
                  <li className="sci-icon" style={{ "--i": 1 }}>
                    <Lottie
                  className="sci-lottie"
                  loop={true}
                  animationData={loader}
                ></Lottie>
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
