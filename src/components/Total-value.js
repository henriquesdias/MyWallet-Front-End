import TotalvalueStyle from "../styles/totalValueStyle";

export default function TotalValue({ registries }) {
  function total() {
    let totalValue = registries.reduce((total, element) => {
      if (element.isOutput) {
        total -= Number(element.value);
      } else {
        total += Number(element.value);
      }
      return total;
    }, 0);
    return totalValue.toFixed(2).replace(".", ",");
  }
  const sum = Number(total().replace(",", ".")).toFixed(2);
  return <TotalvalueStyle color={sum}>{sum}</TotalvalueStyle>;
}
