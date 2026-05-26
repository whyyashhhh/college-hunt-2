export type CollegeSeed = {
  name: string;
  city: string;
  state: string;
  type: 'Government' | 'Private';
  stream: 'Engineering' | 'Medical' | 'MBA';
  fees: number;
  avgPackage: number;
  placementPct: number;
  nirfRank?: number;
  courses: Array<{
    name: string;
    duration: string;
    fees: number;
  }>;
};

export const seedColleges: CollegeSeed[] = [
  {
    name: 'IIT Delhi',
    city: 'New Delhi',
    state: 'Delhi',
    type: 'Government',
    stream: 'Engineering',
    fees: 240000,
    avgPackage: 2100000,
    placementPct: 92.4,
    nirfRank: 2,
    courses: [
      { name: 'B.Tech Computer Science and Engineering', duration: '4 Years', fees: 240000 },
      { name: 'B.Tech Electrical Engineering', duration: '4 Years', fees: 240000 },
      { name: 'M.Tech Artificial Intelligence', duration: '2 Years', fees: 180000 }
    ]
  },
  {
    name: 'IIT Bombay',
    city: 'Mumbai',
    state: 'Maharashtra',
    type: 'Government',
    stream: 'Engineering',
    fees: 250000,
    avgPackage: 2300000,
    placementPct: 94.1,
    nirfRank: 3,
    courses: [
      { name: 'B.Tech Computer Science and Engineering', duration: '4 Years', fees: 250000 },
      { name: 'B.Tech Mechanical Engineering', duration: '4 Years', fees: 250000 },
      { name: 'M.Tech Data Science', duration: '2 Years', fees: 190000 }
    ]
  },
  {
    name: 'IIT Madras',
    city: 'Chennai',
    state: 'Tamil Nadu',
    type: 'Government',
    stream: 'Engineering',
    fees: 220000,
    avgPackage: 2050000,
    placementPct: 93.7,
    nirfRank: 1,
    courses: [
      { name: 'B.Tech Computer Science and Engineering', duration: '4 Years', fees: 220000 },
      { name: 'B.Tech Aerospace Engineering', duration: '4 Years', fees: 220000 },
      { name: 'M.Tech Robotics', duration: '2 Years', fees: 170000 }
    ]
  },
  {
    name: 'IIT Kanpur',
    city: 'Kanpur',
    state: 'Uttar Pradesh',
    type: 'Government',
    stream: 'Engineering',
    fees: 230000,
    avgPackage: 1950000,
    placementPct: 91.8,
    nirfRank: 5,
    courses: [
      { name: 'B.Tech Computer Science and Engineering', duration: '4 Years', fees: 230000 },
      { name: 'B.Tech Chemical Engineering', duration: '4 Years', fees: 230000 },
      { name: 'M.Tech Cyber Security', duration: '2 Years', fees: 175000 }
    ]
  },
  {
    name: 'IIT Kharagpur',
    city: 'Kharagpur',
    state: 'West Bengal',
    type: 'Government',
    stream: 'Engineering',
    fees: 235000,
    avgPackage: 1850000,
    placementPct: 90.6,
    nirfRank: 4,
    courses: [
      { name: 'B.Tech Computer Science and Engineering', duration: '4 Years', fees: 235000 },
      { name: 'B.Tech Civil Engineering', duration: '4 Years', fees: 235000 },
      { name: 'M.Tech VLSI Design', duration: '2 Years', fees: 180000 }
    ]
  },
  {
    name: 'IIT Roorkee',
    city: 'Roorkee',
    state: 'Uttarakhand',
    type: 'Government',
    stream: 'Engineering',
    fees: 225000,
    avgPackage: 1750000,
    placementPct: 89.9,
    nirfRank: 6,
    courses: [
      { name: 'B.Tech Computer Science and Engineering', duration: '4 Years', fees: 225000 },
      { name: 'B.Tech Biotechnology', duration: '4 Years', fees: 225000 },
      { name: 'M.Tech Structural Engineering', duration: '2 Years', fees: 170000 }
    ]
  },
  {
    name: 'NIT Trichy',
    city: 'Tiruchirappalli',
    state: 'Tamil Nadu',
    type: 'Government',
    stream: 'Engineering',
    fees: 190000,
    avgPackage: 1550000,
    placementPct: 88.2,
    nirfRank: 9,
    courses: [
      { name: 'B.Tech Computer Science and Engineering', duration: '4 Years', fees: 190000 },
      { name: 'B.Tech Electronics and Communication Engineering', duration: '4 Years', fees: 190000 },
      { name: 'M.Tech Power Systems', duration: '2 Years', fees: 145000 }
    ]
  },
  {
    name: 'NIT Surathkal',
    city: 'Mangaluru',
    state: 'Karnataka',
    type: 'Government',
    stream: 'Engineering',
    fees: 185000,
    avgPackage: 1480000,
    placementPct: 86.7,
    nirfRank: 10,
    courses: [
      { name: 'B.Tech Computer Science and Engineering', duration: '4 Years', fees: 185000 },
      { name: 'B.Tech Information Technology', duration: '4 Years', fees: 185000 },
      { name: 'M.Tech Signal Processing', duration: '2 Years', fees: 140000 }
    ]
  },
  {
    name: 'NIT Warangal',
    city: 'Warangal',
    state: 'Telangana',
    type: 'Government',
    stream: 'Engineering',
    fees: 180000,
    avgPackage: 1420000,
    placementPct: 85.9,
    nirfRank: 12,
    courses: [
      { name: 'B.Tech Computer Science and Engineering', duration: '4 Years', fees: 180000 },
      { name: 'B.Tech Electronics and Communication Engineering', duration: '4 Years', fees: 180000 },
      { name: 'M.Tech Machine Design', duration: '2 Years', fees: 138000 }
    ]
  },
  {
    name: 'BITS Pilani',
    city: 'Pilani',
    state: 'Rajasthan',
    type: 'Private',
    stream: 'Engineering',
    fees: 520000,
    avgPackage: 1700000,
    placementPct: 87.9,
    nirfRank: 25,
    courses: [
      { name: 'B.E. Computer Science', duration: '4 Years', fees: 520000 },
      { name: 'B.E. Electronics and Instrumentation', duration: '4 Years', fees: 520000 },
      { name: 'M.E. Software Systems', duration: '2 Years', fees: 360000 }
    ]
  },
  {
    name: 'VIT Vellore',
    city: 'Vellore',
    state: 'Tamil Nadu',
    type: 'Private',
    stream: 'Engineering',
    fees: 210000,
    avgPackage: 920000,
    placementPct: 84.5,
    nirfRank: 11,
    courses: [
      { name: 'B.Tech Computer Science and Engineering', duration: '4 Years', fees: 210000 },
      { name: 'B.Tech Artificial Intelligence and Data Science', duration: '4 Years', fees: 210000 },
      { name: 'M.Tech Software Engineering', duration: '2 Years', fees: 150000 }
    ]
  },
  {
    name: 'Manipal Institute of Technology',
    city: 'Manipal',
    state: 'Karnataka',
    type: 'Private',
    stream: 'Engineering',
    fees: 430000,
    avgPackage: 1120000,
    placementPct: 82.1,
    nirfRank: 55,
    courses: [
      { name: 'B.Tech Computer Science and Engineering', duration: '4 Years', fees: 430000 },
      { name: 'B.Tech Mechanical Engineering', duration: '4 Years', fees: 430000 },
      { name: 'M.Tech Robotics and Automation', duration: '2 Years', fees: 290000 }
    ]
  },
  {
    name: 'SRM Institute of Science and Technology',
    city: 'Chennai',
    state: 'Tamil Nadu',
    type: 'Private',
    stream: 'Engineering',
    fees: 350000,
    avgPackage: 880000,
    placementPct: 81.6,
    nirfRank: 44,
    courses: [
      { name: 'B.Tech Computer Science and Engineering', duration: '4 Years', fees: 350000 },
      { name: 'B.Tech Electronics and Communication Engineering', duration: '4 Years', fees: 350000 },
      { name: 'M.Tech Embedded Systems', duration: '2 Years', fees: 250000 }
    ]
  },
  {
    name: 'IIIT Hyderabad',
    city: 'Hyderabad',
    state: 'Telangana',
    type: 'Government',
    stream: 'Engineering',
    fees: 320000,
    avgPackage: 2050000,
    placementPct: 92.9,
    nirfRank: 55,
    courses: [
      { name: 'B.Tech Computer Science and Engineering', duration: '4 Years', fees: 320000 },
      { name: 'B.Tech Electronics and Communication Engineering', duration: '4 Years', fees: 320000 },
      { name: 'M.S. by Research in Computer Science', duration: '2 Years', fees: 220000 }
    ]
  },
  {
    name: 'DTU',
    city: 'New Delhi',
    state: 'Delhi',
    type: 'Government',
    stream: 'Engineering',
    fees: 220000,
    avgPackage: 1600000,
    placementPct: 88.8,
    nirfRank: 40,
    courses: [
      { name: 'B.Tech Computer Science and Engineering', duration: '4 Years', fees: 220000 },
      { name: 'B.Tech Electrical Engineering', duration: '4 Years', fees: 220000 },
      { name: 'M.Tech VLSI Design', duration: '2 Years', fees: 165000 }
    ]
  },
  {
    name: 'NSUT',
    city: 'New Delhi',
    state: 'Delhi',
    type: 'Government',
    stream: 'Engineering',
    fees: 210000,
    avgPackage: 1520000,
    placementPct: 87.4,
    nirfRank: 57,
    courses: [
      { name: 'B.Tech Computer Science and Engineering', duration: '4 Years', fees: 210000 },
      { name: 'B.Tech Information Technology', duration: '4 Years', fees: 210000 },
      { name: 'M.Tech AI and Data Science', duration: '2 Years', fees: 160000 }
    ]
  },
  {
    name: 'Jadavpur University',
    city: 'Kolkata',
    state: 'West Bengal',
    type: 'Government',
    stream: 'Engineering',
    fees: 30000,
    avgPackage: 1300000,
    placementPct: 84.3,
    nirfRank: 18,
    courses: [
      { name: 'B.E. Computer Science and Engineering', duration: '4 Years', fees: 30000 },
      { name: 'B.E. Electronics and Telecommunication Engineering', duration: '4 Years', fees: 30000 },
      { name: 'M.E. Power Engineering', duration: '2 Years', fees: 24000 }
    ]
  },
  {
    name: 'RV College of Engineering',
    city: 'Bengaluru',
    state: 'Karnataka',
    type: 'Private',
    stream: 'Engineering',
    fees: 420000,
    avgPackage: 1200000,
    placementPct: 83.9,
    nirfRank: 96,
    courses: [
      { name: 'B.E. Computer Science and Engineering', duration: '4 Years', fees: 420000 },
      { name: 'B.E. Electronics and Communication Engineering', duration: '4 Years', fees: 420000 },
      { name: 'M.Tech Information Security', duration: '2 Years', fees: 260000 }
    ]
  },
  {
    name: 'AIIMS Delhi',
    city: 'New Delhi',
    state: 'Delhi',
    type: 'Government',
    stream: 'Medical',
    fees: 18000,
    avgPackage: 1200000,
    placementPct: 98.7,
    nirfRank: 1,
    courses: [
      { name: 'MBBS', duration: '5.5 Years', fees: 18000 },
      { name: 'MD General Medicine', duration: '3 Years', fees: 30000 },
      { name: 'B.Sc Nursing', duration: '4 Years', fees: 15000 }
    ]
  },
  {
    name: 'Christian Medical College Vellore',
    city: 'Vellore',
    state: 'Tamil Nadu',
    type: 'Private',
    stream: 'Medical',
    fees: 250000,
    avgPackage: 950000,
    placementPct: 97.2,
    nirfRank: 3,
    courses: [
      { name: 'MBBS', duration: '5.5 Years', fees: 250000 },
      { name: 'MD Paediatrics', duration: '3 Years', fees: 180000 },
      { name: 'B.Sc Nursing', duration: '4 Years', fees: 120000 }
    ]
  },
  {
    name: 'JIPMER Puducherry',
    city: 'Puducherry',
    state: 'Puducherry',
    type: 'Government',
    stream: 'Medical',
    fees: 22000,
    avgPackage: 980000,
    placementPct: 96.8,
    nirfRank: 5,
    courses: [
      { name: 'MBBS', duration: '5.5 Years', fees: 22000 },
      { name: 'MD Radiology', duration: '3 Years', fees: 35000 },
      { name: 'B.Sc Nursing', duration: '4 Years', fees: 18000 }
    ]
  },
  {
    name: 'Kasturba Medical College Manipal',
    city: 'Manipal',
    state: 'Karnataka',
    type: 'Private',
    stream: 'Medical',
    fees: 1300000,
    avgPackage: 1100000,
    placementPct: 94.5,
    nirfRank: 9,
    courses: [
      { name: 'MBBS', duration: '5.5 Years', fees: 1300000 },
      { name: 'MD Internal Medicine', duration: '3 Years', fees: 240000 },
      { name: 'B.Sc Medical Imaging Technology', duration: '4 Years', fees: 90000 }
    ]
  },
  {
    name: 'IIM Ahmedabad',
    city: 'Ahmedabad',
    state: 'Gujarat',
    type: 'Government',
    stream: 'MBA',
    fees: 2600000,
    avgPackage: 3400000,
    placementPct: 100,
    nirfRank: 1,
    courses: [
      { name: 'Post Graduate Programme in Management', duration: '2 Years', fees: 2600000 },
      { name: 'Executive MBA', duration: '1 Year', fees: 1800000 },
      { name: 'Fellow Programme in Management', duration: '4 Years', fees: 1000000 }
    ]
  },
  {
    name: 'IIM Bangalore',
    city: 'Bengaluru',
    state: 'Karnataka',
    type: 'Government',
    stream: 'MBA',
    fees: 2400000,
    avgPackage: 3300000,
    placementPct: 99.8,
    nirfRank: 2,
    courses: [
      { name: 'Post Graduate Programme in Management', duration: '2 Years', fees: 2400000 },
      { name: 'Executive Post Graduate Programme in Management', duration: '1 Year', fees: 1700000 },
      { name: 'Doctoral Programme in Management', duration: '4 Years', fees: 950000 }
    ]
  },
  {
    name: 'IIM Calcutta',
    city: 'Kolkata',
    state: 'West Bengal',
    type: 'Government',
    stream: 'MBA',
    fees: 2500000,
    avgPackage: 3200000,
    placementPct: 99.5,
    nirfRank: 4,
    courses: [
      { name: 'Post Graduate Programme in Management', duration: '2 Years', fees: 2500000 },
      { name: 'Executive Programme in Management', duration: '1 Year', fees: 1650000 },
      { name: 'Doctoral Programme in Management', duration: '4 Years', fees: 900000 }
    ]
  }
];
