"use client";

import React from "react";
import { 
  BarChart3, 
  TrendingUp, 
  Users, 
  CreditCard, 
  Calendar, 
  Bell, 
  Activity, 
  Zap, 
  LineChart, 
  PieChart, 
  ArrowUpRight, 
  ArrowDownRight, 
  Settings, 
  Mail, 
  Star,
  Sparkles
} from "lucide-react";
import { cn } from "@/lib/utils";

interface BentoGridProps {
  className?: string;
}

interface DashboardMetric {
  title: string;
  value: string | number;
  change?: {
    value: string | number;
    positive: boolean;
  };
  icon: React.ReactNode;
  color: string;
}

interface ChartData {
  labels: string[];
  data: number[];
}

const revenueData: ChartData = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  data: [4500, 3800, 5100, 6000, 5600, 7200],
};

const userActivityData: ChartData = {
  labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  data: [320, 380, 460, 520, 580, 620, 540],
};

const conversionData = {
  total: 68,
  segments: [
    { value: 68, color: "hsl(var(--primary))" },
    { value: 32, color: "hsl(var(--muted))" },
  ],
};

const metrics: DashboardMetric[] = [
  {
    title: "Total Revenue",
    value: "$24,780",
    change: {
      value: "12%",
      positive: true,
    },
    icon: <CreditCard className="h-5 w-5" />,
    color: "bg-blue-500/10 text-blue-600",
  },
  {
    title: "Active Users",
    value: "1,429",
    change: {
      value: "8%",
      positive: true,
    },
    icon: <Users className="h-5 w-5" />,
    color: "bg-violet-500/10 text-violet-600",
  },
  {
    title: "Conversion Rate",
    value: "3.6%",
    change: {
      value: "1.2%",
      positive: false,
    },
    icon: <TrendingUp className="h-5 w-5" />,
    color: "bg-amber-500/10 text-amber-600",
  },
  {
    title: "Avg. Session",
    value: "4m 38s",
    change: {
      value: "12s",
      positive: true,
    },
    icon: <Activity className="h-5 w-5" />,
    color: "bg-emerald-500/10 text-emerald-600",
  },
];

const recentActivities = [
  {
    user: "Sarah Johnson",
    action: "completed onboarding",
    time: "2 minutes ago",
    avatar: "SJ",
    color: "bg-blue-500",
  },
  {
    user: "Michael Chen",
    action: "made a purchase",
    time: "15 minutes ago",
    avatar: "MC",
    color: "bg-purple-500",
  },
  {
    user: "Emma Wilson",
    action: "submitted a ticket",
    time: "1 hour ago",
    avatar: "EW",
    color: "bg-amber-500",
  },
];

const upcomingEvents = [
  {
    title: "Team Meeting",
    time: "10:00 AM",
    date: "Today",
  },
  {
    title: "Product Demo",
    time: "2:30 PM",
    date: "Tomorrow",
  },
  {
    title: "Quarterly Review",
    time: "11:00 AM",
    date: "Jun 5",
  },
];

const BentoGrid: React.FC<BentoGridProps> = ({ className }) => {
  return (
    <div className={cn("w-full max-w-7xl mx-auto p-4", className)}>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold">Dashboard Overview</h1>
          <p className="text-muted-foreground">Welcome back! Here's what's happening today.</p>
        </div>
        <div className="flex items-center gap-2">
          <div className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium flex items-center">
            <Sparkles className="h-4 w-4 mr-1" />
            Pro Dashboard
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
        {metrics.map((metric, index) => (
          <MetricCard key={index} metric={metric} />
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
        <div className="md:col-span-2">
          <RevenueChart data={revenueData} />
        </div>
        <div className="flex flex-col gap-4">
          <ConversionRate data={conversionData} />
          <QuickActions />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <UserActivityChart data={userActivityData} />
        <RecentActivity activities={recentActivities} />
        <div className="flex flex-col gap-4">
          <UpcomingEvents events={upcomingEvents} />
          <Notifications />
        </div>
      </div>
    </div>
  );
};

const MetricCard: React.FC<{ metric: DashboardMetric }> = ({ metric }) => {
  return (
    <div className="bg-card rounded-xl border shadow-sm p-6 hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start">
        <div>
          <p className="text-sm font-medium text-muted-foreground">{metric.title}</p>
          <h3 className="text-2xl font-bold mt-1">{metric.value}</h3>
          {metric.change && (
            <div className="flex items-center mt-1">
              {metric.change.positive ? (
                <ArrowUpRight className="h-3 w-3 text-emerald-500 mr-1" />
              ) : (
                <ArrowDownRight className="h-3 w-3 text-red-500 mr-1" />
              )}
              <span
                className={cn(
                  "text-xs font-medium",
                  metric.change.positive ? "text-emerald-500" : "text-red-500"
                )}
              >
                {metric.change.positive ? "+" : "-"}{metric.change.value}
              </span>
            </div>
          )}
        </div>
        <div className={cn("p-2 rounded-lg", metric.color)}>
          {metric.icon}
        </div>
      </div>
    </div>
  );
};

const RevenueChart: React.FC<{ data: ChartData }> = ({ data }) => {
  return (
    <div className="bg-card rounded-xl border shadow-sm p-6 hover:shadow-md transition-shadow h-full">
      <div className="flex justify-between items-start mb-6">
        <div>
          <h3 className="text-lg font-semibold">Revenue Overview</h3>
          <p className="text-sm text-muted-foreground">Monthly revenue performance</p>
        </div>
        <BarChart3 className="h-5 w-5 text-muted-foreground" />
      </div>
      <div className="h-[200px] w-full">
        <div className="flex items-end justify-between h-full w-full">
          {data.data.map((value, index) => {
            const height = (value / Math.max(...data.data)) * 100;
            return (
              <div key={index} className="flex flex-col items-center w-full">
                <div 
                  className="w-full max-w-[30px] mx-auto bg-primary/20 rounded-t-sm relative group"
                  style={{ height: `${height}%` }}
                >
                  <div className="absolute inset-0 bg-primary rounded-t-sm opacity-40 group-hover:opacity-60 transition-opacity" />
                  <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-background border shadow-sm rounded-md px-2 py-1 text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    ${value}
                  </div>
                </div>
                <span className="text-xs text-muted-foreground mt-2">{data.labels[index]}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

const ConversionRate: React.FC<{ data: { total: number; segments: { value: number; color: string }[] } }> = ({ data }) => {
  return (
    <div className="bg-card rounded-xl border shadow-sm p-6 hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-lg font-semibold">Conversion Rate</h3>
          <p className="text-sm text-muted-foreground">Current performance</p>
        </div>
        <PieChart className="h-5 w-5 text-muted-foreground" />
      </div>
      <div className="flex items-center justify-center mt-2">
        <div className="relative h-24 w-24">
          <svg className="h-full w-full" viewBox="0 0 36 36">
            <path
              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              fill="none"
              stroke="hsl(var(--muted))"
              strokeWidth="3"
              strokeDasharray="100, 100"
            />
            <path
              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              fill="none"
              stroke="hsl(var(--primary))"
              strokeWidth="3"
              strokeDasharray={`${data.total}, 100`}
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center flex-col">
            <span className="text-2xl font-bold">{data.total}%</span>
            <span className="text-xs text-muted-foreground">Converted</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const QuickActions: React.FC = () => {
  return (
    <div className="bg-card rounded-xl border shadow-sm p-6 hover:shadow-md transition-shadow">
      <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
      <div className="grid grid-cols-2 gap-3">
        <button className="flex flex-col items-center justify-center p-3 bg-primary/5 hover:bg-primary/10 rounded-lg transition-colors">
          <Settings className="h-5 w-5 mb-1 text-primary" />
          <span className="text-xs font-medium">Settings</span>
        </button>
        <button className="flex flex-col items-center justify-center p-3 bg-primary/5 hover:bg-primary/10 rounded-lg transition-colors">
          <Users className="h-5 w-5 mb-1 text-primary" />
          <span className="text-xs font-medium">Users</span>
        </button>
        <button className="flex flex-col items-center justify-center p-3 bg-primary/5 hover:bg-primary/10 rounded-lg transition-colors">
          <Mail className="h-5 w-5 mb-1 text-primary" />
          <span className="text-xs font-medium">Messages</span>
        </button>
        <button className="flex flex-col items-center justify-center p-3 bg-primary/5 hover:bg-primary/10 rounded-lg transition-colors">
          <Star className="h-5 w-5 mb-1 text-primary" />
          <span className="text-xs font-medium">Favorites</span>
        </button>
      </div>
    </div>
  );
};

const UserActivityChart: React.FC<{ data: ChartData }> = ({ data }) => {
  return (
    <div className="bg-card rounded-xl border shadow-sm p-6 hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start mb-6">
        <div>
          <h3 className="text-lg font-semibold">User Activity</h3>
          <p className="text-sm text-muted-foreground">Weekly active users</p>
        </div>
        <LineChart className="h-5 w-5 text-muted-foreground" />
      </div>
      <div className="h-[150px] w-full">
        <svg className="w-full h-full" viewBox="0 0 300 100">
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.5" />
              <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0" />
            </linearGradient>
          </defs>
          {data.data.map((_, index) => (
            <line
              key={`grid-${index}`}
              x1="0"
              y1={(index + 1) * (100 / data.data.length)}
              x2="300"
              y2={(index + 1) * (100 / data.data.length)}
              stroke="hsl(var(--border))"
              strokeWidth="0.5"
              strokeDasharray="2,2"
            />
          ))}
          {(() => {
            const maxValue = Math.max(...data.data);
            const points = data.data
              .map((value, index) => {
                const x = (index * 300) / (data.data.length - 1);
                const y = 100 - (value / maxValue) * 100;
                return `${x},${y}`;
              })
              .join(" ");

            const areaPoints = `0,100 ${points} 300,100`;

            return (
              <>
                <polyline
                  fill="none"
                  stroke="hsl(var(--primary))"
                  strokeWidth="2"
                  points={points}
                />
                <polygon fill="url(#gradient)" points={areaPoints} />
                {data.data.map((value, index) => {
                  const x = (index * 300) / (data.data.length - 1);
                  const y = 100 - (value / maxValue) * 100;
                  return (
                    <circle
                      key={index}
                      cx={x}
                      cy={y}
                      r="3"
                      fill="hsl(var(--background))"
                      stroke="hsl(var(--primary))"
                      strokeWidth="2"
                      className="hover:r-4 transition-all"
                    />
                  );
                })}
              </>
            );
          })()}
        </svg>
      </div>
      <div className="flex justify-between mt-2">
        {data.labels.map((label, index) => (
          <span key={index} className="text-xs text-muted-foreground">
            {label}
          </span>
        ))}
      </div>
    </div>
  );
};

const RecentActivity: React.FC<{ activities: { user: string; action: string; time: string; avatar: string; color: string }[] }> = ({ activities }) => {
  return (
    <div className="bg-card rounded-xl border shadow-sm p-6 hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start mb-6">
        <div>
          <h3 className="text-lg font-semibold">Recent Activity</h3>
          <p className="text-sm text-muted-foreground">Latest user actions</p>
        </div>
        <Zap className="h-5 w-5 text-muted-foreground" />
      </div>
      <div className="space-y-4">
        {activities.map((activity, index) => (
          <div key={index} className="flex items-start">
            <div className={cn("h-8 w-8 rounded-full flex items-center justify-center text-white text-xs font-medium", activity.color)}>
              {activity.avatar}
            </div>
            <div className="ml-3">
              <p className="text-sm">
                <span className="font-medium">{activity.user}</span>{" "}
                <span className="text-muted-foreground">{activity.action}</span>
              </p>
              <p className="text-xs text-muted-foreground">{activity.time}</p>
            </div>
          </div>
        ))}
      </div>
      <button className="w-full mt-4 text-center text-sm text-primary hover:text-primary/80 transition-colors">
        View all activity
      </button>
    </div>
  );
};

const UpcomingEvents: React.FC<{ events: { title: string; time: string; date: string }[] }> = ({ events }) => {
  return (
    <div className="bg-card rounded-xl border shadow-sm p-6 hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start mb-6">
        <div>
          <h3 className="text-lg font-semibold">Upcoming Events</h3>
          <p className="text-sm text-muted-foreground">Your schedule</p>
        </div>
        <Calendar className="h-5 w-5 text-muted-foreground" />
      </div>
      <div className="space-y-4">
        {events.map((event, index) => (
          <div key={index} className="flex items-start">
            <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <Calendar className="h-5 w-5 text-primary" />
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium">{event.title}</p>
              <p className="text-xs text-muted-foreground">
                {event.time} · {event.date}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const Notifications: React.FC = () => {
  return (
    <div className="bg-card rounded-xl border shadow-sm p-6 hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start mb-6">
        <div>
          <h3 className="text-lg font-semibold">Notifications</h3>
          <p className="text-sm text-muted-foreground">Recent updates</p>
        </div>
        <Bell className="h-5 w-5 text-muted-foreground" />
      </div>
      <div className="space-y-2">
        <div className="p-3 rounded-lg bg-primary/5 border border-primary/10">
          <p className="text-sm font-medium">New feature available</p>
          <p className="text-xs text-muted-foreground mt-1">
            Check out the new analytics dashboard
          </p>
        </div>
        <div className="p-3 rounded-lg bg-amber-500/5 border border-amber-500/10">
          <p className="text-sm font-medium">System maintenance</p>
          <p className="text-xs text-muted-foreground mt-1">
            Scheduled for June 4th, 2AM-4AM UTC
          </p>
        </div>
      </div>
    </div>
  );
};

export { BentoGrid };