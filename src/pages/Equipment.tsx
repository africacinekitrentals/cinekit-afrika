import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Plus, Search, Camera, Mic, Video, Lightbulb } from "lucide-react";

const Equipment = () => {
  // Mock equipment data
  const equipment = [
    {
      id: 1,
      name: "Sony FX6 Full-Frame Cinema Camera",
      category: "Cameras",
      icon: Camera,
      quantity: 3,
      available: 2,
      dailyRate: 15000,
      status: "available"
    },
    {
      id: 2,
      name: "Canon C70 Cinema Camera",
      category: "Cameras",
      icon: Camera,
      quantity: 2,
      available: 0,
      dailyRate: 12000,
      status: "rented"
    },
    {
      id: 3,
      name: "Aputure 600D Pro LED Light",
      category: "Lighting",
      icon: Lightbulb,
      quantity: 4,
      available: 3,
      dailyRate: 5000,
      status: "available"
    },
    {
      id: 4,
      name: "DJI Ronin RS3 Pro Gimbal",
      category: "Stabilizers",
      icon: Video,
      quantity: 2,
      available: 1,
      dailyRate: 8000,
      status: "available"
    },
    {
      id: 5,
      name: "Sennheiser MKH 416 Shotgun Mic",
      category: "Audio",
      icon: Mic,
      quantity: 5,
      available: 4,
      dailyRate: 2000,
      status: "available"
    },
    {
      id: 6,
      name: "Zoom F6 Field Recorder",
      category: "Audio",
      icon: Mic,
      quantity: 3,
      available: 0,
      dailyRate: 3500,
      status: "rented"
    }
  ];
  
  const getStatusBadge = (status: string, available: number, quantity: number) => {
    if (status === "rented" || available === 0) {
      return <Badge variant="destructive">All Rented</Badge>;
    }
    if (available < quantity / 2) {
      return <Badge className="bg-warning text-warning-foreground">Limited</Badge>;
    }
    return <Badge className="bg-success text-success-foreground">Available</Badge>;
  };
  
  return (
    <Layout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Equipment Inventory</h1>
            <p className="text-muted-foreground">Manage your rental equipment catalog</p>
          </div>
          <Button className="bg-primary hover:bg-primary/90">
            <Plus className="w-4 h-4 mr-2" />
            Add Equipment
          </Button>
        </div>
        
        {/* Search and Filter */}
        <div className="flex gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input 
              placeholder="Search equipment..." 
              className="pl-10"
            />
          </div>
          <Button variant="outline">
            Filter
          </Button>
        </div>
        
        {/* Equipment Grid */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {equipment.map((item) => (
            <Card key={item.id} className="hover:shadow-md transition-all">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-base">{item.name}</CardTitle>
                      <p className="text-sm text-muted-foreground">{item.category}</p>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Daily Rate</span>
                    <span className="font-bold text-foreground">KSh {item.dailyRate.toLocaleString()}</span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Availability</span>
                    <span className="font-medium text-foreground">{item.available} / {item.quantity}</span>
                  </div>
                  
                  <div className="flex items-center justify-between pt-2">
                    {getStatusBadge(item.status, item.available, item.quantity)}
                    <Button variant="outline" size="sm">
                      View Details
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Equipment;
