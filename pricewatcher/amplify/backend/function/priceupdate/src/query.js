module.exports = {
    updatePricewatch: `mutation UpdatePricewatch(
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
            initialValue
          }
        }
        `,
    getPricewatch: `query GetPricewatch($id: ID!) {
      getPricewatch(id: $id) {
        id
        name
        url
        xpath
        owner
        values {
          items {
            id
            date
            value
          }
          nextToken
        }
      }
    }
    `,
    createWatchValue: `mutation CreateWatchValue(
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
          values {
            nextToken
          }
        }
      }
    }
    `
}
