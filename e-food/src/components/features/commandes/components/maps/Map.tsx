import { MapContainer, Popup, TileLayer } from 'react-leaflet'
import CustomMarker from './custom-marker';
import { LivraisonPropsType } from '../../types/interfaces';


export default function Map({livraison}:{livraison:React.MutableRefObject<LivraisonPropsType | undefined>}) {
  console.log(livraison.current);
  
    if (!livraison.current) {
        <div></div>
    } else {
        return (
            <MapContainer id='map' center={[livraison.current!.coordonnee_x, livraison.current!.coordonnee_y]} zoom={8} scrollWheelZoom={false}>
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <CustomMarker position={[livraison.current!.coordonnee_x, livraison.current!.coordonnee_y]}>
              <Popup>{livraison.current.description}</Popup>
            </CustomMarker>
          </MapContainer>
          );
    }
 
}