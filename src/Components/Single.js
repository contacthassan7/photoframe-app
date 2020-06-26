import React,{Component} from 'react'
import Photo from './Photo'
import Comments from './Comments'

class Single extends Component {
    render() {
        
        const{match, allPhotos} = this.props
        const id = Number(match.params.id)
        const photo = allPhotos.find((photo) => photo.id === id)
        const comments = this.props.comments[match.params.id] || []
        const index = this.props.allPhotos.findIndex((photo) => photo.id === id)

        if(this.props.loading === true) {
            return <div className="loader">
                ...loading
            </div>
        } else if(photo) {
            return(
           
                <div className="single-photo">
                    <Photo finalPhoto={photo} {...this.props} index={index} />
                    <Comments startAddingComment = {this.props.startAddingComment} comments = {comments} id={id} />
                </div>
            );
        } else {
            return <h1>
                ...no photo found
            </h1>
        }
       
        
    }
}


export default Single