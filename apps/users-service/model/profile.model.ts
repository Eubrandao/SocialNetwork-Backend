import * as mongoose from 'mongoose';

export const ProfileSchema = new mongoose.Schema({
  userID: { type: String, required: true },
  name: { type: String, required: true },
  email: { type: String, required: true },
  dateBirth: { type: Date, required: false },
  resume: { type: String, required: false }
 
});

export interface Profile {
  id: string;
  name: string;
  email: string;
  dateBirth: Date;
  resume: string;
}