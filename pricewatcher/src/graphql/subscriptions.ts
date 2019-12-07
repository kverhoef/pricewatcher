// tslint:disable
// this is an auto generated file. This will be overwritten

export const onCreatePricewatch = `subscription OnCreatePricewatch {
  onCreatePricewatch {
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
`;
export const onUpdatePricewatch = `subscription OnUpdatePricewatch {
  onUpdatePricewatch {
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
`;
export const onDeletePricewatch = `subscription OnDeletePricewatch {
  onDeletePricewatch {
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
`;
export const onCreateWatchValue = `subscription OnCreateWatchValue {
  onCreateWatchValue {
    id
    date
    value
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
`;
export const onUpdateWatchValue = `subscription OnUpdateWatchValue {
  onUpdateWatchValue {
    id
    date
    value
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
`;
export const onDeleteWatchValue = `subscription OnDeleteWatchValue {
  onDeleteWatchValue {
    id
    date
    value
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
`;
