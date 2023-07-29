import classes from './Hero.module.css';
import {BiLogoLinkedin} from "react-icons/bi"
import {AiFillGithub} from "react-icons/ai"
import {BsTwitter} from "react-icons/bs"
import {FaFacebookF} from "react-icons/fa"
const HeroSection = () => {
 
  return (
    <section id='hero' className={classes["hero-section"]}>
        <div className={classes["hero-text-container"]}>
          <div className={classes["flex-center"]}>
          <span className="spaceX text-black"data-aos="fade-up"  data-aos-delay="500" data-aos-duration="500">HELLO </span>
          <h1 className={classes["title-user"]} data-aos="fade-up"  data-aos-delay="1000" data-aos-duration="1000">I'M <span className="title">NIshant</span></h1>
          <span className="spaceX text-black" data-aos="fade-in"  data-aos-delay="1200" data-aos-duration="1000"> Web  Designer & Front-end Developer</span>
          <span className="spaceX text-light" data-aos="fade-in"  data-aos-delay="1200" data-aos-duration="1000"> Passionate about changing the world with technology.
</span>
          <div className={classes.links}>
             <span className={classes["links-hero"]}> <a target='blank' href='https://www.linkedin.com/in/nishant-kumar-124595284/'><BiLogoLinkedin fontSize={"1.5rem"}/></a></span>
             <span className={classes["links-hero"]}> <a target='blank' href='https://github.com/NishantMsingh'><AiFillGithub fontSize={"1.5rem"}/></a></span>
             <span className={classes["links-hero"]}> <a target='blank' href='https://twitter.com/Nishant82260284'><BsTwitter fontSize={"1.5rem"}/></a></span>
             <span className={classes["links-hero"]}> <a target='blank' href='https://www.facebook.com/profile.php?id=100095054529905'><FaFacebookF fontSize={"1.5rem"}/></a></span>
          </div>
          </div>
        </div>
    </section>
  );
};

export default HeroSection;
