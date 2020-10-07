import React, { Component } from "react";
import { StyleSheet, View, Text, StatusBar } from "react-native";

function Aboutpage(props) {
  return (
    <View style={styles.container}>
      <StatusBar animated />
      <View style={styles.header1}>
        <View style={styles.rect1}>
          <Text style={styles.about1}>About</Text>
        </View>
      </View>
      <View style={styles.rect2}>
        <View style={styles.group2}>
          <Text style={styles.loremIpsum}>
            CT Group of Institutions are administered by {"\n"}CT Educational Society,
            Jalandhar, established in year {"\n"}1997, bring into being, by Hon’able
            Chairman S.Charanjit{"\n"} Singh Channi, a Visionary Educationalist and a
            Social {"\n"}Reformer of Nineteenth Century The Prophecy {"\n"}articulated by Visionary Management ushered by
            {"\n"}the Chairman and the promise made by enterprising{"\n"} Directors
            Mr.Manbir Singh, and Mr.Harpreet Singh, {"\n"}is moving ahead day by day
          </Text>
          <Text style={styles.socialLinks}>social links</Text>
          <Text style={styles.loremIpsum3}>
            https://www.facebook.com/ctgroup.jalandhar
          </Text>
          <Text style={styles.loremIpsum4}>
            https://twitter.com/CTGroupshahpur
          </Text>
          <Text style={styles.loremIpsum5}>
            https://www.youtube.com/channel/UCbnz-xueiXi4ksPb_Gbn3xg?view_as=subscriber
          </Text>
          <Text style={styles.loremIpsum6}>
            https://www.instagram.com/ctgroupofinstitutions/
          </Text>
          <Text style={styles.loremIpsum7}>
            https://www.linkedin.com/company/13237353/admin/
          </Text>
          <Text style={styles.loremIpsum8}>DEVELOPED BY CHANDAR TIWARI</Text>
        </View>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  header1: {
    height: 63,
    marginTop: 20
  },
  rect1: {
    backgroundColor: "rgba(74,144,226,1)",
    justifyContent: "center",
    flex: 1
  },
  about1: {

    color: "#121212",
    fontSize: 26,
    textAlign: "center",
    alignSelf: "center"
  },
  rect2: {
    backgroundColor: "#d5f7e8",
    flex: 1
  },
  group2: {
    justifyContent: "space-between",
    height: 507,
    flexWrap: "wrap"
  },
  loremIpsum: {

    color: "#121212",
    textAlign: "left",
    // alignSelf: "stretch"
  },
  socialLinks: {

    color: "#121212",
    fontSize: 20
  },

  loremIpsum8: {

    color: "rgba(103,218,169,1)",
    fontSize: 20,
    alignSelf: "flex-start",
    textAlign: "center"
  },
  materialBasicFooter1: {
    height: 50
  }
});

export default Aboutpage;

