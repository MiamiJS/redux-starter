import React, {Text} from 'react-native'
import { connect } from 'react-redux'
import * as actions from '../actions/counterActions'
import CounterWidget from '../components/CounterWidget'


const App = React.createClass({
  render (){
    return <CounterWidget {...this.props} />
  }
})


const mapStateToProps = (state) => ({currentNumber: state.counter.get('currentNumber')})
export default connect(mapStateToProps, actions)(App)
