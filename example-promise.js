//function getTempPromise(location) {
//  return new Promise(function(resolve, reject) {
//      setTimeout(function() {
//        resolve(79);
//        reject('City not found!');
//      },1000);
//  });
//}
//
//getTempPromise('Bucharest').then(function(temp) {
//  console.log('promise go',temp);
//}, function(err){
//  console.log('promise no', err);
//});

// ------------- test


function addPromise(a,b) {
  return new Promise(function(resolve,reject){
    if(typeof a === 'number' && typeof b === 'number') {
      resolve(a + b);
    } else {
      reject('Not Numbers');
    }
  });
}

addPromise(3,'sda').then(function(sum){
  console.log('sum is: ',sum);
}, function(err){
  console.log('Error: ', err);
});
