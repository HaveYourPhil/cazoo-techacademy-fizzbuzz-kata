import {fibonacci} from "../main/fibonacci";

describe('fibonacci', () => {
    it.each`
    position | expected
    ${0} | ${0}
    ${1} | ${1}
    ${2} | ${1}
    ${5} | ${5}
    ${9} | ${34}
    `("should return $expected for the position $position", ({ position, expected }) => {
        expect(fibonacci(position)).toBe(expected);
    });
})