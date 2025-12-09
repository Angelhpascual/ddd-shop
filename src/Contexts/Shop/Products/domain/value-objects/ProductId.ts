export class ProductId {
  readonly value: string

  constructor(value: string) {
    this.value = value
  }

  equals(other: ProductId): boolean {
    return this.value === other.value
  }
}
