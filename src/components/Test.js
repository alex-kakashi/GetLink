import React from 'react'
import { StyleSheet, Text, View, Dimensions } from 'react-native'
import Question1 from './question1'
import Question2 from './question2'
import Question3 from './question3'
import SwiperFlatList from 'react-native-swiper-flatlist'

class Test extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View style={{ flex: 1, paddingTop: 40 }}>
        <SwiperFlatList
          index={0}
          showPagination
          paginationActiveColor='#00ffff'
        >
          <View style={[styles.child]}>
            <Question1 />
          </View>
          <View style={[styles.child]}>
            <Question2 />
          </View>
          <View style={[styles.child]}>
            <Question3 />
          </View>
        </SwiperFlatList>
      </View>
    )
  }
}

export const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  child: {
    width,
    justifyContent: 'center'
  },
  text: {
    fontSize: width * 0.5,
    textAlign: 'center'
  }
});

export default Test