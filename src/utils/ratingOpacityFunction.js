export function ratingOpacityFunction(point) {
  let zero,
    seven,
    eight,
    halfEight,
    nine = ''
  if (point === 1) {
    zero = 1
    seven = 0.3
    eight = 0.3
    halfEight = 0.3
    nine = 0.3
  } else if (point === 7) {
    zero = 0.3
    seven = 1
    eight = 0.3
    halfEight = 0.3
    nine = 0.3
  } else if (point === 8) {
    zero = 0.3
    seven = 0.3
    eight = 1
    halfEight = 0.3
    nine = 0.3
  } else if (point === 8.5) {
    zero = 0.3
    seven = 0.3
    eight = 0.3
    halfEight = 1
    nine = 0.3
  } else if (point === 9) {
    zero = 0.3
    seven = 0.3
    eight = 0.3
    halfEight = 0.3
    nine = 1
  } else {
    zero = 1
    seven = 1
    eight = 1
    halfEight = 1
    nine = 1
  }

  return { zero, seven, eight, halfEight, nine }
}
