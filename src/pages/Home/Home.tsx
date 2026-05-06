import React from "react";
import style from "./home.module.css";
import TaskCard from "./components/Task/cardTask/TaskCard";
import ListCard from "./components/List/cardList/ListCard";
import UserContext from "../../context/useContext";
import { useFetch } from "../../hooks/useFetch";

function Home() {
  const [list, setList] = React.useState([]);
  const [especificList, setEspecificList] = React.useState(null);

  const { data, request } = useFetch();

  React.useEffect(() => {
    request("http://localhost:3000/lista/getTodasListas");
  }, []);

  React.useEffect(() => {
    if (data) {
      setList(data.data);
    }
  }, [data]);

  return (
    <UserContext.Provider
      value={{
        AllLists: list,
        especificList: especificList,
        setEspecificList: setEspecificList,
        setAllLists: setList,
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
