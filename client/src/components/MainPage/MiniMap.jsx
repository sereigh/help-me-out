import React from 'react';
import PropTypes from 'prop-types';
import { Loader } from 'google-maps';
import Zipcodes from 'zipcodes';

class MiniMap extends React.Component {
  componentDidMount() {
    this.renderMap();
  }

  renderMap() {
    const { zipcode } = this.props;
    const loader = new Loader('');
    loader.load()
      .then((google) => {
        const zip = Zipcodes.lookup(zipcode) || Zipcodes.lookup(80004);
        const lat = zip.latitude;
        const lng = zip.longitude;
        const map = new google.maps.Map(
          document.getElementById('map'), {
            center: { lat, lng },
            zoom: 14,
          },
        );
        Promise.resolve(map)
          .then(() => {
            const marker = new google.maps.Marker({ position: { lat, lng }, map });
            const circle = new google.maps.Circle({
              center: { lat, lng },
              radius: 1000,
              strokeColor: '#0000FF',
              strokeOpacity: 0.4,
              strokeWeight: 2,
              fillColor: '#0000FF',
              fillOpacity: 0.1,
              map,
            });
          });
      })
      .catch((e) => {
        console.error(e);
      });
  }

  render() {
    return (
      <div id="map" />
    );
  }
}

MiniMap.defaultProps = {
  zipcode: 80004,
};

MiniMap.propTypes = {
  zipcode: PropTypes.number,
};

export default MiniMap;
