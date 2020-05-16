import {
  CustomerState, CusomerActionTypes, 
  CREATE_CUSTOMER,
  UPDATE_CUSTOMER,
  DELETE_CUSTOMER,
  GET_CUSTOMER,
  LIST_CUSTOMER,
  NEW_CUSTOMER
} from '../store/types';
import { Entity } from '../types';

export function customerReducer(
  state: CustomerState = {
    isFetching: true,
    customer: {} as Entity,
    customerList: []
  },
  action: CusomerActionTypes
) {
  console.log(action)
  switch (action.type) {
    // case LOAD_CUSTOMERS_REQUEST:
    //   return Object.assign({}, state, {
    //     isFetching: true,
    //     filters: null // action.filters
    //   });
    case LIST_CUSTOMER:
      return Object.assign({}, state, {
        isFetching: false,
        customerList: action.payload,
        errorMessage: ""
        // ? JSON.parse(action.payload).filter(e => {
        //     if (action.filters) {
        //       if (action.filters.firstname && action.filters.lastname)
        //         return (
        //           e.firstname.indexOf(action.filters.firstname) > -1 &&
        //           e.lastname.indexOf(action.filters.lastname) > -1
        //         );
        //       else if (action.filters.firstname)
        //         return e.firstname.indexOf(action.filters.firstname) > -1;
        //       else if (action.filters.lastname)
        //         return e.lastname.indexOf(action.filters.lastname) > -1;
        //     }
        //     return true"error";
        //   })
        // : [],

      });
    // case LOAD_CUSTOMERS_FAILURE:
    //   return Object.assign({}, state, {
    //     isFetching: false,
    //     errorMessage:  action.payload // action.message
    //   });
    // case GET_CUSTOMER_REQUEST:
    //   return Object.assign({}, state, {
    //     isFetching: true,
    //     authenticated: action.authenticated || false
    //   });
    case NEW_CUSTOMER:
    case GET_CUSTOMER:
      // return Object.assign({}, state, {
      //   isFetching: false,
      //   customer: action.payload,
      //   errorMessage: action.error
      // });
    // case GET_CUSTOMER_FAILURE:
    //   return Object.assign({}, state, {
    //     isFetching: false,
    //     errorMessage: action.message
    //   });
    // case UPDATE_CUSTOMER_REQUEST:
    //   return Object.assign({}, state, {
    //     isFetching: true
    //   });
    case UPDATE_CUSTOMER:
      return Object.assign({}, state, {
        isFetching: false,
        customer: action.payload,
        errorMessage: action.error
      });
    // case UPDATE_CUSTOMER_FAILURE:
    //   return Object.assign({}, state, {
    //     isFetching: false,
    //     customer: {},
    //     errorMessage: action.error.statusText || action.error.status,
    //     updateSuccess: false,
    //     updateError: action.message
    //   });
    // case NEW_CUSTOMER_REQUEST:
    //   return Object.assign({}, state, {
    //     isFetching: false,
    //     customer: {},
    //     errorMessage: action.message
    //   });
    // case ADD_CUSTOMER_REQUEST:
    //   return Object.assign({}, state, {
    //     isFetching: true
    //   });
    // case CREATE_CUSTOMER:
    //   return Object.assign({}, state, {
    //     isFetching: false,
    //     addSuccess: true,
    //     authenticated: action.authenticated || false
    //   });
    // case ADD_CUSTOMER_FAILURE:
    //   return Object.assign({}, state, {
    //     isFetching: false,
    //     errorMessage: action.error.statusText || action.error.status,
    //     addSuccess: false
    //   });
    // case DELETE_CUSTOMER_REQUEST:
    //   return Object.assign({}, state, {
    //     isFetching: true
    //   });
    case DELETE_CUSTOMER:
      return Object.assign({}, state, {
        isFetching: false,
        errorMessage: action.error
        
      });
    // case DELETE_CUSTOMER_FAILURE:
    //   return Object.assign({}, state, {
    //     isFetching: false,
    //     errorMessage: action.error.statusText || action.error.status,
    //     deleteSuccess: false
    //   });
    default:
      return state;
  }
}