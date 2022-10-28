import './App.css';
import {useEffect, useState} from "react";

import {MapContainer, TileLayer, Marker, Popup, useMapEvent, useMap} from 'react-leaflet'

function App() {
  const markers = [
   {
     "_id": {"$oid": "5f4fc80bae206d00314fa2ba"},
     "latitude": "33.59995",
     "longitude": "-117.71742",
     "name": "The Wellington Independent Living"
   },
   {
     "_id": {"$oid": "5f4fcb03ae206d00314fb30e"},
     "latitude": "33.64768",
     "longitude": "-111.92083",
     "name": "Maravilla Scottsdale Independent Living"
   },
   {
     "_id": {"$oid": "5f4fcb47a0ebc100320a7734"},
     "latitude": "47.25243",
     "longitude": "-122.54594",
     "name": "Narrows Glen Independent Living"
   },
   {
     "_id": {"$oid": "5f510635a0ebc100320d829b"},
     "latitude": "33.64783",
     "longitude": "-111.92011",
     "name": "Maravilla Scottsdale Assisted Living"
   },
   {
     "_id": {"$oid": "5f51065fae206d003152cee6"},
     "latitude": "33.64783",
     "longitude": "-111.92011",
     "name": "Maravilla Scottsdale Enliven"
   },
   {
     "_id": {"$oid": "5f5106a17f830700315c29b7"},
     "latitude": "47.25243",
     "longitude": "-122.54594",
     "name": "Narrows Glen Assisted Living"
   },
   {
     "_id": {"$oid": "5f5106b55e72d700349bb020"},
     "latitude": "47.25243",
     "longitude": "-122.54594",
     "name": "Narrows Glen Enliven"
   },
   {
     "_id": {"$oid": "5f5106f07f830700315c2a03"},
     "latitude": "33.59995",
     "longitude": "-117.71742",
     "name": "The Wellington Assisted Living"
   },
   {
     "_id": {"$oid": "5f77439e6776b4001e78b97d"},
     "latitude": "34.23832",
     "longitude": "-118.56206",
     "name": "The Village at NorthRidge Assisted Living"
   },
   {
     "_id": {"$oid": "5f7743bd6776b4001e78b9cb"},
     "latitude": "34.23832",
     "longitude": "-118.56206",
     "name": "The Village at NorthRidge Independent Living"
   },
   {
     "_id": {"$oid": "5f80951130f882001d4e461c"},
     "latitude": "32.31927",
     "longitude": "-111.00392",
     "name": "Amber Lights Independent Living"
   },
   {
     "_id": {"$oid": "5f80955930f882001d4e46d2"},
     "latitude": "32.3194",
     "longitude": "-111.00428",
     "name": "Amber Lights"
   },
   {
     "_id": {"$oid": "5f8097a530f882001d4e58ea"},
     "latitude": "26.23051",
     "longitude": "-81.77227",
     "name": "The Carlisle Naples Assisted Living"
   },
   {
     "_id": {"$oid": "5f809a9a30f882001d4e6319"},
     "latitude": "26.23051",
     "longitude": "-81.77227",
     "name": "The Carlisle Naples Independent Living"
   },
   {
     "_id": {"$oid": "5f80a78e30f882001d4ec125"},
     "latitude": "37.78725",
     "longitude": "-122.42594",
     "name": "Coventry Place"
   },
   {
     "_id": {"$oid": "5f80a80330f882001d4ec313"},
     "latitude": "37.78725",
     "longitude": "-122.42594",
     "name": "Coventry Place Independent Living"
   },
   {
     "_id": {"$oid": "5f80a85030f882001d4ec523"},
     "latitude": "37.78725",
     "longitude": "-122.42594",
     "name": "Coventry Place Enliven"
   },
   {
     "_id": {"$oid": "5f80aa6130f882001d4ece38"},
     "latitude": "37.75703",
     "longitude": "-122.47719",
     "name": "Cypress at Golden Gate"
   },
   {
     "_id": {"$oid": "5f80aad730f882001d4ecf1c"},
     "latitude": "37.75703",
     "longitude": "-122.47719",
     "name": "Cypress at Golden Gate Independent Living"
   },
   {
     "_id": {"$oid": "5f80adba30f882001d4ee55e"},
     "latitude": "37.75703",
     "longitude": "-122.47719",
     "name": "Cypress at Golden Gate Enliven"
   },
   {
     "_id": {"$oid": "5f80afdf30f882001d4efa65"},
     "latitude": "33.5988",
     "longitude": "-117.71541",
     "name": "Las Palmas"
   },
   {
     "_id": {"$oid": "5f80b03630f882001d4efe75"},
     "latitude": "33.5988",
     "longitude": "-117.71541",
     "name": "Las Palmas Independent Living"
   },
   {
     "_id": {"$oid": "5f8767cc20501f001efe6a44"},
     "latitude": "33.55101",
     "longitude": "-112.05975",
     "name": "La Siena"
   },
   {
     "_id": {"$oid": "5f8767e820501f001efe6a49"},
     "latitude": "33.55101",
     "longitude": "-112.05975",
     "name": "La Siena Independent Living"
   },
   {
     "_id": {"$oid": "5f876a5420501f001efe7797"},
     "latitude": "33.55963",
     "longitude": "-117.6565",
     "name": "La Vida Mission Viejo"
   },
   {
     "_id": {"$oid": "5f876a6b20501f001efe77a4"},
     "latitude": "33.55963",
     "longitude": "-117.6565",
     "name": "La Vida Mission Viejo Independent Living"
   },
   {
     "_id": {"$oid": "5f8867a220501f001e0058c9"},
     "latitude": "32.98169",
     "longitude": "-117.26158",
     "name": "La Vida Del Mar Independent Living"
   },
   {
     "_id": {"$oid": "5f886a6320501f001e00675b"},
     "latitude": "32.98169",
     "longitude": "-117.26158",
     "name": "La Vida Del Mar"
   },
   {
     "_id": {"$oid": "5f886bf720501f001e007236"},
     "latitude": "32.74808",
     "longitude": "-116.93051",
     "name": "La Vida Real Independent Living"
   },
   {
     "_id": {"$oid": "5f9057a083552e001d7d9a7a"},
     "latitude": "32.74808",
     "longitude": "-116.93051",
     "name": "La Vida Real Assisted Living"
   },
   {
     "_id": {"$oid": "5f9057f783552e001d7d9eb8"},
     "latitude": "32.74808",
     "longitude": "-116.93051",
     "name": "La Vida Real Memory Care"
   },
   {
     "_id": {"$oid": "5f90580683552e001d7d9f16"},
     "latitude": "32.74808",
     "longitude": "-116.93051",
     "name": "La Vida Real Club"
   },
   {
     "_id": {"$oid": "5f9b0dd4215496001d43f0c8"},
     "latitude": "34.44266",
     "longitude": "-119.81541",
     "name": "Maravilla at Santa Barbara Independent Living"
   },
   {
     "_id": {"$oid": "5f9b0e04215496001d43f1d4"},
     "latitude": "34.44266",
     "longitude": "-119.81541",
     "name": "Maravilla at Santa Barbara Assisted Living"
   },
   {
     "_id": {"$oid": "5f9b0e14215496001d43f1e9"},
     "latitude": "34.44266",
     "longitude": "-119.81541",
     "name": "Maravilla at Santa Barbara Enliven"
   },
   {
     "_id": {"$oid": "5f9b0e24215496001d43f23d"},
     "latitude": "34.44266",
     "longitude": "-119.81541",
     "name": "Maravilla at Santa Barbara Club"
   },
   {
     "_id": {"$oid": "5f9b11aa215496001d440af2"},
     "latitude": "45.53023",
     "longitude": "-122.70146",
     "name": "Northwest Place"
   },
   {
     "_id": {"$oid": "5f9b1362215496001d4414b2"},
     "latitude": "37.68587",
     "longitude": "-122.47243",
     "name": "Peninsula Del Rey Assisted Living"
   },
   {
     "_id": {"$oid": "5f9b1371215496001d4414f9"},
     "latitude": "37.68587",
     "longitude": "-122.47243",
     "name": "Peninsula Del Rey Independent Living"
   },
   {
     "_id": {"$oid": "5f9b1592215496001d4420d1"},
     "latitude": "38.57622",
     "longitude": "-121.41755",
     "name": "River's Edge Assisted Living"
   },
   {
     "_id": {"$oid": "5f9b1600215496001d442421"},
     "latitude": "38.57622",
     "longitude": "-121.41755",
     "name": "River's Edge Independent Living"
   },
   {
     "_id": {"$oid": "5f9b161b215496001d442679"},
     "latitude": "38.57708",
     "longitude": "-121.41799",
     "name": "River's Edge Enliven"
   },
   {
     "_id": {"$oid": "5f9c2f3eb69d99001dc5ea2b"},
     "latitude": "38.76218",
     "longitude": "-121.30875",
     "name": "Sierra Pointe Independent Living"
   },
   {
     "_id": {"$oid": "5f9c2f84b69d99001dc5ea6e"},
     "latitude": "38.76218",
     "longitude": "-121.30875",
     "name": "Sierra Pointe"
   },
   {
     "_id": {"$oid": "5f9c33a7b69d99001dc5ff0c"},
     "latitude": "31.82515",
     "longitude": "-111.00064",
     "name": "Silver Springs"
   },
   {
     "_id": {"$oid": "5f9c33bab69d99001dc5ff58"},
     "latitude": "31.82551",
     "longitude": "-110.99852",
     "name": "Silver Springs Independent Living"
   },
   {
     "_id": {"$oid": "5f9c33e5b69d99001dc60017"},
     "latitude": "31.82551",
     "longitude": "-110.99852",
     "name": "Silver Springs Club"
   },
   {
     "_id": {"$oid": "5f9c3634b69d99001dc606dd"},
     "latitude": "45.2868",
     "longitude": "-122.76739",
     "name": "SpringRidge Court Assisted Living"
   },
   {
     "_id": {"$oid": "5f9c36e2b69d99001dc60862"},
     "latitude": "45.2868",
     "longitude": "-122.76739",
     "name": "SpringRidge Independent Living"
   },
   {
     "_id": {"$oid": "5f9c3751b69d99001dc60cfd"},
     "latitude": "45.28817",
     "longitude": "-122.7675",
     "name": "SpringRidge Enliven "
   },
   {
     "_id": {"$oid": "5f9c3b52b69d99001dc6390f"},
     "latitude": "38.57114",
     "longitude": "-121.47158",
     "name": "Chateau on Capitol Ave IL"
   },
   {
     "_id": {"$oid": "5f9c3b69b69d99001dc63980"},
     "latitude": "38.57114",
     "longitude": "-121.47158",
     "name": "Chateau on Capitol Avenue"
   },
   {
     "_id": {"$oid": "5f9c3ca7b69d99001dc64617"},
     "latitude": "34.27124",
     "longitude": "-118.68811",
     "name": "Foothills at Simi Valley Assisted Living"
   },
   {
     "_id": {"$oid": "5f9c3cbab69d99001dc64634"},
     "latitude": "34.27124",
     "longitude": "-118.68811",
     "name": "Foothills at Simi Valley Enliven"
   },
   {
     "_id": {"$oid": "5f9c3e79b69d99001dc64f9e"},
     "latitude": "33.8819",
     "longitude": "-118.09806",
     "name": "The Grove at Cerritos"
   },
   {
     "_id": {"$oid": "5f9c3ea0b69d99001dc6503e"},
     "latitude": "33.8819",
     "longitude": "-118.09806",
     "name": "The Grove at Cerritos Independent Living"
   },
   {
     "_id": {"$oid": "5f9c5476b69d99001dc6f5ae"},
     "latitude": "34.15813",
     "longitude": "-118.33138",
     "name": "The Heights at Burbank"
   },
   {
     "_id": {"$oid": "5f9c5493b69d99001dc6f612"},
     "latitude": "34.15813",
     "longitude": "-118.33138",
     "name": "The Heights at Burbank Independent Living"
   },
   {
     "_id": {"$oid": "5f9c54ccb69d99001dc6f69a"},
     "latitude": "34.15813",
     "longitude": "-118.33138",
     "name": "The Heights at Burbank Enliven"
   },
   {
     "_id": {"$oid": "5f9c5738b69d99001dc700f7"},
     "latitude": "33.65745",
     "longitude": "-112.3604",
     "name": "The Heritage Tradition Assisted Living"
   },
   {
     "_id": {"$oid": "5f9c575ab69d99001dc701a0"},
     "latitude": "33.65745",
     "longitude": "-112.3604",
     "name": "The Heritage Tradition Independent Living"
   },
   {
     "_id": {"$oid": "5f9c5925b69d99001dc717da"},
     "latitude": "37.92701",
     "longitude": "-122.06574",
     "name": "The Kensington Assisted Living"
   },
   {
     "_id": {"$oid": "5f9c593cb69d99001dc71833"},
     "latitude": "37.92701",
     "longitude": "-122.06574",
     "name": "The Kensington Enliven"
   },
   {
     "_id": {"$oid": "5f9c5f02b69d99001dc73456"},
     "latitude": "33.85385",
     "longitude": "-84.36517",
     "name": "Piedmont at Buckhead Assisted Living"
   },
   {
     "_id": {"$oid": "5f9c5f1cb69d99001dc7356f"},
     "latitude": "33.85385",
     "longitude": "-84.36517",
     "name": "Piedmont at Buckhead Independent Living"
   },
   {
     "_id": {"$oid": "5fa07557216326001d097176"},
     "latitude": "33.6071",
     "longitude": "-117.73337",
     "name": "The Regency"
   },
   {
     "_id": {"$oid": "5fa0757d216326001d097621"},
     "latitude": "33.6071",
     "longitude": "-117.73337",
     "name": "The Regency Independent Living"
   },
   {
     "_id": {"$oid": "5fa07ce4216326001d09aa7a"},
     "latitude": "34.16939",
     "longitude": "-118.45023",
     "name": "The Village at Sherman Oaks Assisted Living"
   },
   {
     "_id": {"$oid": "5fa07d46216326001d09ad92"},
     "latitude": "34.16939",
     "longitude": "-118.45023",
     "name": "The Village at Sherman Oaks Independent Living"
   },
   {
     "_id": {"$oid": "5fa07d8c216326001d09aed4"},
     "latitude": "34.16939",
     "longitude": "-118.45023",
     "name": "The Village at Sherman Oaks Enliven"
   },
   {
     "_id": {"$oid": "5fa085f6216326001d09deb0"},
     "latitude": "33.2471",
     "longitude": "-111.86348",
     "name": "The Village at Ocotillo"
   },
   {
     "_id": {"$oid": "5fa08628216326001d09df95"},
     "latitude": "33.2471",
     "longitude": "-111.86348",
     "name": "The Village at Ocotillo Independent Living"
   },
   {
     "_id": {"$oid": "5fa087f9216326001d09e830"},
     "latitude": "32.235",
     "longitude": "-110.85704",
     "name": "Villa Hermosa"
   },
   {
     "_id": {"$oid": "5fa0880a216326001d09e842"},
     "latitude": "32.235",
     "longitude": "-110.85704",
     "name": "Villa Hermosa Independent Living"
   },
   {
     "_id": {"$oid": "5fb4457c678d43001d7cfea0"},
     "latitude": "30.39625",
     "longitude": "-97.72459",
     "name": "Maravilla at the Domain Independent Living"
   },
   {
     "_id": {"$oid": "5fb5633ac0273f001dfdf703"},
     "latitude": "30.39625",
     "longitude": "-97.72459",
     "name": "Maravilla at the Domain Assisted Living"
   },
   {
     "_id": {"$oid": "5fd8e9f8b36c9e001d0245ba"},
     "latitude": "33.64768",
     "longitude": "-111.92083",
     "name": "Maravilla Scottsdale Preview"
   },
   {
     "_id": {"$oid": "5fd8eab7b36c9e001d024e5f"},
     "latitude": "47.25243",
     "longitude": "-122.54594",
     "name": "Narrows Glen Preview"
   },
   {
     "_id": {"$oid": "5feb6136618d46001d16f1c9"},
     "latitude": "32.3194",
     "longitude": "-111.00428",
     "name": "Amber Lights Preview"
   },
   {
     "_id": {"$oid": "5feb617b618d46001d16f3bd"},
     "latitude": "33.55101",
     "longitude": "-112.05975",
     "name": "La Siena Preview"
   },
   {
     "_id": {"$oid": "5feb61c2618d46001d16f488"},
     "latitude": "31.82551",
     "longitude": "-110.99852",
     "name": "Silver Springs Preview"
   },
   {
     "_id": {"$oid": "5feb6334618d46001d16ffb4"},
     "latitude": "33.65745",
     "longitude": "-112.3604",
     "name": "The Heritage Preview"
   },
   {
     "_id": {"$oid": "5feb645c618d46001d170e61"},
     "latitude": "33.2471",
     "longitude": "-111.86348",
     "name": "The Village at Ocotillo Preview"
   },
   {
     "_id": {"$oid": "5feb647c618d46001d170f1b"},
     "latitude": "32.235",
     "longitude": "-110.85704",
     "name": "Villa Hermosa Preview"
   },
   {
     "_id": {"$oid": "5feb64b1618d46001d170f8b"},
     "latitude": "37.78725",
     "longitude": "-122.42594",
     "name": "Coventry Place Preview"
   },
   {
     "_id": {"$oid": "5feb64f9618d46001d1710a6"},
     "latitude": "37.75703",
     "longitude": "-122.47719",
     "name": "Cypress at Golden Gate Preview"
   },
   {
     "_id": {"$oid": "5feb6527618d46001d171123"},
     "latitude": "33.55963",
     "longitude": "-117.6565",
     "name": "La Vida Mission Viejo Preview"
   },
   {
     "_id": {"$oid": "5feb65f70be7f8001d786f11"},
     "latitude": "32.98169",
     "longitude": "-117.26158",
     "name": "La Vida Del Mar Preview"
   },
   {
     "_id": {"$oid": "5feb662e0be7f8001d78704f"},
     "latitude": "32.74808",
     "longitude": "-116.93051",
     "name": "La Vida Real Preview"
   },
   {
     "_id": {"$oid": "5feb66ac0be7f8001d787421"},
     "latitude": "33.5988",
     "longitude": "-117.71541",
     "name": "Las Palmas Preview"
   },
   {
     "_id": {"$oid": "5feb66d90be7f8001d7876f6"},
     "latitude": "34.44266",
     "longitude": "-119.81541",
     "name": "Maravilla Preview"
   },
   {
     "_id": {"$oid": "5feb66f80be7f8001d787801"},
     "latitude": "37.68587",
     "longitude": "-122.47243",
     "name": "Peninsula Del Rey Preview"
   },
   {
     "_id": {"$oid": "5feb67290be7f8001d787b5f"},
     "latitude": "38.57708",
     "longitude": "-121.41799",
     "name": "Rivers Edge Preview"
   },
   {
     "_id": {"$oid": "5feb67570be7f8001d787f61"},
     "latitude": "38.76218",
     "longitude": "-121.30875",
     "name": "Sierra Pointe Preview"
   },
   {
     "_id": {"$oid": "5feb67970be7f8001d788692"},
     "latitude": "38.57114",
     "longitude": "-121.47158",
     "name": "The Chateau on Capitol Ave Preview"
   },
   {
     "_id": {"$oid": "5feb67c30be7f8001d7888fb"},
     "latitude": "34.27124",
     "longitude": "-118.68811",
     "name": "The Foothills at Simi Valley Preview"
   },
   {
     "_id": {"$oid": "5feb68000be7f8001d788aa6"},
     "latitude": "33.8819",
     "longitude": "-118.09806",
     "name": "The Grove at Cerritos Preview"
   },
   {
     "_id": {"$oid": "5feb69100be7f8001d78ac6b"},
     "latitude": "34.15813",
     "longitude": "-118.33138",
     "name": "The Heights at Burbank Preview"
   },
   {
     "_id": {"$oid": "5feb6c460be7f8001d790018"},
     "latitude": "37.92701",
     "longitude": "-122.06574",
     "name": "The Kensington Preview"
   },
   {
     "_id": {"$oid": "5feb6e5b0be7f8001d792a91"},
     "latitude": "33.6071",
     "longitude": "-117.73337",
     "name": "The Regency Preview"
   },
   {
     "_id": {"$oid": "5feb6e8c0be7f8001d792e3c"},
     "latitude": "34.23832",
     "longitude": "-118.56206",
     "name": "The Village at NorthRidge Preview"
   },
   {
     "_id": {"$oid": "5feb6f0b0be7f8001d793494"},
     "latitude": "34.16939",
     "longitude": "-118.45023",
     "name": "The Village at Sherman Oaks Preview"
   },
   {
     "_id": {"$oid": "5feb6f390be7f8001d793509"},
     "latitude": "33.59995",
     "longitude": "-117.71742",
     "name": "The Wellington Preview"
   },
   {
     "_id": {"$oid": "5feb6f600be7f8001d7936a5"},
     "latitude": "26.23051",
     "longitude": "-81.77227",
     "name": "The Carlisle Naples Preview"
   },
   {
     "_id": {"$oid": "5feb6f960be7f8001d7938a3"},
     "latitude": "33.85385",
     "longitude": "-84.36517",
     "name": "The Piedmont at Buckhead Preview"
   },
   {
     "_id": {"$oid": "5feb6fb70be7f8001d793901"},
     "latitude": "45.53023",
     "longitude": "-122.70146",
     "name": "Northwest Place Preview"
   },
   {
     "_id": {"$oid": "5feb6feb0be7f8001d793ae8"},
     "latitude": "45.2868",
     "longitude": "-122.76739",
     "name": "SpringRidge Preview"
   },
   {
     "_id": {"$oid": "5feb70490be7f8001d793ca0"},
     "latitude": "30.36184",
     "longitude": "-97.71032",
     "name": "Maravilla Austin Preview"
   },
   {
     "_id": {"$oid": "6019b491dfc02a001d107950"},
     "latitude": "37.78725",
     "longitude": "-122.42594",
     "name": "Coventry Place Enliven"
   },
   {
     "_id": {"$oid": "6019b59edfc02a001d1080c0"},
     "latitude": "37.75703",
     "longitude": "-122.47719",
     "name": "Cypress at Golden Gate Enliven"
   },
   {
     "_id": {"$oid": "6019b807c1a106001dc9d103"},
     "latitude": "33.55963",
     "longitude": "-117.6565",
     "name": "La Vida Mission Viejo Enliven"
   },
   {
     "_id": {"$oid": "6019b9f2c1a106001dc9e48b"},
     "latitude": "32.74808",
     "longitude": "-116.93051",
     "name": "La Vida Real Enliven"
   },
   {
     "_id": {"$oid": "6019bb52c1a106001dc9f20f"},
     "latitude": "32.98169",
     "longitude": "-117.26158",
     "name": "La Vida Del Mar Enliven"
   },
   {
     "_id": {"$oid": "6019be8bc1a106001dca11ea"},
     "latitude": "33.5988",
     "longitude": "-117.71541",
     "name": "Las Palmas Enliven"
   },
   {
     "_id": {"$oid": "6019c9fec1a106001dca990e"},
     "latitude": "34.44266",
     "longitude": "-119.81541",
     "name": "Maravilla at Santa Barbara Enliven"
   },
   {
     "_id": {"$oid": "6019cabcc1a106001dcaa137"},
     "latitude": "30.39625",
     "longitude": "-97.72459",
     "name": "Maravilla at the Domain Enliven"
   },
   {
     "_id": {"$oid": "6019cc00c1a106001dcaaeb3"},
     "latitude": "33.64768",
     "longitude": "-111.92083",
     "name": "Maravilla Scottsdale Enliven"
   },
   {
     "_id": {"$oid": "6019cc97c1a106001dcabdbe"},
     "latitude": "47.25243",
     "longitude": "-122.54594",
     "name": "Narrows Glen Enliven"
   },
   {
     "_id": {"$oid": "6019cf70c1a106001dcaeafc"},
     "latitude": "45.2868",
     "longitude": "-122.76739",
     "name": "SpringRidge Enliven "
   },
   {
     "_id": {"$oid": "6019d1b7c1a106001dcb1369"},
     "latitude": "34.27124",
     "longitude": "-118.68811",
     "name": "Foothills at Simi Valley Enliven"
   },
   {
     "_id": {"$oid": "6019d31dc1a106001dcb337e"},
     "latitude": "34.15813",
     "longitude": "-118.33138",
     "name": "The Heights of Burbank Enliven"
   },
   {
     "_id": {"$oid": "601acbdcc1a106001dcf3a06"},
     "latitude": "37.92701",
     "longitude": "-122.06574",
     "name": "The Kensington Enliven"
   },
   {
     "_id": {"$oid": "601accb0c1a106001dcf41eb"},
     "latitude": "34.16939",
     "longitude": "-118.45023",
     "name": "The Village at Sherman Oaks Enliven"
   },
   {
     "_id": {"$oid": "601ace07c1a106001dcf5098"},
     "latitude": "38.57114",
     "longitude": "-121.47158",
     "name": "Chateau on Capital Ave Enliven"
   },
   {
     "_id": {"$oid": "601ad93dc1a106001dcfbafa"},
     "latitude": "38.57622",
     "longitude": "-121.41755",
     "name": "River's Edge Enliven"
   },
   {
     "_id": {"$oid": "62320f08821476001cd5094b"},
     "latitude": "32.99087",
     "longitude": "-117.26065",
     "name": "Enliven Corporate"
   },
   {
     "_id": {"$oid": "62320f0d821476001cd50a1a"},
     "latitude": "32.99087",
     "longitude": "-117.26065",
     "name": "Zest Corporate"
   }
 ];


  function PanTo({marker}) {
    const map = useMap()
    if(marker){
      map.panTo([marker.latitude, marker.longitude])
    }
    return null
  }
  return (
    <div className="App">
      <header className="App-header">
        <div className={'leaflet-map'}>
        <MapContainer center={[51.505, -0.09]} zoom={8} scrollWheelZoom={true}>
          <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {markers.map(marker =>
            <Marker position={[marker.latitude, marker.longitude]}>
              <Popup>
                {`${marker.name}`}
              </Popup>
            </Marker>
          )}
          <PanTo marker={markers.length && markers[0]}/>
        </MapContainer>
        </div>
      </header>
    </div>
  );
}

export default App;
