import { describe, expect, it } from "vitest";
import { shout, slugify, truncate } from "./text";

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

describe("shout", () => {
  it("upper-cases and adds an exclamation mark", () => {
    expect(shout("hi")).toBe("HI!");
  });
});
