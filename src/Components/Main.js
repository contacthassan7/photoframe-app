import React, {Component} from 'react'
import Title from './Title'
import PhotoFrame from './PhotoFrame'
import AddPhoto from './AddPhoto'
import {Link, Route} from 'react-router-dom'
import Single from './Single'
import {removePhoto} from '../redux/actions'

class Main extends Component {

    state = {
        loading : true
    }

    componentDidMount() {
        this.props.startLoadingPhoto().then(() => {
            this.setState({
                loading: false
            })
        })
        this.props.startLoadingComments()
    }

   
    render() {
        // console.log(this.props)
        return (
            <div>
                <h1>
                    <Link to="/">PhotoFrame</Link>
                </h1>
                <Route exact path="/" render={() => (
                    <div>
                    
                    <PhotoFrame {...this.props} />
                    </div>
                )} />

                <Route exact path="/AddPhoto" render={({history}) => (
                    <AddPhoto {...this.props} onHistory={history}/>
                )} />

                <Route path="/single/:id" render={(params) => (
                    <Single loading={this.state.loading} {...this.props} {...params} />
                )} />
                
                
            </div>
        );
    }
}



export default Main