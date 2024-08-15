import { Selector } from 'testcafe';

fixture `Eva BLANCO TRATAMIENTOS`
    .page `https://dev.ingenes.com/`;
  
/************************************************************
 *                                                          *  
 *                      BLANCOS Eva                   *
 *                                                          *
*************************************************************/
// MEDICAMENTOS PARA OVULAR local Bien
test('EvaMedicamentos', async t => {
    await t
        .click(Selector('#__next span').withText('Femenino'))
        .click(Selector('#__next div').withText('Quiero tener un bebé').nth(6))
        .click(Selector('#__next div').withText('Con mi pareja mujer').nth(6))
        .click(Selector('#__next button').withText('Continuar'))
        .click(Selector('#__next div').withText('No').nth(8))
        // TRATAMIENTOS PREVIOS
        .click(Selector('#__next div').withText('He tomado medicamentos para ovular (coitos program').nth(6))
        .click(Selector('#__next button').withText('Continuar'))
        .click(Selector('#__next p').withText('Menos de 1 año'))
        .click(Selector('#__next div').withText('Lo antes posible').nth(4))
        .click(Selector('#__next div').withText('No').nth(4))
        .typeText('#field-3', 'x&7J^pZ!q2@rB9#w$8L')
        .click('#__next .chakra-image.css-0')
        .click(Selector('#__next button').withText('Continuar'))
        .typeText('#field-4', 'prueba')
        .typeText('#field-5', 'prueba')
        .click(Selector('#__next button').withText('Continuar'))
        .typeText('#field-7', '10')
        .typeText('#field-8', '11')
        .typeText('#field-9', '1993')
        .click(Selector('#__next button').withText('Continuar'))
        .click(Selector('#__next button').withText('Continuar'))
        .click(Selector('#__next span').withText('Sólo estoy investigando opciones'))
        .click(Selector('#__next button').withText('Continuar'))
        .typeText('#field-12', 'prueba_usa_0144@gmail.com')
        .click(Selector('#__next button').withText('Continuar'))
        .click('#menu-button-16')
        .click('#menu-list-16-menuitem-17')
        .typeText('#field-206', '5591676895')
        .click(Selector('#__next button').withText('Continuar'))
        .click(Selector('#__next div').withText('México').nth(5))
        .click(Selector('#__next span').withText('Estados Unidos'))
        .typeText('#field-207', '77001')
        .click(Selector('#__next button').withText('Continuar'))
        .click(Selector('#__next div').withText('Houston, Texas').nth(7))
        .click('#email-lead')
        .click(Selector('#__next button').withText('Continuar'))
        .click(Selector('#__next button').withText('Continuar'))
        .click(Selector('#__next button').withText('Continuar'))
        .click(Selector('#__next button').withText('Continuar'))
        .click(Selector('#__next div').withText('No').nth(6))
        .click(Selector('#__next div').withText('No').nth(6))
        .click(Selector('#__next p').withText('Google'))
        .click(Selector('#__next button').withText('No estoy interesado'))
        .click(Selector('#__next button').withText('No, ninguno'))
        .click(Selector('#__next button').withText('Continuar'))
        .click(Selector('#__next button').withText('No, ninguno'))
        .click(Selector('#__next button').withText('Continuar'))
        .click(Selector('#__next button').withText('Continuar'))
        .click(Selector('#__next button').withText('Continuar'))
        .click(Selector('#__next div').withText('Transporte público').nth(6))
        .click(Selector('#__next div').withText('Empleada no profesionista').nth(6))
        .click(Selector('#__next span').withText('No'))
        .click(Selector('#__next div').withText('Unión libre').nth(6))
        .click('#field-209')
        .typeText('#field-209', 'prueba')
        .typeText('#field-210', 'prueba')
        .click(Selector('#__next button').withText('Continuar'))
        .click('#field-212')
        .typeText('#field-212', '01')
        .typeText('#field-213', '11')
        .typeText('#field-214', '1993')
        .click(Selector('#__next button').withText('Continuar'))
        .click(Selector('#__next div').withText('Comerciante').nth(6))
        .click(Selector('#__next p').withText('Alto'))
        .click(Selector('#__next button').withText('Continuar'));
});

//FECUANDCION IN VITRO local intermedio Bien
test('EvaInVitro', async t => {
    await t
        .click(Selector('#__next span').withText('Femenino'))
        .click(Selector('#__next div').withText('Quiero tener un bebé').nth(6))
        .click(Selector('#__next div').withText('Con mi pareja mujer').nth(6))
        .click(Selector('#__next button').withText('Continuar'))
        .click(Selector('#__next div').withText('No').nth(8))
        // TRATAMIENTOS PREVIOS
        .click(Selector('#__next div').withText('Me realizaron algún tipo de Fecundación in Vitro (').nth(6))
        .click(Selector('#__next button').withText('Continuar'))
        .click(Selector('#__next p').withText('Menos de 1 año'))
        .click(Selector('#__next p').withText('Más de 4 años'))
        .click(Selector('#__next div').withText('2 veces').nth(4))
        .click(Selector('#__next p').withText('Tengo 2 hijos'))
        .typeText('#field-3', 'x&7J^pZ!q2@rB9#w$8L')
        .click('#__next .chakra-image.css-0')
        .click(Selector('#__next button').withText('Continuar'))
        .typeText('#field-4', 'prueba')
        .typeText('#field-5', 'prueba')
        .click(Selector('#__next button').withText('Continuar'))
        .typeText('#field-7', '10')
        .typeText('#field-8', '11')
        .typeText('#field-9', '1993')
        .click(Selector('#__next button').withText('Continuar'))
        .click(Selector('#__next button').withText('Continuar'))
        .click(Selector('#__next span').withText('Sólo estoy investigando opciones'))
        .click(Selector('#__next button').withText('Continuar'))
        .typeText('#field-12', 'prueba_usa_0145@gmail.com')
        .click(Selector('#__next button').withText('Continuar'))
        .click('#menu-button-16')
        .click('#menu-list-16-menuitem-17')
        .typeText('#field-206', '5591676895')
        .click(Selector('#__next button').withText('Continuar'))
        .click(Selector('#__next span').withText('Estados Unidos'))
        .typeText('#field-207', '77001')
        .click(Selector('#__next button').withText('Continuar'))
        .click(Selector('#__next div').withText('Houston, Texas').nth(7))
        .click('#email-lead')
        .click(Selector('#__next button').withText('Continuar'))
        .click(Selector('#__next button').withText('Continuar'))
        .click(Selector('#__next button').withText('Continuar'))
        .click(Selector('#__next button').withText('Continuar'))

        .click(Selector('#__next div').withText('No').nth(6))
        .click(Selector('#__next div').withText('No').nth(6))
        .click(Selector('#__next p').withText('Google'))
        .click(Selector('#__next button').withText('No estoy interesado'))
        .click(Selector('#__next button').withText('No, ninguno'))
        .click(Selector('#__next button').withText('Continuar'))
        .click(Selector('#__next button').withText('No, ninguno'))
        .click(Selector('#__next button').withText('Continuar'))
        .click(Selector('#__next button').withText('Continuar'))
        .click(Selector('#__next button').withText('Continuar'))
        .click(Selector('#__next div').withText('Transporte público').nth(6))
        .click(Selector('#__next div').withText('Empleada no profesionista').nth(6))
        .click(Selector('#__next span').withText('No'))
        .click(Selector('#__next div').withText('Unión libre').nth(6))
        .click('#field-209')
        .typeText('#field-209', 'prueba')
        .typeText('#field-210', 'prueba')
        .click(Selector('#__next button').withText('Continuar'))
        .click('#field-212')
        .typeText('#field-212', '01')
        .typeText('#field-213', '11')
        .typeText('#field-214', '1993')
        .click(Selector('#__next button').withText('Continuar'))
        .click(Selector('#__next div').withText('Comerciante').nth(6))
        .click(Selector('#__next p').withText('Alto'))
        .click(Selector('#__next button').withText('Continuar'));
});

// // INSEMINACION ARTIFICIAL Bien
test('EvaInseminacion', async t => {
    await t
        .click(Selector('#__next span').withText('Femenino'))
        .click(Selector('#__next div').withText('Quiero tener un bebé').nth(6))
        .click(Selector('#__next div').withText('Con mi pareja mujer').nth(6))
        .click(Selector('#__next button').withText('Continuar'))
        .click(Selector('#__next span').withText('Sí, mi pareja está operada'))
        // TRATAMIENTOS PREVIOS
        .click(Selector('#__next div').withText('Me realizaron una o más Inseminaciones Artificiale').nth(6))
        .click(Selector('#__next button').withText('Continuar'))
        .click(Selector('#__next p').withText('Menos de 1 año'))
        .click(Selector('#__next p').withText('Más de 4 años'))
        .click(Selector('#__next p').withText('3 veces o más'))
        .click(Selector('#__next p').withText('Tengo 3 o más hijos'))
        .typeText('#field-3', 'x&7J^pZ!q2@rB9#w$8L')
        .click('#__next .chakra-image.css-0')
        .click(Selector('#__next button').withText('Continuar'))
        .typeText('#field-4', 'prueba')
        .typeText('#field-5', 'prueba')
        .click(Selector('#__next button').withText('Continuar'))
        .typeText('#field-7', '10')
        .typeText('#field-8', '11')
        .typeText('#field-9', '1993')
        .click(Selector('#__next button').withText('Continuar'))
        .click(Selector('#__next button').withText('Continuar'))
        .click(Selector('#__next span').withText('Sólo estoy investigando opciones'))
        .click(Selector('#__next button').withText('Continuar'))
        .typeText('#field-12', 'prueba_usa_0146@gmail.com')
        .click(Selector('#__next button').withText('Continuar'))
        .click('#menu-button-16')
        .click('#menu-list-16-menuitem-17')
        .typeText('#field-206', '5591676895')
        .click(Selector('#__next button').withText('Continuar'))
        .click(Selector('#__next span').withText('Estados Unidos'))
        .typeText('#field-207', '77001')
        .click(Selector('#__next button').withText('Continuar'))
        .click(Selector('#__next div').withText('Houston, Texas').nth(7))
        .click('#email-lead')
        .click(Selector('#__next button').withText('Continuar'))
        .click(Selector('#__next button').withText('Continuar'))
        .click(Selector('#__next button').withText('Continuar'))
        .click(Selector('#__next button').withText('Continuar'))
        .click(Selector('#__next div').withText('No').nth(6))
        .click(Selector('#__next div').withText('No').nth(6))
        .click(Selector('#__next p').withText('Google'))
        .click(Selector('#__next button').withText('No estoy interesado'))
        .click(Selector('#__next button').withText('No, ninguno'))
        .click(Selector('#__next button').withText('Continuar'))
        .click(Selector('#__next button').withText('No, ninguno'))
        .click(Selector('#__next button').withText('Continuar'))
        .click(Selector('#__next button').withText('Continuar'))
        .click(Selector('#__next button').withText('Continuar'))
        .click(Selector('#__next div').withText('Transporte público').nth(6))
        .click(Selector('#__next div').withText('Comerciante').nth(6))
        .click(Selector('#__next span').withText('No'))
        .click(Selector('#__next div').withText('Otro').nth(6))
        .click('#field-209')
        .typeText('#field-209', 'prueba')
        .typeText('#field-210', 'prueba')
        .click(Selector('#__next button').withText('Continuar'))
        .click('#field-212')
        .typeText('#field-212', '01')
        .typeText('#field-213', '11')
        .typeText('#field-214', '1993')
        .click(Selector('#__next button').withText('Continuar'))
        .click(Selector('#__next div').withText('Comerciante').nth(6))
        .click(Selector('#__next p').withText('Bajo'))
        .click(Selector('#__next button').withText('Continuar'));
});
// //local blanco Bien
test('EvaBlanco', async t => {
    await t
        .click(Selector('#__next span').withText('Femenino'))
        .click(Selector('#__next div').withText('Quiero tener un bebé').nth(6))
        .click(Selector('#__next div').withText('Con mi pareja mujer').nth(6))
        .click(Selector('#__next button').withText('Continuar'))
        .click(Selector('#__next div').withText('No').nth(8))
        .click(Selector('#__next div').withText('Ninguno').nth(6))
        .click(Selector('#__next button').withText('Continuar'))
        .click(Selector('#__next p').withText('Menos de 1 año'))
        .click(Selector('#__next div').withText('Lo antes posible').nth(4))
        .click(Selector('#__next div').withText('No').nth(4))
        .typeText('#field-3', 'x&7J^pZ!q2@rB9#w$8L')
        .click('#__next .chakra-image.css-0')
        .click(Selector('#__next button').withText('Continuar'))
        .typeText('#field-4', 'prueba')
        .typeText('#field-5', 'prueba')
        .click(Selector('#__next button').withText('Continuar'))
        .typeText('#field-7', '10')
        .typeText('#field-8', '11')
        .typeText('#field-9', '1986')
        .click(Selector('#__next button').withText('Continuar'))
        .click(Selector('#__next button').withText('Continuar'))
        .click(Selector('#__next span').withText('Sólo estoy investigando opciones'))
        .click(Selector('#__next button').withText('Continuar'))
        .typeText('#field-12', 'prueba_usa_0147@gmail.com')
        .click(Selector('#__next button').withText('Continuar'))
        .click('#menu-button-16')
        .click('#menu-list-16-menuitem-17')
        .typeText('#field-206', '5591676895')
        .click(Selector('#__next button').withText('Continuar'))
        .click(Selector('#__next span').withText('Estados Unidos'))
        .typeText('#field-207', '77001')
        .click(Selector('#__next button').withText('Continuar'))
        .click(Selector('#__next div').withText('Houston, Texas').nth(7))
        .click('#email-lead')
        .click(Selector('#__next button').withText('Continuar'))
        .click(Selector('#__next button').withText('Continuar'))
        .click(Selector('#__next button').withText('Continuar'))
        .click(Selector('#__next button').withText('Continuar'))
        .click(Selector('#__next div').withText('No').nth(6))
        .click(Selector('#__next div').withText('No').nth(6))
        .click(Selector('#__next p').withText('Google'))
        .click(Selector('#__next button').withText('No estoy interesado'))
        .click(Selector('#__next button').withText('No, ninguno'))
        .click(Selector('#__next button').withText('Continuar'))
        .click(Selector('#__next button').withText('No, ninguno'))
        .click(Selector('#__next button').withText('Continuar'))
        .click(Selector('#__next button').withText('Continuar'))
        .click(Selector('#__next button').withText('Continuar'))
        .click(Selector('#__next div').withText('Transporte público').nth(6))
        .click(Selector('#__next div').withText('Empleada no profesionista').nth(6))
        .click(Selector('#__next span').withText('No'))
        .click(Selector('#__next div').withText('Unión libre').nth(6))
        .click('#field-209')
        .typeText('#field-209', 'prueba')
        .typeText('#field-210', 'prueba')
        .click(Selector('#__next button').withText('Continuar'))
        .click('#field-212')
        .typeText('#field-212', '01')
        .typeText('#field-213', '11')
        .typeText('#field-214', '1986')
        .click(Selector('#__next button').withText('Continuar'))
        .click(Selector('#__next div').withText('Comerciante').nth(6))
        .click(Selector('#__next p').withText('Alto'))
        .click(Selector('#__next button').withText('Continuar'));
});

// /************************************************************
//  *                                                          *  
//  *                      BLANCOS Eva local blanco Bien       *
//  *                                                          *
// *************************************************************/
test('EvaBlanco', async t => {
    await t
        .click(Selector('#__next span').withText('Femenino'))
        .click(Selector('#__next div').withText('Quiero tener un bebé').nth(6))
        .click(Selector('#__next div').withText('Con mi pareja mujer').nth(6))
        .click(Selector('#__next button').withText('Continuar'))
        .click(Selector('#__next div').withText('No').nth(8))
        .click(Selector('#__next div').withText('Ninguno').nth(6))
        .click(Selector('#__next button').withText('Continuar'))
        .click(Selector('#__next p').withText('Menos de 1 año'))
        .click(Selector('#__next div').withText('Lo antes posible').nth(4))
        .click(Selector('#__next div').withText('No').nth(4))
        .typeText('#field-3', 'x&7J^pZ!q2@rB9#w$8L')
        .click('#__next .chakra-image.css-0')
        .click(Selector('#__next button').withText('Continuar'))
        .typeText('#field-4', 'prueba')
        .typeText('#field-5', 'prueba')
        .click(Selector('#__next button').withText('Continuar'))
        .typeText('#field-7', '10')
        .typeText('#field-8', '11')
        .typeText('#field-9', '1999')
        .click(Selector('#__next button').withText('Continuar'))
        .click(Selector('#__next button').withText('Continuar'))
        .click(Selector('#__next span').withText('Sólo estoy investigando opciones'))
        .click(Selector('#__next button').withText('Continuar'))
        .typeText('#field-12', 'prueba_usa_0148@gmail.com')
        .click(Selector('#__next button').withText('Continuar'))
        .click('#menu-button-16')
        .click('#menu-list-16-menuitem-17')
        .typeText('#field-206', '5591676895')
        .click(Selector('#__next button').withText('Continuar'))
        .click(Selector('#__next div').withText('México').nth(5))
        .click(Selector('#__next span').withText('Estados Unidos'))
        .typeText('#field-207', '77001')
        .click(Selector('#__next button').withText('Continuar'))
        .click(Selector('#__next div').withText('Houston, Texas').nth(7))
        .click('#email-lead')
        .click(Selector('#__next button').withText('Continuar'))
        .click(Selector('#__next button').withText('Continuar'))
        .click(Selector('#__next button').withText('Continuar'))
        .click(Selector('#__next button').withText('Continuar'))
        .click(Selector('#__next div').withText('No').nth(6))
        .click(Selector('#__next div').withText('No').nth(6))
        .click(Selector('#__next p').withText('Google'))
        .click(Selector('#__next button').withText('No estoy interesado'))
        .click(Selector('#__next button').withText('No, ninguno'))
        .click(Selector('#__next button').withText('Continuar'))
        .click(Selector('#__next button').withText('No, ninguno'))
        .click(Selector('#__next button').withText('Continuar'))
        .click(Selector('#__next button').withText('Continuar'))
        .click(Selector('#__next button').withText('Continuar'))
        .click(Selector('#__next div').withText('Transporte público').nth(6))
        .click(Selector('#__next div').withText('Empleada no profesionista').nth(6))
        .click(Selector('#__next span').withText('No'))
        .click(Selector('#__next div').withText('Unión libre').nth(6))
        .click('#field-209')
        .typeText('#field-209', 'prueba')
        .typeText('#field-210', 'prueba')
        .click(Selector('#__next button').withText('Continuar'))
        .click('#field-212')
        .typeText('#field-212', '01')
        .typeText('#field-213', '11')
        .typeText('#field-214', '1999')
        .click(Selector('#__next button').withText('Continuar'))
        .click(Selector('#__next div').withText('Comerciante').nth(6))
        .click(Selector('#__next p').withText('Alto'))
        .click(Selector('#__next button').withText('Continuar'));
});
// //local blanco Bien
test('EvaBlanco', async t => {
    await t
        .click(Selector('#__next span').withText('Femenino'))
        .click(Selector('#__next div').withText('Quiero tener un bebé').nth(6))
        .click(Selector('#__next div').withText('Con mi pareja mujer').nth(6))
        .click(Selector('#__next button').withText('Continuar'))
        .click(Selector('#__next div').withText('No').nth(8))
        .click(Selector('#__next div').withText('Ninguno').nth(6))
        .click(Selector('#__next button').withText('Continuar'))
        .click(Selector('#__next p').withText('Menos de 1 año'))
        .click(Selector('#__next div').withText('Lo antes posible').nth(4))
        .click(Selector('#__next div').withText('No').nth(4))
        .typeText('#field-3', 'x&7J^pZ!q2@rB9#w$8L')
        .click('#__next .chakra-image.css-0')
        .click(Selector('#__next button').withText('Continuar'))
        .typeText('#field-4', 'prueba')
        .typeText('#field-5', 'prueba')
        .click(Selector('#__next button').withText('Continuar'))
        .typeText('#field-7', '10')
        .typeText('#field-8', '11')
        .typeText('#field-9', '1993')
        .click(Selector('#__next button').withText('Continuar'))
        .click(Selector('#__next button').withText('Continuar'))
        .click(Selector('#__next span').withText('Sólo estoy investigando opciones'))
        .click(Selector('#__next button').withText('Continuar'))
        .typeText('#field-12', 'prueba_usa_0149@gmail.com')
        .click(Selector('#__next button').withText('Continuar'))
        .click('#menu-button-16')
        .click('#menu-list-16-menuitem-17')
        .typeText('#field-206', '5591676895')
        .click(Selector('#__next button').withText('Continuar'))
        .click(Selector('#__next span').withText('Estados Unidos'))
        .typeText('#field-207', '77001')
        .click(Selector('#__next button').withText('Continuar'))
        .click(Selector('#__next div').withText('Houston, Texas').nth(7))
        .click('#email-lead')
        .click(Selector('#__next button').withText('Continuar'))
        .click(Selector('#__next button').withText('Continuar'))
        .click(Selector('#__next button').withText('Continuar'))
        .click(Selector('#__next button').withText('Continuar'))
        .click(Selector('#__next div').withText('No').nth(6))
        .click(Selector('#__next div').withText('No').nth(6))
        .click(Selector('#__next p').withText('Google'))
        .click(Selector('#__next button').withText('No estoy interesado'))
        .click(Selector('#__next button').withText('No, ninguno'))
        .click(Selector('#__next button').withText('Continuar'))
        .click(Selector('#__next button').withText('No, ninguno'))
        .click(Selector('#__next button').withText('Continuar'))
        .click(Selector('#__next button').withText('Continuar'))
        .click(Selector('#__next button').withText('Continuar'))
        .click(Selector('#__next div').withText('Transporte público').nth(6))
        .click(Selector('#__next div').withText('Empleada no profesionista').nth(6))
        .click(Selector('#__next span').withText('No'))
        .click(Selector('#__next div').withText('Unión libre').nth(6))
        .click('#field-209')
        .typeText('#field-209', 'prueba')
        .typeText('#field-210', 'prueba')
        .click(Selector('#__next button').withText('Continuar'))
        .click('#field-212')
        .typeText('#field-212', '01')
        .typeText('#field-213', '11')
        .typeText('#field-214', '1999')
        .click(Selector('#__next button').withText('Continuar'))
        .click(Selector('#__next div').withText('Comerciante').nth(6))
        .click(Selector('#__next p').withText('Alto'))
        .click(Selector('#__next button').withText('Continuar'));
});