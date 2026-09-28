import { test } from "node:test"
import assert from "node:assert/strict"
import { slugify } from "./slugify.js"

test("spaces become dashes", () => assert.equal(slugify("Hello World"), "hello-world"))
test("punctuation is dropped", () => assert.equal(slugify("Hello, World!"), "hello-world"))
test("repeated spaces collapse", () => assert.equal(slugify("a   b"), "a-b"))
test("no leading or trailing dashes", () => assert.equal(slugify("  -hi-  "), "hi"))
