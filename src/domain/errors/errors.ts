export namespace Errors {
  export class EmailInUseError extends Error {
    constructor() {
      super('Email já cadastrado')
      this.name = 'EmailInUseError'
    }
  }

  export class UnexpectedError extends Error {
    constructor() {
      super('Algo de errado aconteceu. Tente novamente em breve.')
      this.name = 'UnexpectedError'
    }
  }

  export class InvalidCredentialsError extends Error {
    constructor() {
      super('Credenciais inválidas')
      this.name = 'InvalidCredentialsError'
    }
  }
}
