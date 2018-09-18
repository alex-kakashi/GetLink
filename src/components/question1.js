import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import Helper from '../helper'
import MyStyles from '../styles'

export default class Question extends React.Component {

  constructor(props) {
    super(props)

    const answer = Helper.answer1([3, 5, 9, 15])
    this.state = {
      isAnswered: false,
      answer
    }
  }

  renderAnswer() {
    return (<Text style={{ ...MyStyles.textAnswer, ...MyStyles.gapAnswer }}>X = {this.state.answer}</Text>)
  }

  onPressAnswerA = () => {
    if (!this.state.isAnswered) {
      this.setState({ isAnswered: true })
    }
  }

  render() {
    return (
      <View style={MyStyles.containerAnswer}>
        <Text style={MyStyles.textAnswer}>3, 5, 9, 15, X  - Please create new function for finding X value</Text>
        <View style={MyStyles.gapAnswer}>
          <Button
            onPress={this.onPressAnswerA}
            title="Answer"
            color="#841584"
          />
        </View>
        {this.state.isAnswered ? this.renderAnswer() : null}
      </View >
    )
  }
}