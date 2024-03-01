const OnboardingComponentHOC = (BaseComponent: any) => {
    return function EnhancedComponent(props: any) {
      return (
        <>
          <BaseComponent />
        </>
      )
    }
  }
  
  export default OnboardingComponentHOC
  