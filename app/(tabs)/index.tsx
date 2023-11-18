import { View, Text } from "react-native";
import React from "react";
import { Link } from "expo-router";
import { useAuth } from "@clerk/clerk-expo";

const Page = () => {
  const { isSignedIn } = useAuth();
  return (
    <View>
      {!isSignedIn && <Link href={"/(modals)/login"}>Login</Link>}
      <Link href={"/(modals)/booking"}>Booking</Link>
      <Link href={"/listing/1337"}>Listing</Link>
    </View>
  );
};

export default Page;
