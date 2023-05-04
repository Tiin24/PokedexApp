import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React from "react";
import LoginForm from "../components/Auth/LoginForm";
import UserData from "../components/Auth/UserData";
import useAuth from "../hooks/useAuth";

export default function Acount() {
  const {auth} = useAuth()

  return <View>{auth ? <UserData /> : <LoginForm />}</View>;
}
