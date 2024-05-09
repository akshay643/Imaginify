import { Schema, model, models } from "mongoose";
interface User extends Document {
  clerkId: string;
  email: string;
  userName: string;
  firstName?: string;
  lastName?: string;
  planId: string;
  creditBalance: string;
  createdAt: Date;
}
const UserSchema = new Schema({
  clerkId: { type: String, unique: true, required: true },
  email: { type: String, unique: true, required: true },
  userName: { type: String, unique: true, required: true },
  firstName: { type: String },
  lastname: { type: String },
  planId: { type: String, default: 1 },
  creditBalance: { type: String, default: 10 },
  createdAt: { type: String, default: Date.now },
});

const User = models?.User || model("User", UserSchema);
export default User;
