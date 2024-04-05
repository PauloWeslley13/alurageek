export class UserRepository {
  public readonly id: string
  public email: string
  public username: string
  public photoUrl: string
  public accessToken?: string
  public password: string

  constructor(props: UserRepository) {
    this.id = props.id
    this.email = props.email
    this.username = props.username
    this.accessToken = props.accessToken
    this.photoUrl = props.photoUrl
    this.password = props.password
  }
}
