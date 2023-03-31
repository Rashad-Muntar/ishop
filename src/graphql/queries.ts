/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const hello = /* GraphQL */ `
  query Hello {
    hello
  }
`;
export const getCategory = /* GraphQL */ `
  query GetCategory($id: ID!) {
    getCategory(id: $id) {
      id
      title
      image
      stores {
        items {
          id
        email
        password
        storeName
        address
        latitude
        longitude
        phone
        outletType
        branches
        headerImg
        logo
        verified
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listCategories = /* GraphQL */ `
  query ListCategories(
    $filter: ModelCategoryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCategories(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        image
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncCategories = /* GraphQL */ `
  query SyncCategories(
    $filter: ModelCategoryFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncCategories(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        title
        image
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getOrder = /* GraphQL */ `
  query GetOrder($id: ID!) {
    getOrder(id: $id) {
      id
      startTime
      endTime
      code
      isCancel
      isComplete
      isPicked
      isDelivered
      onGoing
      shopper {
        id
        avatar
        firstName
        lastName
        email
        password
        phone
        deliveryOption
        isOnline
        location
        latitude
        longitude
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      store {
        id
        email
        password
        storeName
        address
        latitude
        longitude
        phone
        outletType
        branches
        headerImg
        logo
        verified
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        categoryStoresId
      }
      client {
        id
        firstName
        lastName
        email
        password
        phone
        location
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      products {
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      shopperOrdersId
      clientOrdersId
      storeOrdersId
    }
  }
`;
export const listOrders = /* GraphQL */ `
  query ListOrders(
    $filter: ModelOrderFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOrders(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        startTime
        endTime
        code
        isCancel
        isComplete
        isPicked
        isDelivered
        onGoing
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        shopperOrdersId
        clientOrdersId
        storeOrdersId
      }
      nextToken
      startedAt
    }
  }
`;
export const syncOrders = /* GraphQL */ `
  query SyncOrders(
    $filter: ModelOrderFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncOrders(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        startTime
        endTime
        code
        isCancel
        isComplete
        isPicked
        isDelivered
        onGoing
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        shopperOrdersId
        clientOrdersId
        storeOrdersId
      }
      nextToken
      startedAt
    }
  }
`;
export const getShopper = /* GraphQL */ `
  query GetShopper($id: ID!) {
    getShopper(id: $id) {
      id
      avatar
      firstName
      lastName
      email
      password
      phone
      deliveryOption
      isOnline
      location
      latitude
      longitude
      orders {
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listShoppers = /* GraphQL */ `
  query ListShoppers(
    $filter: ModelShopperFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listShoppers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        avatar
        firstName
        lastName
        email
        password
        phone
        deliveryOption
        isOnline
        location
        latitude
        longitude
      }
    }
  }
`;
export const syncShoppers = /* GraphQL */ `
  query SyncShoppers(
    $filter: ModelShopperFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncShoppers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        avatar
        firstName
        lastName
        email
        password
        phone
        deliveryOption
        isOnline
        location
        latitude
        longitude
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getClient = /* GraphQL */ `
  query GetClient($id: ID!) {
    getClient(id: $id) {
      id
      firstName
      lastName
      email
      password
      phone
      location
      orders {
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listClients = /* GraphQL */ `
  query ListClients(
    $filter: ModelClientFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listClients(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        firstName
        lastName
        email
        password
        phone
        location
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncClients = /* GraphQL */ `
  query SyncClients(
    $filter: ModelClientFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncClients(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        firstName
        lastName
        email
        password
        phone
        location
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getStore = /* GraphQL */ `
  query GetStore($id: ID!) {
    getStore(id: $id) {
      id
      email
      password
      storeName
      address
      latitude
      longitude
      phone
      outletType
      branches
      headerImg
      logo
      verified
      category {
        id
        title
        image
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      productCategories {
        nextToken
        startedAt
      }
      orders {
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      categoryStoresId
    }
  }
`;
export const listStores = /* GraphQL */ `
  query ListStores(
    $filter: ModelStoreFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStores(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        email
        password
        storeName
        address
        latitude
        longitude
        phone
        outletType
        branches
        headerImg
        logo
        verified
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        categoryStoresId
      }
      nextToken
      startedAt
    }
  }
`;
export const syncStores = /* GraphQL */ `
  query SyncStores(
    $filter: ModelStoreFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncStores(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        email
        password
        storeName
        address
        latitude
        longitude
        phone
        outletType
        branches
        headerImg
        logo
        verified
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        categoryStoresId
      }
      nextToken
      startedAt
    }
  }
`;
export const getProductCategory = /* GraphQL */ `
  query GetProductCategory($id: ID!) {
    getProductCategory(id: $id) {
      id
      title
      image
      store {
        id
        email
        password
        storeName
        address
        latitude
        longitude
        phone
        outletType
        branches
        headerImg
        logo
        verified
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        categoryStoresId
      }
      products {
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      storeProductCategoriesId
    }
  }
`;
export const listProductCategories = /* GraphQL */ `
  query ListProductCategories(
    $filter: ModelProductCategoryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProductCategories(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        title
        image
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        storeProductCategoriesId
      }
      nextToken
      startedAt
    }
  }
`;
export const syncProductCategories = /* GraphQL */ `
  query SyncProductCategories(
    $filter: ModelProductCategoryFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncProductCategories(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        title
        image
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        storeProductCategoriesId
      }
      nextToken
      startedAt
    }
  }
`;
export const getProduct = /* GraphQL */ `
  query GetProduct($id: ID!) {
    getProduct(id: $id) {
      id
      title
      detail
      brand
      color
      size
      rooms
      washrooms
      model
      price
      image
      productCategory {
        id
        title
        image
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        storeProductCategoriesId
      }
      order {
        id
        startTime
        endTime
        code
        isCancel
        isComplete
        isPicked
        isDelivered
        onGoing
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        shopperOrdersId
        clientOrdersId
        storeOrdersId
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      orderProductsId
      productCategoryProductsId
    }
  }
`;
export const listProducts = /* GraphQL */ `
  query ListProducts(
    $filter: ModelProductFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProducts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        detail
        brand
        color
        size
        rooms
        washrooms
        model
        price
        image
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        orderProductsId
        productCategoryProductsId
      }
      nextToken
      startedAt
    }
  }
`;
export const syncProducts = /* GraphQL */ `
  query SyncProducts(
    $filter: ModelProductFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncProducts(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        title
        detail
        brand
        color
        size
        rooms
        washrooms
        model
        price
        image
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        orderProductsId
        productCategoryProductsId
      }
      nextToken
      startedAt
    }
  }
`;
export const shopperByEmail = /* GraphQL */ `
  query ShopperByEmail(
    $email: String!
    $id: ModelIDKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelShopperFilterInput
    $limit: Int
    $nextToken: String
  ) {
    shopperByEmail(
      email: $email
      id: $id
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        avatar
        firstName
        lastName
        email
        password
        phone
        deliveryOption
        isOnline
        location
        latitude
        longitude
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
