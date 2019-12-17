// tslint:disable
// this is an auto generated file. This will be overwritten

export const createPricewatch = `mutation CreatePricewatch(
  $input: CreatePricewatchInput!
  $condition: ModelPricewatchConditionInput
) {
  createPricewatch(input: $input, condition: $condition) {
    id
    name
    url
    xpath
    img
    initialValue
    currentValue
    lowestValue
    highestValue
    owner
    values {
      items {
        id
        date
        value
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
    url
    xpath
    img
    initialValue
    currentValue
    lowestValue
    highestValue
    owner
    values {
      items {
        id
        date
        value
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
    url
    xpath
    img
    initialValue
    currentValue
    lowestValue
    highestValue
    owner
    values {
      items {
        id
        date
        value
        owner
      }
      nextToken
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
    owner
    pricewatch {
      id
      name
      url
      xpath
      img
      initialValue
      currentValue
      lowestValue
      highestValue
      owner
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
    owner
    pricewatch {
      id
      name
      url
      xpath
      img
      initialValue
      currentValue
      lowestValue
      highestValue
      owner
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
    owner
    pricewatch {
      id
      name
      url
      xpath
      img
      initialValue
      currentValue
      lowestValue
      highestValue
      owner
      values {
        nextToken
      }
    }
  }
}
`;
