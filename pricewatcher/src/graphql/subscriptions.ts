// tslint:disable
// this is an auto generated file. This will be overwritten

export const onCreatePricewatch = `subscription OnCreatePricewatch($owner: String!) {
  onCreatePricewatch(owner: $owner) {
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
export const onUpdatePricewatch = `subscription OnUpdatePricewatch($owner: String!) {
  onUpdatePricewatch(owner: $owner) {
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
export const onDeletePricewatch = `subscription OnDeletePricewatch($owner: String!) {
  onDeletePricewatch(owner: $owner) {
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
export const onCreateWatchConfig = `subscription OnCreateWatchConfig($owner: String!) {
  onCreateWatchConfig(owner: $owner) {
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
export const onUpdateWatchConfig = `subscription OnUpdateWatchConfig($owner: String!) {
  onUpdateWatchConfig(owner: $owner) {
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
export const onDeleteWatchConfig = `subscription OnDeleteWatchConfig($owner: String!) {
  onDeleteWatchConfig(owner: $owner) {
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
export const onCreateWatchValue = `subscription OnCreateWatchValue($owner: String!) {
  onCreateWatchValue(owner: $owner) {
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
export const onUpdateWatchValue = `subscription OnUpdateWatchValue($owner: String!) {
  onUpdateWatchValue(owner: $owner) {
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
export const onDeleteWatchValue = `subscription OnDeleteWatchValue($owner: String!) {
  onDeleteWatchValue(owner: $owner) {
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
