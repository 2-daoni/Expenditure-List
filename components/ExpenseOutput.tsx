import { FlatList, StyleSheet, Text, View } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import DUMMY_EXPENSES from "../constants/DUMMY_EXPENSE";
import { GlobalStyles } from "../constants/styles";

type Props = {
  items: any;
  periodName: string;
};

const colors = GlobalStyles.colors;

const renderItem = (itemData: any) => {
  const item = itemData.item;
  return (
    <>
      <Text>{item.description}</Text>
      <Text>${item.amount}</Text>
      {/* <Text>{item.date}</Text> */}
    </>
  );
};

const ExpenseOutput = ({ items, periodName }: Props) => {
  const expenseSum = items.reduce((sum: any, item: any) => {
    return sum + item.amount;
  }, 0);

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.period}>{periodName}</Text>
        <Text style={styles.sum}>${expenseSum.toFixed(2)}</Text>
      </View>
      <FlatList
        data={DUMMY_EXPENSES}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default ExpenseOutput;

const styles = StyleSheet.create({
  container: {
    padding: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: 6,
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: colors.pointBlue,
  },
  period: {
    fontSize: 14,
    color: colors.pointBlue,
    fontWeight: "bold",
  },
  sum: {
    fontSize: 18,
    fontWeight: "bold",
    color: colors.pointBlue,
  },
});
