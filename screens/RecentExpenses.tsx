import ExpenseOutput from "../components/ExpenseOutput";
import DUMMY_EXPENSES from "../constants/DUMMY_EXPENSE";

const RecentExpenses = () => {
  return <ExpenseOutput periodName="최근 7일" items={DUMMY_EXPENSES} />;
};

export default RecentExpenses;
