
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const PropertyMap = () => {
  return (
    <Card className="bg-white border border-gray-200">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg font-semibold text-gray-900">Property Location</CardTitle>
          <select className="text-sm border border-gray-300 rounded px-2 py-1">
            <option>This Year</option>
          </select>
        </div>
      </CardHeader>
      
      <CardContent>
        <div className="relative h-[300px] bg-blue-50 rounded-lg overflow-hidden">
          {/* Simplified map representation */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-blue-200">
            {/* Map dots representing properties */}
            <div className="absolute top-16 left-20 w-3 h-3 bg-blue-600 rounded-full"></div>
            <div className="absolute top-24 left-32 w-2 h-2 bg-blue-500 rounded-full"></div>
            <div className="absolute top-32 right-20 w-4 h-4 bg-blue-700 rounded-full"></div>
            <div className="absolute bottom-20 left-16 w-2 h-2 bg-blue-500 rounded-full"></div>
            <div className="absolute bottom-24 right-32 w-3 h-3 bg-blue-600 rounded-full"></div>
            
            {/* Info tooltip */}
            <div className="absolute top-12 right-16 bg-white rounded-lg shadow-lg p-3 border">
              <div className="text-sm font-medium text-gray-900 mb-1">United States</div>
              <div className="text-xs text-gray-600 mb-2">35%</div>
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-xs text-gray-600">Homes</span>
                  <span className="text-xs font-medium">37,543</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span className="text-xs text-gray-600">Communities</span>
                  <span className="text-xs font-medium">24,986</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Map overlay text */}
          <div className="absolute bottom-4 left-4 text-xs text-gray-500">
            Interactive Map View
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
