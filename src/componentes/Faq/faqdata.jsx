const faqData = [
  {
    pregunta: '¿Qué es un estado parcial?',
    respuesta: 'El estado parcial es cuando reembolsamos parcialmente los restos de un pedido. A veces, por algunas razones, no podemos entregar un pedido completo, por lo que le reembolsaremos el monto restante no entregado. Ejemplo: Usted compró un pedido con una cantidad de 10000 y cobra 10 $, digamos que entregamos 9000 y no pudimos entregar los 1000 restantes, luego "Parcialmente" el pedido y le reembolsaremos los 1000 restantes (1 $ en este ejemplo).'
  },
  {
    pregunta: '¿Qué es la alimentacion por goteo?',
    respuesta: 'Drip Feed es un servicio que ofrecemos para que pueda realizar el mismo pedido varias veces de forma automática. Ejemplo: digamos que desea obtener 1000 me gusta en su publicación de Instagram pero desea obtener 100 me gusta cada 30 minutos, pondrá Enlace: Su publicación Cantidad de enlaces: 100 Ejecuciones: 10 (ya que desea ejecutar este pedido 10 veces, si quieres conseguir 2000 me gusta, lo ejecutarás 20 veces, etc…) Intervalo: 30 (porque quieres conseguir 100 me gusta en tu publicación cada 30 minutos, si quieres cada hora, pondrás 60 porque el tiempo es en minutos) PD: Nunca pida más cantidad que el máximo que está escrito en el nombre del servicio (Cantidad x Ejecuciones), por ejemplo, si el máximo del servicio es 4000, no ponga Cantidad: 500 y Ejecutar: 10, porque la cantidad total ser 500x10 = 5000, que es más grande que el servicio máximo (4000). Además, nunca coloque el intervalo por debajo de la hora de inicio real (algunos servicios necesitan 60 minutos para comenzar, no coloque el intervalo por debajo de la hora de inicio del servicio o provocará una falla en su pedido).'
  },
  {
    pregunta: '¿Como uso el pedido masivo?',
    respuesta: 'Pones el ID de servicio seguido de | seguido del enlace seguido de | seguido de la cantidad en cada línea Para obtener el ID de servicio de un servicio, marque aquí: https://sigmanet.cl/services Supongamos que desea utilizar el pedido masivo para agregar seguidores de Instagram a sus 3 cuentas: cuenta1, cuenta2, cuenta3 De la Lista de servicios @ https://sigmanet.cl/services, el ID de servicio para este servicio “Seguidores de Instagram [15K] [REAL] ⚡️💧⭐” es 102 Digamos que desea agregar 1000 seguidores para cada cuenta, el resultado será así: ID | Enlace | Cantidad o en este ejemplo: 102 | cuenta1 | 1000102 | cuenta2 | 1000102 | cuenta3 | 1000'
  },
  {
    pregunta: '¿Puedo obtener un descuento?',
    respuesta: 'No, no ofrecemos ningún descuento, ¡el precio de nuestros servicios es fijo!'
  },
  {
    pregunta: '¿Como obtener el enlace de comentario de youtube?',
    respuesta: 'Busque la marca de tiempo que se encuentra junto a su nombre de usuario sobre su comentario (por ejemplo: "hace 3 días") y coloque el cursor sobre ella, luego haga clic con el botón derecho y "Copiar dirección del enlace". El enlace será algo como esto: https://www.youtube.com/watch?v=12345&lc=a1b21etc en lugar de solo https://www.youtube.com/watch?v=12345 Para asegurarse de que obtuvo el enlace correcto, péguelo en la barra de direcciones de su navegador y verá que el comentario es ahora el primero debajo del video y dice "Comentario resaltado".'
  },
  {
    pregunta: '¿Qué servicio de visualización de youtube se puede usar con videos monetizables?',
    respuesta: 'El que tiene "Monetizado" en el nombre de su servicio.'
  },
  {
    pregunta: '¿Qué es el "instagram saves" y qué hace?',
    respuesta: 'Instagram Saves es cuando un usuario guarda una publicación en su historial en Instagram (presionando el botón Guardar cerca del botón Me gusta). Una gran cantidad de guardados para una publicación aumentan su impresión.'
  },
  {
    pregunta: '¿El enlace debe agregarse antes de que el usuario se active o despues?',
    respuesta: 'Después de que se active, o solo 5 segundos antes de que se active.'
  },
];

export default faqData;
