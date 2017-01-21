var repo = require('./singleton');
repo.get();
repo.set();
repo.set();

{

  let repo = require('./singleton');
  repo.get();

}