import React from "react";

const MedicineContext = React.createContext({
    medicineItems: [],
    addProduct: (item) => {}
})

export default MedicineContext;