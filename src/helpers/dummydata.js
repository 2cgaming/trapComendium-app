export default {
  mitigation: [
    {
      id: 1,
      name: 'Hard to Find',
      cost: 2,
      text: `Duis in egestas enim, nec consequat nisi. Maecenas vitae felis ac neque ullamcorper congue. Integer tincidunt enim et auctor rutrum. Donec mollis porta libero sit amet vehicula. Sed tempus ante ligula, eget posuere tortor tristique a. Pellentesque facilisis risus eget magna tristique placerat. Integer cursus non sem eu euismod. Donec nunc dolor, molestie aliquam lacus a, pulvinar semper ipsum.

      Proin vitae tempor ligula. Fusce dui erat, hendrerit porttitor nulla at, porttitor placerat diam. Sed imperdiet eu quam et efficitur. Morbi consectetur sagittis sapien sit amet faucibus. Maecenas at purus tortor. Nullam quis lacinia nisi, eget cursus diam. Cras mauris magna, interdum eu pulvinar vel, facilisis quis lectus. Nunc ultricies nisi ac diam pulvinar imperdiet.`
    },
    {
      id: 2,
      name: 'Hard to Disarm',
      cost: 2,
      text: 'blah blah blah'
    },
    {
      id: 3,
      name: 'Repairing',
      cost: 2,
      text: 'blah blah blah'
    },
    {
      id: 4,
      name: 'Rapid Repairing',
      cost: 8,
      text: 'blah blah blah'
    }
  ],
  trigger_upgrade: [
    {
      id: 1,
      trigger_id: 0,
      name: 'Hairpin Trigger',
      cost: 3,
      text: 'blah blah blah'
    },
    {
      id: 2,
      trigger_id: 0,
      name: 'Rearming',
      cost: 5,
      text: 'blah blah blah'
    },
    {
      id: 3,
      trigger_id: 0,
      name: 'Additional Trigger',// special, will need to request another trigger
      cost: 1,
      text: 'blah blah blah'
    },
    {
      id: 4,
      trigger_id: 1,
      name: 'Trapped Room',
      cost: 2,
      text: 'blah blah blah'
    },
    { 
      id: 5,
      trigger_id: 2,
      name: 'Magical Lock',
      cost: 2,
      text: 'blah blah blah'
    },
    {
      id: 6,
      trigger_id: 3,
      name: 'Keen Senses',
      cost: 2,
      text: 'blah blah blah'
    },
    {
      id: 7,
      trigger_id: 3,
      name: 'Discerning Trigger',
      cost: 4,
      text: 'blah blah blah'
    },
    {
      id: 8,
      trigger_id: 3,
      name: 'Truesight',
      cost: 4,
      text: 'blah blah blah'
    }
  ],
  trigger: [
    {
      id: 1,
      name: 'Physical Trigger',
      cost: 0,
      size: '5ft',
      text: 'blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah ',
    },
    {
      id: 2,
      name: 'Manual Trigger',
      cost: 0,
      size: '5ft',
      text: 'blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah '
    },
    {
      id: 3,
      name: 'Magical Trigger',
      cost: 4,
      size: 'up to 60ft cube',
      text: 'blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah '
    },
  ],
  target_upgrade: [
    {
      id: 1,
      target_id: 0,
      name: 'Precise Expansion',
      cost: 1,
      text: 'blah blah blah'
    },
    {
      id: 2,
      target_id: 0,
      name: 'Bigger Area',
      cost: 3,
      text: 'blah blah blah'
    },
    {
      id: 3,
      target_id: 0,
      name: 'Discerning Target',// special, will need to request another trigger
      cost: 8,
      text: 'blah blah blah'
    },
    {
      id: 4,
      target_id: 3,
      name: 'Longer Range',
      cost: 1,
      text: 'blah blah blah'
    }
  ],
  target: [
    {
      id: 1,
      name: 'Basic Targeting',
      cost: 0,
      text: 'blah blah blah',
    },
    {
      id: 2,
      name: 'Fixed Targeting',
      cost: 0,
      text: 'blah blah blah',
    },
    {
      id: 3,
      name: 'Magical Targeting',
      cost: 2,
      text: 'blah blah blah',
    },
  ],
  component_upgrade: [
    {
      id: 1,
      component_id: 0,
      name: 'Magical Mechanisms',
      cost: 2,
      text: 'blah blah blah'
    },
    {
      id: 2,
      component_id: 0,
      name: 'Continuous',
      cost: 15,
      text: 'blah blah blah'
    },
    {
      id: 3,
      component_id: 0,
      name: 'Hard to Break',
      cost: 2,
      text: 'blah blah blah'
    },
    {
      id: 4,
      component_id: 0,
      name: 'Delayed Activation',
      cost: 3,
      text: 'blah blah blah'
    },
    {
      id: 5,
      component_id: 0,
      name: 'Knockback',
      cost: 3,
      text: 'blah blah blah'
    },
    {
      id: 6,
      component_id: 0,
      name: 'Slowing',
      cost: 4,
      text: 'blah blah blah'
    },
    {
      id: 7,
      component_id: 1,
      name: 'Silent Alarm',
      cost: 4,
      text: 'blah blah blah'
    },
    {
      id: 8,
      component_id: 2,
      name: 'Counterspelling',
      cost: 0,
      text: 'blah blah blah'
    },
    {
      id: 9,
      component_id: 2,
      name: 'Antimagic Zone',
      cost: 8,
      text: 'blah blah blah'
    },
    {
      id: 10,
      component_id: 3,
      name: 'Quicksilver Mechanisms',
      cost: 2,
      text: 'blah blah blah'
    },
    {
      id: 11,
      component_id: 3,
      name: 'Locked Mechanism',
      cost: 4,
      text: 'blah blah blah'
    },
    {
      id: 12,
      component_id: 3,
      name: 'Crushing Walls',
      cost: 5,
      text: 'blah blah blah'
    }
  ],
  component: [
    {
      id: 1,
      name: 'Alarm',
      params: {
        'COST': [1,2,4,6,8,10,12],
        'AUDIBLE DISTANCE': ['60 ft.', '120 ft.', '300 ft.', '600 ft.', '1/4 mile', '1/2 mile', '1 mile'],
      },
      text: 'blah blah blah',
    },
    {
      id: 2,
      name: 'Antimagic',
      params: {
        'COST': [1,2,4,6,8,10,12],
        'AUTOMATIC DISPEL': ['60 ft.', '120 ft.', '300 ft.', '600 ft.', '1/4 mile', '1/2 mile', '1 mile'],
        'DISPEL BONUS': ['+2', '+2', '+3', '+3', '+4', '+4', '+5']
      },
      text: 'blah blah blah'
    },
    {
      id: 3,
      name: "Architect's",
      params: {
        'COST': [1,3,6,10,13,17,21],
        'SAVE DC': [12,14,16,18,20,22,24],
      },
      text: 'blah blah blah',
    },
  ]
}