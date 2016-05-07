import React, {View, Text, TouchableHighlight} from 'react-native'


export default React.createClass({
  render (){
    const {currentNumber, onIncrement, onDecrement} = this.props
    return(
      <View style={styles.container}>

        <View style={styles.textbox}>
          <Text style={styles.text}>{currentNumber}</Text>
        </View>

        <View style={styles.buttons}>
          <TouchableHighlight underlayColor='#7BBF51' onPress={onIncrement} style={[styles.button, {backgroundColor:'#97cd76'}]}>
            <Text style={styles.buttonText}>+</Text>
          </TouchableHighlight>

          <TouchableHighlight underlayColor='#E84135' onPress={onDecrement} style={[styles.button, {backgroundColor:'#ed6c63'} ]}>
            <Text style={styles.buttonText}>-</Text>
          </TouchableHighlight>
        </View>

      </View>
    )
  }
})

const styles={
  container: {
    flex: 1,
    justifyContent:'center',
    alignItems: 'center',
    backgroundColor:'#F5F7FA'
  },
  text:{
    fontSize: 40,
    color: '#69707A'
  },
  textbox:{
    marginBottom: 10
  },
  buttons:{
    flexDirection: 'row',
  },
  button:{
    margin: 2 ,
    borderRadius: 2,
    padding: 10,
    backgroundColor: 'green'
  },
  buttonText:{
    color: 'white',
  },

}
