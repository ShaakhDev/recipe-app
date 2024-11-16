import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import * as Screens from '@/screens';
import {BellIcon, BookmarkIcon, HomeIcon, PlusIcon, UserIcon} from '@/icons';
import {colors} from '@/theme';

export type BottomTabParamsList = {
  Home: undefined;
  Saved: undefined;
  CreateRecipe: undefined;
  Profile: undefined;
  Notification: undefined;
};

const Tab = createBottomTabNavigator<BottomTabParamsList>();

export const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarHideOnKeyboard: true,
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          minHeight: 70,
          paddingBottom: 10,
        },
      }}>
      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) => (
            <HomeIcon
              fill={focused ? colors.tabIconFocused : undefined}
              stroke={focused ? colors.primary : undefined}
            />
          ),
        }}
        name="Home"
        component={Screens.HomeScreen}
      />
      <Tab.Screen
        options={{
          headerShown: true,
          headerTitleAlign: 'center',
          headerShadowVisible: false,
          headerTitle: 'Saved recipes',
          tabBarIcon: ({focused}) => (
            <BookmarkIcon fill={focused ? colors.primary : undefined} />
          ),
        }}
        name="Saved"
        component={Screens.SavedScreen}
      />
      <Tab.Screen
        options={{
          headerShown: true,
          headerTitleAlign: 'center',
          headerShadowVisible: false,
          headerTitle: 'Add new recipe',
          tabBarIcon: () => <PlusIcon />,
        }}
        name="CreateRecipe"
        component={Screens.CreateRecipeScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) => (
            <BellIcon
              stroke={focused ? colors.primary : undefined}
              fill={focused ? colors.tabIconFocused : undefined}
            />
          ),
        }}
        name="Notification"
        component={Screens.NotificationScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) => (
            <UserIcon
              fill={focused ? colors.tabIconFocused : undefined}
              stroke={focused ? colors.primary : undefined}
            />
          ),
        }}
        name="Profile"
        component={Screens.ProfileScreen}
      />
    </Tab.Navigator>
  );
};
