import { Drawer } from 'expo-router/drawer';
import { Link } from 'expo-router';

import { FontAwesome, Ionicons, MaterialIcons } from '@expo/vector-icons';
import { Text, TouchableOpacity } from 'react-native';
import { Button } from '~/components/Button';

const DrawerLayout = () => {
  return (
    <Drawer>
      <Drawer.Screen
        name="index"
        options={{
          headerTitle: 'Dashboard',
          headerRight: () => (
            <Link href="/user" asChild>
              <TouchableOpacity className="p-6">
                <FontAwesome name="user" size={20} color="black" />
              </TouchableOpacity>
            </Link>
          ),
          drawerLabel: 'Dashboard',
          drawerIcon: ({ size, color }) => (
            <Ionicons name="home-outline" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="pages/questions/(tabs)"
        options={{
          headerTitle: 'Questões',
          headerRight: () => (
            <Link href="/user" asChild>
              <TouchableOpacity className="p-6">
                <FontAwesome name="user" size={20} color="black" />
              </TouchableOpacity>
            </Link>
          ),
          drawerLabel: 'Questões',
          drawerIcon: ({ size, color }) => (
            <MaterialIcons name="border-bottom" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="pages/tasks/(tabs)"
        options={{
          headerTitle: 'Provas',
          headerRight: () => (
            <Link href="/user" asChild>
              <TouchableOpacity className="p-6">
                <FontAwesome name="user" size={20} color="black" />
              </TouchableOpacity>
            </Link>
          ),
          drawerLabel: 'Provas',
          drawerIcon: ({ size, color }) => (
            <MaterialIcons name="border-bottom" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="pages/configs/(tabs)"
        options={{
          headerTitle: 'Configurações',
          headerRight: () => (
            <Link href="/user" asChild>
              <TouchableOpacity className="p-6">
                <FontAwesome name="user" size={20} color="black" />
              </TouchableOpacity>
            </Link>
          ),
          drawerLabel: 'Configurações',
          drawerIcon: ({ size, color }) => (
            <MaterialIcons name="border-bottom" size={size} color={color} />
          ),
        }}
      />
    </Drawer>
  );
};
export default DrawerLayout;
