import Image from "next/image";
import { Content, Navbar } from "../components";
import Footer from "../components/Footer";

function Page() {
  return (
    <main className="overflow-hidden">
      <Navbar />
      <div className=" mt-36"></div>
      <Footer />
    </main>
  );
}

export default Page;
