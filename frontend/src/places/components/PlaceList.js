import React from 'react'
import './PlaceList.css'
import Card from '../../shared/components/UIElement/Card'
import PlaceItem from './PlaceItems'


const PlaceList = (props) =>{
    if(props.items.length === 0){
        return <div className="place-list center">
            <Card>  
                <h2 > No Card Found</h2>
                <button>Share Place</button>
            </Card>
        </div>
    }
    return <ul className="place-list">
        {props.items.map(place =>
            <PlaceItem  key={place.id} id={place.id} image={place.imageUrl} title={place.title} 
                address={place.address} description={place.description} creatorId={place.creatorId}
                coordinates={place.location}
            />
        )}
    </ul>
}

export default PlaceList