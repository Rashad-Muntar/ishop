/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type clientPaylod = {
  __typename: "clientPaylod",
  client?: Client | null,
  token?: string | null,
  success?: boolean | null,
  message?: string | null,
};

export type Client = {
  __typename: "Client",
  id: string,
  firstName?: string | null,
  lastName?: string | null,
  email?: string | null,
  password: string,
  phone?: string | null,
  location?: string | null,
  orders?: ModelOrderConnection | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type ModelOrderConnection = {
  __typename: "ModelOrderConnection",
  items:  Array<Order | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type Order = {
  __typename: "Order",
  id: string,
  startTime: string,
  endTime?: string | null,
  code?: number | null,
  isCancel?: boolean | null,
  isReject?: boolean | null,
  isComplete?: boolean | null,
  distance?: string | null,
  isPicked?: boolean | null,
  isDelivered?: boolean | null,
  onGoing?: boolean | null,
  isAccepted?: boolean | null,
  shopperId?: string | null,
  clientId?: string | null,
  storeId?: string | null,
  orderNote: string,
  shopper?: Shopper | null,
  store?: Store | null,
  client?: Client | null,
  products?: ModelProductOrderConnection | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  shopperOrdersId?: string | null,
  clientOrdersId?: string | null,
  storeOrdersId?: string | null,
};

export type Shopper = {
  __typename: "Shopper",
  id: string,
  avatar: string,
  firstName: string,
  lastName: string,
  email: string,
  password: string,
  phone?: string | null,
  deliveryOption?: string | null,
  isOnline?: boolean | null,
  location?: string | null,
  latitude?: number | null,
  longitude?: number | null,
  orders?: ModelOrderConnection | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type Store = {
  __typename: "Store",
  id: string,
  email: string,
  password: string,
  storeName?: string | null,
  address: string,
  latitude?: number | null,
  longitude?: number | null,
  phone: string,
  outletType: string,
  branches: string,
  headerImg?: string | null,
  logo?: string | null,
  verified: boolean,
  category?: Category | null,
  productCategories?: ModelProductCategoryConnection | null,
  orders?: ModelOrderConnection | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  categoryStoresId?: string | null,
};

export type Category = {
  __typename: "Category",
  id: string,
  title: string,
  image: string,
  stores?: ModelStoreConnection | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type ModelStoreConnection = {
  __typename: "ModelStoreConnection",
  items:  Array<Store | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelProductCategoryConnection = {
  __typename: "ModelProductCategoryConnection",
  items:  Array<ProductCategory | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ProductCategory = {
  __typename: "ProductCategory",
  id: string,
  title: string,
  image: string,
  store?: Store | null,
  products?: ModelProductConnection | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  storeProductCategoriesId?: string | null,
};

export type ModelProductConnection = {
  __typename: "ModelProductConnection",
  items:  Array<Product | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type Product = {
  __typename: "Product",
  id: string,
  title: string,
  detail: string,
  brand: string,
  color?: string | null,
  size?: string | null,
  rooms?: number | null,
  washrooms?: number | null,
  model?: string | null,
  price: number,
  image?: string | null,
  productCategory?: ProductCategory | null,
  orders?: ModelProductOrderConnection | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  productCategoryProductsId?: string | null,
};

export type ModelProductOrderConnection = {
  __typename: "ModelProductOrderConnection",
  items:  Array<ProductOrder | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ProductOrder = {
  __typename: "ProductOrder",
  id: string,
  orderId: string,
  productId: string,
  order: Order,
  product: Product,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type PaymentIntention = {
  __typename: "PaymentIntention",
  paymentIntent: string,
  ephemeralKey: string,
  customer: string,
  publishableKey: string,
};

export type newShopper = {
  __typename: "newShopper",
  shopper?: newShoperPayload | null,
  token?: string | null,
  success?: boolean | null,
  message?: string | null,
};

export type newShoperPayload = {
  __typename: "newShoperPayload",
  id: string,
  avatar?: string | null,
  email?: string | null,
  password?: string | null,
  firstName?: string | null,
  lastName?: string | null,
  deliveryOption?: string | null,
  location?: string | null,
  latitude?: number | null,
  longitude?: number | null,
  isOnline?: boolean | null,
  phone: string,
};

export type newStore = {
  __typename: "newStore",
  store?: newStorePayload | null,
  token?: string | null,
};

export type newStorePayload = {
  __typename: "newStorePayload",
  id: string,
  avatar: string,
  firstName: string,
  lastName: string,
  email: string,
  phone: string,
  location: string,
};

export type CreateCategoryInput = {
  id?: string | null,
  title: string,
  image: string,
  _version?: number | null,
};

export type ModelCategoryConditionInput = {
  title?: ModelStringInput | null,
  image?: ModelStringInput | null,
  and?: Array< ModelCategoryConditionInput | null > | null,
  or?: Array< ModelCategoryConditionInput | null > | null,
  not?: ModelCategoryConditionInput | null,
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

export type UpdateCategoryInput = {
  id: string,
  title?: string | null,
  image?: string | null,
  _version?: number | null,
};

export type DeleteCategoryInput = {
  id: string,
  _version?: number | null,
};

export type CreateOrderInput = {
  id?: string | null,
  startTime: string,
  endTime?: string | null,
  code?: number | null,
  isCancel?: boolean | null,
  isReject?: boolean | null,
  isComplete?: boolean | null,
  distance?: string | null,
  isPicked?: boolean | null,
  isDelivered?: boolean | null,
  onGoing?: boolean | null,
  isAccepted?: boolean | null,
  shopperId?: string | null,
  clientId?: string | null,
  storeId?: string | null,
  orderNote: string,
  _version?: number | null,
  shopperOrdersId?: string | null,
  clientOrdersId?: string | null,
  storeOrdersId?: string | null,
};

export type ModelOrderConditionInput = {
  startTime?: ModelStringInput | null,
  endTime?: ModelStringInput | null,
  code?: ModelIntInput | null,
  isCancel?: ModelBooleanInput | null,
  isReject?: ModelBooleanInput | null,
  isComplete?: ModelBooleanInput | null,
  distance?: ModelStringInput | null,
  isPicked?: ModelBooleanInput | null,
  isDelivered?: ModelBooleanInput | null,
  onGoing?: ModelBooleanInput | null,
  isAccepted?: ModelBooleanInput | null,
  shopperId?: ModelStringInput | null,
  clientId?: ModelStringInput | null,
  storeId?: ModelStringInput | null,
  orderNote?: ModelStringInput | null,
  and?: Array< ModelOrderConditionInput | null > | null,
  or?: Array< ModelOrderConditionInput | null > | null,
  not?: ModelOrderConditionInput | null,
  shopperOrdersId?: ModelIDInput | null,
  clientOrdersId?: ModelIDInput | null,
  storeOrdersId?: ModelIDInput | null,
};

export type ModelIntInput = {
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

export type UpdateOrderInput = {
  id: string,
  startTime?: string | null,
  endTime?: string | null,
  code?: number | null,
  isCancel?: boolean | null,
  isReject?: boolean | null,
  isComplete?: boolean | null,
  distance?: string | null,
  isPicked?: boolean | null,
  isDelivered?: boolean | null,
  onGoing?: boolean | null,
  isAccepted?: boolean | null,
  shopperId?: string | null,
  clientId?: string | null,
  storeId?: string | null,
  orderNote?: string | null,
  _version?: number | null,
  shopperOrdersId?: string | null,
  clientOrdersId?: string | null,
  storeOrdersId?: string | null,
};

export type DeleteOrderInput = {
  id: string,
  _version?: number | null,
};

export type CreateShopperInput = {
  id?: string | null,
  avatar: string,
  firstName: string,
  lastName: string,
  email: string,
  password: string,
  phone?: string | null,
  deliveryOption?: string | null,
  isOnline?: boolean | null,
  location?: string | null,
  latitude?: number | null,
  longitude?: number | null,
  _version?: number | null,
};

export type ModelShopperConditionInput = {
  avatar?: ModelStringInput | null,
  firstName?: ModelStringInput | null,
  lastName?: ModelStringInput | null,
  email?: ModelStringInput | null,
  password?: ModelStringInput | null,
  phone?: ModelStringInput | null,
  deliveryOption?: ModelStringInput | null,
  isOnline?: ModelBooleanInput | null,
  location?: ModelStringInput | null,
  latitude?: ModelFloatInput | null,
  longitude?: ModelFloatInput | null,
  and?: Array< ModelShopperConditionInput | null > | null,
  or?: Array< ModelShopperConditionInput | null > | null,
  not?: ModelShopperConditionInput | null,
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

export type UpdateShopperInput = {
  id: string,
  avatar?: string | null,
  firstName?: string | null,
  lastName?: string | null,
  email?: string | null,
  password?: string | null,
  phone?: string | null,
  deliveryOption?: string | null,
  isOnline?: boolean | null,
  location?: string | null,
  latitude?: number | null,
  longitude?: number | null,
  _version?: number | null,
};

export type DeleteShopperInput = {
  id: string,
  _version?: number | null,
};

export type CreateClientInput = {
  id?: string | null,
  firstName?: string | null,
  lastName?: string | null,
  email?: string | null,
  password: string,
  phone?: string | null,
  location?: string | null,
  _version?: number | null,
};

export type ModelClientConditionInput = {
  firstName?: ModelStringInput | null,
  lastName?: ModelStringInput | null,
  email?: ModelStringInput | null,
  password?: ModelStringInput | null,
  phone?: ModelStringInput | null,
  location?: ModelStringInput | null,
  and?: Array< ModelClientConditionInput | null > | null,
  or?: Array< ModelClientConditionInput | null > | null,
  not?: ModelClientConditionInput | null,
};

export type UpdateClientInput = {
  id: string,
  firstName?: string | null,
  lastName?: string | null,
  email?: string | null,
  password?: string | null,
  phone?: string | null,
  location?: string | null,
  _version?: number | null,
};

export type DeleteClientInput = {
  id: string,
  _version?: number | null,
};

export type CreateStoreInput = {
  id?: string | null,
  email: string,
  password: string,
  storeName?: string | null,
  address: string,
  latitude?: number | null,
  longitude?: number | null,
  phone: string,
  outletType: string,
  branches: string,
  headerImg?: string | null,
  logo?: string | null,
  verified: boolean,
  _version?: number | null,
  categoryStoresId?: string | null,
};

export type ModelStoreConditionInput = {
  email?: ModelStringInput | null,
  password?: ModelStringInput | null,
  storeName?: ModelStringInput | null,
  address?: ModelStringInput | null,
  latitude?: ModelFloatInput | null,
  longitude?: ModelFloatInput | null,
  phone?: ModelStringInput | null,
  outletType?: ModelStringInput | null,
  branches?: ModelStringInput | null,
  headerImg?: ModelStringInput | null,
  logo?: ModelStringInput | null,
  verified?: ModelBooleanInput | null,
  and?: Array< ModelStoreConditionInput | null > | null,
  or?: Array< ModelStoreConditionInput | null > | null,
  not?: ModelStoreConditionInput | null,
  categoryStoresId?: ModelIDInput | null,
};

export type UpdateStoreInput = {
  id: string,
  email?: string | null,
  password?: string | null,
  storeName?: string | null,
  address?: string | null,
  latitude?: number | null,
  longitude?: number | null,
  phone?: string | null,
  outletType?: string | null,
  branches?: string | null,
  headerImg?: string | null,
  logo?: string | null,
  verified?: boolean | null,
  _version?: number | null,
  categoryStoresId?: string | null,
};

export type DeleteStoreInput = {
  id: string,
  _version?: number | null,
};

export type CreateProductCategoryInput = {
  id?: string | null,
  title: string,
  image: string,
  _version?: number | null,
  storeProductCategoriesId?: string | null,
};

export type ModelProductCategoryConditionInput = {
  title?: ModelStringInput | null,
  image?: ModelStringInput | null,
  and?: Array< ModelProductCategoryConditionInput | null > | null,
  or?: Array< ModelProductCategoryConditionInput | null > | null,
  not?: ModelProductCategoryConditionInput | null,
  storeProductCategoriesId?: ModelIDInput | null,
};

export type UpdateProductCategoryInput = {
  id: string,
  title?: string | null,
  image?: string | null,
  _version?: number | null,
  storeProductCategoriesId?: string | null,
};

export type DeleteProductCategoryInput = {
  id: string,
  _version?: number | null,
};

export type CreateProductInput = {
  id?: string | null,
  title: string,
  detail: string,
  brand: string,
  color?: string | null,
  size?: string | null,
  rooms?: number | null,
  washrooms?: number | null,
  model?: string | null,
  price: number,
  image?: string | null,
  _version?: number | null,
  productCategoryProductsId?: string | null,
};

export type ModelProductConditionInput = {
  title?: ModelStringInput | null,
  detail?: ModelStringInput | null,
  brand?: ModelStringInput | null,
  color?: ModelStringInput | null,
  size?: ModelStringInput | null,
  rooms?: ModelIntInput | null,
  washrooms?: ModelIntInput | null,
  model?: ModelStringInput | null,
  price?: ModelFloatInput | null,
  image?: ModelStringInput | null,
  and?: Array< ModelProductConditionInput | null > | null,
  or?: Array< ModelProductConditionInput | null > | null,
  not?: ModelProductConditionInput | null,
  productCategoryProductsId?: ModelIDInput | null,
};

export type UpdateProductInput = {
  id: string,
  title?: string | null,
  detail?: string | null,
  brand?: string | null,
  color?: string | null,
  size?: string | null,
  rooms?: number | null,
  washrooms?: number | null,
  model?: string | null,
  price?: number | null,
  image?: string | null,
  _version?: number | null,
  productCategoryProductsId?: string | null,
};

export type DeleteProductInput = {
  id: string,
  _version?: number | null,
};

export type CreateProductOrderInput = {
  id?: string | null,
  orderId: string,
  productId: string,
  _version?: number | null,
};

export type ModelProductOrderConditionInput = {
  orderId?: ModelIDInput | null,
  productId?: ModelIDInput | null,
  and?: Array< ModelProductOrderConditionInput | null > | null,
  or?: Array< ModelProductOrderConditionInput | null > | null,
  not?: ModelProductOrderConditionInput | null,
};

export type UpdateProductOrderInput = {
  id: string,
  orderId?: string | null,
  productId?: string | null,
  _version?: number | null,
};

export type DeleteProductOrderInput = {
  id: string,
  _version?: number | null,
};

export type ModelCategoryFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  image?: ModelStringInput | null,
  and?: Array< ModelCategoryFilterInput | null > | null,
  or?: Array< ModelCategoryFilterInput | null > | null,
  not?: ModelCategoryFilterInput | null,
};

export type ModelCategoryConnection = {
  __typename: "ModelCategoryConnection",
  items:  Array<Category | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelOrderFilterInput = {
  id?: ModelIDInput | null,
  startTime?: ModelStringInput | null,
  endTime?: ModelStringInput | null,
  code?: ModelIntInput | null,
  isCancel?: ModelBooleanInput | null,
  isReject?: ModelBooleanInput | null,
  isComplete?: ModelBooleanInput | null,
  distance?: ModelStringInput | null,
  isPicked?: ModelBooleanInput | null,
  isDelivered?: ModelBooleanInput | null,
  onGoing?: ModelBooleanInput | null,
  isAccepted?: ModelBooleanInput | null,
  shopperId?: ModelStringInput | null,
  clientId?: ModelStringInput | null,
  storeId?: ModelStringInput | null,
  orderNote?: ModelStringInput | null,
  and?: Array< ModelOrderFilterInput | null > | null,
  or?: Array< ModelOrderFilterInput | null > | null,
  not?: ModelOrderFilterInput | null,
  shopperOrdersId?: ModelIDInput | null,
  clientOrdersId?: ModelIDInput | null,
  storeOrdersId?: ModelIDInput | null,
};

export type ModelShopperFilterInput = {
  id?: ModelIDInput | null,
  avatar?: ModelStringInput | null,
  firstName?: ModelStringInput | null,
  lastName?: ModelStringInput | null,
  email?: ModelStringInput | null,
  password?: ModelStringInput | null,
  phone?: ModelStringInput | null,
  deliveryOption?: ModelStringInput | null,
  isOnline?: ModelBooleanInput | null,
  location?: ModelStringInput | null,
  latitude?: ModelFloatInput | null,
  longitude?: ModelFloatInput | null,
  and?: Array< ModelShopperFilterInput | null > | null,
  or?: Array< ModelShopperFilterInput | null > | null,
  not?: ModelShopperFilterInput | null,
};

export type ModelShopperConnection = {
  __typename: "ModelShopperConnection",
  items:  Array<Shopper | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelClientFilterInput = {
  id?: ModelIDInput | null,
  firstName?: ModelStringInput | null,
  lastName?: ModelStringInput | null,
  email?: ModelStringInput | null,
  password?: ModelStringInput | null,
  phone?: ModelStringInput | null,
  location?: ModelStringInput | null,
  and?: Array< ModelClientFilterInput | null > | null,
  or?: Array< ModelClientFilterInput | null > | null,
  not?: ModelClientFilterInput | null,
};

export type ModelClientConnection = {
  __typename: "ModelClientConnection",
  items:  Array<Client | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelStoreFilterInput = {
  id?: ModelIDInput | null,
  email?: ModelStringInput | null,
  password?: ModelStringInput | null,
  storeName?: ModelStringInput | null,
  address?: ModelStringInput | null,
  latitude?: ModelFloatInput | null,
  longitude?: ModelFloatInput | null,
  phone?: ModelStringInput | null,
  outletType?: ModelStringInput | null,
  branches?: ModelStringInput | null,
  headerImg?: ModelStringInput | null,
  logo?: ModelStringInput | null,
  verified?: ModelBooleanInput | null,
  and?: Array< ModelStoreFilterInput | null > | null,
  or?: Array< ModelStoreFilterInput | null > | null,
  not?: ModelStoreFilterInput | null,
  categoryStoresId?: ModelIDInput | null,
};

export type ModelProductCategoryFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  image?: ModelStringInput | null,
  and?: Array< ModelProductCategoryFilterInput | null > | null,
  or?: Array< ModelProductCategoryFilterInput | null > | null,
  not?: ModelProductCategoryFilterInput | null,
  storeProductCategoriesId?: ModelIDInput | null,
};

export type ModelProductFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  detail?: ModelStringInput | null,
  brand?: ModelStringInput | null,
  color?: ModelStringInput | null,
  size?: ModelStringInput | null,
  rooms?: ModelIntInput | null,
  washrooms?: ModelIntInput | null,
  model?: ModelStringInput | null,
  price?: ModelFloatInput | null,
  image?: ModelStringInput | null,
  and?: Array< ModelProductFilterInput | null > | null,
  or?: Array< ModelProductFilterInput | null > | null,
  not?: ModelProductFilterInput | null,
  productCategoryProductsId?: ModelIDInput | null,
};

export type ModelProductOrderFilterInput = {
  id?: ModelIDInput | null,
  orderId?: ModelIDInput | null,
  productId?: ModelIDInput | null,
  and?: Array< ModelProductOrderFilterInput | null > | null,
  or?: Array< ModelProductOrderFilterInput | null > | null,
  not?: ModelProductOrderFilterInput | null,
};

export type ModelIDKeyConditionInput = {
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelSubscriptionCategoryFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  title?: ModelSubscriptionStringInput | null,
  image?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionCategoryFilterInput | null > | null,
  or?: Array< ModelSubscriptionCategoryFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
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
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
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
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionOrderFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  startTime?: ModelSubscriptionStringInput | null,
  endTime?: ModelSubscriptionStringInput | null,
  code?: ModelSubscriptionIntInput | null,
  isCancel?: ModelSubscriptionBooleanInput | null,
  isReject?: ModelSubscriptionBooleanInput | null,
  isComplete?: ModelSubscriptionBooleanInput | null,
  distance?: ModelSubscriptionStringInput | null,
  isPicked?: ModelSubscriptionBooleanInput | null,
  isDelivered?: ModelSubscriptionBooleanInput | null,
  onGoing?: ModelSubscriptionBooleanInput | null,
  isAccepted?: ModelSubscriptionBooleanInput | null,
  shopperId?: ModelSubscriptionStringInput | null,
  clientId?: ModelSubscriptionStringInput | null,
  storeId?: ModelSubscriptionStringInput | null,
  orderNote?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionOrderFilterInput | null > | null,
  or?: Array< ModelSubscriptionOrderFilterInput | null > | null,
};

export type ModelSubscriptionIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
};

export type ModelSubscriptionShopperFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  avatar?: ModelSubscriptionStringInput | null,
  firstName?: ModelSubscriptionStringInput | null,
  lastName?: ModelSubscriptionStringInput | null,
  email?: ModelSubscriptionStringInput | null,
  password?: ModelSubscriptionStringInput | null,
  phone?: ModelSubscriptionStringInput | null,
  deliveryOption?: ModelSubscriptionStringInput | null,
  isOnline?: ModelSubscriptionBooleanInput | null,
  location?: ModelSubscriptionStringInput | null,
  latitude?: ModelSubscriptionFloatInput | null,
  longitude?: ModelSubscriptionFloatInput | null,
  and?: Array< ModelSubscriptionShopperFilterInput | null > | null,
  or?: Array< ModelSubscriptionShopperFilterInput | null > | null,
};

export type ModelSubscriptionFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionClientFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  firstName?: ModelSubscriptionStringInput | null,
  lastName?: ModelSubscriptionStringInput | null,
  email?: ModelSubscriptionStringInput | null,
  password?: ModelSubscriptionStringInput | null,
  phone?: ModelSubscriptionStringInput | null,
  location?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionClientFilterInput | null > | null,
  or?: Array< ModelSubscriptionClientFilterInput | null > | null,
};

export type ModelSubscriptionStoreFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  email?: ModelSubscriptionStringInput | null,
  password?: ModelSubscriptionStringInput | null,
  storeName?: ModelSubscriptionStringInput | null,
  address?: ModelSubscriptionStringInput | null,
  latitude?: ModelSubscriptionFloatInput | null,
  longitude?: ModelSubscriptionFloatInput | null,
  phone?: ModelSubscriptionStringInput | null,
  outletType?: ModelSubscriptionStringInput | null,
  branches?: ModelSubscriptionStringInput | null,
  headerImg?: ModelSubscriptionStringInput | null,
  logo?: ModelSubscriptionStringInput | null,
  verified?: ModelSubscriptionBooleanInput | null,
  and?: Array< ModelSubscriptionStoreFilterInput | null > | null,
  or?: Array< ModelSubscriptionStoreFilterInput | null > | null,
};

export type ModelSubscriptionProductCategoryFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  title?: ModelSubscriptionStringInput | null,
  image?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionProductCategoryFilterInput | null > | null,
  or?: Array< ModelSubscriptionProductCategoryFilterInput | null > | null,
};

export type ModelSubscriptionProductFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  title?: ModelSubscriptionStringInput | null,
  detail?: ModelSubscriptionStringInput | null,
  brand?: ModelSubscriptionStringInput | null,
  color?: ModelSubscriptionStringInput | null,
  size?: ModelSubscriptionStringInput | null,
  rooms?: ModelSubscriptionIntInput | null,
  washrooms?: ModelSubscriptionIntInput | null,
  model?: ModelSubscriptionStringInput | null,
  price?: ModelSubscriptionFloatInput | null,
  image?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionProductFilterInput | null > | null,
  or?: Array< ModelSubscriptionProductFilterInput | null > | null,
};

export type ModelSubscriptionProductOrderFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  orderId?: ModelSubscriptionIDInput | null,
  productId?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionProductOrderFilterInput | null > | null,
  or?: Array< ModelSubscriptionProductOrderFilterInput | null > | null,
};

export type PhoneVerificationMutationVariables = {
  phoneNumber: string,
};

export type PhoneVerificationMutation = {
  phoneVerification?: string | null,
};

export type CodeVerificationMutationVariables = {
  phoneNumber: string,
  code: number,
};

export type CodeVerificationMutation = {
  codeVerification:  {
    __typename: "clientPaylod",
    client?:  {
      __typename: "Client",
      id: string,
      firstName?: string | null,
      lastName?: string | null,
      email?: string | null,
      password: string,
      phone?: string | null,
      location?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    token?: string | null,
    success?: boolean | null,
    message?: string | null,
  },
};

export type SocialAuthMutationVariables = {
  firstName: string,
  lastName: string,
  email: string,
  avatar: string,
};

export type SocialAuthMutation = {
  socialAuth:  {
    __typename: "clientPaylod",
    client?:  {
      __typename: "Client",
      id: string,
      firstName?: string | null,
      lastName?: string | null,
      email?: string | null,
      password: string,
      phone?: string | null,
      location?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    token?: string | null,
    success?: boolean | null,
    message?: string | null,
  },
};

export type CreatePaymentIntentMutationVariables = {
  amount: number,
};

export type CreatePaymentIntentMutation = {
  createPaymentIntent:  {
    __typename: "PaymentIntention",
    paymentIntent: string,
    ephemeralKey: string,
    customer: string,
    publishableKey: string,
  },
};

export type ShopperSignUpMutationVariables = {
  avatar: string,
  email: string,
  password: string,
  firstName: string,
  lastName: string,
  deliveryOption: string,
  location: string,
  phone: string,
};

export type ShopperSignUpMutation = {
  shopperSignUp:  {
    __typename: "newShopper",
    shopper?:  {
      __typename: "newShoperPayload",
      id: string,
      avatar?: string | null,
      email?: string | null,
      password?: string | null,
      firstName?: string | null,
      lastName?: string | null,
      deliveryOption?: string | null,
      location?: string | null,
      latitude?: number | null,
      longitude?: number | null,
      isOnline?: boolean | null,
      phone: string,
    } | null,
    token?: string | null,
    success?: boolean | null,
    message?: string | null,
  },
};

export type ShoppeLocationUpdateMutationVariables = {
  id: string,
  latitude?: number | null,
  longitude?: number | null,
  isOnline?: boolean | null,
};

export type ShoppeLocationUpdateMutation = {
  shoppeLocationUpdate:  {
    __typename: "newShopper",
    shopper?:  {
      __typename: "newShoperPayload",
      id: string,
      avatar?: string | null,
      email?: string | null,
      password?: string | null,
      firstName?: string | null,
      lastName?: string | null,
      deliveryOption?: string | null,
      location?: string | null,
      latitude?: number | null,
      longitude?: number | null,
      isOnline?: boolean | null,
      phone: string,
    } | null,
    token?: string | null,
    success?: boolean | null,
    message?: string | null,
  },
};

export type ShopperLoginMutationVariables = {
  email: string,
  password: string,
};

export type ShopperLoginMutation = {
  shopperLogin:  {
    __typename: "newShopper",
    shopper?:  {
      __typename: "newShoperPayload",
      id: string,
      avatar?: string | null,
      email?: string | null,
      password?: string | null,
      firstName?: string | null,
      lastName?: string | null,
      deliveryOption?: string | null,
      location?: string | null,
      latitude?: number | null,
      longitude?: number | null,
      isOnline?: boolean | null,
      phone: string,
    } | null,
    token?: string | null,
    success?: boolean | null,
    message?: string | null,
  },
};

export type StoreSignupMutationVariables = {
  email: string,
  password: string,
  storeName?: string | null,
  address: string,
  phone: string,
  outletType: string,
  branches: string,
  categoryStoresId?: string | null,
  headerImg?: string | null,
  logo?: string | null,
  verified: boolean,
};

export type StoreSignupMutation = {
  storeSignup:  {
    __typename: "newStore",
    store?:  {
      __typename: "newStorePayload",
      id: string,
      avatar: string,
      firstName: string,
      lastName: string,
      email: string,
      phone: string,
      location: string,
    } | null,
    token?: string | null,
  },
};

export type StoreLoginMutationVariables = {
  email: string,
  password: string,
};

export type StoreLoginMutation = {
  storeLogin:  {
    __typename: "newStore",
    store?:  {
      __typename: "newStorePayload",
      id: string,
      avatar: string,
      firstName: string,
      lastName: string,
      email: string,
      phone: string,
      location: string,
    } | null,
    token?: string | null,
  },
};

export type GetVideoTokenMutationVariables = {
  userName: string,
};

export type GetVideoTokenMutation = {
  getVideoToken: string,
};

export type CreateCategoryMutationVariables = {
  input: CreateCategoryInput,
  condition?: ModelCategoryConditionInput | null,
};

export type CreateCategoryMutation = {
  createCategory?:  {
    __typename: "Category",
    id: string,
    title: string,
    image: string,
    stores?:  {
      __typename: "ModelStoreConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateCategoryMutationVariables = {
  input: UpdateCategoryInput,
  condition?: ModelCategoryConditionInput | null,
};

export type UpdateCategoryMutation = {
  updateCategory?:  {
    __typename: "Category",
    id: string,
    title: string,
    image: string,
    stores?:  {
      __typename: "ModelStoreConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteCategoryMutationVariables = {
  input: DeleteCategoryInput,
  condition?: ModelCategoryConditionInput | null,
};

export type DeleteCategoryMutation = {
  deleteCategory?:  {
    __typename: "Category",
    id: string,
    title: string,
    image: string,
    stores?:  {
      __typename: "ModelStoreConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateOrderMutationVariables = {
  input: CreateOrderInput,
  condition?: ModelOrderConditionInput | null,
};

export type CreateOrderMutation = {
  createOrder?:  {
    __typename: "Order",
    id: string,
    startTime: string,
    endTime?: string | null,
    code?: number | null,
    isCancel?: boolean | null,
    isReject?: boolean | null,
    isComplete?: boolean | null,
    distance?: string | null,
    isPicked?: boolean | null,
    isDelivered?: boolean | null,
    onGoing?: boolean | null,
    isAccepted?: boolean | null,
    shopperId?: string | null,
    clientId?: string | null,
    storeId?: string | null,
    orderNote: string,
    shopper?:  {
      __typename: "Shopper",
      id: string,
      avatar: string,
      firstName: string,
      lastName: string,
      email: string,
      password: string,
      phone?: string | null,
      deliveryOption?: string | null,
      isOnline?: boolean | null,
      location?: string | null,
      latitude?: number | null,
      longitude?: number | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    store?:  {
      __typename: "Store",
      id: string,
      email: string,
      password: string,
      storeName?: string | null,
      address: string,
      latitude?: number | null,
      longitude?: number | null,
      phone: string,
      outletType: string,
      branches: string,
      headerImg?: string | null,
      logo?: string | null,
      verified: boolean,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      categoryStoresId?: string | null,
    } | null,
    client?:  {
      __typename: "Client",
      id: string,
      firstName?: string | null,
      lastName?: string | null,
      email?: string | null,
      password: string,
      phone?: string | null,
      location?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    products?:  {
      __typename: "ModelProductOrderConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    shopperOrdersId?: string | null,
    clientOrdersId?: string | null,
    storeOrdersId?: string | null,
  } | null,
};

export type UpdateOrderMutationVariables = {
  input: UpdateOrderInput,
  condition?: ModelOrderConditionInput | null,
};

export type UpdateOrderMutation = {
  updateOrder?:  {
    __typename: "Order",
    id: string,
    startTime: string,
    endTime?: string | null,
    code?: number | null,
    isCancel?: boolean | null,
    isReject?: boolean | null,
    isComplete?: boolean | null,
    distance?: string | null,
    isPicked?: boolean | null,
    isDelivered?: boolean | null,
    onGoing?: boolean | null,
    isAccepted?: boolean | null,
    shopperId?: string | null,
    clientId?: string | null,
    storeId?: string | null,
    orderNote: string,
    shopper?:  {
      __typename: "Shopper",
      id: string,
      avatar: string,
      firstName: string,
      lastName: string,
      email: string,
      password: string,
      phone?: string | null,
      deliveryOption?: string | null,
      isOnline?: boolean | null,
      location?: string | null,
      latitude?: number | null,
      longitude?: number | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    store?:  {
      __typename: "Store",
      id: string,
      email: string,
      password: string,
      storeName?: string | null,
      address: string,
      latitude?: number | null,
      longitude?: number | null,
      phone: string,
      outletType: string,
      branches: string,
      headerImg?: string | null,
      logo?: string | null,
      verified: boolean,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      categoryStoresId?: string | null,
    } | null,
    client?:  {
      __typename: "Client",
      id: string,
      firstName?: string | null,
      lastName?: string | null,
      email?: string | null,
      password: string,
      phone?: string | null,
      location?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    products?:  {
      __typename: "ModelProductOrderConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    shopperOrdersId?: string | null,
    clientOrdersId?: string | null,
    storeOrdersId?: string | null,
  } | null,
};

export type DeleteOrderMutationVariables = {
  input: DeleteOrderInput,
  condition?: ModelOrderConditionInput | null,
};

export type DeleteOrderMutation = {
  deleteOrder?:  {
    __typename: "Order",
    id: string,
    startTime: string,
    endTime?: string | null,
    code?: number | null,
    isCancel?: boolean | null,
    isReject?: boolean | null,
    isComplete?: boolean | null,
    distance?: string | null,
    isPicked?: boolean | null,
    isDelivered?: boolean | null,
    onGoing?: boolean | null,
    isAccepted?: boolean | null,
    shopperId?: string | null,
    clientId?: string | null,
    storeId?: string | null,
    orderNote: string,
    shopper?:  {
      __typename: "Shopper",
      id: string,
      avatar: string,
      firstName: string,
      lastName: string,
      email: string,
      password: string,
      phone?: string | null,
      deliveryOption?: string | null,
      isOnline?: boolean | null,
      location?: string | null,
      latitude?: number | null,
      longitude?: number | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    store?:  {
      __typename: "Store",
      id: string,
      email: string,
      password: string,
      storeName?: string | null,
      address: string,
      latitude?: number | null,
      longitude?: number | null,
      phone: string,
      outletType: string,
      branches: string,
      headerImg?: string | null,
      logo?: string | null,
      verified: boolean,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      categoryStoresId?: string | null,
    } | null,
    client?:  {
      __typename: "Client",
      id: string,
      firstName?: string | null,
      lastName?: string | null,
      email?: string | null,
      password: string,
      phone?: string | null,
      location?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    products?:  {
      __typename: "ModelProductOrderConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    shopperOrdersId?: string | null,
    clientOrdersId?: string | null,
    storeOrdersId?: string | null,
  } | null,
};

export type CreateShopperMutationVariables = {
  input: CreateShopperInput,
  condition?: ModelShopperConditionInput | null,
};

export type CreateShopperMutation = {
  createShopper?:  {
    __typename: "Shopper",
    id: string,
    avatar: string,
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    phone?: string | null,
    deliveryOption?: string | null,
    isOnline?: boolean | null,
    location?: string | null,
    latitude?: number | null,
    longitude?: number | null,
    orders?:  {
      __typename: "ModelOrderConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateShopperMutationVariables = {
  input: UpdateShopperInput,
  condition?: ModelShopperConditionInput | null,
};

export type UpdateShopperMutation = {
  updateShopper?:  {
    __typename: "Shopper",
    id: string,
    avatar: string,
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    phone?: string | null,
    deliveryOption?: string | null,
    isOnline?: boolean | null,
    location?: string | null,
    latitude?: number | null,
    longitude?: number | null,
    orders?:  {
      __typename: "ModelOrderConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteShopperMutationVariables = {
  input: DeleteShopperInput,
  condition?: ModelShopperConditionInput | null,
};

export type DeleteShopperMutation = {
  deleteShopper?:  {
    __typename: "Shopper",
    id: string,
    avatar: string,
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    phone?: string | null,
    deliveryOption?: string | null,
    isOnline?: boolean | null,
    location?: string | null,
    latitude?: number | null,
    longitude?: number | null,
    orders?:  {
      __typename: "ModelOrderConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateClientMutationVariables = {
  input: CreateClientInput,
  condition?: ModelClientConditionInput | null,
};

export type CreateClientMutation = {
  createClient?:  {
    __typename: "Client",
    id: string,
    firstName?: string | null,
    lastName?: string | null,
    email?: string | null,
    password: string,
    phone?: string | null,
    location?: string | null,
    orders?:  {
      __typename: "ModelOrderConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateClientMutationVariables = {
  input: UpdateClientInput,
  condition?: ModelClientConditionInput | null,
};

export type UpdateClientMutation = {
  updateClient?:  {
    __typename: "Client",
    id: string,
    firstName?: string | null,
    lastName?: string | null,
    email?: string | null,
    password: string,
    phone?: string | null,
    location?: string | null,
    orders?:  {
      __typename: "ModelOrderConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteClientMutationVariables = {
  input: DeleteClientInput,
  condition?: ModelClientConditionInput | null,
};

export type DeleteClientMutation = {
  deleteClient?:  {
    __typename: "Client",
    id: string,
    firstName?: string | null,
    lastName?: string | null,
    email?: string | null,
    password: string,
    phone?: string | null,
    location?: string | null,
    orders?:  {
      __typename: "ModelOrderConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateStoreMutationVariables = {
  input: CreateStoreInput,
  condition?: ModelStoreConditionInput | null,
};

export type CreateStoreMutation = {
  createStore?:  {
    __typename: "Store",
    id: string,
    email: string,
    password: string,
    storeName?: string | null,
    address: string,
    latitude?: number | null,
    longitude?: number | null,
    phone: string,
    outletType: string,
    branches: string,
    headerImg?: string | null,
    logo?: string | null,
    verified: boolean,
    category?:  {
      __typename: "Category",
      id: string,
      title: string,
      image: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    productCategories?:  {
      __typename: "ModelProductCategoryConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    orders?:  {
      __typename: "ModelOrderConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    categoryStoresId?: string | null,
  } | null,
};

export type UpdateStoreMutationVariables = {
  input: UpdateStoreInput,
  condition?: ModelStoreConditionInput | null,
};

export type UpdateStoreMutation = {
  updateStore?:  {
    __typename: "Store",
    id: string,
    email: string,
    password: string,
    storeName?: string | null,
    address: string,
    latitude?: number | null,
    longitude?: number | null,
    phone: string,
    outletType: string,
    branches: string,
    headerImg?: string | null,
    logo?: string | null,
    verified: boolean,
    category?:  {
      __typename: "Category",
      id: string,
      title: string,
      image: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    productCategories?:  {
      __typename: "ModelProductCategoryConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    orders?:  {
      __typename: "ModelOrderConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    categoryStoresId?: string | null,
  } | null,
};

export type DeleteStoreMutationVariables = {
  input: DeleteStoreInput,
  condition?: ModelStoreConditionInput | null,
};

export type DeleteStoreMutation = {
  deleteStore?:  {
    __typename: "Store",
    id: string,
    email: string,
    password: string,
    storeName?: string | null,
    address: string,
    latitude?: number | null,
    longitude?: number | null,
    phone: string,
    outletType: string,
    branches: string,
    headerImg?: string | null,
    logo?: string | null,
    verified: boolean,
    category?:  {
      __typename: "Category",
      id: string,
      title: string,
      image: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    productCategories?:  {
      __typename: "ModelProductCategoryConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    orders?:  {
      __typename: "ModelOrderConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    categoryStoresId?: string | null,
  } | null,
};

export type CreateProductCategoryMutationVariables = {
  input: CreateProductCategoryInput,
  condition?: ModelProductCategoryConditionInput | null,
};

export type CreateProductCategoryMutation = {
  createProductCategory?:  {
    __typename: "ProductCategory",
    id: string,
    title: string,
    image: string,
    store?:  {
      __typename: "Store",
      id: string,
      email: string,
      password: string,
      storeName?: string | null,
      address: string,
      latitude?: number | null,
      longitude?: number | null,
      phone: string,
      outletType: string,
      branches: string,
      headerImg?: string | null,
      logo?: string | null,
      verified: boolean,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      categoryStoresId?: string | null,
    } | null,
    products?:  {
      __typename: "ModelProductConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    storeProductCategoriesId?: string | null,
  } | null,
};

export type UpdateProductCategoryMutationVariables = {
  input: UpdateProductCategoryInput,
  condition?: ModelProductCategoryConditionInput | null,
};

export type UpdateProductCategoryMutation = {
  updateProductCategory?:  {
    __typename: "ProductCategory",
    id: string,
    title: string,
    image: string,
    store?:  {
      __typename: "Store",
      id: string,
      email: string,
      password: string,
      storeName?: string | null,
      address: string,
      latitude?: number | null,
      longitude?: number | null,
      phone: string,
      outletType: string,
      branches: string,
      headerImg?: string | null,
      logo?: string | null,
      verified: boolean,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      categoryStoresId?: string | null,
    } | null,
    products?:  {
      __typename: "ModelProductConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    storeProductCategoriesId?: string | null,
  } | null,
};

export type DeleteProductCategoryMutationVariables = {
  input: DeleteProductCategoryInput,
  condition?: ModelProductCategoryConditionInput | null,
};

export type DeleteProductCategoryMutation = {
  deleteProductCategory?:  {
    __typename: "ProductCategory",
    id: string,
    title: string,
    image: string,
    store?:  {
      __typename: "Store",
      id: string,
      email: string,
      password: string,
      storeName?: string | null,
      address: string,
      latitude?: number | null,
      longitude?: number | null,
      phone: string,
      outletType: string,
      branches: string,
      headerImg?: string | null,
      logo?: string | null,
      verified: boolean,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      categoryStoresId?: string | null,
    } | null,
    products?:  {
      __typename: "ModelProductConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    storeProductCategoriesId?: string | null,
  } | null,
};

export type CreateProductMutationVariables = {
  input: CreateProductInput,
  condition?: ModelProductConditionInput | null,
};

export type CreateProductMutation = {
  createProduct?:  {
    __typename: "Product",
    id: string,
    title: string,
    detail: string,
    brand: string,
    color?: string | null,
    size?: string | null,
    rooms?: number | null,
    washrooms?: number | null,
    model?: string | null,
    price: number,
    image?: string | null,
    productCategory?:  {
      __typename: "ProductCategory",
      id: string,
      title: string,
      image: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      storeProductCategoriesId?: string | null,
    } | null,
    orders?:  {
      __typename: "ModelProductOrderConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    productCategoryProductsId?: string | null,
  } | null,
};

export type UpdateProductMutationVariables = {
  input: UpdateProductInput,
  condition?: ModelProductConditionInput | null,
};

export type UpdateProductMutation = {
  updateProduct?:  {
    __typename: "Product",
    id: string,
    title: string,
    detail: string,
    brand: string,
    color?: string | null,
    size?: string | null,
    rooms?: number | null,
    washrooms?: number | null,
    model?: string | null,
    price: number,
    image?: string | null,
    productCategory?:  {
      __typename: "ProductCategory",
      id: string,
      title: string,
      image: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      storeProductCategoriesId?: string | null,
    } | null,
    orders?:  {
      __typename: "ModelProductOrderConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    productCategoryProductsId?: string | null,
  } | null,
};

export type DeleteProductMutationVariables = {
  input: DeleteProductInput,
  condition?: ModelProductConditionInput | null,
};

export type DeleteProductMutation = {
  deleteProduct?:  {
    __typename: "Product",
    id: string,
    title: string,
    detail: string,
    brand: string,
    color?: string | null,
    size?: string | null,
    rooms?: number | null,
    washrooms?: number | null,
    model?: string | null,
    price: number,
    image?: string | null,
    productCategory?:  {
      __typename: "ProductCategory",
      id: string,
      title: string,
      image: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      storeProductCategoriesId?: string | null,
    } | null,
    orders?:  {
      __typename: "ModelProductOrderConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    productCategoryProductsId?: string | null,
  } | null,
};

export type CreateProductOrderMutationVariables = {
  input: CreateProductOrderInput,
  condition?: ModelProductOrderConditionInput | null,
};

export type CreateProductOrderMutation = {
  createProductOrder?:  {
    __typename: "ProductOrder",
    id: string,
    orderId: string,
    productId: string,
    order:  {
      __typename: "Order",
      id: string,
      startTime: string,
      endTime?: string | null,
      code?: number | null,
      isCancel?: boolean | null,
      isReject?: boolean | null,
      isComplete?: boolean | null,
      distance?: string | null,
      isPicked?: boolean | null,
      isDelivered?: boolean | null,
      onGoing?: boolean | null,
      isAccepted?: boolean | null,
      shopperId?: string | null,
      clientId?: string | null,
      storeId?: string | null,
      orderNote: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      shopperOrdersId?: string | null,
      clientOrdersId?: string | null,
      storeOrdersId?: string | null,
    },
    product:  {
      __typename: "Product",
      id: string,
      title: string,
      detail: string,
      brand: string,
      color?: string | null,
      size?: string | null,
      rooms?: number | null,
      washrooms?: number | null,
      model?: string | null,
      price: number,
      image?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      productCategoryProductsId?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateProductOrderMutationVariables = {
  input: UpdateProductOrderInput,
  condition?: ModelProductOrderConditionInput | null,
};

export type UpdateProductOrderMutation = {
  updateProductOrder?:  {
    __typename: "ProductOrder",
    id: string,
    orderId: string,
    productId: string,
    order:  {
      __typename: "Order",
      id: string,
      startTime: string,
      endTime?: string | null,
      code?: number | null,
      isCancel?: boolean | null,
      isReject?: boolean | null,
      isComplete?: boolean | null,
      distance?: string | null,
      isPicked?: boolean | null,
      isDelivered?: boolean | null,
      onGoing?: boolean | null,
      isAccepted?: boolean | null,
      shopperId?: string | null,
      clientId?: string | null,
      storeId?: string | null,
      orderNote: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      shopperOrdersId?: string | null,
      clientOrdersId?: string | null,
      storeOrdersId?: string | null,
    },
    product:  {
      __typename: "Product",
      id: string,
      title: string,
      detail: string,
      brand: string,
      color?: string | null,
      size?: string | null,
      rooms?: number | null,
      washrooms?: number | null,
      model?: string | null,
      price: number,
      image?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      productCategoryProductsId?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteProductOrderMutationVariables = {
  input: DeleteProductOrderInput,
  condition?: ModelProductOrderConditionInput | null,
};

export type DeleteProductOrderMutation = {
  deleteProductOrder?:  {
    __typename: "ProductOrder",
    id: string,
    orderId: string,
    productId: string,
    order:  {
      __typename: "Order",
      id: string,
      startTime: string,
      endTime?: string | null,
      code?: number | null,
      isCancel?: boolean | null,
      isReject?: boolean | null,
      isComplete?: boolean | null,
      distance?: string | null,
      isPicked?: boolean | null,
      isDelivered?: boolean | null,
      onGoing?: boolean | null,
      isAccepted?: boolean | null,
      shopperId?: string | null,
      clientId?: string | null,
      storeId?: string | null,
      orderNote: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      shopperOrdersId?: string | null,
      clientOrdersId?: string | null,
      storeOrdersId?: string | null,
    },
    product:  {
      __typename: "Product",
      id: string,
      title: string,
      detail: string,
      brand: string,
      color?: string | null,
      size?: string | null,
      rooms?: number | null,
      washrooms?: number | null,
      model?: string | null,
      price: number,
      image?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      productCategoryProductsId?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type HelloQuery = {
  hello: string,
};

export type GetCategoryQueryVariables = {
  id: string,
};

export type GetCategoryQuery = {
  getCategory?:  {
    __typename: "Category",
    id: string,
    title: string,
    image: string,
    stores?:  {
      __typename: "ModelStoreConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListCategoriesQueryVariables = {
  filter?: ModelCategoryFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCategoriesQuery = {
  listCategories?:  {
    __typename: "ModelCategoryConnection",
    items:  Array< {
      __typename: "Category",
      id: string,
      title: string,
      image: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncCategoriesQueryVariables = {
  filter?: ModelCategoryFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncCategoriesQuery = {
  syncCategories?:  {
    __typename: "ModelCategoryConnection",
    items:  Array< {
      __typename: "Category",
      id: string,
      title: string,
      image: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetOrderQueryVariables = {
  id: string,
};

export type GetOrderQuery = {
  getOrder?:  {
    __typename: "Order",
    id: string,
    startTime: string,
    endTime?: string | null,
    code?: number | null,
    isCancel?: boolean | null,
    isReject?: boolean | null,
    isComplete?: boolean | null,
    distance?: string | null,
    isPicked?: boolean | null,
    isDelivered?: boolean | null,
    onGoing?: boolean | null,
    isAccepted?: boolean | null,
    shopperId?: string | null,
    clientId?: string | null,
    storeId?: string | null,
    orderNote: string,
    shopper?:  {
      __typename: "Shopper",
      id: string,
      avatar: string,
      firstName: string,
      lastName: string,
      email: string,
      password: string,
      phone?: string | null,
      deliveryOption?: string | null,
      isOnline?: boolean | null,
      location?: string | null,
      latitude?: number | null,
      longitude?: number | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    store?:  {
      __typename: "Store",
      id: string,
      email: string,
      password: string,
      storeName?: string | null,
      address: string,
      latitude?: number | null,
      longitude?: number | null,
      phone: string,
      outletType: string,
      branches: string,
      headerImg?: string | null,
      logo?: string | null,
      verified: boolean,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      categoryStoresId?: string | null,
    } | null,
    client?:  {
      __typename: "Client",
      id: string,
      firstName?: string | null,
      lastName?: string | null,
      email?: string | null,
      password: string,
      phone?: string | null,
      location?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    products?:  {
      __typename: "ModelProductOrderConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    shopperOrdersId?: string | null,
    clientOrdersId?: string | null,
    storeOrdersId?: string | null,
  } | null,
};

export type ListOrdersQueryVariables = {
  filter?: ModelOrderFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListOrdersQuery = {
  listOrders?:  {
    __typename: "ModelOrderConnection",
    items:  Array< {
      __typename: "Order",
      id: string,
      startTime: string,
      endTime?: string | null,
      code?: number | null,
      isCancel?: boolean | null,
      isReject?: boolean | null,
      isComplete?: boolean | null,
      distance?: string | null,
      isPicked?: boolean | null,
      isDelivered?: boolean | null,
      onGoing?: boolean | null,
      isAccepted?: boolean | null,
      shopperId?: string | null,
      clientId?: string | null,
      storeId?: string | null,
      orderNote: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      shopperOrdersId?: string | null,
      clientOrdersId?: string | null,
      storeOrdersId?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncOrdersQueryVariables = {
  filter?: ModelOrderFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncOrdersQuery = {
  syncOrders?:  {
    __typename: "ModelOrderConnection",
    items:  Array< {
      __typename: "Order",
      id: string,
      startTime: string,
      endTime?: string | null,
      code?: number | null,
      isCancel?: boolean | null,
      isReject?: boolean | null,
      isComplete?: boolean | null,
      distance?: string | null,
      isPicked?: boolean | null,
      isDelivered?: boolean | null,
      onGoing?: boolean | null,
      isAccepted?: boolean | null,
      shopperId?: string | null,
      clientId?: string | null,
      storeId?: string | null,
      orderNote: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      shopperOrdersId?: string | null,
      clientOrdersId?: string | null,
      storeOrdersId?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetShopperQueryVariables = {
  id: string,
};

export type GetShopperQuery = {
  getShopper?:  {
    __typename: "Shopper",
    id: string,
    avatar: string,
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    phone?: string | null,
    deliveryOption?: string | null,
    isOnline?: boolean | null,
    location?: string | null,
    latitude?: number | null,
    longitude?: number | null,
    orders?:  {
      __typename: "ModelOrderConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListShoppersQueryVariables = {
  filter?: ModelShopperFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListShoppersQuery = {
  listShoppers?:  {
    __typename: "ModelShopperConnection",
    items:  Array< {
      __typename: "Shopper",
      id: string,
      avatar: string,
      firstName: string,
      lastName: string,
      email: string,
      password: string,
      phone?: string | null,
      deliveryOption?: string | null,
      isOnline?: boolean | null,
      location?: string | null,
      latitude?: number | null,
      longitude?: number | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncShoppersQueryVariables = {
  filter?: ModelShopperFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncShoppersQuery = {
  syncShoppers?:  {
    __typename: "ModelShopperConnection",
    items:  Array< {
      __typename: "Shopper",
      id: string,
      avatar: string,
      firstName: string,
      lastName: string,
      email: string,
      password: string,
      phone?: string | null,
      deliveryOption?: string | null,
      isOnline?: boolean | null,
      location?: string | null,
      latitude?: number | null,
      longitude?: number | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetClientQueryVariables = {
  id: string,
};

export type GetClientQuery = {
  getClient?:  {
    __typename: "Client",
    id: string,
    firstName?: string | null,
    lastName?: string | null,
    email?: string | null,
    password: string,
    phone?: string | null,
    location?: string | null,
    orders?:  {
      __typename: "ModelOrderConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListClientsQueryVariables = {
  filter?: ModelClientFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListClientsQuery = {
  listClients?:  {
    __typename: "ModelClientConnection",
    items:  Array< {
      __typename: "Client",
      id: string,
      firstName?: string | null,
      lastName?: string | null,
      email?: string | null,
      password: string,
      phone?: string | null,
      location?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncClientsQueryVariables = {
  filter?: ModelClientFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncClientsQuery = {
  syncClients?:  {
    __typename: "ModelClientConnection",
    items:  Array< {
      __typename: "Client",
      id: string,
      firstName?: string | null,
      lastName?: string | null,
      email?: string | null,
      password: string,
      phone?: string | null,
      location?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetStoreQueryVariables = {
  id: string,
};

export type GetStoreQuery = {
  getStore?:  {
    __typename: "Store",
    id: string,
    email: string,
    password: string,
    storeName?: string | null,
    address: string,
    latitude?: number | null,
    longitude?: number | null,
    phone: string,
    outletType: string,
    branches: string,
    headerImg?: string | null,
    logo?: string | null,
    verified: boolean,
    category?:  {
      __typename: "Category",
      id: string,
      title: string,
      image: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    productCategories?:  {
      __typename: "ModelProductCategoryConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    orders?:  {
      __typename: "ModelOrderConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    categoryStoresId?: string | null,
  } | null,
};

export type ListStoresQueryVariables = {
  filter?: ModelStoreFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListStoresQuery = {
  listStores?:  {
    __typename: "ModelStoreConnection",
    items:  Array< {
      __typename: "Store",
      id: string,
      email: string,
      password: string,
      storeName?: string | null,
      address: string,
      latitude?: number | null,
      longitude?: number | null,
      phone: string,
      outletType: string,
      branches: string,
      headerImg?: string | null,
      logo?: string | null,
      verified: boolean,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      categoryStoresId?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncStoresQueryVariables = {
  filter?: ModelStoreFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncStoresQuery = {
  syncStores?:  {
    __typename: "ModelStoreConnection",
    items:  Array< {
      __typename: "Store",
      id: string,
      email: string,
      password: string,
      storeName?: string | null,
      address: string,
      latitude?: number | null,
      longitude?: number | null,
      phone: string,
      outletType: string,
      branches: string,
      headerImg?: string | null,
      logo?: string | null,
      verified: boolean,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      categoryStoresId?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetProductCategoryQueryVariables = {
  id: string,
};

export type GetProductCategoryQuery = {
  getProductCategory?:  {
    __typename: "ProductCategory",
    id: string,
    title: string,
    image: string,
    store?:  {
      __typename: "Store",
      id: string,
      email: string,
      password: string,
      storeName?: string | null,
      address: string,
      latitude?: number | null,
      longitude?: number | null,
      phone: string,
      outletType: string,
      branches: string,
      headerImg?: string | null,
      logo?: string | null,
      verified: boolean,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      categoryStoresId?: string | null,
    } | null,
    products?:  {
      __typename: "ModelProductConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    storeProductCategoriesId?: string | null,
  } | null,
};

export type ListProductCategoriesQueryVariables = {
  filter?: ModelProductCategoryFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListProductCategoriesQuery = {
  listProductCategories?:  {
    __typename: "ModelProductCategoryConnection",
    items:  Array< {
      __typename: "ProductCategory",
      id: string,
      title: string,
      image: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      storeProductCategoriesId?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncProductCategoriesQueryVariables = {
  filter?: ModelProductCategoryFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncProductCategoriesQuery = {
  syncProductCategories?:  {
    __typename: "ModelProductCategoryConnection",
    items:  Array< {
      __typename: "ProductCategory",
      id: string,
      title: string,
      image: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      storeProductCategoriesId?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetProductQueryVariables = {
  id: string,
};

export type GetProductQuery = {
  getProduct?:  {
    __typename: "Product",
    id: string,
    title: string,
    detail: string,
    brand: string,
    color?: string | null,
    size?: string | null,
    rooms?: number | null,
    washrooms?: number | null,
    model?: string | null,
    price: number,
    image?: string | null,
    productCategory?:  {
      __typename: "ProductCategory",
      id: string,
      title: string,
      image: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      storeProductCategoriesId?: string | null,
    } | null,
    orders?:  {
      __typename: "ModelProductOrderConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    productCategoryProductsId?: string | null,
  } | null,
};

export type ListProductsQueryVariables = {
  filter?: ModelProductFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListProductsQuery = {
  listProducts?:  {
    __typename: "ModelProductConnection",
    items:  Array< {
      __typename: "Product",
      id: string,
      title: string,
      detail: string,
      brand: string,
      color?: string | null,
      size?: string | null,
      rooms?: number | null,
      washrooms?: number | null,
      model?: string | null,
      price: number,
      image?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      productCategoryProductsId?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncProductsQueryVariables = {
  filter?: ModelProductFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncProductsQuery = {
  syncProducts?:  {
    __typename: "ModelProductConnection",
    items:  Array< {
      __typename: "Product",
      id: string,
      title: string,
      detail: string,
      brand: string,
      color?: string | null,
      size?: string | null,
      rooms?: number | null,
      washrooms?: number | null,
      model?: string | null,
      price: number,
      image?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      productCategoryProductsId?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetProductOrderQueryVariables = {
  id: string,
};

export type GetProductOrderQuery = {
  getProductOrder?:  {
    __typename: "ProductOrder",
    id: string,
    orderId: string,
    productId: string,
    order:  {
      __typename: "Order",
      id: string,
      startTime: string,
      endTime?: string | null,
      code?: number | null,
      isCancel?: boolean | null,
      isReject?: boolean | null,
      isComplete?: boolean | null,
      distance?: string | null,
      isPicked?: boolean | null,
      isDelivered?: boolean | null,
      onGoing?: boolean | null,
      isAccepted?: boolean | null,
      shopperId?: string | null,
      clientId?: string | null,
      storeId?: string | null,
      orderNote: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      shopperOrdersId?: string | null,
      clientOrdersId?: string | null,
      storeOrdersId?: string | null,
    },
    product:  {
      __typename: "Product",
      id: string,
      title: string,
      detail: string,
      brand: string,
      color?: string | null,
      size?: string | null,
      rooms?: number | null,
      washrooms?: number | null,
      model?: string | null,
      price: number,
      image?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      productCategoryProductsId?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListProductOrdersQueryVariables = {
  filter?: ModelProductOrderFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListProductOrdersQuery = {
  listProductOrders?:  {
    __typename: "ModelProductOrderConnection",
    items:  Array< {
      __typename: "ProductOrder",
      id: string,
      orderId: string,
      productId: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncProductOrdersQueryVariables = {
  filter?: ModelProductOrderFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncProductOrdersQuery = {
  syncProductOrders?:  {
    __typename: "ModelProductOrderConnection",
    items:  Array< {
      __typename: "ProductOrder",
      id: string,
      orderId: string,
      productId: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type ShopperByEmailQueryVariables = {
  email: string,
  id?: ModelIDKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelShopperFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ShopperByEmailQuery = {
  shopperByEmail?:  {
    __typename: "ModelShopperConnection",
    items:  Array< {
      __typename: "Shopper",
      id: string,
      avatar: string,
      firstName: string,
      lastName: string,
      email: string,
      password: string,
      phone?: string | null,
      deliveryOption?: string | null,
      isOnline?: boolean | null,
      location?: string | null,
      latitude?: number | null,
      longitude?: number | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type ClientByEmailQueryVariables = {
  email: string,
  id?: ModelIDKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelClientFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ClientByEmailQuery = {
  clientByEmail?:  {
    __typename: "ModelClientConnection",
    items:  Array< {
      __typename: "Client",
      id: string,
      firstName?: string | null,
      lastName?: string | null,
      email?: string | null,
      password: string,
      phone?: string | null,
      location?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type ProductOrdersByOrderIdQueryVariables = {
  orderId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelProductOrderFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ProductOrdersByOrderIdQuery = {
  productOrdersByOrderId?:  {
    __typename: "ModelProductOrderConnection",
    items:  Array< {
      __typename: "ProductOrder",
      id: string,
      orderId: string,
      productId: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type ProductOrdersByProductIdQueryVariables = {
  productId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelProductOrderFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ProductOrdersByProductIdQuery = {
  productOrdersByProductId?:  {
    __typename: "ModelProductOrderConnection",
    items:  Array< {
      __typename: "ProductOrder",
      id: string,
      orderId: string,
      productId: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type OnShopperLocationUpdateSubscription = {
  onShopperLocationUpdate?:  {
    __typename: "newShopper",
    shopper?:  {
      __typename: "newShoperPayload",
      id: string,
      avatar?: string | null,
      email?: string | null,
      password?: string | null,
      firstName?: string | null,
      lastName?: string | null,
      deliveryOption?: string | null,
      location?: string | null,
      latitude?: number | null,
      longitude?: number | null,
      isOnline?: boolean | null,
      phone: string,
    } | null,
    token?: string | null,
    success?: boolean | null,
    message?: string | null,
  } | null,
};

export type OnCreateCategorySubscriptionVariables = {
  filter?: ModelSubscriptionCategoryFilterInput | null,
};

export type OnCreateCategorySubscription = {
  onCreateCategory?:  {
    __typename: "Category",
    id: string,
    title: string,
    image: string,
    stores?:  {
      __typename: "ModelStoreConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateCategorySubscriptionVariables = {
  filter?: ModelSubscriptionCategoryFilterInput | null,
};

export type OnUpdateCategorySubscription = {
  onUpdateCategory?:  {
    __typename: "Category",
    id: string,
    title: string,
    image: string,
    stores?:  {
      __typename: "ModelStoreConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteCategorySubscriptionVariables = {
  filter?: ModelSubscriptionCategoryFilterInput | null,
};

export type OnDeleteCategorySubscription = {
  onDeleteCategory?:  {
    __typename: "Category",
    id: string,
    title: string,
    image: string,
    stores?:  {
      __typename: "ModelStoreConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateOrderSubscriptionVariables = {
  filter?: ModelSubscriptionOrderFilterInput | null,
};

export type OnCreateOrderSubscription = {
  onCreateOrder?:  {
    __typename: "Order",
    id: string,
    startTime: string,
    endTime?: string | null,
    code?: number | null,
    isCancel?: boolean | null,
    isReject?: boolean | null,
    isComplete?: boolean | null,
    distance?: string | null,
    isPicked?: boolean | null,
    isDelivered?: boolean | null,
    onGoing?: boolean | null,
    isAccepted?: boolean | null,
    shopperId?: string | null,
    clientId?: string | null,
    storeId?: string | null,
    orderNote: string,
    shopper?:  {
      __typename: "Shopper",
      id: string,
      avatar: string,
      firstName: string,
      lastName: string,
      email: string,
      password: string,
      phone?: string | null,
      deliveryOption?: string | null,
      isOnline?: boolean | null,
      location?: string | null,
      latitude?: number | null,
      longitude?: number | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    store?:  {
      __typename: "Store",
      id: string,
      email: string,
      password: string,
      storeName?: string | null,
      address: string,
      latitude?: number | null,
      longitude?: number | null,
      phone: string,
      outletType: string,
      branches: string,
      headerImg?: string | null,
      logo?: string | null,
      verified: boolean,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      categoryStoresId?: string | null,
    } | null,
    client?:  {
      __typename: "Client",
      id: string,
      firstName?: string | null,
      lastName?: string | null,
      email?: string | null,
      password: string,
      phone?: string | null,
      location?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    products?:  {
      __typename: "ModelProductOrderConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    shopperOrdersId?: string | null,
    clientOrdersId?: string | null,
    storeOrdersId?: string | null,
  } | null,
};

export type OnUpdateOrderSubscriptionVariables = {
  filter?: ModelSubscriptionOrderFilterInput | null,
};

export type OnUpdateOrderSubscription = {
  onUpdateOrder?:  {
    __typename: "Order",
    id: string,
    startTime: string,
    endTime?: string | null,
    code?: number | null,
    isCancel?: boolean | null,
    isReject?: boolean | null,
    isComplete?: boolean | null,
    distance?: string | null,
    isPicked?: boolean | null,
    isDelivered?: boolean | null,
    onGoing?: boolean | null,
    isAccepted?: boolean | null,
    shopperId?: string | null,
    clientId?: string | null,
    storeId?: string | null,
    orderNote: string,
    shopper?:  {
      __typename: "Shopper",
      id: string,
      avatar: string,
      firstName: string,
      lastName: string,
      email: string,
      password: string,
      phone?: string | null,
      deliveryOption?: string | null,
      isOnline?: boolean | null,
      location?: string | null,
      latitude?: number | null,
      longitude?: number | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    store?:  {
      __typename: "Store",
      id: string,
      email: string,
      password: string,
      storeName?: string | null,
      address: string,
      latitude?: number | null,
      longitude?: number | null,
      phone: string,
      outletType: string,
      branches: string,
      headerImg?: string | null,
      logo?: string | null,
      verified: boolean,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      categoryStoresId?: string | null,
    } | null,
    client?:  {
      __typename: "Client",
      id: string,
      firstName?: string | null,
      lastName?: string | null,
      email?: string | null,
      password: string,
      phone?: string | null,
      location?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    products?:  {
      __typename: "ModelProductOrderConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    shopperOrdersId?: string | null,
    clientOrdersId?: string | null,
    storeOrdersId?: string | null,
  } | null,
};

export type OnDeleteOrderSubscriptionVariables = {
  filter?: ModelSubscriptionOrderFilterInput | null,
};

export type OnDeleteOrderSubscription = {
  onDeleteOrder?:  {
    __typename: "Order",
    id: string,
    startTime: string,
    endTime?: string | null,
    code?: number | null,
    isCancel?: boolean | null,
    isReject?: boolean | null,
    isComplete?: boolean | null,
    distance?: string | null,
    isPicked?: boolean | null,
    isDelivered?: boolean | null,
    onGoing?: boolean | null,
    isAccepted?: boolean | null,
    shopperId?: string | null,
    clientId?: string | null,
    storeId?: string | null,
    orderNote: string,
    shopper?:  {
      __typename: "Shopper",
      id: string,
      avatar: string,
      firstName: string,
      lastName: string,
      email: string,
      password: string,
      phone?: string | null,
      deliveryOption?: string | null,
      isOnline?: boolean | null,
      location?: string | null,
      latitude?: number | null,
      longitude?: number | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    store?:  {
      __typename: "Store",
      id: string,
      email: string,
      password: string,
      storeName?: string | null,
      address: string,
      latitude?: number | null,
      longitude?: number | null,
      phone: string,
      outletType: string,
      branches: string,
      headerImg?: string | null,
      logo?: string | null,
      verified: boolean,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      categoryStoresId?: string | null,
    } | null,
    client?:  {
      __typename: "Client",
      id: string,
      firstName?: string | null,
      lastName?: string | null,
      email?: string | null,
      password: string,
      phone?: string | null,
      location?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    products?:  {
      __typename: "ModelProductOrderConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    shopperOrdersId?: string | null,
    clientOrdersId?: string | null,
    storeOrdersId?: string | null,
  } | null,
};

export type OnCreateShopperSubscriptionVariables = {
  filter?: ModelSubscriptionShopperFilterInput | null,
};

export type OnCreateShopperSubscription = {
  onCreateShopper?:  {
    __typename: "Shopper",
    id: string,
    avatar: string,
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    phone?: string | null,
    deliveryOption?: string | null,
    isOnline?: boolean | null,
    location?: string | null,
    latitude?: number | null,
    longitude?: number | null,
    orders?:  {
      __typename: "ModelOrderConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateShopperSubscriptionVariables = {
  filter?: ModelSubscriptionShopperFilterInput | null,
};

export type OnUpdateShopperSubscription = {
  onUpdateShopper?:  {
    __typename: "Shopper",
    id: string,
    avatar: string,
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    phone?: string | null,
    deliveryOption?: string | null,
    isOnline?: boolean | null,
    location?: string | null,
    latitude?: number | null,
    longitude?: number | null,
    orders?:  {
      __typename: "ModelOrderConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteShopperSubscriptionVariables = {
  filter?: ModelSubscriptionShopperFilterInput | null,
};

export type OnDeleteShopperSubscription = {
  onDeleteShopper?:  {
    __typename: "Shopper",
    id: string,
    avatar: string,
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    phone?: string | null,
    deliveryOption?: string | null,
    isOnline?: boolean | null,
    location?: string | null,
    latitude?: number | null,
    longitude?: number | null,
    orders?:  {
      __typename: "ModelOrderConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateClientSubscriptionVariables = {
  filter?: ModelSubscriptionClientFilterInput | null,
};

export type OnCreateClientSubscription = {
  onCreateClient?:  {
    __typename: "Client",
    id: string,
    firstName?: string | null,
    lastName?: string | null,
    email?: string | null,
    password: string,
    phone?: string | null,
    location?: string | null,
    orders?:  {
      __typename: "ModelOrderConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateClientSubscriptionVariables = {
  filter?: ModelSubscriptionClientFilterInput | null,
};

export type OnUpdateClientSubscription = {
  onUpdateClient?:  {
    __typename: "Client",
    id: string,
    firstName?: string | null,
    lastName?: string | null,
    email?: string | null,
    password: string,
    phone?: string | null,
    location?: string | null,
    orders?:  {
      __typename: "ModelOrderConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteClientSubscriptionVariables = {
  filter?: ModelSubscriptionClientFilterInput | null,
};

export type OnDeleteClientSubscription = {
  onDeleteClient?:  {
    __typename: "Client",
    id: string,
    firstName?: string | null,
    lastName?: string | null,
    email?: string | null,
    password: string,
    phone?: string | null,
    location?: string | null,
    orders?:  {
      __typename: "ModelOrderConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateStoreSubscriptionVariables = {
  filter?: ModelSubscriptionStoreFilterInput | null,
};

export type OnCreateStoreSubscription = {
  onCreateStore?:  {
    __typename: "Store",
    id: string,
    email: string,
    password: string,
    storeName?: string | null,
    address: string,
    latitude?: number | null,
    longitude?: number | null,
    phone: string,
    outletType: string,
    branches: string,
    headerImg?: string | null,
    logo?: string | null,
    verified: boolean,
    category?:  {
      __typename: "Category",
      id: string,
      title: string,
      image: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    productCategories?:  {
      __typename: "ModelProductCategoryConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    orders?:  {
      __typename: "ModelOrderConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    categoryStoresId?: string | null,
  } | null,
};

export type OnUpdateStoreSubscriptionVariables = {
  filter?: ModelSubscriptionStoreFilterInput | null,
};

export type OnUpdateStoreSubscription = {
  onUpdateStore?:  {
    __typename: "Store",
    id: string,
    email: string,
    password: string,
    storeName?: string | null,
    address: string,
    latitude?: number | null,
    longitude?: number | null,
    phone: string,
    outletType: string,
    branches: string,
    headerImg?: string | null,
    logo?: string | null,
    verified: boolean,
    category?:  {
      __typename: "Category",
      id: string,
      title: string,
      image: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    productCategories?:  {
      __typename: "ModelProductCategoryConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    orders?:  {
      __typename: "ModelOrderConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    categoryStoresId?: string | null,
  } | null,
};

export type OnDeleteStoreSubscriptionVariables = {
  filter?: ModelSubscriptionStoreFilterInput | null,
};

export type OnDeleteStoreSubscription = {
  onDeleteStore?:  {
    __typename: "Store",
    id: string,
    email: string,
    password: string,
    storeName?: string | null,
    address: string,
    latitude?: number | null,
    longitude?: number | null,
    phone: string,
    outletType: string,
    branches: string,
    headerImg?: string | null,
    logo?: string | null,
    verified: boolean,
    category?:  {
      __typename: "Category",
      id: string,
      title: string,
      image: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    productCategories?:  {
      __typename: "ModelProductCategoryConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    orders?:  {
      __typename: "ModelOrderConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    categoryStoresId?: string | null,
  } | null,
};

export type OnCreateProductCategorySubscriptionVariables = {
  filter?: ModelSubscriptionProductCategoryFilterInput | null,
};

export type OnCreateProductCategorySubscription = {
  onCreateProductCategory?:  {
    __typename: "ProductCategory",
    id: string,
    title: string,
    image: string,
    store?:  {
      __typename: "Store",
      id: string,
      email: string,
      password: string,
      storeName?: string | null,
      address: string,
      latitude?: number | null,
      longitude?: number | null,
      phone: string,
      outletType: string,
      branches: string,
      headerImg?: string | null,
      logo?: string | null,
      verified: boolean,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      categoryStoresId?: string | null,
    } | null,
    products?:  {
      __typename: "ModelProductConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    storeProductCategoriesId?: string | null,
  } | null,
};

export type OnUpdateProductCategorySubscriptionVariables = {
  filter?: ModelSubscriptionProductCategoryFilterInput | null,
};

export type OnUpdateProductCategorySubscription = {
  onUpdateProductCategory?:  {
    __typename: "ProductCategory",
    id: string,
    title: string,
    image: string,
    store?:  {
      __typename: "Store",
      id: string,
      email: string,
      password: string,
      storeName?: string | null,
      address: string,
      latitude?: number | null,
      longitude?: number | null,
      phone: string,
      outletType: string,
      branches: string,
      headerImg?: string | null,
      logo?: string | null,
      verified: boolean,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      categoryStoresId?: string | null,
    } | null,
    products?:  {
      __typename: "ModelProductConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    storeProductCategoriesId?: string | null,
  } | null,
};

export type OnDeleteProductCategorySubscriptionVariables = {
  filter?: ModelSubscriptionProductCategoryFilterInput | null,
};

export type OnDeleteProductCategorySubscription = {
  onDeleteProductCategory?:  {
    __typename: "ProductCategory",
    id: string,
    title: string,
    image: string,
    store?:  {
      __typename: "Store",
      id: string,
      email: string,
      password: string,
      storeName?: string | null,
      address: string,
      latitude?: number | null,
      longitude?: number | null,
      phone: string,
      outletType: string,
      branches: string,
      headerImg?: string | null,
      logo?: string | null,
      verified: boolean,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      categoryStoresId?: string | null,
    } | null,
    products?:  {
      __typename: "ModelProductConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    storeProductCategoriesId?: string | null,
  } | null,
};

export type OnCreateProductSubscriptionVariables = {
  filter?: ModelSubscriptionProductFilterInput | null,
};

export type OnCreateProductSubscription = {
  onCreateProduct?:  {
    __typename: "Product",
    id: string,
    title: string,
    detail: string,
    brand: string,
    color?: string | null,
    size?: string | null,
    rooms?: number | null,
    washrooms?: number | null,
    model?: string | null,
    price: number,
    image?: string | null,
    productCategory?:  {
      __typename: "ProductCategory",
      id: string,
      title: string,
      image: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      storeProductCategoriesId?: string | null,
    } | null,
    orders?:  {
      __typename: "ModelProductOrderConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    productCategoryProductsId?: string | null,
  } | null,
};

export type OnUpdateProductSubscriptionVariables = {
  filter?: ModelSubscriptionProductFilterInput | null,
};

export type OnUpdateProductSubscription = {
  onUpdateProduct?:  {
    __typename: "Product",
    id: string,
    title: string,
    detail: string,
    brand: string,
    color?: string | null,
    size?: string | null,
    rooms?: number | null,
    washrooms?: number | null,
    model?: string | null,
    price: number,
    image?: string | null,
    productCategory?:  {
      __typename: "ProductCategory",
      id: string,
      title: string,
      image: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      storeProductCategoriesId?: string | null,
    } | null,
    orders?:  {
      __typename: "ModelProductOrderConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    productCategoryProductsId?: string | null,
  } | null,
};

export type OnDeleteProductSubscriptionVariables = {
  filter?: ModelSubscriptionProductFilterInput | null,
};

export type OnDeleteProductSubscription = {
  onDeleteProduct?:  {
    __typename: "Product",
    id: string,
    title: string,
    detail: string,
    brand: string,
    color?: string | null,
    size?: string | null,
    rooms?: number | null,
    washrooms?: number | null,
    model?: string | null,
    price: number,
    image?: string | null,
    productCategory?:  {
      __typename: "ProductCategory",
      id: string,
      title: string,
      image: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      storeProductCategoriesId?: string | null,
    } | null,
    orders?:  {
      __typename: "ModelProductOrderConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    productCategoryProductsId?: string | null,
  } | null,
};

export type OnCreateProductOrderSubscriptionVariables = {
  filter?: ModelSubscriptionProductOrderFilterInput | null,
};

export type OnCreateProductOrderSubscription = {
  onCreateProductOrder?:  {
    __typename: "ProductOrder",
    id: string,
    orderId: string,
    productId: string,
    order:  {
      __typename: "Order",
      id: string,
      startTime: string,
      endTime?: string | null,
      code?: number | null,
      isCancel?: boolean | null,
      isReject?: boolean | null,
      isComplete?: boolean | null,
      distance?: string | null,
      isPicked?: boolean | null,
      isDelivered?: boolean | null,
      onGoing?: boolean | null,
      isAccepted?: boolean | null,
      shopperId?: string | null,
      clientId?: string | null,
      storeId?: string | null,
      orderNote: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      shopperOrdersId?: string | null,
      clientOrdersId?: string | null,
      storeOrdersId?: string | null,
    },
    product:  {
      __typename: "Product",
      id: string,
      title: string,
      detail: string,
      brand: string,
      color?: string | null,
      size?: string | null,
      rooms?: number | null,
      washrooms?: number | null,
      model?: string | null,
      price: number,
      image?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      productCategoryProductsId?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateProductOrderSubscriptionVariables = {
  filter?: ModelSubscriptionProductOrderFilterInput | null,
};

export type OnUpdateProductOrderSubscription = {
  onUpdateProductOrder?:  {
    __typename: "ProductOrder",
    id: string,
    orderId: string,
    productId: string,
    order:  {
      __typename: "Order",
      id: string,
      startTime: string,
      endTime?: string | null,
      code?: number | null,
      isCancel?: boolean | null,
      isReject?: boolean | null,
      isComplete?: boolean | null,
      distance?: string | null,
      isPicked?: boolean | null,
      isDelivered?: boolean | null,
      onGoing?: boolean | null,
      isAccepted?: boolean | null,
      shopperId?: string | null,
      clientId?: string | null,
      storeId?: string | null,
      orderNote: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      shopperOrdersId?: string | null,
      clientOrdersId?: string | null,
      storeOrdersId?: string | null,
    },
    product:  {
      __typename: "Product",
      id: string,
      title: string,
      detail: string,
      brand: string,
      color?: string | null,
      size?: string | null,
      rooms?: number | null,
      washrooms?: number | null,
      model?: string | null,
      price: number,
      image?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      productCategoryProductsId?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteProductOrderSubscriptionVariables = {
  filter?: ModelSubscriptionProductOrderFilterInput | null,
};

export type OnDeleteProductOrderSubscription = {
  onDeleteProductOrder?:  {
    __typename: "ProductOrder",
    id: string,
    orderId: string,
    productId: string,
    order:  {
      __typename: "Order",
      id: string,
      startTime: string,
      endTime?: string | null,
      code?: number | null,
      isCancel?: boolean | null,
      isReject?: boolean | null,
      isComplete?: boolean | null,
      distance?: string | null,
      isPicked?: boolean | null,
      isDelivered?: boolean | null,
      onGoing?: boolean | null,
      isAccepted?: boolean | null,
      shopperId?: string | null,
      clientId?: string | null,
      storeId?: string | null,
      orderNote: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      shopperOrdersId?: string | null,
      clientOrdersId?: string | null,
      storeOrdersId?: string | null,
    },
    product:  {
      __typename: "Product",
      id: string,
      title: string,
      detail: string,
      brand: string,
      color?: string | null,
      size?: string | null,
      rooms?: number | null,
      washrooms?: number | null,
      model?: string | null,
      price: number,
      image?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      productCategoryProductsId?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};
