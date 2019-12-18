module.exports = {
    updatePricewatch: `mutation UpdatePricewatch(
          $input: UpdatePricewatchInput!
          $condition: ModelPricewatchConditionInput
        ) {
          updatePricewatch(input: $input, condition: $condition) {
            id
            name
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
        owner
        img
        currentValue
        lowestValue
        highestValue
        initialValue
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
        label
        pricewatch {
          id
          name
          values {
            nextToken
          }
        }
      }
    }
    `
}
