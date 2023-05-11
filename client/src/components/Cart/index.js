import { useState, useEffect, useRef } from "react";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";

import CartFeeSection from "../CartFeeSection";
import LineItem from "../LineItem";

import { BLUE } from "../../constants";

const Cart = () => {
  const postalRef = useRef();

  const [lineItems, setLineItems] = useState([]);
  const [item, setItem] = useState([]);
  const [totalCostValues, setTotalCostValues] = useState({
    subtotal: 0,
    taxes: 0,
    shipping: 15,
    total: 0,
  });

  const removeLineItem = (lineItemId) => {
    const newLineItems = lineItems.filter((item) => item.id !== lineItemId);
    setLineItems(newLineItems);
  };

  const addLineItem = (item) => {
    const newItem = {
      ...item,
      id: uuidv4().split("-")[0],
    };
    setLineItems([...lineItems, newItem]);
  };

  const calculateFees = () => {
    let subtotal = 0;
    let taxes = 0;
    for (let item of lineItems) {
      subtotal = subtotal + item.price;
    }
    taxes = subtotal * 0.13;

    const total = subtotal + taxes + 15;

    setTotalCostValues({
      subtotal,
      taxes,
      shipping: 15,
      total,
    });
  };

  const handleRequestDeliveryTime = async () => {
    try {
      const response = await axios.post("http://localhost:5000/deliverytime", {
        postCode: postalRef.current.value,
        lineItems,
      });
      setLineItems(response.data);
    } catch (error) {
      console.error("Error fetching delivery time:", error);
    }
  };

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await axios.get("http://localhost:5000/items");
        const data = response.data;
        setLineItems(data);
        setItem(data[0]);
      } catch (error) {
        console.error("Error fetching items:", error);
      }
    };

    fetchItems();
  }, []);

  useEffect(() => {
    calculateFees();
  }, [lineItems]);

  return (
    <div className="container mt-5">
      <h2 style={{ color: BLUE }}>Your Cart</h2>
      <div className="row justify-content-end">
        <button
          className="col-1 my-4 btn btn-primary"
          onClick={() => addLineItem(item)}
        >
          Add Item
        </button>
      </div>

      {lineItems?.length !== 0 ? (
        lineItems?.map((item, index) => {
          return (
            <div key={index}>
              <LineItem
                item={item}
                removeLineItem={removeLineItem}
                addLineItem={addLineItem}
              />
            </div>
          );
        })
      ) : (
        <div className=" text-info h5">Ops! No Item Found</div>
      )}
      <hr className="my-4" style={{ borderTop: "1px solid #000000" }} />
      {totalCostValues?.subtotal ? (
        <CartFeeSection totalCostValues={totalCostValues} />
      ) : (
        <div className="text-info h5">No Item Added to Cart yet!</div>
      )}
      <div className="row  my-4">
        <h2 style={{ color: BLUE }}>Enter Postal Code</h2>
        <div className="col-8">
          <input
            className="form-control"
            type="text"
            placeholder="Enter Postal Code"
            ref={postalRef}
          />
        </div>
        <div className="col-4">
          <button
            className="btn btn-primary"
            onClick={() => handleRequestDeliveryTime()}
          >
            Add Item
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
