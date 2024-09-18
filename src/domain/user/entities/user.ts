export interface IUser {
  id: string
  email: string
  username: string
  photoUrl: string
}

export class User implements IUser {
  public id: string
  public email: string
  public username: string
  public photoUrl: string

  constructor({ id, email, username, photoUrl }: IUser) {
    this.id = id
    this.email = email
    this.username = username
    this.photoUrl = photoUrl
  }
}
