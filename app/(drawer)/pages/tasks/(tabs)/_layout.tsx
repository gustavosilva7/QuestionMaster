import { Tabs } from 'expo-router';

import { TabBarIcon } from '~/components/TabBarIcon';
import { FontAwesome5 } from '@expo/vector-icons';
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
          tabBarIcon: ({ size, color }) => <FontAwesome5 name="tasks" size={size} color={color} />,
        }}
      />
      <Tabs.Screen
        name="newTasks"
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
