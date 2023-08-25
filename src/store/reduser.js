import { todoReducer } from './todo/todoReduser';
import { usersReduser } from './users/slice';
import { productsReduser } from './products/slice';
import { authReducer } from './auth/slice';

export const reducer = {
  todo: todoReducer,
  users: usersReduser,
  products: productsReduser,
  auth: authReducer,
};
