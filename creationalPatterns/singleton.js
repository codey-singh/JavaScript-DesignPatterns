var repo = function(){
  var count = 0;
  var get = function(){
    console.log('get ',count++);
  }
  var set = function(){
    console.log('set', count++);
  }
  return {
    get : get,
    set : set
  }
}

module.exports = new repo;