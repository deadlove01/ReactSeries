import { put, takeEvery, call } from 'redux-saga/effects'
import { PRODUCT_LIST_FAILED, PRODUCT_LIST_REQUESTED, PRODUCT_LIST_SUCCEED, SEARCH_PRODUCT_REQUESTED } from './productActionTypes';


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

function* searchProducts(payload)
{
    console.log('call searchProducts!');
    try {
        console.log("requesting data...")
        let data = yield fetch(`http://localhost:4000/products?q=${payload.query}`);
        data = yield data.json();
        console.log("response data: ", data)
        yield put({type: PRODUCT_LIST_SUCCEED, data: data} )
    } catch (error) {
        console.log("failed: ", error.message)
        yield put({type: PRODUCT_LIST_FAILED, message: error.message} )
    }
}

function* productSaga(){
    console.log('call productSaga!')
    yield takeEvery(PRODUCT_LIST_REQUESTED, getProducts)
    yield takeEvery(SEARCH_PRODUCT_REQUESTED, searchProducts)
}


export default productSaga;