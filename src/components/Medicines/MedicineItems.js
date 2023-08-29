import React,{useContext} from "react";
import MedicineItemList from "./MedicineItemLilst";
import MedicineContext from '../../store/medicine-context'

const MedicineItems = (props) => {
    const MedicineCtx = useContext(MedicineContext);
  
  return <ul><MedicineItemList items={MedicineCtx.medicineItems} /></ul>;
};

export default MedicineItems;
