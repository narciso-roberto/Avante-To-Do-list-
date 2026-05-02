import React from "react";
import style from "./home.module.css";
import TaskCard from "./components/Task/TaskCard";
import ListCard from "./components/List/ListCard";
import UserContext from "../../context/useContext";
import mock from "../../back/bd";

function Home() {
  const [list, setList] = React.useState([]);
  const [especificList, setEspecificList] = React.useState(null);

  async function getData() {
    return mock;
  }

  React.useEffect(() => {
    const buscarDados = async () => {
      try {
        const data = await getData();
        setList(data);
      } catch (error) {
        console.error("Erro na requisição:", error);
      }
    };

    buscarDados();
  }, [list]);

  return (
    <UserContext.Provider
      value={{
        AllLists: list,
        especificList: especificList,
        setEspecificList: setEspecificList,
      }}
    >
      <main className={`container ${style.mainContent}`}>
        <ListCard />
        <TaskCard />
      </main>
    </UserContext.Provider>
  );
}

export default Home;
