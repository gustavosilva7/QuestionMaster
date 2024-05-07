import { Tabs } from 'expo-router';

import Ionicons from '@expo/vector-icons/Ionicons';
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
          tabBarIcon: ({ size, color }) => <Ionicons name="settings" size={size} color={color} />,
        }}
      />
      <Tabs.Screen
        name="users"
        options={{
          title: '',
          tabBarIcon: ({ size, color }) => (
            <FontAwesome name="user-plus" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
