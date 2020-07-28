import React from "react";
import {
  List,
  TextInput,
  Edit,
  Create,
  Datagrid,
  TextField,
  DateTimeInput,
  DateField,
  TabbedForm,
  FormTab,
  ArrayInput,
  SimpleFormIterator,
  ImageField,
  ImageInput,
} from "react-admin";

const PostTitle = ({ record }) => {
  return <span>Danh mục: {record ? `"${record.name}"` : ""}</span>;
};

export const PostList = (props) => (
  <List {...props} title="Danh sách bài viết">
    <Datagrid rowClick="edit">
      <TextField source="name" label="Tên bài" />
      <DateField source="date" label="Ngày đăng" />
    </Datagrid>
  </List>
);

export const PostEdit = (props) => (
  <Edit title={<PostTitle />} {...props}>
    <TabbedForm>
      {/* Thông tin */}
      <FormTab label="Thông tin">
        <TextInput source="name" label="Tên bài" />
        <TextInput source="person" label="Người đăng" />
        <DateTimeInput source="date" label="Ngày đăng" />
      </FormTab>

      <FormTab label="Miêu tả">
        <ArrayInput source="description">
          <SimpleFormIterator>
            <TextInput fullWidth multiline source="content" label="Nội dung" />
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

export const PostCreate = (props) => (
  <Create {...props} title="Tạo bài viết mới">
    <TabbedForm>
      <FormTab label="Thông tin">
        <TextInput source="name" label="Tên bài" />
        <TextInput source="person" label="Người đăng" />
        <DateTimeInput source="date" label="Ngày đăng" />
      </FormTab>

      <FormTab label="Miêu tả">
        <ArrayInput source="description">
          <SimpleFormIterator>
            <TextInput fullWidth multiline source="content" label="Nội dung" />
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
