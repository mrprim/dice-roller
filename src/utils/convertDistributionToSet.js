export default distro => {
  const result = []
  Object.entries(distro).map(([key, count]) => {
    for (let i = 0; i < count; i++) {
      result.push(key)
    }
  })
  return result
}
