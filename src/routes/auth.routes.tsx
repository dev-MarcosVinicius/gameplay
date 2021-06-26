import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { theme } from "../global/styles/theme";
import { Home } from "../screens/home";
import { SignIn } from "../screens/signin";
import { AppointmentDetails } from "../screens/appointmentDetails";

const { Navigator, Screen } = createStackNavigator();

export function AuthRoutes() {
    return (
        <Navigator
            headerMode='none'
            screenOptions={{cardStyle: {backgroundColor: 'transparent'}}}
        >
            <Screen
                name="SignIn"
                component={SignIn}
            />
            <Screen
                name="Home"
                component={Home}
            />
            <Screen
                name="AppointmentDetails"
                component={AppointmentDetails}
            />
        </Navigator>
    );
}