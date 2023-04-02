import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  AWSDateTime: any;
  AWSTimestamp: any;
};

export type Category = {
  __typename?: 'Category';
  _deleted?: Maybe<Scalars['Boolean']>;
  _lastChangedAt: Scalars['AWSTimestamp'];
  _version: Scalars['Int'];
  createdAt: Scalars['AWSDateTime'];
  id: Scalars['ID'];
  image: Scalars['String'];
  stores?: Maybe<ModelStoreConnection>;
  title: Scalars['String'];
  updatedAt: Scalars['AWSDateTime'];
};


export type CategoryStoresArgs = {
  filter?: InputMaybe<ModelStoreFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  nextToken?: InputMaybe<Scalars['String']>;
  sortDirection?: InputMaybe<ModelSortDirection>;
};

export type Client = {
  __typename?: 'Client';
  _deleted?: Maybe<Scalars['Boolean']>;
  _lastChangedAt: Scalars['AWSTimestamp'];
  _version: Scalars['Int'];
  createdAt: Scalars['AWSDateTime'];
  email?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  lastName?: Maybe<Scalars['String']>;
  location?: Maybe<Scalars['String']>;
  orders?: Maybe<ModelOrderConnection>;
  password: Scalars['String'];
  phone?: Maybe<Scalars['String']>;
  updatedAt: Scalars['AWSDateTime'];
};


export type ClientOrdersArgs = {
  filter?: InputMaybe<ModelOrderFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  nextToken?: InputMaybe<Scalars['String']>;
  sortDirection?: InputMaybe<ModelSortDirection>;
};

export type CreateCategoryInput = {
  _version?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['ID']>;
  image: Scalars['String'];
  title: Scalars['String'];
};

export type CreateClientInput = {
  _version?: InputMaybe<Scalars['Int']>;
  email?: InputMaybe<Scalars['String']>;
  firstName?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  lastName?: InputMaybe<Scalars['String']>;
  location?: InputMaybe<Scalars['String']>;
  password: Scalars['String'];
  phone?: InputMaybe<Scalars['String']>;
};

export type CreateOrderInput = {
  _version?: InputMaybe<Scalars['Int']>;
  clientOrdersId?: InputMaybe<Scalars['ID']>;
  code?: InputMaybe<Scalars['Int']>;
  endTime: Scalars['AWSDateTime'];
  id?: InputMaybe<Scalars['ID']>;
  isCancel?: InputMaybe<Scalars['Boolean']>;
  isComplete?: InputMaybe<Scalars['Boolean']>;
  isDelivered?: InputMaybe<Scalars['Boolean']>;
  isPicked?: InputMaybe<Scalars['Boolean']>;
  onGoing: Scalars['Boolean'];
  orderNote: Scalars['String'];
  shopperOrdersId?: InputMaybe<Scalars['ID']>;
  startTime: Scalars['AWSDateTime'];
  storeOrdersId?: InputMaybe<Scalars['ID']>;
};

export type CreateProductCategoryInput = {
  _version?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['ID']>;
  image: Scalars['String'];
  storeProductCategoriesId?: InputMaybe<Scalars['ID']>;
  title: Scalars['String'];
};

export type CreateProductInput = {
  _version?: InputMaybe<Scalars['Int']>;
  brand: Scalars['String'];
  color?: InputMaybe<Scalars['String']>;
  detail: Scalars['String'];
  id?: InputMaybe<Scalars['ID']>;
  image?: InputMaybe<Scalars['String']>;
  model?: InputMaybe<Scalars['String']>;
  orderProductsId?: InputMaybe<Scalars['ID']>;
  price: Scalars['Float'];
  productCategoryProductsId?: InputMaybe<Scalars['ID']>;
  rooms?: InputMaybe<Scalars['Int']>;
  size?: InputMaybe<Scalars['String']>;
  title: Scalars['String'];
  washrooms?: InputMaybe<Scalars['Int']>;
};

export type CreateShopperInput = {
  _version?: InputMaybe<Scalars['Int']>;
  avatar: Scalars['String'];
  deliveryOption?: InputMaybe<Scalars['String']>;
  email: Scalars['String'];
  firstName: Scalars['String'];
  id?: InputMaybe<Scalars['ID']>;
  isOnline?: InputMaybe<Scalars['Boolean']>;
  lastName: Scalars['String'];
  latitude?: InputMaybe<Scalars['Float']>;
  location?: InputMaybe<Scalars['String']>;
  longitude?: InputMaybe<Scalars['Float']>;
  password: Scalars['String'];
  phone?: InputMaybe<Scalars['String']>;
};

export type CreateStoreInput = {
  _version?: InputMaybe<Scalars['Int']>;
  address: Scalars['String'];
  branches: Scalars['String'];
  categoryStoresId?: InputMaybe<Scalars['ID']>;
  email: Scalars['String'];
  headerImg?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  latitude?: InputMaybe<Scalars['Float']>;
  logo?: InputMaybe<Scalars['String']>;
  longitude?: InputMaybe<Scalars['Float']>;
  outletType: Scalars['String'];
  password: Scalars['String'];
  phone: Scalars['String'];
  storeName?: InputMaybe<Scalars['String']>;
  verified: Scalars['Boolean'];
};

export type DeleteCategoryInput = {
  _version?: InputMaybe<Scalars['Int']>;
  id: Scalars['ID'];
};

export type DeleteClientInput = {
  _version?: InputMaybe<Scalars['Int']>;
  id: Scalars['ID'];
};

export type DeleteOrderInput = {
  _version?: InputMaybe<Scalars['Int']>;
  id: Scalars['ID'];
};

export type DeleteProductCategoryInput = {
  _version?: InputMaybe<Scalars['Int']>;
  id: Scalars['ID'];
};

export type DeleteProductInput = {
  _version?: InputMaybe<Scalars['Int']>;
  id: Scalars['ID'];
};

export type DeleteShopperInput = {
  _version?: InputMaybe<Scalars['Int']>;
  id: Scalars['ID'];
};

export type DeleteStoreInput = {
  _version?: InputMaybe<Scalars['Int']>;
  id: Scalars['ID'];
};

export type Message = {
  __typename?: 'Message';
  Message?: Maybe<Scalars['String']>;
  Success?: Maybe<Scalars['Boolean']>;
};

export enum ModelAttributeTypes {
  Null = '_null',
  Binary = 'binary',
  BinarySet = 'binarySet',
  Bool = 'bool',
  List = 'list',
  Map = 'map',
  Number = 'number',
  NumberSet = 'numberSet',
  String = 'string',
  StringSet = 'stringSet'
}

export type ModelBooleanInput = {
  attributeExists?: InputMaybe<Scalars['Boolean']>;
  attributeType?: InputMaybe<ModelAttributeTypes>;
  eq?: InputMaybe<Scalars['Boolean']>;
  ne?: InputMaybe<Scalars['Boolean']>;
};

export type ModelCategoryConditionInput = {
  and?: InputMaybe<Array<InputMaybe<ModelCategoryConditionInput>>>;
  image?: InputMaybe<ModelStringInput>;
  not?: InputMaybe<ModelCategoryConditionInput>;
  or?: InputMaybe<Array<InputMaybe<ModelCategoryConditionInput>>>;
  title?: InputMaybe<ModelStringInput>;
};

export type ModelCategoryConnection = {
  __typename?: 'ModelCategoryConnection';
  items: Array<Maybe<Category>>;
  nextToken?: Maybe<Scalars['String']>;
  startedAt?: Maybe<Scalars['AWSTimestamp']>;
};

export type ModelCategoryFilterInput = {
  and?: InputMaybe<Array<InputMaybe<ModelCategoryFilterInput>>>;
  id?: InputMaybe<ModelIdInput>;
  image?: InputMaybe<ModelStringInput>;
  not?: InputMaybe<ModelCategoryFilterInput>;
  or?: InputMaybe<Array<InputMaybe<ModelCategoryFilterInput>>>;
  title?: InputMaybe<ModelStringInput>;
};

export type ModelClientConditionInput = {
  and?: InputMaybe<Array<InputMaybe<ModelClientConditionInput>>>;
  email?: InputMaybe<ModelStringInput>;
  firstName?: InputMaybe<ModelStringInput>;
  lastName?: InputMaybe<ModelStringInput>;
  location?: InputMaybe<ModelStringInput>;
  not?: InputMaybe<ModelClientConditionInput>;
  or?: InputMaybe<Array<InputMaybe<ModelClientConditionInput>>>;
  password?: InputMaybe<ModelStringInput>;
  phone?: InputMaybe<ModelStringInput>;
};

export type ModelClientConnection = {
  __typename?: 'ModelClientConnection';
  items: Array<Maybe<Client>>;
  nextToken?: Maybe<Scalars['String']>;
  startedAt?: Maybe<Scalars['AWSTimestamp']>;
};

export type ModelClientFilterInput = {
  and?: InputMaybe<Array<InputMaybe<ModelClientFilterInput>>>;
  email?: InputMaybe<ModelStringInput>;
  firstName?: InputMaybe<ModelStringInput>;
  id?: InputMaybe<ModelIdInput>;
  lastName?: InputMaybe<ModelStringInput>;
  location?: InputMaybe<ModelStringInput>;
  not?: InputMaybe<ModelClientFilterInput>;
  or?: InputMaybe<Array<InputMaybe<ModelClientFilterInput>>>;
  password?: InputMaybe<ModelStringInput>;
  phone?: InputMaybe<ModelStringInput>;
};

export type ModelFloatInput = {
  attributeExists?: InputMaybe<Scalars['Boolean']>;
  attributeType?: InputMaybe<ModelAttributeTypes>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  eq?: InputMaybe<Scalars['Float']>;
  ge?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  le?: InputMaybe<Scalars['Float']>;
  lt?: InputMaybe<Scalars['Float']>;
  ne?: InputMaybe<Scalars['Float']>;
};

export type ModelIdInput = {
  attributeExists?: InputMaybe<Scalars['Boolean']>;
  attributeType?: InputMaybe<ModelAttributeTypes>;
  beginsWith?: InputMaybe<Scalars['ID']>;
  between?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  contains?: InputMaybe<Scalars['ID']>;
  eq?: InputMaybe<Scalars['ID']>;
  ge?: InputMaybe<Scalars['ID']>;
  gt?: InputMaybe<Scalars['ID']>;
  le?: InputMaybe<Scalars['ID']>;
  lt?: InputMaybe<Scalars['ID']>;
  ne?: InputMaybe<Scalars['ID']>;
  notContains?: InputMaybe<Scalars['ID']>;
  size?: InputMaybe<ModelSizeInput>;
};

export type ModelIdKeyConditionInput = {
  beginsWith?: InputMaybe<Scalars['ID']>;
  between?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  eq?: InputMaybe<Scalars['ID']>;
  ge?: InputMaybe<Scalars['ID']>;
  gt?: InputMaybe<Scalars['ID']>;
  le?: InputMaybe<Scalars['ID']>;
  lt?: InputMaybe<Scalars['ID']>;
};

export type ModelIntInput = {
  attributeExists?: InputMaybe<Scalars['Boolean']>;
  attributeType?: InputMaybe<ModelAttributeTypes>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  eq?: InputMaybe<Scalars['Int']>;
  ge?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  le?: InputMaybe<Scalars['Int']>;
  lt?: InputMaybe<Scalars['Int']>;
  ne?: InputMaybe<Scalars['Int']>;
};

export type ModelOrderConditionInput = {
  and?: InputMaybe<Array<InputMaybe<ModelOrderConditionInput>>>;
  clientOrdersId?: InputMaybe<ModelIdInput>;
  code?: InputMaybe<ModelIntInput>;
  endTime?: InputMaybe<ModelStringInput>;
  isCancel?: InputMaybe<ModelBooleanInput>;
  isComplete?: InputMaybe<ModelBooleanInput>;
  isDelivered?: InputMaybe<ModelBooleanInput>;
  isPicked?: InputMaybe<ModelBooleanInput>;
  not?: InputMaybe<ModelOrderConditionInput>;
  onGoing?: InputMaybe<ModelBooleanInput>;
  or?: InputMaybe<Array<InputMaybe<ModelOrderConditionInput>>>;
  orderNote?: InputMaybe<ModelStringInput>;
  shopperOrdersId?: InputMaybe<ModelIdInput>;
  startTime?: InputMaybe<ModelStringInput>;
  storeOrdersId?: InputMaybe<ModelIdInput>;
};

export type ModelOrderConnection = {
  __typename?: 'ModelOrderConnection';
  items: Array<Maybe<Order>>;
  nextToken?: Maybe<Scalars['String']>;
  startedAt?: Maybe<Scalars['AWSTimestamp']>;
};

export type ModelOrderFilterInput = {
  and?: InputMaybe<Array<InputMaybe<ModelOrderFilterInput>>>;
  clientOrdersId?: InputMaybe<ModelIdInput>;
  code?: InputMaybe<ModelIntInput>;
  endTime?: InputMaybe<ModelStringInput>;
  id?: InputMaybe<ModelIdInput>;
  isCancel?: InputMaybe<ModelBooleanInput>;
  isComplete?: InputMaybe<ModelBooleanInput>;
  isDelivered?: InputMaybe<ModelBooleanInput>;
  isPicked?: InputMaybe<ModelBooleanInput>;
  not?: InputMaybe<ModelOrderFilterInput>;
  onGoing?: InputMaybe<ModelBooleanInput>;
  or?: InputMaybe<Array<InputMaybe<ModelOrderFilterInput>>>;
  orderNote?: InputMaybe<ModelStringInput>;
  shopperOrdersId?: InputMaybe<ModelIdInput>;
  startTime?: InputMaybe<ModelStringInput>;
  storeOrdersId?: InputMaybe<ModelIdInput>;
};

export type ModelProductCategoryConditionInput = {
  and?: InputMaybe<Array<InputMaybe<ModelProductCategoryConditionInput>>>;
  image?: InputMaybe<ModelStringInput>;
  not?: InputMaybe<ModelProductCategoryConditionInput>;
  or?: InputMaybe<Array<InputMaybe<ModelProductCategoryConditionInput>>>;
  storeProductCategoriesId?: InputMaybe<ModelIdInput>;
  title?: InputMaybe<ModelStringInput>;
};

export type ModelProductCategoryConnection = {
  __typename?: 'ModelProductCategoryConnection';
  items: Array<Maybe<ProductCategory>>;
  nextToken?: Maybe<Scalars['String']>;
  startedAt?: Maybe<Scalars['AWSTimestamp']>;
};

export type ModelProductCategoryFilterInput = {
  and?: InputMaybe<Array<InputMaybe<ModelProductCategoryFilterInput>>>;
  id?: InputMaybe<ModelIdInput>;
  image?: InputMaybe<ModelStringInput>;
  not?: InputMaybe<ModelProductCategoryFilterInput>;
  or?: InputMaybe<Array<InputMaybe<ModelProductCategoryFilterInput>>>;
  storeProductCategoriesId?: InputMaybe<ModelIdInput>;
  title?: InputMaybe<ModelStringInput>;
};

export type ModelProductConditionInput = {
  and?: InputMaybe<Array<InputMaybe<ModelProductConditionInput>>>;
  brand?: InputMaybe<ModelStringInput>;
  color?: InputMaybe<ModelStringInput>;
  detail?: InputMaybe<ModelStringInput>;
  image?: InputMaybe<ModelStringInput>;
  model?: InputMaybe<ModelStringInput>;
  not?: InputMaybe<ModelProductConditionInput>;
  or?: InputMaybe<Array<InputMaybe<ModelProductConditionInput>>>;
  orderProductsId?: InputMaybe<ModelIdInput>;
  price?: InputMaybe<ModelFloatInput>;
  productCategoryProductsId?: InputMaybe<ModelIdInput>;
  rooms?: InputMaybe<ModelIntInput>;
  size?: InputMaybe<ModelStringInput>;
  title?: InputMaybe<ModelStringInput>;
  washrooms?: InputMaybe<ModelIntInput>;
};

export type ModelProductConnection = {
  __typename?: 'ModelProductConnection';
  items: Array<Maybe<Product>>;
  nextToken?: Maybe<Scalars['String']>;
  startedAt?: Maybe<Scalars['AWSTimestamp']>;
};

export type ModelProductFilterInput = {
  and?: InputMaybe<Array<InputMaybe<ModelProductFilterInput>>>;
  brand?: InputMaybe<ModelStringInput>;
  color?: InputMaybe<ModelStringInput>;
  detail?: InputMaybe<ModelStringInput>;
  id?: InputMaybe<ModelIdInput>;
  image?: InputMaybe<ModelStringInput>;
  model?: InputMaybe<ModelStringInput>;
  not?: InputMaybe<ModelProductFilterInput>;
  or?: InputMaybe<Array<InputMaybe<ModelProductFilterInput>>>;
  orderProductsId?: InputMaybe<ModelIdInput>;
  price?: InputMaybe<ModelFloatInput>;
  productCategoryProductsId?: InputMaybe<ModelIdInput>;
  rooms?: InputMaybe<ModelIntInput>;
  size?: InputMaybe<ModelStringInput>;
  title?: InputMaybe<ModelStringInput>;
  washrooms?: InputMaybe<ModelIntInput>;
};

export type ModelShopperConditionInput = {
  and?: InputMaybe<Array<InputMaybe<ModelShopperConditionInput>>>;
  avatar?: InputMaybe<ModelStringInput>;
  deliveryOption?: InputMaybe<ModelStringInput>;
  email?: InputMaybe<ModelStringInput>;
  firstName?: InputMaybe<ModelStringInput>;
  isOnline?: InputMaybe<ModelBooleanInput>;
  lastName?: InputMaybe<ModelStringInput>;
  latitude?: InputMaybe<ModelFloatInput>;
  location?: InputMaybe<ModelStringInput>;
  longitude?: InputMaybe<ModelFloatInput>;
  not?: InputMaybe<ModelShopperConditionInput>;
  or?: InputMaybe<Array<InputMaybe<ModelShopperConditionInput>>>;
  password?: InputMaybe<ModelStringInput>;
  phone?: InputMaybe<ModelStringInput>;
};

export type ModelShopperConnection = {
  __typename?: 'ModelShopperConnection';
  items: Array<Maybe<Shopper>>;
  nextToken?: Maybe<Scalars['String']>;
  startedAt?: Maybe<Scalars['AWSTimestamp']>;
};

export type ModelShopperFilterInput = {
  and?: InputMaybe<Array<InputMaybe<ModelShopperFilterInput>>>;
  avatar?: InputMaybe<ModelStringInput>;
  deliveryOption?: InputMaybe<ModelStringInput>;
  email?: InputMaybe<ModelStringInput>;
  firstName?: InputMaybe<ModelStringInput>;
  id?: InputMaybe<ModelIdInput>;
  isOnline?: InputMaybe<ModelBooleanInput>;
  lastName?: InputMaybe<ModelStringInput>;
  latitude?: InputMaybe<ModelFloatInput>;
  location?: InputMaybe<ModelStringInput>;
  longitude?: InputMaybe<ModelFloatInput>;
  not?: InputMaybe<ModelShopperFilterInput>;
  or?: InputMaybe<Array<InputMaybe<ModelShopperFilterInput>>>;
  password?: InputMaybe<ModelStringInput>;
  phone?: InputMaybe<ModelStringInput>;
};

export type ModelSizeInput = {
  between?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  eq?: InputMaybe<Scalars['Int']>;
  ge?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  le?: InputMaybe<Scalars['Int']>;
  lt?: InputMaybe<Scalars['Int']>;
  ne?: InputMaybe<Scalars['Int']>;
};

export enum ModelSortDirection {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type ModelStoreConditionInput = {
  address?: InputMaybe<ModelStringInput>;
  and?: InputMaybe<Array<InputMaybe<ModelStoreConditionInput>>>;
  branches?: InputMaybe<ModelStringInput>;
  categoryStoresId?: InputMaybe<ModelIdInput>;
  email?: InputMaybe<ModelStringInput>;
  headerImg?: InputMaybe<ModelStringInput>;
  latitude?: InputMaybe<ModelFloatInput>;
  logo?: InputMaybe<ModelStringInput>;
  longitude?: InputMaybe<ModelFloatInput>;
  not?: InputMaybe<ModelStoreConditionInput>;
  or?: InputMaybe<Array<InputMaybe<ModelStoreConditionInput>>>;
  outletType?: InputMaybe<ModelStringInput>;
  password?: InputMaybe<ModelStringInput>;
  phone?: InputMaybe<ModelStringInput>;
  storeName?: InputMaybe<ModelStringInput>;
  verified?: InputMaybe<ModelBooleanInput>;
};

export type ModelStoreConnection = {
  __typename?: 'ModelStoreConnection';
  items: Array<Maybe<Store>>;
  nextToken?: Maybe<Scalars['String']>;
  startedAt?: Maybe<Scalars['AWSTimestamp']>;
};

export type ModelStoreFilterInput = {
  address?: InputMaybe<ModelStringInput>;
  and?: InputMaybe<Array<InputMaybe<ModelStoreFilterInput>>>;
  branches?: InputMaybe<ModelStringInput>;
  categoryStoresId?: InputMaybe<ModelIdInput>;
  email?: InputMaybe<ModelStringInput>;
  headerImg?: InputMaybe<ModelStringInput>;
  id?: InputMaybe<ModelIdInput>;
  latitude?: InputMaybe<ModelFloatInput>;
  logo?: InputMaybe<ModelStringInput>;
  longitude?: InputMaybe<ModelFloatInput>;
  not?: InputMaybe<ModelStoreFilterInput>;
  or?: InputMaybe<Array<InputMaybe<ModelStoreFilterInput>>>;
  outletType?: InputMaybe<ModelStringInput>;
  password?: InputMaybe<ModelStringInput>;
  phone?: InputMaybe<ModelStringInput>;
  storeName?: InputMaybe<ModelStringInput>;
  verified?: InputMaybe<ModelBooleanInput>;
};

export type ModelStringInput = {
  attributeExists?: InputMaybe<Scalars['Boolean']>;
  attributeType?: InputMaybe<ModelAttributeTypes>;
  beginsWith?: InputMaybe<Scalars['String']>;
  between?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  eq?: InputMaybe<Scalars['String']>;
  ge?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  le?: InputMaybe<Scalars['String']>;
  lt?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  notContains?: InputMaybe<Scalars['String']>;
  size?: InputMaybe<ModelSizeInput>;
};

export type ModelSubscriptionBooleanInput = {
  eq?: InputMaybe<Scalars['Boolean']>;
  ne?: InputMaybe<Scalars['Boolean']>;
};

export type ModelSubscriptionCategoryFilterInput = {
  and?: InputMaybe<Array<InputMaybe<ModelSubscriptionCategoryFilterInput>>>;
  id?: InputMaybe<ModelSubscriptionIdInput>;
  image?: InputMaybe<ModelSubscriptionStringInput>;
  or?: InputMaybe<Array<InputMaybe<ModelSubscriptionCategoryFilterInput>>>;
  title?: InputMaybe<ModelSubscriptionStringInput>;
};

export type ModelSubscriptionClientFilterInput = {
  and?: InputMaybe<Array<InputMaybe<ModelSubscriptionClientFilterInput>>>;
  email?: InputMaybe<ModelSubscriptionStringInput>;
  firstName?: InputMaybe<ModelSubscriptionStringInput>;
  id?: InputMaybe<ModelSubscriptionIdInput>;
  lastName?: InputMaybe<ModelSubscriptionStringInput>;
  location?: InputMaybe<ModelSubscriptionStringInput>;
  or?: InputMaybe<Array<InputMaybe<ModelSubscriptionClientFilterInput>>>;
  password?: InputMaybe<ModelSubscriptionStringInput>;
  phone?: InputMaybe<ModelSubscriptionStringInput>;
};

export type ModelSubscriptionFloatInput = {
  between?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  eq?: InputMaybe<Scalars['Float']>;
  ge?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  le?: InputMaybe<Scalars['Float']>;
  lt?: InputMaybe<Scalars['Float']>;
  ne?: InputMaybe<Scalars['Float']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

export type ModelSubscriptionIdInput = {
  beginsWith?: InputMaybe<Scalars['ID']>;
  between?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  contains?: InputMaybe<Scalars['ID']>;
  eq?: InputMaybe<Scalars['ID']>;
  ge?: InputMaybe<Scalars['ID']>;
  gt?: InputMaybe<Scalars['ID']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  le?: InputMaybe<Scalars['ID']>;
  lt?: InputMaybe<Scalars['ID']>;
  ne?: InputMaybe<Scalars['ID']>;
  notContains?: InputMaybe<Scalars['ID']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};

export type ModelSubscriptionIntInput = {
  between?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  eq?: InputMaybe<Scalars['Int']>;
  ge?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  le?: InputMaybe<Scalars['Int']>;
  lt?: InputMaybe<Scalars['Int']>;
  ne?: InputMaybe<Scalars['Int']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};

export type ModelSubscriptionOrderFilterInput = {
  and?: InputMaybe<Array<InputMaybe<ModelSubscriptionOrderFilterInput>>>;
  code?: InputMaybe<ModelSubscriptionIntInput>;
  endTime?: InputMaybe<ModelSubscriptionStringInput>;
  id?: InputMaybe<ModelSubscriptionIdInput>;
  isCancel?: InputMaybe<ModelSubscriptionBooleanInput>;
  isComplete?: InputMaybe<ModelSubscriptionBooleanInput>;
  isDelivered?: InputMaybe<ModelSubscriptionBooleanInput>;
  isPicked?: InputMaybe<ModelSubscriptionBooleanInput>;
  onGoing?: InputMaybe<ModelSubscriptionBooleanInput>;
  or?: InputMaybe<Array<InputMaybe<ModelSubscriptionOrderFilterInput>>>;
  orderNote?: InputMaybe<ModelSubscriptionStringInput>;
  startTime?: InputMaybe<ModelSubscriptionStringInput>;
};

export type ModelSubscriptionProductCategoryFilterInput = {
  and?: InputMaybe<Array<InputMaybe<ModelSubscriptionProductCategoryFilterInput>>>;
  id?: InputMaybe<ModelSubscriptionIdInput>;
  image?: InputMaybe<ModelSubscriptionStringInput>;
  or?: InputMaybe<Array<InputMaybe<ModelSubscriptionProductCategoryFilterInput>>>;
  title?: InputMaybe<ModelSubscriptionStringInput>;
};

export type ModelSubscriptionProductFilterInput = {
  and?: InputMaybe<Array<InputMaybe<ModelSubscriptionProductFilterInput>>>;
  brand?: InputMaybe<ModelSubscriptionStringInput>;
  color?: InputMaybe<ModelSubscriptionStringInput>;
  detail?: InputMaybe<ModelSubscriptionStringInput>;
  id?: InputMaybe<ModelSubscriptionIdInput>;
  image?: InputMaybe<ModelSubscriptionStringInput>;
  model?: InputMaybe<ModelSubscriptionStringInput>;
  or?: InputMaybe<Array<InputMaybe<ModelSubscriptionProductFilterInput>>>;
  price?: InputMaybe<ModelSubscriptionFloatInput>;
  rooms?: InputMaybe<ModelSubscriptionIntInput>;
  size?: InputMaybe<ModelSubscriptionStringInput>;
  title?: InputMaybe<ModelSubscriptionStringInput>;
  washrooms?: InputMaybe<ModelSubscriptionIntInput>;
};

export type ModelSubscriptionShopperFilterInput = {
  and?: InputMaybe<Array<InputMaybe<ModelSubscriptionShopperFilterInput>>>;
  avatar?: InputMaybe<ModelSubscriptionStringInput>;
  deliveryOption?: InputMaybe<ModelSubscriptionStringInput>;
  email?: InputMaybe<ModelSubscriptionStringInput>;
  firstName?: InputMaybe<ModelSubscriptionStringInput>;
  id?: InputMaybe<ModelSubscriptionIdInput>;
  isOnline?: InputMaybe<ModelSubscriptionBooleanInput>;
  lastName?: InputMaybe<ModelSubscriptionStringInput>;
  latitude?: InputMaybe<ModelSubscriptionFloatInput>;
  location?: InputMaybe<ModelSubscriptionStringInput>;
  longitude?: InputMaybe<ModelSubscriptionFloatInput>;
  or?: InputMaybe<Array<InputMaybe<ModelSubscriptionShopperFilterInput>>>;
  password?: InputMaybe<ModelSubscriptionStringInput>;
  phone?: InputMaybe<ModelSubscriptionStringInput>;
};

export type ModelSubscriptionStoreFilterInput = {
  address?: InputMaybe<ModelSubscriptionStringInput>;
  and?: InputMaybe<Array<InputMaybe<ModelSubscriptionStoreFilterInput>>>;
  branches?: InputMaybe<ModelSubscriptionStringInput>;
  email?: InputMaybe<ModelSubscriptionStringInput>;
  headerImg?: InputMaybe<ModelSubscriptionStringInput>;
  id?: InputMaybe<ModelSubscriptionIdInput>;
  latitude?: InputMaybe<ModelSubscriptionFloatInput>;
  logo?: InputMaybe<ModelSubscriptionStringInput>;
  longitude?: InputMaybe<ModelSubscriptionFloatInput>;
  or?: InputMaybe<Array<InputMaybe<ModelSubscriptionStoreFilterInput>>>;
  outletType?: InputMaybe<ModelSubscriptionStringInput>;
  password?: InputMaybe<ModelSubscriptionStringInput>;
  phone?: InputMaybe<ModelSubscriptionStringInput>;
  storeName?: InputMaybe<ModelSubscriptionStringInput>;
  verified?: InputMaybe<ModelSubscriptionBooleanInput>;
};

export type ModelSubscriptionStringInput = {
  beginsWith?: InputMaybe<Scalars['String']>;
  between?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  eq?: InputMaybe<Scalars['String']>;
  ge?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  le?: InputMaybe<Scalars['String']>;
  lt?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  notContains?: InputMaybe<Scalars['String']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Mutation = {
  __typename?: 'Mutation';
  codeVerification: ClientPaylod;
  createCategory?: Maybe<Category>;
  createClient?: Maybe<Client>;
  createOrder?: Maybe<Order>;
  createPaymentIntent: PaymentIntention;
  createProduct?: Maybe<Product>;
  createProductCategory?: Maybe<ProductCategory>;
  createShopper?: Maybe<Shopper>;
  createStore?: Maybe<Store>;
  deleteCategory?: Maybe<Category>;
  deleteClient?: Maybe<Client>;
  deleteOrder?: Maybe<Order>;
  deleteProduct?: Maybe<Product>;
  deleteProductCategory?: Maybe<ProductCategory>;
  deleteShopper?: Maybe<Shopper>;
  deleteStore?: Maybe<Store>;
  getVideoToken: Scalars['String'];
  phoneVerification?: Maybe<Scalars['String']>;
  shoppeLocationUpdate: NewShopper;
  shopperLogin: NewShopper;
  shopperSignUp: NewShopper;
  socialAuth: ClientPaylod;
  storeLogin: NewStore;
  storeSignup: NewStore;
  updateCategory?: Maybe<Category>;
  updateClient?: Maybe<Client>;
  updateOrder?: Maybe<Order>;
  updateProduct?: Maybe<Product>;
  updateProductCategory?: Maybe<ProductCategory>;
  updateShopper?: Maybe<Shopper>;
  updateStore?: Maybe<Store>;
};


export type MutationCodeVerificationArgs = {
  code: Scalars['Int'];
  phoneNumber: Scalars['String'];
};


export type MutationCreateCategoryArgs = {
  condition?: InputMaybe<ModelCategoryConditionInput>;
  input: CreateCategoryInput;
};


export type MutationCreateClientArgs = {
  condition?: InputMaybe<ModelClientConditionInput>;
  input: CreateClientInput;
};


export type MutationCreateOrderArgs = {
  condition?: InputMaybe<ModelOrderConditionInput>;
  input: CreateOrderInput;
};


export type MutationCreatePaymentIntentArgs = {
  amount: Scalars['Float'];
};


export type MutationCreateProductArgs = {
  condition?: InputMaybe<ModelProductConditionInput>;
  input: CreateProductInput;
};


export type MutationCreateProductCategoryArgs = {
  condition?: InputMaybe<ModelProductCategoryConditionInput>;
  input: CreateProductCategoryInput;
};


export type MutationCreateShopperArgs = {
  condition?: InputMaybe<ModelShopperConditionInput>;
  input: CreateShopperInput;
};


export type MutationCreateStoreArgs = {
  condition?: InputMaybe<ModelStoreConditionInput>;
  input: CreateStoreInput;
};


export type MutationDeleteCategoryArgs = {
  condition?: InputMaybe<ModelCategoryConditionInput>;
  input: DeleteCategoryInput;
};


export type MutationDeleteClientArgs = {
  condition?: InputMaybe<ModelClientConditionInput>;
  input: DeleteClientInput;
};


export type MutationDeleteOrderArgs = {
  condition?: InputMaybe<ModelOrderConditionInput>;
  input: DeleteOrderInput;
};


export type MutationDeleteProductArgs = {
  condition?: InputMaybe<ModelProductConditionInput>;
  input: DeleteProductInput;
};


export type MutationDeleteProductCategoryArgs = {
  condition?: InputMaybe<ModelProductCategoryConditionInput>;
  input: DeleteProductCategoryInput;
};


export type MutationDeleteShopperArgs = {
  condition?: InputMaybe<ModelShopperConditionInput>;
  input: DeleteShopperInput;
};


export type MutationDeleteStoreArgs = {
  condition?: InputMaybe<ModelStoreConditionInput>;
  input: DeleteStoreInput;
};


export type MutationGetVideoTokenArgs = {
  userName: Scalars['String'];
};


export type MutationPhoneVerificationArgs = {
  phoneNumber: Scalars['String'];
};


export type MutationShoppeLocationUpdateArgs = {
  id: Scalars['ID'];
  isOnline?: InputMaybe<Scalars['Boolean']>;
  latitude?: InputMaybe<Scalars['Float']>;
  longitude?: InputMaybe<Scalars['Float']>;
};


export type MutationShopperLoginArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type MutationShopperSignUpArgs = {
  avatar: Scalars['String'];
  deliveryOption: Scalars['String'];
  email: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  location: Scalars['String'];
  password: Scalars['String'];
  phone: Scalars['String'];
};


export type MutationSocialAuthArgs = {
  avatar: Scalars['String'];
  email: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
};


export type MutationStoreLoginArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type MutationStoreSignupArgs = {
  address: Scalars['String'];
  branches: Scalars['String'];
  categoryStoresId?: InputMaybe<Scalars['ID']>;
  email: Scalars['String'];
  headerImg?: InputMaybe<Scalars['String']>;
  logo?: InputMaybe<Scalars['String']>;
  outletType: Scalars['String'];
  password: Scalars['String'];
  phone: Scalars['String'];
  storeName?: InputMaybe<Scalars['String']>;
  verified: Scalars['Boolean'];
};


export type MutationUpdateCategoryArgs = {
  condition?: InputMaybe<ModelCategoryConditionInput>;
  input: UpdateCategoryInput;
};


export type MutationUpdateClientArgs = {
  condition?: InputMaybe<ModelClientConditionInput>;
  input: UpdateClientInput;
};


export type MutationUpdateOrderArgs = {
  condition?: InputMaybe<ModelOrderConditionInput>;
  input: UpdateOrderInput;
};


export type MutationUpdateProductArgs = {
  condition?: InputMaybe<ModelProductConditionInput>;
  input: UpdateProductInput;
};


export type MutationUpdateProductCategoryArgs = {
  condition?: InputMaybe<ModelProductCategoryConditionInput>;
  input: UpdateProductCategoryInput;
};


export type MutationUpdateShopperArgs = {
  condition?: InputMaybe<ModelShopperConditionInput>;
  input: UpdateShopperInput;
};


export type MutationUpdateStoreArgs = {
  condition?: InputMaybe<ModelStoreConditionInput>;
  input: UpdateStoreInput;
};

export type Order = {
  __typename?: 'Order';
  _deleted?: Maybe<Scalars['Boolean']>;
  _lastChangedAt: Scalars['AWSTimestamp'];
  _version: Scalars['Int'];
  client?: Maybe<Client>;
  clientOrdersId?: Maybe<Scalars['ID']>;
  code?: Maybe<Scalars['Int']>;
  createdAt: Scalars['AWSDateTime'];
  endTime: Scalars['AWSDateTime'];
  id: Scalars['ID'];
  isCancel?: Maybe<Scalars['Boolean']>;
  isComplete?: Maybe<Scalars['Boolean']>;
  isDelivered?: Maybe<Scalars['Boolean']>;
  isPicked?: Maybe<Scalars['Boolean']>;
  onGoing: Scalars['Boolean'];
  orderNote: Scalars['String'];
  products?: Maybe<ModelProductConnection>;
  shopper?: Maybe<Shopper>;
  shopperOrdersId?: Maybe<Scalars['ID']>;
  startTime: Scalars['AWSDateTime'];
  store?: Maybe<Store>;
  storeOrdersId?: Maybe<Scalars['ID']>;
  updatedAt: Scalars['AWSDateTime'];
};


export type OrderProductsArgs = {
  filter?: InputMaybe<ModelProductFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  nextToken?: InputMaybe<Scalars['String']>;
  sortDirection?: InputMaybe<ModelSortDirection>;
};

export type PaymentIntention = {
  __typename?: 'PaymentIntention';
  customer: Scalars['String'];
  ephemeralKey: Scalars['String'];
  paymentIntent: Scalars['String'];
  publishableKey: Scalars['String'];
};

export type Product = {
  __typename?: 'Product';
  _deleted?: Maybe<Scalars['Boolean']>;
  _lastChangedAt: Scalars['AWSTimestamp'];
  _version: Scalars['Int'];
  brand: Scalars['String'];
  color?: Maybe<Scalars['String']>;
  createdAt: Scalars['AWSDateTime'];
  detail: Scalars['String'];
  id: Scalars['ID'];
  image?: Maybe<Scalars['String']>;
  model?: Maybe<Scalars['String']>;
  order?: Maybe<Order>;
  orderProductsId?: Maybe<Scalars['ID']>;
  price: Scalars['Float'];
  productCategory?: Maybe<ProductCategory>;
  productCategoryProductsId?: Maybe<Scalars['ID']>;
  rooms?: Maybe<Scalars['Int']>;
  size?: Maybe<Scalars['String']>;
  title: Scalars['String'];
  updatedAt: Scalars['AWSDateTime'];
  washrooms?: Maybe<Scalars['Int']>;
};

export type ProductCategory = {
  __typename?: 'ProductCategory';
  _deleted?: Maybe<Scalars['Boolean']>;
  _lastChangedAt: Scalars['AWSTimestamp'];
  _version: Scalars['Int'];
  createdAt: Scalars['AWSDateTime'];
  id: Scalars['ID'];
  image: Scalars['String'];
  products?: Maybe<ModelProductConnection>;
  store?: Maybe<Store>;
  storeProductCategoriesId?: Maybe<Scalars['ID']>;
  title: Scalars['String'];
  updatedAt: Scalars['AWSDateTime'];
};


export type ProductCategoryProductsArgs = {
  filter?: InputMaybe<ModelProductFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  nextToken?: InputMaybe<Scalars['String']>;
  sortDirection?: InputMaybe<ModelSortDirection>;
};

export type Query = {
  __typename?: 'Query';
  clientByEmail?: Maybe<ModelClientConnection>;
  getCategory?: Maybe<Category>;
  getClient?: Maybe<Client>;
  getOrder?: Maybe<Order>;
  getProduct?: Maybe<Product>;
  getProductCategory?: Maybe<ProductCategory>;
  getShopper?: Maybe<Shopper>;
  getStore?: Maybe<Store>;
  hello: Scalars['String'];
  listCategories?: Maybe<ModelCategoryConnection>;
  listClients?: Maybe<ModelClientConnection>;
  listOrders?: Maybe<ModelOrderConnection>;
  listProductCategories?: Maybe<ModelProductCategoryConnection>;
  listProducts?: Maybe<ModelProductConnection>;
  listShoppers?: Maybe<ModelShopperConnection>;
  listStores?: Maybe<ModelStoreConnection>;
  shopperByEmail?: Maybe<ModelShopperConnection>;
  syncCategories?: Maybe<ModelCategoryConnection>;
  syncClients?: Maybe<ModelClientConnection>;
  syncOrders?: Maybe<ModelOrderConnection>;
  syncProductCategories?: Maybe<ModelProductCategoryConnection>;
  syncProducts?: Maybe<ModelProductConnection>;
  syncShoppers?: Maybe<ModelShopperConnection>;
  syncStores?: Maybe<ModelStoreConnection>;
};


export type QueryClientByEmailArgs = {
  email: Scalars['String'];
  filter?: InputMaybe<ModelClientFilterInput>;
  id?: InputMaybe<ModelIdKeyConditionInput>;
  limit?: InputMaybe<Scalars['Int']>;
  nextToken?: InputMaybe<Scalars['String']>;
  sortDirection?: InputMaybe<ModelSortDirection>;
};


export type QueryGetCategoryArgs = {
  id: Scalars['ID'];
};


export type QueryGetClientArgs = {
  id: Scalars['ID'];
};


export type QueryGetOrderArgs = {
  id: Scalars['ID'];
};


export type QueryGetProductArgs = {
  id: Scalars['ID'];
};


export type QueryGetProductCategoryArgs = {
  id: Scalars['ID'];
};


export type QueryGetShopperArgs = {
  id: Scalars['ID'];
};


export type QueryGetStoreArgs = {
  id: Scalars['ID'];
};


export type QueryListCategoriesArgs = {
  filter?: InputMaybe<ModelCategoryFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  nextToken?: InputMaybe<Scalars['String']>;
};


export type QueryListClientsArgs = {
  filter?: InputMaybe<ModelClientFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  nextToken?: InputMaybe<Scalars['String']>;
};


export type QueryListOrdersArgs = {
  filter?: InputMaybe<ModelOrderFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  nextToken?: InputMaybe<Scalars['String']>;
};


export type QueryListProductCategoriesArgs = {
  filter?: InputMaybe<ModelProductCategoryFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  nextToken?: InputMaybe<Scalars['String']>;
};


export type QueryListProductsArgs = {
  filter?: InputMaybe<ModelProductFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  nextToken?: InputMaybe<Scalars['String']>;
};


export type QueryListShoppersArgs = {
  filter?: InputMaybe<ModelShopperFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  nextToken?: InputMaybe<Scalars['String']>;
};


export type QueryListStoresArgs = {
  filter?: InputMaybe<ModelStoreFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  nextToken?: InputMaybe<Scalars['String']>;
};


export type QueryShopperByEmailArgs = {
  email: Scalars['String'];
  filter?: InputMaybe<ModelShopperFilterInput>;
  id?: InputMaybe<ModelIdKeyConditionInput>;
  limit?: InputMaybe<Scalars['Int']>;
  nextToken?: InputMaybe<Scalars['String']>;
  sortDirection?: InputMaybe<ModelSortDirection>;
};


export type QuerySyncCategoriesArgs = {
  filter?: InputMaybe<ModelCategoryFilterInput>;
  lastSync?: InputMaybe<Scalars['AWSTimestamp']>;
  limit?: InputMaybe<Scalars['Int']>;
  nextToken?: InputMaybe<Scalars['String']>;
};


export type QuerySyncClientsArgs = {
  filter?: InputMaybe<ModelClientFilterInput>;
  lastSync?: InputMaybe<Scalars['AWSTimestamp']>;
  limit?: InputMaybe<Scalars['Int']>;
  nextToken?: InputMaybe<Scalars['String']>;
};


export type QuerySyncOrdersArgs = {
  filter?: InputMaybe<ModelOrderFilterInput>;
  lastSync?: InputMaybe<Scalars['AWSTimestamp']>;
  limit?: InputMaybe<Scalars['Int']>;
  nextToken?: InputMaybe<Scalars['String']>;
};


export type QuerySyncProductCategoriesArgs = {
  filter?: InputMaybe<ModelProductCategoryFilterInput>;
  lastSync?: InputMaybe<Scalars['AWSTimestamp']>;
  limit?: InputMaybe<Scalars['Int']>;
  nextToken?: InputMaybe<Scalars['String']>;
};


export type QuerySyncProductsArgs = {
  filter?: InputMaybe<ModelProductFilterInput>;
  lastSync?: InputMaybe<Scalars['AWSTimestamp']>;
  limit?: InputMaybe<Scalars['Int']>;
  nextToken?: InputMaybe<Scalars['String']>;
};


export type QuerySyncShoppersArgs = {
  filter?: InputMaybe<ModelShopperFilterInput>;
  lastSync?: InputMaybe<Scalars['AWSTimestamp']>;
  limit?: InputMaybe<Scalars['Int']>;
  nextToken?: InputMaybe<Scalars['String']>;
};


export type QuerySyncStoresArgs = {
  filter?: InputMaybe<ModelStoreFilterInput>;
  lastSync?: InputMaybe<Scalars['AWSTimestamp']>;
  limit?: InputMaybe<Scalars['Int']>;
  nextToken?: InputMaybe<Scalars['String']>;
};

export type Shopper = {
  __typename?: 'Shopper';
  _deleted?: Maybe<Scalars['Boolean']>;
  _lastChangedAt: Scalars['AWSTimestamp'];
  _version: Scalars['Int'];
  avatar: Scalars['String'];
  createdAt: Scalars['AWSDateTime'];
  deliveryOption?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  firstName: Scalars['String'];
  id: Scalars['ID'];
  isOnline?: Maybe<Scalars['Boolean']>;
  lastName: Scalars['String'];
  latitude?: Maybe<Scalars['Float']>;
  location?: Maybe<Scalars['String']>;
  longitude?: Maybe<Scalars['Float']>;
  orders?: Maybe<ModelOrderConnection>;
  password: Scalars['String'];
  phone?: Maybe<Scalars['String']>;
  updatedAt: Scalars['AWSDateTime'];
};


export type ShopperOrdersArgs = {
  filter?: InputMaybe<ModelOrderFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  nextToken?: InputMaybe<Scalars['String']>;
  sortDirection?: InputMaybe<ModelSortDirection>;
};

export type Store = {
  __typename?: 'Store';
  _deleted?: Maybe<Scalars['Boolean']>;
  _lastChangedAt: Scalars['AWSTimestamp'];
  _version: Scalars['Int'];
  address: Scalars['String'];
  branches: Scalars['String'];
  category?: Maybe<Category>;
  categoryStoresId?: Maybe<Scalars['ID']>;
  createdAt: Scalars['AWSDateTime'];
  email: Scalars['String'];
  headerImg?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  latitude?: Maybe<Scalars['Float']>;
  logo?: Maybe<Scalars['String']>;
  longitude?: Maybe<Scalars['Float']>;
  orders?: Maybe<ModelOrderConnection>;
  outletType: Scalars['String'];
  password: Scalars['String'];
  phone: Scalars['String'];
  productCategories?: Maybe<ModelProductCategoryConnection>;
  storeName?: Maybe<Scalars['String']>;
  updatedAt: Scalars['AWSDateTime'];
  verified: Scalars['Boolean'];
};


export type StoreOrdersArgs = {
  filter?: InputMaybe<ModelOrderFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  nextToken?: InputMaybe<Scalars['String']>;
  sortDirection?: InputMaybe<ModelSortDirection>;
};


export type StoreProductCategoriesArgs = {
  filter?: InputMaybe<ModelProductCategoryFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  nextToken?: InputMaybe<Scalars['String']>;
  sortDirection?: InputMaybe<ModelSortDirection>;
};

export type Subscription = {
  __typename?: 'Subscription';
  onCreateCategory?: Maybe<Category>;
  onCreateClient?: Maybe<Client>;
  onCreateOrder?: Maybe<Order>;
  onCreateProduct?: Maybe<Product>;
  onCreateProductCategory?: Maybe<ProductCategory>;
  onCreateShopper?: Maybe<Shopper>;
  onCreateStore?: Maybe<Store>;
  onDeleteCategory?: Maybe<Category>;
  onDeleteClient?: Maybe<Client>;
  onDeleteOrder?: Maybe<Order>;
  onDeleteProduct?: Maybe<Product>;
  onDeleteProductCategory?: Maybe<ProductCategory>;
  onDeleteShopper?: Maybe<Shopper>;
  onDeleteStore?: Maybe<Store>;
  onShopperLocationUpdate?: Maybe<NewShopper>;
  onUpdateCategory?: Maybe<Category>;
  onUpdateClient?: Maybe<Client>;
  onUpdateOrder?: Maybe<Order>;
  onUpdateProduct?: Maybe<Product>;
  onUpdateProductCategory?: Maybe<ProductCategory>;
  onUpdateShopper?: Maybe<Shopper>;
  onUpdateStore?: Maybe<Store>;
};


export type SubscriptionOnCreateCategoryArgs = {
  filter?: InputMaybe<ModelSubscriptionCategoryFilterInput>;
};


export type SubscriptionOnCreateClientArgs = {
  filter?: InputMaybe<ModelSubscriptionClientFilterInput>;
};


export type SubscriptionOnCreateOrderArgs = {
  filter?: InputMaybe<ModelSubscriptionOrderFilterInput>;
};


export type SubscriptionOnCreateProductArgs = {
  filter?: InputMaybe<ModelSubscriptionProductFilterInput>;
};


export type SubscriptionOnCreateProductCategoryArgs = {
  filter?: InputMaybe<ModelSubscriptionProductCategoryFilterInput>;
};


export type SubscriptionOnCreateShopperArgs = {
  filter?: InputMaybe<ModelSubscriptionShopperFilterInput>;
};


export type SubscriptionOnCreateStoreArgs = {
  filter?: InputMaybe<ModelSubscriptionStoreFilterInput>;
};


export type SubscriptionOnDeleteCategoryArgs = {
  filter?: InputMaybe<ModelSubscriptionCategoryFilterInput>;
};


export type SubscriptionOnDeleteClientArgs = {
  filter?: InputMaybe<ModelSubscriptionClientFilterInput>;
};


export type SubscriptionOnDeleteOrderArgs = {
  filter?: InputMaybe<ModelSubscriptionOrderFilterInput>;
};


export type SubscriptionOnDeleteProductArgs = {
  filter?: InputMaybe<ModelSubscriptionProductFilterInput>;
};


export type SubscriptionOnDeleteProductCategoryArgs = {
  filter?: InputMaybe<ModelSubscriptionProductCategoryFilterInput>;
};


export type SubscriptionOnDeleteShopperArgs = {
  filter?: InputMaybe<ModelSubscriptionShopperFilterInput>;
};


export type SubscriptionOnDeleteStoreArgs = {
  filter?: InputMaybe<ModelSubscriptionStoreFilterInput>;
};


export type SubscriptionOnUpdateCategoryArgs = {
  filter?: InputMaybe<ModelSubscriptionCategoryFilterInput>;
};


export type SubscriptionOnUpdateClientArgs = {
  filter?: InputMaybe<ModelSubscriptionClientFilterInput>;
};


export type SubscriptionOnUpdateOrderArgs = {
  filter?: InputMaybe<ModelSubscriptionOrderFilterInput>;
};


export type SubscriptionOnUpdateProductArgs = {
  filter?: InputMaybe<ModelSubscriptionProductFilterInput>;
};


export type SubscriptionOnUpdateProductCategoryArgs = {
  filter?: InputMaybe<ModelSubscriptionProductCategoryFilterInput>;
};


export type SubscriptionOnUpdateShopperArgs = {
  filter?: InputMaybe<ModelSubscriptionShopperFilterInput>;
};


export type SubscriptionOnUpdateStoreArgs = {
  filter?: InputMaybe<ModelSubscriptionStoreFilterInput>;
};

export type UpdateCategoryInput = {
  _version?: InputMaybe<Scalars['Int']>;
  id: Scalars['ID'];
  image?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type UpdateClientInput = {
  _version?: InputMaybe<Scalars['Int']>;
  email?: InputMaybe<Scalars['String']>;
  firstName?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  lastName?: InputMaybe<Scalars['String']>;
  location?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
};

export type UpdateOrderInput = {
  _version?: InputMaybe<Scalars['Int']>;
  clientOrdersId?: InputMaybe<Scalars['ID']>;
  code?: InputMaybe<Scalars['Int']>;
  endTime?: InputMaybe<Scalars['AWSDateTime']>;
  id: Scalars['ID'];
  isCancel?: InputMaybe<Scalars['Boolean']>;
  isComplete?: InputMaybe<Scalars['Boolean']>;
  isDelivered?: InputMaybe<Scalars['Boolean']>;
  isPicked?: InputMaybe<Scalars['Boolean']>;
  onGoing?: InputMaybe<Scalars['Boolean']>;
  orderNote?: InputMaybe<Scalars['String']>;
  shopperOrdersId?: InputMaybe<Scalars['ID']>;
  startTime?: InputMaybe<Scalars['AWSDateTime']>;
  storeOrdersId?: InputMaybe<Scalars['ID']>;
};

export type UpdateProductCategoryInput = {
  _version?: InputMaybe<Scalars['Int']>;
  id: Scalars['ID'];
  image?: InputMaybe<Scalars['String']>;
  storeProductCategoriesId?: InputMaybe<Scalars['ID']>;
  title?: InputMaybe<Scalars['String']>;
};

export type UpdateProductInput = {
  _version?: InputMaybe<Scalars['Int']>;
  brand?: InputMaybe<Scalars['String']>;
  color?: InputMaybe<Scalars['String']>;
  detail?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  image?: InputMaybe<Scalars['String']>;
  model?: InputMaybe<Scalars['String']>;
  orderProductsId?: InputMaybe<Scalars['ID']>;
  price?: InputMaybe<Scalars['Float']>;
  productCategoryProductsId?: InputMaybe<Scalars['ID']>;
  rooms?: InputMaybe<Scalars['Int']>;
  size?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  washrooms?: InputMaybe<Scalars['Int']>;
};

export type UpdateShopperInput = {
  _version?: InputMaybe<Scalars['Int']>;
  avatar?: InputMaybe<Scalars['String']>;
  deliveryOption?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  firstName?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  isOnline?: InputMaybe<Scalars['Boolean']>;
  lastName?: InputMaybe<Scalars['String']>;
  latitude?: InputMaybe<Scalars['Float']>;
  location?: InputMaybe<Scalars['String']>;
  longitude?: InputMaybe<Scalars['Float']>;
  password?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
};

export type UpdateStoreInput = {
  _version?: InputMaybe<Scalars['Int']>;
  address?: InputMaybe<Scalars['String']>;
  branches?: InputMaybe<Scalars['String']>;
  categoryStoresId?: InputMaybe<Scalars['ID']>;
  email?: InputMaybe<Scalars['String']>;
  headerImg?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  latitude?: InputMaybe<Scalars['Float']>;
  logo?: InputMaybe<Scalars['String']>;
  longitude?: InputMaybe<Scalars['Float']>;
  outletType?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
  storeName?: InputMaybe<Scalars['String']>;
  verified?: InputMaybe<Scalars['Boolean']>;
};

export type ClientPaylod = {
  __typename?: 'clientPaylod';
  client?: Maybe<Client>;
  message?: Maybe<Scalars['String']>;
  success?: Maybe<Scalars['Boolean']>;
  token?: Maybe<Scalars['String']>;
};

export type NewShoperPayload = {
  __typename?: 'newShoperPayload';
  avatar?: Maybe<Scalars['String']>;
  deliveryOption?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  isOnline?: Maybe<Scalars['Boolean']>;
  lastName?: Maybe<Scalars['String']>;
  latitude?: Maybe<Scalars['Float']>;
  location?: Maybe<Scalars['String']>;
  longitude?: Maybe<Scalars['Float']>;
  password?: Maybe<Scalars['String']>;
  phone: Scalars['String'];
};

export type NewShopper = {
  __typename?: 'newShopper';
  message?: Maybe<Scalars['String']>;
  shopper?: Maybe<NewShoperPayload>;
  success?: Maybe<Scalars['Boolean']>;
  token?: Maybe<Scalars['String']>;
};

export type NewStore = {
  __typename?: 'newStore';
  store?: Maybe<NewStorePayload>;
  token?: Maybe<Scalars['String']>;
};

export type NewStorePayload = {
  __typename?: 'newStorePayload';
  avatar: Scalars['String'];
  email: Scalars['String'];
  firstName: Scalars['String'];
  id: Scalars['ID'];
  lastName: Scalars['String'];
  location: Scalars['String'];
  phone: Scalars['String'];
};

export type PhoneUser = {
  __typename?: 'phoneUser';
  phoneNumber?: Maybe<Scalars['String']>;
  token?: Maybe<Scalars['String']>;
};

export type PhoneVerification = {
  __typename?: 'phoneVerification';
  phoneNumber: Scalars['String'];
};

export type PhoneVerificationMutationVariables = Exact<{
  phoneNumber: Scalars['String'];
}>;


export type PhoneVerificationMutation = { __typename?: 'Mutation', phoneVerification?: string | null };

export type CodeVerificationMutationVariables = Exact<{
  phoneNumber: Scalars['String'];
  code: Scalars['Int'];
}>;


export type CodeVerificationMutation = { __typename?: 'Mutation', codeVerification: { __typename?: 'clientPaylod', token?: string | null, success?: boolean | null, message?: string | null, client?: { __typename?: 'Client', id: string, firstName?: string | null, lastName?: string | null, email?: string | null, password: string, phone?: string | null, location?: string | null } | null } };

export type SocialAuthMutationVariables = Exact<{
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  email: Scalars['String'];
  avatar: Scalars['String'];
}>;


export type SocialAuthMutation = { __typename?: 'Mutation', socialAuth: { __typename?: 'clientPaylod', token?: string | null, success?: boolean | null, message?: string | null, client?: { __typename?: 'Client', id: string, firstName?: string | null, lastName?: string | null, email?: string | null, password: string, phone?: string | null, location?: string | null } | null } };

export type ListCategoriesQueryVariables = Exact<{ [key: string]: never; }>;


export type ListCategoriesQuery = { __typename?: 'Query', listCategories?: { __typename?: 'ModelCategoryConnection', items: Array<{ __typename?: 'Category', id: string, title: string, image: string, stores?: { __typename?: 'ModelStoreConnection', items: Array<{ __typename?: 'Store', id: string, storeName?: string | null, headerImg?: string | null, address: string } | null> } | null } | null> } | null };

export type GetCategoryQueryVariables = Exact<{
  getCategoryId: Scalars['ID'];
}>;


export type GetCategoryQuery = { __typename?: 'Query', getCategory?: { __typename?: 'Category', id: string, stores?: { __typename?: 'ModelStoreConnection', items: Array<{ __typename?: 'Store', categoryStoresId?: string | null, headerImg?: string | null, storeName?: string | null, branches: string, address: string, logo?: string | null, phone: string, verified: boolean, id: string, email: string } | null> } | null } | null };

export type CreatePaymentIntentMutationVariables = Exact<{
  amount: Scalars['Float'];
}>;


export type CreatePaymentIntentMutation = { __typename?: 'Mutation', createPaymentIntent: { __typename?: 'PaymentIntention', customer: string, ephemeralKey: string, paymentIntent: string, publishableKey: string } };

export type GetProductCategoryQueryVariables = Exact<{
  getProductCategoryId: Scalars['ID'];
}>;


export type GetProductCategoryQuery = { __typename?: 'Query', getProductCategory?: { __typename?: 'ProductCategory', id: string, image: string, title: string, products?: { __typename?: 'ModelProductConnection', items: Array<{ __typename?: 'Product', image?: string | null, price: number, title: string, brand: string, detail: string, id: string } | null> } | null } | null };

export type OnShopperLocationUpdateSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type OnShopperLocationUpdateSubscription = { __typename?: 'Subscription', onShopperLocationUpdate?: { __typename?: 'newShopper', shopper?: { __typename?: 'newShoperPayload', id: string, avatar?: string | null, email?: string | null, password?: string | null, firstName?: string | null, lastName?: string | null, deliveryOption?: string | null, location?: string | null, latitude?: number | null, longitude?: number | null, phone: string } | null } | null };

export type OnCreateShopperSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type OnCreateShopperSubscription = { __typename?: 'Subscription', onCreateShopper?: { __typename?: 'Shopper', id: string, avatar: string, firstName: string, lastName: string, email: string, password: string, phone?: string | null, deliveryOption?: string | null, location?: string | null, latitude?: number | null, longitude?: number | null } | null };

export type ListShoppersQueryVariables = Exact<{ [key: string]: never; }>;


export type ListShoppersQuery = { __typename?: 'Query', listShoppers?: { __typename?: 'ModelShopperConnection', items: Array<{ __typename?: 'Shopper', id: string, avatar: string, firstName: string, lastName: string, phone?: string | null, location?: string | null, latitude?: number | null, longitude?: number | null } | null> } | null };

export type GetStoreQueryVariables = Exact<{
  getStoreId: Scalars['ID'];
}>;


export type GetStoreQuery = { __typename?: 'Query', getStore?: { __typename?: 'Store', id: string, headerImg?: string | null, logo?: string | null, storeName?: string | null, address: string, branches: string, productCategories?: { __typename?: 'ModelProductCategoryConnection', items: Array<{ __typename?: 'ProductCategory', id: string, image: string, title: string } | null> } | null } | null };


export const PhoneVerificationDocument = gql`
    mutation phoneVerification($phoneNumber: String!) {
  phoneVerification(phoneNumber: $phoneNumber)
}
    `;
export type PhoneVerificationMutationFn = Apollo.MutationFunction<PhoneVerificationMutation, PhoneVerificationMutationVariables>;

/**
 * __usePhoneVerificationMutation__
 *
 * To run a mutation, you first call `usePhoneVerificationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePhoneVerificationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [phoneVerificationMutation, { data, loading, error }] = usePhoneVerificationMutation({
 *   variables: {
 *      phoneNumber: // value for 'phoneNumber'
 *   },
 * });
 */
export function usePhoneVerificationMutation(baseOptions?: Apollo.MutationHookOptions<PhoneVerificationMutation, PhoneVerificationMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<PhoneVerificationMutation, PhoneVerificationMutationVariables>(PhoneVerificationDocument, options);
      }
export type PhoneVerificationMutationHookResult = ReturnType<typeof usePhoneVerificationMutation>;
export type PhoneVerificationMutationResult = Apollo.MutationResult<PhoneVerificationMutation>;
export type PhoneVerificationMutationOptions = Apollo.BaseMutationOptions<PhoneVerificationMutation, PhoneVerificationMutationVariables>;
export const CodeVerificationDocument = gql`
    mutation CodeVerification($phoneNumber: String!, $code: Int!) {
  codeVerification(phoneNumber: $phoneNumber, code: $code) {
    client {
      id
      firstName
      lastName
      email
      password
      phone
      location
    }
    token
    success
    message
  }
}
    `;
export type CodeVerificationMutationFn = Apollo.MutationFunction<CodeVerificationMutation, CodeVerificationMutationVariables>;

/**
 * __useCodeVerificationMutation__
 *
 * To run a mutation, you first call `useCodeVerificationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCodeVerificationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [codeVerificationMutation, { data, loading, error }] = useCodeVerificationMutation({
 *   variables: {
 *      phoneNumber: // value for 'phoneNumber'
 *      code: // value for 'code'
 *   },
 * });
 */
export function useCodeVerificationMutation(baseOptions?: Apollo.MutationHookOptions<CodeVerificationMutation, CodeVerificationMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CodeVerificationMutation, CodeVerificationMutationVariables>(CodeVerificationDocument, options);
      }
export type CodeVerificationMutationHookResult = ReturnType<typeof useCodeVerificationMutation>;
export type CodeVerificationMutationResult = Apollo.MutationResult<CodeVerificationMutation>;
export type CodeVerificationMutationOptions = Apollo.BaseMutationOptions<CodeVerificationMutation, CodeVerificationMutationVariables>;
export const SocialAuthDocument = gql`
    mutation SocialAuth($firstName: String!, $lastName: String!, $email: String!, $avatar: String!) {
  socialAuth(
    firstName: $firstName
    lastName: $lastName
    email: $email
    avatar: $avatar
  ) {
    client {
      id
      firstName
      lastName
      email
      password
      phone
      location
    }
    token
    success
    message
  }
}
    `;
export type SocialAuthMutationFn = Apollo.MutationFunction<SocialAuthMutation, SocialAuthMutationVariables>;

/**
 * __useSocialAuthMutation__
 *
 * To run a mutation, you first call `useSocialAuthMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSocialAuthMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [socialAuthMutation, { data, loading, error }] = useSocialAuthMutation({
 *   variables: {
 *      firstName: // value for 'firstName'
 *      lastName: // value for 'lastName'
 *      email: // value for 'email'
 *      avatar: // value for 'avatar'
 *   },
 * });
 */
export function useSocialAuthMutation(baseOptions?: Apollo.MutationHookOptions<SocialAuthMutation, SocialAuthMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SocialAuthMutation, SocialAuthMutationVariables>(SocialAuthDocument, options);
      }
export type SocialAuthMutationHookResult = ReturnType<typeof useSocialAuthMutation>;
export type SocialAuthMutationResult = Apollo.MutationResult<SocialAuthMutation>;
export type SocialAuthMutationOptions = Apollo.BaseMutationOptions<SocialAuthMutation, SocialAuthMutationVariables>;
export const ListCategoriesDocument = gql`
    query listCategories {
  listCategories {
    items {
      id
      title
      image
      stores {
        items {
          id
          storeName
          headerImg
          address
        }
      }
    }
  }
}
    `;

/**
 * __useListCategoriesQuery__
 *
 * To run a query within a React component, call `useListCategoriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useListCategoriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListCategoriesQuery({
 *   variables: {
 *   },
 * });
 */
export function useListCategoriesQuery(baseOptions?: Apollo.QueryHookOptions<ListCategoriesQuery, ListCategoriesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ListCategoriesQuery, ListCategoriesQueryVariables>(ListCategoriesDocument, options);
      }
export function useListCategoriesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ListCategoriesQuery, ListCategoriesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ListCategoriesQuery, ListCategoriesQueryVariables>(ListCategoriesDocument, options);
        }
export type ListCategoriesQueryHookResult = ReturnType<typeof useListCategoriesQuery>;
export type ListCategoriesLazyQueryHookResult = ReturnType<typeof useListCategoriesLazyQuery>;
export type ListCategoriesQueryResult = Apollo.QueryResult<ListCategoriesQuery, ListCategoriesQueryVariables>;
export const GetCategoryDocument = gql`
    query GetCategory($getCategoryId: ID!) {
  getCategory(id: $getCategoryId) {
    id
    stores {
      items {
        categoryStoresId
        headerImg
        storeName
        branches
        address
        logo
        phone
        verified
        id
        email
      }
    }
  }
}
    `;

/**
 * __useGetCategoryQuery__
 *
 * To run a query within a React component, call `useGetCategoryQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCategoryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCategoryQuery({
 *   variables: {
 *      getCategoryId: // value for 'getCategoryId'
 *   },
 * });
 */
export function useGetCategoryQuery(baseOptions: Apollo.QueryHookOptions<GetCategoryQuery, GetCategoryQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCategoryQuery, GetCategoryQueryVariables>(GetCategoryDocument, options);
      }
export function useGetCategoryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCategoryQuery, GetCategoryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCategoryQuery, GetCategoryQueryVariables>(GetCategoryDocument, options);
        }
export type GetCategoryQueryHookResult = ReturnType<typeof useGetCategoryQuery>;
export type GetCategoryLazyQueryHookResult = ReturnType<typeof useGetCategoryLazyQuery>;
export type GetCategoryQueryResult = Apollo.QueryResult<GetCategoryQuery, GetCategoryQueryVariables>;
export const CreatePaymentIntentDocument = gql`
    mutation CreatePaymentIntent($amount: Float!) {
  createPaymentIntent(amount: $amount) {
    customer
    ephemeralKey
    paymentIntent
    publishableKey
  }
}
    `;
export type CreatePaymentIntentMutationFn = Apollo.MutationFunction<CreatePaymentIntentMutation, CreatePaymentIntentMutationVariables>;

/**
 * __useCreatePaymentIntentMutation__
 *
 * To run a mutation, you first call `useCreatePaymentIntentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreatePaymentIntentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createPaymentIntentMutation, { data, loading, error }] = useCreatePaymentIntentMutation({
 *   variables: {
 *      amount: // value for 'amount'
 *   },
 * });
 */
export function useCreatePaymentIntentMutation(baseOptions?: Apollo.MutationHookOptions<CreatePaymentIntentMutation, CreatePaymentIntentMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreatePaymentIntentMutation, CreatePaymentIntentMutationVariables>(CreatePaymentIntentDocument, options);
      }
export type CreatePaymentIntentMutationHookResult = ReturnType<typeof useCreatePaymentIntentMutation>;
export type CreatePaymentIntentMutationResult = Apollo.MutationResult<CreatePaymentIntentMutation>;
export type CreatePaymentIntentMutationOptions = Apollo.BaseMutationOptions<CreatePaymentIntentMutation, CreatePaymentIntentMutationVariables>;
export const GetProductCategoryDocument = gql`
    query GetProductCategory($getProductCategoryId: ID!) {
  getProductCategory(id: $getProductCategoryId) {
    id
    image
    title
    products {
      items {
        image
        price
        title
        brand
        detail
        id
      }
    }
  }
}
    `;

/**
 * __useGetProductCategoryQuery__
 *
 * To run a query within a React component, call `useGetProductCategoryQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProductCategoryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProductCategoryQuery({
 *   variables: {
 *      getProductCategoryId: // value for 'getProductCategoryId'
 *   },
 * });
 */
export function useGetProductCategoryQuery(baseOptions: Apollo.QueryHookOptions<GetProductCategoryQuery, GetProductCategoryQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetProductCategoryQuery, GetProductCategoryQueryVariables>(GetProductCategoryDocument, options);
      }
export function useGetProductCategoryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetProductCategoryQuery, GetProductCategoryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetProductCategoryQuery, GetProductCategoryQueryVariables>(GetProductCategoryDocument, options);
        }
export type GetProductCategoryQueryHookResult = ReturnType<typeof useGetProductCategoryQuery>;
export type GetProductCategoryLazyQueryHookResult = ReturnType<typeof useGetProductCategoryLazyQuery>;
export type GetProductCategoryQueryResult = Apollo.QueryResult<GetProductCategoryQuery, GetProductCategoryQueryVariables>;
export const OnShopperLocationUpdateDocument = gql`
    subscription OnShopperLocationUpdate {
  onShopperLocationUpdate {
    shopper {
      id
      avatar
      email
      password
      firstName
      lastName
      deliveryOption
      location
      latitude
      longitude
      phone
    }
  }
}
    `;

/**
 * __useOnShopperLocationUpdateSubscription__
 *
 * To run a query within a React component, call `useOnShopperLocationUpdateSubscription` and pass it any options that fit your needs.
 * When your component renders, `useOnShopperLocationUpdateSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useOnShopperLocationUpdateSubscription({
 *   variables: {
 *   },
 * });
 */
export function useOnShopperLocationUpdateSubscription(baseOptions?: Apollo.SubscriptionHookOptions<OnShopperLocationUpdateSubscription, OnShopperLocationUpdateSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<OnShopperLocationUpdateSubscription, OnShopperLocationUpdateSubscriptionVariables>(OnShopperLocationUpdateDocument, options);
      }
export type OnShopperLocationUpdateSubscriptionHookResult = ReturnType<typeof useOnShopperLocationUpdateSubscription>;
export type OnShopperLocationUpdateSubscriptionResult = Apollo.SubscriptionResult<OnShopperLocationUpdateSubscription>;
export const OnCreateShopperDocument = gql`
    subscription OnCreateShopper {
  onCreateShopper {
    id
    avatar
    firstName
    lastName
    email
    password
    phone
    deliveryOption
    location
    latitude
    longitude
  }
}
    `;

/**
 * __useOnCreateShopperSubscription__
 *
 * To run a query within a React component, call `useOnCreateShopperSubscription` and pass it any options that fit your needs.
 * When your component renders, `useOnCreateShopperSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useOnCreateShopperSubscription({
 *   variables: {
 *   },
 * });
 */
export function useOnCreateShopperSubscription(baseOptions?: Apollo.SubscriptionHookOptions<OnCreateShopperSubscription, OnCreateShopperSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<OnCreateShopperSubscription, OnCreateShopperSubscriptionVariables>(OnCreateShopperDocument, options);
      }
export type OnCreateShopperSubscriptionHookResult = ReturnType<typeof useOnCreateShopperSubscription>;
export type OnCreateShopperSubscriptionResult = Apollo.SubscriptionResult<OnCreateShopperSubscription>;
export const ListShoppersDocument = gql`
    query ListShoppers {
  listShoppers {
    items {
      id
      avatar
      firstName
      lastName
      phone
      location
      latitude
      longitude
    }
  }
}
    `;

/**
 * __useListShoppersQuery__
 *
 * To run a query within a React component, call `useListShoppersQuery` and pass it any options that fit your needs.
 * When your component renders, `useListShoppersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListShoppersQuery({
 *   variables: {
 *   },
 * });
 */
export function useListShoppersQuery(baseOptions?: Apollo.QueryHookOptions<ListShoppersQuery, ListShoppersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ListShoppersQuery, ListShoppersQueryVariables>(ListShoppersDocument, options);
      }
export function useListShoppersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ListShoppersQuery, ListShoppersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ListShoppersQuery, ListShoppersQueryVariables>(ListShoppersDocument, options);
        }
export type ListShoppersQueryHookResult = ReturnType<typeof useListShoppersQuery>;
export type ListShoppersLazyQueryHookResult = ReturnType<typeof useListShoppersLazyQuery>;
export type ListShoppersQueryResult = Apollo.QueryResult<ListShoppersQuery, ListShoppersQueryVariables>;
export const GetStoreDocument = gql`
    query GetStore($getStoreId: ID!) {
  getStore(id: $getStoreId) {
    id
    headerImg
    logo
    storeName
    address
    branches
    productCategories {
      items {
        id
        image
        title
      }
    }
  }
}
    `;

/**
 * __useGetStoreQuery__
 *
 * To run a query within a React component, call `useGetStoreQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetStoreQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetStoreQuery({
 *   variables: {
 *      getStoreId: // value for 'getStoreId'
 *   },
 * });
 */
export function useGetStoreQuery(baseOptions: Apollo.QueryHookOptions<GetStoreQuery, GetStoreQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetStoreQuery, GetStoreQueryVariables>(GetStoreDocument, options);
      }
export function useGetStoreLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetStoreQuery, GetStoreQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetStoreQuery, GetStoreQueryVariables>(GetStoreDocument, options);
        }
export type GetStoreQueryHookResult = ReturnType<typeof useGetStoreQuery>;
export type GetStoreLazyQueryHookResult = ReturnType<typeof useGetStoreLazyQuery>;
export type GetStoreQueryResult = Apollo.QueryResult<GetStoreQuery, GetStoreQueryVariables>;