import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Home } from "../screens/home";
import { SignIn } from "../screens/signin";
import { AppointmentDetails } from "../screens/appointmentDetails";
import { AppointmentCreate } from "../screens/appointmentCreate";

const { Navigator, Screen } = createStackNavigator();

export function AppRoutes() {
    return (
        <Navigator
            headerMode='none'
            screenOptions={{cardStyle: {backgroundColor: 'transparent'}}}
        >
            <Screen
                name="Home"
                component={Home}
            />
            <Screen
                name="AppointmentDetails"
                component={AppointmentDetails}
            />
            <Screen
                name="AppointmentCreate"
                component={AppointmentCreate}
            />
        </Navigator>
    );
}