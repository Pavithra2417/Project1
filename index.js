// let Day = +prompt("Enter The Day")
// console.log(typeof(Day))
//    if(Day === 1){
//     console.log("The Day is Sunday")
//    }

//    else if(Day === 2){
//     console.log("The Day is Monday")
//    } 
    
//    else if(Day === 3){
//     console.log("The Day is Tuesday")
//    } 
   
//    else if(Day === 4){
//     console.log("The Day is Wednesday")
//    } 
//    else if(Day == 5){
//     console.log("The Day is ThursDay")
//    } 
//    else if(Day == 6){
//     console.log("The Day is Friday")
//    } 
//    else if(Day == 7){
//     console.log("The Day is Saturday")
//    } 
//    else if (Day == ""){
//     alert("Enter the Valid Day ")
//    }
//    else {
//     alert ("No Other Days")
//     // console.log("No Other Days")
//    }



//Operators
     // +, -, *, / , %

//Conditions
    // switch, if, if-else, ?:
// ----------------------------------------------------------------------------------------
//Loops:-

//for loop, while loop, do while loop

// for loop :-
      //break (it will not print anything it will break there), 
      //continue


//Continue
// for(let i=1; i<=10 ;i++){
//      if(i === 9) continue;
//      console.log(i+"*"+6+"="+i*6 ) 
           
// }

//Break
// for(let i=1; i<=10 ;i++){
//      if(i === 5) break;
//      console.log(i+"*"+6+"="+i*6)         
// }

//while

let random = Math.floor(Math.random()*6+1)


// while(true){
//     let user = prompt("Enter your guessing Number")
//     if(user == random ){
//         alert("Yayy! you're guessing is right")
//         break;
//     }
//     else if (user < random){
//         alert("Think More")
//     }
    
//     else if (user>random){
//         alert("Think Less")
//     }

// }

//do-while
// let i =11
// do{

//      console.log(i+ "*"+3+"="+i*3);
//      i++;
// }while ( i <=10)

//Function is the part of program which divide the code in small modules

// function table (tables){
//     let i = 1;
//     do {
//         console.log(i+"*"+tables+'='+i*tables)
//         i++
//     } while (i<=10);
// }

// table(2)

//we can store our fun in variables
// ----------------------
//Array
//array is collection of datatypes

// let pavi = 22;

// let marks = ['Tamil : 80', 'English : 75', 'Maths: 80', 'Science : 90', 'social : 98']
// console.log(marks[4]);

//Push Method -->its used to add element
//pop --> it will remove the element

// ------------------------------

//Object

// student.name  --> the way to access
//student['name']

// let studentmark={
//     name : "A",
//     Tamil : 89,
//     English : 88,
//     maths : 70,
//     science : 67,
//     computer :99
// }

// let student = [
//     {
//         name : "Pavithra",
//     Tamil : 99,
//     English : 58,
//     maths : 39,
//     science : 87,
//     computer :69
//     },
//     {
//     name : "Ashitha",
//     Tamil : 89,
//     English : 88,
//     maths : 70,
//     science : 67,
//     computer :99
//     },
//     {
//         name : "Hamna",
//         Tamil : 99,
//         English : 88,
//         maths : 55,
//         science : 39,
//         computer :69
//     },
//     {
//         name : "YogaDev",
//         Tamil : 99,
//         English : 98,
//         maths : 90,
//         science : 98,
//         computer :97
//     }

// ]

// for (let i = 0; i < student.length; i++){
//     let total = student[i];
//     let totalmarks = total.Tamil+total.English+ total.maths+total.science+total.computer;
//     let all = 
//     console.log(total.name+ " : The total Marks is "+ totalmarks)
//     console.log("Total of all :" + all )
// }

// console.log(student)
// let split = ('hlo')
//split ('\')
// replace,replaceall
//slice --> to delete specific value


// API ---> Application program interface
//Sir's code :-
const apicall=async()=>{
    const data=await fetch(`https://dog.ceo/api/breeds/image/random`)
    const jsdonData=await data.json()
    document.getElementById("cat-img").setAttribute("src",jsdonData.message)
    console.log(jsdonData);
}

apicall()


// const weatherdata = async () => {
//     const weatherDatas = await fetch('https://open-meteo.com/en/docs/historical-weather-api');
//     const jsonDatas = await weatherDatas.json();
//     document.getElementById("waether-api").setAttribute("src",jsonDatas.message)
//     console.log('Climate',jsonDatas.message);
// }

// weatherdata();
