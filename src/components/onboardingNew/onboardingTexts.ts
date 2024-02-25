import type { OnboardingTypes } from './onboardingTypes'

export const onboardingTexts = (): OnboardingTypes[] => [
  {
    name: 'startOnboarding',
    text: [{ line: 'Hello, dear! Let us help you to find new friends here!' }],
  },
  {
    name: 'findFriends',
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
    text: [{ line: 'find a friend to visit yoga studio' }],
    image: { path: 'yoga', alt: 'yoga' },
  },
  {
    name: 'ToFind',
    text: [{ line: 'find a friends in new city' }],
    image: { path: 'find-friends', alt: 'find-friends' },
  },
  {
    name: 'ToWalkWith',
    text: [{ line: 'find a perfect person to walk with' }],
    image: { path: 'person', alt: 'person' },
  },
  {
    name: 'ToLearn',
    text: [{ line: 'find someone to learn language with' }],
    image: { path: 'learn-together', alt: 'learn-together' },
  },
  {
    name: 'YouCan',
    text: [{ line: 'Find emotional support' }],
    image: { path: 'you-can', alt: 'you-can' },
  },
]
