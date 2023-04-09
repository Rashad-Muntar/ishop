/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const phoneVerification = /* GraphQL */ `
  mutation PhoneVerification($phoneNumber: String!) {
    phoneVerification(phoneNumber: $phoneNumber)
  }
`;
export const codeVerification = /* GraphQL */ `
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
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      token
      success
      message
    }
  }
`;
export const socialAuth = /* GraphQL */ `
  mutation SocialAuth(
    $firstName: String!
    $lastName: String!
    $email: String!
    $avatar: String!
  ) {
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
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      token
      success
      message
    }
  }
`;
export const createPaymentIntent = /* GraphQL */ `
  mutation CreatePaymentIntent($amount: Float!) {
    createPaymentIntent(amount: $amount) {
      paymentIntent
      ephemeralKey
      customer
      publishableKey
    }
  }
`;
export const shopperSignUp = /* GraphQL */ `
  mutation ShopperSignUp(
    $avatar: String!
    $email: String!
    $password: String!
    $firstName: String!
    $lastName: String!
    $deliveryOption: String!
    $location: String!
    $phone: String!
  ) {
    shopperSignUp(
      avatar: $avatar
      email: $email
      password: $password
      firstName: $firstName
      lastName: $lastName
      deliveryOption: $deliveryOption
      location: $location
      phone: $phone
    ) {
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
`;
export const shoppeLocationUpdate = /* GraphQL */ `
  mutation ShoppeLocationUpdate(
    $id: ID!
    $latitude: Float
    $longitude: Float
    $isOnline: Boolean
  ) {
    shoppeLocationUpdate(
      id: $id
      latitude: $latitude
      longitude: $longitude
      isOnline: $isOnline
    ) {
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
`;
export const shopperLogin = /* GraphQL */ `
  mutation ShopperLogin($email: String!, $password: String!) {
    shopperLogin(email: $email, password: $password) {
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
`;
export const storeSignup = /* GraphQL */ `
  mutation StoreSignup(
    $email: String!
    $password: String!
    $storeName: String
    $address: String!
    $phone: String!
    $outletType: String!
    $branches: String!
    $categoryStoresId: ID
    $headerImg: String
    $logo: String
    $verified: Boolean!
  ) {
    storeSignup(
      email: $email
      password: $password
      storeName: $storeName
      address: $address
      phone: $phone
      outletType: $outletType
      branches: $branches
      categoryStoresId: $categoryStoresId
      headerImg: $headerImg
      logo: $logo
      verified: $verified
    ) {
      store {
        id
        avatar
        firstName
        lastName
        email
        phone
        location
      }
      token
    }
  }
`;
export const storeLogin = /* GraphQL */ `
  mutation StoreLogin($email: String!, $password: String!) {
    storeLogin(email: $email, password: $password) {
      store {
        id
        avatar
        firstName
        lastName
        email
        phone
        location
      }
      token
    }
  }
`;
export const getVideoToken = /* GraphQL */ `
  mutation GetVideoToken($userName: String!) {
    getVideoToken(userName: $userName)
  }
`;
export const createCategory = /* GraphQL */ `
  mutation CreateCategory(
    $input: CreateCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    createCategory(input: $input, condition: $condition) {
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
`;
export const updateCategory = /* GraphQL */ `
  mutation UpdateCategory(
    $input: UpdateCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    updateCategory(input: $input, condition: $condition) {
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
`;
export const deleteCategory = /* GraphQL */ `
  mutation DeleteCategory(
    $input: DeleteCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    deleteCategory(input: $input, condition: $condition) {
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
`;
export const createOrder = /* GraphQL */ `
  mutation CreateOrder(
    $input: CreateOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    createOrder(input: $input, condition: $condition) {
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
`;
export const updateOrder = /* GraphQL */ `
  mutation UpdateOrder(
    $input: UpdateOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    updateOrder(input: $input, condition: $condition) {
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
`;
export const deleteOrder = /* GraphQL */ `
  mutation DeleteOrder(
    $input: DeleteOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    deleteOrder(input: $input, condition: $condition) {
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
`;
export const createShopper = /* GraphQL */ `
  mutation CreateShopper(
    $input: CreateShopperInput!
    $condition: ModelShopperConditionInput
  ) {
    createShopper(input: $input, condition: $condition) {
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
export const updateShopper = /* GraphQL */ `
  mutation UpdateShopper(
    $input: UpdateShopperInput!
    $condition: ModelShopperConditionInput
  ) {
    updateShopper(input: $input, condition: $condition) {
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
export const deleteShopper = /* GraphQL */ `
  mutation DeleteShopper(
    $input: DeleteShopperInput!
    $condition: ModelShopperConditionInput
  ) {
    deleteShopper(input: $input, condition: $condition) {
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
export const createClient = /* GraphQL */ `
  mutation CreateClient(
    $input: CreateClientInput!
    $condition: ModelClientConditionInput
  ) {
    createClient(input: $input, condition: $condition) {
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
export const updateClient = /* GraphQL */ `
  mutation UpdateClient(
    $input: UpdateClientInput!
    $condition: ModelClientConditionInput
  ) {
    updateClient(input: $input, condition: $condition) {
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
export const deleteClient = /* GraphQL */ `
  mutation DeleteClient(
    $input: DeleteClientInput!
    $condition: ModelClientConditionInput
  ) {
    deleteClient(input: $input, condition: $condition) {
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
export const createStore = /* GraphQL */ `
  mutation CreateStore(
    $input: CreateStoreInput!
    $condition: ModelStoreConditionInput
  ) {
    createStore(input: $input, condition: $condition) {
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
export const updateStore = /* GraphQL */ `
  mutation UpdateStore(
    $input: UpdateStoreInput!
    $condition: ModelStoreConditionInput
  ) {
    updateStore(input: $input, condition: $condition) {
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
export const deleteStore = /* GraphQL */ `
  mutation DeleteStore(
    $input: DeleteStoreInput!
    $condition: ModelStoreConditionInput
  ) {
    deleteStore(input: $input, condition: $condition) {
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
export const createProductCategory = /* GraphQL */ `
  mutation CreateProductCategory(
    $input: CreateProductCategoryInput!
    $condition: ModelProductCategoryConditionInput
  ) {
    createProductCategory(input: $input, condition: $condition) {
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
export const updateProductCategory = /* GraphQL */ `
  mutation UpdateProductCategory(
    $input: UpdateProductCategoryInput!
    $condition: ModelProductCategoryConditionInput
  ) {
    updateProductCategory(input: $input, condition: $condition) {
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
export const deleteProductCategory = /* GraphQL */ `
  mutation DeleteProductCategory(
    $input: DeleteProductCategoryInput!
    $condition: ModelProductCategoryConditionInput
  ) {
    deleteProductCategory(input: $input, condition: $condition) {
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
export const createProduct = /* GraphQL */ `
  mutation CreateProduct(
    $input: CreateProductInput!
    $condition: ModelProductConditionInput
  ) {
    createProduct(input: $input, condition: $condition) {
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
`;
export const updateProduct = /* GraphQL */ `
  mutation UpdateProduct(
    $input: UpdateProductInput!
    $condition: ModelProductConditionInput
  ) {
    updateProduct(input: $input, condition: $condition) {
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
`;
export const deleteProduct = /* GraphQL */ `
  mutation DeleteProduct(
    $input: DeleteProductInput!
    $condition: ModelProductConditionInput
  ) {
    deleteProduct(input: $input, condition: $condition) {
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
`;
export const createProductOrder = /* GraphQL */ `
  mutation CreateProductOrder(
    $input: CreateProductOrderInput!
    $condition: ModelProductOrderConditionInput
  ) {
    createProductOrder(input: $input, condition: $condition) {
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
`;
export const updateProductOrder = /* GraphQL */ `
  mutation UpdateProductOrder(
    $input: UpdateProductOrderInput!
    $condition: ModelProductOrderConditionInput
  ) {
    updateProductOrder(input: $input, condition: $condition) {
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
`;
export const deleteProductOrder = /* GraphQL */ `
  mutation DeleteProductOrder(
    $input: DeleteProductOrderInput!
    $condition: ModelProductOrderConditionInput
  ) {
    deleteProductOrder(input: $input, condition: $condition) {
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
`;
