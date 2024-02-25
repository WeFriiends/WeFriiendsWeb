import PageComponent from './PresentationContent'
import { OnboardingTypes } from './onboardingTypes'

export const renderSteps = (
  handleNext: () => void,
  elements: OnboardingTypes[]
) => {
  return elements.map((e, i) => {
    console.log('index: ', i, 'element: ', e)
    if (i === 0) {
      return {
        label: e.name,
        component: (
          <PageComponent
            goForward={handleNext}
            content={e.text[0].line}
            toShow={i === 0}
          />
        ),
      }
    } else if (i === 1) {
      return {
        label: e.name,
        component: (
          <PageComponent
            textArr={e.text}
            contentASObj={e.image}
            goForward={handleNext}
          />
        ),
      }
    } else {
      return {
        label: e.name,
        component: (
          <PageComponent
            content={e.text[0].line}
            contentASObj={e.image}
            goForward={handleNext}
          />
        ),
      }
    }
  })
}
