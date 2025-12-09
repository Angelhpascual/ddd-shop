export class ProductPrice {
  readonly value: number
  readonly currency: string

  constructor(value: number, currency: string = "EUR") {
    if (value < 0) {
      throw new Error("Product price must be greater than 0")
    }
    this.value = value
    this.currency = currency
  }
}
