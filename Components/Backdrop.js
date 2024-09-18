import { View } from "react-native";
import React from "react";

const Backdrop = () => {
  return (
    <View className="z-10 absolute top-[0px] left-[0px] w-[100vw] h-[100vh] opacity-70 bg-black" />
  );
};

export default Backdrop;
