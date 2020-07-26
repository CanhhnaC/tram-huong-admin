import React from "react";
import { Admin, Resource } from "react-admin";
import {
  FirebaseAuthProvider,
  FirebaseDataProvider,
} from "react-admin-firebase";

// Icon
// import BookIcon from "@material-ui/icons/Book";
// import EventIcon from "@material-ui/icons/Event";

// Language
import polyglotI18nProvider from "ra-i18n-polyglot";
import vietnameseMessages from "./i18n/vi";

// Components
import products from "./components/products";
import types from "./components/category";

// import { PostList, PostEdit, PostCreate } from "./components/posts.js";
// import { EventList, EventEdit, EventCreate } from "./components/events";

//connect the data provider to the REST endpoint
import { firebaseConfig as config, options } from "./FIREBASE_CONFIG";

import { Layout } from "./layout";
import { Dashboard } from "./components/dashboard";

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
      dashboard={Dashboard}
    >
      <Resource name="products" options={{ label: "Sản phẩm" }} {...products} />
      <Resource name="types" options={{ label: "Thể loại" }} {...types} />
    </Admin>
  );
}

export default App;
