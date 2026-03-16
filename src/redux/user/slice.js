import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    user: null,
    users: [],
    loading: false,
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        createUser: (state, action) => {
            
            if(action.payload.name.length <= 4){
                alert("O NOME DEVE CONTER MAIS DE 4 CARACTERES!")
                return { ...state}
            }

            return {
               ...state,
               user:{
                    name: action.payload.name,
                    email: action.payload.email,
                    address: null
               }
            }
        },
        logoutUser: (state) => {

            return {
                ...state,
                user: null
            }

        },
        addAddress: (state, action) => {
            if(action.payload.location === '' || action.payload.number === ''){
                alert("PREENCHA TODOS OS CAMPOS")
                return { ...state }
            }

            if(state.user === null){
                alert("FAÇA O LOGIN PARA CADASTRAR UM ENDEREÇO!")
                return { ...state }
            }

            return {
                ...state,
                user:{
                    ...state.user,
                    address:{
                        location: action.payload.location,
                        number: action.payload.number
                    }
                }
            }
        },
        deleteAddress: (state) => {
            return {
                ...state,
                user:{
                    ...state.user,
                    address: null
                }
            }
        },
        fetchUsers: (state) => {
            state.loading = true
        },
        fetchUsersSuccess: (state, action) => {
            state.users = action.payload
            state.loading = false
        },
        fetchUsersFailure: (state, action) => {
            console.log(action.payload);
            state.loading = false
        },
        fetchUserById: (state, action) => {
            console.log("fetchUserById action disparada")
        },
        fetchUserByIdSuccess: (state, action) => {
            console.log("fetchUserByIdSuccess action disparada")
        },
        fetchUserByIdFailure: (state, action) => {     
            console.log("fetchUserByIdFailure action disparada")
        }
}})

export const { createUser, logoutUser, addAddress, deleteAddress, fetchUsers, fetchUsersSuccess, fetchUsersFailure, fetchUserById, fetchUserByIdSuccess, fetchUserByIdFailure } = userSlice.actions;
export default userSlice.reducer;