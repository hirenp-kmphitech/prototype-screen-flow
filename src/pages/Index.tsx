
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarMenu, SidebarMenuItem, SidebarMenuButton, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer } from "recharts";
import { Users, User, Export } from "lucide-react";
import { DashboardSidebar } from "@/components/DashboardSidebar";
import { StatsCards } from "@/components/StatsCards";
import { UserInsightChart } from "@/components/UserInsightChart";
import { PropertyMap } from "@/components/PropertyMap";

const Index = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-gray-50">
        <DashboardSidebar />
        
        <div className="flex-1 flex flex-col">
          {/* Header */}
          <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-6">
            <div className="flex items-center gap-4">
              <SidebarTrigger />
              <h1 className="text-xl font-semibold text-gray-900">Dashboard</h1>
            </div>
            
            <div className="flex items-center gap-4">
              <Button className="bg-blue-600 hover:bg-blue-700">
                <Export className="w-4 h-4 mr-2" />
                Export
              </Button>
              
              <div className="flex items-center gap-3">
                <div className="text-right">
                  <div className="text-sm font-medium text-gray-900">Alex Harrington</div>
                  <div className="text-xs text-gray-500">alex@gmail.com</div>
                </div>
                <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                  <User className="w-4 h-4 text-gray-600" />
                </div>
              </div>
            </div>
          </header>

          {/* Main Content */}
          <main className="flex-1 p-6">
            <div className="mb-6">
              <h2 className="text-lg font-medium text-gray-900 mb-6">Overview</h2>
              <StatsCards />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <UserInsightChart />
              <PropertyMap />
            </div>
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default Index;
