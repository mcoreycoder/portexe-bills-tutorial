import React, {useContext, useState, useEffect, createContext} from 'react';

const BillContext = createContext()

const BillProvider = ({childern}) => {
    const [bills, setBills] = useState([])

    const updateBills = (bill) => {
        console.log(bill)
     }

    return (
        <BillContext.Provider value={{
            bills,
            updateBills
        }}>
            {childern}
        </BillContext.Provider>
    )
}

export {
    BillContext,
    BillProvider
}