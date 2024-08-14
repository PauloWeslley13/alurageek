import { DBFirebase, IFirebase } from "@/infra/services/firebase";

export const makeRemoteDatabase = (): IFirebase => DBFirebase.database();
