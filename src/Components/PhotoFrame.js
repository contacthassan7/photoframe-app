import React from 'react'
import Photo from './Photo'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

function PhotoFrame(props) {
    
    return (
        <div>
            <Link className="addIcon" to="/AddPhoto"></Link>
            <div className="photo-grid">
                {props.allPhotos
                .sort(function(x, y){
                    return y.id - x.id
                })
                .map((singlePhoto, index) => <Photo key={index} {...props} index={index} finalPhoto={singlePhoto} />)}

            </div>
        </div>
    );
}

PhotoFrame.propTypes = {
    allPhotos: PropTypes.array.isRequired,
}

export default PhotoFrame 