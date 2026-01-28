export type StudentRow = {
  id: string;
  name: string;
  studentId: string;
  image: string;
  className: string;
  age: string;
  gender: "Male" | "Female";
  status: "Active" | "Inactive";
  email: string;
  phone: string;
  address: string;

};


export type TeacherRow = {
  id: string;
  name: string;
  teacherId: string;
  image: string;
  department: string;
  age: string;
  gender: "Male" | "Female";
  status: "Active" | "Inactive";
  class: string,
  phone: string
};
export type ClassRow = {
  id: string;
  name: string;
  level: string;
  teacher: string;
  totalStudents: number;
}
export type SubjectCard = {
  id: string;
  name: string;
  schedule: string;         // e.g., "Tue, Fri • 2:00 PM"
  icon: string;             // you pick which lucide icon to use in code
  teacher: {
    name: string;
    avatar: string;
    role: string;
  };
}

export type ResultRow = {
  id: string;
  name: string;
  studentId: string;
  image: string;
  ca1: number;
  ca2: number;
  exam: number;
  project: number;
  average: number;   // computed already for UI
  grade: "A+" | "A" | "B" | "C" | "D" | "E" | "F";
  position: number;
};


export type SubjectBreakdownRow = {
  id: string;
  subject: string;
  icon: string;         // lucide icon name
  iconColor: string;    // tailwind bg + text colors (optional)
  tests: string;        // e.g. "18/20"
  assignments: string;
  exam: string;
  total: number;
  grade: string;
  teacher: string;
  performance: {
    label: string;      // Excellent | Very Good | Good | Fair | Poor
    status: string;     // perf-excellent | perf-good, etc (CSS hook)
  };
};
