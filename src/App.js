import logo from './logo.svg';
import './App.css';

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql
} from "@apollo/client";
import {useEffect, useState} from "react";

import {MapContainer, TileLayer, Marker, Popup, useMapEvent, useMap} from 'react-leaflet'

const client = new ApolloClient({
  uri: 'https://mappy-plotter.herokuapp.com/v1/graphql',
  cache: new InMemoryCache()
});

function App() {
  const [markers, setMarkers] = useState([])
  useEffect(()=>{
    client
        .query({
          query: gql`
     query MyQuery {
  locations {
    name
    latitude
    longitude
    name
    description
  }
}
    `
        })
        .then(({data}) => {
          console.log(data)
          setMarkers(data.locations)
        });
  }, [])


  function PanTo({marker}) {
    const map = useMap()
    map.panTo([marker.latitude, marker.longitude])
    return null
  }
  return (
    <div className="App">
      <header className="App-header">
        <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={true}>
          <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {markers.map(marker =>
            <Marker position={[marker.latitude, marker.longitude]}>
              <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
              </Popup>
            </Marker>
          )}
          <PanTo marker={markers.length && markers[0]}/>
        </MapContainer>
      </header>
    </div>
  );
}

export default App;
