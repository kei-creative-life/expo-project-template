import { View, Text, Button } from "react-native";
import React from "react";
import { useAuth } from "@clerk/clerk-expo";
import { Link } from "expo-router";

const Page = () => {
  const { signOut, isSignedIn } = useAuth();
  console.log(isSignedIn);
  return (
    <View>
      {isSignedIn && (
        <Button title="Log Out" onPress={() => signOut()}></Button>
      )}
      {!isSignedIn && (
        <Link href={"/(modals)/login"}>
          <Text>Log in</Text>
        </Link>
      )}
    </View>
  );
};

export default Page;
