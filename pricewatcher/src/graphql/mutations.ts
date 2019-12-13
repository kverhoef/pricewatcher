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
export const createWatchValue = `mutation CreateWatchValue(
  $input: CreateWatchValueInput!
  $condition: ModelWatchValueConditionInput
) {
  createWatchValue(input: $input, condition: $condition) {
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
export const updateWatchValue = `mutation UpdateWatchValue(
  $input: UpdateWatchValueInput!
  $condition: ModelWatchValueConditionInput
) {
  updateWatchValue(input: $input, condition: $condition) {
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
export const deleteWatchValue = `mutation DeleteWatchValue(
  $input: DeleteWatchValueInput!
  $condition: ModelWatchValueConditionInput
) {
  deleteWatchValue(input: $input, condition: $condition) {
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
