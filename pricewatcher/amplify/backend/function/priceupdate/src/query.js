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
    getPricewatch: `query GetPricewatch($id: ID!) {
      getPricewatch(id: $id) {
        id
        name
        url
        xpath
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
    `
}