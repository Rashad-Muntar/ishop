/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onShopperLocationUpdate = /* GraphQL */ `
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
        isOnline
        phone
      }
      token
      success
      message
    }
  }
`
export const onCreateCategory = /* GraphQL */ `
  subscription OnCreateCategory($filter: ModelSubscriptionCategoryFilterInput) {
    onCreateCategory(filter: $filter) {
      id
      title
      image
      stores {
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
`
export const onUpdateCategory = /* GraphQL */ `
  subscription OnUpdateCategory($filter: ModelSubscriptionCategoryFilterInput) {
    onUpdateCategory(filter: $filter) {
      id
      title
      image
      stores {
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
`
export const onDeleteCategory = /* GraphQL */ `
  subscription OnDeleteCategory($filter: ModelSubscriptionCategoryFilterInput) {
    onDeleteCategory(filter: $filter) {
      id
      title
      image
      stores {
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
`
export const onCreateOrder = /* GraphQL */ `
  subscription OnCreateOrder($filter: ModelSubscriptionOrderFilterInput) {
    onCreateOrder(filter: $filter) {
      id
      startTime
      endTime
      code
      isCancel
      isReject
      isComplete
      distance
      isPicked
      isDelivered
      onGoing
      isAccepted
      shopperId
      clientId
      storeId
      orderNote
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
      }
      products {
        nextToken
      }
      shopperOrdersId
      clientOrdersId
      storeOrdersId
    }
  }
`
export const onUpdateOrder = /* GraphQL */ `
  subscription OnUpdateOrder($filter: ModelSubscriptionOrderFilterInput) {
    onUpdateOrder(filter: $filter) {
      id
      startTime
      endTime
      code
      isCancel
      isComplete
      distance
      isPicked
      isDelivered
      onGoing
      isAccepted
      clientId
      shopperId
      orderNote
      isReject
      store {
        storeName
        logo
        address
      }
      client {
        firstName
        lastName
        location
      }
    }
  }
`
export const onDeleteOrder = /* GraphQL */ `
  subscription OnDeleteOrder($filter: ModelSubscriptionOrderFilterInput) {
    onDeleteOrder(filter: $filter) {
      id
      startTime
      endTime
      code
      isCancel
      isReject
      isComplete
      distance
      isPicked
      isDelivered
      onGoing
      isAccepted
      shopperId
      clientId
      storeId
      orderNote
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
`
export const onCreateShopper = /* GraphQL */ `
  subscription OnCreateShopper($filter: ModelSubscriptionShopperFilterInput) {
    onCreateShopper(filter: $filter) {
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
`
export const onUpdateShopper = /* GraphQL */ `
  subscription OnUpdateShopper($filter: ModelSubscriptionShopperFilterInput) {
    onUpdateShopper(filter: $filter) {
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
`
export const onDeleteShopper = /* GraphQL */ `
  subscription OnDeleteShopper($filter: ModelSubscriptionShopperFilterInput) {
    onDeleteShopper(filter: $filter) {
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
`
export const onCreateClient = /* GraphQL */ `
  subscription OnCreateClient($filter: ModelSubscriptionClientFilterInput) {
    onCreateClient(filter: $filter) {
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
`
export const onUpdateClient = /* GraphQL */ `
  subscription OnUpdateClient($filter: ModelSubscriptionClientFilterInput) {
    onUpdateClient(filter: $filter) {
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
`
export const onDeleteClient = /* GraphQL */ `
  subscription OnDeleteClient($filter: ModelSubscriptionClientFilterInput) {
    onDeleteClient(filter: $filter) {
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
`
export const onCreateStore = /* GraphQL */ `
  subscription OnCreateStore($filter: ModelSubscriptionStoreFilterInput) {
    onCreateStore(filter: $filter) {
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
`
export const onUpdateStore = /* GraphQL */ `
  subscription OnUpdateStore($filter: ModelSubscriptionStoreFilterInput) {
    onUpdateStore(filter: $filter) {
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
`
export const onDeleteStore = /* GraphQL */ `
  subscription OnDeleteStore($filter: ModelSubscriptionStoreFilterInput) {
    onDeleteStore(filter: $filter) {
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
`
export const onCreateProductCategory = /* GraphQL */ `
  subscription OnCreateProductCategory(
    $filter: ModelSubscriptionProductCategoryFilterInput
  ) {
    onCreateProductCategory(filter: $filter) {
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
`
export const onUpdateProductCategory = /* GraphQL */ `
  subscription OnUpdateProductCategory(
    $filter: ModelSubscriptionProductCategoryFilterInput
  ) {
    onUpdateProductCategory(filter: $filter) {
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
`
export const onDeleteProductCategory = /* GraphQL */ `
  subscription OnDeleteProductCategory(
    $filter: ModelSubscriptionProductCategoryFilterInput
  ) {
    onDeleteProductCategory(filter: $filter) {
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
`
export const onCreateProduct = /* GraphQL */ `
  subscription OnCreateProduct($filter: ModelSubscriptionProductFilterInput) {
    onCreateProduct(filter: $filter) {
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
      orders {
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      productCategoryProductsId
    }
  }
`
export const onUpdateProduct = /* GraphQL */ `
  subscription OnUpdateProduct($filter: ModelSubscriptionProductFilterInput) {
    onUpdateProduct(filter: $filter) {
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
      orders {
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      productCategoryProductsId
    }
  }
`
export const onDeleteProduct = /* GraphQL */ `
  subscription OnDeleteProduct($filter: ModelSubscriptionProductFilterInput) {
    onDeleteProduct(filter: $filter) {
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
      orders {
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      productCategoryProductsId
    }
  }
`
export const onCreateProductOrder = /* GraphQL */ `
  subscription OnCreateProductOrder(
    $filter: ModelSubscriptionProductOrderFilterInput
  ) {
    onCreateProductOrder(filter: $filter) {
      id
      orderId
      productId
      order {
        id
        startTime
        endTime
        code
        isCancel
        isReject
        isComplete
        distance
        isPicked
        isDelivered
        onGoing
        isAccepted
        shopperId
        clientId
        storeId
        orderNote
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        shopperOrdersId
        clientOrdersId
        storeOrdersId
      }
      product {
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
        productCategoryProductsId
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`
export const onUpdateProductOrder = /* GraphQL */ `
  subscription OnUpdateProductOrder(
    $filter: ModelSubscriptionProductOrderFilterInput
  ) {
    onUpdateProductOrder(filter: $filter) {
      id
      orderId
      productId
      order {
        id
        startTime
        endTime
        code
        isCancel
        isReject
        isComplete
        distance
        isPicked
        isDelivered
        onGoing
        isAccepted
        shopperId
        clientId
        storeId
        orderNote
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        shopperOrdersId
        clientOrdersId
        storeOrdersId
      }
      product {
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
        productCategoryProductsId
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`
export const onDeleteProductOrder = /* GraphQL */ `
  subscription OnDeleteProductOrder(
    $filter: ModelSubscriptionProductOrderFilterInput
  ) {
    onDeleteProductOrder(filter: $filter) {
      id
      orderId
      productId
      order {
        id
        startTime
        endTime
        code
        isCancel
        isReject
        isComplete
        distance
        isPicked
        isDelivered
        onGoing
        isAccepted
        shopperId
        clientId
        storeId
        orderNote
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        shopperOrdersId
        clientOrdersId
        storeOrdersId
      }
      product {
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
        productCategoryProductsId
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`
