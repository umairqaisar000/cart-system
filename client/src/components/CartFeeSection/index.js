import { SUBTOTAL, HST, TOTAL } from "../../constants/data";
import { BLUE, BLACK } from "../../constants";

const CartFeeSection = ({ totalCostValues }) => {
  return (
    <>
      <h2 className="mt-4" style={{ color: BLUE }}>
        Total Cost
      </h2>
      <div className="row my-5 ms-3">
        <div className="col-6" style={{ color: BLACK }}>
          Subtotal
        </div>
        <div className="col-6 text-end" style={{ color: BLACK }}>
          $ {totalCostValues.subtotal.toFixed(2)}
        </div>
        <div className="col-6" style={{ color: BLACK }}>
          Taxes (extimated)
        </div>
        <div className="col-6 text-end" style={{ color: BLACK }}>
          $ {totalCostValues.taxes.toFixed(2)}
        </div>
        <div className="col-6" style={{ color: BLACK }}>
          Shipping
        </div>
        <div className="col-6 text-end" style={{ color: BLACK }}>
          $ {totalCostValues.shipping.toFixed(2)}
        </div>
        <div className="col-6 h6 mt-3" style={{ color: BLUE }}>
          Total
        </div>
        <div className="col-6 text-end h6 mt-3" style={{ color: BLUE }}>
          $ {totalCostValues.total.toFixed(2)}
        </div>
      </div>
    </>
  );
};

export default CartFeeSection;
