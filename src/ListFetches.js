export default function ListFetches({ typesData }) {
  console.log(typesData);
  return (
    <>
      {typesData.types.map((element) => {
        console.log(element.name);
        return <button>{element.name}</button>;
      })}
    </>
  );
}
