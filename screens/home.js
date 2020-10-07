import React, { Component } from "react";
import {
  StyleSheet,
  View,
  StatusBar,
  Text,
  ScrollView,
  Image
} from "react-native";

function Homepage(props) {
  return (
    <View style={styles.container}>
      <StatusBar animated />
      <View style={styles.top}>
        <View style={styles.rect1}>
          <Text style={styles.home2}>HOME</Text>
        </View>
      </View>
      <View style={styles.scrolltop}>
        <ScrollView
          horizontal={true}
          contentContainerStyle={styles.scrolltop_contentContainerStyle}
        >
          <Image
            source={require("./assets/images/banner1.jpg")}
            resizeMode="contain"
            style={styles.image1}
          ></Image>
          <Image
            source={require("./assets/images/banner2.jpg")}
            resizeMode="contain"
            style={styles.image2}
          ></Image>
          <Image
            source={require("./assets/images/banner3.jpg")}
            resizeMode="contain"
            style={styles.image3}
          ></Image>
          <Image
            source={require("./assets/images/banner41.jpg")}
            resizeMode="contain"
            style={styles.image4}
          ></Image>
        </ScrollView>
      </View>
      <View style={styles.scrollArea}>
        <ScrollView
          horizontal={false}
          contentContainerStyle={styles.scrollArea_contentContainerStyle}
        >
          <Image
            source={require("./assets/images/1551939582phpdzdmxY1.jpeg")}
            resizeMode="stretch"
            style={styles.image5}
          ></Image>
          <Text style={styles.loremIpsum1}>
            List of Institutions at CT Group, Maqsudan{"\n"}
            {"\n"}CT Institute of  Engineering, Management{"\n"}CT Institute of
            Technology{"\n"}CT Institute of Pharmaceutical Sciences{"\n"}CT
            Institute of Management Studies{"\n"}CT Institute of Management
            &amp; Technology{"\n"}CT Institute of Hotel Management{"\n"}CT
            Institute of Hospitality Management{"\n"}CT Institute of
            Architecture &amp; Planning{"\n"}CT Institute of Higher Studies
            {"\n"}MK College of Education{"\n"}CT Polytechnic College
          </Text>
          <Text style={styles.library}>LIBRARIES</Text>
          <Image
            source={require("./assets/images/libraries_header_pic.jpg")}
            resizeMode="contain"
            style={styles.image9}
          ></Image>
          <Text style={styles.hostel}>HOSTELS</Text>
          <Image
            source={require("./assets/images/hostels_header_pic.jpg")}
            resizeMode="contain"
            style={styles.image10}
          ></Image>
          <Text style={styles.laboratories}>LABORATORIES</Text>
          <Image
            source={require("./assets/images/c849295c-a09c-4d29-88ba-7428774d1fea.jpg")}
            resizeMode="cover"
            style={styles.image11}
          ></Image>
          <Text style={styles.seminarHalls}>SEMINAR HALLS</Text>
          <Image
            source={require("./assets/images/Seminar_hall.jpg")}
            resizeMode="contain"
            style={styles.image13}
          ></Image>
          <Image
            source={require("./assets/images/makephotogallery.net_1592516108.jpg")}
            resizeMode="contain"
            style={styles.image12}
          ></Image>
        </ScrollView>
      </View>
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
    shadowOpacity: 0.31,
    marginTop: 19
  },
  rect1: {
    backgroundColor: "rgba(74,144,226,1)",
    justifyContent: "center",
    flex: 1
  },
  home2: {
    
    color: "#121212",
    fontSize: 26,
    textAlign: "center",
    alignSelf: "center"
  },
  scrolltop: {
    height: 56,
    backgroundColor: "#E6E6E6"
  },
  scrolltop_contentContainerStyle: {
    width: 1180,
    height: 56,
    flexDirection: "row",
    flexWrap: "nowrap",
    alignItems: "center"
  },
  image1: {
    width: 300,
    height: 56
  },
  image2: {
    width: 300,
    height: 56
  },
  image3: {
    width: 300,
    height: 56
  },
  image4: {
    width: 300,
    height: 60
  },
  scrollArea: {
   // width: 412,
    backgroundColor: "#d5f7e8"
  },
  scrollArea_contentContainerStyle: {
    height: 1720,
    width: 360,
    flexWrap: "nowrap"
  },
  image5: {
    width: 490,
    height: 200,
    alignSelf: "center"
  },
  loremIpsum1: {
   
    color: "#121212",
    alignSelf: "stretch",
    height: 264,
    fontSize: 16,
    paddingLeft : 20,
  },
  library: {
   
    color: "#121212",
    fontSize: 28,
    textAlign: "center",
    alignSelf: "center"
  },
  image9: {
    width: 414,
    height: 200
  },
  hostel: {
   
    color: "#121212",
    fontSize: 28,
    textAlign: "center",
    alignSelf: "center"
  },
  image10: {
    width: 414,
    height: 145
  },
  laboratories: {
   
    color: "#121212",
    fontSize: 28,
    textAlign: "center",
    alignSelf: "center"
  },
  image11: {
    width: 414,
    height: 258
  },
  seminarHalls: {
    
    color: "#121212",
    fontSize: 28,
    textAlign: "center",
    alignSelf: "center"
  },
  image13: {
    width: 414,
    height: 250,

  },
  image12: {
    width: 414,
    height: 129
  }
});

export default Homepage;
