import { Auth } from 'firebase/auth'
import {
  IAuth,
  IFirebase,
  IFirebaseSignOut,
  initApp,
  RemoteFirebase,
  RemoteFirebaseAuthSignIn,
  RemoteFirebaseAuthSignUp,
  RemoteFirebaseSignOut,
} from '@/infra/services/firebase'

export class DBFirebase {
  public static database(): IFirebase {
    return new RemoteFirebase({ initApp: initApp.initializeApp() })
  }

  public static signUpAuth(auth: Auth): IAuth.FirebaseSignUp {
    return new RemoteFirebaseAuthSignUp({ auth })
  }

  public static signInAuth(auth: Auth): IAuth.FirebaseSignIn {
    return new RemoteFirebaseAuthSignIn({ auth })
  }

  public static signOutAuth(auth: Auth): IFirebaseSignOut {
    return new RemoteFirebaseSignOut({ auth })
  }
}
