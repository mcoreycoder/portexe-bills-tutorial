import React, { useState, createContext, useEffect} from 'react';

const BillContext = createContext()

const BillProvider = ({children}) => {

    const [bills, setBills] = useState([])

    useEffect(()=> {
        setBills(JSON.parse(localStorage.getItem('portexe-bills')) || [])
    },[setBills])

    useEffect(()=> {
        console.log(bills)
    },[bills])

    const updateBills = (bill) => {
        const updatedBills = [
            ...bills, 
            bill
        ]
        localStorage.setItem('portexe-bills', JSON.stringify(updatedBills))
        setBills(updatedBills)
     }

    return (
        <BillContext.Provider value={{
            bills,
            updateBills
        }}>
            {children}
        </BillContext.Provider>
    )
}

export {
    BillContext,
    BillProvider
}