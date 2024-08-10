function convertidorTemp(tempCelsius) {
	return tempCelsius*9/5 + 32
}

function resolvedor(a, b, c, signo) {
	// signo es +1 para positivo o -1 para negativo
	return (-b + signo*(b**2 - 4*a*c)**0.5)/(2*a)
}

function mejorParidad(num) {
	return num%2 == 0
}

function peorParidad(num) {
	num = ''+num
	if (parseInt(num) == 1) {
    return false
  }
  if (parseInt(num) == 2) {
    return true
  }
  if (parseInt(num) == 3) {
    return false
  }
  if (parseInt(num) == 4) {
    return true
  }
  if (parseInt(num) == 5) {
    return false
  }
  if (parseInt(num) == 6) {
    return true
  }
  if (parseInt(num) == 7) {
    return false
  }
  if (parseInt(num) == 8) {
    return true
  }
  if (parseInt(num) == 9) {
    return false
  }
  if (parseInt(num) == 10) {
    return true
   }
}
