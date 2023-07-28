import classes from './Hero.module.css';
import {BiLogoLinkedin} from "react-icons/bi"
import {AiFillGithub} from "react-icons/ai"
import {BsTwitter} from "react-icons/bs"
import {FaFacebookF} from "react-icons/fa"
const HeroSection = () => {
 
  return (
    <section className={classes["hero-section"]}>
        <div className={classes["hero-text-container"]}>
          <div className={classes["flex-center"]}>
          <span className="spaceX text-black"data-aos="fade-up"  data-aos-delay="500" data-aos-duration="500">HELLO </span>
          <h1 className={classes["title-user"]} data-aos="fade-up"  data-aos-delay="1000" data-aos-duration="1000">I'M <span className="title">NIshant</span></h1>
          <span className="spaceX text-black" data-aos="fade-in"  data-aos-delay="1200" data-aos-duration="1000">Visual Designer & Front-end Developer</span>
          <div className={classes.links}>
             <span className={classes["links-hero"]}> <a href='#linkidin'><BiLogoLinkedin fontSize={"1.5rem"}/></a></span>
             <span className={classes["links-hero"]}> <a href='#linkidin'><AiFillGithub fontSize={"1.5rem"}/></a></span>
             <span className={classes["links-hero"]}> <a href='#linkidin'><BsTwitter fontSize={"1.5rem"}/></a></span>
             <span className={classes["links-hero"]}> <a href='#linkidin'><FaFacebookF fontSize={"1.5rem"}/></a></span>
          </div>
          </div>
        </div>
    </section>
  );
};

export default HeroSection;
