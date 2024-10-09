// 1. Massivdagi birinchi va oxirgi elementni chiqaring.
// var b = [10, 20, 30, 40, 50]
// console.log( b[0])
// console.log( b[b.length - 1])

// 2. Berilgan massivdan ma'lum 4-indeksdagi elementni “salom” so’ziga almashtiring va elementlarni ekranga chiqaring.
// var a = ["b", 1, "esdv", "sfdcd", "asFDa", "fcawd", "fawed", "awesf"]
// a[4] = "salom"
// console.log( a)

// 3. Bo'sh massiv yarating va unga 3 xil meva nomini qo'shing. Natijaviy massivni ekranga chiqaring.
// var a = []
// a.push("Olma", "Banan", "Uzum")
// console.log( a)

// 4. Massivning uzunligini aniqlang va uni ekranga chiqaring.
// var b = ["ht", "ht", "hr52", "hrt", "hr", "hw"]
// console.log( b.length)

// 5. Massivga yangi element qo'shing va oxirgi holatdagi massivni ekranga chiqaring.
// var a = ["fk", "bg", "aef", "ef", "rj"]
// a.push(60)
// console.log( a)

// 6. Massivdan oxirgi elementni o'chiring va qolgan elementlarni ekranga chiqaring.
// var b = ["g", "fg", "hfd", "h", "gj", "h", "sn", "h", "m", "hs", "nh", "j", "m", "s", "s"]
// b.pop()
// console.log( b)

// 7. Massivning boshiga yangi element qo'shing va yangilangan massivni ekranga chiqaring.
// var a = ["dvs", "vf", "fa", "asf", "fg", "h", "h", "d", "f", "gadsrt", "h"]
// a.unshift(5)
// console.log( a)

// 8. Massivdan birinchi elementni o'chiring va qolgan elementlarni ekranga chiqaring.
// var b = ["j", "gt", "d", "er", "dhy", "v", "adg"]
// b.shift()
// console.log(b)

// 9. 5 ta raqamdan iborat massiv yarating va massivdagi barcha elementlarni ekranga chiqaruvchi sikl yozing.
// var a = [1, 2, 3, 4, 5]
// for (var i = 0; i < a.length; i++) {
//     console.log(a[i])
// }

// 10. Massivda berilgan qiymat mavjudligini tekshiring va natijani ekranga chiqaring.


// For loopga oid masalalar:

// 1. 10 ta raqamdan iborat massiv yarating va massivdagi barcha elementlarni ekranga chiqaring.
// var j = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
// for(var i = 0; i < j.length; i++) {
//     console.log(j[i])
// }

// 2. 5 ta meva nomidan iborat massiv yarating va har bir elementni yangi qatorda ekranga chiqaring.
// var fruitsArr = ["Olma", "Banan", "Uzm", "Apelsn", "Nok"];
// for(var i = 0; i < fruitsArr.length; i++) {
//     console.log(fruitsArr[i])
// }

// 3. Massivdagi barcha juft sonlarni ekranga chiqaring.
// var x = [44,5,5,8,4,2,9,78,2,6,87,52]
// for(var i = 0; i < x.length; i++) {
//     if(x[i] % 2 === 0) {
//         console.log(x[i])
//     }
// }

// 4. Massivdagi barcha toq sonlarni ekranga chiqaring.
// var w = [654,987,55,4,1,6,85,6,8,5465,5132,684]
// for(var i = 0; i < w.length; i++) {
//     if(w[i] % 2 !== 0) {
//         console.log(w[i])
//     }
// }

// 5. Massivdagi musbat sonlarni ekranga chiqaring.
// var b = [-10, 20, -30, 40, 50]
// for(var i = 0; i < b.length; i++) {
//     if(b[i] > 0) {
//         console.log(b[i])
//     }
// }

// 6. 10 ta raqamdan iborat massivdagi barcha sonlarni teskari tartibda ekranga chiqaring.
// var a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// for (var i = a.length - 1; i >= 0; i--) {
//     console.log(a[i])
// }

// 7. Berilgan massivdagi barcha elementlarning yig'indisini hisoblang.
// var b = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50]
// var sum = 0
// for (var i = 0; i < b.length; i++) {
//     sum += b[i]
// }
// console.log( sum)

// 8. Massivdagi barcha sonlarni 2 barobar oshirib, yangilangan massivni ekranga chiqaring.
// var c = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]
// for (var i = 0; i < c.length; i++) {
//     c[i] *= 2
// }
// console.log( c)
// 9. Berilgan massivdagi eng katta elementni toping va ekranga chiqaring.
// var b = [10, -5, 20, 15, -3, 25, 7]
// var max = b[0]
// for (var i = 1; i < b.length; i++) {
//     if (b[i] > max) {
//         max = nub[i]
//     }
// }
// console.log( max)

// 10. Berilgan massivdagi eng kichik elementni toping va ekranga chiqaring.
// var a = [8, -10, 0, 5, -2, 20, 3]
// var min = a[0]
// for (var i = 1; i < a.length; i++) {
//     if (a[i] < min) {
//         min = a[i]
//     }
// }
// console.log(min)

// 11. Massivdagi barcha manfiy sonlarni ekranga chiqaring.
// var b = [2, -7, 5, -3, 6, -1, 10]
// for (var i = 0; i < b.length; i++) {
//     if (b[i] < 0) {
//         console.log(b[i])
//     }
// }

// 12. Massivdagi barcha sonlarni yig'indisini ekranga chiqaring, faqat manfiy sonlarni qo'shmang.
// var m = [12, -4, 8, 6, -3, 14, -5]
// var sum = 0
// for (var i = 0; i < m.length; i++) {
//     if (m[i] > 0) {
//         sum += m[i]
//     }
// }
// console.log(sum)

// 13. Massivning har bir elementini indekslari bilan birgalikda ekranga chiqaring.
// var b = [586, 8, 87, 89, 4, 25]
// for(var i = 0; i < b.length; i++) {
//     console.log( b[i])
// }

// 14. 7 ta elementdan iborat massiv yarating va ularni indekslari teskari tartibda ekranga chiqaring.
// var a = [10430, 2040, 3100, 410, 53200, 60540, 3]
// for(let i = a.length - 1; i >= 0; i--) {
//     console.log(a[i])
// }

// 15. Berilgan massivdagi har bir elementni ikkinchi elementidan boshlab ekranga chiqaring.
// var v = [2, 205, 5, 1, 7, 578]
// for(var i = 1; i < v.length; i++) {
//     console.log(v[i])
// }
