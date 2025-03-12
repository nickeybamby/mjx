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
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit culpa laboriosam beatae, unde maiores, perferendis sint veritatis aperiam adipisci natus necessitatibus fugit accusamus quam quod amet quaerat tenetur ad! Nulla sint, obcaecati impedit aliquid accusamus libero laborum vero voluptate fuga eaque, rerum porro praesentium !</p>
            </div>
        </div>
      </section>
    </>
  );
};

export default About;
