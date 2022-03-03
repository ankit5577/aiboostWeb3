import {useContext} from "react";
import { ContractsContext } from "../context/ContractsContext";
import {
  Services,
  Transactions,
  Welcome,
  MakeSure,
  Notification,
} from "../components";

function Home() {
  const { isEther } = useContext(ContractsContext);
  return (
    <>
      <Welcome />
      <MakeSure />
      <Services />
      <Transactions />
      <Notification
        props={{
          id: "Home",
          isEther,
        }}
      />
    </>
  );
}

export default Home;

// https://play.tailwindcss.com/FgclCB2P8P?file=css
