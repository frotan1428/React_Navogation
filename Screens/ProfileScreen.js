import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import BottomSheet from "reanimated-bottom-sheet";
const ProfileScreen = () => {
  const sheetRef = React.useRef(null);
  const renderHeader = () => {
    <View style={styles.headerContainer}>
      <View style={styles.headerButton}></View>
    </View>
  }
  const renderContent = () => {
    <View>
      <Text>Hi</Text>
    </View>
  }
  return (
    <>
      <View style={styles.container}>
        <Button title="Open" />
        <Button title="Close" />
      </View>
      <BottomSheet
        ref={sheetRef}
        snapPoints={[300, 200,30]}
        renderContent={renderContent}
        renderHeader={renderHeader}
      />
    </>
  );
};
export default ProfileScreen;
const styles = StyleSheet.create({
  container:{
    flex:1,
    flexDirection:"row",
    alignItems:"flex-start",
    justifyContent:"space-evenly",
    paddingTop:10,
    backgroundColor:"#FF5151"
  },

  headerContainer:{
    backgroundColor:"white",
    borderTopLeftRadius:20,
    borderTopRightRadius:20


  },
  
});
