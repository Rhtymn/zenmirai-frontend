const specialCharacters = '!@#$%^&*()\\-_=+{};:,<.>]'

export const passwordValidation = function (value: string | undefined) {
  if (!value) return false

  let countLower = 0,
    countUpper = 0,
    countSpecial = 0,
    countNumber = 0

  for (let i = 0; i < value.length; i++) {
    const unicode = value.charCodeAt(i)
    if (unicode >= 65 && unicode <= 90) {
      countUpper++
    } else if (unicode >= 97 && unicode <= 122) {
      countLower++
    } else if (unicode >= 48 && unicode <= 57) {
      countNumber++
    } else if (specialCharacters.includes(value[i])) {
      countSpecial++
    }
  }

  return countLower > 0 && countUpper > 0 && countSpecial >= 0 && countNumber > 0
}

export const leadingTrailingWhiteSpaceValidation = function (value: string | undefined) {
  if (!value) return false

  if (value[0] === ' ' || value[value.length - 1] === ' ') {
    return false
  }

  return true
}

export const notContainWhiteSpace = function (value: string | undefined) {
  if (!value) return false

  for (let i = 0; i < value.length; i++) {
    if (value[i] === ' ') {
      return false
    }
  }

  return true
}
