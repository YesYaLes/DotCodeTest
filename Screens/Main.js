import { View } from "react-native";
import { useEffect, useState } from "react";
import React from "react";
import UserList from "../Components/UserList";
import AddUserBtn from "../Components/AddUserBtn";
import { useDispatch, useSelector } from "react-redux";
import UserModal from "../Components/UserModal";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { setBackdrop, setUsers } from "../store/mainSlice";
import Backdrop from "../Components/Backdrop";

const Main = () => {
  const [visible, setVisible] = useState(false);
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.main);
  const { backdrop } = useSelector((state) => state.main);

  const getUsersFromLocalStorage = async () => {
    const Users = JSON.parse(await AsyncStorage.getItem("Users"));
    dispatch(setUsers(Users));
  };

  useEffect(() => {
    getUsersFromLocalStorage();
  }, []);

  useEffect(() => {
    AsyncStorage.setItem("Users", JSON.stringify(users));
  }, [users]);

  const onPressBtn = () => {
    setVisible(!visible);
    dispatch(setBackdrop());
  };

  return (
    <View className="flex flex-1 bg-blue-400 items-center justify-center h-6 w-[100%] px-[5vw]">
      <UserList Data={users} />
      <AddUserBtn onPress={onPressBtn} />
      <UserModal visible={visible} closeModal={onPressBtn} />
      {backdrop && <Backdrop />}
    </View>
  );
};

export default Main;
