import "./index.css";
import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import StatsCards from "./components/StatsCards";
import TicketTable from "./components/TicketTable";
import TicketDetails from "./components/TicketDetails";

function App() {
  const [selectedTicket, setSelectedTicket] = useState(null);

  return (
    <div className="flex bg-[#f6f8fb] h-screen overflow-hidden">
      <Sidebar />

      <div className="flex-1 p-6 flex flex-col gap-6 overflow-hidden">
        <Header />
        <StatsCards />

        <div className="flex gap-6 flex-1 overflow-hidden">
          <div className="flex-1 overflow-y-auto pr-2">
            <TicketTable onSelectTicket={setSelectedTicket} />
          </div>

          <div className="w-96 overflow-y-auto">
            <TicketDetails ticket={selectedTicket} />
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
