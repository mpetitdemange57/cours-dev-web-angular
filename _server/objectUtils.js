function where(objects, value) {
  let results = [];

  for(let i=0; i<objects.length; i++) {
    if(objects[i][Object.keys(value)[0]].toLowerCase().includes(Object.values(value)[0].toLowerCase())) {
      results.push(objects[i]);
    }
  }

  return results;
}

export {where};
