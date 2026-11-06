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
  it("splits on any run of whitespace", () => {
    expect(wordCount("a  b")).toBe(2);
    expect(wordCount("a\tb\nc")).toBe(3);
  });

  it("returns 0 for empty or blank text", () => {
    expect(wordCount("")).toBe(0);
    expect(wordCount("   ")).toBe(0);
  });

  it("ignores leading and trailing spaces", () => {
    expect(wordCount(" a b ")).toBe(2);
  });
});
