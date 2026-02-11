import {
  FiHome,
  FiInbox,
  FiUsers,
  FiBarChart2,
  FiSettings,
} from "react-icons/fi";

const menuItems = [
  { icon: <FiHome />, label: "Dashboard" },
  { icon: <FiInbox />, label: "Tickets" },
  { icon: <FiUsers />, label: "Customers" },
  { icon: <FiBarChart2 />, label: "Reports" },
  { icon: <FiSettings />, label: "Settings" },
];

export default function Sidebar() {
  return (
    <div className="h-screen w-64 bg-white border-r flex flex-col justify-between">
      <div>
        <div className="p-6 text-2xl font-bold text-indigo-600">
          Helpdesk.
        </div>
        <div className="mt-6 flex flex-col gap-2">
          {menuItems.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-3 px-6 py-3 text-gray-600 hover:bg-indigo-50 hover:text-indigo-600 cursor-pointer transition rounded-lg mx-3"
            >
              <span className="text-lg">{item.icon}</span>
              <span className="text-sm font-medium">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="p-6 border-t">
        <div className="flex items-center gap-3">
          <img
            src="https://i.pravatar.cc/40"
            alt="profile"
            className="w-10 h-10 rounded-full"
          />
          <div>
            <p className="text-sm font-semibold">Dipansh Gore</p>
            <p className="text-xs text-gray-500">Admin</p>
          </div>
        </div>
      </div>
    </div>
  );
}
