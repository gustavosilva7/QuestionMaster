import { Drawer } from 'expo-router/drawer';
import { Link } from 'expo-router';

import { FontAwesome, Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const DrawerLayout = () => {
  return (
    <Drawer>
      <Drawer.Screen
        name="index"
        options={{
          headerTitle: 'Dashboard',
          headerRight: () => (
            <Link href="/user" asChild className="p-2">
              <FontAwesome name="user-circle" size={24} color="black" />
            </Link>
          ),
          drawerLabel: 'Dashboard',
          drawerIcon: ({ size, color }) => <Ionicons name="home" size={size} color={color} />,
        }}
      />
      <Drawer.Screen
        name="pages/questions/(tabs)"
        options={{
          headerTitle: 'Questões',
          headerRight: () => (
            <Link href="/user" asChild className="p-2">
              <FontAwesome name="user-circle" size={24} color="black" />
            </Link>
          ),
          drawerLabel: 'Questões',
          drawerIcon: ({ size, color }) => (
            <MaterialCommunityIcons name="frequently-asked-questions" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="pages/tasks/(tabs)"
        options={{
          headerTitle: 'Provas',
          headerRight: () => (
            <Link href="/user" asChild className="p-2">
              <FontAwesome name="user-circle" size={24} color="black" />
            </Link>
          ),
          drawerLabel: 'Provas',
          drawerIcon: ({ size, color }) => <FontAwesome name="tasks" size={size} color={color} />,
        }}
      />
      <Drawer.Screen
        name="pages/configs/(tabs)"
        options={{
          headerTitle: 'Configurações',
          headerRight: () => (
            <Link href="/user" asChild className="p-2">
              <FontAwesome name="user-circle" size={24} color="black" />
            </Link>
          ),
          drawerLabel: 'Configurações',
          drawerIcon: ({ size, color }) => <Ionicons name="settings" size={size} color={color} />,
        }}
      />
    </Drawer>
  );
};
export default DrawerLayout;
