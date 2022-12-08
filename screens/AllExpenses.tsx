import ExpenseOutput from "../components/ExpenseOutput";
import DUMMY_EXPENSES from "../constants/DUMMY_EXPENSE";

const AllExpenses = () => {
  return <ExpenseOutput periodName="Total" items={DUMMY_EXPENSES} />;
};

export default AllExpenses;
