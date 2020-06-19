const getRandomInt = (max) => Math.floor(Math.random() * Math.floor(max))

export default (...data) => {
  let all = [...data]
  let contents = [...all]

  return {
    count: () => contents.length,
    draw: (number = 1) => {
      const result = []
      for (let i = 0; i < number; i++) {
        result.push(contents.splice(getRandomInt(contents.length), 1)[0])
      }

      return result
    },
    reset: () => {
      contents = all
    },
    discard: (...tiles) => {
      contents = contents.concat(tiles)
    },
    fill: (...tiles) => {
      all = tiles
      contents = all
    }
  }
}
