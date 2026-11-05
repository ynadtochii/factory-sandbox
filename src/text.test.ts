import { describe, expect, it } from "vitest";
import { slugify, truncate } from "./text";

describe("slugify", () => {
  it("lowercases and replaces a space", () => {
    expect(slugify("Hello World")).toBe("hello-world");
  });

  it("replaces every space", () => {
    expect(slugify("a b c d")).toBe("a-b-c-d");
  });
});

describe("truncate", () => {
  it("keeps short text", () => {
    expect(truncate("abc", 5)).toBe("abc");
  });
});
