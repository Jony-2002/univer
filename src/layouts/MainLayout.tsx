// import Footer from "./Footer/Footer";
import Language from "../components/Language/Language";
import UserInformation from "../components/UserInformation/UserInformation";
import Header from "./Header/Header";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <div className="flex items-start gap-10">
      <Header />
      <section className="w-full">
        <div className="flex justify-between">
          <Language />
          <h1>Кафедраи технологияи компютерӣ ва амнияти иттилоотӣ</h1>
          <UserInformation />
        </div>
        <Outlet />
      </section>
    </div>
  );
}
