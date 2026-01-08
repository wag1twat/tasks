import { fromRoman, toRoman } from "./roman-converter.js";

test("should roman converter correctly work", () => {
  expect(toRoman(1000)).toBe("M");
  expect(toRoman(4)).toBe("IV");
  expect(toRoman(1)).toBe("I");
  expect(toRoman(1990)).toBe("MCMXC");
  expect(toRoman(2008)).toBe("MMVIII");
  expect(toRoman(549)).toBe("DXLIX");
  expect(toRoman(328)).toBe("CCCXXVIII");
  expect(toRoman(2055)).toBe("MMLV");
  expect(toRoman(400)).toBe("CD");
  expect(toRoman(2852)).toBe("MMDCCCLII");
  expect(toRoman(254)).toBe("CCLIV");
  expect(toRoman(1555)).toBe("MDLV");
  expect(toRoman(675)).toBe("DCLXXV");
  expect(toRoman(890)).toBe("DCCCXC");

  expect(fromRoman("XXI")).toBe(21);
  expect(fromRoman("I")).toBe(1);
  expect(fromRoman("IV")).toBe(4);
  expect(fromRoman("MMVIII")).toBe(2008);
  expect(fromRoman("MDCLXVI")).toBe(1666);
  expect(fromRoman("DXLIX")).toBe(549);
  expect(fromRoman("CCCXXVIII")).toBe(328);
  expect(fromRoman("MMLV")).toBe(2055);
  expect(fromRoman("CD")).toBe(400);
  expect(fromRoman("MMDCCCLII")).toBe(2852);
  expect(fromRoman("CCLIV")).toBe(254);
  expect(fromRoman("DCLXXV")).toBe(675);
  expect(fromRoman("DCCCXC")).toBe(890);
});
