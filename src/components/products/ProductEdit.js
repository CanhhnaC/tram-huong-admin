import * as React from "react";
import { FC } from "react";
import {
  Datagrid,
  DateField,
  Edit,
  EditButton,
  FormTab,
  NumberInput,
  Pagination,
  ReferenceInput,
  ReferenceManyField,
  SelectInput,
  TabbedForm,
  TextField,
  TextInput,
  required,
} from "react-admin";
import { InputAdornment } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import RichTextInput from "ra-input-rich-text";

import CustomerReferenceField from "../visitors/CustomerReferenceField";
import StarRatingField from "../reviews/StarRatingField";
import Poster from "./Poster";
import { styles as createStyles } from "./ProductCreate";
import { Product, EditComponentProps } from "../types";

const ProductTitle = ({ record }) =>
  record ? <span>Poster #{record.reference}</span> : null;

const useStyles = makeStyles({
  ...createStyles,
  comment: {
    maxWidth: "20em",
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  },
  tab: {
    maxWidth: "40em",
    display: "block",
  },
});

const ProductEdit = (props) => {
  const classes = useStyles();
  return (
    <Edit {...props} title={<ProductTitle />}>
      <TabbedForm>
        <FormTab
          label="resources.products.tabs.image"
          contentClassName={classes.tab}
        >
          <Poster />
          <TextInput source="image" fullWidth validate={requiredValidate} />
          <TextInput source="thumbnail" fullWidth validate={requiredValidate} />
        </FormTab>
        <FormTab
          label="resources.products.tabs.details"
          path="details"
          contentClassName={classes.tab}
        >
          <TextInput source="reference" validate={requiredValidate} />
          <NumberInput
            source="price"
            className={classes.price}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">VND</InputAdornment>
              ),
            }}
            validate={requiredValidate}
          />
          <NumberInput
            source="amount"
            className={classes.height}
            formClassName={classes.heightFormGroup}
            validate={requiredValidate}
          />
          <ReferenceInput
            source="typesId"
            reference="types"
            validate={requiredValidate}
          >
            <SelectInput source="name" />
          </ReferenceInput>
        </FormTab>
        <FormTab
          label="resources.products.tabs.description"
          path="description"
          contentClassName={classes.tab}
        >
          <RichTextInput
            source="description"
            label=""
            validate={requiredValidate}
          />
        </FormTab>
      </TabbedForm>
    </Edit>
  );
};

const requiredValidate = [required()];

export default ProductEdit;
