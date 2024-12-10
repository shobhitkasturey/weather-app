import Navbar from "./components/Navbar";
import Temperature from "./components/Temperature/Temperature";
import { GlobalContextProvider } from "./context/globalContext"; // Import your GlobalContextProvider

export default function Home() {
  return (
    <GlobalContextProvider>
      <main className="mx-[1rem] lg:mx-[2rem] xl:mx-[6rem] 2xl:mx-[16rem] m-auto">
        <Navbar />
        <div className="pb-4 flex flex-col gap-4 md:flex-row">
          <div className="flex flex-col gap-4 w-full min-w-[18rem] md:w-[35rem]">
            <Temperature />
          </div>
          <div className="flex flex-col w-full"></div>
        </div>
      </main>
    </GlobalContextProvider>
  );
}
