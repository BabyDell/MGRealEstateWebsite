import Contact from "./components/Contact";
import About from "./components/about";
import Background from "./components/background";
import NavBar from "./components/navbar";
import PaginationComponent from "./components/pagnation";
import Trust from "./components/trust";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <NavBar />
      <main>
        <Background />
        <About />
        <Trust />
        <PaginationComponent />
        <Contact />
      </main>
      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; {new Date().getFullYear()} Maria Gutierrez Real Estate. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}