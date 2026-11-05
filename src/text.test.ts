import { describe, expect, it } from "vitest";
import { slugify, truncate, wordCount } from "./text";

describe("slugify", () => {
  it("lowercases and replaces a space", () => {
    expect(slugify("Hello World")).toBe("hello-world");
  });
});

describe("truncate", () => {
  it("keeps short text", () => {
    expect(truncate("abc", 5)).toBe("abc");
  });
});

describe("wordCount", () => {
  it("counts words", () => {
    expect(wordCount("one two")).toBe(2);
  });
  it("ignores extra spaces", () => {
    expect(wordCount("  one   two ")).toBe(2);
  });
  it("returns 0 for empty", () => {
    expect(wordCount("")).toBe(0);
  });
});
