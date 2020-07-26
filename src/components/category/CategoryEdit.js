import * as React from "react";
import {
  Datagrid,
  Edit,
  EditButton,
  NumberField,
  ReferenceManyField,
  SimpleForm,
  TextInput,
  ImageInput,
  ImageField,
} from "react-admin";

import ThumbnailField from "../products/ThumbnailField";
import ProductRefField from "../products/ProductRefField";

const CategoryTitle = ({ record }) => {
  return record ? <span>Thể loại: {record.name}</span> : null;
};

const CategoryEdit = (props) => (
  <Edit title={<CategoryTitle />} {...props}>
    <SimpleForm>
      <TextInput source="name" />

      <ImageInput source="pictures" label="Related pictures" accept="image/*">
        <ImageField source="src" title="title" />
      </ImageInput>

      <ReferenceManyField
        reference="products"
        target="category_id"
        label="resources.categories.fields.products"
        perPage={20}
        fullWidth
      >
        <Datagrid>
          <ThumbnailField />
          <ProductRefField source="reference" />
          <NumberField
            source="price"
            options={{ style: "currency", currency: "USD" }}
          />
          <NumberField source="width" options={{ minimumFractionDigits: 2 }} />
          <NumberField source="height" options={{ minimumFractionDigits: 2 }} />
          <NumberField source="stock" />
          <EditButton />
        </Datagrid>
      </ReferenceManyField>
    </SimpleForm>
  </Edit>
);

export default CategoryEdit;
