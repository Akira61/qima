import { Navbar } from "./components/Navbar";
import { Banner } from "./components/Banner";
import "./style.css";
import { Cards } from "./components/Cards";
import Timeline from "./components/Timeline";
export default function Landing() {
  return (
    <>
      <Navbar />
      <Banner />
      <Cards />
      <Timeline />
      <footer>
        <p>
          🧑‍💻Developed By{" "}
          <a
            href="https://x.com/fahd_almansour"
            target="_blank"
          >
            Fahad Almansour
          </a>
        </p>
      </footer>
    </>
  );
}
