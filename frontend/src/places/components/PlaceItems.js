import React, {useState} from 'react'
import './PlaceList.css'
import Card from '../../shared/components/UIElement/Card'
import Button from '../../shared/components/FormElement/Button'
import Modal from '../../shared/components/UIElement/Modal'
import Map from '../../shared/components/UIElement/Map'


const PlaceItems = props =>{
    
    const [showMap, setShowMap] = useState(false);
    const [showConfirmModal, setShowConfirmModal] = useState(false);
  
    const openMapHandler = () => {
        setShowMap(true);
    }
  
    const closeMapHandler = () => setShowMap(false);

        return( 
        <React.Fragment>
            <Modal
        show={showMap}
        onCancel={closeMapHandler}
        header={props.address}
        contentClass="place-item__modal-content"
        footerClass="place-item__modal-actions"
        footer={<Button onClick={closeMapHandler}>CLOSE</Button>}
      >
        <div className="map-container">
            <Map center={props.coordinates} zoom={16} />
        </div>
      </Modal>
        <li className="place-item">
            {console.log("dasd",props)}
            <Card className="place-item__content">
            <div className="place-item__image">
                <img src={props.image}/>

            </div>
            <div className="place-item__info">
                <h2>{props.title}</h2>
                <h2>{props.address}</h2>
                <p>{props.description}</p>
            </div>
            <div className="place-item__actions">
                <Button inverse onClick={openMapHandler}>View on Map</Button>
                <Button to={`/places/${props.id}`}>Edit</Button>
                <Button danger>Delete</Button>
            </div>
            </Card>
        </li>
        </React.Fragment>
        )
}


export default PlaceItems