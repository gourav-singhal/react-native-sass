import React from "react";

// navigation buttons
import BtnSearch from "../navigation/BtnSearch";
import BtnAdd from "../navigation/BtnAdd";
import BtnNotifications from "../navigation/BtnNotifications";

export const getHeaderTitle = route => {
  const routeName = route.state
    ? route.state.routes[route.state.index].name
    : route.params?.screen || "Home";

  switch (routeName) {
    case "Home":
    case "Dashboard":
      return "Home";
    case "Chat":
      return "Chat";
    case "Calendar":
      return "Calendar";
    case "Activity":
      return "Activity";
  }
};

export const getHeaderButtons = ({ route }) => {
  const routeName = route.state
    ? route.state.routes[route.state.index].name
    : route.params?.screen || "Home";
  switch (routeName) {
    case "Home":
      return {
        headerShown: true,
        headerLeft: () => <BtnSearch />,
        headerRight: () => <BtnNotifications />
      };
    case "Chat":
    case "Calendar":
    case "Activity":
      return {
        headerShown: true,
        headerLeft: () => <BtnSearch />,
        headerRight: () => <BtnAdd />
      };
    case "MyProfile":
      return {
        headerShown: false
      };
  }
};
