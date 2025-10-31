import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Plus, Calendar, User, Package } from "lucide-react";

const Bookings = () => {
  // Mock bookings data
  const bookings = [
    {
      id: "BO-001",
      client: "Vision Films Ltd",
      contact: "John Kamau",
      equipment: ["Sony FX6 Kit", "Aputure 600D"],
      pickupDate: "2025-11-01",
      returnDate: "2025-11-03",
      status: "active",
      total: 40000
    },
    {
      id: "BO-002",
      client: "Creative Studios",
      contact: "Jane Wanjiru",
      equipment: ["Canon C70", "DJI Ronin RS3"],
      pickupDate: "2025-10-30",
      returnDate: "2025-11-01",
      status: "completed",
      total: 36000
    },
    {
      id: "BO-003",
      client: "Safari Productions",
      contact: "David Omondi",
      equipment: ["Sony FX6 Kit"],
      pickupDate: "2025-11-05",
      returnDate: "2025-11-07",
      status: "upcoming",
      total: 30000
    },
    {
      id: "BO-004",
      client: "Nairobi Media",
      contact: "Sarah Muthoni",
      equipment: ["Canon C70", "Zoom F6"],
      pickupDate: "2025-10-28",
      returnDate: "2025-10-30",
      status: "overdue",
      total: 31000
    }
  ];
  
  const getStatusBadge = (status: string) => {
    const variants = {
      active: "bg-primary text-primary-foreground",
      completed: "bg-success text-success-foreground",
      upcoming: "bg-accent text-accent-foreground",
      overdue: "bg-destructive text-destructive-foreground"
    };
    
    return (
      <Badge className={variants[status as keyof typeof variants]}>
        {status.charAt(0).toUpperCase() + status.slice(1)}
      </Badge>
    );
  };
  
  return (
    <Layout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Bookings</h1>
            <p className="text-muted-foreground">Manage rental orders and reservations</p>
          </div>
          <Button className="bg-primary hover:bg-primary/90">
            <Plus className="w-4 h-4 mr-2" />
            New Booking
          </Button>
        </div>
        
        {/* Bookings List */}
        <div className="space-y-4">
          {bookings.map((booking) => (
            <Card key={booking.id} className="hover:shadow-md transition-all">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="space-y-3 flex-1">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-lg font-bold text-foreground">{booking.client}</h3>
                        <p className="text-sm text-muted-foreground flex items-center gap-1">
                          <User className="w-3 h-3" />
                          {booking.contact} • {booking.id}
                        </p>
                      </div>
                      {getStatusBadge(booking.status)}
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Package className="w-4 h-4" />
                        {booking.equipment.length} items
                      </div>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        {new Date(booking.pickupDate).toLocaleDateString()} - {new Date(booking.returnDate).toLocaleDateString()}
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {booking.equipment.map((item, index) => (
                        <Badge key={index} variant="outline">
                          {item}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex flex-col items-end gap-3">
                    <div className="text-right">
                      <p className="text-sm text-muted-foreground">Total</p>
                      <p className="text-2xl font-bold text-foreground">
                        KSh {booking.total.toLocaleString()}
                      </p>
                    </div>
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

export default Bookings;
