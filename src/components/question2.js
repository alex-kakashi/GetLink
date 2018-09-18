import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import Helper from '../helper'
import MyStyles from '../styles'

export default class Question extends React.Component {

  constructor(props) {
    super(props)

    const answer = Helper.answer2(24, 10, 2, 99)
    this.state = {
      isAnswered: false,
      answer
    }
  }

  renderAnswer() {
    return (<Text style={{ ...MyStyles.textAnswer, ...MyStyles.gapAnswer }}>Y = {this.state.answer}</Text>)
  }

  onPressAnswerA = () => {
    if (!this.state.isAnswered) {
      this.setState({ isAnswered: true })
    }
  }

  render() {
    return (
      <View style={MyStyles.containerAnswer}>
        <Text style={MyStyles.textAnswer}>(Y + 24)+(10 × 2) = 99  - Please create new function for finding Y value</Text>
        <View style={MyStyles.gapAnswer}>
          <Button
            onPress={this.onPressAnswerA}
            title="Answer"
            color="#841584"
          />
        </View>
        {this.state.isAnswered ? this.renderAnswer() : null}
      </View>
    )
  }
}