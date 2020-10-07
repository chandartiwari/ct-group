import * as React from "react";
import { Text, View, StyleSheet, StatusBar, ScrollView, Image, Linking, TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from '@expo/vector-icons';

function homepage() {
  return (
    <View style={styles.container}>
      <StatusBar animated />
      <View style={styles.top}>
        <View style={styles.rect1}>
          <Text style={styles.home_t}>HOME</Text>
        </View>
      </View>
      <View>
        <ScrollView
          horizontal={false}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollArea_1}
        >
          <Image
            source={require("./assets/images/1551939582phpdzdmxY1.jpeg")}
            resizeMode="stretch"
            style={styles.image5}
          ></Image>
          <View style={styles.menu}>
            <View style={styles.hlist_items}>
              <TouchableOpacity
                onPress={() => {
                  Linking.openURL("https://ptu.ac.in/Syllabus/CompApp.aspx");
                }}
                style={styles.button1}
              >
                <Text style={styles.text_menu}>Syllabus</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.hlist_items}>
              <TouchableOpacity
                onPress={() => {
                  Linking.openURL(
                    "https://www.ctgroup.in/programmes_offered.php"
                  );
                }}
                style={styles.button1}
              >
                <Text style={styles.text_menu}>Courses &amp; fee detail</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.hlist_items}>
              <TouchableOpacity
                onPress={() => {
                  Linking.openURL(
                    "https://www.ctgroup.in/images/admissions/CTGIBrochure2021.pdf"
                  );
                }}
                style={styles.button1}
              >
                <Text style={styles.text_menu}>E-Brochure 2020-21</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.hlist_items}>
              <TouchableOpacity
                onPress={() => {
                  Linking.openURL("https://www.ctgroup.in/");
                }}
                style={styles.button1}
              >
                <Text style={styles.text_menu}>WEBSITE</Text>
              </TouchableOpacity>
            </View>
          </View>

          <Text style={styles.text_hlist}>
            List of Institutions at CT Group, Maqsudan
          </Text>
          <Text style={styles.loremIpsum1}>
            CT Institute of  Engineering, Management
            {"\n"}CT Institute of Technology
            {"\n"}CT Institute of Pharmaceutical Sciences
            {"\n"}CT Institute of Management Studies
            {"\n"}CT Institute of Management &amp; Technology
            {"\n"}CT Institute of Hotel Management
            {"\n"}CT Institute of Hospitality Management
            {"\n"}CT Institute of Architecture &amp; Planning
            {"\n"}CT Institute of Higher Studies
            {"\n"}CT Polytechnic College
            {"\n"}MK College of Education
          </Text>
          <Text style={styles.home_h1}>LIBRARIES</Text>
          <Image
            source={require("./assets/images/libraries_header_pic.jpg")}
            resizeMode="cover"
            style={styles.image9}
          ></Image>
          <Text style={styles.home_h1}>HOSTELS</Text>
          <Image
            source={require("./assets/images/hostels_header_pic.jpg")}
            resizeMode="cover"
            style={styles.image10}
          ></Image>
          <Text style={styles.home_h1}>LABORATORIES</Text>
          <Image
            source={require("./assets/images/c849295c-a09c-4d29-88ba-7428774d1fea.jpg")}
            resizeMode="cover"
            style={styles.image11}
          ></Image>
          <Text style={styles.home_h1}>SEMINAR HALLS</Text>
          <Image
            source={require("./assets/images/Seminar_hall.jpg")}
            resizeMode="cover"
            style={styles.image13}
          ></Image>
          <Text style={styles.home_h1}>Our Recruiters</Text>
          <View style={styles.scrolltop}>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.scrolltop_contentContainerStyle_ht}
            >
              <Image
                source={require("./assets/images/banner1.jpg")}
                resizeMode="cover"
                style={styles.image_banner}
              ></Image>
              <Image
                source={require("./assets/images/banner2.jpg")}
                resizeMode="cover"
                style={styles.image_banner}
              ></Image>
              <Image
                source={require("./assets/images/banner3.jpg")}
                resizeMode="cover"
                style={styles.image_banner}
              ></Image>
              <Image
                source={require("./assets/images/banner41.jpg")}
                resizeMode="cover"
                style={styles.image_banner}
              ></Image>
            </ScrollView>
          </View>
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

function Eventpage() {
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <View style={styles.rect1}>
          <Text style={styles.home_t}>EVENTS</Text>
        </View>
      </View>
      <View style={styles.scrollArea}>
        <ScrollView horizontal={false}>
          <Image
            source={require("./assets/images/123.jpg")}
            resizeMode="stretch"
            style={styles.image14}
          ></Image>
          <Image
            source={require("./assets/images/456.jpg")}
            resizeMode="stretch"
            style={styles.image14}
          ></Image>
          <Image
            source={require("./assets/images/gal_08-02-181580295291.jpg")}
            resizeMode="stretch"
            style={styles.image14}
          ></Image>
          <Image
            source={require("./assets/images/gal_04-04-181693415059.jpg")}
            resizeMode="stretch"
            style={styles.image14}
          ></Image>
          <Image
            source={require("./assets/images/gal_11-08-1874331774.jpg")}
            resizeMode="stretch"
            style={styles.image14}
          ></Image>
          <Image
            source={require("./assets/images/celeb.jpg")}
            resizeMode="stretch"
            style={styles.image14}
          ></Image>
          <Image
            source={require("./assets/images/celeb1.jpg")}
            resizeMode="stretch"
            style={styles.image14}
          ></Image>
          <Image
            source={require("./assets/images/marat.jpg")}
            resizeMode="stretch"
            style={styles.image14}
          ></Image>
          <Image
            source={require("./assets/images/kris.jpg")}
            resizeMode="stretch"
            style={styles.image14}
          ></Image>
        </ScrollView>
      </View>
    </View>
  );
}

function Contactus() {
  return (
    <View style={styles.container}>
      <StatusBar animated />
      <View style={styles.top}>
        <View style={styles.rect1}>
          <Text style={styles.home_t}>Contact us</Text>
        </View>
      </View>
      <View style={styles.scrollArea15}>
        <ScrollView
          horizontal={false}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollArea10_contentContainerStyle}
        >
          <View style={styles.clg_cardbox}>
            <View style={styles.clg_card}>
              <Image
                source={require("./assets/images/ct-uni-logo.png")}
                style={styles.image_clg}
              ></Image>
              <View>
                <Text style={styles.text_clg}>CT UNIVERSITY</Text>

                <Text style={styles.address_clg}>
                  <Text style={{ color: "#c2c2c2", fontSize: 23 }}>
                    Address :{" "}
                  </Text>
                  CT University, Ferozepur Road, Sidhwan Khurd 142024{"\n"}
                </Text>
                <Text>
                  <Text style={{ color: "#c2c2c2", fontSize: 23 }}>
                    contact no:{" "}
                  </Text>
                  9914511016,
                </Text>
                <Text>
                  <Text style={{ color: "#c2c2c2", fontSize: 23 }}>
                    Email :
                  </Text>{" "}
                  info@ctuniversity.in
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.clg_cardbox}>
            <View style={styles.clg_card2}>
              <Image
                source={require("./assets/images/ct-grp.png")}
                style={styles.image_clg}
              ></Image>
              <View>
                <Text style={styles.text_clg}>CT GROUP</Text>
                <Text style={styles.address_clg}>
                  <Text style={{ color: "#c2c2c2", fontSize: 23 }}>
                    Address :{" "}
                  </Text>
                  Shahpur, Po-Udopur, Near Lambra,Jalandhar-144020{"\n"}
                </Text>
                <Text>
                  <Text style={{ color: "#c2c2c2", fontSize: 23 }}>
                    contact no:{" "}
                  </Text>
                  1800-137-2227 181-5055128
                </Text>
                <Text>
                  <Text style={{ color: "#c2c2c2", fontSize: 23 }}>
                    Email :
                  </Text>
                  info@ctuniversity.in
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.clg_cardbox}>
            <View style={styles.clg_card3}>
              <Image
                source={require("./assets/images/ctschool.png")}
                resizeMode="contain"
                style={styles.image_clg}
              ></Image>
              <View>
                <Text style={styles.text_clg}>CT public school</Text>
                <Text style={styles.address_clg}>
                  <Text style={{ color: "#c2c2c2", fontSize: 23 }}>
                    Address :{" "}
                  </Text>
                  Greater Kailash, G.T.Road Maqsudan, Jalandhar City Punjab,
                  INDIA{"\n"}
                </Text>
                <Text>
                  <Text style={{ color: "#c2c2c2", fontSize: 23 }}>
                    contact no:{" "}
                  </Text>
                  181-5009565 98149-20839{"\n"}
                  <Text style={{ color: "#c2c2c2", fontSize: 23 }}>Fax: </Text>
                  0181-2672318
                </Text>
                <Text>
                  <Text style={{ color: "#c2c2c2", fontSize: 23 }}>
                    Email :
                  </Text>
                  ctps_school@yahoo.co.in
                </Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

function Aboutpage() {
  return (
    <View style={styles.container}>
      <StatusBar animated />
      <View style={styles.top}>
        <View style={styles.rect1}>
          <Text style={styles.home_t}>About</Text>
        </View>
      </View>
      <View style={styles.rect2}>
        <View style={styles.group2}>
          <Text style={styles.text_about}>
            CT Group of Institutions are administered by CT Educational Society,
            Jalandhar, established in year 1997, bring into being by Hon’able
            Chairman S.Charanjit Singh Channi, a Visionary Educationalist and a
            Social Reformer of Nineteenth Century The Prophecy articulated by
            Visionary Management ushered by the Chairman and the promise made by
            enterprising Directors Mr.Manbir Singh, and Mr.Harpreet Singh, is
            moving ahead day by day
          </Text>

          <Text style={styles.socialLinks}>SOCIAL LINKS</Text>
          <Text
            onPress={() => {
              Linking.openURL("https://www.facebook.com/ctgroup.jalandhar");
            }}
            style={styles.loremIpsum3}
          >
            FACEBOOK
          </Text>
          <Text
            onPress={() => {
              Linking.openURL("https://twitter.com/CTGroupshahpur");
            }}
            style={styles.loremIpsum3}
          >
            TWITTER
          </Text>
          <Text
            onPress={() => {
              Linking.openURL(
                "https://www.youtube.com/channel/UCbnz-xueiXi4ksPb_Gbn3xg?view_as=subscriber"
              );
            }}
            style={styles.loremIpsum3}
          >
            YOUTUBE
          </Text>
          <Text
            onPress={() => {
              Linking.openURL(
                "https://www.instagram.com/ctgroupofinstitutions/"
              );
            }}
            style={styles.loremIpsum3}
          >
            INSTAGRAM
          </Text>
          <Text
            onPress={() => {
              Linking.openURL(
                "https://www.linkedin.com/company/13237353/admin/"
              );
            }}
            style={styles.loremIpsum3}
          >
            LINKEDIN
          </Text>
        </View>
      </View>
      <Text style={styles.text_madeby}>BUILD BY CHANDAR TIWARI</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="home"
      tabBarOptions={{
        activeTintColor: "#3498DB",
      }}
    >
      <Tab.Screen
        name="home"
        component={homepage}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="events"
        component={Eventpage}
        options={{
          tabBarLabel: "events",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Contactus}
        options={{
          tabBarLabel: "contact us",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="about us"
        component={Aboutpage}
        options={{
          tabBarLabel: "about",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  //home

  top: {
    height: 63,
    shadowColor: "rgba(155,155,155,1)",
    shadowOpacity: 10,
    marginTop: 19,
  },
  rect1: {
    backgroundColor: "#3498DB",
    justifyContent: "center",
    flex: 1,
  },
  home_t: {
    color: "#121212",
    fontSize: 26,
    textAlign: "center",
    alignSelf: "center",
  },
  menu: {
    alignItems: "stretch",
    justifyContent: "space-between",
    paddingVertical: 2,
  },
  button1: {
    height: 65,
    alignSelf: "stretch",
    justifyContent: "center",
    backgroundColor: "#2E86C1",
    paddingVertical: 20,
    borderRadius: 20,
    paddingVertical: 10,
  },
  hlist_items: {
    padding: 5,
  },
  text_menu: {
    color: "#121212",
    fontSize: 28,
    alignSelf: "center",
    alignItems: "stretch",
    textAlign: "auto",
    borderRadius: 40,
  },
  scrolltop: {
    height: 56,
    backgroundColor: "#E6E6E6",
  },
  scrolltop_contentContainerStyle_ht: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  image_banner: {
    width: 300,
    height: 56,
  },
  scrollArea_1: {
    paddingBottom: 86,
    backgroundColor: "#ECF0F1",
  },
  image5: {
    width: "100%",
    maxWidth: 450,
    height: 200,
    alignSelf: "center",
  },
  text_hlist: {
    color: "#121212",
    alignSelf: "stretch",
    fontSize: 20,
    textAlign: "center",
    padding: 5,
    backgroundColor: "#3498DB",
  },
  loremIpsum1: {
    color: "#121212",
    alignSelf: "stretch",
    fontSize: 16,
    paddingLeft: 15,
  },
  home_h1: {
    color: "#121212",
    fontSize: 28,
    textAlign: "center",
    alignSelf: "stretch",
    backgroundColor: "#3498DB",
  },
  image9: {
    width: "100%",
    height: 190,
  },
  image10: {
    width: "100%",
    height: 145,
  },
  image11: {
    width: "100%",
    height: 258,
  },
  image13: {
    width: "100%",
    height: 250,
  },
  image12: {
    width: "100%",
    height: 100,
  },

  //event

  scrollArea: {
    backgroundColor: "#ECF0F1",
    paddingBottom: 80,
  },
  image14: {
    width: "100%",
    maxWidth: 400,
    height: 300,
    borderRadius: 9,
    alignSelf: "center",
    padding: 15,
  },

  //contact us

  scrollArea15: {
    backgroundColor: "#ECF0F1",
  },
  scrollArea10_contentContainerStyle: {
    alignItems: "flex-start",
    flexWrap: "wrap",
    overflow: "hidden",
    justifyContent: "flex-start",
    paddingBottom: 85,
  },
  clg_cardbox: {
    padding: 8,
    width: "100%",
  },
  clg_card: {
    backgroundColor: "white",
    borderRadius: 20,
    padding: 15,
    elevation: 10,
    alignSelf: "auto",
  },
  clg_card2: {
    elevation: 10,
    alignSelf: "stretch",
    backgroundColor: "white",
    borderRadius: 20,
    padding: 15,
  },
  clg_card3: {
    elevation: 10,
    alignSelf: "stretch",
    backgroundColor: "white",
    borderRadius: 20,
    padding: 15,
  },
  image_clg: {
    height: 160,
    width: 150,
    alignSelf: "center",
  },
  text_clg: {
    color: "#121212",
    fontSize: 30,
    textAlign: "left",
    alignSelf: "flex-start",
  },
  address_clg: {
    color: "#121212",
    fontSize: 16,
    textAlign: "left",
    alignSelf: "stretch",
  },

  //about page

  rect2: {
    flex: 1,
  },
  group2: {
    flex: 1,
    justifyContent: "space-between",
    flexWrap: "nowrap",
    backgroundColor: "#ECF0F1",
    paddingVertical: 5,
    maxHeight: 500,
  },
  text_about: {
    alignSelf: "flex-start",
    paddingHorizontal: 7,
  },
  socialLinks: {
    alignSelf: "center",
    color: "#885ffa",
    fontSize: 24,
  },
  loremIpsum3: {
    fontSize: 25,
    backgroundColor: "#D6EAF8",
    paddingLeft: 18,
    borderRadius: 25,
    paddingVertical: 7,
    alignSelf: "stretch",
    overflow: "hidden",
  },
  text_madeby: {
    color: "#885ffa",
    fontSize: 20,
    textAlign: "center",
    //paddingTop: 10,
    backgroundColor: "#FFFFFF",
  },
});
