import Main from './Main'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as actions from '../redux/actions'
import {withRouter} from 'react-router'

function mapStateToProps (state){
    return {
        allPhotos : state.allPhotos,
        comments : state.comments
    }
}

function mapDisptachToProps(disptach) {
    return bindActionCreators(actions, disptach)
}

const App = withRouter(connect(mapStateToProps, mapDisptachToProps)(Main))

export default App