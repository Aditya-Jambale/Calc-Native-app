import { BaseNavigationContainer } from '@react-navigation/core';
import * as React from "react";
import { stackNavigatorFactory } from "react-nativescript-navigation";
import { Calculator } from "./Calculator";

const StackNavigator = stackNavigatorFactory();

export const MainStack = () => (
    <BaseNavigationContainer>
        <StackNavigator.Navigator
            initialRouteName="Calculator"
            screenOptions={{
                headerStyle: {
                    backgroundColor: "#2196F3",
                },
                headerTintColor: "#ffffff",
                headerShown: true,
                headerTitle: "Calculator"
            }}
        >
            <StackNavigator.Screen
                name="Calculator"
                component={Calculator}
            />
        </StackNavigator.Navigator>
    </BaseNavigationContainer>
);