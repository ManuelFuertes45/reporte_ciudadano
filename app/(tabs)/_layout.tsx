import { IconSymbol } from '@/components/ui/IconSymbol';
import { Tabs } from 'expo-router';
import React from 'react';


// Defines the layout of the bottom tab bar
const _layout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false, // Icons in the bottom tab bar won't have labels
        tabBarStyle: {
          backgroundColor: '#5a5a5aff', // Tab bar background color
          borderTopColor: '#5a5a5aff', // Tab bar border color
          borderTopWidth: 3, // Thickness of top border
        },
        tabBarActiveTintColor: '#fff', // Icon color when tab is active
        tabBarInactiveTintColor: '#8d8d8dff', // Icon color when tab is inactive
      }}
    >

      <Tabs.Screen
        name="home"
        options={{
          tabBarIcon: ({ color }) => <IconSymbol name="home" color={color} />,
          headerTitle: '',
        }}
      />

      <Tabs.Screen // Report screen
        name="report" // Route name for report screen
        options={{
          tabBarIcon: ({ color }) => (
            <IconSymbol name="report-problem" color={color} />
          ),
          headerTitle: '', // Removes top header title
        }}
      />

    </Tabs>
  );
};

export default _layout;
