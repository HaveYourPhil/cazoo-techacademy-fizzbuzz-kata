import { leapYear } from "../main/leapYear";

describe("Leap year kata", () => {
  it.each`
  year   | expected
  ${1}   | ${false}
  ${4}   | ${true}
  ${8}   | ${true}
  ${100} | ${false}
  ${400} | ${true}
  `("should return $expected for the year $year", ({year, expected})=>{
    expect(leapYear(year)).toBe(expected);
  })
})
