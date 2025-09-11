// needs refactoring for spacing (should be percentages)

import { IconSymbol } from '@/components/ui/IconSymbol'; // adjust path if needed
import { Tabs } from 'expo-router';
import React from 'react';


const _layout = () => {
  
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: '#5a5a5aff',
          borderTopColor: '#5a5a5aff',
          borderTopWidth: 3,
        },
        tabBarActiveTintColor: '#fff',
        tabBarInactiveTintColor: '#8d8d8dff',
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ color }) => (
            <IconSymbol name="home" color={color} />
          ),
          headerTitle: '', // removes the top title
        }}
      />
      <Tabs.Screen
        name="report"
        options={{
          tabBarIcon: ({ color }) => (
            <IconSymbol name="report-problem" color={color} />
          ),
          headerTitle: '', // removes the top title
        }}
      />
    </Tabs>
  );
};

export default _layout;


