import { put, takeEvery, call } from 'redux-saga/effects'
import { PRODUCT_LIST_FAILED, PRODUCT_LIST_REQUESTED, PRODUCT_LIST_SUCCEED } from './productActionTypes';


function* getProducts(){
    console.log('call getProductListSaga!');
    try {
        console.log("requesting data...")
        let data = yield fetch('http://localhost:4000/products');
        data = yield data.json();
        console.log("response data: ", data)
        yield put({type: PRODUCT_LIST_SUCCEED, data: data} )
    } catch (error) {
        yield put({type: PRODUCT_LIST_FAILED, message: error.message} )
    }
}

function* productSaga(){
    console.log('call productSaga!')
    yield takeEvery(PRODUCT_LIST_REQUESTED, getProducts)
}


export default productSaga;