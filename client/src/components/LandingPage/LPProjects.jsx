import React from 'react';
import ProjectModal from './ProjectModal';
import {
  CarouselProvider,
  Slider,
  ButtonBack,
  ButtonNext,
  Image,
  Slide,
} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

const LPProjects = ({ projects, onClick }) => (
  <div className="tmProjectsContainer">
    {projects.map((proj) => (
      <div onClick={onClick} key={proj._id}>
        <h5>{proj.project_name}</h5>
        <CarouselProvider
          naturalSlideWidth={8}
          naturalSlideHeight={12}
          totalSlides={3}
          style={{ width: '250px' }}
        >
          <Slider>
            {proj.project_photos.map((photo, i) => (
              <Slide index={i}>
                <Image hasMasterSpinner={true} src={photo} />
              </Slide>
            ))}
          </Slider>
          <ButtonBack>Back</ButtonBack>
          <ButtonNext>Next</ButtonNext>
        </CarouselProvider>

        <div>{proj.project_description}</div>
        {proj.help && <div>This project is in need of assistance</div>}
        {proj.needed_tools.map((tool) => (
          <div>{tool}</div>
        ))}
        <br />
      </div>
    ))}
  </div>
);

export default LPProjects;
