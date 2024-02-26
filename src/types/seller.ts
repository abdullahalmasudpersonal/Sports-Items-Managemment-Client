export interface TSeller {
  _id?: string;
  userId: string;
  user: string;
  username: string;
  email: string;
  gender: "male" | "female" | "other";
  bloodGroup: "A+" | "A-" | "B+" | "B-" | "AB+" | "AB-" | "O+" | "O-";
  contactNo: number;
  presentAddress: string;
  permanetAddress: string;
  profileImg?: string;
  isDeleted: boolean;
}
