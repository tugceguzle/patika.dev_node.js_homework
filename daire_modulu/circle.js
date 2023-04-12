function circleArea(radius){
    const circle_area = 3.14 * radius**2;
    console.log(`Yarıçapı ${radius} olan dairenin alanı: ${circle_area} `);
}
function circleCircumference(radius){
    const circle_circumference = 2* 3.14 * radius;
    console.log(`Yarıçapı ${radius} olan dairenin çevresi: ${circle_circumference} `);
}
module.exports = {
    circleArea,
    circleCircumference,
}

// s6
// export {
//     circleArea,
//     circleCircumference
// }