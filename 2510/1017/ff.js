function calcWaterIntake(weight, activityLevel) {
  const low = 0
  const medium = 1.1
  const height = 1.2
  const intake = (weight * 35) * activityLevel

  return intake
}

const intake = (60, medium)
console.log(intake)