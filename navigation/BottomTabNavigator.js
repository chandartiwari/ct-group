import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import * as React from "react";

import TabBarIcon from "../components/TabBarIcon";
import Homepage from "../screens/Home";
import Eventpage from "../screens/events";
import Contactus from "../screens/contact";
import Aboutpage from "../screens/about";

const BottomTab = createBottomTabNavigator();

export default function BottomTabNavigator() {
  return (
      <BottomTab.Screen
        name="Home"
        component={Homepage}
        options={{
          title: "Get Started",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} name="md-code-working" />
          ),
        }}
      />
      <BottomTab.Screen
        name="events"
        component={Eventpage}
        options={{
          title: "Resources",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} name="md-book" />
          ),
        }}
      />
      <BottomTab.Screen
        name="contact us"
        component={Contactus}
        options={{
          title: "Resources",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} name="md-book" />
          ),
        }}
      />
      <BottomTab.Screen
        name="Links"
        component={Aboutpage}
        options={{
          title: "Resources",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} name="md-book" />
          ),
        }}
      />
  );
}

