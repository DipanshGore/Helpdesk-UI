export default function TicketDetails({ ticket }) {
  if (!ticket) {
    return (
      <div className="w-1/3 bg-white rounded-xl shadow-sm p-6 flex items-center justify-center text-gray-400">
        Select a ticket to view details
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow-sm p-5 h-full">
      <h2 className="text-lg font-semibold mb-4">Ticket Details</h2>

      <div className="space-y-3 text-sm">
        <p><span className="font-semibold">Ticket ID:</span> {ticket.id}</p>
        <p><span className="font-semibold">Subject:</span> {ticket.subject}</p>
        <p><span className="font-semibold">Status:</span> {ticket.status}</p>
        <p><span className="font-semibold">Priority:</span> {ticket.priority}</p>
        <p><span className="font-semibold">Assignee:</span> {ticket.assignee}</p>
        <p><span className="font-semibold">Date:</span> {ticket.date}</p>

        <div className="mt-4">
          <p className="font-semibold mb-1">Description</p>
          <p className="text-gray-500">
            This is a sample description for the selected ticket. You can replace
            this with real backend data if needed.
          </p>
        </div>
      </div>
    </div>
  );
}
