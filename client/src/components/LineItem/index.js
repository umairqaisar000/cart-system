import { BLUE, LIGHT_GREY, BLACK } from "../../constants";
import { ESTIMATED_DELIVERY } from "../../constants/data";
import "./style.css";

const LineItem = ({ item, removeLineItem }) => {
  return (
    <>
      <div className="row mt-5">
        <div className="col-3">
          <img src={item.image} style={{ width: "100%" }} alt="sofa" />
        </div>
        <div className="col-5">
          <div className="row h6" style={{ color: BLUE }}>
            {item.title} / {item.quantity}
          </div>
          <div className="row mt-2">
            <div
              className="circle col-6"
              style={{ backgroundColor: item.swatchColor }}
            />
            <div
              className="col-6"
              style={{
                color: LIGHT_GREY,
                fontSize: "15px",
                verticalAlign: "center",
              }}
            >
              {item.swatchTitle}
            </div>
          </div>
        </div>
        <div className="col-4">
          <div className="row justify-content-end" style={{ color: BLACK }}>
            $ {item.price}
          </div>
          <div
            className="row justify-content-end"
            style={{ marginTop: "20%", fontSize: "13px", color: BLACK }}
          >
            Estimated Delivery Date:{" "}
            {item.estimatedDeliveryDate
              ? item.estimatedDeliveryDate
              : "*Add Postal info Below"}
          </div>
          <a
            className="row my-3 justify-content-end"
            style={{ color: BLACK, fontSize: "14px", cursor: "pointer" }}
            onClick={() => removeLineItem(item.id)}
          >
            Remove
          </a>
        </div>
      </div>
    </>
  );
};

export default LineItem;
