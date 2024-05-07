import { Tabs } from 'expo-router';

import { FontAwesome } from '@expo/vector-icons';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: 'black',
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: '',
          tabBarIcon: ({ size, color }) => (
            <FontAwesome name="question-circle" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="newQuestions"
        options={{
          title: '',
          tabBarIcon: ({ size, color }) => (
            <FontAwesome name="plus-circle" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
