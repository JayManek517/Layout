import { z as zod } from 'zod';

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

export type DynamicFormSchemaType = zod.infer<typeof DynamicFormSchema>;

export const DynamicFormSchema = zod.object({
  name: zod.string().min(1, { message: 'Name is required!' }),
  email: zod
    .string()
    .email({ message: 'Email must be a valid email address!' }).nullable().optional(),
  state: zod.string().nullable().optional(),
  city: zod.string().nullable().optional(),
  address: zod.string().nullable().optional(),
  zipCode: zod.string().nullable().optional(),
  company: zod.string().nullable().optional(),
  role: zod.string().nullable().optional(),
  status: zod.string(),
});
