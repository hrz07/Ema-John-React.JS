import React, { useEffect, useState } from 'react';
import { getDataFromDb } from '../../utilities/localStorage';
import useProducts from './useProducts';

const useOrder = () => {
    const [products,setProducts]=useProducts()
    const [order,setOrder] = useState([])
    useEffect(() => {
            
        let storedData = getDataFromDb()
        let savedCart = [];

        for (const id in storedData) {
            const findProduct = products.find(item => item.id == id)
            if (findProduct) {
                findProduct.quantity = storedData[id]
                savedCart.push(findProduct)
            }
        }

      setOrder(savedCart)  
    }, [products])
    
    return [order,setOrder]
}

export default useOrder;
