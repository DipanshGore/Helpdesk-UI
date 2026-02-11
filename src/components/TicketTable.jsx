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
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-md font-semibold">Recent Tickets</h2>
        <button className="text-sm text-indigo-600 font-medium">View All</button>
      </div>

      <table className="w-full text-left border-separate border-spacing-y-2">
        <thead>
          <tr className="bg-gray-50 hover:bg-indigo-50 transition cursor-pointer text-sm">
            <th className="py-3">Ticket ID</th>
            <th>Subject</th>
            <th>Status</th>
            <th>Priority</th>
            <th>Assignee</th>
            <th>Date</th>
          </tr>
        </thead>

        <tbody>
          {tickets.map((ticket, index) => (
            <tr
              key={index}
              onClick={() => onSelectTicket(ticket)}
              className="border-b hover:bg-gray-50 cursor-pointer transition"
            >
              <td className="py-3 px-3 font-medium">{ticket.id}</td>
              <td>{ticket.subject}</td>
              <td>
                <span
                  className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusStyle(
                    ticket.status
                  )}`}
                >
                  {ticket.status}
                </span>
              </td>
              <td>{ticket.priority}</td>
              <td>{ticket.assignee}</td>
              <td>{ticket.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
