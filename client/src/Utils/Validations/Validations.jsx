export const crearPokemonValidation = (valores) => {
  const regexNum = /\d/;
  const errors = {};

  if (!valores.nombre) {
    errors.nombre = 'El nombre no debe estar vacío';
  } else if (regexNum.test(valores.nombre)) {
    errors.nombre = 'El nombre no debe contener números';
  }

  if (!valores.imagen) {
    errors.imagen = 'Debes agregar una imagen';
  }

  if (!valores.vida) {
    errors.vida = 'Debes colocar la vida';
  } else if (!regexNum.test(valores.vida)) {
    errors.vida = 'La vida solo puede contener números';
  } else if (valores.vida > 200 || valores.vida <= 0) {
    errors.vida =
      'La vida no debe exceder un máximo de 200 puntos ni menor que 1';
  }

  if (!valores.ataque) {
    errors.ataque = 'Debe indicar el ataque';
  } else if (!regexNum.test(valores.ataque)) {
    errors.ataque = 'El ataque solo puede tener números';
  } else if (valores.ataque > 200 || valores.ataque <= 0) {
    errors.ataque =
      'El ataque no debe exceder un máximo de 200 puntos ni menor que 1';
  }

  if (!valores.defensa) {
    errors.defensa = 'Debe indicar la defensa';
  } else if (!regexNum.test(valores.defensa)) {
    errors.defensa = 'La defensa solo puede tener números';
  } else if (valores.defensa > 200 || valores.defensa <= 0) {
    errors.defensa =
      'La defensa no debe exceder un máximo de 200 puntos ni menor que 1';
  }

  if (!valores.velocidad) {
    errors.velocidad = 'Debe indicar la velocidad';
  } else if (!regexNum.test(valores.velocidad)) {
    errors.velocidad = 'La velocidad solo puede tener números';
  } else if (valores.velocidad > 200 || valores.velocidad <= 0) {
    errors.velocidad =
      'La velocidad no debe exceder un máximo de 200 puntos ni menor que 1';
  }

  if (!valores.altura) {
    errors.altura = 'Debe indicar la altura';
  } else if (!regexNum.test(valores.altura)) {
    errors.altura = 'La altura solo puede tener números';
  } else if (valores.altura > 200 || valores.altura <= 0) {
    errors.altura =
      'La altura no debe exceder un máximo de 200 puntos ni menor que 1';
  }

  if (!valores.peso) {
    errors.peso = 'Debe indicar el peso';
  } else if (!regexNum.test(valores.peso)) {
    errors.peso = 'El peso solo puede tener números';
  } else if (valores.peso > 200 || valores.peso <= 0) {
    errors.peso =
      'El peso no debe exceder un máximo de 200 puntos ni menor que 1';
  }

  if (!valores.tipos.length === 0) {
    errors.tipos = 'Debes asignar aunque sea un tipo';
  }
};
