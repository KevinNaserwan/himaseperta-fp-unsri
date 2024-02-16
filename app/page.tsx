import Image from "next/image";
import { Content, Navbar } from "./components";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <div id="container">
        <div id="video-container">
          <video
            id="background-video"
            autoPlay
            loop
            muted
            poster="https://assets.codepen.io/6093409/river.jpg"
          >
            <source
              src="https://assets.codepen.io/6093409/river.mp4"
              type="video/mp4"
            />
          </video>
        </div>
        <div id="content">
          <Navbar />
          <Content />
        </div>
      </div>

      <Footer />
    </main>
  );
}
