import React from 'react';
import { Link } from 'react-router-dom';
import { FiPlus } from 'react-icons/fi';
import { Map, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

import { Container, AsideContainer } from './styles';
import mapMarkerImg from '../../assets/images/map-marker.svg';

const OrphanagesMap: React.FunctionComponent = () => {
  return (
    <Container>
      <AsideContainer>
        <header>
          <img src={mapMarkerImg} alt="Happy" />
          <h2>Choose a senior home on the map</h2>
          <p>Lots of seniors are looking forward to your visit :)</p>
        </header>
        <footer>
          <strong>Redding</strong>
          <span>CA</span>
        </footer>
      </AsideContainer>

      <Map
        center={[40.6061056, -122.3715392]}
        zoom={15}
        style={{ width: '100%', height: '100%' }}
      >
        {/* <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" /> */}
        <TileLayer
          url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
        />
      </Map>

      <Link to="" className="create-orphanage"><FiPlus size={32} /></Link>
    </Container >
  );
}

export default OrphanagesMap;
