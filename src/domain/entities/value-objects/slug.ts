export class Slug {
  public value: string

  constructor({ value }: { value: string }) {
    this.value = value
  }

  /**
   * Receives a string and normalize it as a slug text
   *
   * Example: "An example text" => "an-example-text"
   *
   * @param text {string}
   */

  static createFromText({ text }: { text: string }) {
    const slugText = text
      .normalize('NFKD')
      .toLowerCase()
      .trim()
      .replace(/\s+/g, '-')
      .replace(/[^\w-]+/g, '')
      .replace(/_/g, '-')
      .replace(/--+/g, '-')
      .replace(/-$/g, '')

    return new Slug({ value: slugText })
  }
}
