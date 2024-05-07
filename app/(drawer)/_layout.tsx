import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { Drawer } from 'expo-router/drawer';

const DrawerLayout = () => (
  <Drawer>
    <Drawer.Screen
      name="index"
      options={{
        headerTitle: 'Dashboard',
        drawerLabel: 'Dashboard',
        drawerIcon: ({ size, color }) => <Ionicons name="home-outline" size={size} color={color} />,
      }}
    />
    <Drawer.Screen
      name="pages/questions/(tabs)"
      options={{
        headerTitle: 'Questões',
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
        drawerLabel: 'Configurações',
        drawerIcon: ({ size, color }) => (
          <MaterialIcons name="border-bottom" size={size} color={color} />
        ),
      }}
    />
  </Drawer>
);

export default DrawerLayout;
