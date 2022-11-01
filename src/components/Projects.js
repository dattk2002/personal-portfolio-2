import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Business Startup",
      description: "Design & Development",
      img1: "https://i.pinimg.com/originals/5d/21/22/5d2122a4bce2dad00cce9a62fdf4218b.jpg"
    },
    {
      title: "Hi",
      description: "Design & Development",
      img2: "https://i.pinimg.com/originals/11/86/3c/11863c4bd35f3c93c342a543ca58bb5e.jpg"
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      img3: "https://i.pinimg.com/originals/e8/f8/5e/e8f85ea8dcb45c33d775a76ef46a7e7f.jpg"
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      img4: "https://i.pinimg.com/originals/32/04/c8/3204c8622615676539b4a6c42d68e68f.jpg"
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      img5: "https://i.pinimg.com/originals/3f/36/8a/3f368a7615ee399a42f31256b0127b78.jpg"
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      img6: "https://i.pinimg.com/originals/35/78/70/35787019bf53be64436256c8c37b874b.jpg"
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Projects</h2>
                  <p>Here are some projects that I've joined up to now:</p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="first">Tab 1</Nav.Link>
                      </Nav.Item>
                      {/* <Nav.Item>
                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Tab 3</Nav.Link>
                      </Nav.Item> */}
                    </Nav>
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="first">
                        <Row>
                          {
                            projects.map((project, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                />
                              )
                            })
                          }
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="section">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
