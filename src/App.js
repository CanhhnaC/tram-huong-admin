import React from "react";
import { Admin, Resource } from "react-admin";
import {
  FirebaseAuthProvider,
  FirebaseDataProvider,
} from "react-admin-firebase";

// Icon
import BookIcon from "@material-ui/icons/Book";
import EventIcon from "@material-ui/icons/Event";

// Language
import polyglotI18nProvider from "ra-i18n-polyglot";
import vietnameseMessages from "./i18n/vi";

// Components
import products from "./components/products.js";
import types from "./components/type.js";

import { PostList, PostEdit, PostCreate } from "./components/posts.js";
import { EventList, EventEdit, EventCreate } from "./components/events";

//connect the data provider to the REST endpoint
import { firebaseConfig as config, options } from "./FIREBASE_CONFIG";

import { Layout } from "./layout";

const dataProvider = FirebaseDataProvider(config, options);
const firebaseAuthProvider = FirebaseAuthProvider(config, options);

const i18nProvider = polyglotI18nProvider(() => vietnameseMessages, "vi");

function App() {
  return (
    <Admin
      dataProvider={dataProvider}
      authProvider={firebaseAuthProvider}
      i18nProvider={i18nProvider}
      layout={Layout}
    >
      <Resource name="products" options={{ label: "Sản phẩm" }} {...products} />

      <Resource
        name="events"
        list={EventList}
        edit={EventEdit}
        create={EventCreate}
        options={{ label: "Sự kiện" }}
        icon={EventIcon}
      />
      <Resource
        name="posts"
        list={PostList}
        edit={PostEdit}
        create={PostCreate}
        options={{ label: "Sự kiện" }}
        icon={BookIcon}
      />

      <Resource name="types" {...types} />
    </Admin>
  );
}

export default App;
