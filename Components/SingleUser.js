import { View, Text, TouchableOpacity, Alert } from "react-native";
import UserModal from "./UserModal";
import { useState } from "react";
import React from "react";
import { Animation2 } from "../Animations/Animations";
import { useDispatch } from "react-redux";
import { deleteUser, setBackdrop } from "../store/mainSlice";

const SingleUser = ({ data }) => {
  const [expanded, setExpanded] = useState(false);
  const [modalVisibility, setModalVisibility] = useState(false);
  const [changedUserData, setChangedUserData] = useState(data);
  const dispatch = useDispatch();
  return (
    <View className="flex gap-2 w-[100%]">
      <TouchableOpacity
        className="flex flex-row  w-[100%] h-[7vh] bg-white rounded-xl  items-center justify-around m-0"
        onPress={() => {
          Animation2();
          setExpanded(!expanded);
        }}
      >
        <View className="w-[20%] flex justify-center items-center">
          <View className="h-[40px] w-[40px] flex items-center justify-center bg-blue-400 rounded-full ">
            <Text className="text-white">{data.firstName.slice(0, 1)}</Text>
          </View>
        </View>

        <View className="flex flex-row items-center justify-start w-[80%] gap-3 ">
          <Text>{data.firstName}</Text>
          <Text>{data.lastName}</Text>
          <Text>{data.email}</Text>
        </View>
      </TouchableOpacity>
      {expanded && (
        <View className="flex flex-row  w-[100%]  items-center justify-around">
          <TouchableOpacity
            className="bg-yellow-200 p-[7px] rounded-lg w-[20vw] "
            onPress={() => {
              dispatch(setBackdrop());
              setModalVisibility(!modalVisibility);
              setChangedUserData(data);
            }}
          >
            <Text className="text-[15px] text-center">Change</Text>
          </TouchableOpacity>
          <TouchableOpacity
            className="bg-red-400 p-[7px] rounded-lg w-[20vw]"
            onPress={() => {
              Alert.alert("Are you sure?", "Data wont be saved", [
                {
                  text: "Yes",
                  onPress: () => {
                    dispatch(deleteUser(data));
                  },
                },
                {
                  text: "No",
                  onPress: () => {
                    return;
                  },
                },
              ]);
            }}
          >
            <Text className="text-[15px] text-center">Delete</Text>
          </TouchableOpacity>
        </View>
      )}

      <UserModal
        fromSingleUser={true}
        visible={modalVisibility}
        data={changedUserData}
        closeModal={() => {
          setModalVisibility(!modalVisibility);
          dispatch(setBackdrop());
        }}
      />
    </View>
  );
};

export default SingleUser;
