import AirPollution from "./components/AirPollution/AirPollution";
import Navbar from "./components/Navbar";
import Sunset from "./components/Sunset/Sunset";
import Temperature from "./components/Temperature/Temperature";
import Wind from "./components/Wind/Wind";
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
          <div className="flex flex-col w-full ">
            <div className="instruments grid h-full gap-4 col-span-full sm-2:col-span-2 lg: grid-cols-3 xl:grid-cols-4">
              <AirPollution />
              <Sunset/>
              <Wind/>
            </div>
          </div>
        </div>
      </main>
    </GlobalContextProvider>
  );
}
