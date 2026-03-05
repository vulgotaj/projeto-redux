import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    user: null,
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
        }
    }
})

export const { createUser, logoutUser, addAddress, deleteAddress } = userSlice.actions;
export default userSlice.reducer;