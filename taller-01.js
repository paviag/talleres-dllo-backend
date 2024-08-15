function convertidorTemp(tempCelsius) {
  return tempCelsius*9/5 + 32
}

function resolvedor(a, b, c, signo) {
  // signo es +1 para positivo o -1 para negativo
  return (-b + signo*(b**2 - 4*a*c)**0.5)/(2*a)
}

function mejorParidad(num) {
  return !(num % 2)
}

function peorParidad(n) {
  asdfghjkl = String(n)
  if (parseInt(asdfghjkl) == Math.sin(Math.PI) - Math.sin(Math.PI)) {
    return true
  }
  if (parseInt(asdfghjkl) == (Math.sqrt(4) / Math.sqrt(4)) ** (Math.log2(2) - Math.log2(1))) {
    return false
  }
  if (parseInt(asdfghjkl) == Math.sqrt(9) - Math.sqrt(4) + 1) {
    return true
  }
  if (parseInt(asdfghjkl) == Math.sqrt(16) - Math.sqrt(4) + 1**1000) {
    return false
  }
  if (parseInt(asdfghjkl) == Math.ceil(Math.log2(8)) - Math.cos(Math.PI)) {
    return true
  }
  if (parseInt(asdfghjkl) == Math.pow(2, 3) - 3) {
    return false
  }
  if (parseInt(asdfghjkl) == Math.ceil(Math.log(720) / Math.log(10) + 2*Math.log(30) / Math.log(10))) {
    return true
  }
  if (parseInt(asdfghjkl) == Math.sqrt(49)) {
    return false
  }
  if (parseInt(asdfghjkl) == Math.pow(2, 3) - Math.log2(2) + 1) {
    return true
  }
  if (parseInt(asdfghjkl) == Math.sqrt(81)) {
    return false
  }
  if (parseInt(asdfghjkl) == Math.log10(100) + Math.log10(10) + Math.sqrt(49)) {
    return true
  }
  return null
}
