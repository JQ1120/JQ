let data1 = 1
let data2 = "1"
console.log (data1, typeof data1)
console.log (data2, typeof data2)

let data3 = data1 + parseInt(data2) //convert data 2 to interger(not float) by using parseint
console.log (data3,typeof data3)

let data4 ="1.25"
console.log (data4, typeof data4)

let data5 = data3 + parseFloat(data4)
console.log (data5, typeof data5) //convert data 5 to float.

//Array
console.log("Array:")
let data=[ "one", 2, true]
console.log(data[0],typeof data [0])
console.log(data[1],typeof data [1])
console.log(data[2],typeof data [2])

//onject
let user={
name: "Cheok",
faculty: "FKEKK",
phone: "0173126718",
email: "B022110123@student.utem.edu.my"
}
//console.log(user.faculty)

user={
    name: "Cheok",
    faculty: "FKEKK",
    phone: {mobile: "0173126718", 
            office: "0123456789"},
    email: "B022110123@student.utem.edu.my"
    }

    console.log (user.phone.office)
