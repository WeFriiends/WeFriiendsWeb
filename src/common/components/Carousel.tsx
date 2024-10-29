interface CarouselProps<T> {
  items: T[]
  renderItem: (item: T) => JSX.Element
  activeStep: number
}

const GenericCarousel = <T extends object>({
  items,
  renderItem,
  activeStep,
}: CarouselProps<T>) => {
  //TODO: test cases in IF condition
  if (activeStep < 0 || activeStep >= items.length) {
    return null
  }

  return <>{renderItem(items[activeStep])}</>
}

export default GenericCarousel
