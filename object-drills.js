'use strict'

// const createMyObject = () =>{

//   const obj = {
//     foo: "bar",
//     answerToUniverse: 42,
//     "olly olly": "oxen free",
//     sayHello: function (){
//       return "hello"
//     }
//   }

// function updateObject (obj) {
//   obj['foo'] = 'foo'
//   obj['bar'] = 'bar'
//   obj['bizz'] = 'bizz'
//   obj['bang'] = 'bang'
//   return obj;
// }

// function personMaker() {
//   var person = {
//     firstName: 'Paul',
//     lastName: 'Jones',
//     // replace `null` with a function that uses self reference to return
//     // full name
//     fullName: function (){
//       const name = this.firstName + " " + this.lastName
//       return name;
      
//     },
//   };
//   return person;
// }

// function keyDeleter(obj) {
//   delete sampleObj.foo;
//   delete sampleObj.bar;
//   return sampleObj;
// }

// var sampleObj = {
//   foo: 'foo',
//   bar: 'bar',
//   bizz: 'bizz',
//   bang: 'bang',
// };

// (function testKeyDeleter() {
//   var obj = keyDeleter({
//     foo: 'foo',
//     bar: 'bar',
//     bizz: 'bizz',
//     bang: 'bang',
//   });

//   if (typeof obj !== 'object') {
//     console.error('ERROR: `keyDeleter` must be return an object');
//     return false;
//   }
//   ['foo', 'bar'].forEach(function(key) {
//     if (key in obj) {
//       console.error('`keyDeleter` did not delete the key for ' + key);
//       return false;
//     }
//   });
//   ['bizz', 'bang'].forEach(function(key) {
//     if (!(key in obj && obj[key] === key)) {
//       console.error('`keyDeleter` is deleting keys other than `foo` and `bar`');
//       return false;
//     }
//   });
//   console.log('SUCCESS: `keyDeleter` works correctly!');
// })();

// function makeStudentsReport(data) {
//   const results = [];
//   for (let i = 0; i < data.length; i++) {
//     results.push(`${data[i].name}: ${data[i].grade}`);
//   }
//   return results;
//   }

const studentData = [
  {
    name: 'Tim',
    status: 'Current student',
    course: 'Biology',
  },
  {
    name: 'Sue',
    status: 'Withdrawn',
    course: 'Mathematics',
  },
  {
    name: 'Liz',
    status: 'On leave',
    course: 'Computer science',
  },
];

function enrollInSummerSchool(students) {
  // your code here
  students.forEach( student => {
    student.status = "In Summer School";
  })
return students;
}

enrollInSummerSchool(studentData);

function testIt() {
  var testData = [
    {
      name: 'Burt',
      status: 'Playing hooky',
      course: 'Biology',
    },
    {
      name: 'Melanie',
      status: 'Sick',
      course: 'Mathematics',
    },
    {
      name: 'Leonard',
      status: 'AWOL',
      course: 'Computer science',
    },
  ];

  var results = enrollInSummerSchool(testData);

  if (!(results && results instanceof Array)) {
    console.error('FAILURE: `enrollSummerSchool` must return an array');
    return;
  }
  var result = testData.every(function(student) {
    var match = results.find(function(_student) {
      return (
        _student.name === student.name &&
        _student.course === student.course &&
        _student.status.toLowerCase() === 'in summer school'
      );
    });
    return match !== undefined;
  });
  if (!result) {
    console.error(
      'FAILURE: `enrollSummerSchool` should return ' +
        'original key/value pairs for each student, and ' +
        'update `status` to "In Summer school": ' +
        JSON.stringify(results)
    );
  } else {
    console.info('SUCCESS: `enrollSummerSchool` is working');
  }
}

testIt();
