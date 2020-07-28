import * as React from "react";
import {
  Edit,
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

const ProductTitle = ({ record }) =>
  record ? <span>Sản phẩm #{record.name}</span> : null;

const ProductEdit = (props) => {
  return (
    <Edit title={<ProductTitle />} {...props}>
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
              <TextInput
                fullWidth
                multiline
                source="content"
                label="Nội dung"
              />
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
    </Edit>
  );
};

export default ProductEdit;
