import React from "react";
import CardWithIcon from "./CardWithIcon";

import DollarIcon from "@material-ui/icons/AttachMoney";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import EventIcon from "@material-ui/icons/Event";
import BookIcon from "@material-ui/icons/Book";

const Product = ({ value }) => {
  return (
    <CardWithIcon
      to="/products"
      icon={ShoppingCartIcon}
      title={"Sản phẩm"}
      subtitle={value}
    />
  );
};

const Types = ({ value }) => {
  return (
    <CardWithIcon
      to="/types"
      icon={DollarIcon}
      title={"Thể loại"}
      subtitle={value}
    />
  );
};

const Posts = ({ value }) => {
  return (
    <CardWithIcon
      to="/posts"
      icon={BookIcon}
      title={"Bài viết"}
      subtitle={value}
    />
  );
};

const Events = ({ value }) => {
  return (
    <CardWithIcon
      to="/events"
      icon={EventIcon}
      title={"Sự kiện"}
      subtitle={value}
    />
  );
};

export { Product, Posts, Events, Types };
