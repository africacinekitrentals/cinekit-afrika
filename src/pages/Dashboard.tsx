import Layout from "@/components/Layout";
import StatCard from "@/components/StatCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { 
  Package, 
  Calendar, 
  AlertTriangle,
  TrendingUp,
  Clock,
  ArrowRight,
  ArrowLeft,
  Search,
  Send,
  MessageSquare
} from "lucide-react";
import { useState } from "react";

const Dashboard = () => {
  const [chatMessage, setChatMessage] = useState("");
  
  // Mock data
  const stats = [
    {
      title: "Active Rentals",
      value: 12,
      description: "Currently checked out",
      icon: Calendar,
      variant: "default" as const
    },
    {
      title: "Available Equipment",
      value: 78,
      description: "Ready to rent",
      icon: Package,
      variant: "default" as const
    },
    {
      title: "Late Returns",
      value: 3,
      description: "Requires attention",
      icon: AlertTriangle,
      variant: "warning" as const
    }
  ];
  
  const outgoingItems = [
    { orderId: "BO-001", client: "Vision Films", equipment: "Sony FX6 Kit", pickupTime: "10:00 AM", status: "ready" },
    { orderId: "BO-005", client: "Nairobi Creatives", equipment: "Canon C70", pickupTime: "11:30 AM", status: "ready" },
    { orderId: "BO-008", client: "Safari Studios", equipment: "DJI Ronin RS3", pickupTime: "2:00 PM", status: "preparing" },
  ];
  
  const bookedItems = [
    { date: "Today", orders: [
      { orderId: "BO-009", client: "Media House", equipment: "Aputure 600D", time: "3:00 PM" },
      { orderId: "BO-010", client: "Film Collective", equipment: "Zoom F6", time: "4:30 PM" },
    ]},
    { date: "Tomorrow", orders: [
      { orderId: "BO-011", client: "Creative Labs", equipment: "Sony FX6", time: "9:00 AM" },
      { orderId: "BO-012", client: "Vision Pro", equipment: "Canon C70 + Gimbal", time: "11:00 AM" },
    ]},
    { date: "Nov 3", orders: [
      { orderId: "BO-013", client: "Digital Dreams", equipment: "Lighting Kit", time: "10:00 AM" },
    ]},
  ];
  
  const returningToday = [
    { orderId: "BO-001", client: "Vision Films", equipment: "Sony FX6 Kit", returnTime: "8:00 AM", status: "pending" },
    { orderId: "BO-003", client: "Safari Productions", equipment: "DJI Ronin RS3", returnTime: "10:00 AM", status: "pending" },
    { orderId: "BO-006", client: "Media Crew", equipment: "Lighting Package", returnTime: "3:00 PM", status: "pending" },
  ];
  
  const lateReturns = [
    { orderId: "BO-004", client: "Nairobi Media", equipment: "Canon C70 + Zoom F6", dueDate: "Oct 30", daysLate: 2 },
    { orderId: "BO-007", client: "Studio 256", equipment: "Aputure 300D", dueDate: "Oct 29", daysLate: 3 },
    { orderId: "BO-002", client: "Film Hub", equipment: "Sennheiser Kit", dueDate: "Oct 31", daysLate: 1 },
  ];
  
  const missingItems = [
    { orderId: "BO-015", client: "Creative Works", item: "Rode NTG3 Mic", reportedDate: "Oct 28", value: "KSh 35,000" },
    { orderId: "BO-018", client: "Media Plus", item: "V-Mount Battery", reportedDate: "Oct 25", value: "KSh 8,000" },
  ];
  
  const partialReturns = [
    { orderId: "BO-020", client: "Vision Films", returned: 4, total: 6, missing: "2x Batteries" },
    { orderId: "BO-021", client: "Safari Docs", returned: 2, total: 3, missing: "Shotgun Mic" },
  ];
  
  const chatMessages = [
    { user: "John K.", message: "Sony FX6 checked out to Vision Films", time: "10:05 AM" },
    { user: "System", message: "Late return alert: BO-004 is 2 days overdue", time: "9:30 AM", isSystem: true },
    { user: "Sarah M.", message: "Client called about extending BO-003 rental", time: "9:15 AM" },
  ];
  
  const handleSendMessage = () => {
    if (chatMessage.trim()) {
      // Handle message send
      setChatMessage("");
    }
  };
  
  return (
    <Layout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Operations Dashboard</h1>
          <p className="text-muted-foreground">Real-time overview of daily operations</p>
        </div>
        
        {/* Stats Grid */}
        <div className="grid gap-4 md:grid-cols-3">
          {stats.map((stat, index) => (
            <StatCard key={index} {...stat} />
          ))}
        </div>
        
        {/* Main Grid */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          
          {/* Outgoing Items */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-base">
                <ArrowRight className="w-5 h-5 text-primary" />
                Outgoing Items Today
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-[200px]">
                <div className="space-y-3">
                  {outgoingItems.map((item, index) => (
                    <div key={index} className="p-3 bg-secondary/50 rounded-lg space-y-1">
                      <div className="flex items-center justify-between">
                        <span className="font-medium text-sm text-foreground">{item.client}</span>
                        <Badge variant={item.status === "ready" ? "default" : "outline"} className="text-xs">
                          {item.status}
                        </Badge>
                      </div>
                      <p className="text-xs text-muted-foreground">{item.equipment}</p>
                      <p className="text-xs text-accent font-medium">{item.pickupTime}</p>
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </CardContent>
          </Card>
          
          {/* Items Returning Today */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-base">
                <ArrowLeft className="w-5 h-5 text-success" />
                Returning Today
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-[200px]">
                <div className="space-y-3">
                  {returningToday.map((item, index) => (
                    <div key={index} className="p-3 bg-secondary/50 rounded-lg space-y-1">
                      <div className="flex items-center justify-between">
                        <span className="font-medium text-sm text-foreground">{item.client}</span>
                        <span className="text-xs text-success font-medium">{item.returnTime}</span>
                      </div>
                      <p className="text-xs text-muted-foreground">{item.equipment}</p>
                      <p className="text-xs text-muted-foreground">Order: {item.orderId}</p>
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </CardContent>
          </Card>
          
          {/* Late Returns */}
          <Card className="bg-destructive/5 border-destructive/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-base">
                <AlertTriangle className="w-5 h-5 text-destructive" />
                Late Returns
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-[200px]">
                <div className="space-y-3">
                  {lateReturns.map((item, index) => (
                    <div key={index} className="p-3 bg-background rounded-lg space-y-1">
                      <div className="flex items-center justify-between">
                        <span className="font-medium text-sm text-foreground">{item.client}</span>
                        <Badge variant="destructive" className="text-xs">
                          {item.daysLate} days late
                        </Badge>
                      </div>
                      <p className="text-xs text-muted-foreground">{item.equipment}</p>
                      <p className="text-xs text-destructive">Due: {item.dueDate}</p>
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </CardContent>
          </Card>
          
          {/* Booked Items */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-base">
                <Calendar className="w-5 h-5 text-accent" />
                Upcoming Bookings
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-[200px]">
                <div className="space-y-4">
                  {bookedItems.map((day, dayIndex) => (
                    <div key={dayIndex}>
                      <p className="text-xs font-bold text-accent mb-2">{day.date}</p>
                      <div className="space-y-2">
                        {day.orders.map((order, orderIndex) => (
                          <div key={orderIndex} className="p-2 bg-secondary/50 rounded space-y-1">
                            <div className="flex items-center justify-between">
                              <span className="text-xs font-medium text-foreground">{order.client}</span>
                              <span className="text-xs text-muted-foreground">{order.time}</span>
                            </div>
                            <p className="text-xs text-muted-foreground">{order.equipment}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </CardContent>
          </Card>
          
          {/* Missing Items */}
          <Card className="bg-warning/5 border-warning/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-base">
                <Search className="w-5 h-5 text-warning" />
                Missing Items
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-[200px]">
                <div className="space-y-3">
                  {missingItems.map((item, index) => (
                    <div key={index} className="p-3 bg-background rounded-lg space-y-1">
                      <div className="flex items-center justify-between">
                        <span className="font-medium text-sm text-foreground">{item.item}</span>
                        <span className="text-xs font-bold text-warning">{item.value}</span>
                      </div>
                      <p className="text-xs text-muted-foreground">{item.client}</p>
                      <p className="text-xs text-muted-foreground">Reported: {item.reportedDate}</p>
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </CardContent>
          </Card>
          
          {/* Partial Returns */}
          <Card className="bg-accent/5 border-accent/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-base">
                <Package className="w-5 h-5 text-accent" />
                Partial Returns
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-[200px]">
                <div className="space-y-3">
                  {partialReturns.map((item, index) => (
                    <div key={index} className="p-3 bg-background rounded-lg space-y-1">
                      <div className="flex items-center justify-between">
                        <span className="font-medium text-sm text-foreground">{item.client}</span>
                        <Badge variant="outline" className="text-xs">
                          {item.returned}/{item.total}
                        </Badge>
                      </div>
                      <p className="text-xs text-muted-foreground">Order: {item.orderId}</p>
                      <p className="text-xs text-destructive">Missing: {item.missing}</p>
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </CardContent>
          </Card>
          
        </div>
        
        {/* Office Chat Box */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MessageSquare className="w-5 h-5 text-primary" />
              Office Chat
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <ScrollArea className="h-[200px] pr-4">
              <div className="space-y-3">
                {chatMessages.map((msg, index) => (
                  <div key={index} className={`p-3 rounded-lg ${msg.isSystem ? 'bg-warning/10' : 'bg-secondary/50'}`}>
                    <div className="flex items-center justify-between mb-1">
                      <span className={`text-sm font-medium ${msg.isSystem ? 'text-warning' : 'text-foreground'}`}>
                        {msg.user}
                      </span>
                      <span className="text-xs text-muted-foreground">{msg.time}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{msg.message}</p>
                  </div>
                ))}
              </div>
            </ScrollArea>
            
            <div className="flex gap-2">
              <Input 
                placeholder="Type a message..." 
                value={chatMessage}
                onChange={(e) => setChatMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              />
              <Button onClick={handleSendMessage} className="bg-primary">
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
        
      </div>
    </Layout>
  );
};

export default Dashboard;
