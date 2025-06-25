
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, User, Users as Properties, Users as Communities } from "lucide-react";

export const StatsCards = () => {
  const stats = [
    {
      title: "Total Buyers",
      value: "45,034",
      change: "+1.8% since last month",
      icon: Users,
      iconColor: "text-blue-500",
      bgColor: "bg-blue-50",
    },
    {
      title: "Total Realtors", 
      value: "10,125",
      change: "+3.8% since last month",
      icon: User,
      iconColor: "text-purple-500",
      bgColor: "bg-purple-50",
    },
    {
      title: "Total Homes",
      value: "32,125", 
      change: "+1.8% since last month",
      icon: Properties,
      iconColor: "text-blue-500",
      bgColor: "bg-blue-50",
    },
    {
      title: "Total Communities",
      value: "16,125",
      change: "+1.8% since last month", 
      icon: Communities,
      iconColor: "text-orange-500",
      bgColor: "bg-orange-50",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <Card key={index} className="bg-white border border-gray-200">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
                <p className="text-xs text-gray-500 mt-1">{stat.change}</p>
              </div>
              <div className={`w-12 h-12 ${stat.bgColor} rounded-lg flex items-center justify-center`}>
                <stat.icon className={`w-6 h-6 ${stat.iconColor}`} />
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
