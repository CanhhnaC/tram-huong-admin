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
  DateField,
  DateTimeInput,
  ArrayInput,
  SimpleFormIterator,
} from "react-admin";
// Material
// import { InputAdornment } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  tab: {
    maxWidth: "40em",
    display: "block",
  },
});

const EventFilter = (props) => (
  <Filter {...props}>
    <TextInput label="Name" source="name" alwaysOn />
    <ReferenceInput
      label="Category"
      source="typesId"
      reference="types"
      allowEmpty
    >
      <SelectInput optionText="name" />
    </ReferenceInput>
  </Filter>
);

const PorductTitle = ({ record }) => {
  return <span>Sản phẩm {record ? `"${record.name}"` : ""}</span>;
};

export const EventList = (props) => (
  <List title="Danh sách sự kiện" filters={<EventFilter />} {...props}>
    <Datagrid rowClick="edit">
      <TextField source="name" label="Tên sự kiện" />
      <DateField source="time" label="Thời gian" />
      <TextField source="location" label="Địa chỉ" />
    </Datagrid>
  </List>
);

export const EventEdit = (props) => {
  const classes = useStyles();
  return (
    <Edit title={<PorductTitle />} {...props}>
      <TabbedForm>
        {/* Thông tin */}
        <FormTab label="Thông tin" contentClassName={classes.tab}>
          <TextInput source="name" />
          <DateTimeInput source="time" label="Thời gian" />
          <TextInput source="location" label="Địa chỉ" />
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
        </FormTab>
        {/* Hình ảnh */}
        <FormTab label="Hình ảnh">
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

export const EventCreate = (props) => (
  <Create title="Thêm sự kiện mới" {...props}>
    <TabbedForm>
      <FormTab label="Thông tin">
        <TextInput source="name" />
        <DateTimeInput source="time" label="Thời gian" />
        <TextInput source="location" label="Địa chỉ" />
        <ArrayInput source="description">
          <SimpleFormIterator>
            <TextInput fullWidth multiline source="content" label="Nội dung" />
          </SimpleFormIterator>
        </ArrayInput>
      </FormTab>
      <FormTab label="Hình ảnh">
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
