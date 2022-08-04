import { GET_ALL_CONTACTS} from './actionType';
const initialContacts ={
  contacts:[{name:"kala",phoneNumber:"123456789", email:"kala@gmail.com"}]
}
 export const contactReducer=(state=initialContacts,action)=>{
  switch(action.type){
  case  GET_ALL_CONTACTS:
    return{...state}
    default:
      return state

  }
}