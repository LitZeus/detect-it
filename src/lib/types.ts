export interface UserProfile {
  id: string;
  full_name: string;
  age: number;
  mobile_number: string;
  gender: 'male' | 'female' | 'other';
  created_at: string;
  user_id: string;
}