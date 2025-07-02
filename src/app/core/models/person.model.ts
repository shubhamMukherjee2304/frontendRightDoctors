export interface Person {
  _id?: string; // MongoDB auto-generated ID, optional for creation
  name: string;
  age: number;
  gender: 'Male' | 'Female' | 'Other';
  mobileNumber: string; // Renamed from 'Mobile number' for Angular convention
}