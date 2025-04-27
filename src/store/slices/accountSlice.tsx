import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RoleList } from '../interfaces/accountInterface';

export interface AccountState {
  currentRole?: RoleList;
  roleList?: RoleList[];
  name?: string;
  position?: string;
  img?: string;
}

const initialState: AccountState = {
  currentRole: {
    name: 'member',
    code: 'MEMBER',
  },
  roleList: [
    {
      name: 'member',
      code: 'MEMBER',
    },
  ],
  name: 'Thanaphong Songsisai',
  position: 'Software Developer',
  img: 'https://cdn.balkan.app/shared/1.jpg',
};

export const accountSlice = createSlice({
  name: 'account',
  initialState: initialState,
  reducers: {
    setCurrentRole: (state, action: PayloadAction<RoleList | undefined>) => {
      state.currentRole = action.payload;
    },
    setRoleList: (state, action: PayloadAction<RoleList[] | undefined>) => {
      state.roleList = action.payload;
    },
  },
});

export const { setCurrentRole, setRoleList } = accountSlice.actions;
export default accountSlice.reducer;
