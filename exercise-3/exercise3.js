function highestScore (students) {
   var classArr = []
   if ( students.length == 0){
     return {}
   }
   if ( classArr.length == 0){
     classArr.push(students[0].class)
   }
   
   for ( var i = 0; i < students.length; i++){
     var temp = ''  
     for ( var j = 0; j < classArr.length; j++){
       if ( students[i].class !== classArr[j]){
         temp = students[i].class
        }
      }
      if ( temp.length > 0){
        
        classArr.push(temp)
        }
      }
    // console.log(classArr)

    var result = {}
    var obj = {}
    for ( var i = 0; i < classArr.length; i++){
      var count = 0
       for ( var j = 0; j < students.length; j++){
         if ( students[j].class === classArr[i] && students[j].score > count ){
            obj = {
              name: students[j].name,
              score: students[j].score
            }
            count = students[j].score
          }
       }
       result[classArr[i]] = obj
    }
    return result
}
  
  // TEST CASE
  console.log(highestScore([
    {
      name: 'Dimitri',
      score: 90,
      class: 'foxes'
    },
    {
      name: 'Alexei',
      score: 85,
      class: 'wolves'
    },
    {
      name: 'Sergei',
      score: 74,
      class: 'foxes'
    },
    {
      name: 'Anastasia',
      score: 78,
      class: 'wolves'
    }
  ]));
  
  // {
  //   foxes: { name: 'Dimitri', score: 90 },
  //   wolves: { name: 'Alexei', score: 85 }
  // }
  
  
  console.log(highestScore([
    {
      name: 'Alexander',
      score: 100,
      class: 'foxes'
    },
    {
      name: 'Alisa',
      score: 76,
      class: 'wolves'
    },
    {
      name: 'Vladimir',
      score: 92,
      class: 'foxes'
    },
    {
      name: 'Albert',
      score: 71,
      class: 'wolves'
    },
    {
      name: 'Viktor',
      score: 80,
      class: 'tigers'
    }
  ]));
  
  // {
  //   foxes: { name: 'Alexander', score: 100 },
  //   wolves: { name: 'Alisa', score: 76 },
  //   tigers: { name: 'Viktor', score: 80 }
  // }
  
  
  console.log(highestScore([])); //{}
  