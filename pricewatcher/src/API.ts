/* tslint:disable */
//  This file was automatically generated and should not be edited.

export type CreatePricewatchInput = {
  id?: string | null,
  name: string,
  img?: string | null,
  alertValue?: number | null,
  alertActive?: boolean | null,
  initialValue?: number | null,
  currentValue?: number | null,
  lowestValue?: number | null,
  highestValue?: number | null,
  owner?: string | null,
};

export type ModelPricewatchConditionInput = {
  name?: ModelStringInput | null,
  img?: ModelStringInput | null,
  alertValue?: ModelFloatInput | null,
  alertActive?: ModelBooleanInput | null,
  initialValue?: ModelFloatInput | null,
  currentValue?: ModelFloatInput | null,
  lowestValue?: ModelFloatInput | null,
  highestValue?: ModelFloatInput | null,
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

export type ModelFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type UpdatePricewatchInput = {
  id: string,
  name?: string | null,
  img?: string | null,
  alertValue?: number | null,
  alertActive?: boolean | null,
  initialValue?: number | null,
  currentValue?: number | null,
  lowestValue?: number | null,
  highestValue?: number | null,
  owner?: string | null,
};

export type DeletePricewatchInput = {
  id?: string | null,
};

export type CreateWatchConfigInput = {
  id?: string | null,
  url: string,
  xpath: string,
  label: string,
  owner?: string | null,
  watchConfigPricewatchId?: string | null,
};

export type ModelWatchConfigConditionInput = {
  url?: ModelStringInput | null,
  xpath?: ModelStringInput | null,
  label?: ModelStringInput | null,
  and?: Array< ModelWatchConfigConditionInput | null > | null,
  or?: Array< ModelWatchConfigConditionInput | null > | null,
  not?: ModelWatchConfigConditionInput | null,
};

export type UpdateWatchConfigInput = {
  id: string,
  url?: string | null,
  xpath?: string | null,
  label?: string | null,
  owner?: string | null,
  watchConfigPricewatchId?: string | null,
};

export type DeleteWatchConfigInput = {
  id?: string | null,
};

export type CreateWatchValueInput = {
  id?: string | null,
  date: string,
  value: number,
  label: string,
  owner?: string | null,
  watchValuePricewatchId?: string | null,
};

export type ModelWatchValueConditionInput = {
  date?: ModelStringInput | null,
  value?: ModelFloatInput | null,
  label?: ModelStringInput | null,
  and?: Array< ModelWatchValueConditionInput | null > | null,
  or?: Array< ModelWatchValueConditionInput | null > | null,
  not?: ModelWatchValueConditionInput | null,
};

export type UpdateWatchValueInput = {
  id: string,
  date?: string | null,
  value?: number | null,
  label?: string | null,
  owner?: string | null,
  watchValuePricewatchId?: string | null,
};

export type DeleteWatchValueInput = {
  id?: string | null,
};

export type ModelPricewatchFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  img?: ModelStringInput | null,
  alertValue?: ModelFloatInput | null,
  alertActive?: ModelBooleanInput | null,
  initialValue?: ModelFloatInput | null,
  currentValue?: ModelFloatInput | null,
  lowestValue?: ModelFloatInput | null,
  highestValue?: ModelFloatInput | null,
  owner?: ModelStringInput | null,
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

export type ModelWatchConfigFilterInput = {
  id?: ModelIDInput | null,
  url?: ModelStringInput | null,
  xpath?: ModelStringInput | null,
  label?: ModelStringInput | null,
  owner?: ModelStringInput | null,
  and?: Array< ModelWatchConfigFilterInput | null > | null,
  or?: Array< ModelWatchConfigFilterInput | null > | null,
  not?: ModelWatchConfigFilterInput | null,
};

export type ModelWatchValueFilterInput = {
  id?: ModelIDInput | null,
  date?: ModelStringInput | null,
  value?: ModelFloatInput | null,
  label?: ModelStringInput | null,
  owner?: ModelStringInput | null,
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
    img: string | null,
    alertValue: number | null,
    alertActive: boolean | null,
    initialValue: number | null,
    currentValue: number | null,
    lowestValue: number | null,
    highestValue: number | null,
    owner: string | null,
    config:  {
      __typename: "ModelWatchConfigConnection",
      items:  Array< {
        __typename: "WatchConfig",
        id: string,
        url: string,
        xpath: string,
        label: string,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    values:  {
      __typename: "ModelWatchValueConnection",
      items:  Array< {
        __typename: "WatchValue",
        id: string,
        date: string,
        value: number,
        label: string,
        owner: string | null,
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
    img: string | null,
    alertValue: number | null,
    alertActive: boolean | null,
    initialValue: number | null,
    currentValue: number | null,
    lowestValue: number | null,
    highestValue: number | null,
    owner: string | null,
    config:  {
      __typename: "ModelWatchConfigConnection",
      items:  Array< {
        __typename: "WatchConfig",
        id: string,
        url: string,
        xpath: string,
        label: string,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    values:  {
      __typename: "ModelWatchValueConnection",
      items:  Array< {
        __typename: "WatchValue",
        id: string,
        date: string,
        value: number,
        label: string,
        owner: string | null,
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
    img: string | null,
    alertValue: number | null,
    alertActive: boolean | null,
    initialValue: number | null,
    currentValue: number | null,
    lowestValue: number | null,
    highestValue: number | null,
    owner: string | null,
    config:  {
      __typename: "ModelWatchConfigConnection",
      items:  Array< {
        __typename: "WatchConfig",
        id: string,
        url: string,
        xpath: string,
        label: string,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    values:  {
      __typename: "ModelWatchValueConnection",
      items:  Array< {
        __typename: "WatchValue",
        id: string,
        date: string,
        value: number,
        label: string,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type CreateWatchConfigMutationVariables = {
  input: CreateWatchConfigInput,
  condition?: ModelWatchConfigConditionInput | null,
};

export type CreateWatchConfigMutation = {
  createWatchConfig:  {
    __typename: "WatchConfig",
    id: string,
    url: string,
    xpath: string,
    label: string,
    owner: string | null,
    pricewatch:  {
      __typename: "Pricewatch",
      id: string,
      name: string,
      img: string | null,
      alertValue: number | null,
      alertActive: boolean | null,
      initialValue: number | null,
      currentValue: number | null,
      lowestValue: number | null,
      highestValue: number | null,
      owner: string | null,
      config:  {
        __typename: "ModelWatchConfigConnection",
        nextToken: string | null,
      } | null,
      values:  {
        __typename: "ModelWatchValueConnection",
        nextToken: string | null,
      } | null,
    } | null,
  } | null,
};

export type UpdateWatchConfigMutationVariables = {
  input: UpdateWatchConfigInput,
  condition?: ModelWatchConfigConditionInput | null,
};

export type UpdateWatchConfigMutation = {
  updateWatchConfig:  {
    __typename: "WatchConfig",
    id: string,
    url: string,
    xpath: string,
    label: string,
    owner: string | null,
    pricewatch:  {
      __typename: "Pricewatch",
      id: string,
      name: string,
      img: string | null,
      alertValue: number | null,
      alertActive: boolean | null,
      initialValue: number | null,
      currentValue: number | null,
      lowestValue: number | null,
      highestValue: number | null,
      owner: string | null,
      config:  {
        __typename: "ModelWatchConfigConnection",
        nextToken: string | null,
      } | null,
      values:  {
        __typename: "ModelWatchValueConnection",
        nextToken: string | null,
      } | null,
    } | null,
  } | null,
};

export type DeleteWatchConfigMutationVariables = {
  input: DeleteWatchConfigInput,
  condition?: ModelWatchConfigConditionInput | null,
};

export type DeleteWatchConfigMutation = {
  deleteWatchConfig:  {
    __typename: "WatchConfig",
    id: string,
    url: string,
    xpath: string,
    label: string,
    owner: string | null,
    pricewatch:  {
      __typename: "Pricewatch",
      id: string,
      name: string,
      img: string | null,
      alertValue: number | null,
      alertActive: boolean | null,
      initialValue: number | null,
      currentValue: number | null,
      lowestValue: number | null,
      highestValue: number | null,
      owner: string | null,
      config:  {
        __typename: "ModelWatchConfigConnection",
        nextToken: string | null,
      } | null,
      values:  {
        __typename: "ModelWatchValueConnection",
        nextToken: string | null,
      } | null,
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
    value: number,
    label: string,
    owner: string | null,
    pricewatch:  {
      __typename: "Pricewatch",
      id: string,
      name: string,
      img: string | null,
      alertValue: number | null,
      alertActive: boolean | null,
      initialValue: number | null,
      currentValue: number | null,
      lowestValue: number | null,
      highestValue: number | null,
      owner: string | null,
      config:  {
        __typename: "ModelWatchConfigConnection",
        nextToken: string | null,
      } | null,
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
    value: number,
    label: string,
    owner: string | null,
    pricewatch:  {
      __typename: "Pricewatch",
      id: string,
      name: string,
      img: string | null,
      alertValue: number | null,
      alertActive: boolean | null,
      initialValue: number | null,
      currentValue: number | null,
      lowestValue: number | null,
      highestValue: number | null,
      owner: string | null,
      config:  {
        __typename: "ModelWatchConfigConnection",
        nextToken: string | null,
      } | null,
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
    value: number,
    label: string,
    owner: string | null,
    pricewatch:  {
      __typename: "Pricewatch",
      id: string,
      name: string,
      img: string | null,
      alertValue: number | null,
      alertActive: boolean | null,
      initialValue: number | null,
      currentValue: number | null,
      lowestValue: number | null,
      highestValue: number | null,
      owner: string | null,
      config:  {
        __typename: "ModelWatchConfigConnection",
        nextToken: string | null,
      } | null,
      values:  {
        __typename: "ModelWatchValueConnection",
        nextToken: string | null,
      } | null,
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
      img: string | null,
      alertValue: number | null,
      alertActive: boolean | null,
      initialValue: number | null,
      currentValue: number | null,
      lowestValue: number | null,
      highestValue: number | null,
      owner: string | null,
      config:  {
        __typename: "ModelWatchConfigConnection",
        nextToken: string | null,
      } | null,
      values:  {
        __typename: "ModelWatchValueConnection",
        nextToken: string | null,
      } | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetPricewatchQueryVariables = {
  id: string,
};

export type GetPricewatchQuery = {
  getPricewatch:  {
    __typename: "Pricewatch",
    id: string,
    name: string,
    img: string | null,
    alertValue: number | null,
    alertActive: boolean | null,
    initialValue: number | null,
    currentValue: number | null,
    lowestValue: number | null,
    highestValue: number | null,
    owner: string | null,
    config:  {
      __typename: "ModelWatchConfigConnection",
      items:  Array< {
        __typename: "WatchConfig",
        id: string,
        url: string,
        xpath: string,
        label: string,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    values:  {
      __typename: "ModelWatchValueConnection",
      items:  Array< {
        __typename: "WatchValue",
        id: string,
        date: string,
        value: number,
        label: string,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type GetWatchConfigQueryVariables = {
  id: string,
};

export type GetWatchConfigQuery = {
  getWatchConfig:  {
    __typename: "WatchConfig",
    id: string,
    url: string,
    xpath: string,
    label: string,
    owner: string | null,
    pricewatch:  {
      __typename: "Pricewatch",
      id: string,
      name: string,
      img: string | null,
      alertValue: number | null,
      alertActive: boolean | null,
      initialValue: number | null,
      currentValue: number | null,
      lowestValue: number | null,
      highestValue: number | null,
      owner: string | null,
      config:  {
        __typename: "ModelWatchConfigConnection",
        nextToken: string | null,
      } | null,
      values:  {
        __typename: "ModelWatchValueConnection",
        nextToken: string | null,
      } | null,
    } | null,
  } | null,
};

export type ListWatchConfigsQueryVariables = {
  filter?: ModelWatchConfigFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListWatchConfigsQuery = {
  listWatchConfigs:  {
    __typename: "ModelWatchConfigConnection",
    items:  Array< {
      __typename: "WatchConfig",
      id: string,
      url: string,
      xpath: string,
      label: string,
      owner: string | null,
      pricewatch:  {
        __typename: "Pricewatch",
        id: string,
        name: string,
        img: string | null,
        alertValue: number | null,
        alertActive: boolean | null,
        initialValue: number | null,
        currentValue: number | null,
        lowestValue: number | null,
        highestValue: number | null,
        owner: string | null,
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
    value: number,
    label: string,
    owner: string | null,
    pricewatch:  {
      __typename: "Pricewatch",
      id: string,
      name: string,
      img: string | null,
      alertValue: number | null,
      alertActive: boolean | null,
      initialValue: number | null,
      currentValue: number | null,
      lowestValue: number | null,
      highestValue: number | null,
      owner: string | null,
      config:  {
        __typename: "ModelWatchConfigConnection",
        nextToken: string | null,
      } | null,
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
      value: number,
      label: string,
      owner: string | null,
      pricewatch:  {
        __typename: "Pricewatch",
        id: string,
        name: string,
        img: string | null,
        alertValue: number | null,
        alertActive: boolean | null,
        initialValue: number | null,
        currentValue: number | null,
        lowestValue: number | null,
        highestValue: number | null,
        owner: string | null,
      } | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type OnCreatePricewatchSubscriptionVariables = {
  owner: string,
};

export type OnCreatePricewatchSubscription = {
  onCreatePricewatch:  {
    __typename: "Pricewatch",
    id: string,
    name: string,
    img: string | null,
    alertValue: number | null,
    alertActive: boolean | null,
    initialValue: number | null,
    currentValue: number | null,
    lowestValue: number | null,
    highestValue: number | null,
    owner: string | null,
    config:  {
      __typename: "ModelWatchConfigConnection",
      items:  Array< {
        __typename: "WatchConfig",
        id: string,
        url: string,
        xpath: string,
        label: string,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    values:  {
      __typename: "ModelWatchValueConnection",
      items:  Array< {
        __typename: "WatchValue",
        id: string,
        date: string,
        value: number,
        label: string,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type OnUpdatePricewatchSubscriptionVariables = {
  owner: string,
};

export type OnUpdatePricewatchSubscription = {
  onUpdatePricewatch:  {
    __typename: "Pricewatch",
    id: string,
    name: string,
    img: string | null,
    alertValue: number | null,
    alertActive: boolean | null,
    initialValue: number | null,
    currentValue: number | null,
    lowestValue: number | null,
    highestValue: number | null,
    owner: string | null,
    config:  {
      __typename: "ModelWatchConfigConnection",
      items:  Array< {
        __typename: "WatchConfig",
        id: string,
        url: string,
        xpath: string,
        label: string,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    values:  {
      __typename: "ModelWatchValueConnection",
      items:  Array< {
        __typename: "WatchValue",
        id: string,
        date: string,
        value: number,
        label: string,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type OnDeletePricewatchSubscriptionVariables = {
  owner: string,
};

export type OnDeletePricewatchSubscription = {
  onDeletePricewatch:  {
    __typename: "Pricewatch",
    id: string,
    name: string,
    img: string | null,
    alertValue: number | null,
    alertActive: boolean | null,
    initialValue: number | null,
    currentValue: number | null,
    lowestValue: number | null,
    highestValue: number | null,
    owner: string | null,
    config:  {
      __typename: "ModelWatchConfigConnection",
      items:  Array< {
        __typename: "WatchConfig",
        id: string,
        url: string,
        xpath: string,
        label: string,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    values:  {
      __typename: "ModelWatchValueConnection",
      items:  Array< {
        __typename: "WatchValue",
        id: string,
        date: string,
        value: number,
        label: string,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type OnCreateWatchConfigSubscriptionVariables = {
  owner: string,
};

export type OnCreateWatchConfigSubscription = {
  onCreateWatchConfig:  {
    __typename: "WatchConfig",
    id: string,
    url: string,
    xpath: string,
    label: string,
    owner: string | null,
    pricewatch:  {
      __typename: "Pricewatch",
      id: string,
      name: string,
      img: string | null,
      alertValue: number | null,
      alertActive: boolean | null,
      initialValue: number | null,
      currentValue: number | null,
      lowestValue: number | null,
      highestValue: number | null,
      owner: string | null,
      config:  {
        __typename: "ModelWatchConfigConnection",
        nextToken: string | null,
      } | null,
      values:  {
        __typename: "ModelWatchValueConnection",
        nextToken: string | null,
      } | null,
    } | null,
  } | null,
};

export type OnUpdateWatchConfigSubscriptionVariables = {
  owner: string,
};

export type OnUpdateWatchConfigSubscription = {
  onUpdateWatchConfig:  {
    __typename: "WatchConfig",
    id: string,
    url: string,
    xpath: string,
    label: string,
    owner: string | null,
    pricewatch:  {
      __typename: "Pricewatch",
      id: string,
      name: string,
      img: string | null,
      alertValue: number | null,
      alertActive: boolean | null,
      initialValue: number | null,
      currentValue: number | null,
      lowestValue: number | null,
      highestValue: number | null,
      owner: string | null,
      config:  {
        __typename: "ModelWatchConfigConnection",
        nextToken: string | null,
      } | null,
      values:  {
        __typename: "ModelWatchValueConnection",
        nextToken: string | null,
      } | null,
    } | null,
  } | null,
};

export type OnDeleteWatchConfigSubscriptionVariables = {
  owner: string,
};

export type OnDeleteWatchConfigSubscription = {
  onDeleteWatchConfig:  {
    __typename: "WatchConfig",
    id: string,
    url: string,
    xpath: string,
    label: string,
    owner: string | null,
    pricewatch:  {
      __typename: "Pricewatch",
      id: string,
      name: string,
      img: string | null,
      alertValue: number | null,
      alertActive: boolean | null,
      initialValue: number | null,
      currentValue: number | null,
      lowestValue: number | null,
      highestValue: number | null,
      owner: string | null,
      config:  {
        __typename: "ModelWatchConfigConnection",
        nextToken: string | null,
      } | null,
      values:  {
        __typename: "ModelWatchValueConnection",
        nextToken: string | null,
      } | null,
    } | null,
  } | null,
};

export type OnCreateWatchValueSubscriptionVariables = {
  owner: string,
};

export type OnCreateWatchValueSubscription = {
  onCreateWatchValue:  {
    __typename: "WatchValue",
    id: string,
    date: string,
    value: number,
    label: string,
    owner: string | null,
    pricewatch:  {
      __typename: "Pricewatch",
      id: string,
      name: string,
      img: string | null,
      alertValue: number | null,
      alertActive: boolean | null,
      initialValue: number | null,
      currentValue: number | null,
      lowestValue: number | null,
      highestValue: number | null,
      owner: string | null,
      config:  {
        __typename: "ModelWatchConfigConnection",
        nextToken: string | null,
      } | null,
      values:  {
        __typename: "ModelWatchValueConnection",
        nextToken: string | null,
      } | null,
    } | null,
  } | null,
};

export type OnUpdateWatchValueSubscriptionVariables = {
  owner: string,
};

export type OnUpdateWatchValueSubscription = {
  onUpdateWatchValue:  {
    __typename: "WatchValue",
    id: string,
    date: string,
    value: number,
    label: string,
    owner: string | null,
    pricewatch:  {
      __typename: "Pricewatch",
      id: string,
      name: string,
      img: string | null,
      alertValue: number | null,
      alertActive: boolean | null,
      initialValue: number | null,
      currentValue: number | null,
      lowestValue: number | null,
      highestValue: number | null,
      owner: string | null,
      config:  {
        __typename: "ModelWatchConfigConnection",
        nextToken: string | null,
      } | null,
      values:  {
        __typename: "ModelWatchValueConnection",
        nextToken: string | null,
      } | null,
    } | null,
  } | null,
};

export type OnDeleteWatchValueSubscriptionVariables = {
  owner: string,
};

export type OnDeleteWatchValueSubscription = {
  onDeleteWatchValue:  {
    __typename: "WatchValue",
    id: string,
    date: string,
    value: number,
    label: string,
    owner: string | null,
    pricewatch:  {
      __typename: "Pricewatch",
      id: string,
      name: string,
      img: string | null,
      alertValue: number | null,
      alertActive: boolean | null,
      initialValue: number | null,
      currentValue: number | null,
      lowestValue: number | null,
      highestValue: number | null,
      owner: string | null,
      config:  {
        __typename: "ModelWatchConfigConnection",
        nextToken: string | null,
      } | null,
      values:  {
        __typename: "ModelWatchValueConnection",
        nextToken: string | null,
      } | null,
    } | null,
  } | null,
};
