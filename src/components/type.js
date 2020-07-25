import React from "react";
import {
  List,
  TextInput,
  SimpleForm,
  Edit,
  Create,
  Datagrid,
  TextField,
  ImageInput,
  ImageField,
} from "react-admin";

const TypeTitle = ({ record }) => {
  return <span>Thể loại: {record ? `"${record.name}"` : ""}</span>;
};

const TypeList = (props) => (
  <List title="Danh sách thể loại" {...props}>
    <Datagrid rowClick="edit">
      <TextField source="name" />
    </Datagrid>
  </List>
);

const TypeEdit = (props) => (
  <Edit title={<TypeTitle />} {...props}>
    <SimpleForm>
      <TextInput source="name" />
      <ImageInput
        {...props}
        source="pictures"
        label="Related pictures"
        accept="image/*"
      >
        <ImageField source="src" title="title" />
      </ImageInput>
    </SimpleForm>
  </Edit>
);

const TypeCreate = (props) => (
  <Create title="Tạo thể loại mới" {...props}>
    <SimpleForm>
      <TextInput source="name" />
      <ImageInput
        {...props}
        source="pictures"
        label="Related pictures"
        accept="image/*"
      >
        <ImageField source="src" title="title" />
      </ImageInput>
    </SimpleForm>
  </Create>
);

export default {
  list: TypeList,
  create: TypeCreate,
  edit: TypeEdit,
};
