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
