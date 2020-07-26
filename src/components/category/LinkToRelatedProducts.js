import * as React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import { stringify } from "query-string";

import products from "../products";

const useStyles = makeStyles({
  icon: { paddingRight: "0.5em" },
  link: {
    display: "inline-flex",
    alignItems: "center",
  },
});

const LinkToRelatedProducts = ({ record }) => {
  const classes = useStyles();
  return record ? (
    <Button
      size="small"
      color="primary"
      component={Link}
      to={{
        pathname: "/products",
        search: stringify({
          page: 1,
          perPage: 25,
          sort: "id",
          order: "DESC",
          filter: JSON.stringify({ typesId: record.id }),
        }),
      }}
      className={classes.link}
    >
      <products.icon className={classes.icon} />
      {"Sản phẩm"}
    </Button>
  ) : null;
};

export default LinkToRelatedProducts;
