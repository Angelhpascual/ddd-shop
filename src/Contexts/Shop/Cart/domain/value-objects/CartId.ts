export class CartId {
  readonly value: string

  constructor(id: string) {
    if (id.length < 5) {
      throw new Error("Cart ID must be at least 5 characters long")
    }
    this.value = id
  }
}
