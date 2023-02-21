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

export type Blog = {
  __typename?: 'Blog';
  _deleted?: Maybe<Scalars['Boolean']>;
  _lastChangedAt: Scalars['AWSTimestamp'];
  _version: Scalars['Int'];
  createdAt: Scalars['AWSDateTime'];
  id: Scalars['ID'];
  name: Scalars['String'];
  posts?: Maybe<ModelPostConnection>;
  updatedAt: Scalars['AWSDateTime'];
};


export type BlogPostsArgs = {
  filter?: InputMaybe<ModelPostFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  nextToken?: InputMaybe<Scalars['String']>;
  sortDirection?: InputMaybe<ModelSortDirection>;
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

export type Comment = {
  __typename?: 'Comment';
  _deleted?: Maybe<Scalars['Boolean']>;
  _lastChangedAt: Scalars['AWSTimestamp'];
  _version: Scalars['Int'];
  content: Scalars['String'];
  createdAt: Scalars['AWSDateTime'];
  id: Scalars['ID'];
  post?: Maybe<Post>;
  postCommentsId?: Maybe<Scalars['ID']>;
  updatedAt: Scalars['AWSDateTime'];
};

export type CreateBlogInput = {
  _version?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['ID']>;
  name: Scalars['String'];
};

export type CreateCategoryInput = {
  _version?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['ID']>;
  image: Scalars['String'];
  title: Scalars['String'];
};

export type CreateCommentInput = {
  _version?: InputMaybe<Scalars['Int']>;
  content: Scalars['String'];
  id?: InputMaybe<Scalars['ID']>;
  postCommentsId?: InputMaybe<Scalars['ID']>;
};

export type CreatePostInput = {
  _version?: InputMaybe<Scalars['Int']>;
  blogPostsId?: InputMaybe<Scalars['ID']>;
  id?: InputMaybe<Scalars['ID']>;
  title: Scalars['String'];
};

export type CreateProductCategoryInput = {
  _version?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['ID']>;
  image: Scalars['String'];
  storeId: Scalars['String'];
  storeProductCategoryId?: InputMaybe<Scalars['ID']>;
  title: Scalars['String'];
};

export type CreateProductInput = {
  _version?: InputMaybe<Scalars['Int']>;
  aisleId?: InputMaybe<Scalars['String']>;
  brand: Scalars['String'];
  detail: Scalars['String'];
  id?: InputMaybe<Scalars['ID']>;
  image?: InputMaybe<Scalars['String']>;
  price: Scalars['String'];
  productCategoryProductsId?: InputMaybe<Scalars['ID']>;
  title: Scalars['String'];
};

export type CreateShopperIntentInput = {
  _version?: InputMaybe<Scalars['Int']>;
  driverLicense: Scalars['String'];
  email: Scalars['String'];
  firstName: Scalars['String'];
  id?: InputMaybe<Scalars['ID']>;
  idCard: Scalars['String'];
  lastName: Scalars['String'];
  location: Scalars['String'];
  phone: Scalars['String'];
  vehicleLicense: Scalars['String'];
  vehicleType: Scalars['String'];
};

export type CreateStoreInput = {
  _version?: InputMaybe<Scalars['Int']>;
  address: Scalars['String'];
  branches: Scalars['String'];
  categoryStoresId?: InputMaybe<Scalars['ID']>;
  email: Scalars['String'];
  headerImg?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  logo?: InputMaybe<Scalars['String']>;
  outletType: Scalars['String'];
  password: Scalars['String'];
  phone: Scalars['String'];
  storeName?: InputMaybe<Scalars['String']>;
  verified: Scalars['Boolean'];
};

export type CreateVendorIntentInput = {
  _version?: InputMaybe<Scalars['Int']>;
  address: Scalars['String'];
  branches: Scalars['String'];
  email: Scalars['String'];
  firstName: Scalars['String'];
  id?: InputMaybe<Scalars['ID']>;
  lastName: Scalars['String'];
  outletType: Scalars['String'];
  phone: Scalars['String'];
  storeName: Scalars['String'];
};

export type DeleteBlogInput = {
  _version?: InputMaybe<Scalars['Int']>;
  id: Scalars['ID'];
};

export type DeleteCategoryInput = {
  _version?: InputMaybe<Scalars['Int']>;
  id: Scalars['ID'];
};

export type DeleteCommentInput = {
  _version?: InputMaybe<Scalars['Int']>;
  id: Scalars['ID'];
};

export type DeletePostInput = {
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

export type DeleteShopperIntentInput = {
  _version?: InputMaybe<Scalars['Int']>;
  id: Scalars['ID'];
};

export type DeleteStoreInput = {
  _version?: InputMaybe<Scalars['Int']>;
  id: Scalars['ID'];
};

export type DeleteVendorIntentInput = {
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

export type ModelBlogConditionInput = {
  and?: InputMaybe<Array<InputMaybe<ModelBlogConditionInput>>>;
  name?: InputMaybe<ModelStringInput>;
  not?: InputMaybe<ModelBlogConditionInput>;
  or?: InputMaybe<Array<InputMaybe<ModelBlogConditionInput>>>;
};

export type ModelBlogConnection = {
  __typename?: 'ModelBlogConnection';
  items: Array<Maybe<Blog>>;
  nextToken?: Maybe<Scalars['String']>;
  startedAt?: Maybe<Scalars['AWSTimestamp']>;
};

export type ModelBlogFilterInput = {
  and?: InputMaybe<Array<InputMaybe<ModelBlogFilterInput>>>;
  id?: InputMaybe<ModelIdInput>;
  name?: InputMaybe<ModelStringInput>;
  not?: InputMaybe<ModelBlogFilterInput>;
  or?: InputMaybe<Array<InputMaybe<ModelBlogFilterInput>>>;
};

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

export type ModelCommentConditionInput = {
  and?: InputMaybe<Array<InputMaybe<ModelCommentConditionInput>>>;
  content?: InputMaybe<ModelStringInput>;
  not?: InputMaybe<ModelCommentConditionInput>;
  or?: InputMaybe<Array<InputMaybe<ModelCommentConditionInput>>>;
  postCommentsId?: InputMaybe<ModelIdInput>;
};

export type ModelCommentConnection = {
  __typename?: 'ModelCommentConnection';
  items: Array<Maybe<Comment>>;
  nextToken?: Maybe<Scalars['String']>;
  startedAt?: Maybe<Scalars['AWSTimestamp']>;
};

export type ModelCommentFilterInput = {
  and?: InputMaybe<Array<InputMaybe<ModelCommentFilterInput>>>;
  content?: InputMaybe<ModelStringInput>;
  id?: InputMaybe<ModelIdInput>;
  not?: InputMaybe<ModelCommentFilterInput>;
  or?: InputMaybe<Array<InputMaybe<ModelCommentFilterInput>>>;
  postCommentsId?: InputMaybe<ModelIdInput>;
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

export type ModelPostConditionInput = {
  and?: InputMaybe<Array<InputMaybe<ModelPostConditionInput>>>;
  blogPostsId?: InputMaybe<ModelIdInput>;
  not?: InputMaybe<ModelPostConditionInput>;
  or?: InputMaybe<Array<InputMaybe<ModelPostConditionInput>>>;
  title?: InputMaybe<ModelStringInput>;
};

export type ModelPostConnection = {
  __typename?: 'ModelPostConnection';
  items: Array<Maybe<Post>>;
  nextToken?: Maybe<Scalars['String']>;
  startedAt?: Maybe<Scalars['AWSTimestamp']>;
};

export type ModelPostFilterInput = {
  and?: InputMaybe<Array<InputMaybe<ModelPostFilterInput>>>;
  blogPostsId?: InputMaybe<ModelIdInput>;
  id?: InputMaybe<ModelIdInput>;
  not?: InputMaybe<ModelPostFilterInput>;
  or?: InputMaybe<Array<InputMaybe<ModelPostFilterInput>>>;
  title?: InputMaybe<ModelStringInput>;
};

export type ModelProductCategoryConditionInput = {
  and?: InputMaybe<Array<InputMaybe<ModelProductCategoryConditionInput>>>;
  image?: InputMaybe<ModelStringInput>;
  not?: InputMaybe<ModelProductCategoryConditionInput>;
  or?: InputMaybe<Array<InputMaybe<ModelProductCategoryConditionInput>>>;
  storeId?: InputMaybe<ModelStringInput>;
  storeProductCategoryId?: InputMaybe<ModelIdInput>;
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
  storeId?: InputMaybe<ModelStringInput>;
  storeProductCategoryId?: InputMaybe<ModelIdInput>;
  title?: InputMaybe<ModelStringInput>;
};

export type ModelProductConditionInput = {
  aisleId?: InputMaybe<ModelStringInput>;
  and?: InputMaybe<Array<InputMaybe<ModelProductConditionInput>>>;
  brand?: InputMaybe<ModelStringInput>;
  detail?: InputMaybe<ModelStringInput>;
  image?: InputMaybe<ModelStringInput>;
  not?: InputMaybe<ModelProductConditionInput>;
  or?: InputMaybe<Array<InputMaybe<ModelProductConditionInput>>>;
  price?: InputMaybe<ModelStringInput>;
  productCategoryProductsId?: InputMaybe<ModelIdInput>;
  title?: InputMaybe<ModelStringInput>;
};

export type ModelProductConnection = {
  __typename?: 'ModelProductConnection';
  items: Array<Maybe<Product>>;
  nextToken?: Maybe<Scalars['String']>;
  startedAt?: Maybe<Scalars['AWSTimestamp']>;
};

export type ModelProductFilterInput = {
  aisleId?: InputMaybe<ModelStringInput>;
  and?: InputMaybe<Array<InputMaybe<ModelProductFilterInput>>>;
  brand?: InputMaybe<ModelStringInput>;
  detail?: InputMaybe<ModelStringInput>;
  id?: InputMaybe<ModelIdInput>;
  image?: InputMaybe<ModelStringInput>;
  not?: InputMaybe<ModelProductFilterInput>;
  or?: InputMaybe<Array<InputMaybe<ModelProductFilterInput>>>;
  price?: InputMaybe<ModelStringInput>;
  productCategoryProductsId?: InputMaybe<ModelIdInput>;
  title?: InputMaybe<ModelStringInput>;
};

export type ModelShopperIntentConditionInput = {
  and?: InputMaybe<Array<InputMaybe<ModelShopperIntentConditionInput>>>;
  driverLicense?: InputMaybe<ModelStringInput>;
  email?: InputMaybe<ModelStringInput>;
  firstName?: InputMaybe<ModelStringInput>;
  idCard?: InputMaybe<ModelStringInput>;
  lastName?: InputMaybe<ModelStringInput>;
  location?: InputMaybe<ModelStringInput>;
  not?: InputMaybe<ModelShopperIntentConditionInput>;
  or?: InputMaybe<Array<InputMaybe<ModelShopperIntentConditionInput>>>;
  phone?: InputMaybe<ModelStringInput>;
  vehicleLicense?: InputMaybe<ModelStringInput>;
  vehicleType?: InputMaybe<ModelStringInput>;
};

export type ModelShopperIntentConnection = {
  __typename?: 'ModelShopperIntentConnection';
  items: Array<Maybe<ShopperIntent>>;
  nextToken?: Maybe<Scalars['String']>;
  startedAt?: Maybe<Scalars['AWSTimestamp']>;
};

export type ModelShopperIntentFilterInput = {
  and?: InputMaybe<Array<InputMaybe<ModelShopperIntentFilterInput>>>;
  driverLicense?: InputMaybe<ModelStringInput>;
  email?: InputMaybe<ModelStringInput>;
  firstName?: InputMaybe<ModelStringInput>;
  id?: InputMaybe<ModelIdInput>;
  idCard?: InputMaybe<ModelStringInput>;
  lastName?: InputMaybe<ModelStringInput>;
  location?: InputMaybe<ModelStringInput>;
  not?: InputMaybe<ModelShopperIntentFilterInput>;
  or?: InputMaybe<Array<InputMaybe<ModelShopperIntentFilterInput>>>;
  phone?: InputMaybe<ModelStringInput>;
  vehicleLicense?: InputMaybe<ModelStringInput>;
  vehicleType?: InputMaybe<ModelStringInput>;
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
  logo?: InputMaybe<ModelStringInput>;
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
  logo?: InputMaybe<ModelStringInput>;
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

export type ModelSubscriptionBlogFilterInput = {
  and?: InputMaybe<Array<InputMaybe<ModelSubscriptionBlogFilterInput>>>;
  id?: InputMaybe<ModelSubscriptionIdInput>;
  name?: InputMaybe<ModelSubscriptionStringInput>;
  or?: InputMaybe<Array<InputMaybe<ModelSubscriptionBlogFilterInput>>>;
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

export type ModelSubscriptionCommentFilterInput = {
  and?: InputMaybe<Array<InputMaybe<ModelSubscriptionCommentFilterInput>>>;
  content?: InputMaybe<ModelSubscriptionStringInput>;
  id?: InputMaybe<ModelSubscriptionIdInput>;
  or?: InputMaybe<Array<InputMaybe<ModelSubscriptionCommentFilterInput>>>;
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

export type ModelSubscriptionPostFilterInput = {
  and?: InputMaybe<Array<InputMaybe<ModelSubscriptionPostFilterInput>>>;
  id?: InputMaybe<ModelSubscriptionIdInput>;
  or?: InputMaybe<Array<InputMaybe<ModelSubscriptionPostFilterInput>>>;
  title?: InputMaybe<ModelSubscriptionStringInput>;
};

export type ModelSubscriptionProductCategoryFilterInput = {
  and?: InputMaybe<Array<InputMaybe<ModelSubscriptionProductCategoryFilterInput>>>;
  id?: InputMaybe<ModelSubscriptionIdInput>;
  image?: InputMaybe<ModelSubscriptionStringInput>;
  or?: InputMaybe<Array<InputMaybe<ModelSubscriptionProductCategoryFilterInput>>>;
  storeId?: InputMaybe<ModelSubscriptionStringInput>;
  title?: InputMaybe<ModelSubscriptionStringInput>;
};

export type ModelSubscriptionProductFilterInput = {
  aisleId?: InputMaybe<ModelSubscriptionStringInput>;
  and?: InputMaybe<Array<InputMaybe<ModelSubscriptionProductFilterInput>>>;
  brand?: InputMaybe<ModelSubscriptionStringInput>;
  detail?: InputMaybe<ModelSubscriptionStringInput>;
  id?: InputMaybe<ModelSubscriptionIdInput>;
  image?: InputMaybe<ModelSubscriptionStringInput>;
  or?: InputMaybe<Array<InputMaybe<ModelSubscriptionProductFilterInput>>>;
  price?: InputMaybe<ModelSubscriptionStringInput>;
  title?: InputMaybe<ModelSubscriptionStringInput>;
};

export type ModelSubscriptionShopperIntentFilterInput = {
  and?: InputMaybe<Array<InputMaybe<ModelSubscriptionShopperIntentFilterInput>>>;
  driverLicense?: InputMaybe<ModelSubscriptionStringInput>;
  email?: InputMaybe<ModelSubscriptionStringInput>;
  firstName?: InputMaybe<ModelSubscriptionStringInput>;
  id?: InputMaybe<ModelSubscriptionIdInput>;
  idCard?: InputMaybe<ModelSubscriptionStringInput>;
  lastName?: InputMaybe<ModelSubscriptionStringInput>;
  location?: InputMaybe<ModelSubscriptionStringInput>;
  or?: InputMaybe<Array<InputMaybe<ModelSubscriptionShopperIntentFilterInput>>>;
  phone?: InputMaybe<ModelSubscriptionStringInput>;
  vehicleLicense?: InputMaybe<ModelSubscriptionStringInput>;
  vehicleType?: InputMaybe<ModelSubscriptionStringInput>;
};

export type ModelSubscriptionStoreFilterInput = {
  address?: InputMaybe<ModelSubscriptionStringInput>;
  and?: InputMaybe<Array<InputMaybe<ModelSubscriptionStoreFilterInput>>>;
  branches?: InputMaybe<ModelSubscriptionStringInput>;
  email?: InputMaybe<ModelSubscriptionStringInput>;
  headerImg?: InputMaybe<ModelSubscriptionStringInput>;
  id?: InputMaybe<ModelSubscriptionIdInput>;
  logo?: InputMaybe<ModelSubscriptionStringInput>;
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

export type ModelSubscriptionVendorIntentFilterInput = {
  address?: InputMaybe<ModelSubscriptionStringInput>;
  and?: InputMaybe<Array<InputMaybe<ModelSubscriptionVendorIntentFilterInput>>>;
  branches?: InputMaybe<ModelSubscriptionStringInput>;
  email?: InputMaybe<ModelSubscriptionStringInput>;
  firstName?: InputMaybe<ModelSubscriptionStringInput>;
  lastName?: InputMaybe<ModelSubscriptionStringInput>;
  or?: InputMaybe<Array<InputMaybe<ModelSubscriptionVendorIntentFilterInput>>>;
  outletType?: InputMaybe<ModelSubscriptionStringInput>;
  phone?: InputMaybe<ModelSubscriptionStringInput>;
  storeName?: InputMaybe<ModelSubscriptionStringInput>;
};

export type ModelVendorIntentConditionInput = {
  address?: InputMaybe<ModelStringInput>;
  and?: InputMaybe<Array<InputMaybe<ModelVendorIntentConditionInput>>>;
  branches?: InputMaybe<ModelStringInput>;
  email?: InputMaybe<ModelStringInput>;
  firstName?: InputMaybe<ModelStringInput>;
  lastName?: InputMaybe<ModelStringInput>;
  not?: InputMaybe<ModelVendorIntentConditionInput>;
  or?: InputMaybe<Array<InputMaybe<ModelVendorIntentConditionInput>>>;
  outletType?: InputMaybe<ModelStringInput>;
  phone?: InputMaybe<ModelStringInput>;
  storeName?: InputMaybe<ModelStringInput>;
};

export type ModelVendorIntentConnection = {
  __typename?: 'ModelVendorIntentConnection';
  items: Array<Maybe<VendorIntent>>;
  nextToken?: Maybe<Scalars['String']>;
  startedAt?: Maybe<Scalars['AWSTimestamp']>;
};

export type ModelVendorIntentFilterInput = {
  address?: InputMaybe<ModelStringInput>;
  and?: InputMaybe<Array<InputMaybe<ModelVendorIntentFilterInput>>>;
  branches?: InputMaybe<ModelStringInput>;
  email?: InputMaybe<ModelStringInput>;
  firstName?: InputMaybe<ModelStringInput>;
  lastName?: InputMaybe<ModelStringInput>;
  not?: InputMaybe<ModelVendorIntentFilterInput>;
  or?: InputMaybe<Array<InputMaybe<ModelVendorIntentFilterInput>>>;
  outletType?: InputMaybe<ModelStringInput>;
  phone?: InputMaybe<ModelStringInput>;
  storeName?: InputMaybe<ModelStringInput>;
};

export type Mutation = {
  __typename?: 'Mutation';
  codeVerification?: Maybe<Scalars['String']>;
  createBlog?: Maybe<Blog>;
  createCategory?: Maybe<Category>;
  createComment?: Maybe<Comment>;
  createPost?: Maybe<Post>;
  createProduct?: Maybe<Product>;
  createProductCategory?: Maybe<ProductCategory>;
  createShopperIntent?: Maybe<ShopperIntent>;
  createStore?: Maybe<Store>;
  createVendorIntent?: Maybe<VendorIntent>;
  deleteBlog?: Maybe<Blog>;
  deleteCategory?: Maybe<Category>;
  deleteComment?: Maybe<Comment>;
  deletePost?: Maybe<Post>;
  deleteProduct?: Maybe<Product>;
  deleteProductCategory?: Maybe<ProductCategory>;
  deleteShopperIntent?: Maybe<ShopperIntent>;
  deleteStore?: Maybe<Store>;
  deleteVendorIntent?: Maybe<VendorIntent>;
  phoneVerification?: Maybe<Scalars['String']>;
  updateBlog?: Maybe<Blog>;
  updateCategory?: Maybe<Category>;
  updateComment?: Maybe<Comment>;
  updatePost?: Maybe<Post>;
  updateProduct?: Maybe<Product>;
  updateProductCategory?: Maybe<ProductCategory>;
  updateShopperIntent?: Maybe<ShopperIntent>;
  updateStore?: Maybe<Store>;
  updateVendorIntent?: Maybe<VendorIntent>;
};


export type MutationCodeVerificationArgs = {
  code: Scalars['Int'];
  phoneNumber: Scalars['String'];
};


export type MutationCreateBlogArgs = {
  condition?: InputMaybe<ModelBlogConditionInput>;
  input: CreateBlogInput;
};


export type MutationCreateCategoryArgs = {
  condition?: InputMaybe<ModelCategoryConditionInput>;
  input: CreateCategoryInput;
};


export type MutationCreateCommentArgs = {
  condition?: InputMaybe<ModelCommentConditionInput>;
  input: CreateCommentInput;
};


export type MutationCreatePostArgs = {
  condition?: InputMaybe<ModelPostConditionInput>;
  input: CreatePostInput;
};


export type MutationCreateProductArgs = {
  condition?: InputMaybe<ModelProductConditionInput>;
  input: CreateProductInput;
};


export type MutationCreateProductCategoryArgs = {
  condition?: InputMaybe<ModelProductCategoryConditionInput>;
  input: CreateProductCategoryInput;
};


export type MutationCreateShopperIntentArgs = {
  condition?: InputMaybe<ModelShopperIntentConditionInput>;
  input: CreateShopperIntentInput;
};


export type MutationCreateStoreArgs = {
  condition?: InputMaybe<ModelStoreConditionInput>;
  input: CreateStoreInput;
};


export type MutationCreateVendorIntentArgs = {
  condition?: InputMaybe<ModelVendorIntentConditionInput>;
  input: CreateVendorIntentInput;
};


export type MutationDeleteBlogArgs = {
  condition?: InputMaybe<ModelBlogConditionInput>;
  input: DeleteBlogInput;
};


export type MutationDeleteCategoryArgs = {
  condition?: InputMaybe<ModelCategoryConditionInput>;
  input: DeleteCategoryInput;
};


export type MutationDeleteCommentArgs = {
  condition?: InputMaybe<ModelCommentConditionInput>;
  input: DeleteCommentInput;
};


export type MutationDeletePostArgs = {
  condition?: InputMaybe<ModelPostConditionInput>;
  input: DeletePostInput;
};


export type MutationDeleteProductArgs = {
  condition?: InputMaybe<ModelProductConditionInput>;
  input: DeleteProductInput;
};


export type MutationDeleteProductCategoryArgs = {
  condition?: InputMaybe<ModelProductCategoryConditionInput>;
  input: DeleteProductCategoryInput;
};


export type MutationDeleteShopperIntentArgs = {
  condition?: InputMaybe<ModelShopperIntentConditionInput>;
  input: DeleteShopperIntentInput;
};


export type MutationDeleteStoreArgs = {
  condition?: InputMaybe<ModelStoreConditionInput>;
  input: DeleteStoreInput;
};


export type MutationDeleteVendorIntentArgs = {
  condition?: InputMaybe<ModelVendorIntentConditionInput>;
  input: DeleteVendorIntentInput;
};


export type MutationPhoneVerificationArgs = {
  phoneNumber: Scalars['String'];
};


export type MutationUpdateBlogArgs = {
  condition?: InputMaybe<ModelBlogConditionInput>;
  input: UpdateBlogInput;
};


export type MutationUpdateCategoryArgs = {
  condition?: InputMaybe<ModelCategoryConditionInput>;
  input: UpdateCategoryInput;
};


export type MutationUpdateCommentArgs = {
  condition?: InputMaybe<ModelCommentConditionInput>;
  input: UpdateCommentInput;
};


export type MutationUpdatePostArgs = {
  condition?: InputMaybe<ModelPostConditionInput>;
  input: UpdatePostInput;
};


export type MutationUpdateProductArgs = {
  condition?: InputMaybe<ModelProductConditionInput>;
  input: UpdateProductInput;
};


export type MutationUpdateProductCategoryArgs = {
  condition?: InputMaybe<ModelProductCategoryConditionInput>;
  input: UpdateProductCategoryInput;
};


export type MutationUpdateShopperIntentArgs = {
  condition?: InputMaybe<ModelShopperIntentConditionInput>;
  input: UpdateShopperIntentInput;
};


export type MutationUpdateStoreArgs = {
  condition?: InputMaybe<ModelStoreConditionInput>;
  input: UpdateStoreInput;
};


export type MutationUpdateVendorIntentArgs = {
  condition?: InputMaybe<ModelVendorIntentConditionInput>;
  input: UpdateVendorIntentInput;
};

export type Post = {
  __typename?: 'Post';
  _deleted?: Maybe<Scalars['Boolean']>;
  _lastChangedAt: Scalars['AWSTimestamp'];
  _version: Scalars['Int'];
  blog?: Maybe<Blog>;
  blogPostsId?: Maybe<Scalars['ID']>;
  comments?: Maybe<ModelCommentConnection>;
  createdAt: Scalars['AWSDateTime'];
  id: Scalars['ID'];
  title: Scalars['String'];
  updatedAt: Scalars['AWSDateTime'];
};


export type PostCommentsArgs = {
  filter?: InputMaybe<ModelCommentFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  nextToken?: InputMaybe<Scalars['String']>;
  sortDirection?: InputMaybe<ModelSortDirection>;
};

export type Product = {
  __typename?: 'Product';
  _deleted?: Maybe<Scalars['Boolean']>;
  _lastChangedAt: Scalars['AWSTimestamp'];
  _version: Scalars['Int'];
  aisleId?: Maybe<Scalars['String']>;
  brand: Scalars['String'];
  createdAt: Scalars['AWSDateTime'];
  detail: Scalars['String'];
  id: Scalars['ID'];
  image?: Maybe<Scalars['String']>;
  price: Scalars['String'];
  productCategory?: Maybe<ProductCategory>;
  productCategoryProductsId?: Maybe<Scalars['ID']>;
  title: Scalars['String'];
  updatedAt: Scalars['AWSDateTime'];
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
  storeId: Scalars['String'];
  storeProductCategoryId?: Maybe<Scalars['ID']>;
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
  getBlog?: Maybe<Blog>;
  getCategory?: Maybe<Category>;
  getComment?: Maybe<Comment>;
  getPost?: Maybe<Post>;
  getProduct?: Maybe<Product>;
  getProductCategory?: Maybe<ProductCategory>;
  getShopperIntent?: Maybe<ShopperIntent>;
  getStore?: Maybe<Store>;
  getVendorIntent?: Maybe<VendorIntent>;
  hello: Scalars['String'];
  listBlogs?: Maybe<ModelBlogConnection>;
  listCategories?: Maybe<ModelCategoryConnection>;
  listComments?: Maybe<ModelCommentConnection>;
  listPosts?: Maybe<ModelPostConnection>;
  listProductCategories?: Maybe<ModelProductCategoryConnection>;
  listProducts?: Maybe<ModelProductConnection>;
  listShopperIntents?: Maybe<ModelShopperIntentConnection>;
  listStores?: Maybe<ModelStoreConnection>;
  listVendorIntents?: Maybe<ModelVendorIntentConnection>;
  syncBlogs?: Maybe<ModelBlogConnection>;
  syncCategories?: Maybe<ModelCategoryConnection>;
  syncComments?: Maybe<ModelCommentConnection>;
  syncPosts?: Maybe<ModelPostConnection>;
  syncProductCategories?: Maybe<ModelProductCategoryConnection>;
  syncProducts?: Maybe<ModelProductConnection>;
  syncShopperIntents?: Maybe<ModelShopperIntentConnection>;
  syncStores?: Maybe<ModelStoreConnection>;
  syncVendorIntents?: Maybe<ModelVendorIntentConnection>;
};


export type QueryGetBlogArgs = {
  id: Scalars['ID'];
};


export type QueryGetCategoryArgs = {
  id: Scalars['ID'];
};


export type QueryGetCommentArgs = {
  id: Scalars['ID'];
};


export type QueryGetPostArgs = {
  id: Scalars['ID'];
};


export type QueryGetProductArgs = {
  id: Scalars['ID'];
};


export type QueryGetProductCategoryArgs = {
  id: Scalars['ID'];
};


export type QueryGetShopperIntentArgs = {
  id: Scalars['ID'];
};


export type QueryGetStoreArgs = {
  id: Scalars['ID'];
};


export type QueryGetVendorIntentArgs = {
  id: Scalars['ID'];
};


export type QueryListBlogsArgs = {
  filter?: InputMaybe<ModelBlogFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  nextToken?: InputMaybe<Scalars['String']>;
};


export type QueryListCategoriesArgs = {
  filter?: InputMaybe<ModelCategoryFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  nextToken?: InputMaybe<Scalars['String']>;
};


export type QueryListCommentsArgs = {
  filter?: InputMaybe<ModelCommentFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  nextToken?: InputMaybe<Scalars['String']>;
};


export type QueryListPostsArgs = {
  filter?: InputMaybe<ModelPostFilterInput>;
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


export type QueryListShopperIntentsArgs = {
  filter?: InputMaybe<ModelShopperIntentFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  nextToken?: InputMaybe<Scalars['String']>;
};


export type QueryListStoresArgs = {
  filter?: InputMaybe<ModelStoreFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  nextToken?: InputMaybe<Scalars['String']>;
};


export type QueryListVendorIntentsArgs = {
  filter?: InputMaybe<ModelVendorIntentFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  nextToken?: InputMaybe<Scalars['String']>;
};


export type QuerySyncBlogsArgs = {
  filter?: InputMaybe<ModelBlogFilterInput>;
  lastSync?: InputMaybe<Scalars['AWSTimestamp']>;
  limit?: InputMaybe<Scalars['Int']>;
  nextToken?: InputMaybe<Scalars['String']>;
};


export type QuerySyncCategoriesArgs = {
  filter?: InputMaybe<ModelCategoryFilterInput>;
  lastSync?: InputMaybe<Scalars['AWSTimestamp']>;
  limit?: InputMaybe<Scalars['Int']>;
  nextToken?: InputMaybe<Scalars['String']>;
};


export type QuerySyncCommentsArgs = {
  filter?: InputMaybe<ModelCommentFilterInput>;
  lastSync?: InputMaybe<Scalars['AWSTimestamp']>;
  limit?: InputMaybe<Scalars['Int']>;
  nextToken?: InputMaybe<Scalars['String']>;
};


export type QuerySyncPostsArgs = {
  filter?: InputMaybe<ModelPostFilterInput>;
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


export type QuerySyncShopperIntentsArgs = {
  filter?: InputMaybe<ModelShopperIntentFilterInput>;
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


export type QuerySyncVendorIntentsArgs = {
  filter?: InputMaybe<ModelVendorIntentFilterInput>;
  lastSync?: InputMaybe<Scalars['AWSTimestamp']>;
  limit?: InputMaybe<Scalars['Int']>;
  nextToken?: InputMaybe<Scalars['String']>;
};

export type S3Object = {
  __typename?: 'S3Object';
  bucket: Scalars['String'];
  key: Scalars['String'];
  region: Scalars['String'];
};

export type ShopperIntent = {
  __typename?: 'ShopperIntent';
  _deleted?: Maybe<Scalars['Boolean']>;
  _lastChangedAt: Scalars['AWSTimestamp'];
  _version: Scalars['Int'];
  createdAt: Scalars['AWSDateTime'];
  driverLicense: Scalars['String'];
  email: Scalars['String'];
  firstName: Scalars['String'];
  id: Scalars['ID'];
  idCard: Scalars['String'];
  lastName: Scalars['String'];
  location: Scalars['String'];
  phone: Scalars['String'];
  updatedAt: Scalars['AWSDateTime'];
  vehicleLicense: Scalars['String'];
  vehicleType: Scalars['String'];
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
  logo?: Maybe<Scalars['String']>;
  outletType: Scalars['String'];
  password: Scalars['String'];
  phone: Scalars['String'];
  productCategory?: Maybe<ModelProductCategoryConnection>;
  storeName?: Maybe<Scalars['String']>;
  updatedAt: Scalars['AWSDateTime'];
  verified: Scalars['Boolean'];
};


export type StoreProductCategoryArgs = {
  filter?: InputMaybe<ModelProductCategoryFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  nextToken?: InputMaybe<Scalars['String']>;
  sortDirection?: InputMaybe<ModelSortDirection>;
};

export type Subscription = {
  __typename?: 'Subscription';
  onCreateBlog?: Maybe<Blog>;
  onCreateCategory?: Maybe<Category>;
  onCreateComment?: Maybe<Comment>;
  onCreatePost?: Maybe<Post>;
  onCreateProduct?: Maybe<Product>;
  onCreateProductCategory?: Maybe<ProductCategory>;
  onCreateShopperIntent?: Maybe<ShopperIntent>;
  onCreateStore?: Maybe<Store>;
  onCreateVendorIntent?: Maybe<VendorIntent>;
  onDeleteBlog?: Maybe<Blog>;
  onDeleteCategory?: Maybe<Category>;
  onDeleteComment?: Maybe<Comment>;
  onDeletePost?: Maybe<Post>;
  onDeleteProduct?: Maybe<Product>;
  onDeleteProductCategory?: Maybe<ProductCategory>;
  onDeleteShopperIntent?: Maybe<ShopperIntent>;
  onDeleteStore?: Maybe<Store>;
  onDeleteVendorIntent?: Maybe<VendorIntent>;
  onUpdateBlog?: Maybe<Blog>;
  onUpdateCategory?: Maybe<Category>;
  onUpdateComment?: Maybe<Comment>;
  onUpdatePost?: Maybe<Post>;
  onUpdateProduct?: Maybe<Product>;
  onUpdateProductCategory?: Maybe<ProductCategory>;
  onUpdateShopperIntent?: Maybe<ShopperIntent>;
  onUpdateStore?: Maybe<Store>;
  onUpdateVendorIntent?: Maybe<VendorIntent>;
};


export type SubscriptionOnCreateBlogArgs = {
  filter?: InputMaybe<ModelSubscriptionBlogFilterInput>;
};


export type SubscriptionOnCreateCategoryArgs = {
  filter?: InputMaybe<ModelSubscriptionCategoryFilterInput>;
};


export type SubscriptionOnCreateCommentArgs = {
  filter?: InputMaybe<ModelSubscriptionCommentFilterInput>;
};


export type SubscriptionOnCreatePostArgs = {
  filter?: InputMaybe<ModelSubscriptionPostFilterInput>;
};


export type SubscriptionOnCreateProductArgs = {
  filter?: InputMaybe<ModelSubscriptionProductFilterInput>;
};


export type SubscriptionOnCreateProductCategoryArgs = {
  filter?: InputMaybe<ModelSubscriptionProductCategoryFilterInput>;
};


export type SubscriptionOnCreateShopperIntentArgs = {
  filter?: InputMaybe<ModelSubscriptionShopperIntentFilterInput>;
};


export type SubscriptionOnCreateStoreArgs = {
  filter?: InputMaybe<ModelSubscriptionStoreFilterInput>;
};


export type SubscriptionOnCreateVendorIntentArgs = {
  filter?: InputMaybe<ModelSubscriptionVendorIntentFilterInput>;
};


export type SubscriptionOnDeleteBlogArgs = {
  filter?: InputMaybe<ModelSubscriptionBlogFilterInput>;
};


export type SubscriptionOnDeleteCategoryArgs = {
  filter?: InputMaybe<ModelSubscriptionCategoryFilterInput>;
};


export type SubscriptionOnDeleteCommentArgs = {
  filter?: InputMaybe<ModelSubscriptionCommentFilterInput>;
};


export type SubscriptionOnDeletePostArgs = {
  filter?: InputMaybe<ModelSubscriptionPostFilterInput>;
};


export type SubscriptionOnDeleteProductArgs = {
  filter?: InputMaybe<ModelSubscriptionProductFilterInput>;
};


export type SubscriptionOnDeleteProductCategoryArgs = {
  filter?: InputMaybe<ModelSubscriptionProductCategoryFilterInput>;
};


export type SubscriptionOnDeleteShopperIntentArgs = {
  filter?: InputMaybe<ModelSubscriptionShopperIntentFilterInput>;
};


export type SubscriptionOnDeleteStoreArgs = {
  filter?: InputMaybe<ModelSubscriptionStoreFilterInput>;
};


export type SubscriptionOnDeleteVendorIntentArgs = {
  filter?: InputMaybe<ModelSubscriptionVendorIntentFilterInput>;
};


export type SubscriptionOnUpdateBlogArgs = {
  filter?: InputMaybe<ModelSubscriptionBlogFilterInput>;
};


export type SubscriptionOnUpdateCategoryArgs = {
  filter?: InputMaybe<ModelSubscriptionCategoryFilterInput>;
};


export type SubscriptionOnUpdateCommentArgs = {
  filter?: InputMaybe<ModelSubscriptionCommentFilterInput>;
};


export type SubscriptionOnUpdatePostArgs = {
  filter?: InputMaybe<ModelSubscriptionPostFilterInput>;
};


export type SubscriptionOnUpdateProductArgs = {
  filter?: InputMaybe<ModelSubscriptionProductFilterInput>;
};


export type SubscriptionOnUpdateProductCategoryArgs = {
  filter?: InputMaybe<ModelSubscriptionProductCategoryFilterInput>;
};


export type SubscriptionOnUpdateShopperIntentArgs = {
  filter?: InputMaybe<ModelSubscriptionShopperIntentFilterInput>;
};


export type SubscriptionOnUpdateStoreArgs = {
  filter?: InputMaybe<ModelSubscriptionStoreFilterInput>;
};


export type SubscriptionOnUpdateVendorIntentArgs = {
  filter?: InputMaybe<ModelSubscriptionVendorIntentFilterInput>;
};

export type UpdateBlogInput = {
  _version?: InputMaybe<Scalars['Int']>;
  id: Scalars['ID'];
  name?: InputMaybe<Scalars['String']>;
};

export type UpdateCategoryInput = {
  _version?: InputMaybe<Scalars['Int']>;
  id: Scalars['ID'];
  image?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type UpdateCommentInput = {
  _version?: InputMaybe<Scalars['Int']>;
  content?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  postCommentsId?: InputMaybe<Scalars['ID']>;
};

export type UpdatePostInput = {
  _version?: InputMaybe<Scalars['Int']>;
  blogPostsId?: InputMaybe<Scalars['ID']>;
  id: Scalars['ID'];
  title?: InputMaybe<Scalars['String']>;
};

export type UpdateProductCategoryInput = {
  _version?: InputMaybe<Scalars['Int']>;
  id: Scalars['ID'];
  image?: InputMaybe<Scalars['String']>;
  storeId?: InputMaybe<Scalars['String']>;
  storeProductCategoryId?: InputMaybe<Scalars['ID']>;
  title?: InputMaybe<Scalars['String']>;
};

export type UpdateProductInput = {
  _version?: InputMaybe<Scalars['Int']>;
  aisleId?: InputMaybe<Scalars['String']>;
  brand?: InputMaybe<Scalars['String']>;
  detail?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  image?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['String']>;
  productCategoryProductsId?: InputMaybe<Scalars['ID']>;
  title?: InputMaybe<Scalars['String']>;
};

export type UpdateShopperIntentInput = {
  _version?: InputMaybe<Scalars['Int']>;
  driverLicense?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  firstName?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  idCard?: InputMaybe<Scalars['String']>;
  lastName?: InputMaybe<Scalars['String']>;
  location?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
  vehicleLicense?: InputMaybe<Scalars['String']>;
  vehicleType?: InputMaybe<Scalars['String']>;
};

export type UpdateStoreInput = {
  _version?: InputMaybe<Scalars['Int']>;
  address?: InputMaybe<Scalars['String']>;
  branches?: InputMaybe<Scalars['String']>;
  categoryStoresId?: InputMaybe<Scalars['ID']>;
  email?: InputMaybe<Scalars['String']>;
  headerImg?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  logo?: InputMaybe<Scalars['String']>;
  outletType?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
  storeName?: InputMaybe<Scalars['String']>;
  verified?: InputMaybe<Scalars['Boolean']>;
};

export type UpdateVendorIntentInput = {
  _version?: InputMaybe<Scalars['Int']>;
  address?: InputMaybe<Scalars['String']>;
  branches?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  firstName?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  lastName?: InputMaybe<Scalars['String']>;
  outletType?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
  storeName?: InputMaybe<Scalars['String']>;
};

export type VendorIntent = {
  __typename?: 'VendorIntent';
  _deleted?: Maybe<Scalars['Boolean']>;
  _lastChangedAt: Scalars['AWSTimestamp'];
  _version: Scalars['Int'];
  address: Scalars['String'];
  branches: Scalars['String'];
  createdAt: Scalars['AWSDateTime'];
  email: Scalars['String'];
  firstName: Scalars['String'];
  id: Scalars['ID'];
  lastName: Scalars['String'];
  outletType: Scalars['String'];
  phone: Scalars['String'];
  storeName: Scalars['String'];
  updatedAt: Scalars['AWSDateTime'];
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


export type CodeVerificationMutation = { __typename?: 'Mutation', codeVerification?: string | null };

export type ListCategoriesQueryVariables = Exact<{ [key: string]: never; }>;


export type ListCategoriesQuery = { __typename?: 'Query', listCategories?: { __typename?: 'ModelCategoryConnection', items: Array<{ __typename?: 'Category', id: string, title: string, image: string, stores?: { __typename?: 'ModelStoreConnection', items: Array<{ __typename?: 'Store', id: string, storeName?: string | null, headerImg?: string | null, address: string } | null> } | null } | null> } | null };

export type GetCategoryQueryVariables = Exact<{
  getCategoryId: Scalars['ID'];
}>;


export type GetCategoryQuery = { __typename?: 'Query', getCategory?: { __typename?: 'Category', id: string, stores?: { __typename?: 'ModelStoreConnection', items: Array<{ __typename?: 'Store', categoryStoresId?: string | null, headerImg?: string | null, storeName?: string | null, branches: string, address: string, logo?: string | null, phone: string, verified: boolean, id: string, email: string } | null> } | null } | null };


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
    mutation codeVerification($phoneNumber: String!, $code: Int!) {
  codeVerification(phoneNumber: $phoneNumber, code: $code)
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