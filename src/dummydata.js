export default {
  mitigation: {
    name: 'Mitigation',
    upgrades: [
      {
        name: 'Hard to Find',
        cost: 2,
        text: 'blah blah blah'
      },
      {
        name: 'Hard to Disarm',
        cost: 2,
        text: 'blah blah blah'
      },
      {
        name: 'Repairing',
        cost: 2,
        text: 'blah blah blah'
      },
      {
        name: 'Rapid Repairing',
        cost: 8,
        text: 'blah blah blah'
      }
    ]
  },
  trigger: {
    name: 'Triggers',
    upgrades: [
      {
        name: 'Hairpin Trigger',
        cost: 3,
        text: 'blah blah blah'
      },
      {
        name: 'Rearming',
        cost: 5,
        text: 'blah blah blah'
      },
      {
        name: 'Additional Trigger',// special, will need to request another trigger
        cost: 1,
        text: 'blah blah blah'
      }
    ],
    options: [
      {
        name: 'Physical Trigger',
        cost: 0,
        text: 'blah blah blah',
        upgrades: [
          {
            name: 'Trapped Room',
            cost: 2,
            text: 'blah blah blah'
          }
        ]
      },
      {
        name: 'Manual Trigger',
        cost: 0,
        text: 'blah blah blah',
        upgrades: [
          {
            name: 'Magical Lock',
            cost: 2,
            text: 'blah blah blah'
          }
        ]
      },
      {
        name: 'Magical Trigger',
        cost: 4,
        text: 'blah blah blah',
        upgrades: [
          {
            name: 'Keen Senses',
            cost: 2,
            text: 'blah blah blah'
          },
          {
            name: 'Discerning Trigger',
            cost: 4,
            text: 'blah blah blah'
          },
          {
            name: 'Truesight',
            cost: 4,
            text: 'blah blah blah'
          }
        ]
      },
    ]
  },
  targets: {
    name: 'Targetting',
    upgrades: [
      {
        name: 'Precise Expansion',
        cost: 1,
        text: 'blah blah blah'
      },
      {
        name: 'Bigger Area',
        cost: 3,
        text: 'blah blah blah'
      },
      {
        name: 'Discerning Target',// special, will need to request another trigger
        cost: 8,
        text: 'blah blah blah'
      }
    ],
    options: [
      {
        name: 'Basic Targeting',
        cost: 0,
        text: 'blah blah blah',
      },
      {
        name: 'Fixed Targeting',
        cost: 0,
        text: 'blah blah blah',
      },
      {
        name: 'Magical Targeting',
        cost: 2,
        text: 'blah blah blah',
        upgrades: [
          {
            name: 'Longer Range',
            cost: 1,
            text: 'blah blah blah'
          }
        ]
      },
    ]
  },
  effects: {
    name: 'Component',
    upgrades: [
      {
        name: 'Magical Mechanisms',
        cost: 2,
        text: 'blah blah blah'
      },
      {
        name: 'Continuous',
        cost: 15,
        text: 'blah blah blah'
      }
    ],
    universal_upgrades: [
      {
        name: 'Hard to Break',
        cost: 2,
        text: 'blah blah blah'
      },
      {
        name: 'Delayed Activation',
        cost: 3,
        text: 'blah blah blah'
      },
      {
        name: 'Knockback',
        cost: 3,
        text: 'blah blah blah'
      },
      {
        name: 'Slowing',
        cost: 4,
        text: 'blah blah blah'
      }
    ],
    options: [
      {
        name: 'Alarm',
        params: {
          'COST': [1,2,4,6,8,10,12],
          'AUDIBLE DISTANCE': ['60 ft.', '120 ft.', '300 ft.', '600 ft.', '1/4 mile', '1/2 mile', '1 mile'],
        },
        text: 'blah blah blah',
        upgrades: [
          {
            name: 'Silent Alarm',
            cost: 4,
            text: 'blah blah blah'
          }
        ]
      },
      {
        name: 'Antimagic',
        params: {
          'COST': [1,2,4,6,8,10,12],
          'AUTOMATIC DISPEL': ['60 ft.', '120 ft.', '300 ft.', '600 ft.', '1/4 mile', '1/2 mile', '1 mile'],
          'DISPEL BONUS': ['+2', '+2', '+3', '+3', '+4', '+4', '+5']
        },
        text: 'blah blah blah',
        upgrades: [
          {
            name: 'Counterspelling',
            cost: 0,
            text: 'blah blah blah'
          },
          {
            name: 'Antimagic Zone',
            cost: 8,
            text: 'blah blah blah'
          }
        ]
      },
      {
        name: "Architect's",
        params: {
          'COST': [1,3,6,10,13,17,21],
          'SAVE DC': [12,14,16,18,20,22,24],
        },
        text: 'blah blah blah',
        upgrades: [
          {
            name: 'Quicksilver Mechanisms',
            cost: 2,
            text: 'blah blah blah'
          },
          {
            name: 'Locked Mechanism',
            cost: 4,
            text: 'blah blah blah'
          },
          {
            name: 'Crushing Walls',
            cost: 5,
            text: 'blah blah blah'
          }
        ]
      },
    ]
  },
}