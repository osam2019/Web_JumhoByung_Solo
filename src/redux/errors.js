export class ValidationTypeError extends Error {
  constructor(message) {
    super(message)
    this.name = 'ValidationTypeError'
    this.message = message
  }
}
export class ValidationValueError extends Error {
  constructor(message) {
    super(message)
    this.name = 'ValidationValueError'
    this.message = message
  }
}