import React from 'react';
import {
  CarouselProvider,
  Slider,
  ButtonBack,
  ButtonNext,
  Image,
  Slide,
} from 'pure-react-carousel';
import ProjectModal from './ProjectModal';
import 'pure-react-carousel/dist/react-carousel.es.css';

const LPProjects = ({ projects, onClick }) => (
  <div className="tmProjectsContainer">
    {projects.map((proj) => (
      <div className="project-card" key={proj._id}>
        <div className="project-name-div">{proj.project_name}</div>
        <CarouselProvider
          naturalSlideWidth={12}
          naturalSlideHeight={12}
          totalSlides={3}
        >
          <div className="project-info">
            <Slider>
              {proj.project_photos.map((photo, i) => (
                <Slide index={i} className="project-photo-div">
                  <Image hasMasterSpinner src={photo} />
                </Slide>
              ))}
            </Slider>
            {/* <ButtonBack>Back</ButtonBack>
            <ButtonNext>Next</ButtonNext> */}
            <div className="project-details">
              <span className="project-description">
                {proj.project_description}
              </span>
              {proj.help && <span>This project is in need of assistance</span>}
              <ul className="needed-tools">
                {proj.needed_tools.map((tool) => (
                  <li>{tool}</li>
                ))}
              </ul>
            </div>
          </div>
        </CarouselProvider>
        <br />
      </div>
    ))}
  </div>
);

export default LPProjects;
