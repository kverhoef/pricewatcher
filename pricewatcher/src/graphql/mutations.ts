// tslint:disable
// this is an auto generated file. This will be overwritten

export const createPricewatch = `mutation CreatePricewatch(
  $input: CreatePricewatchInput!
  $condition: ModelPricewatchConditionInput
) {
  createPricewatch(input: $input, condition: $condition) {
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
export const updatePricewatch = `mutation UpdatePricewatch(
  $input: UpdatePricewatchInput!
  $condition: ModelPricewatchConditionInput
) {
  updatePricewatch(input: $input, condition: $condition) {
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
export const deletePricewatch = `mutation DeletePricewatch(
  $input: DeletePricewatchInput!
  $condition: ModelPricewatchConditionInput
) {
  deletePricewatch(input: $input, condition: $condition) {
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
export const createWatchConfig = `mutation CreateWatchConfig(
  $input: CreateWatchConfigInput!
  $condition: ModelWatchConfigConditionInput
) {
  createWatchConfig(input: $input, condition: $condition) {
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
export const updateWatchConfig = `mutation UpdateWatchConfig(
  $input: UpdateWatchConfigInput!
  $condition: ModelWatchConfigConditionInput
) {
  updateWatchConfig(input: $input, condition: $condition) {
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
export const deleteWatchConfig = `mutation DeleteWatchConfig(
  $input: DeleteWatchConfigInput!
  $condition: ModelWatchConfigConditionInput
) {
  deleteWatchConfig(input: $input, condition: $condition) {
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
export const createWatchValue = `mutation CreateWatchValue(
  $input: CreateWatchValueInput!
  $condition: ModelWatchValueConditionInput
) {
  createWatchValue(input: $input, condition: $condition) {
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
export const updateWatchValue = `mutation UpdateWatchValue(
  $input: UpdateWatchValueInput!
  $condition: ModelWatchValueConditionInput
) {
  updateWatchValue(input: $input, condition: $condition) {
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
export const deleteWatchValue = `mutation DeleteWatchValue(
  $input: DeleteWatchValueInput!
  $condition: ModelWatchValueConditionInput
) {
  deleteWatchValue(input: $input, condition: $condition) {
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
