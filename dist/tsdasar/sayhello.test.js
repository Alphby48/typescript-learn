import { sayHello } from "../src/sayhello";
describe("should hello eko", function () {
    it("should return hello eko", function () {
        expect(sayHello("eko")).toBe("hello eko");
    });
});
