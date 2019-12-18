module.exports = {
    query: `query ListPricewatchs(
  $filter: ModelPricewatchFilterInput
  $limit: Int
  $nextToken: String
) {
  listPricewatchs(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      url
      xpath
      img
      alertValue
      alertActive
      initialValue
      currentValue
      lowestValue
      highestValue
      owner
      config {
        items {
            id
            url
            xpath
            label
            owner
        }
      }
    }
    nextToken
  }
}
`
}
