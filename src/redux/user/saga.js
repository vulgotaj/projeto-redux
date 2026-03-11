import { all, takeEvery } from 'redux-saga/effects'

function* fetchUsers() {

}

export default all([
    takeEvery("user/fetchUsers", fetchUsers)
])