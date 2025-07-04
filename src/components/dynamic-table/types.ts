// types.ts
export interface ColumnConfig {
  field: string;
  headerName: string;
  width?: number;
}

export interface StaffData {
  id: number;
  [key: string]: any;
}

export type List = {
  specializationID: number;
  specializationName: string;
  specializationShortName: string;
  courseID: number;
  courseName: string;
  courseShortName: string;
  description: string;
  userID: number;
  created: Date;
  modified: Date;
  isActive: boolean;
};

export type FilterField =
  | { name: string; label: string; type: 'select'; options: string[] }
  | { name: string; label: string; type: 'text' };