import { TouchableOpacity, View, Text } from "react-native";
import React from "react";

const AddUserBtn = ({ onPress }) => {
  return (
    <TouchableOpacity
      className="bg-white w-[30vw] h-[5vh] rounded-full flex items-center justify-center"
      onPress={() => {
        onPress();
      }}
    >
      <Text>Add User</Text>
    </TouchableOpacity>
  );
};

export default AddUserBtn;
