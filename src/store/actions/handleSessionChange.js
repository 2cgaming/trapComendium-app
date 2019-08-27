/*
  addComponent({itemType, id, upgrades}) {
    this.setState(state => {
      const component = state.options[itemType][id];
      const obj = Object.create(component);
      if (itemType !== 'mitigation') {
        obj.upgrades = upgrades.map(uid => {
          return component.upgrades.find(upgrade => {
            upgrade.id === uid;
          })
        })
      }
      state.session[itemType].push(obj);
      return state;
    }).then(() => this.updateStatsFromCost());
  }

  removeComponent({itemType, id}) {
    this.setState(state => {
      state.session[itemType].filter(component => component.id !== id);
    })
  }
*/

export default function sessionChange(session) {
  return {
    type: 'CHANGE_SESSION',
    session
  }
}