/* eslint-disable */
import { gql } from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export type AuthMessage = {
  __typename?: 'AuthMessage';
  message?: Maybe<Scalars['String']>;
  success?: Maybe<Scalars['Boolean']>;
  token?: Maybe<Scalars['String']>;
};

export type Message = {
  __typename?: 'Message';
  message?: Maybe<Scalars['String']>;
  success?: Maybe<Scalars['Boolean']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  SocialLogin: Message;
  codeVerification: AuthMessage;
  createProduct?: Maybe<Product>;
  createStore: Message;
  createVendor: Message;
  deleteProduct?: Maybe<Product>;
  deleteVendor?: Maybe<Message>;
  phoneVerification: Message;
  shopperLogin: AuthMessage;
  shopperSignup: AuthMessage;
  storeLogin: AuthMessage;
  updateProduct?: Maybe<Product>;
  updateVendor?: Maybe<Message>;
};


export type MutationSocialLoginArgs = {
  accessToken: Scalars['String'];
  service: Scalars['String'];
};


export type MutationCodeVerificationArgs = {
  code: Scalars['Int'];
  phoneNumber: Scalars['String'];
};


export type MutationCreateProductArgs = {
  input?: InputMaybe<ProductInput>;
};


export type MutationCreateStoreArgs = {
  input: StoreInput;
};


export type MutationCreateVendorArgs = {
  input?: InputMaybe<VendorInput>;
};


export type MutationDeleteProductArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteVendorArgs = {
  id: Scalars['ID'];
};


export type MutationPhoneVerificationArgs = {
  phoneNumber: Scalars['String'];
};


export type MutationShopperLoginArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type MutationShopperSignupArgs = {
  input: ShopperInput;
};


export type MutationStoreLoginArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type MutationUpdateProductArgs = {
  id: Scalars['ID'];
  input?: InputMaybe<ProductInput>;
};


export type MutationUpdateVendorArgs = {
  id: Scalars['ID'];
  input?: InputMaybe<VendorInput>;
};

export type Product = {
  __typename?: 'Product';
  available: Scalars['String'];
  brand: Scalars['String'];
  description: Scalars['String'];
  id: Scalars['ID'];
  image: Array<Maybe<Scalars['String']>>;
  price: Scalars['String'];
  title: Scalars['String'];
};

export type ProductInput = {
  available: Scalars['String'];
  brand: Scalars['String'];
  description: Scalars['String'];
  image: Array<InputMaybe<Scalars['String']>>;
  price: Scalars['String'];
  title: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  products?: Maybe<Array<Maybe<Product>>>;
  test: Scalars['String'];
};

export type ShopperInput = {
  avatar: Scalars['Upload'];
  driverLicense: Scalars['Upload'];
  email: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  location: Scalars['String'];
  middleName?: InputMaybe<Scalars['String']>;
  passport: Scalars['Upload'];
  password: Scalars['String'];
  phone: Scalars['String'];
  vehicleLicense: Scalars['Upload'];
  vehicleType: Scalars['String'];
};

export type StoreInput = {
  address: Scalars['String'];
  branches: Scalars['String'];
  email: Scalars['String'];
  image: Scalars['Upload'];
  outletType: Scalars['String'];
  password: Scalars['String'];
  phone: Scalars['String'];
  storeName: Scalars['String'];
  verified: Scalars['Boolean'];
};

export type User = {
  __typename?: 'User';
  email?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  location?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  phone: Scalars['String'];
};

export type VendorInput = {
  address: Scalars['String'];
  branches: Scalars['String'];
  email: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  outletType: Scalars['String'];
  phone: Scalars['String'];
  storeName: Scalars['String'];
};

/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export type AuthMessage = {
  __typename?: 'AuthMessage';
  message?: Maybe<Scalars['String']>;
  success?: Maybe<Scalars['Boolean']>;
  token?: Maybe<Scalars['String']>;
};

export type Message = {
  __typename?: 'Message';
  message?: Maybe<Scalars['String']>;
  success?: Maybe<Scalars['Boolean']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  SocialLogin: Message;
  codeVerification: AuthMessage;
  createProduct?: Maybe<Product>;
  createStore: Message;
  createVendor: Message;
  deleteProduct?: Maybe<Product>;
  deleteVendor?: Maybe<Message>;
  phoneVerification: Message;
  shopperLogin: AuthMessage;
  shopperSignup: AuthMessage;
  storeLogin: AuthMessage;
  updateProduct?: Maybe<Product>;
  updateVendor?: Maybe<Message>;
};


export type MutationSocialLoginArgs = {
  accessToken: Scalars['String'];
  service: Scalars['String'];
};


export type MutationCodeVerificationArgs = {
  code: Scalars['Int'];
  phoneNumber: Scalars['String'];
};


export type MutationCreateProductArgs = {
  input?: InputMaybe<ProductInput>;
};


export type MutationCreateStoreArgs = {
  input: StoreInput;
};


export type MutationCreateVendorArgs = {
  input?: InputMaybe<VendorInput>;
};


export type MutationDeleteProductArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteVendorArgs = {
  id: Scalars['ID'];
};


export type MutationPhoneVerificationArgs = {
  phoneNumber: Scalars['String'];
};


export type MutationShopperLoginArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type MutationShopperSignupArgs = {
  input: ShopperInput;
};


export type MutationStoreLoginArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type MutationUpdateProductArgs = {
  id: Scalars['ID'];
  input?: InputMaybe<ProductInput>;
};


export type MutationUpdateVendorArgs = {
  id: Scalars['ID'];
  input?: InputMaybe<VendorInput>;
};

export type Product = {
  __typename?: 'Product';
  available: Scalars['String'];
  brand: Scalars['String'];
  description: Scalars['String'];
  id: Scalars['ID'];
  image: Array<Maybe<Scalars['String']>>;
  price: Scalars['String'];
  title: Scalars['String'];
};

export type ProductInput = {
  available: Scalars['String'];
  brand: Scalars['String'];
  description: Scalars['String'];
  image: Array<InputMaybe<Scalars['String']>>;
  price: Scalars['String'];
  title: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  products?: Maybe<Array<Maybe<Product>>>;
  test: Scalars['String'];
};

export type ShopperInput = {
  avatar: Scalars['Upload'];
  driverLicense: Scalars['Upload'];
  email: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  location: Scalars['String'];
  middleName?: InputMaybe<Scalars['String']>;
  passport: Scalars['Upload'];
  password: Scalars['String'];
  phone: Scalars['String'];
  vehicleLicense: Scalars['Upload'];
  vehicleType: Scalars['String'];
};

export type StoreInput = {
  address: Scalars['String'];
  branches: Scalars['String'];
  email: Scalars['String'];
  image: Scalars['Upload'];
  outletType: Scalars['String'];
  password: Scalars['String'];
  phone: Scalars['String'];
  storeName: Scalars['String'];
  verified: Scalars['Boolean'];
};

export type User = {
  __typename?: 'User';
  email?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  location?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  phone: Scalars['String'];
};

export type VendorInput = {
  address: Scalars['String'];
  branches: Scalars['String'];
  email: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  outletType: Scalars['String'];
  phone: Scalars['String'];
  storeName: Scalars['String'];
};
