import "./about.css";
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
                <h4 className="subtext text-lg font-medium">Michael John (CEO)</h4>
            </div>
            <div className="about__text">
                <p>Michael John is a visionary Web3 brand strategist and crypto marketer expert with a deep passion for blockchain innovation. With years of experience in the space, he has successfully helped numerous blockchain startups and established projects build their brand, expand their community, and drive adoption in the rapidly evolving digital space. <br /> <br /> Currently, Michael is leading the marketing efforts for Meta Whale, a groundbreaking Web3 project redefining dital asset ownership and community-driven ecosystems. Through strategic partnership, influencer collaborations, and data-driven marketing campaigns, he is positioning Meta Whale as a dominant force in the metaverse and DeFi space. <br /><br />At MJXchange Michael brings his expertise to help crypto brands establish their presence, craft compelling narratives, and scale in the evergrowing blockchain industry. His result-driven approach ensures that Web3 businesses not only gain visibility but also foster meaningful engagement with their target audience.</p>
            </div>
        </div>
      </section>
    </>
  );
};

export default About;
