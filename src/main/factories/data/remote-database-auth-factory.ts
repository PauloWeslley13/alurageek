import { Auth } from "firebase/auth";
import { DBFirebase } from "@/infra/services/firebase";

export const makeRemoteDatabaseAuth = (): Auth => {
  return DBFirebase.database().auth();
};
