/* ─────────────────────────── DATA ─────────────────────────── */
const chartData = [
    { date: "25 Apr", surveys: 95,  ai: 110 },
    { date: "28 Apr", surveys: 190, ai: 130 },
    { date: "1 May",  surveys: 230, ai: 145 },
    { date: "4 May",  surveys: 255, ai: 150 },
    { date: "7 May",  surveys: 295, ai: 175 },
    { date: "10 May", surveys: 340, ai: 160 },
    { date: "13 May", surveys: 355, ai: 155 },
    { date: "16 May", surveys: 270, ai: 120 },
    { date: "19 May", surveys: 290, ai: 140 },
    { date: "22 May", surveys: 255, ai: 155 },
    { date: "24 May", surveys: 265, ai: 145 },
  ];
  
  const partners = [
    { id: 1, initials: "SM", color: "#3b82f6", name: "SwiftMove Relocations",   subdomain: "swiftmove.movelogic.ai",   status: "Active",    users: 24, surveys: 342, estimates: 256, lastActivity: "24 May 2025, 10:21 AM" },
    { id: 2, initials: "PD", color: "#a855f7", name: "Prime Moving Solutions",  subdomain: "primemoves.movelogic.ai",  status: "Active",    users: 18, surveys: 231, estimates: 167, lastActivity: "24 May 2025, 09:58 AM" },
    { id: 3, initials: "ES", color: "#f97316", name: "EasyShift Movers",        subdomain: "easyshift.movelogic.ai",   status: "Trial",     users: 6,  surveys: 48,  estimates: 31,  lastActivity: "24 May 2025, 08:35 AM" },
    { id: 4, initials: "RR", color: "#8c95a6", name: "Rapid Relocations",       subdomain: "rapidreloc.movelogic.ai",  status: "Suspended", users: 0,  surveys: 0,   estimates: 0,   lastActivity: "21 May 2025, 04:12 PM" },
    { id: 5, initials: "RA", color: "#10b981", name: "MoveMasters Group",       subdomain: "movemasters.movelogic.ai", status: "Active",    users: 32, surveys: 512, estimates: 388, lastActivity: "24 May 2025, 10:05 AM" },
  ];

export { chartData, partners };