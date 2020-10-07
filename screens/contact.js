import React, { Component } from "react";
import {
  StyleSheet,
  View,
  StatusBar,
  Text,
  ScrollView,
  Image
} from "react-native";

function Contactus(props) {
  return (
    <View style={styles.container}>
      <StatusBar animated />
      <View style={styles.group1}>
        <View style={styles.rect1}>
          <Text style={styles.text}>Contact us</Text>
        </View>
      </View>
      <View style={styles.scrollArea1}>
        <ScrollView
          horizontal={false}
          contentContainerStyle={styles.scrollArea1_contentContainerStyle}
        >
          <Image
            source={require("./assets/images/ct-uni-logo-crop.png")}
            resizeMode="center"
            style={styles.image1}
          ></Image>
          <View style={styles.group2}>
            <Text style={styles.ctUniversity1}>CT UNIVERSITY</Text>
            <Text style={styles.addressclg1}>
              Address : CT University, Ferozepur Road,{"\n"} Sidhwan Khurd
              142024
            </Text>
            <Text style={styles.contactno1}>
              contact no: 1800-137-7777{"\n"} 09914511016{"\n"} 0162-4503800
            </Text>
            <Text style={styles.email1}>Email : info@ctuniversity.in</Text>
          </View>
          <Image
            source={require("./assets/images/ct-grp.png")}
            resizeMode="contain"
            style={styles.image2}
          ></Image>
          <View style={styles.group3}>
            <Text style={styles.ctGroup1}>CT group</Text>
            <Text style={styles.addressclg2}>
              Address : Shahpur, Po-Udopur, Near Lambra, {"\n"} Jalandhar
              -144020 Punjab, INDIA
            </Text>
            <Text style={styles.contactno2}>
              contact no: 1800-137-2227{"\n"}+91-181-5055128{"\n"}
              +91-181-2995967
            </Text>
            <Text style={styles.email2}>Email : info@ctuniversity.in</Text>
          </View>
          <Image
            source={require("./assets/images/ctschool.jpg")}
            resizeMode="contain"
            style={styles.image3}
          ></Image>
          <View style={styles.group4}>
            <Text style={styles.ctPublicSchool1}>CT public school</Text>
            <Text style={styles.addressclg3}>
              Address : Greater Kailash, G.T.RoadMaqsudan,{"\n"} Jalandhar City
              Punjab, INDIA
            </Text>
            <Text style={styles.contactno3}>
              contact no: 0181- 5009565{"\n"}Fax : +9 1 181-2672318{"\n"}+91
              98149-20839
            </Text>
            <Text style={styles.email3}>Email : ctps_school@yahoo.co.in</Text>
            
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  group1: {
    height: 63,
    marginTop: 20
  },
  rect1: {
    backgroundColor: "rgba(74,144,226,1)",
    justifyContent: "center",
    flex: 1
  },
  text: {
    color: "#121212",
    fontSize: 26,
    textAlign: "center",
    alignSelf: "center"
  },
  scrollArea1: {
    backgroundColor: "#d5f7e8",
    paddingLeft : 20,
  },
  scrollArea1_contentContainerStyle: {
    height: 1000,
    alignItems: "flex-start",
    flexWrap: "wrap",
    overflow: "hidden",
    justifyContent: "flex-start"
  },
  image1: {
   height: 60,
    width: 140,
    alignSelf: "flex-start",
    alignSelf: "stretch",
  },
  group2: {
    height: 153,
    alignSelf: "stretch"
  },
  ctUniversity1: {
    color: "#121212",
    fontSize: 30,
    textAlign: "left",
    alignSelf: "flex-start"
  },
  addressclg1: {
    color: "#121212",
    fontSize: 16,
    textAlign: "left",
    alignSelf: "flex-start"
  },
  contactno1: {
    color: "#121212",
    textAlign: "right",
    height: 51,
    alignSelf: "flex-start"
  },
  email1: {
    color: "#121212",
    alignSelf: "flex-start",
  },
  image2: {
   // height: 42,
   // width: 188,
    alignSelf: "stretch",
    paddingTop : 40,
  },
  group3: {
    width: 328,
    height: 159
  },
  ctGroup1: {
    color: "#121212",
    fontSize: 30,
    textAlign: "left",
    alignSelf: "flex-start"
  },
  addressclg2: {
    color: "#121212",
    fontSize: 16,
    textAlign: "left",
    alignSelf: "flex-start"
  },
  contactno2: {
    color: "#121212",
    textAlign: "right",
    height: 51,
    alignSelf: "flex-start"
  },
  email2: {
    color: "#121212",
    alignSelf: "flex-start"
  },
  image3: {
    height: 200,
    width: 129,
    alignSelf: "flex-start",
    paddingTop : 40,
  },
  group4: {
    width: 360,
    height: 140
  },
  ctPublicSchool1: {
    color: "#121212",
    fontSize: 30,
    textAlign: "left",
    alignSelf: "flex-start"
  },
  addressclg3: {
    color: "#121212",
    fontSize: 16,
    textAlign: "left",
    alignSelf: "flex-start"
  },
  contactno3: {
    color: "#121212",
    textAlign: "right",
    height: 51,
    alignSelf: "flex-start"
  },
  email3: {
    color: "#121212",
    alignSelf: "flex-start"
  },
 
});

export default Contactus;
