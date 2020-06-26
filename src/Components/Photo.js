import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

function Photo(props) {
    
    //console.log(props.allPhotos)
    const frame = props.finalPhoto
    
    return(
        
        <figure className ="figure">
            <Link to={`/single/${frame.id}`}><img className="photo" src={frame.imageLink} alt={frame.description} /></Link>
            <figcaption><p>{frame.description}</p></figcaption>
            <div className="button-container"><button className="remove-button" onClick={
                () => {
                    
                   props.startRemovingPhoto(props.index, frame.id)
                   props.history.push('/')
                }
            }>Remove</button>
            <Link className="button" to={`/single/${frame.id}`}>
                <div className="comment-count">
                    <div className="speech-bubble"></div>
                    {props.comments[frame.id] ? props.comments[frame.id].length : 0}
                </div>
            </Link>
            </div>
            
        </figure>
    );
}

Photo.propTypes = {
    finalPhoto: PropTypes.object.isRequired
}



export default Photo