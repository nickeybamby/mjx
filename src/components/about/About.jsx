import "./about.css";
import { FaSquareXTwitter } from "react-icons/fa6";
import { AiFillTikTok } from "react-icons/ai";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import mj from '../../assets/images/mj.png'

const About = () => {
  return (
    <>
      <div id="about"></div>
      <section className="about">
        <h2 className="gradient__text text-2xl text-center"> About</h2>

        <div className="about__container section__padding">
            <div className="about__img-container ">
                <img src={mj} alt="michael john" />
                <h4 className="subtext text-lg font-medium">John Michael (CEO)</h4>
                <div className="socials gap-1.5 flex space-x-4 text-2xl ">
                  <a href="https://x.com/Johnn_Miichael" rel="noopener noreferrer" target="_blank"><FaSquareXTwitter /></a>
                  <a href="https://tiktok.com/@johnn_miichael" rel="noopener noreferrer" target="_blank"><AiFillTikTok /></a>
                  <a href="https://t.me/MJalphas" rel="noopener noreferrer" target="_blank"><FaTelegram /></a>
                  <a href="https://instagram.com/ehmjay.crypt" rel="noopener noreferrer" target="_blank"> <FaInstagramSquare  /></a>
                  <a href="https://www.linkedin.com/in/john-michael-0b38b4172?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" rel="noopener noreferrer" target="_blank"><FaLinkedin /></a>
                </div>
            </div>
            <div className="about__text">
                <p>John Michael is a visionary Web3 brand strategist and crypto marketer expert with a deep passion for blockchain innovation. With years of experience in the space, he has successfully helped numerous blockchain startups and established projects build their brand, expand their community, and drive adoption in the rapidly evolving digital space. <br /> <br /> Currently, John Michael is leading the marketing efforts for Meta Whale, a groundbreaking Web3 project redefining dital asset ownership and community-driven ecosystems. Through strategic partnership, influencer collaborations, and data-driven marketing campaigns, he is positioning Meta Whale as a dominant force in the metaverse and DeFi space. <br /><br />At MJXchange John Michael leverages his expertise in cryptocurrency and exchage sector to help traders and investors seamlessly navigate the digital asset space. With a deep understanding of crypto markets, liquidity strategies, and exchange platforms, he developes solutions that prioritize trust in exchange platforms,securty, accessibility, and efficiency in trading.</p>
            </div>
        </div>
      </section>
    </>
  );
};

export default About;
