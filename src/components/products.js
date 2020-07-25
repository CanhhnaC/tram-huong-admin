import React from "react";
import {
  List,
  TextInput,
  Edit,
  Create,
  ReferenceInput,
  SelectInput,
  Datagrid,
  TextField,
  Filter,
  TabbedForm,
  FormTab,
  ImageField,
  ImageInput,
  NumberField,
  SimpleFormIterator,
  ArrayInput,
  NumberInput,
  ReferenceField,
  ChipField,
} from "react-admin";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

const ProductFilter = (props) => (
  <Filter {...props}>
    <TextInput label="Name" source="name" alwaysOn />
    <ReferenceInput
      label="Thể loại"
      source="typesId"
      reference="types"
      allowEmpty
    >
      <SelectInput optionText="name" />
    </ReferenceInput>
  </Filter>
);

const ProductTitle = ({ record }) => {
  return <span>Sự kiện {record ? `"${record.name}"` : ""}</span>;
};

const ProductList = (props) => (
  <List title="Danh sách sản phẩm" filters={<ProductFilter />} {...props}>
    <Datagrid rowClick="edit">
      <TextField source="name" label="Tên sản phẩm" />
      <NumberField source="amount" label="Số lượng còn lại" />
      <ReferenceField label="Thể loại" source="typesId" reference="types">
        <ChipField source="name" />
      </ReferenceField>
      <NumberField source="price" label="Giá tiền" />
    </Datagrid>
  </List>
);

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

export default {
  list: ProductList,
  edit: ProductEdit,
  create: ProductCreate,
  icon: ShoppingCartIcon,
};
