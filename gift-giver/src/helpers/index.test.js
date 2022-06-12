import {maxNumber} from "./index";

describe('maxNumber', function () {
    describe('given an empty array', function () {
        it('should return 0', function () {
            expect(maxNumber([])).toEqual(0);
        });
    });

    describe('given an array of numbers', function () {
        it('should return the max number', function () {
            expect(maxNumber([1, 2, 3])).toEqual(3);
        });
    });
});