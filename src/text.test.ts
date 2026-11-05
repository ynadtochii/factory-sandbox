import { describe, expect, it } from "vitest";
import { reverse, slugify, truncate } from "./text";

describe("reverse", () => {
  it("reverses text", () => {
    expect(reverse("abc")).toBe("cba");
  });
});

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
