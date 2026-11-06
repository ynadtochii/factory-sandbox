import { describe, expect, it } from "vitest";
import { slugify, truncate } from "./text";

describe("slugify", () => {
  it("lowercases and replaces a space", () => {
    expect(slugify("Hello World")).toBe("hello-world");
  });
});

describe("truncate", () => {
  it("keeps short text", () => {
    expect(truncate("abc", 5)).toBe("abc");
  });

  it("keeps text of exactly max length", () => {
    expect(truncate("abcde", 5)).toBe("abcde");
  });

  it("shortens long text and adds ...", () => {
    expect(truncate("abcdefgh", 5)).toBe("abcde...");
  });
});
