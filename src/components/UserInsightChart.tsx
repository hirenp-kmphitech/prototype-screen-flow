
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer } from "recharts";

const chartData = [
  { month: "Jan", buyers: 15, realtors: 42 },
  { month: "Feb", buyers: 18, realtors: 35 },
  { month: "Mar", buyers: 28, realtors: 25 },
  { month: "Apr", buyers: 35, realtors: 18 },
  { month: "May", buyers: 32, realtors: 22 },
  { month: "Jun", buyers: 25, realtors: 28 },
  { month: "Jul", buyers: 30, realtors: 35 },
  { month: "Aug", buyers: 35, realtors: 30 },
  { month: "Sep", buyers: 20, realtors: 35 },
  { month: "Oct", buyers: 12, realtors: 28 },
  { month: "Nov", buyers: 8, realtors: 32 },
  { month: "Dec", buyers: 10, realtors: 38 },
];

const chartConfig = {
  buyers: {
    label: "Buyers",
    color: "#3b82f6",
  },
  realtors: {
    label: "Realtors", 
    color: "#a855f7",
  },
};

export const UserInsightChart = () => {
  return (
    <Card className="bg-white border border-gray-200">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg font-semibold text-gray-900">User Insight</CardTitle>
          <select className="text-sm border border-gray-300 rounded px-2 py-1">
            <option>This Year</option>
          </select>
        </div>
        
        <div className="flex items-center gap-6 mt-4">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
            <span className="text-sm text-gray-600">Buyers</span>
            <span className="text-sm font-medium text-gray-900">37,543</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
            <span className="text-sm text-gray-600">Realtors</span>
            <span className="text-sm font-medium text-gray-900">24,986</span>
          </div>
        </div>
      </CardHeader>
      
      <CardContent>
        <ChartContainer config={chartConfig} className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={chartData}>
              <XAxis 
                dataKey="month" 
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 12, fill: '#6b7280' }}
              />
              <YAxis 
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 12, fill: '#6b7280' }}
                tickFormatter={(value) => `${value}k`}
              />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Line 
                type="monotone" 
                dataKey="buyers" 
                stroke="#3b82f6" 
                strokeWidth={2}
                dot={{ fill: "#3b82f6", strokeWidth: 2, r: 4 }}
              />
              <Line 
                type="monotone" 
                dataKey="realtors" 
                stroke="#a855f7" 
                strokeWidth={2}
                dot={{ fill: "#a855f7", strokeWidth: 2, r: 4 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  );
};
