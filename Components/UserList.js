import { View, Text, FlatList } from "react-native";
import React from "react";
import SingleUser from "./SingleUser";

const UserList = ({ Data }) => {
  return (
    <View className="h-[80%] w-[100%] py-5 ">
      <FlatList
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          height: "auto",
          width: "100%",
          display: "flex",
          gap: 30,
        }}
        data={Data}
        renderItem={({ item }) => <SingleUser data={item} />}
      />
    </View>
  );
};

export default UserList;
