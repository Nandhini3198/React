import React from 'react';
//import { shallow } from 'enzyme';
import ListAllProducts from './graph';
import configureMockStore from "redux-mock-store";
import { render, getByText } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
const mockStore = configureMockStore([])
describe('ListAllProducts', () => {
    let store
    beforeEach(() => {
        store = mockStore({
            productList: [{
                id: "1",
                pname: "Name for testing",
                type: "1",
                availability: "1.00",
                image: null
            }]
        })
    })
   
it('Should render the products ', () => {
    const { getByTestId } = render(
        <BrowserRouter>
            <Provider store={store}>
                <ListAllProducts />
            </Provider>
        </BrowserRouter>
    )

getByTestId("submit")
})
it('Should render the products ', () => {
    const { getByTestId } = render(
        <BrowserRouter>
            <Provider store={store}>
                <ListAllProducts />
            </Provider>
        </BrowserRouter>
    )

getByTestId("submit")
})

});