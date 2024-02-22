const { readFile, writeFile} = require('fs')
// const fs = require('fs');
// const first = readFileSync('./content/first.txt');
// const second = readFileSync('./content/second.txt');
// console.log(first.toString());
// console.log(second.toString());

// writeFileSync(
//   './content/result-syn.txt',
//   `here is the result : ${first},${second}`,
//   {flag:'a'}
//   )

readFile('./content/first.txt', 'utf8', (err, result) => {
  if (err) {
    console.log(err);
    return
  }
  const first=result;

  readFile('./content/second.txt', 'utf8', (err, result) =>{
    if (err) {
      console.log(err);
      return
    }
   const second = result;
   writeFile('./content/reult-syn.txt',
   `here is the result : ${first},${second}`,
  (err,result)=>{
    if (err) {
      console.log(err);
      return
    }
    console.log(result);
  } )
  })
});
