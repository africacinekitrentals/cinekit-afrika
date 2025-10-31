import Layout from "@/components/Layout";
import StatCard from "@/components/StatCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Package, 
  Calendar, 
  DollarSign, 
  AlertTriangle,
  TrendingUp,
  Clock
} from "lucide-react";

const Dashboard = () => {
  // Mock data - will be replaced with real data later
  const stats = [
    {
      title: "Active Rentals",
      value: 12,
      description: "Currently checked out",
      icon: Calendar,
      variant: "default" as const,
      trend: { value: "8% from last week", isPositive: true }
    },
    {
      title: "Total Revenue",
      value: "KSh 245,000",
      description: "This month",
      icon: DollarSign,
      variant: "success" as const,
      trend: { value: "12% from last month", isPositive: true }
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
  
  const recentActivity = [
    { client: "Vision Films Ltd", equipment: "Sony FX6 Kit", status: "checked_out", time: "2 hours ago" },
    { client: "Creative Studios", equipment: "Aputure 600D", status: "returned", time: "4 hours ago" },
    { client: "Safari Productions", equipment: "DJI Ronin RS3", status: "booked", time: "5 hours ago" },
    { client: "Nairobi Media", equipment: "Canon C70", status: "late", time: "1 day ago" },
  ];
  
  const getStatusColor = (status: string) => {
    switch (status) {
      case "checked_out": return "text-primary bg-primary/10";
      case "returned": return "text-success bg-success/10";
      case "booked": return "text-accent bg-accent/10";
      case "late": return "text-destructive bg-destructive/10";
      default: return "text-muted bg-muted/10";
    }
  };
  
  const getStatusText = (status: string) => {
    switch (status) {
      case "checked_out": return "Checked Out";
      case "returned": return "Returned";
      case "booked": return "Booked";
      case "late": return "Late";
      default: return status;
    }
  };
  
  return (
    <Layout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
          <p className="text-muted-foreground">Welcome back! Here's what's happening today.</p>
        </div>
        
        {/* Stats Grid */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <StatCard key={index} {...stat} />
          ))}
        </div>
        
        {/* Recent Activity */}
        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                Recent Activity
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentActivity.map((activity, index) => (
                  <div key={index} className="flex items-center justify-between py-3 border-b border-border last:border-0">
                    <div className="space-y-1">
                      <p className="font-medium text-foreground">{activity.client}</p>
                      <p className="text-sm text-muted-foreground">{activity.equipment}</p>
                    </div>
                    <div className="text-right space-y-1">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(activity.status)}`}>
                        {getStatusText(activity.status)}
                      </span>
                      <p className="text-xs text-muted-foreground">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5" />
                Quick Stats
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between py-3">
                  <span className="text-muted-foreground">Equipment Utilization</span>
                  <span className="font-bold text-foreground">68%</span>
                </div>
                <div className="w-full bg-secondary rounded-full h-2">
                  <div className="bg-primary h-2 rounded-full" style={{ width: '68%' }}></div>
                </div>
                
                <div className="flex items-center justify-between py-3">
                  <span className="text-muted-foreground">On-Time Returns</span>
                  <span className="font-bold text-success">92%</span>
                </div>
                <div className="w-full bg-secondary rounded-full h-2">
                  <div className="bg-success h-2 rounded-full" style={{ width: '92%' }}></div>
                </div>
                
                <div className="flex items-center justify-between py-3">
                  <span className="text-muted-foreground">Repeat Clients</span>
                  <span className="font-bold text-accent">45</span>
                </div>
                
                <div className="flex items-center justify-between py-3">
                  <span className="text-muted-foreground">Avg. Rental Duration</span>
                  <span className="font-bold text-foreground">3.5 days</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
