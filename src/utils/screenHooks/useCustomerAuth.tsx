// import { usePhoneVerification } from "../../api/generated/graphql";
// import { useGraphQLClient } from "../serviceHooks/useGraphqlClient";
// import React, { useCallback } from "react"

// const useCustomerAuth = (number:string) => {
//     const graphQLClient = useGraphQLClient()
//     const auth = usePhoneVerification()

//     const mutateAuth = useCallback(
//         async (index: number) => {
//           const ratings = index === movie.ratings ? 0 : index
//           await auth.mutateAsync({ phoneNumber: number });
//         },
//         [number, auth]
//       );
    
//       return { mutateRatings, isSuccess: ratingsMutation.isSuccess };
// }