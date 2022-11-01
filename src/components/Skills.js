import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Languages</h2>
              <p>Here are some programming languages<br></br> that I've learned up to now:</p>
              <div className="all-items">
                <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">

                  <div className="item">
                    <a href="https://en.wikipedia.org/wiki/HTML"><img src={"https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/2048px-HTML5_logo_and_wordmark.svg.png"} alt="Image" /></a>
                    <h5>HTML</h5>
                  </div>
                  <div className="item">
                    <a href="https://en.wikipedia.org/wiki/CSS"><img src={"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1452px-CSS3_logo_and_wordmark.svg.png"} alt="Image" /></a>
                    <h5>CSS</h5>
                  </div>
                  <div className="item">
                    <a href="https://en.wikipedia.org/wiki/Java"><img src={"https://seeklogo.com/images/J/java-logo-7F8B35BAB3-seeklogo.com.png"} alt="Image" /></a>
                    <h5>Java</h5>
                  </div>
                  <div className="item">
                    <a href="https://en.wikipedia.org/wiki/JavaScript"><img src={"https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/480px-Unofficial_JavaScript_logo_2.svg.png"} alt="Image" /></a>
                    <h5>JavaScript</h5>
                  </div>
                  <div className="item">
                    <a href="https://en.wikipedia.org/wiki/C%2B%2B"><img src={"https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/1822px-ISO_C%2B%2B_Logo.svg.png"} alt="Image" /></a>
                    <h5>C++</h5>
                  </div>

                </Carousel>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
