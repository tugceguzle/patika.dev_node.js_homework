const arguments = process.argv.slice(2);
function area(radius){
    circle_area = 3.14 * radius**2;
    console.log(`Yarıçapı ${radius} olan dairenin alanı: ${circle_area} `);
}
area(arguments);

// node dosyadi radius parametresi yazarak çalıştır.
// node daire_alani.js 8
