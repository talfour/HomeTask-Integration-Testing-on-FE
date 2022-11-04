export function getRectanglePerimeter(length, width) {
    return 2 * (length + width);
}

export function getRectangleArea(length, width) {
    return length * width;
}

export function getRectangleInfo(length, width) {
    const area = getRectangleArea(length, width);
    const perimeter = getRectanglePerimeter(length, width);
    return console.log(`The perimeter of a rectangle is ${perimeter} and the area is ${area}`)
}

export default { getRectanglePerimeter, getRectangleArea, getRectangleInfo }