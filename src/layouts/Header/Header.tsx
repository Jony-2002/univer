import Logo from "../../components/Logo/Logo";
import Navbar from "../../components/Navbar/Navbar";

export default function Header() {
  return (
    <header className="w-[120px]">
      <Logo />
      <Navbar />
    </header>
  );
}
