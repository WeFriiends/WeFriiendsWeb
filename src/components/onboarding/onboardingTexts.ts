import type { OnboardingTypes } from './onboardingTypes'

export const onboardingTexts = (): OnboardingTypes[] => [
  {
    name: 'findFriends',
    id: 1,
    isFirst: true,
    heading1: 'This is',
    heading2: 'Here you can',
    text: [
      { line: 'look for friends in your local city' },
      { line: 'or all over the world' },
      {
        line: 'ready to relocate? great! find a friend in a city of relocation',
      },
    ],
    image: { path: 'vector', alt: 'Vector' },
  },
  {
    name: 'ToVisit',
    id: 2,
    isStart: true,
    text: [{ line: 'find a friend to visit yoga studio' }],
    image: { path: 'yoga', alt: 'yoga' },
  },
  {
    name: 'ToFind',
    id: 2,
    text: [{ line: 'find a friends in new city' }],
    image: { path: 'find-friends', alt: 'find-friends' },
  },
  {
    name: 'ToWalkWith',
    id: 2,
    text: [{ line: 'find a perfect person to walk with' }],
    image: { path: 'person', alt: 'person' },
  },
  {
    name: 'ToLearn',
    id: 2,
    text: [{ line: 'find someone to learn language with' }],
    image: { path: 'learn-together', alt: 'learn-together' },
  },
  {
    name: 'YouCan',
    id: 2,
    text: [{ line: 'find someone to learn language with' }],
    image: { path: 'you-can', alt: 'you-can' },
  },
]
