import React from 'react'

const randomNumber = () => {
  let min = 10000
  let max = 99999
  let randomNumber = Math.floor(Math.random() * (max - min + 1) + min)
  return randomNumber
}

export default randomNumber
