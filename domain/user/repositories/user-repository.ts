export class UserRepository {
  public readonly id: string
  public email: string
  public username: string
  public photoUrl: string
  public password: string

  constructor(props: UserRepository) {
    this.id = props.id
    this.email = props.email
    this.username = props.username
    this.password = props.password
    this.photoUrl = props.photoUrl
  }
}
