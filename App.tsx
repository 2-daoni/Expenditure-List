import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { GlobalStyles } from "./constants/styles";
import { Ionicons } from "@expo/vector-icons";
import AllExpenses from "./screens/AllExpenses";
import ManageExpenses from "./screens/ManageExpenses";
import RecentExpenses from "./screens/RecentExpenses";

const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();

const color = GlobalStyles.colors;

const ExpenseOverview = () => {
  return (
    <BottomTabs.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: color.pointBlue,
        },
        headerTintColor: "white",
        tabBarStyle: {
          backgroundColor: "white",
        },
        tabBarActiveTintColor: color.pointBlue,
      }}
    >
      <BottomTabs.Screen
        name="RecentExpense"
        component={RecentExpenses}
        options={{
          title: "최근 지출",
          tabBarLabel: "Recent",
          tabBarIcon: ({ color }) => (
            <Ionicons name="hourglass" color={color} size={20} />
          ),
        }}
      />
      <BottomTabs.Screen
        name="AllExpense"
        component={AllExpenses}
        options={{
          title: "전체",
          tabBarLabel: "All",
          tabBarIcon: ({ color }) => (
            <Ionicons name="calendar" color={color} size={20} />
          ),
        }}
      />
    </BottomTabs.Navigator>
  );
};

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="ExpenseOverview"
            component={ExpenseOverview}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="ManageExpense" component={ManageExpenses} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
