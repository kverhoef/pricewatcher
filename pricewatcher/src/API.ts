/* tslint:disable */
//  This file was automatically generated and should not be edited.

export type CreatePricewatchInput = {
  id?: string | null,
  name: string,
  url: string,
  xpath: string,
};

export type ModelPricewatchConditionInput = {
  name?: ModelStringInput | null,
  url?: ModelStringInput | null,
  xpath?: ModelStringInput | null,
  and?: Array< ModelPricewatchConditionInput | null > | null,
  or?: Array< ModelPricewatchConditionInput | null > | null,
  not?: ModelPricewatchConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type UpdatePricewatchInput = {
  id: string,
  name?: string | null,
  url?: string | null,
  xpath?: string | null,
};

export type DeletePricewatchInput = {
  id?: string | null,
};

export type CreateWatchValueInput = {
  id?: string | null,
  date: string,
  value: string,
  watchValuePricewatchId?: string | null,
};

export type ModelWatchValueConditionInput = {
  date?: ModelStringInput | null,
  value?: ModelStringInput | null,
  and?: Array< ModelWatchValueConditionInput | null > | null,
  or?: Array< ModelWatchValueConditionInput | null > | null,
  not?: ModelWatchValueConditionInput | null,
};

export type UpdateWatchValueInput = {
  id: string,
  date?: string | null,
  value?: string | null,
  watchValuePricewatchId?: string | null,
};

export type DeleteWatchValueInput = {
  id?: string | null,
};

export type ModelPricewatchFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  url?: ModelStringInput | null,
  xpath?: ModelStringInput | null,
  and?: Array< ModelPricewatchFilterInput | null > | null,
  or?: Array< ModelPricewatchFilterInput | null > | null,
  not?: ModelPricewatchFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelWatchValueFilterInput = {
  id?: ModelIDInput | null,
  date?: ModelStringInput | null,
  value?: ModelStringInput | null,
  and?: Array< ModelWatchValueFilterInput | null > | null,
  or?: Array< ModelWatchValueFilterInput | null > | null,
  not?: ModelWatchValueFilterInput | null,
};

export type CreatePricewatchMutationVariables = {
  input: CreatePricewatchInput,
  condition?: ModelPricewatchConditionInput | null,
};

export type CreatePricewatchMutation = {
  createPricewatch:  {
    __typename: "Pricewatch",
    id: string,
    name: string,
    url: string,
    xpath: string,
    values:  {
      __typename: "ModelWatchValueConnection",
      items:  Array< {
        __typename: "WatchValue",
        id: string,
        date: string,
        value: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type UpdatePricewatchMutationVariables = {
  input: UpdatePricewatchInput,
  condition?: ModelPricewatchConditionInput | null,
};

export type UpdatePricewatchMutation = {
  updatePricewatch:  {
    __typename: "Pricewatch",
    id: string,
    name: string,
    url: string,
    xpath: string,
    values:  {
      __typename: "ModelWatchValueConnection",
      items:  Array< {
        __typename: "WatchValue",
        id: string,
        date: string,
        value: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type DeletePricewatchMutationVariables = {
  input: DeletePricewatchInput,
  condition?: ModelPricewatchConditionInput | null,
};

export type DeletePricewatchMutation = {
  deletePricewatch:  {
    __typename: "Pricewatch",
    id: string,
    name: string,
    url: string,
    xpath: string,
    values:  {
      __typename: "ModelWatchValueConnection",
      items:  Array< {
        __typename: "WatchValue",
        id: string,
        date: string,
        value: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type CreateWatchValueMutationVariables = {
  input: CreateWatchValueInput,
  condition?: ModelWatchValueConditionInput | null,
};

export type CreateWatchValueMutation = {
  createWatchValue:  {
    __typename: "WatchValue",
    id: string,
    date: string,
    value: string,
    pricewatch:  {
      __typename: "Pricewatch",
      id: string,
      name: string,
      url: string,
      xpath: string,
      values:  {
        __typename: "ModelWatchValueConnection",
        nextToken: string | null,
      } | null,
    } | null,
  } | null,
};

export type UpdateWatchValueMutationVariables = {
  input: UpdateWatchValueInput,
  condition?: ModelWatchValueConditionInput | null,
};

export type UpdateWatchValueMutation = {
  updateWatchValue:  {
    __typename: "WatchValue",
    id: string,
    date: string,
    value: string,
    pricewatch:  {
      __typename: "Pricewatch",
      id: string,
      name: string,
      url: string,
      xpath: string,
      values:  {
        __typename: "ModelWatchValueConnection",
        nextToken: string | null,
      } | null,
    } | null,
  } | null,
};

export type DeleteWatchValueMutationVariables = {
  input: DeleteWatchValueInput,
  condition?: ModelWatchValueConditionInput | null,
};

export type DeleteWatchValueMutation = {
  deleteWatchValue:  {
    __typename: "WatchValue",
    id: string,
    date: string,
    value: string,
    pricewatch:  {
      __typename: "Pricewatch",
      id: string,
      name: string,
      url: string,
      xpath: string,
      values:  {
        __typename: "ModelWatchValueConnection",
        nextToken: string | null,
      } | null,
    } | null,
  } | null,
};

export type EchoQueryVariables = {
  msg?: string | null,
};

export type EchoQuery = {
  echo: string | null,
};

export type GetPricewatchQueryVariables = {
  id: string,
};

export type GetPricewatchQuery = {
  getPricewatch:  {
    __typename: "Pricewatch",
    id: string,
    name: string,
    url: string,
    xpath: string,
    values:  {
      __typename: "ModelWatchValueConnection",
      items:  Array< {
        __typename: "WatchValue",
        id: string,
        date: string,
        value: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type ListPricewatchsQueryVariables = {
  filter?: ModelPricewatchFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPricewatchsQuery = {
  listPricewatchs:  {
    __typename: "ModelPricewatchConnection",
    items:  Array< {
      __typename: "Pricewatch",
      id: string,
      name: string,
      url: string,
      xpath: string,
      values:  {
        __typename: "ModelWatchValueConnection",
        nextToken: string | null,
      } | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetWatchValueQueryVariables = {
  id: string,
};

export type GetWatchValueQuery = {
  getWatchValue:  {
    __typename: "WatchValue",
    id: string,
    date: string,
    value: string,
    pricewatch:  {
      __typename: "Pricewatch",
      id: string,
      name: string,
      url: string,
      xpath: string,
      values:  {
        __typename: "ModelWatchValueConnection",
        nextToken: string | null,
      } | null,
    } | null,
  } | null,
};

export type ListWatchValuesQueryVariables = {
  filter?: ModelWatchValueFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListWatchValuesQuery = {
  listWatchValues:  {
    __typename: "ModelWatchValueConnection",
    items:  Array< {
      __typename: "WatchValue",
      id: string,
      date: string,
      value: string,
      pricewatch:  {
        __typename: "Pricewatch",
        id: string,
        name: string,
        url: string,
        xpath: string,
      } | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type OnCreatePricewatchSubscription = {
  onCreatePricewatch:  {
    __typename: "Pricewatch",
    id: string,
    name: string,
    url: string,
    xpath: string,
    values:  {
      __typename: "ModelWatchValueConnection",
      items:  Array< {
        __typename: "WatchValue",
        id: string,
        date: string,
        value: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type OnUpdatePricewatchSubscription = {
  onUpdatePricewatch:  {
    __typename: "Pricewatch",
    id: string,
    name: string,
    url: string,
    xpath: string,
    values:  {
      __typename: "ModelWatchValueConnection",
      items:  Array< {
        __typename: "WatchValue",
        id: string,
        date: string,
        value: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type OnDeletePricewatchSubscription = {
  onDeletePricewatch:  {
    __typename: "Pricewatch",
    id: string,
    name: string,
    url: string,
    xpath: string,
    values:  {
      __typename: "ModelWatchValueConnection",
      items:  Array< {
        __typename: "WatchValue",
        id: string,
        date: string,
        value: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type OnCreateWatchValueSubscription = {
  onCreateWatchValue:  {
    __typename: "WatchValue",
    id: string,
    date: string,
    value: string,
    pricewatch:  {
      __typename: "Pricewatch",
      id: string,
      name: string,
      url: string,
      xpath: string,
      values:  {
        __typename: "ModelWatchValueConnection",
        nextToken: string | null,
      } | null,
    } | null,
  } | null,
};

export type OnUpdateWatchValueSubscription = {
  onUpdateWatchValue:  {
    __typename: "WatchValue",
    id: string,
    date: string,
    value: string,
    pricewatch:  {
      __typename: "Pricewatch",
      id: string,
      name: string,
      url: string,
      xpath: string,
      values:  {
        __typename: "ModelWatchValueConnection",
        nextToken: string | null,
      } | null,
    } | null,
  } | null,
};

export type OnDeleteWatchValueSubscription = {
  onDeleteWatchValue:  {
    __typename: "WatchValue",
    id: string,
    date: string,
    value: string,
    pricewatch:  {
      __typename: "Pricewatch",
      id: string,
      name: string,
      url: string,
      xpath: string,
      values:  {
        __typename: "ModelWatchValueConnection",
        nextToken: string | null,
      } | null,
    } | null,
  } | null,
};
