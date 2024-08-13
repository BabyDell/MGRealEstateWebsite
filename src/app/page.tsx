import About from "./components/about";
import Background from "./components/background";
import NavBar from "./components/navbar";
import PaginationComponent from "./components/pagnation";
import Trust from "./components/trust";

export default function Page() {
  return (
    <>
      <NavBar />
      <Background />
      <About />
      <Trust />
      <PaginationComponent />
    </>
  );
}
