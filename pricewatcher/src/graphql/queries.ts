// tslint:disable
// this is an auto generated file. This will be overwritten

export const echo = `query Echo($msg: String) {
  echo(msg: $msg)
}
`;
export const getPricewatch = `query GetPricewatch($id: ID!) {
  getPricewatch(id: $id) {
    id
    name
    url
    xpath
    img
    currentValue
    lowestValue
    highestValue
    values {
      items {
        id
        date
        value
        owner
      }
      nextToken
    }
    owner
  }
}
`;
export const listPricewatchs = `query ListPricewatchs(
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
      currentValue
      lowestValue
      highestValue
      values {
        nextToken
      }
      owner
    }
    nextToken
  }
}
`;
export const getWatchValue = `query GetWatchValue($id: ID!) {
  getWatchValue(id: $id) {
    id
    date
    value
    pricewatch {
      id
      name
      url
      xpath
      img
      currentValue
      lowestValue
      highestValue
      values {
        nextToken
      }
      owner
    }
    owner
  }
}
`;
export const listWatchValues = `query ListWatchValues(
  $filter: ModelWatchValueFilterInput
  $limit: Int
  $nextToken: String
) {
  listWatchValues(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      date
      value
      pricewatch {
        id
        name
        url
        xpath
        img
        currentValue
        lowestValue
        highestValue
        owner
      }
      owner
    }
    nextToken
  }
}
`;
