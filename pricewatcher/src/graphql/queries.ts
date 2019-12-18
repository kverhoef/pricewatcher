// tslint:disable
// this is an auto generated file. This will be overwritten

export const listPricewatchs = `query ListPricewatchs(
  $filter: ModelPricewatchFilterInput
  $limit: Int
  $nextToken: String
) {
  listPricewatchs(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      img
      alertValue
      alertActive
      initialValue
      currentValue
      lowestValue
      highestValue
      owner
      config {
        nextToken
      }
      values {
        nextToken
      }
    }
    nextToken
  }
}
`;
export const getPricewatch = `query GetPricewatch($id: ID!) {
  getPricewatch(id: $id) {
    id
    name
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
      nextToken
    }
    values {
      items {
        id
        date
        value
        label
        owner
      }
      nextToken
    }
  }
}
`;
export const getWatchConfig = `query GetWatchConfig($id: ID!) {
  getWatchConfig(id: $id) {
    id
    url
    xpath
    label
    owner
    pricewatch {
      id
      name
      img
      alertValue
      alertActive
      initialValue
      currentValue
      lowestValue
      highestValue
      owner
      config {
        nextToken
      }
      values {
        nextToken
      }
    }
  }
}
`;
export const listWatchConfigs = `query ListWatchConfigs(
  $filter: ModelWatchConfigFilterInput
  $limit: Int
  $nextToken: String
) {
  listWatchConfigs(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      url
      xpath
      label
      owner
      pricewatch {
        id
        name
        img
        alertValue
        alertActive
        initialValue
        currentValue
        lowestValue
        highestValue
        owner
      }
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
    label
    owner
    pricewatch {
      id
      name
      img
      alertValue
      alertActive
      initialValue
      currentValue
      lowestValue
      highestValue
      owner
      config {
        nextToken
      }
      values {
        nextToken
      }
    }
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
      label
      owner
      pricewatch {
        id
        name
        img
        alertValue
        alertActive
        initialValue
        currentValue
        lowestValue
        highestValue
        owner
      }
    }
    nextToken
  }
}
`;
