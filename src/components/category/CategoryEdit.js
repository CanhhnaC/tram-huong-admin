import * as React from "react";
import {
  Datagrid,
  Edit,
  EditButton,
  NumberField,
  ReferenceManyField,
  SimpleForm,
  TextInput,
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

      <ReferenceManyField
        reference="products"
        target="typesId"
        label="sản phẩm"
        perPage={20}
        fullWidth
      >
        <Datagrid>
          <ThumbnailField />
          <ProductRefField source="name" />
          <NumberField source="amount" label="Số lượng" />

          <NumberField source="price" label="Giá tiền" />
          <EditButton />
        </Datagrid>
      </ReferenceManyField>
    </SimpleForm>
  </Edit>
);

export default CategoryEdit;
