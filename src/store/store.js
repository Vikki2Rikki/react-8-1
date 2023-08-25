import { reducer } from './reduser';
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({ reducer });
