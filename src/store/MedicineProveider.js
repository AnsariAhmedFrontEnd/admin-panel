import React, {useState} from "react";
import MedicineContext from "./medicine-context";

const MedicineProvider = (props) => {
    const [medicineItems, setMedicineItems] = useState([]);
const addProductHandler = (item) => {
    setMedicineItems(preveiousItems => [...preveiousItems, item]);

};

    const medicineContext = {
        medicineItems : medicineItems,
        addProduct:addProductHandler
    }

   return (
  <MedicineContext.Provider value={medicineContext}>{props.children}</MedicineContext.Provider>)
};

export default MedicineProvider;
