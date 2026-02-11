import { tickets } from "../data/tickets";

const getStatusStyle = (status) => {
  switch (status) {
    case "Open":
      return "bg-red-100 text-red-600";
    case "Pending":
      return "bg-yellow-100 text-yellow-600";
    case "Closed":
      return "bg-green-100 text-green-600";
    default:
      return "";
  }
};

export default function TicketTable({ onSelectTicket }) {
  return (
    <div className="bg-white rounded-xl shadow-sm p-4">
      
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <select className="border bg-gray-50 text-sm px-3 py-2 rounded-lg outline-none">
            <option>All Tickets</option>
            <option>Open</option>
            <option>Pending</option>
            <option>Closed</option>
          </select>

          <select className="border bg-gray-50 text-sm px-3 py-2 rounded-lg outline-none">
            <option>Priority</option>
            <option>High</option>
            <option>Medium</option>
            <option>Low</option>
          </select>

          <input
            type="text"
            placeholder="Search tickets..."
            className="border bg-gray-50 text-sm px-3 py-2 rounded-lg outline-none w-64"
          />
        </div>

        <button className="bg-indigo-600 text-white text-sm px-4 py-2 rounded-lg hover:bg-indigo-700 transition">
          + New Ticket
        </button>
      </div>

      <table className="w-full text-left border-separate border-spacing-y-2">
        <thead className="bg-gray-50 text-gray-500 text-xs uppercase">
          <tr>
            <th className="py-3 px-3">Ticket ID</th>
            <th className="px-3">Subject</th>
            <th className="px-3">Status</th>
            <th className="px-3">Priority</th>
            <th className="px-3">Assignee</th>
            <th className="px-3">Date</th>
          </tr>
        </thead>

        <tbody>
          {tickets.map((ticket, index) => (
            <tr
              key={index}
              onClick={() => onSelectTicket(ticket)}
              className="bg-gray-50 hover:bg-indigo-50 transition cursor-pointer text-sm"
            >
              <td className="py-3 px-3 font-medium">{ticket.id}</td>
              <td className="py-3 px-3">{ticket.subject}</td>
              <td className="py-3 px-3">
                <span
                  className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusStyle(
                    ticket.status
                  )}`}
                >
                  {ticket.status}
                </span>
              </td>
              <td className="py-3 px-3">{ticket.priority}</td>
              <td className="py-3 px-3">{ticket.assignee}</td>
              <td className="py-3 px-3">{ticket.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
