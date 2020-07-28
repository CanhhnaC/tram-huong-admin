import * as React from "react";
import { Link } from "react-router-dom";

const ProductRefField = ({ record }) => {

  return record ? (
    <Link to={`/products/${record.id}`}>{record.name}</Link>
  ) : null;
};

ProductRefField.defaultProps = {
  source: "id",
  label: "Tên sản phẩm",
};

export default ProductRefField;
