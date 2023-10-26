const isValid = (checkIsValid: boolean[]) => {
  return checkIsValid.every(Boolean)
}

export default { isValid }
