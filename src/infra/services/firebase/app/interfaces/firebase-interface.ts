import { Auth } from "firebase/auth";
import { FirebaseStorage } from "firebase/storage";
import {
  CollectionReference,
  DocumentData,
  Firestore,
} from "firebase/firestore";
import { FirebaseApp } from "firebase/app";
import { COLLECTIONS } from "@/infra/services/firebase/collections";

export namespace IFirebase {
  export type Params = {
    id: string;
    path: COLLECTIONS;
    collections: COLLECTIONS;
  };

  export type CollectionType = CollectionReference<DocumentData, DocumentData>;
}

export interface IFirebase {
  auth(): Auth;
  getDB(): Firestore;
  storage(): FirebaseStorage;
  collection(params: COLLECTIONS): IFirebase.CollectionType;
  subCollection(params: IFirebase.Params): IFirebase.CollectionType;
}

export interface IFirebaseConfig {
  initializeApp(): FirebaseApp;
}
