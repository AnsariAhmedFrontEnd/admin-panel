import React, { useContext } from "react";
import MedicineContext from "../../store/medicine-context";
import AddToCartButton from "./AddToCartButton";
import "./MedicineItemslist.css";

const MedicineItemList = (props) => {
  const MedicineCtx = useContext(MedicineContext);

  const medicineList = MedicineCtx.medicineItems.map((item) => {
    return (
      <div className="li" key={item._id}>
      <li>
        <span> Name: {item.name}</span>
        <span> Description: {item.description}</span>
        <span>Price: Rs. {item.price}</span>
        <span>
          <AddToCartButton items={item} />
        </span>
      </li>
      </div>
    );
  });

  return <div>{medicineList}</div>;
};

export default MedicineItemList;
