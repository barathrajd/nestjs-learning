type Gender = 'male' | 'female' | 'other';

export type User = {
  firstName: string;
  lastName: string;
  dob: string;
  gender: Gender;
};
