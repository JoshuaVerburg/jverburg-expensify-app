

export default (expenses) => {
    const map = expenses.map((expense) => {
        return expense.amount;
    })
    const getTotal = (total, num) => {
        return total + num;
    }
    const total = map.reduce(getTotal, 0);
    return total;
}