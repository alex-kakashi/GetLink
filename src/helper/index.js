export default class Helper {
  static answer1(sources) {
    let output = 0
    const count = sources.length
    if (count > 0) {
      const lastValue = sources[count - 1]
      output = lastValue + (count * 2)
    }
    return output
  }

  static answer2(a, b, c, result) {
    const output = result - ((b * c) + a)
    return output
  }

  static answer3(first, count) {
    let output = `${first}`
    for (let i = 2; i <= count; i++) {
      output = `${i}${output}`
    }
    return output
  }
}