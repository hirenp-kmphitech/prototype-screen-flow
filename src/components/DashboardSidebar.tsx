
import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarMenu, SidebarMenuItem, SidebarMenuButton } from "@/components/ui/sidebar";
import { Users, User, Users as Properties, LogOut } from "lucide-react";

export const DashboardSidebar = () => {
  const menuItems = [
    { icon: Users, label: "Dashboard", active: true },
    { icon: User, label: "User Management", active: false },
    { icon: Properties, label: "Property Listing", active: false },
  ];

  return (
    <Sidebar className="w-64 bg-white border-r border-gray-200">
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center gap-2">
          <div className="text-lg font-bold">
            INVENTORY<span className="text-blue-600">SHEETS</span>
          </div>
        </div>
      </div>
      
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-1 p-4">
              {menuItems.map((item, index) => (
                <SidebarMenuItem key={index}>
                  <SidebarMenuButton 
                    className={`w-full justify-start gap-3 px-3 py-2 rounded-lg transition-colors ${
                      item.active 
                        ? "bg-blue-50 text-blue-600 border-l-4 border-blue-600" 
                        : "text-gray-600 hover:bg-gray-50"
                    }`}
                  >
                    <item.icon className="w-5 h-5" />
                    <span className="font-medium">{item.label}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        
        <div className="mt-auto p-4 border-t border-gray-200">
          <SidebarMenuButton className="w-full justify-start gap-3 px-3 py-2 rounded-lg text-gray-600 hover:bg-gray-50">
            <LogOut className="w-5 h-5" />
            <span className="font-medium">Logout</span>
          </SidebarMenuButton>
        </div>
      </SidebarContent>
    </Sidebar>
  );
};
