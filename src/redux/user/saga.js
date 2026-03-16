import { all, takeEvery, call, put, delay, takeLatest } from 'redux-saga/effects'
import { fetchUsersSuccess, fetchUsersFailure, fetchUserById, fetchUserByIdFailure, fetchUserByIdSuccess } from './slice'

import axios from 'axios'
// API USERS: https://jsonplaceholder.typicode.com/users

function* fetchUsersSaga() {
    try{
        yield delay(2000) // Simulando um delay de 2 segundos para a requisição
        const response = yield call(axios.get, "https://jsonplaceholder.typicode.com/users")
        yield put(fetchUsersSuccess(response.data))
    } catch(error){
        yield put(fetchUsersFailure(error.message))
    }
}

function* fetchUserByIdSaga(action){
    try{
        const userId = action.payload
        const response = yield call(axios.get, `https://jsonplaceholder.typicode.com/users/${userId}`)
        yield put(fetchUserByIdSuccess(response.data))

    } catch(error){
        yield put(fetchUserByIdFailure(error.message))
    }
}

export default all([
    takeLatest("user/fetchUsers", fetchUsersSaga),
    takeEvery("user/fetchUserById", fetchUserByIdSaga)
])