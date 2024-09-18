import { StatusBar } from "expo-status-bar";
import { Provider } from "react-redux";
import { useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Store from "./store/Store";
import Main from "./Screens/Main";

export default function App() {
  const preSettingData = async () => {
    if (JSON.parse(await AsyncStorage.getItem("Users")) === null) {
      AsyncStorage.multiSet([
        [
          "Users",
          JSON.stringify([
            {
              firstName: "Olexandr",
              lastName: "Forest",
              email: "forest@gmail.com",
              id: Math.random(),
            },
            {
              firstName: "Billy",
              lastName: "Herrington",
              email: "legend@gmail.com",
              id: Math.random(),
            },
            {
              firstName: "Joe",
              lastName: "Biden",
              email: "maga@gmail.com",
              id: Math.random(),
            },
          ]),
        ],
      ]);
    }
  };

  useEffect(() => {
    preSettingData();
    // AsyncStorage.clear();
  });
  return (
    <Provider store={Store}>
      <Main />
      <StatusBar style="light" />
    </Provider>
  );
}
