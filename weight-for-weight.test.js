import { weightForWeight } from "./weight-for-weight";

test("should weight for weight correctly work", () => {
  expect(weightForWeight("103 123 4444 99 2000")).toBe("2000 103 123 4444 99");
  expect(weightForWeight("2000 10003 1234000 44444444 9999 11 11 22 123")).toBe(
    "11 11 2000 10003 22 123 1234000 44444444 9999"
  );
});
