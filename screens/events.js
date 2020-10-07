import React, { Component } from "react";
import {
  StyleSheet,
  View,
  StatusBar,
  Text,
  ScrollView,
  Image
} from "react-native";

function Eventpage(props) {
  return (
    <View style={styles.container}>
      <StatusBar animated />
      <View style={styles.topColumn}>
        <View style={styles.top}>
          <View style={styles.rect1}>
            <Text style={styles.events}>EVENTS</Text>
          </View>
        </View>
        <View style={styles.scrollArea}>
          <ScrollView
            horizontal={false}
            contentContainerStyle={styles.scrollArea_contentContainerStyle}
          >
            <Image
              source={require("./assets/images/123.jpg")}
              resizeMode="contain"
              style={styles.image}
            ></Image>
            <Image
              source={require("./assets/images/456.jpg")}
              resizeMode="contain"
              style={styles.image2}
            ></Image>
            <Image
              source={require("./assets/images/gal_08-02-181580295291.jpg")}
              resizeMode="cover"
              style={styles.image3}
            ></Image>
            <Image
              source={require("./assets/images/gal_04-04-181693415059.jpg")}
              resizeMode="cover"
              style={styles.image4}
            ></Image>
            <Image
              source={require("./assets/images/gal_11-08-1874331774.jpg")}
              resizeMode="stretch"
              style={styles.image5}
            ></Image>
            <Image
              source={require("./assets/images/celeb.jpg")}
              resizeMode="stretch"
              style={styles.image6}
            ></Image>
            <Image
              source={require("./assets/images/celeb1.jpg")}
              resizeMode="stretch"
              style={styles.image7}
            ></Image>
            <Image
              source={require("./assets/images/marat.jpg")}
              resizeMode="stretch"
              style={styles.image8}
            ></Image>
            <Image
              source={require("./assets/images/kris.jpg")}
              resizeMode="contain"
              style={styles.image9}
            ></Image>
          </ScrollView>
        </View>
      </View>
      <View style={styles.topColumnFiller}></View>
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  top: {
    height: 63,
    shadowColor: "rgba(155,155,155,1)",
    shadowOffset: {
      width: 5,
      height: 5
    },
    elevation: 0,
    shadowOpacity: 0.31
  },
  rect1: {
    backgroundColor: "rgba(74,144,226,1)",
    justifyContent: "center",
    flex: 1
  },
  events: {
   
    color: "#121212",
    fontSize: 26,
    textAlign: "center",
    alignSelf: "center"
  },
  scrollArea: {
    //height: 600,
    backgroundColor: "#d5f7e8"
  },
  scrollArea_contentContainerStyle: {
    height: 1950,
    alignItems: "stretch"
  },
  image: {
    width: 410,
    height: 200
  },
  image2: {
    width: 410,
    height: 200
  },
  image3: {
    width: 410,
    height: 200
  },
  image4: {
    width: 410,
    height: 200
  },
  image5: {
    width: 410,
    height: 200
  },
  image6: {
    width: 410,
    height: 200
  },
  image7: {
    width: 410,
    height: 200
  },
  image8: {
    width: 410,
    height: 200
  },
  image9: {
    width: 410,
    height: 200
  },
  topColumn: {
    marginTop: 19
  },
  topColumnFiller: {
    flex: 1
  },
  
});

export default Eventpage;
