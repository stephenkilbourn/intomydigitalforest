module.exports = function(collection) {
  let tagSet = new Set();
  collection.getAllSorted().forEach(function(item) {
    if( "tags" in item.data ) {
      let tags = item.data.tags;
      console.log('tag,  ',  tags)
      if( typeof tags === "string" ) {
        tags = [tags];
      }

      tags = tags.filter(function(item) {
        switch(item) {
          // this list should match the `filter` list in tags.njk
          case "all":
          case "nav":
          case "post":
          case "posts":
          case "notes":
            return false;
        }

        return true;
      });

      for (const tag of tags) {
        tagSet.add(tag);
      }
    }
  });

  return [...tagSet].sort();
};