import * as React from "react";
import {
  Create,
  FormTab,
  NumberInput,
  ReferenceInput,
  SelectInput,
  TabbedForm,
  TextInput,
  required,
} from "react-admin";
import { InputAdornment } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import RichTextInput from "ra-input-rich-text";

export const styles = {
  price: { width: "7em" },
  width: { width: "7em" },
  height: { width: "7em" },
  stock: { width: "7em" },
  widthFormGroup: { display: "inline-block" },
  heightFormGroup: { display: "inline-block", marginLeft: 32 },
};

const useStyles = makeStyles(styles);

const ProductCreate = (props) => {
  const classes = useStyles();
  return (
    <Create {...props}>
      <TabbedForm>
        <FormTab label="resources.products.tabs.image">
          <TextInput autoFocus source="image" fullWidth validate={required()} />
          <TextInput source="thumbnail" fullWidth validate={required()} />
        </FormTab>
        <FormTab label="resources.products.tabs.details" path="details">
          <TextInput source="reference" validate={required()} />
          <NumberInput
            source="price"
            validate={required()}
            className={classes.price}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">VND</InputAdornment>
              ),
            }}
          />
          <NumberInput
            source="amount"
            validate={required()}
            className={classes.height}
            formClassName={classes.heightFormGroup}
          />
          <ReferenceInput source="typesId" reference="types" allowEmpty>
            <SelectInput source="name" />
          </ReferenceInput>
        </FormTab>
        <FormTab label="resources.products.tabs.description" path="description">
          <RichTextInput source="description" label="" />
        </FormTab>
      </TabbedForm>
    </Create>
  );
};

export default ProductCreate;
