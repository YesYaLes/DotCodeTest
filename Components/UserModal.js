import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  TextInput,
  Alert,
} from "react-native";
import { useState } from "react";
import React from "react";
import { useDispatch } from "react-redux";
import { addUser, changeUser, setBackdrop } from "../store/mainSlice";
const UserModal = ({ data, visible, closeModal, fromSingleUser }) => {
  const dispatch = useDispatch();
  const [userData, setUserData] = useState({
    firstName: fromSingleUser ? data.firstName : "",
    lastName: fromSingleUser ? data.lastName : "",
    email: fromSingleUser ? data.email : "",
    id: fromSingleUser ? data.id : Math.random(),
  });

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateUserData = () => {
    return (
      userData.firstName.length > 3 &&
      userData.firstName.length < 15 &&
      userData.lastName.length > 3 &&
      userData.lastName.length < 15 &&
      userData.email.length > 3 &&
      userData.email.length < 25 &&
      validateEmail(userData.email)
    );
  };

  return (
    <>
      <Modal visible={visible} animationType="fade" transparent={true}>
        <View className=" justify-center items-center mt-[22px] h-[100vh] w-[100vw]">
          <View className="h-[50vh] m-[20px] rounded-2xl p-[30px] items-center bg-white w-[80vw]">
            <TouchableOpacity
              className="bg-red-400 h-[30px] w-[30px] absolute top-[5px] right-[5px] rounded-full flex  items-center justify-center "
              onPress={() => {
                closeModal();
              }}
            >
              <Text>X</Text>
            </TouchableOpacity>
            <View className="flex gap-[50px] items-center justify-center h-[100%] w-[100%]">
              <View className="w-[100%] flex items-center justify-center">
                <TextInput
                  placeholder="FirstName"
                  className=""
                  value={userData.firstName}
                  onChangeText={(value) => {
                    setUserData({ ...userData, firstName: value });
                  }}
                />
                <View className="mt-[5px] h-[1px] w-[80%] bg-gray-400" />
              </View>

              <View className="w-[100%] flex items-center justify-center">
                <TextInput
                  text
                  placeholder="LastName"
                  className=""
                  value={userData.lastName}
                  onChangeText={(value) => {
                    setUserData({ ...userData, lastName: value });
                  }}
                />
                <View className="mt-[5px] h-[1px] w-[80%] bg-gray-400" />
              </View>
              <View className="w-[100%] flex items-center justify-center">
                <TextInput
                  text
                  placeholder="Email"
                  className=""
                  value={userData.email}
                  onChangeText={(value) => {
                    setUserData({ ...userData, email: value });
                  }}
                />
                <View className="mt-[5px] h-[1px] w-[80%] bg-gray-400" />
              </View>
            </View>
            <TouchableOpacity
              className=" w-[30vw] h-[5vh] rounded-full flex items-center justify-center bg-green-400"
              onPress={() => {
                if (validateUserData()) {
                  if (fromSingleUser) {
                    dispatch(changeUser(userData));
                    closeModal();
                  } else {
                    dispatch(addUser(userData));
                    closeModal();
                  }
                } else {
                  Alert.alert("Incorrect Data");
                }
              }}
            >
              <Text>Apply</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </>
  );
};

export default UserModal;
