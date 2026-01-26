export type StudentRow = {
  id: string;
  name: string;
  studentId: string;
  image: string;
  className: string;
  age: string;
  gender: "Male" | "Female";
  status: "Active" | "Inactive";
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
  class: string
};
