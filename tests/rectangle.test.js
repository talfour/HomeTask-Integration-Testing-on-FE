import { getRectanglePerimeter, getRectangleArea, getRectangleInfo } from "../js/rectangle"

test("Should return permiter from provided length and width", () => {
    const permiter = getRectanglePerimeter(2, 2)
    const another_permiter = getRectanglePerimeter(4, 3)
    expect(permiter).toBe(8)
    expect(another_permiter).toBe(14)
})

test("Should return rectangle area", () => {
    const area = getRectangleArea(3, 5)
    const secondArea = getRectangleArea(5, 2)
    expect(area).toBe(15)
    expect(secondArea).toBe(10)
})

jest.spyOn(console, 'log');

test("Should return information about rectangle from provided values", () => {
    expect(console.log.mock.calls.length).toBe(0);
    getRectangleInfo(10, 5);
    expect(console.log.mock.calls.length).toBe(1);
    expect(console.log.mock.calls[0][0]).toBe("The perimeter of a rectangle is 30 and the area is 50");

})



test("Should return NaN if Int is not provided", () =>{
    const area = getRectangleArea('a', 5)
    const permieter = getRectanglePerimeter('a', 3)
    expect(console.log.mock.calls.length).toBe(0);
    getRectangleInfo('10a', 5);
    expect(console.log.mock.calls.length).toBe(1);
    expect(console.log.mock.calls[0][0]).toBe("The perimeter of a rectangle is NaN and the area is NaN");
    expect(area).toBe(NaN)
    expect(permieter).toBe(NaN)
})

afterEach(() => {
    jest.clearAllMocks();
})