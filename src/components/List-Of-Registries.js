import ListOfRegistriesStyle from "../styles/list-registries";
import Registry from "./Registry";

export default function ListOfRegistries({ registries, setRegistries }) {
  return (
    <ListOfRegistriesStyle>
      {registries.map((e, index) => (
        <Registry
          key={index}
          registry={e}
          registries={registries}
          setRegistries={setRegistries}
        ></Registry>
      ))}
    </ListOfRegistriesStyle>
  );
}
