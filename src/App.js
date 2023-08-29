import React, { Fragment,useState } from "react";
import AddMedicineForm from "./components/Medicines/AddMedicineForm";
import MedicineItems from "./components/Medicines/MedicineItems";
import MedicineProvider from "./store/MedicineProveider";
import Header from './components/Cart/Header';
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvide";

const App = () => {
  const [showModal, setShowModal] = useState(false);

  const closeModalHandler = () => {
    setShowModal(false);
  };

  const openModalHandler = () => {
    setShowModal(true);
  };

  return (
    <Fragment>
      <CartProvider>
     {showModal && <Cart onClose={closeModalHandler} />} 
      <Header onCartOpen={openModalHandler} />
      <MedicineProvider>
        <AddMedicineForm />
        <MedicineItems />
      </MedicineProvider>
      </CartProvider>
    </Fragment>
  );
};

export default App;
