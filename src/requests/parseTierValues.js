export function parseTierValues(array) {
  var results = [];

  for (let component of array) {
    if (component.type !== 'effect') {
      results.push(component)
      continue
    }
    component.tiers = {};
    for (let i = 1; i < 5; i++) {
      let focus = component['param' + i];
      if (![undefined,null,''].includes(focus)) {
        focus = focus.split('\t');
        component.tiers[focus[0]] = focus.slice(1,);
      }
      delete(component['param' + i])
    }
    results.push(component)
  }
  console.log(results)
  return results
}