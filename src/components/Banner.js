import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = ["Front-end Developer", "...", "Web Developer"];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <span className="tagline">Welcome to my Portfolio</span>
                  <h1>{` Hello! I'm Tran Kim Dat `} <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "A Front-end Developer", "Web Developer"]'><span className="wrap">{text}</span></span></h1>
                  <p>Frontend development has lived an enormous evolution involving many changes over recent years. We have seen many new frameworks that come month after month, incorporating, relatively, new ideas, patterns, and development paradigms. At the same time, there has been an active evolution of the web standards that rule over the World Wide Web and the JavaScript programming language, which actively adds new features to help us, programmers, write better web applications.</p>
                  {/* <button onClick={() => console.log('connect')}>Let’s Connect <ArrowRightCircle size={25} /></button> */}
                </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={"image-avatar"}>
                  {/* // <div className={isVisible ? "animate__animated animate__zoomIn" : ""}> */}
                  <a href="https://www.facebook.com/qthighschool"><img src={"https://scontent.fsgn4-1.fna.fbcdn.net/v/t1.6435-9/153332434_1061067621080430_2241865970440797507_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=174925&_nc_ohc=5abaGlCsKIwAX9z-IhF&_nc_ht=scontent.fsgn4-1.fna&oh=00_AfAGPo7wub_Gh5y-gnDCNcawzD1iTyXHJDBLTiTNWc-zNA&oe=63849CBD"} alt="Header Img" /></a>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
