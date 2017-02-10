var companyName = 'AppDirect'; //Declare the variable companyName.
var goodTeamMember = 'Bhavya Verma'; //Declare the variable goodTeamMember and assign it your name as a value
//Assign the variable number1 to the value 3 and assign the variable number2 to the value 5. Print the multiplication of number1 and number2 to the console:-
var number1 = 3;
var number2 = 5;
console.log(number1 * number2);

//What does the following code print to the console ? Justify your answers var country = "India";country = "USA"; country = "Singapore"; console.log(country);  :-


var country = "India";
country = "USA";
country = "Singapore";
console.log(country);

//Create two variables one with value as your name and second having value as your college name. Print the result to the console.:-

var name = 'Bhavya';
var college_name = 'Thapar University';
console.log(name);
console.log(college_name);

//Question 2:-

console.log(typeof("Ram"));
console.log(typeof(false));
console.log(typeof(-23) === "number");
console.log(typeof(typeof(33)));



//Create two Date Objects. One with your birthdate and one with your friend’s. If your friend is older than you, output should be his/her name. If you are output should be your name. If you both are of same age output both names:-



var mybirthdate = {
  name: "Bhavya",
  d1: new Date(Date.parse('Aug 18, 1994'))
};

var frndbirthdate = {
  name: "Anchal",
  d2: new Date(Date.parse('Aug 28, 1993'))
};


if (mybirthdate.d1.getTime() > frndbirthdate.d2.getTime()){           //getTime() compares date from 1 Jan 1970
{
  console.log(frndbirthdate.name);
}
} else if (mybirthdate.d1.getTime() < frndbirthdate.d2.getTime()) {

  console.log(mybirthdate.name);
} else {
  console.log(mybirthday.name + " " + frndbirthdate.name);

}


//Write a javascript function which takes alphabet as an argument and return whether alphabet is vowel or consonant using switch case:-



function Letters(alphabet) {
  switch (alphabet) {

    case 'a':
      console.log("Vowel");
      break;
    case 'e':
      console.log("Vowel");
      break;
    case 'i':
      console.log("Vowel");
      break;
    case 'o':
      console.log("Vowel");
      break;
    case 'u':
      console.log("Vowel");
      break;
    case 'A':
      console.log("Vowel");
      break;
    case 'E':
      console.log("Vowel");
      break;
    case 'I':
      console.log("Vowel");
      break;
    case 'O':
      console.log("Vowel");
      break;
    case 'U':
      console.log("Vowel");
      break;

    default:
      console.log("Consonant");
      break;
  }
}
var str1 = prompt("Enter any alphabet");
Letters(str1);



//a) Write a JavaScript function reverses the non negative number:-
function reverse(str) {
  var newString = '';
  for (var i = str.length - 1; i >= 0; i--) {
    newString = newString + str[i];
  }
  console.log(newString);
}
reverse('123');



//Write a JavaScript function that dermines string is palindrome or not.:-

function rev(str) {
  var newString = '';
  for (var i = str.length - 1; i >= 0; i--) {
    newString = newString + str[i];
  }
  return newString;

}

var str = "aba";
var a = rev(str);

if (a == str) {
  console.log("True");
} else {
  console.log("False");
}



//Write a JavaScript function to find the first non repeating character in a string. e.g
//input : 'xxydym' output : 'd' :-



function fnrc(str) {
  var final = '';
  for (var i = 0; i < str.length; i++) {
    var counter = 0;
    for (var j = 0; j < str.length; j++) {
      if (str[i] === str[j]) {
        counter++;
      }
    }

    if (counter === 1) {
      final = str[i];
      break;
    }
  }
  return final;
}
console.log(fnrc('xxydym'));



//Create student object using object literal. Put all your details in it (e.g. name, address, department, mobile, etc). Assign a method to it which you have written in Q 5. b) (copypaste that function) and call this method to reverse your name. Print output to console.:-



var student = {
  'name': "Bhavya",
  'address': "Pune",
  'depart': "Engineering",
  'mobile': 9988218894,
  'reverse': function(str) {
    var newString = " ";
    for (var i = str.length - 1; i >= 0; i--) {
      newString = newString + str[i];
    }
    return newString;
  }
}


console.log(student.reverse(student.name));



//Write program to find numbers in string using regular expression. Input: I am 25 years old. I was born in 1991.output : [ 25, 1991] :-



var patt = 'I am 25 years old. I was born in 1991';
var num = patt.match(/[0-9]+/g);
console.log(num);



//Write a fuction to test valid email addresses using regular expression.:-



function ValidateEmail(email) {
  if (email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {

    alert("Congrats! You have entered a valid email address")
    return (true)


  }
  alert("You have entered an invalid email address!")
  return (false)
}

ValidateEmail('bhavyaverma49@gmail.com');



//Implement function verify(text) which verifies whether parentheses within text are correctly nested. You need to consider three kinds: (), [], <>.:-


function verify(str) {
  str = str.replace(/[^\(\)\[\]\<\>]/g, '');
  var strPrev = '';

  while (strPrev.length != str.length) {
    strPrev = str;
    str = str.replace('()', '').replace('[]', '').replace('<>', '');
  }
  return !str.length;
}

console.log(verify('(34<[45>])'));
console.log(verify('[(<32>)]'));



//Write javascript program to multiply two matrices:-



function multiplyMatrices(matrix1, matrix2) {
  var final = [],
    l = matrix1.length;
  for (var i = 0; i < l; i++) {
    final[i] = [];
    for (var j = 0; j < matrix2[0].length; j++) {
      var sum = 0;
      for (var k = 0; k < matrix1[0].length; k++) {
        sum = sum + (matrix1[i][k] * matrix2[k][j]);
      }
      final[i][j] = sum;
    }
  }
  return final;
}
var matrix1 = [
    [2, 6],
    [4, 5]
  ],
  matrix2 = [
    [3, 4],
    [6, 6]
  ];

var matrixResult = multiplyMatrices(matrix1, matrix2)
console.table(matrixResult)



//Write javascript program to print pascal triangle.

var number = 5,
  array = [];

function pascalTriangle(triangle, start) {
  var pascalRow = triangle[start - 1],
    row = [],
    left, right, length;

  if (!pascalRow)
    return [1];

  length = pascalRow.length;

  for (var i = 0; i <= length; i++) {

    left = pascalRow[i - 1];
    right = pascalRow[i];

    if (!left) {
      row.push(right);
      continue;
    }
    if (!right) {
      row.push(left);
      continue;
    }

    row.push(left + right)
  }
  return row;
}

for (var i = 0; i < number; i++) {
  array.push(pascalTriangle(array, i))
}

console.log(array);