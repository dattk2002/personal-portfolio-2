import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, img1, img2, img3, img4, img5, img6 }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="project-img">
        <div className="proj-imgbx">
          <img src={img1} />
          <div className="proj-txtx">
            <h4>{title}</h4>
            <span>{description}</span>
          </div>
        </div>

        <div className="proj-imgbx">
          <img src={img2} />
          <div className="proj-txtx">
            <h4>{title}</h4>
            <span>{description}</span>
          </div>
        </div>

        <div className="proj-imgbx">
          <img src={img3} />
          <div className="proj-txtx">
            <h4>{title}</h4>
            <span>{description}</span>
          </div>
        </div>

        <div className="proj-imgbx">
          <img src={img4} />
          <div className="proj-txtx">
            <h4>{title}</h4>
            <span>{description}</span>
          </div>
        </div>

        <div className="proj-imgbx">
          <img src={img5} />
          <div className="proj-txtx">
            <h4>{title}</h4>
            <span>{description}</span>
          </div>
        </div>

        <div className="proj-imgbx">
          <img src={img6} />
          <div className="proj-txtx">
            <h4>{title}</h4>
            <span>{description}</span>
          </div>
        </div>
      </div>




    </Col>
  )
}
