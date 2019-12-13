// tslint:disable
// this is an auto generated file. This will be overwritten

export const onCreatePricewatch = `subscription OnCreatePricewatch($owner: String!) {
  onCreatePricewatch(owner: $owner) {
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
export const onUpdatePricewatch = `subscription OnUpdatePricewatch($owner: String!) {
  onUpdatePricewatch(owner: $owner) {
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
export const onDeletePricewatch = `subscription OnDeletePricewatch($owner: String!) {
  onDeletePricewatch(owner: $owner) {
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
export const onCreateWatchValue = `subscription OnCreateWatchValue($owner: String!) {
  onCreateWatchValue(owner: $owner) {
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
export const onUpdateWatchValue = `subscription OnUpdateWatchValue($owner: String!) {
  onUpdateWatchValue(owner: $owner) {
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
export const onDeleteWatchValue = `subscription OnDeleteWatchValue($owner: String!) {
  onDeleteWatchValue(owner: $owner) {
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
