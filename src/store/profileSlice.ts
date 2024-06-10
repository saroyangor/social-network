// import axios, { AxiosError } from 'axios';
// import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';

// import { BackendError, Profile, ProfilesState } from '@/types';

// const initialState: ProfilesState = {
//   profiles: [],
//   loading: false,
//   error: null,
// };

// export const fetchProfiles = createAsyncThunk<Profile[], void, { rejectValue: string }>(
//   'profiles/fetchProfiles',
//   async (_, { rejectWithValue }) => {
//     try {
//       const response = await axios.get('http://ec2-3-120-248-65.eu-central-1.compute.amazonaws.com/user_profiles', {
//         headers: {
//           Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjo1NiwiZW1haWwiOiJ1c2VyMTIzQGdtYWlsLmNvbSIsInVzZXJuYW1lIjoidXNlcjEyMyIsInJvbGUiOjEsImlhdCI6MTcxNzI2MzYzNywiZXhwIjoxNzE3MjY3MjM3fQ.lCfS67kb01NbCe9YD_-LEr_f0VxFqpW5UTFU2PnOu4I',
//         },
//       });

//       return response.data;
//     } catch (error) {
//       const err = error as AxiosError<BackendError>;
//       return rejectWithValue(err.response?.data?.message ?? 'Failed to fetch profiles');
//     }
//   },
// );

// const profileSlice = createSlice({
//   name: 'profiles',
//   initialState,
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchProfiles.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(fetchProfiles.fulfilled, (state, action: PayloadAction<Profile[]>) => {
//         state.loading = false;
//         state.profiles = action.payload;
//       })
//       .addCase(fetchProfiles.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload ?? 'Failed to fetch profiles';
//       });
//   },
// });

// export default profileSlice.reducer;
