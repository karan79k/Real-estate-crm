import { useState } from "react";
import { Bell, Menu,Home } from "lucide-react";

const Navbar = () => {
  const [showProfileOptions, setShowProfileOptions] = useState(false);

  return (
    <nav className="relative w-full bg-white shadow-md flex items-center justify-between px-6 py-3 z-50">
      
      <div className="flex items-center space-x-2">
        <Menu className="w-6 h-6 text-gray-600 cursor-pointer lg:hidden" />
        <Home className="w-6 h-6 text-blue-600" /> {/* Home Icon */}
        <h1 className="text-xl font-semibold">RealEstateCRM</h1>
      </div>
     
      <div className="hidden lg:flex space-x-6">
        <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">Dashboard</a>
        <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">Projects</a>
        <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">Clients</a>
      </div>

      <div className="flex items-center space-x-4">
        
       
        <div className="relative cursor-pointer">
          <Bell className="w-6 h-6 text-gray-600 hover:text-blue-600" />
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">3</span>
        </div>

      
        <div className="relative">
          <img
            src="https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg" 
            alt="Profile"
            className="w-10 h-10 rounded-full cursor-pointer"
            onMouseEnter={() => setShowProfileOptions(true)}
            onMouseLeave={() => setShowProfileOptions(false)}
          />
          {showProfileOptions && (
            <div
              className="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-md overflow-hidden"
              onMouseEnter={() => setShowProfileOptions(true)}
              onMouseLeave={() => setShowProfileOptions(false)}
            >
              <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Profile</a>
              <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Settings</a>
              <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Logout</a>
            </div>
          )}
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
