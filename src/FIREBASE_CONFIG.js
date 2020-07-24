export const firebaseConfig = {
  apiKey: "AIzaSyBPL9PszsbYecMBbNT5d-1IRAtntzHamOM",
  authDomain: "tram-huong-dao-quan.firebaseapp.com",
  databaseURL: "https://tram-huong-dao-quan.firebaseio.com",
  projectId: "tram-huong-dao-quan",
  storageBucket: "tram-huong-dao-quan.appspot.com",
  messagingSenderId: "616266967907",
  appId: "1:616266967907:web:27c54629a600863f1c0156",
  measurementId: "G-6241DF2TQX",
};

export const options = {
  // Use a different root document to set your resource collections, by default it uses the root collections of firestore
  // rootRef: 'root-collection/some-doc',
  // Your own, previously initialized firebase app instance
  //     app: firebaseAppInstance,
  // Enable logging of react-admin-firebase
  logging: true,
  // Resources to watch for realtime updates, will implicitly watch all resources by default, if not set.
  //     watch: ['posts'],
  // Resources you explicitly dont want realtime updates for
  //     dontwatch: ['comments'],
};
