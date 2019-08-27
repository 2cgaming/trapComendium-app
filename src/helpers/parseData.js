const mapItemsToObject = (items) => {
  let obj = {};
  for (let item of items) {
    obj[item.id] = item;
  }
  return obj;
}

const mapUpgradesToItems = (obj, label, upgrades) => {

  for (let component of Object.values(obj)) {
    component.upgrades = [];
  }

  let universals = [];

  for (let upgrade of upgrades) {
    if (upgrade[label] === 0) {
      universals.push(upgrade);
    } else {
      let component = obj[upgrade[label]];
      component.upgrades.push(upgrade);
    }
  }

  for (let component of Object.values(obj)) {
    component.upgrades.push(...universals);
  }
  return obj;
}

const parseRows = (rows) => {
  let data = {};
  data.mitigation = mapItemsToObject(rows.mitigation);
  let trigger = mapItemsToObject(rows.trigger);
  data.trigger = mapUpgradesToItems(trigger, 'trigger_id', rows.trigger_upgrade);
  let target = mapItemsToObject(rows.target);
  data.target = mapUpgradesToItems(target, 'target_id', rows.target_upgrade);
  let component = mapItemsToObject(rows.component);
  data.component = mapUpgradesToItems(component, 'component_id', rows.component_upgrade);
  return data;
}

export {
  parseRows as parseData,
}