import React from "react";
import style from "./home.module.css";
import TaskCard from "./components/Task/cardTask/TaskCard";
import ListCard from "./components/List/cardList/ListCard";
import UserContext from "../../context/useContext";

function Home() {
  const [list, setList] = React.useState([]);
  const [especificList, setEspecificList] = React.useState(null);
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    const fetchLists = async () => {
      try {
        const response = await fetch(
          "http://localhost:3000/lista/getTodasListas"
        );

        const data = await response.json();

        if (response.ok) {
          setList(data.data);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchLists();
  }, []);

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
