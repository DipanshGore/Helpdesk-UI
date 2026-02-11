import { FiInbox, FiClock, FiCheckCircle, FiAlertCircle } from "react-icons/fi";

const stats = [
  {
    title: "Total Tickets",
    value: "1,248",
    icon: <FiInbox />,
  },
  {
    title: "Open Tickets",
    value: "342",
    icon: <FiAlertCircle />,
  },
  {
    title: "Pending Tickets",
    value: "89",
    icon: <FiClock />,
  },
  {
    title: "Closed Tickets",
    value: "817",
    icon: <FiCheckCircle />,
  },
];

export default function StatsCards() {
  return (
    <div className="grid grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="bg-white rounded-xl shadow-sm p-4 flex items-center justify-between"
        >
          <div>
            <p className="text-xs text-gray-500">{stat.title}</p>
            <h2 className="text-xl font-semibold mt-1">{stat.value}</h2>
          </div>
          <div className="text-indigo-600 text-3xl bg-indigo-50 p-3 rounded-lg">
            {stat.icon}
          </div>
        </div>
      ))}
    </div>
  );
}
