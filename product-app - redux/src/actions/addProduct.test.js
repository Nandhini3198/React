import addProduct from './addProduct'
import editProduct from './editProduct'
import deleteProduct from './deleteProduct'
import listProduct from './listProduct'

describe('actions', () => {
    it('should create an action to add a product', () => {
      const text =[]
      const expectedAction = {
        type: "ADD_PRODUCT",
        payload:[]
      }
      expect(addProduct(text)).toEqual(expectedAction)
    })
  })

  describe('actions', () => {
    it('should create an action to add a product', () => {
      const text =[]
      const expectedAction = {
        type: "EDIT_PRODUCT",
        payload:[]
      }
      expect(editProduct(text)).toEqual(expectedAction)
    })
  })


  describe('actions', () => {
    it('should create an action to add a product', () => {
      const text =[]
      const expectedAction = {
        type: "INITIAL_FETCH",
        payload:[]
      }
      expect(listProduct(text)).toEqual(expectedAction)
    })
  })

 