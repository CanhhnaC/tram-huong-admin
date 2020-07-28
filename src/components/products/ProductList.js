import * as React from "react";
import Chip from "@material-ui/core/Chip";
import { makeStyles } from "@material-ui/core/styles";
import {
  Filter,
  List,
  Pagination,
  ReferenceInput,
  SearchInput,
  SelectInput,
  useTranslate,
} from "react-admin";
import GridList from "./GridList";

const useQuickFilterStyles = makeStyles((theme) => ({
  root: {
    marginBottom: theme.spacing(3),
  },
}));

const QuickFilter = ({ label }) => {
  const translate = useTranslate();
  const classes = useQuickFilterStyles();
  return <Chip className={classes.root} label={translate(label)} />;
};

export const ProductFilter = (props) => (
  <Filter {...props}>
    <SearchInput source="q" alwaysOn />
    <ReferenceInput
      source="typesId"
      reference="types"
      sort={{ field: "id", order: "ASC" }}
    >
      <SelectInput source="name" />
    </ReferenceInput>
    <QuickFilter
      label="resources.products.fields.stock_lte"
      source="amount"
      defaultValue={10}
    />
  </Filter>
);

const ProductList = (props) => {

  return (
    <List
      {...props}
      filters={<ProductFilter />}
      perPage={20}
      pagination={<Pagination rowsPerPageOptions={[10, 20, 40]} />}
      sort={{ field: "reference", order: "ASC" }}
    >
      <GridList />
    </List>
  );
};

export default ProductList;
