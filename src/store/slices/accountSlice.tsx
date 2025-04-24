import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RoleList } from '../interfaces/accountInterface';

export interface AccountState {
  currentRole?: RoleList;
  roleList?: RoleList[];
}

const initialState: AccountState = {
  currentRole: undefined,
  roleList: undefined,
};

export const accountSlice = createSlice({
  name: 'account',
  initialState: initialState,
  reducers: {
    setCurrentRole: (state, action: PayloadAction<RoleList>) => {
      state.currentRole = action.payload;
    },
    setRoleList: (state, action: PayloadAction<RoleList[]>) => {
      state.roleList = action.payload;
    },
  },
});

export const { setCurrentRole, setRoleList } = accountSlice.actions;
export default accountSlice.reducer;
