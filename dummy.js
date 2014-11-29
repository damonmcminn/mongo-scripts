/* Return a random ObjectId from a specified collection.
 * For populating fields in discrete collections where
 * the schema requires relations.
 */

function getIds(collection) {
  var xs = [];
  db[collection]
    .find({}, {_id: 1})
    .toArray()
    .forEach(function(doc) {
      xs.push(doc._id.toString());
    });
  return xs;
}

function randomId(collection) {
  var length = db[collection].count();
  var ids = getIds(collection);
  return function() {
    var index = Math.floor(Math.random()*length);
    return ids[index];
  }
}
