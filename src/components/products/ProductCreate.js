import * as React from "react";
import {
  Create,
  FormTab,
  NumberInput,
  ReferenceInput,
  SelectInput,
  TabbedForm,
  TextInput,
  ArrayInput,
  SimpleFormIterator,
  ImageInput,
  ImageField,
} from "react-admin";

const ProductCreate = (props) => (
  <Create title="Thêm sản phẩm mới" {...props}>
    <TabbedForm>
      <FormTab label="Thông tin">
        <TextInput source="name" label="Tên sản phẩm" />
        <NumberInput source="price" label="Giá tiền" />
        <NumberInput source="amount" label="số lượng còn lại" />
        <ReferenceInput label="Thể loại" source="typesId" reference="types">
          <SelectInput source="name" />
        </ReferenceInput>
      </FormTab>

      <FormTab label="Miêu tả">
        <ArrayInput source="description">
          <SimpleFormIterator>
            <TextInput fullWidth multiline source="content" />
          </SimpleFormIterator>
        </ArrayInput>

        <ImageInput
          {...props}
          source="pictures"
          multiple={true}
          label="Related pictures"
          accept="image/*"
        >
          <ImageField source="src" title="title" />
        </ImageInput>
      </FormTab>
    </TabbedForm>
  </Create>
);
export default ProductCreate;
