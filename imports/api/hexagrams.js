const mutateLine = (l) => l === 6 ? 7 : (l === 9 ? 8 : l)

export const mutate = (h) => h.map(mutateLine)

const toBit = (l) => l === 0 || l === 6 || l === 8 ? 0 : 1

const hexagram2bin = (h) => h.map(toBit).reduce((a, v, i) => a | v << (5 - i), 0)

const trigramNumber = (t) => {
  switch (t) {
    case 0b111:
      return 0
    case 0b000:
      return 1
    case 0b001:
      return 2
    case 0b010:
      return 3
    case 0b100:
      return 4
    case 0b110:
      return 5
    case 0b101:
      return 6
    case 0b011:
      return 7
  }
}

const above = (h) => h >> 3

const below = (h) => h & 0b111

const hexagramNumbers = []

hexagramNumbers[0] = [1,   11,  34,   5,  26,   9,  14,  43]
hexagramNumbers[1] = [12,   2,  16,   8,  23,  20,  35,  45]
hexagramNumbers[2] = [25,  24,  51,   3,  27,  42,  21,  17]
hexagramNumbers[3] = [6,    7,  40,  29,   4,  59,  64,  47]
hexagramNumbers[4] = [33,  15,  62,  39,  52,  53,  56,  31]
hexagramNumbers[5] = [44,  46,  32,  48,  18,  57,  50,  28]
hexagramNumbers[6] = [13,  36,  55,  63,  22,  37,  30,  49]
hexagramNumbers[7] = [10,  19,  54,  60,  41,  61,  38,  58]

export const number = (h) => hexagramNumbers[trigramNumber(below(hexagram2bin(h)))][trigramNumber(above(hexagram2bin(h)))]

const names = []

const texts = []

export const name = (n) => names[n]

export const text = (n) => texts[n].replace(/(^|[^\n])\n(?!\n)/g, '$1 ')

names[1] = `Ch’ien / Lo Creativo`

texts[1] = `arriba Ch’ien, Lo Creativo, el Cielo

abajo Ch’ien, Lo Creativo, el Cielo

El signo se compone de seis trazos no partidos. Los trazos no partidos
corresponden a la protoenergía o energía primaria, luminosa, fuerte,
espiritual, activa. El signo es total y uniformemente fuerte en su
naturaleza. Puesto que no lo afecta ninguna debilidad, es, en sí mismo,
de acuerdo con su cualidad intrínseca, la fuerza, la energía. Su imagen
es el cielo. La fuerza, la energía, se representa como entidad no
condicionada por determinadas circunstancias espaciales. Se la concibe
por lo tanto como movimiento. Debe considerarse como fundamento de este
movimiento el tiempo. Así, pues, el signo involucra también el poder del
tiempo y el poder de la perseveración en el tiempo, de la duración.

En la exégesis del signo ha de tenerse en cuenta, constantemente, una
doble interpretación. La macrocósmica y la que corresponde a la acción
en el mundo humano. Con respecto al acontecer universal, se expresa en
el signo la fuerte acción creativa de la divinidad. Aplicado el signo al
mundo humano, denota la acción creadora del santo y del sabio, el
gobernante y conductor de hombres, que merced a su fuerza despierta y
desarrolla en estos últimos su esencia más elevada.

EL DICTAMEN

Lo Creativo obra elevado logro,

propiciando por la perseverancia.

De acuerdo con su sentido primitivo, los atributos aparecen agrupados
por pares. Para el que obtiene este oráculo, ello significa que el logro
será otorgado desde las profundidades primordiales del acontecer
universal, y que todo dependerá de que sólo mediante la perseverancia en
lo recto busque su propia dicha y la de los demás.

Ya antiguamente fueron objeto de meditación estas cuatro cualidades
intrínsecas en razón de sus significaciones específicas. La palabra
china que se reproduce por “elevado”, significa “cabeza, origen,
grande”. Por eso en la explicación de Kung Tse se lee: “Grande en verdad
es la fuerza original de lo Creativo, todos los seres le deben su
comienzo. Y todo el cielo está compenetrado de esta fuerza.” Esta
primera cualidad traspasa, por otra parte, a las otras tres.

El comienzo de todas las cosas reside todavía, por así decirlo, en el
más allá, en forma de ideas que aún deben llegar a realizarse. Pero en
lo creativo reside también la fuerza destinada a dar forma a estas
imágenes primarias de las ideas. Es lo que queda señalado con la palabra
“logro”, “éxito”. Este proceso se ve representado por medio de una
imagen de la naturaleza. “Pasan las nubes y actúa la lluvia y todos los
seres individuales penetran como una corriente en las formas que les son
propias.”

Transferidas al terreno humano, estas cualidades muestran al grande
hombre en camino hacia el gran éxito: “Al contemplar con plena claridad
las causas y los efectos, él consuma, en tiempo justo las seis etapas y
asciende en tiempo justo por estos seis peldaños como sobre seis
dragones, elevándose al cielo.” Los seis peldaños son las seis
posiciones individuales del signo, que más adelante se representan bajo
la imagen del dragón. Como camino hacia el logro aparece aquí el
reconocimiento y la realización del sentido del universo que, en cuanto
ley perenne, y a través de fines y comienzos, origina todos los
fenómenos condicionados por el tiempo. De este modo toda etapa alcanzada
se convierte a la vez en preparatoria para la siguiente, y así el tiempo
ya no constituye un obstáculo, sino el medio para la realización de lo
posible.

Luego de haberse expresado el acto de la creación a través de las dos
cualidades “elevado” y “logro”, se nos señala la obra de conservación,
como un desenvolvimiento que se va elaborando en continua realización,
como ligado a las dos expresiones “propiciando”, esto es literalmente
“creando lo que corresponde a la esencia”, y “perseverante”, que
equivale literalmente a “recto y firme”. “El curso de lo creativo
modifica y forma a los seres hasta que cada uno alcanza la correcta
naturaleza que le está destinada, y luego los mantiene en concordancia
con el gran equilibrio. Así es como se muestra propiciante por medio de
la perseverancia.”

Trasladando lo dicho al terreno humano, podemos comprender cómo el gran
hombre, mediante su actividad ordenadora, trae al mundo paz y seguridad:
“Al elevar la cabeza sobre la multitud de seres, todas las comarcas
juntas entran en calma.”

Otra explicación va más lejos aún con la separación de las voces
“elevado, logro, estimulante, perseverante” y las parangona con las
cuatro virtudes cardinales humanas: a la “elevación” que, como principio
fundamental, involucra al mismo tiempo todas las demás cualidades, se le
coordina el amor; a la cualidad “logro” se le coordinan las costumbres
morales que ordenan las expresiones del amor, las organizan y las llevan
así al éxito; a la cualidad “estimulante”, “propicio”, se le adjudica la
justicia, creadora de circunstancias en las que cada cual obtiene
aquello que corresponde a su naturaleza, aquello que le pertenece y hace
su dicha; a la cualidad “perseverancia” se le coordina la sabiduría, que
reconoce las leyes firmes vigentes en todo lo que acontece, y es por
ello capaz de crear estados duraderos.

Estas especulaciones sugeridas ya en el tratado Wen Yen que figura en la
segunda parte del Libro de las Mutaciones, formaron más tarde el puente
sobre el cual la filosofía de las cinco etapas de mutación (elementos)
—que arraiga en el Libro de los Documentos o Crónicas— se combinó con la
filosofía del Libro de las Mutaciones, que descansa puramente en la
dualidad polar de principios positivos y negativos, hecho que luego, con
el transcurso del tiempo, abriría las puertas a una simbología
numerológica cada vez más amplia.

LA IMAGEN

Pleno de fuerza es el movimiento del Cielo.

Así el noble se hace fuerte e infatigable.

La duplicación del signo Ch’ien, cuya imagen es el cielo, indica, puesto
que existe un solo cielo, el movimiento del cielo. Un movimiento
circular completo del cielo es un día. La duplicación del signo implica
que a cada día sigue otro día, lo cual engendra la representación del
tiempo y, simultáneamente, puesto que se trata del mismo cielo que se
mueve con fuerza infatigable, la representación de la duración, plena de
fuerza, en el tiempo y más allá del tiempo, de un movimiento que jamás
se detiene ni se paraliza, así como los días se siguen unos a otros a
perpetuidad. Esta duración en el tiempo da la imagen de la fuerza tal
como le es propicia a lo Creativo.

El sabio extrae de ello el modelo según el cual deberá evolucionar hacia
una acción duradera. Ha de hacerse íntegramente fuerte, eliminando a
conciencia todo lo degradante, todo lo vulgar. Así adquiere la
infatigabilidad que se basa en ciclos completos de actividad.

LAS DIFERENTES LÍNEAS

Al comienzo un nueve significa:

Dragón cubierto. No actúes.

El dragón tiene en China un significado muy distinto del que le
corresponde en la concepción occidental. El dragón es el símbolo de la
energía móvil-eléctrica, fuerte e incitante, que se manifiesta en la
tormenta. En el invierno esta energía se retira al interior de la
tierra; con los comienzos del verano reinicia su acción y aparece en el
cielo como rayo y trueno. En consecuencia, también sobre la tierra se
movilizan entonces de nuevo las fuerzas creadoras.

Aquí esta fuerza creadora aparece cubierta todavía; estando bajo la
superficie de la tierra, todavía no actúa. Transferido a circunstancias
humanas, esto significa que un hombre importante aún no obtiene
reconocimiento. Ño obstante, permanece fiel a sí mismo. No permite que
influyan sobre él éxitos y fracasos exteriores. Antes bien, fuerte y
despreocupado, espera que llegue su hora.

Por lo tanto, alguien a quien le toca en suerte este trazo ha de
aguardar con tranquila y fuerte paciencia. Sin duda su tiempo se
cumplirá y llegará su día. No debe temerse que una fuerte voluntad pueda
no llegar a imponerse. Pero es necesario no gastar la energía antes de
tiempo en un intento de forzar la obtención de algo cuya hora todavía no
ha llegado.

Nueve en el segundo puesto significa:

Dragón que aparece sobre el campo.

Es propicio ver al gran hombre.

Aquí comienzan a mostrarse los efectos de la fuerza luminosa. Aplicado a
circunstancias humanas, esto significa que el gran hombre aparece en el
campo de su actividad; todavía no ocupa ninguna posición gobernante,
todavía se halla entre sus iguales, pero lo que lo distingue ante los
demás es su seriedad, su absoluta responsabilidad y el influjo que sin
esfuerzo consciente alguno ejerce sobre quienes lo rodean. Un hombre tal
está predestinado a llegar a tener gran influencia y a conducir el mundo
hacia el orden. Por eso es propicio verlo.

Nueve en el tercer puesto significa:

El noble es creativamente activo todo el día.

Aun por la noche lo embarga la preocupación interior.

Peligro. Ninguna tacha.

Al hombre importante se le abre un círculo de acción. Comienza a
difundirse su fama. Las multitudes se vuelcan a él. Su fuerza interior
se halla a la altura de la incrementada actividad exterior. Hay
muchísimo que hacer y aun hacia la noche, cuando ya otros descansan, se
acumulan los planes y las preocupaciones. En este momento del tránsito
desde lo bajo hacia las alturas aparece un peligro. Ya más de un hombre
grande encontró su perdición en el hecho de que las masas se volcaran a
él y lo arrastraran hacia sus propias vicisitudes. En tales casos la
ambición corrompe la pureza interior. Pero las tentaciones no hacen
mella a una verdadera grandeza. Si uno permanece alerta, en empatia con
los gérmenes del tiempo nuevo y sensible frente a sus requerimientos,
tendrá la suficiente cautela como para cuidarse de desviaciones y así
quedará sin tacha, sin defecto.

Nueve en el cuarto puesto significa:

Vacilante elevación sobre el precipicio. Ninguna tacha.

Aquí se ha alcanzado ese punto de la transición donde puede entrar en
acción la libertad. Una doble posibilidad se abre ante el hombre
importante: o bien elevarse de un salto y tener decisiva significación
en la vida en gran escala, o bien retirarse y cultivar su personalidad
en silencio: el camino del héroe o el del santo oculto. No existe
ninguna ley que decida cuál es el camino justo. Todo el que se encuentre
en semejante situación ha de decidirlo libremente de acuerdo con las
leyes más íntimas de su naturaleza. Si obra con entera veracidad y
consecuencia, encontrará el camino que le corresponde y éste será para
él la vía justa e intachable.

Nueve en el quinto puesto significa:

Dragón que vuela en el cielo.

Es propicio ver al gran hombre.

Aquí el gran hombre ha arribado a la esfera de los seres celestiales. Su
influjo se extiende, visible a lo lejos, sobre el mundo entero. Todo el
que lo contemple puede considerarse bienaventurado.

Kung Tse dice al respecto: “Aquello que armoniza en el tono, vibra de
consuno. Aquello que responde en el fuero más íntimo a afinidades
electivas, se busca recíprocamente. El agua fluye hacia lo húmedo, el
fuego se dirige hacia lo seco. Las nubes (aliento del cielo) siguen al
dragón; el viento (aliento de la tierra) sigue al tigre. Así, pues, se
levanta el sabio y todos los seres dirigen hacia él la mirada. Lo que es
oriundo del cielo se siente afín con lo que se halla en las alturas. Lo
que es oriundo de la tierra se siente afín con lo que está abajo. Cada
cosa sigue a su especie.”

Al tope un nueve significa:

Dragón soberbio tendrá que arrepentirse.

Cuando alguien pretende ascender tan alto que pierde el contacto directo
con el resto de los hombres, se torna solitario y esto, necesariamente,
conduce al fracaso. Hay aquí una advertencia contra la ambición titánica
que supera las propias fuerzas. Una brusca caída al abismo sería la
consecuencia.

Si se presentan solamente nueves, esto significa:

Aparece un conjunto de dragones sin cabeza. ¡Ventura!

Cuando todas las líneas son nueves, el signo entero entra en movimiento
y se transforma en el signo K’un, Lo Receptivo, cuyo carácter es la
ferviente entrega. Se unen la fortaleza de lo Creativo y la dulzura de
lo Receptivo. Lo fuerte está señalado por la grey de dragones, lo suave
por la circunstancia de que sus cabezas estén ocultas. Esto significa:
suavidad en el modo de actuar, unida a la fuerza de la resolución, trae
ventura.`

names[2] = `K’un / Lo Receptivo`

texts[2] = `arriba K’un, Lo Receptivo, la Tierra

abajo K’un, Lo Receptivo, la Tierra

Todas las líneas que componen el signo son trazos partidos. La línea
partida corresponde al principio primario umbrío, blando, receptivo del
Yin. La cualidad intrínseca del signo es la entrega ferviente, su imagen
es la tierra. Es la perfecta pieza complementaria de lo Creativo, su
contraparte, no lo opuesto; una complementación y no una hostilización.
Es la naturaleza frente al espíritu, la tierra frente al cielo, lo
espacial frente a lo temporal, lo femenino-maternal frente a lo
masculino-paternal. Empero, el fundamento de esta contraparte, aplicado
a circunstancias humanas, se encuentra no sólo en las relaciones entre
el hombre y la mujer, sino también entre el príncipe y el ministro o el
padre y el hijo; más aún, hasta en los individuos se halla esta dualidad
en la coexistencia de lo espiritual con lo sensual.

No obstante, no puede hablarse de un verdadero dualismo, pues entre
ambos signos subsiste la relación de una clara jerarquía. Desde luego,
lo Receptivo en sí mismo es tan importante como lo Creativo. Pero merced
a la cualidad de la entrega ferviente queda señalada la posición de esta
fuerza primaria frente a lo creativo: debe quedar bajo la guía de lo
creativo, recibiendo su estímulo, y así su efecto será venturoso,
únicamente cuando esta fuerza sale de su posición y pretende colocarse
junto a lo creativo en igualdad de condiciones, se torna maligna. Surge
en este caso el antagonismo y la lucha contra lo Creativo, de
consecuencias desventuradas para ambas partes.

EL DICTAMEN

Lo receptivo obra elevado éxito,

propiciante por la perseverancia de una yegua.

Cuando el noble ha de emprender algo y quiere avanzar,

se extravía; mas si va en seguimiento encuentra conducción.

Es propicio encontrar amigos al Oeste y al Sur,

evitar los amigos al Este y al Norte.

Una tranquila perseverancia trae ventura.

Las cuatro direcciones fundamentales de lo Creativo: “Elevado éxito
propiciante por la perseverancia”, se encuentran también como
calificación de lo Receptivo. Sólo que la perseverancia se define aquí
con mayor precisión como perseverancia de una yegua. Lo Receptivo
designa la realidad espacial frente a la posibilidad espiritual de lo
creativo. Cuando lo posible se vuelve real y lo espiritual se torna
espacial, se trata de un acontecimiento que se produce siempre merced a
un designio individual restrictivo. Esto queda indicado por el hecho de
que aquí a la expresión “perseverancia” se le añade la definición más
concreta “de una yegua”. El caballo le corresponde a la tierra así como
el dragón al cielo; en virtud de su infatigable movimiento a través de
la planicie simboliza la vasta espacialidad de la tierra. Se elige la
expresión “yegua” porque en la yegua se combinan la fuerza y velocidad
del caballo con la suavidad y docilidad de la vaca.

Únicamente porque está a la altura de lo que es esencial en lo Creativo,
puede la naturaleza realizar aquello a lo cual lo Creativo la incita. Su
riqueza consiste en el hecho de alimentar a todos los seres y su
grandeza en el hecho de otorgar belleza y magnificencia a todas las
cosas. Da así origen a la prosperidad de todo lo viviente. Mientras que
lo Creativo engendra las cosas, éstas son paridas por lo
Receptivo. Traducido a circunstancias humanas, se trata de
conducirse de acuerdo con la situación dada. Uno no se encuentra en
posición independiente, sino que cumple las funciones auxiliares.
Entonces es cuestión de rendir algo. No de tratar de conducir —pues así
uno solo se extraviaría— sino de dejarse conducir: en eso consiste la
tarea. Si uno sabe adoptar frente al destino una actitud de entrega,
encontrará con seguridad la conducción que le corresponde. El noble se
deja guiar. No avanza ciegamente, sino que deduce de las circunstancias
qué es lo que se espera de él, y obedece este señalamiento del destino.

Puesto que uno debe rendir algo, le hacen falta ayudantes y amigos a la
hora de la labor y del esfuerzo, una vez firmemente definidas las ideas
que deben convertirse en realidad. Esa época del trabajo y del esfuerzo
se expresa con la mención del Oeste y del Sur. Pues el Sur y el Oeste
constituyen el símbolo del sitio donde lo Receptivo trabaja para lo
Creativo, como lo hace la naturaleza en el verano y en el otoño; si en
ese momento no junta uno todas sus fuerzas, no llevará a término la
labor que debe realizar. Por eso, obtener amistades significa, en este
caso precisamente, encontrar el rendimiento. Pero aparte del trabajo y
del esfuerzo, también existe una época de planificación y ordenamiento;
ésta requiere soledad. El Este simboliza, el sitio donde uno recibe los
mandatos de su señor y el Norte el sitio donde se rinde cuentas sobre lo
realizado. Ahí es cuestión de permanecer solo y de ser objetivo. En esa
hora sagrada es necesario privarse de los compañeros a fin de que los
odios y favores de las partes no enturbien la pureza.

LA IMAGEN

El estado de la Tierra es la receptiva entrega.

Así el noble, de naturaleza amplia, sostiene al mundo externo.

Así como existe un solo Cielo, también existe una sola Tierra. Pero
mientras que en el caso del cielo la duplicación del signo significa
duración temporal, en el caso de la tierra equivale a la extensión
espacial y a la firmeza con que ésta sostiene y mantiene todo lo que
vive y actúa. Sin exclusiones, la tierra, en su ferviente entrega,
sostiene el bien y el mal. Así el noble cultiva su carácter haciéndolo
amplio, sólido y capaz de dar sostén de modo que pueda portar y soportar
a los hombres y las cosas.

LAS DIFERENTES LÍNEAS

Al comienzo un seis significa:

Cuando se pisa escarcha, se aproxima el hielo firme.

Así como la energía luminosa representa la vida, la fuerza sombría
representa la muerte. En el otoño, cuando se precipita la temprana
escarcha, sólo comienza a desplegarse la fuerza de la oscuridad y del
frío. Luego de los primeros indicios y conforme a leyes fijas, las
manifestaciones de la muerte se irán multiplicando paulatinamente hasta
que al fin se presente el rígido invierno con su hielo.

Exactamente lo mismo sucede en la vida. Cuando aparecen ciertas señales
apenas perceptibles de decadencia, la cosa continuará hasta que
finalmente se produzca el ocaso. Pero en la vida pueden tomarse
precauciones si se tienen en cuenta las señales de la decadencia y se
las encara a tiempo.

Seis en el segundo puesto significa:

Rectilíneo, rectangular, grande.

Sin propósito, y sin embargo nada queda que no se vea fomentado.

El Cielo tiene por símbolo el círculo, la Tierra el cuadrado
rectangular. Por lo tanto lo rectangular es una propiedad primaria de la
tierra. En cambio, el movimiento rectilíneo es primariamente una
propiedad de lo Creativo, al igual que el grandor. Todas las cosas
rectangulares, empero, tienen su raíz en la línea recta y forman a su
vez magnitudes físicas. Cuando en las matemáticas se discriminan líneas,
planos y cuerpos, de las líneas rectas resultan superficies
rectangulares y de las superficies rectangulares magnitudes cúbicas. Lo
Receptivo se orienta conforme a las cualidades de lo Creativo y las hace
suyas. Así una recta se convierte en un cuadrado y un cuadrado en un
cubo. Es esta la simple entrega a las leyes de lo creativo, sin
agregarles ni quitarles nada. De ahí que lo Receptivo no requiera ningún
propósito ni esfuerzo en particular, y todo se endereza.

La naturaleza engendra a los seres sin falsedad, he ahí su derechura; es
tranquila y silenciosa, he ahí su rectangularidad; no se niega a tolerar
a ninguno de los seres, he ahí su grandeza. Por eso, sin maquinación
externa ni propósitos particulares ella alcanza lo justo para todos.
Para el hombre es señal de suprema sabiduría lograr que sus actos sean
tan obvios como los de la naturaleza.

Seis en el tercer puesto significa:

Líneas ocultas; se es capaz de permanecer perseverante.

Si acaso sigues al servicio de un rey,

¡no busques obras, sino llévalas a cabo!

Si uno está libre de vanidad, podrá ocultar sus excelencias de modo que
no atraigan antes de tiempo la atención pública. Así podrá madurar en
silencio. Cuando las circunstancias lo requieran también podrá
destacarse en la vida pública. Él no busca hechos consumados que se le
acrediten como méritos; antes bien espera establecer causas activas,
vale decir que da cumplimiento a sus obras de tal modo que resulten
fructíferas para lo porvenir.

Seis en el cuarto puesto significa:

Bolsa atada. Ninguna tacha; ningún elogio.

Lo sombrío se abre al moverse y se cierra cuando reposa. Aquí se señala
la más rigurosa reserva. La época es peligrosa: toda ostentación
conduciría o bien a la hostilidad de adversarios sumamente poderosos si
uno se propusiera luchar contra ellos, o bien a un reconocimiento mal
entendido si uno se mostrara negligente. Así pues es cuestión de
enclaustrarse, ya sea en la soledad, ya sea en el torbellino mundanal;
porque también allí puede uno ocultarse perfectamente de modo que nadie
lo reconozca.

Seis en el quinto puesto significa:

Ropa interior amarilla trae elevada ventura.

El amarillo es el color de la tierra y del centro, el símbolo de lo
confiable y de lo auténtico. La ropa interior tiene adornos que no
llaman la atención: un símbolo de distinguida reserva. Cuando alguien
está llamado a actuar en una posición destacada mas no independiente, el
éxito verdadero dependerá de una máxima discreción. La autenticidad y
finura no deben destacarse directamente, sino manifestarse tan sólo
mediatamente como efecto que surge desde adentro.

Al tope un seis significa:

Dragones luchan en la pradera.

Su sangre es negra y amarilla.

En el puesto más alto lo sombrío debería retroceder ante lo luminoso. Si
pretende afirmarse en este puesto, que no le cuadra, y en vez de servir
pretende dominar, atrae sobre sí la ira de lo fuerte. Se produce la
lucha en la cual cae derribado, pero en esa lucha se perjudican sin
embargo ambas partes.

El dragón, símbolo del cielo, acude y combate al falso dragón cuya
imagen ha adoptado lo terreno en esta subida. El negro azulado es el
color del cielo, el amarillo es el color de la tierra. Cuando se
derrama, pues, sangre negra y amarilla, es señal de que debido a esta
lucha, que no es natural, ambas fuerzas fundamentales sufren daño.

Cuando aparecen puros seis, significa:

Es propicia una constante perseverancia.

Cuando se presentan puros seis, el signo de lo Receptivo se transforma
en el signo de lo Creativo. Adquiere así la fuerza de la duración en el
mantenimiento de lo recto. Si bien no hay ningún progreso en ello,
tampoco hay retroceso alguno.`

names[3] = `Chun / La Dificultad Inicial`

texts[3] = `arriba K’an, Lo Abismal, el agua

abajo Chen, Lo Suscitativo, el trueno

El nombre del signo, Chun, representa en verdad una brizna de hierba
que, al brotar de la tierra, se topa con un obstáculo. De ello resulta
el significado de dificultad inicial. El signo señala cómo Cielo y
Tierra producen los seres individuales. Es el primer encuentro entre
ambos y se ve afectado por dificultades. El trigrama de abajo, Chen, es
Lo Suscitativo, lo excitativo; su movimiento se dirige hacia arriba;
tiene por imagen al trueno. El trigrama de arriba, K’an, es Lo Abismal,
lo peligroso; su movimiento se dirige hacia abajo; tiene por imagen la
lluvia. La situación indica, pues, una densa, caótica plenitud. Trueno y
lluvia ocupan el aire. Pero el caos va aclarándose. El movimiento, que
va hacia arriba, mientras lo abismal desciende, encuentra finalmente una
salida del peligro. La tensión de las fuerzas se descarga en tormenta y
todas las cosas respiran con alivio.

EL DICTAMEN

La Dificultad Inicial obra elevado éxito.

Propicio en virtud de la perseverancia.

No debe emprenderse nada.

Es propicio designar ayudantes.

En los períodos de formación suele haber dificultades. Es como si se
tratase de un parto primerizo. Tales dificultades, empero, surgen de la
plenitud de aquello que se debate por

lograr su forma. Todo se halla en movimiento y por eso, a pesar del
peligro existente, hay perspectivas de éxito grande siempre que se
persevere en procura del mismo. Cuando semejantes épocas iniciales
aparecen como destino, todo se encuentra todavía informe y oscuro. Por
lo tanto es preciso aguardar, pues todo intento prematuro de echar mano
podría acarrear el fracaso. Es asimismo de suma importancia no
permanecer solo. Hace falta disponer de ayudantes para poder dominar el
caos mediante un esfuerzo mancomunado con ellos. Sin embargo, esto no
quiere decir que uno mismo ha de quedarse contemplando inactivo los
sucesos; más bien es necesaria la propia intervención, estando uno
presente en todo y contribuyendo con su estímulo y conducción.

LA IMAGEN

Nubes y trueno: la imagen de La Dificultad Inicial.

Así el noble actúa desenmarañando y ordenando.

Las nubes y el trueno se representan mediante ciertas ornamentaciones
lineales, vale decir que dentro del caos de La Dificultad Inicial ya
están dados los gérmenes del orden. Así, en tales épocas iniciales, el
noble debe estructurar y ordenar la inabarcable y confusa plenitud, tal
como van devanándose las hebras de una madeja de seda y uniéndose en
hilos. Para encontrarse en lo infinito es menester discriminar y
unir.

LAS DIFERENTES LÍNEAS

Al comienzo un nueve significa:

Vacilación y traba.

Es propicio permanecer perseverante.

Es propicio designar ayudantes.

Si en los comienzos de una empresa tropieza uno con trabas, no debe
tratar de forzar el progreso; más bien será necesario detenerse, por
precaución. Sin embargo, no debe uno permitir que lo confundan: es
preciso no perder de vista la meta de un modo perseverante, duradero.
Tendrá importancia que uno se procure adecuados medios auxiliares o
asistentes. Éstos se encuentran únicamente cuando uno se muestra ante
los hombres y en el trato con ellos modesto, carente de presunción. Sólo
así se obtendrá la adhesión de aquéllos con cuya ayuda podrá hacerse
frente a las dificultades.

Seis en el segundo puesto significa:

Se apilan dificultades. Caballo y carro se separan.

Él no es un raptor,

va a cortejar en el debido plazo.

La doncella es casta, no se promete.

Diez años, luego promete.

Se halla uno trabado y en dificultades. Y entonces, de pronto, se
produce un cambio: es como si arribara alguien con carruaje y caballos y
desenganchara. Este suceso ocurre tan sorpresivamente que suscita la
sospecha de que el hombre que se acerca ha de ser un bandido. Poco a
poco uno comprueba que el otro no abriga malas intenciones, sino que
viene en procura de una alianza amistosa y ofreciendo alivio. Sin
embargo, ese ofrecimiento no es aceptado, puesto que no procede de donde
debe proceder; parece preferible esperar hasta que se cumpla el plazo:
diez años representan un período redondo, un plazo cumplido. Entonces
retornan por sí mismas las condiciones normales y es dable reunirse con
ese amigo que a uno le está destinado.

Bajo el símbolo de una novia que en medio de graves conflictos permanece
fiel a su amado, se brinda un consejo para esta peculiar situación de la
vida: Cuando en épocas de dificultad, encontrándose uno trabado,
impedido, recibe inesperadamente un ofrecimiento de alivio de parte de
alguien con quien no mantiene relaciones, ha de proceder con cautela,
tratando de no entrar en eventuales compromisos como consecuencia de tal
ayuda, pues de no proceder así se vería uno disminuido en su libertad de
decisión. Si uno aguarda a que llegue el momento adecuado, retornarán
las circunstancias tranquilas y se alcanzará lo que se espera.

Seis en el tercer puesto significa:

El que caza al ciervo sin guardamonte,

lo único que logra es extraviarse en el bosque.

El noble capta los signos del tiempo

y prefiere desistir.

Continuar acarrea humillación.

Si uno no dispone de un guía y pretende cazar en un bosque desconocido,
se extravía. No se debe pretender escapar a hurtadillas,
irreflexivamente y sin guía, de las dificultades en que uno se ve
envuelto. El destino no se deja engañar. Afanarse prematuramente y con
precipitación, y careciendo de la necesaria conducción, acarrea fracasos
y vergüenza. Por eso el noble que reconoce los gérmenes de lo venidero,
preferirá renunciar a un deseo, a atraer sobre sí el fracaso y la
humillación si tratara de lograr a la fuerza el cumplimiento de ese
deseo.

Seis en el cuarto puesto significa:

Caballo y carro se separan.

¡Busca la unión!

Acudir trae ventura.

Todo obra de un modo propicio.

Se encuentra uno en una situación en la cual se impone el deber de
actuar y sin embargo las fuerzas no son suficientes para ello. Se
presenta, empero, la oportunidad de encontrar compañía. Es cuestión,
pues, de echarle mano. Es necesario no dejarse trabar por un falso
orgullo. Será una señal de claridad interior si uno vence su amor propio
y da el primer paso, aun cuando eso requiera cierta abnegación. Cuando
alguien se ve en una situación difícil no es vergüenza aceptar ayuda, y
si uno realmente encuentra al ayudante adecuado todo irá bien.

Nueve en el quinto puesto significa:

Dificultades en bendecir.

Pequeña perseverancia trae ventura.

Gran perseverancia trae desventura.

La situación en que uno se encuentra no da posibilidad alguna de
evidenciar las buenas intenciones como para que realmente se manifiesten
y sean comprendidas. Hay quienes se entrometen y deforman todo lo que
uno hace. En un caso así es preciso ser cauteloso y proceder paso a
paso. No es posible pretender imponer a la fuerza una obra grandiosa,
pues tal cosa sólo se logra cuando ya se goza de una confianza unánime.
Sólo en silencio, mediante una labor fiel y escrupulosa, puede actuarse
paulatinamente, en el sentido de lograr que se esclarezcan las
circunstancias y se anulen las trabas.

Al tope un seis significa:

Caballo y carro se separan.

Lágrimas de sangre se derraman.

Hay personas a quienes las dificultades iniciales se les tornan graves
en exceso. Ellos se atascan y ya no encuentran salida alguna. Se quedan
con los brazos caídos y abandonan la lucha. Semejante resignación es de
lo más triste que pueda darse. Por eso, Kung Tse anota al respecto la
siguiente observación: “Se derraman lágrimas de sangre: es algo que no
debe hacerse duraderamente.”`

names[4] = `Meng / La Necedad Juvenil`

texts[4] = `arriba Ken, El Aquietamiento, la montaña

abajo K’an, Lo Abismal, el agua

Por dos vías mueve este signo a pensar en la juventud y en la necedad.
El trigrama de arriba, Ken, tiene por imagen la montaña; la imagen del
de abajo, K’an, es el agua. La fuente que brota al pie de la montaña da
la imagen de juventud inexperta. El atributo del signo superior es el
aquietamiento, el del inferior es el abismo, el peligro. El quedarse
quieto frente a un peligroso abismo es, además, símbolo de la
desconcertada necedad de la juventud. Pero ambos signos implican, por
otra parte, el camino de cómo superar las necedades juveniles: el agua
necesariamente sigue su curso fluyendo; al emerger el manantial, de
buenas a primeras no sabe, claro está, hacia dónde dirigirse, pero con
su constante fluir va rellenando los sitios que le impiden el progreso,
y así obtiene el éxito.

EL DICTAMEN

La Necedad Juvenil tiene éxito.

No soy yo quien busca al joven necio,

el joven necio me busca a mí.

Al primer oráculo doy razón.

Si pregunta dos, tres veces, es molestia.

Cuando molesta no doy información.

Es propicia la perseverancia.

En la juventud la necedad no es nada malo. A pesar de todo, puede
incluso lograr el éxito. Sólo que es preciso dar con un maestro experto,
y enfrentarse con él del modo debido. Para ello hace falta, en primer
lugar, que uno mismo advierta su propia inexperiencia y emprenda la
búsqueda de un maestro. Únicamente semejante modestia y diligencia
acreditarán la necesaria disposición receptiva, que habrá de
manifestarse en un devoto reconocimiento hacia el maestro.

Así, pues, el maestro debe esperar, tranquilamente, hasta que se acuda a
él. No debe brindarse espontáneamente. Sólo así la enseñanza podrá
llevarse a cabo a su debido tiempo y del modo que corresponde.

La respuesta que da el maestro a las preguntas del discípulo ha de ser
clara y concreta, como la respuesta que desea obtener del oráculo un
consultante. Siendo así, la respuesta deberá aceptarse como solución de
la duda, como decisión. Una desconfiada o irreflexiva insistencia en la
pregunta sólo sirve para incomodar al maestro y lo mejor que éste podrá
hacer es pasarla por alto en silencio, de modo parecido a como también
el oráculo da una sola respuesta y se niega ante preguntas que denotan
duda o que intentan ponerlo a prueba.

Cuando a ello se agrega la perseverancia, que no cesa hasta que uno se
haya apropiado del saber punto por punto, se tendrá asegurado un hermoso
éxito.

El signo da, pues, consejos tanto al que enseña como al que aprende.

LA IMAGEN

En lo bajo, al pie de la montaña, surge un manantial:

la imagen de la juventud.

Así el noble, mediante su actuación escrupulosa, sustenta su carácter.

El manantial logra fluir y superar la detención rellenando todos los
sitios huecos que encuentra en el camino. Del mismo modo el camino hacia
la formación del carácter es la escrupulosidad que no saltea nada sino
que paulatina y constantemente rellena todos los huecos como el agua,
logrando así avanzar.

LAS DIFERENTES LÍNEAS

Al comienzo un seis significa:

Con el fin de desarrollar al necio

es propicio disciplinar al hombre.

Deben quitarse las trabas.

Continuar así trae humillación.

Al comienzo de la educación debe regir la ley. La inexperiencia de la
juventud se inclina, por lo pronto, a tomar las cosas con negligencia y
como si se tratara de un juego. Debe enseñársele entonces la seriedad de
la vida. Una cierta auto-sujeción obtenida por la fuerza con rígida
disciplina, es adecuada. El que sólo juega con la vida nunca llega a
buen término. Pero la disciplina no debe degenerar en un ejercicio de
amaestramiento. El amaestramiento continuado resulta humillante y
paraliza la energía.

Nueve en el segundo puesto significa:

Soportar a los necios con benevolencia trae ventura.

Saber tomar a las mujeres trae ventura.

El hijo es apto para administrar la casa.

Se alude aquí a un hombre que no tiene poder externo, pero sí la
necesaria fuerza espiritual para sobrellevar la responsabilidad que pesa
sobre él. Posee la superioridad y fuerza interior necesarias para poder
soportar con bondad las insuficiencias de la necedad humana. La misma
actitud cabe frente a las mujeres, en cuanto sexo más débil. Hay que
saber cómo tomarlas y con cierta caballeresca indulgencia mostrarles
reconocimiento. Únicamente en virtud de tal alianza entre la fuerza
interior y la discreción exterior podrá uno cargar sobre sí la
responsabilidad de conducir un organismo social de cierta importancia,
obteniendo un éxito real.

Seis en el tercer puesto significa:

No has de tomar una muchacha

que ve a un hombre de bronce

y ya no es dueña de sí misma.

Nada es propicio.

Un hombre débil, inexperto, que ambiciona ascender, pierde fácilmente su
modalidad propia cuando se topa con una fuerte personalidad que ocupa
una posición alta y a la que imita como un esclavo. Se asemeja a una
muchacha que se abandona y se entrega al encontrarse con un hombre
fuerte. No debe uno mostrarse solícito frente a semejante acercamiento
forzado.

Tal solicitud no sería buena ni para el adolescente ni para el educador.

Una muchacha, cuidando su dignidad, debe esperar a que se la corteje. En
ambos casos, es indigno que uno se ofrezca a sí mismo; tampoco es bueno
aceptar semejante ofrecimiento.

Seis en el cuarto puesto significa;

Necedad con cortedad trae humillación.

Lo más desesperanzado para la necedad juvenil es enredarse en huecas
fantasías. Cuanto mayor sea la terquedad con que se aferre a tales
imaginaciones apartadas de la realidad, con tanta mayor certeza atraerá
humillaciones sobre sí.

Frente a la necedad corta de alcances el educador no tendrá a menudo más
remedio que abandonarla, durante un tiempo, a sí misma, sin ahorrarle la
humillación que le acarreará su comportamiento. Éste será entonces el
único camino para su salvación.

Seis en el quinto puesto significa:

Necedad infantil aporta ventura.

Un hombre inexperto que de manera infantil y sin pretensiones busca
enseñanza, tiene todo a su favor. Pues quien, libre de soberbia, se
subordina al maestro, se verá estimulado con toda seguridad.

Al tope un nueve significa:

Al castigar la necedad no es propicio

cometer abusos.

Sólo es propicio defenderse de abusos.

Hay circunstancias que obligan a que un necio incorregible sea
castigado. Quien no escarmienta, ha de sentir las consecuencias en carne
propia. Este castigo difiere del sacudimiento usado al comienzo. Pero el
castigo no debe aplicarse con ira; antes bien ha de limitarse a un
rechazo objetivo de abusos injustificados. El castigo no es jamás un fin
en sí mismo; únicamente debe servir para que se establezcan condiciones
de orden.

Esto vale tanto aplicado a la educación como a las medidas que toma un
gobierno frente a una población que se ha hecho culpable de
transgresiones y abusos. La intervención del gobierno ha de ser siempre
únicamente defensiva, teniendo como único fin el establecimiento de la
seguridad y la tranquilidad públicas.`

names[5] = `Hsü / La Espera (La Alimentación)`

texts[5] = `arriba K’an, Lo Abismal, el agua

abajo Ch’ien, Lo Creativo, el Cielo

Todos los seres necesitan del alimento que procede de arriba. Pero la
donación de la comida tiene su tiempo que debe aguardarse. El signo
muestra las nubes en el cielo, dispensadoras de la lluvia que a su vez
alegra toda vegetación y procura al hombre comida y bebida. Esta lluvia
llegará a su hora. No es posible forzarla, hay que aguardarla. Sugieren
la idea de la espera las cualidades de los dos signos primarios: en lo
interior fortaleza, delante de ella peligro, la fuerza frente al
peligro no se precipita, sino que está en condiciones de esperar,
mientras que la debilidad frente al peligro se excita y se agita y no
posee la paciencia necesaria para esperar.

EL DICTAMEN

La espera.

Si eres veraz, tendrás luz y éxito.

La perseverancia trae ventura.

Es propicio atravesar las grandes aguas.

La espera no es una esperanza vacua. Alberga la certidumbre interior de
alcanzar su meta. Sólo tal certidumbre interior confiere la luz, que es
lo único que conduce al logro y finalmente a la perseverancia que trae
ventura y provee la fuerza necesaria para cruzar las grandes aguas.

Alguien afronta un peligro y debe superarlo. La debilidad y la
impaciencia no logran nada. Únicamente quien posee fortaleza domina su
destino, pues merced a su seguridad interior es capaz de aguardar. Esta
fortaleza se manifiesta a través de una veracidad implacable. Únicamente
cuando uno es capaz de mirar las cosas de frente y verlas como son, sin
ninguna clase de autoengaño ni ilusión, va desarrollándose a partir de
los acontecimientos la claridad que permite reconocer el camino hacia el
éxito. Consecuencia de esta comprensión ha de ser una decidida actuación
perseverante; pues sólo cuando uno va resueltamente al encuentro de su
destino, podrá dominarlo. Podrá entonces atravesar las grandes aguas,
vale decir tomar una decisión y triunfar sobre el peligro.

LA IMAGEN

En el cielo se elevan nubes: la imagen de La Espera.

Así come y bebe el noble y permanece sereno y de buen humor.

Cuando las nubes se elevan en el cielo es señal de que va a llover. En
tales circunstancias no puede hacerse ninguna otra cosa más que esperar,
hasta que se precipite la lluvia. Lo mismo ocurre en la vida, en
momentos en que se va preparando el cumplimiento de un designio.
Mientras no se cumpla el plazo no hay que preocuparse pretendiendo
configurar el porvenir con intervenciones y maquinaciones personales;
antes bien es menester concentrar tranquilamente, mediante el acto de
comer y beber, las energías necesarias al cuerpo, y mediante la
serenidad y el buen humor, las que requiere el espíritu. El destino se
cumple enteramente por sí solo, y para entonces uno se encuentra
dispuesto.

LAS DIFERENTES LÍNEAS

Al comienzo un nueve significa:

Esperar en la pradera.

Es propicio permanecer en lo duradero.

Ningún defecto.

El peligro todavía se halla lejos. Todavía se encuentra uno esperando en
medio de una vasta llanura. Todavía las circunstancias son simples. Sólo
se siente en la atmósfera algo que anuncia lo que está por llegar. En
tal caso es necesario conservar las normas regulares de la vida mientras
sea posible. Únicamente así se preservará uno de una prematura
dispersión de sus fuerzas y quedará libre de tacha y error, factores que
implicarían un futuro debilitamiento.

Nueve en el segundo puesto significa:

La espera en la arena.

Hay alguna habladuría.

El final aporta ventura.

Paulatinamente el peligro viene aproximándose. La arena se halla cerca
de la orilla del río que representa el peligro. Comienzan a aparecer
incompatibilidades. En momentos así surge fácilmente la inquietud
general. Hay inculpaciones recíprocas. Quien en tales momentos permanece
sereno logrará que finalmente todo marche bien. Toda difamación tendrá
que enmudecer al fin, al no verse complacida por réplicas que demuestran
que uno se siente ofendido.

Nueve en el tercer puesto significa:

La Espera en el fango

da lugar a la llegada del enemigo.

El fango, ya lamido y humedecido por el agua del río, no es un sitio
favorable para la espera. En lugar de juntar fuerzas suficientes para
poder cruzar las aguas de un tirón, uno ha arremetido, con prematuro
ímpetu, valiéndose de un impulso cuya fuerza alcanza no más que para
llegar al fango. Semejante situación desfavorable atrae a los enemigos
de afuera, que naturalmente aprovechan las circunstancias. Únicamente
con seriedad y precaución podrá uno preservarse de perjuicios.

Seis en el cuarto puesto significa:

La Espera en la sangre.

¡Fuera del agujero!

La situación es en extremo peligrosa. Se ha vuelto gravemente seria: es
cuestión de vida o muerte. Hay en cierne un inminente derramamiento de
sangre. Uno no puede ni avanzar ni retroceder y se encuentra aislado
como en un hoyo, un agujero. Entonces es simplemente necesario aguardar,
dejar que el destino se cumpla. Esta tranquilidad, destinada a impedir
que actos propios agraven más aún el daño, es el único camino para salir
del peligroso agujero.

Nueve en el quinto puesto significa:

Esperar junto al vino y la comida.

La perseverancia trae ventura.

También en medio del peligro hay pausas de tranquilidad y recreo durante
las cuales las cosas van relativamente bien. Poseyendo uno la debida
fortaleza interior, aprovechará esos períodos de descanso a fin de
fortalecerse para una nueva lucha. Será entonces capaz de disfrutar del
momento sin dejarse desviar de su meta, pues para afirmarse en la
victoria se requiere perseverancia.

Lo mismo acontece en la vida pública. No es posible lograr todo de
buenas a primeras. Hay una suprema sabiduría en consentir a la gente
tales pausas de recreo, que vivifican la alegre disposición para el
trabajo destinado a llevar a cabo la obra. Aquí yace oculto el secreto
de todo este hexagrama. Difiere éste del signo llamado “El Obstáculo”,
por el hecho de que durante la espera se siente uno seguro en lo que
hace y no permite por lo tanto que nada lo prive de la calma propia de
la serenidad interior.

Al tope un seis significa:

Uno cae en el agujero.

arriban entonces tres huéspedes no convidados.

Hónralos y al fin llegará la ventura.

La espera ha pasado: el peligro ya no puede eludirse. Uno cae en el
agujero y debe aceptar lo inevitable. Todo parece haberse hecho en vano.
Pero precisamente en virtud de esta emergencia se introduce un cambio
imprevisto. Sin que uno haga nada se produce desde afuera una
intromisión que, en el primer momento, puede inspirar dudas en cuanto a
las intenciones implicadas: no se sabe si lo que trae es salvación o
destrucción. En tales momentos es cuestión de permanecer mentalmente
ágil. Lo que corresponde no es el encerrarse en sí mismo, con terquedad
y rechazo, sino una respetuosa acogida del nuevo cambio. Así por fin
saldrá uno del peligro y todo marchará bien. También los cambios felices
llegan a menudo de un modo que, en el primer momento, nos parece
extraño.`

names[6] = `Sung / El Conflicto (El Pleito)`

texts[6] = `arriba Ch’ien, Lo Creativo, el Cielo

abajo K’an, Lo Abismal, el agua

El signo primario superior, cuya imagen es el cielo, orienta su
movimiento hacia arriba; el signo primario inferior —agua—, conforme a
su naturaleza tiende hacia abajo. Los rumbos de movimiento de las dos
mitades divergen y esto da por resultado la idea de conflicto.

Cualidad de lo creativo es la fuerza, la energía; la de lo abismal es el
peligro, la astucia. Allí donde la astucia se enfrenta con la fuerza
violenta, hay querella, conflicto.

Una tercera deducción, referida al carácter, se impone en virtud del
enlace de una insondable, abismal astucia en lo interior con una
enérgica decisión en lo exterior. Un carácter semejante será seguramente
pendenciero.

EL DICTAMEN

El conflicto: eres veraz y te frenan.

Detenerse con cautela a mitad de camino trae ventura.

Ir hasta el fin trae desventura.

Es propicio ver al gran hombre.

No es propicio atravesar las grandes aguas.

El conflicto surge cuando alguien, sintiendo que está en su buen
derecho, se topa con resistencias. Sin esa convicción de que uno está en
su derecho, la resistencia conduce a la astucia o a la transgresión
violenta, y no al pleito abierto.

Cuando uno se halla envuelto en un pleito, lo único que podrá traerle
salvación es una vigorosa y firme serenidad, dispuesta en todo momento a
la conciliación del pleito, al arreglo a mitad de camino. Continuar la
querella hasta su amargo fin acarrea malas consecuencias, aun cuando uno
concluya teniendo razón, puesto que en tal caso se perpetúa la
enemistad. Es importante ver al gran hombre, vale decir a un hombre
imparcial, cuya autoridad sea suficiente como para solucionar el pleito
en forma pacífica o bien para fallar con justicia. Por otra parte, en
tiempos de discordia es preciso evitar “atravesar las grandes aguas”,
vale decir iniciar empresas riesgosas, pues éstas, si han de tener
éxito, requieren una real unificación de fuerzas. El conflicto en lo
interior paraliza la fuerza necesaria para triunfar sobre el peligro en
lo exterior.

LA IMAGEN

Cielo y agua se mueven en sentido contrario:

la imagen del conflicto.

Así el noble, en todos los negocios que realiza,

reflexiona debidamente sobre su comienzo.

La imagen indica que las causas del conflicto residen en las
orientaciones opuestas, ya previamente existentes, de ambas partes. Una
vez que aparecen tales direcciones divergentes necesariamente se origina
en ellas el conflicto. Se infiere entonces que a fin de precaver el
conflicto conviene pensar cuidadosamente en todo desde el mismo
comienzo. Cuando se establecen claramente derechos y deberes, o si en
una asociación humana convergen las orientaciones espirituales, la causa
del conflicto queda de antemano eliminada.

LAS DIFERENTES LÍNEAS

Al comienzo un seis significa:

Si uno no perpetúa la cuestión

habrá un poco de chismorreo.

Al cabo llega la ventura.

Mientras el conflicto se halla todavía en su comienzo incipiente lo
mejor que puede hacerse es abandonarlo. Sobre todo frente a un
adversario más fuerte no es aconsejable dejar que las cosas avancen
hasta producirse el debate del pleito. Tal vez se llegue así a un breve
cambio de palabras, pero finalmente todo irá bien.

Nueve en el segundo puesto significa:

Uno no puede pleitear, retorna a su casa y lo elude.

Las gentes de su ciudad, trescientas casas,

quedan libres de culpa.

En la lucha con un adversario superior, la retirada no es ninguna
vergüenza. El retirarse a tiempo evita malas consecuencias. Si instigado
por un falso amor propio, uno promoviera el conflicto, provocaría su
propia desgracia. En un caso semejante, una sabia transigencia redunda
en bien de todo el vecindario que, de esta manera, no se verá arrastrado
al conflicto.

Seis en el tercer puesto significa:

Nutrirse de antigua virtud da perseverancia.

Peligro, al cabo llega la ventura.

Si acaso sigues obediente al servicio de un rey,

no busques obras.

Hay aquí una advertencia acerca del peligro que implica la propensión al
arrebato. Sólo lo que uno se ha ganado honradamente, en virtud de
méritos previos, constituye una posesión duradera. Semejante posesión
puede por cierto sufrir ataques ocasionales, mas puesto que se trata de
real propiedad, no puede ser objeto de un robo. Pues no puede perderse
lo que a uno le corresponde merced al poder de su propia naturaleza.
Cuando uno entra al servicio de un superior, el conflicto sólo puede
evitarse si uno no se propone realizar obras para hacer mérito; bastará
que éstas se hagan. El honor de hacerlas bien puede dejársele al otro.

Nueve en el cuarto puesto significa:

Uno no puede pleitear,

se vuelve y acata el destino,

cambia, y encuentra paz en la perseverancia.

¡Ventura!

Al principio, una actitud interior que no halla sosiego. Uno no se
siente cómodo en la situación en que se encuentra y quisiera pleitear
para procurarse una mejor situación. Tiene que habérselas con un
adversario más débil y estaría por lo tanto perfectamente capacitado
para hacerlo —he aquí una diferencia en comparación con “nueve en el
segundo puesto”—, sin embargo, pleitear no le resulta, porque no
hallando para ello justificación interior, su conciencia no se lo
permite. Por lo tanto opta por volverse atrás y se conforma con su
destino. Modifica su actitud y encuentra paz duradera en la armonía con
la ley eterna. Esto aporta ventura.

Nueve en el quinto puesto significa:

Pleitear ante él trae elevada ventura.

Aparece aquí el componedor del pleito; es poderoso y justo y dispone de
la fuerza necesaria para imponer el derecho. En sus manos puede dejarse
un litigio con toda confianza. Si uno tiene razón y está en su derecho
obtendrá gran ventura.

Al tope un nueve significa:

Aun cuando acaso a alguien se le otorgue un cinturón de cuero,

al terminar la mañana le será arrancado tres veces.

Aquí se describe a una persona que ha llevado el pleito hasta su amargo
fin haciendo valer su razón. Se le confiere una distinción. Pero esta
dicha no es duradera. La atacarán una y otra vez, y un conflicto sin fin
será la consecuencia.`

names[7] = `Shih / El Ejército`

texts[7] = `arriba K’un, Lo Receptivo, la Tierra

abajo K’an, Lo Abismal, el agua

Este signo se compone de los signos primarios K’an, el agua, y K’un, la
tierra. Se simboliza así el agua subterránea que va juntándose en lo
interior de la tierra. Del mismo modo se reúnen las fuerzas del ejército
en medio de la multitud de un pueblo: invisibles en la paz, pero
disponibles en todo momento como fuente de poder. Los atributos de los
signos primarios son: en lo interior peligro y en lo exterior
obediencia. Esto indica la naturaleza del ejército, que en su esencia
más intima es una entidad peligrosa, mientras que en su manifestación
exterior debe reinar la disciplina y la obediencia.

Desde el punto de vista de las líneas individuales, el rector del signo
es el fuerte “nueve en el segundo puesto” al que se subordinan los demás
trazos, todos blandos. Esta línea designa al mandatario, ya que ocupa el
centro de uno de los dos signos primarios. Pero como se ubica en el de
abajo y no en el de arriba, no representa la imagen del soberano, sino
la del hábil general que mantiene al ejército en obediencia gracias a su
autoridad.

EL DICTAMEN

El ejército requiere perseverancia y un hombre fuerte.

Ventura sin falla.

El ejército constituye una masa que, para convertirse realmente en
ejército, requiere organización. Nada se puede lograr sin una firme
disciplina. Mas esta disciplina no es posible obtenerla a la fuerza y
con medios violentos, sino que reclama a un hombre fuerte al cual se
vuelquen los corazones y que despierte entusiasmo. Éste, para poder
desplegar sus dotes, debe contar con la confianza incondicional de su
soberano, quien ha de dejar en sus manos la plena responsabilidad
mientras dure la guerra. Pero una guerra es siempre una empresa riesgosa
que acarrea daños y devastación. Por eso no se la debe iniciar con
ligereza; únicamente debe recurrirse a ella como se apela a un remedio
venenoso, y en última instancia. Un conductor experto ha de explicarle
al pueblo con toda claridad la causa justa y presentarle un objetivo de
guerra evidente y comprensible. Sólo si existe un objetivo perfectamente
determinado, por el cual el pueblo sea capaz de jugarse conscientemente,
nacen la unanimidad y la fortaleza de la convicción que conducen a la
victoria. Pero el guía también debe cuidar de que en medio de la pasión
guerrera y de la embriaguez del triunfo no se produzcan hechos injustos
que no merecerían la aprobación general. La justicia y la perseverancia
son las condiciones fundamentales para que todo marche bien.

LA IMAGEN

En medio de la tierra hay agua: la imagen del ejército.

Así el noble, en virtud de su magnanimidad para con el pueblo,

acrecienta sus multitudes.

El agua subterránea permanece invisible en medio de la tierra. Así
también el poder guerrero del pueblo se oculta invisible en sus
multitudes.

Cada campesino, cuando amenaza el peligro, se convierte en soldado y al
término de la guerra retorna a su puesto junto al arado. Quien se
muestra magnánimo con el pueblo conquista su amor, y el pueblo que vive
bajo un régimen benigno se torna fuerte y poderoso. Únicamente un pueblo
con una sólida economía puede tener relevancia en cuanto potencia
bélica. Debe cultivarse, pues, esa potencia fomentándose las relaciones
económicas del pueblo, mediante un gobierno humanitario. Únicamente si
existe este lazo invisible entre gobierno y pueblo, que hace que el
pueblo se sienta albergado como el agua subterránea en la tierra, es
posible conducir una guerra victoriosamente.

LAS DIFERENTES LÍNEAS

Al comienzo un seis significa:

Un ejército ha de partir en perfecto orden.

Cuando no es bueno el orden, amenaza la desventura.

Al iniciarse una empresa bélica es necesario que reine el orden. Debe
haber una causa justa y convincente, y la obediencia y la estructuración
de las tropas deben organizarse perfectamente, pues en caso contrario el
fracaso será la inevitable consecuencia.

Nueve en el segundo puesto significa:

¡En medio del ejército!

¡Ventura! ¡Ninguna falla!

El rey confiere un triple galardón.

El conductor debe hallarse en medio de su ejército. Debe sentirse en
contacto con él y compartir con las multitudes a las que conduce tanto
lo bueno como lo malo. Sólo de este modo hará justicia a la grave
responsabilidad que pesa sobre él. Para ello le es necesario el
reconocimiento del soberano. Las distinciones que obtiene son
justificadas, ya que no son fruto de una preferencia personal; antes
bien se honra en la persona del conductor a todo el ejército en cuyo
medio él permanece.

Seis en el tercer puesto significa:

Acaso el ejército conduzca cadáveres en el carruaje. ¡Desventura!

Una de las explicaciones pertinentes señala una derrota, en razón de
haberse inmiscuido en la conducción alguien que no es el guía
predestinado. Otra explicación existente coincide, en su sentido, con la
anterior, sólo que la expresión “conducir cadáveres en el carruaje” se
interpreta de otra manera. En ocasión de los sepelios y sacrificios
mortuorios se observaba en China una costumbre por la cual el extinto, a
quien se ofrendaba en sacrificio, era representado por un niño varón de
la familia, sentado en el sitio destinado al cadáver, y al que se
honraba en reemplazo del extinto. De ahí la mencionada explicación
deriva la interpretación según la cual en el carruaje en cuestión va
sentado un “niño cadáver”, vale decir que la autoridad no es ejercida
por quien corresponde, sino que hay otros que la usurpan. Tal vez toda
la dificultad pueda obviarse mediante la suposición de un error de
escritura (fan = todos, en lugar de shi = cadáver). En tal caso el
sentido sería sin más: si acaso la multitud se hace dueña del ejército
(viajando en el carruaje), las consecuencias serán desventuradas.

Seis en el cuarto puesto significa:

El ejército se retira. No hay falla.

Si uno se enfrenta con un enemigo superior, con el cual la lucha no
tendría perspectiva alguna de éxito, una retirada en orden será lo único
adecuado, pues así el ejército se preservará de la derrota y la
disolución. No es de ninguna manera señal de coraje o fuerza empecinarse
en librar, cueste lo que cueste, un combate sin esperanza de éxito.

Seis en el quinto puesto significa:

En el campo hay un montaraz. Es propicio apresarlo.

No hay falla.

Conduzca el de más avanzada edad el ejército.

El más joven conduce cadáveres;

así la perseverancia acarrea desventura.

El animal salvaje se halla en el campo; vale decir, abandonó su morada,
el monte, y ha irrumpido en los campos devastándolos. Esto alude a la
irrupción del enemigo. En tal caso se justifica plenamente la lucha
enérgica y la punición. Pero el combate debe conducirse de acuerdo con
todas las reglas. No ha de convertirse en un turbulento caos donde cada
cual se defiende como puede. Esto, aun con máxima perseverancia y
valentía, llevaría a la desventura. Bien al contrario, el ejército ha de
ser guiado por un experto conductor. Es necesario llevar adelante una
acción bélica. No es lícito que la multitud se empeñe en matar y
liquidar simplemente todo lo que cae en sus manos, pues de este modo
sólo se obtendrá una derrota y, pese a toda perseverancia, predominaría
la amenaza de la desventura.

Al tope un seis significa:

El gran príncipe emite órdenes,

funda Estados, otorga feudos a familias.

Hombres vulgares no deben utilizarse.

La guerra ha llegado a su victorioso fin. Se ha conquistado el triunfo.
El rey reparte feudos y posesiones familiares entre sus leales. Pero es
importante que las gentes vulgares no puedan llegar al poder. Si han
contribuido con su ayuda, debe pagárseles con dinero. Pero no deben
concedérseles predios ni derechos señoriales, a fin de que no se
produzcan abusos.`

names[8] = `Pi / La Solidaridad (El mantenerse unido)`

texts[8] = `arriba K’an, Lo Abismal, el agua

abajo K’un, Lo Receptivo, la Tierra

Sobre la tierra, el agua confluye cómo y dónde puede, juntándose p. ej.
en el mar, donde se reúnen todos los ríos. Es este un símbolo que
sugiere la solidaridad y sus leyes. Se insinúa la misma idea en el hecho
de que todos los trazos sean blandos, dúctiles, con excepción de la
única línea firme en el quinto puesto, el lugar del soberano. Los
dúctiles se mantienen unidos, se solidarizan al recibir el influjo de la
voluntad firme que emana del puesto conductor que, para ellos,
constituye el centro de la unión. Pero, a su vez, también esta fuerte
personalidad conductora se solidariza con las otras, en las que
encuentra un complemento necesario a su propia naturaleza.

Desde el punto de vista de las líneas individuales, el rector del signo
es el fuerte “nueve en el segundo puesto” al que se subordinan los demás
trazos, todos blandos. Esta línea designa al mandatario, ya que ocupa el
centro de uno de los dos signos primarios. Pero como se ubica en el de
abajo y no en el de arriba, no representa la imagen del soberano, sino
la del hábil general que mantiene al ejército en obediencia gracias a su
autoridad.

EL DICTAMEN

La solidaridad trae ventura.

Indaga el oráculo una vez más,

ve si tienes elevación, duración y perseverancia;

si es así no habrá defecto.

Los inseguros se allegan poco a poco.

El que llega tarde tiene desventura.

Es cuestión de unirse a otros, a fin de complementarse y de estimularse
mutuamente mediante una solidaria adhesión. Para semejante solidaridad,
es preciso que exista un centro en torno al cual puedan congregarse los
demás. El llegar a ser centro para la solidaridad de los hombres, es
asunto grave que implica gran responsabilidad. Requiere, en el fuero
interno, grandeza, consecuencia y vigor. Examínese, pues, a sí mismo,
quien desee reunir en su torno a otros, con el fin de cerciorarse si se
halla a la altura de la situación; pues quien pretenda reunir a otros
sin estar munido del sello que da una verdadera vocación, ocasionará una
confusión mayor que si no hubiera tenido lugar unión alguna.

Pero donde existe un verdadero foco de unión, allí los inseguros,
aquellos que al comienzo vacilan, van acercándose, paulatinamente, por
sí mismos. Quienes llegan tarde sufrirán los perjuicios que ellos mismos
se causan. También en el caso de la solidaridad se trata de caer en la
cuenta de cuál es el buen momento, el tiempo justo. Los vínculos se
establecen y se fortalecen de acuerdo con determinadas leyes internas.
Los consolidan experiencias vividas en común, y el que llega tarde y ya
no puede participar de ésas fundamentales experiencias conjuntas, tendrá
que sufrir, en su condición de rezagado, las consecuencias de encontrar
la puerta cerrada.

Ahora bien, quien ha reconocido la necesidad de la cohesión y no siente
dentro de sí la fuerza suficiente para actuar él como centro de la
solidaridad, tiene el deber de unirse a otra comunidad
organizada.

LA IMAGEN

Sobre la tierra hay agua: la imagen de la solidaridad.

Así los reyes de tiempos antiguos otorgaban en feudo

los diferentes Estados y mantenían trato amistoso con los príncipes
vasallos.

El agua sobre la tierra rellena todas las cavidades y se adhiere
firmemente. La organización social de la antigüedad se fundaba en este
principio de solidaridad entre los dependientes y los soberanos. Las
aguas confluyen por sí solas, porque las mismas leyes rigen el agua en
todas sus partes. Así también la sociedad humana ha de mantenerse unida
gracias a una comunidad de intereses por la cual cada uno puede sentirse
miembro de un todo. El poder central de un organismo social debe
procurar que cada miembro encuentre su real interés en la solidaridad,
como era el caso en la relación paternalista entre el Gran Rey y los
príncipes vasallos de la antigüedad china.

LAS DIFERENTES LÍNEAS

Al comienzo un seis significa:

Mantente solidario con él, de verdad y lealmente:

no será una falla.

Verdad como una colmada vasija de barro.

Así por fin desde afuera llegará la ventura.

Para entablar relaciones, la plena veracidad y sinceridad es la única
base correcta. Esta actitud interior, representada por la imagen de una
colmada fuente de barro cocido, en la cual todo es contenido y nada es
forma vacía, no se manifiesta mediante sagaces palabras, sino a través
del poder de las fuerzas interiores, tan imponente que con vigor atrae
hacia sí la ventura procedente de lo exterior.

Seis en el segundo puesto significa:

Mantente solidario con él en tu fuero interno.

La perseverancia trae ventura.

Cuando de un modo recto y perseverante va uno al encuentro de los ruegos
que desde arriba exhortan a obrar, las relaciones con el otro son en
primer término interiores; así uno no se pierde a sí mismo. En cambio,
quien busca solidaridad como un pegajoso trepador, no sigue el sendero
del noble que salvaguarda su dignidad, sino que se desperdicia a sí
mismo.

Seis en el tercer puesto significa:

Te solidarizas con gente

que no es la que debe ser.

Uno se encuentra a menudo entre personas de las que ninguna pertenece a
la propia esfera. Entonces es preciso no dejarse arrastrar, por la
fuerza de la costumbre, hacia una falsa familiaridad. Huelga demostrar
con palabras que esto sería perjudicial. Cierta camaradería, sin
intimidad, es lo único indicado para con este tipo de gente: sólo así se
mantiene uno libre para una relación ulterior con sus pares.

Seis en el cuarto puesto significa:

También en lo externo mantente solidario con él.

La perseverancia trae ventura.

Las relaciones con un hombre que es centro de la solidaridad ya se
encuentran aquí regularizadas de un modo estable. Entonces puede y debe
uno manifestar su adhesión también abiertamente. Sólo es necesario
permanecer firme y no permitir que nada nos confunda y nos induzca a
error.

Nueve en el quinto puesto significa:

Manifestación de la solidaridad.

El rey, durante la cacería, sólo permite la batida

desde tres lados, y renuncia a los venados

que se desvían hacia adelante.

Los ciudadanos no requieren advertencia. ¡Ventura!

En las cacerías reales con batidores, en la China antigua, se observaba
la usanza de dar batida a las reses de caza desde tres lados. Por el
cuarto lado, la res batida podía desviarse. En cuanto los animales no se
desviaban tomando ese rumbo, tenían que pasar por una puerta, detrás de
la cual se hallaba apostado el rey, listo para darles caza, únicamente
se tiraba sobre aquellos animales que penetraban allí. A los que torcían
el rumbo desviándose hacia adelante, se los dejaba escapar. Esta
costumbre se conformaba al ánimo real, que no deseaba que la caza se
convirtiese en una carnicería, sino que sólo daba cuenta de aquellas
piezas que, por así decirlo, se ofrecían voluntariamente.

Aparece aquí un gobernante, o bien por analogía un hombre de influencia,
que atrae poderosamente a la gente. Él no ruega a nadie, no adula a
ninguno; todos acuden por sí mismos. De este modo se forma una libre
dependencia entre aquellos que hacen causa común con él. La gente no se
ve en la necesidad de tener que violentarse; antes bien, sin peligro
alguno, pueden todos dar muestras de su modo de pensar y de sentir. Las
disposiciones policiales están de más. Espontáneamente sienten ellos
afecto por su gobernante. También en lo que respecta a la vida en
general tiene vigencia esta libertad. No debe uno tratar de granjearse
los favores de los hombres. Cuando alguien desarrolla en sí la pureza y
el vigor necesarios para ser centro de la unión, los hombres que le
están predestinados llegan por sí mismos.

Al tope un seis significa:

No encuentra cabeza para la solidaridad. Desventura.

La cabeza es el comienzo. Sin un adecuado comienzo no llega un adecuado
fin. Cuando se ha perdido la ocasión de unirse, de asociarse, y se sigue
vacilando, por miedo a una entrega plena y verdadera, demasiado tarde se
arrepentirá uno de su error.`

names[9] = `Hsiao Ch’u / La Fuerza Domesticadora de lo Pequeño`

texts[9] = `arriba Sun, Lo Suave, el viento

abajo Ch’ien, Lo Creativo, el Cielo

El signo representa lo pequeño, la fuerza de lo sombrío, que retiene,
amansa, refrena. En el cuarto puesto, el del ministro, hay un trazo
débil que mantiene sujetos a todos los restantes trazos que son fuertes.
Visto desde el ángulo de la imagen simbólica, es el viento que sopla en
lo alto del cielo. Refrena el aliento ascendente de Lo Creativo, las
nubes, a fin de que se condensen. Pero no es lo suficientemente fuerte
como para provocar acto seguido su precipitación. El signo da una
constelación en la cual, pasajeramente, lo fuerte se ve dominado,
refrenado por lo débil. Esto, si ha de verse acompañado por el éxito,
sólo puede lograrse mediante la suavidad.

EL DICTAMEN

La Fuerza Domesticadora de lo Pequeño tiene éxito.

Densas nubes, ninguna lluvia de nuestra región del Oeste.

La parábola procede de las condiciones reinantes en la China durante la
época del rey Wen. Él era oriundo de Occidente, pero en esa época se
encontraba en la región oriental, en la corte del Gran Soberano, el rey
tirano Chou Hsin. El momento para actuar en grande aún no había llegado.
Tan sólo podía refrenar al tirano en cierta medida valiéndose de
palabras amables. De ahí la imagen de abundantes nubes que se levantan
prometiendo al país humedad y bendición, pero sin que por el momento se
precipite lluvia alguna. La situación no es desfavorable. Hay
perspectivas de éxito final. Pero todavía quedan obstáculos en el
camino. Sólo es posible realizar trabajos preparatorios. Así, únicamente
mediante los pequeños recursos que brindan las palabras de persuasión,
amables, puede obtenerse algún efecto. La época de la acción penetrante
en gran medida aún no ha llegado. Sin embargo, se consigue por lo menos
ejercer, en una medida limitada, una acción refrenadora, amansadora. Al
proceder de este modo y para lograr uno imponer su voluntad, hace falta
una firme decisión en lo interior y una suave adaptación en lo exterior.

LA IMAGEN

El viento recorre el cielo:

la imagen de La Fuerza Domesticadora de lo Pequeño.

Así el noble va refinando la forma exterior de su naturaleza.

El viento, si bien va juntando las nubes en el cielo, como solo es aire
y no posee un cuerpo sólido, no produce efectos grandes, duraderos. Así
también al hombre, en épocas que no permiten una gran acción hacia
afuera, sólo le queda la posibilidad de refinar en lo pequeño las
manifestaciones de su naturaleza.

LAS DIFERENTES LÍNEAS

Al comienzo un nueve significa:

Retorno al camino. ¡Cómo podría ser una falla! ¡Ventura!

Forma parte de la característica de lo fuerte arremeter hacia adelante.
Pero con ello lo fuerte entra en el terreno de los refrenamientos, de la
inhibición. Por eso retorna hacia el camino que corresponde a su
situación y donde se siente libre para avanzar o retroceder. Es bueno y
razonable no pretender obtener algo a la fuerza, violentamente; esto,
conforme a la naturaleza del asunto, trae ventura.

Nueve en el segundo puesto significa:

Se deja arrastrar hacia el retorno. ¡Ventura!

De primer intento uno quisiera avanzar. Pero aún antes de progresar se
observa, en el ejemplo que da otra gente de índole igual a la de uno,
que ese camino se halla obstaculizado. Un hombre sensato, decidido, no
se expondrá en un caso semejante u un rechazo personal, sino que, junto
con los otros de igual condición y actitud, sabrá retirarse cuando no
sea el momento para que la ambición avance. Esto trae ventura porque de
esta manera no se pone en juego a sí mismo.

Nueve en el tercer puesto significa:

Al carruaje se le saltan los rayos.

El hombre y la mujer tuercen los ojos.

Aquí se hace la tentativa de avanzar violentamente, debido a que uno
tiene conciencia de que el poder refrenador es bastante débil. Mas,
puesto que conforme a las circunstancias dadas, lo débil de hecho está
en posesión del poder, semejante intento de avanzar por sorpresa
necesariamente se malogra. Circunstancias exteriores impiden el
progreso, así como un carro no puede avanzar si se le saltan los rayos
de las ruedas. Uno no hace caso, todavía, de esa señal del destino.
Surgen por lo tanto enojosas controversias como entre dos cónyuges.
Esto, por cierto, no es una situación favorable; pues aun cuando debido
a las condiciones dadas la parte más débil logre el dominio, la cosa se
complica con demasiadas dificultades como para que el efecto pueda
resultar grato. En consecuencia, lo fuerte tampoco puede utilizar su
fuerza ejerciendo un influjo correcto sobre lo que lo rodea. Ha
experimentado un rechazo allí donde esperaba una fácil victoria, y con
ello se ha comprometido, en cierta medida.

Seis en el cuarto puesto significa:

Si eres veraz, desaparece la sangre y retrocede la angustia.

Ninguna falla.

Ocupando uno un cargo difícil y pleno de responsabilidad, deberá
domesticar al poderoso a quien asiste como guía, de tal manera que
termine por hacerse lo que corresponde. En ello reside un gran peligro
que hace que hasta pueda temerse un derramamiento de sangre. Pero el
poder de una abnegada veracidad es más grande que todos estos
obstáculos; es tal la impresión que causa que uno lleva exitosamente a
cabo sus esfuerzos, con lo que se desvanece todo peligro de
derramamiento de sangre y toda angustia.

Nueve en el quinto puesto significa:

Si eres veraz y leal en la alianza,

eres rico en tu prójimo.

La lealtad conduce a una firme alianza porque se basa en una
complementación mutua. En el integrante más débil de la situación la
lealtad es la entrega; en el más fuerte, la confiabilidad. Esta
complementación mutua conduce a una verdadera riqueza que se manifiesta
plenamente en el hecho de que uno no la guarde para sí, sino que la
posea en común con su prójimo. Alegría compartida es doble alegría.

Al tope un nueve significa:

Llega la lluvia, llega el sosiego.

Esto se debe a la permanente acción del carácter.

La mujer cae en peligro debido a su perseverancia.

La luna está casi llena. Si el noble prosigue, llegará la desventura.

Se ha obtenido el éxito. El viento ha juntado la lluvia. Se ha alcanzado
una firme posición. Esto se ha llevado a cabo mediante una paulatina
acumulación de pequeños efectos que resultan de la veneración brindada a
un carácter superior. Sin embargo, un éxito logrado así pieza por pieza
requiere una gran cautela. Si uno se abandonara ahora a la ilusión de
seguridad, basada en ese éxito, sería peligroso. Lo femenino, lo débil
que ha alcanzado la victoria no debe jamás apoyarse tenazmente en el
triunfo. Esto atraería el peligro. La fuerza sombría de la luna llega a
su máximo al hallarse casi llena. Cuando como luna llena se opone
directamente al sol, su mengua es inevitable. En tales circunstancias es
necesario conformarse con lo alcanzado. Seguir avanzando antes de llegar
el momento debido, traería desventura.`

names[10] = `Lü / El Porte (La Pisada)`

texts[10] = `arriba Ch’ien, Lo Creativo, el Cielo

abajo Tui, Lo Sereno, el lago

El Porte representa, por una parte, el modo correcto de conducirse.
Arriba se halla el Cielo, el padre; abajo el lago, la menor de las
hijas. Esto muestra la diferencia entre alto y bajo, una distinción que
constituye el fundamento de la compostura, la tranquilidad, el
comportamiento correcto en la sociedad. Lü, en el sentido de pisada,
significa literalmente: “pisar sobre algo”. Lo “sereno”, que es pequeño,
pisa sobre lo “fuerte” que es grande. El movimiento de ambos signos
primarios o trigramas se dirige hacia arriba. El que lo fuerte pise lo
débil es algo obvio y no encuentra mención especial en el Libro de las
Mutaciones. El pisar por parte de lo débil, su porte frente a lo fuerte,
no resulta con todo peligroso, pues ocurre con alegre serenidad, sin
arrogancia; de este modo lo fuerte no se irrita sino que más bien lo
deja hacer, con benevolencia.

EL DICTAMEN

Pisar la cola del tigre.

Éste no muerde al hombre. Éxito.

La situación es en verdad difícil. Lo más fuerte y lo más débil se
encuentran en contacto directo. Lo débil le pisa los talones a lo fuerte
y se entretiene provocándolo. Pero lo fuerte lo deja hacer y no le hace
daño alguno, pues el contacto es alegre y nada hiriente.

La situación humana es esta: uno tiene que habérselas con personas
salvajes, inabordables. En este caso el objetivo deseado se alcanza si
en su porte, en su conducta, se atiene uno a las buenas costumbres. Las
formas de conducta buenas y gratas conquistan el éxito aun en el caso de
enfrentarse con gente irritable.

LA IMAGEN

Arriba el cielo, abajo el lago: la imagen del Porte.

Así distingue el noble entre alto y bajo

y afirma con ello el sentido del pueblo.

El cielo y el lago revelan una diferencia de altura que se ha producido
por sí misma conforme a la naturaleza de ambos; por lo tanto ninguna
forma de envidia enturbia esta relación. Así también en el seno de la
humanidad tiene que haber diferencias de nivel. Es imposible lograr que
la igualdad general sea una realidad. De lo que se trata es que las
diferencias de rango en la sociedad humana no sean arbitrarias e
injustas, pues de otro modo la envidia y la lucha de clases será
consecuencia inevitable. Si, en cambio, las diferencias de rango
externas responden a una justificación interior, y si la dignidad
interior forma la pauta para el rango externo, reinará la calma entre
los hombres y la sociedad logrará el orden.

LAS DIFERENTES LÍNEAS

Al comienzo un nueve significa:

Porte sencillo. Progreso sin defecto.

Se encuentra uno en una situación en la cual todavía no lo comprometen
los deberes del trato. Si se comporta con sencillez, permanecerá libre
de compromisos sociales y podrá dedicarse con toda tranquilidad a las
inclinaciones de su corazón, puesto que nada exigirá de los hombres y se
mostrará contento. Pisar significa no detenerse, sino más bien seguir la
marcha. Uno se encuentra en una posición inicial muy insignificante,
pero posee la fortaleza interior que garantiza el progreso. Si se
conforma con lo sencillo, podrá progresar sin defecto alguno. Cuando
alguien no encuentra sosiego a raíz de su condición modesta, pretenderá
avanzar y será ambicioso e inquieto; con su comportamiento se empeñará
en escapar de su condición inferior, de la pobreza, y no en razón de su
deseo de realizar algo. Una vez alcanzada la meta, se volverá con
seguridad soberbio y hará ostentación de su prosperidad. De ahí que su
progreso adolecerá de defectos. El hombre capaz e inteligente, en
cambio, se mostrará contento en su porte sencillo. Sólo desea progresar
con el fin de realizar algo. Si de este modo llega a la meta, logrará
realizar su obra y todo marchará debidamente.

Nueve en el segundo puesto significa:

Pisar en llana y sencilla vía.

La perseverancia de un hombre oscuro trae ventura.

Se alude aquí a la situación de un sabio solitario. Éste se mantiene
apartado del bullicio mundanal, no busca nada, no quiere nada de nadie,
no se deja encandilar por objetivos seductores. Permanece leal a sí
mismo, y así atraviesa la vida recorriendo un camino llano y sin que
nadie lo moleste. Como es sobrio y dócil y no desafía al destino,
permanece libre de complicaciones.

Seis en el tercer puesto significa:

Un tuerto puede ver, un tullido puede pisar.

Pisa la cola del tigre. Éste muerde al hombre. ¡Desventura!

Un guerrero actúa así en bien de su gran príncipe.

Un tuerto ciertamente puede ver, pero su vista no le alcanza para
obtener una visión clara. Un tullido ciertamente puede pisar, pero ello
no le alcanza para avanzar. Cuando alguien afectado de tales debilidades
se tiene no obstante por fuerte, y en consecuencia avanza hacia el
peligro, atraerá sobre sí la desgracia, puesto que se embarcará en una
empresa que va más allá de sus fuerzas. Esta manera intrépida de
embestir sin tener en cuenta las propias fuerzas, puede a lo sumo
aceptarse cuando se trata de un guerrero que lucha por su gran príncipe.

Nueve en el cuarto puesto significa:

Él pisa la cola del tigre.

Cautela y circunspección conducen finalmente a la ventura.

Se trata de una empresa riesgosa. Existe la fuerza interior necesaria
para llevarla a cabo. Pero esta fuerza interior se combina hacia afuera
con una cautela vacilante, a diferencia del trazo anterior que, siendo
interiormente débil, arremete sin embargo hacia el exterior. Así, en
este caso, queda asegurado el éxito final, que consiste en el hecho de
imponer uno su voluntad, vale decir de superar el peligro mediante el
recurso de seguir avanzando.

Nueve en el quinto puesto significa:

Porte decidido.

Perseverancia, con conciencia del peligro.

Se trata del regente de todo el signo. Se ve uno forzado a adoptar un
porte resuelto, a pisar con decisión. Pero al proceder así debe tenerse
siempre presente el peligro que implica semejante porte decidido, sobre
todo si uno persevera en ello. Únicamente la conciencia del peligro hace
posible el éxito.

Al tope un nueve significa:

Contempla tu porte y examina las señales favorables.

Si todo es perfecto, advendrá una elevada ventura.

La obra llegó a su término. Si se quiere saber si tendrá consecuencias
venturosas, contémplese retrospectivamente el propio comportamiento y
las consecuencias que ha tenido. Si los efectos fueron buenos, la
ventura queda asegurada. Nadie se conoce a sí mismo. Sólo por las
consecuencias de su actuación, por los frutos de las obras, podrá
apreciarse cuánto es dable esperar.`

names[11] = `T’ai / La Paz`

texts[11] = `arriba, K’un, Lo Receptivo, la Tierra

abajo, Ch’ien, Lo Creativo, el Cielo

Lo Receptivo, cuyo movimiento se dirige hacia abajo, está arriba; Lo
Creativo, cuyo movimiento se dirige hacia arriba, se sitúa abajo. Por lo
tanto sus influjos se encuentran uno a otro, se relacionan
armoniosamente y así todos los seres florecen y prosperan. El signo se
adjudica al primer mes (febrero-marzo), durante el cual las fuerzas de
la naturaleza preparan una nueva primavera.

EL DICTAMEN

La paz. Lo pequeño se va, llega lo grande.

¡Ventura! ¡Éxito!

En la naturaleza, este signo alude a una época en la cual, por así
decirlo, reina el cielo sobre la tierra. El Cielo se ha colocado por
debajo de la Tierra. Así sus fuerzas se unen en íntima armonía. De ello
emana paz y bendición para todos los seres.

En el mundo humano se trata de una época de concordia social. Los
encumbrados condescienden con los de abajo. Y los de abajo, los
inferiores, abrigan sentimientos amistosos para con los elevados, y así
llega a su término toda contienda.

En lo interior, en el centro, en el puesto decisivo, se halla lo
luminoso; lo oscuro está afuera. Así lo luminoso actúa con vigor y lo
oscuro se muestra transigente. De este modo ambas partes obtienen lo que
les corresponde. Cuando, en la sociedad, los buenos ocupan una posición
central y tienen el gobierno en sus manos, también los malos
experimentan su influjo y se vuelven mejores. Cuando, dentro del hombre,
reina el espíritu que procede del cielo, su influjo abarca también a la
sensualidad y ésta obtiene así el sitio que le corresponde.

Las líneas individuales ingresan en el signo desde abajo, y arriba
vuelven a abandonarlo: de este modo los pequeños, los débiles, los malos
están yéndose, y ascienden los grandes, los fuertes, los buenos. Este
hecho es fuente de ventura y éxito.

LA IMAGEN

Cielo y Tierra se unen: la imagen de La Paz.

Así reparte y completa el soberano

el curso de cielo y tierra,

fomenta y ordena los dones de cielo y tierra,

con lo cual asiste al pueblo.

Cielo y tierra cultivan su trato y unen sus efectos. Esto da por
resultado una época general de florecimiento y prosperidad. Semejante
corriente de energía ha de ser regulada por el soberano de los hombres.
Éste lo lleva a cabo mediante la distribución. Así el tiempo
indiferenciado, de acuerdo con la secuencia de sus fenómenos, es
subdividido por el hombre en estaciones del año y, en virtud de
definiciones humanas, el espacio que todo lo abarca aparece diferenciado
por puntos cardinales. De esta manera la naturaleza, con su avasalladora
plenitud de fenómenos, se ve limitada y controlada. Por el otro lado, es
necesario estimular a la naturaleza en lo que produce. Esto sucede
cuando se adapta su producción a la época que le corresponde y al lugar
correcto, pues con ello se incrementa el rendimiento natural. Tal
actividad de estímulo y sujeción de la naturaleza constituye una labor
que redunda en beneficio del hombre.

LAS DIFERENTES LÍNEAS

Al comienzo un nueve significa:

Cuando se arranca faláridas, sale adherida la hierba del césped.

Cada cual a su manera. Las empresas traen ventura.

En épocas de florecimiento todo hombre capaz que es llamado a desempeñar
un puesto, arrastra consigo, inmediatamente, a otros de igual
disposición, así como cuando uno arranca finas faláridas, las extrae
junto con un manojo de briznas o tallos unidos entre sí por las raíces.
En semejantes épocas, al presentarse la oportunidad de actuar en gran
escala, el designio del hombre capacitado es abrirse camino en la vida y
realizar algo.

Nueve en el segundo puesto significa:

Soportar a los incultos con benevolencia,

atravesar el río resueltamente,

no descuidar lo lejano,

no tomar en consideración a los compañeros:

así tal vez se logre andar por el camino del medio.

En tiempos de florecimiento es importante, antes que nada, poseer la
grandeza interior necesaria para soportar a la gente imperfecta. Pues
para un gran maestro no existe ningún material estéril. No hay nada que
no le sirva para algo. Sin embargo, esta magnanimidad no implica, en
modo alguno, negligencia o debilidad. Precisamente en épocas de
florecimiento debe uno hallarse dispuesto para atreverse a afrontar aun
empresas peligrosas como el cruce de un río, en caso necesario. Del
mismo modo es cuestión de no descuidar lo lejano, sino de ocuparse más
bien, escrupulosamente, de todos los detalles. Sobre todo debe uno
cuidarse de caer en partidismos, o bajo el dominio de facciones. Pues
aun cuando se destaquen al mismo tiempo quienes profesen las mismas
ideas, no deben formar un partido basado en esa mutua solidaridad; antes
bien cada uno ha de cumplir con su propio deber. Estos cuatro factores
sirven para superar el peligro subrepticio del paulatino relajamiento
que acecha en todo período de paz, y de este modo se conquistará el
justo camino medio para actuar.

Nueve en el tercer puesto significa:

Ningún llano al que no siga un declive,

ninguna ida a la que no siga el retorno.

Sin defecto es quien se mantiene perseverante frente al peligro.

No te lamentes de esta verdad,

disfruta la dicha que todavía posees.

Todo lo terrenal está sujeto al cambio. Al florecimiento le sigue la
decadencia. He aquí la ley eterna que rige sobre la tierra. Si bien
puede hacerse que lo malo retroceda, no es posible eliminarlo en forma
duradera. Volverá. Esta convicción podría provocar melancolía, pero es
necesario que esto no suceda. Sólo ha de servir a fin de que uno no se
deje encandilar por la dicha. Teniendo presente el peligro, uno
perseverará y no cometerá ninguna falta. Mientras la esencia interior
del hombre se mantenga más fuerte y más plena que la dicha externa,
mientras interiormente mantengamos nuestra superioridad frente al
destino, la dicha seguirá siéndonos fiel.

Seis en el cuarto puesto significa:

Él desciende aleteando, sin jactarse de su riqueza,

en unión con su prójimo, sin malicia y veraz.

En épocas de mutua confianza, los de elevada posición, con toda
sencillez y sin hacer caso de sus riquezas, se juntan con los de abajo.
Esto no sucede por imposición de las circunstancias, sino
correspondiendo a una disposición íntimamente sentida. En tales casos la
aproximación se da con toda espontaneidad, puesto que se basa en una
profunda convicción interior.

Seis en el quinto puesto significa:

El soberano I concede su hija en matrimonio.

Esto trae bendición y elevada ventura.

El soberano I es Tang, el consumador y perfeccionador. Él había
determinado que las princesas imperiales, a pesar de ocupar un rango más
elevado que los esposos a quienes se daban en matrimonio, debían
obedecer a sus esposos como lo hacían otras esposas. También en este
caso se alude a una unión realmente modesta entre alto y bajo, destinada
a aportar felicidad y bendición.

Al tope un seis significa:

La muralla se desploma de vuelta al foso.

Ahora no emplees ejércitos.

En la propia ciudad proclama tus órdenes.

La perseverancia trae humillación.

El cambio, al que ya se alude en el centro del signo, se ha producido.
La muralla de la ciudad vuelve a caer en el foso del cual había sido
extraída. Se desencadena el desastre. En este caso es cuestión de
someterse al destino, de no pretender detenerlo con una resistencia
violenta. Lo único que queda por hacer es resguardarse, en el seno del
círculo más estrecho. Si, como es usual, pretendiera uno perseverar en
una tenaz resistencia al mal, el derrumbe sería peor aún y su
consecuencia sería la humillación.`

names[12] = `P’i / El Estancamiento`

texts[12] = `arriba Ch’ien, Lo Creativo, el Cielo

abajo K’un, Lo Receptivo, la Tierra

Este signo es el opuesto exacto del anterior. El Cielo, en lo alto, se
va retirando cada vez más; la Tierra, abajo, desciende cada vez más
hacia las simas. Las fuerzas creativas se mantienen desconectadas. Es el
tiempo del estancamiento, de la decadencia. El signo se adjudica al
séptimo mes (agosto-setiembre), período cuando el año ya ha sobrepasado
su punto de culminación y viene preparándose el marchitamiento otoñal.

EL DICTAMEN

El Estancamiento.

Hombres malignos no favorecen

la perseverancia del noble.

Lo grande se va, llega lo pequeño.

Cielo y Tierra no mantienen trato entre sí y todas las cosas se vuelven
rígidas. Los superiores y los inferiores carecen de mutua relación, y
confusión y desorden reinan sobre la tierra. En lo interior está lo
oscuro, y lo luminoso se halla afuera; en lo interior hay debilidad,
afuera dureza; en lo interior se hallan los vulgares y los nobles se
encuentran afuera. La índole de los vulgares está en ascenso, la índole
de los nobles está en mengua. Los nobles, empero, no se dejan inducir a
error en lo que concierne a sus principios. Aun cuando ya no les queda
ninguna posibilidad de acción, siguen siendo leales a sus principios y
se retiran, ocultándose.

LA IMAGEN

Cielo y Tierra no se unen:

la imagen del Estancamiento.

Así el noble se retira, refugiándose en su valer interior,

con el fin de eludir dificultades.

No permite que le honren con ingresos.

Cuando en la vida pública reina una mutua desconfianza, a raíz de la
influencia que ejercen los vulgares, resulta imposible toda acción
fructífera, puesto que es falsa la base. Por eso el noble bien sabe lo
que debe hacer en tales circunstancias. No se deja seducir por
brillantes ofertas con las que se pretende hacerlo participar en la
actividad pública; ésta sólo sería peligrosa para él, ya que se sentiría
incapaz de unirse a las infamias de los demás. Por esta causa esconde
sus méritos y se retira manteniéndose oculto.

LAS DIFERENTES LÍNEAS

Al comienzo un seis significa:

Cuando se arranca faláridas, sale adherida la hierba del césped.

Cada cual a su manera.

La perseverancia trae ventura y éxito.

El texto es casi el mismo que el de la primera línea del signo anterior,
sólo que en un sentido inverso. Allí uno arrastra al otro tras sí, en el
camino hacia la carrera oficial. Aquí uno arrastra al otro consigo en su
retirada de la vida pública. Por eso en este caso el texto no dice “las
empresas aportan ventura”, sino “la perseverancia aporta ventura y
éxito”. Únicamente por el hecho de saber uno cómo retirarse a tiempo
cuando las posibilidades de acción ya no existen, se elude la
humillación y se obtiene éxito en un sentido superior, gracias a la
capacidad de salvaguardar la personalidad en su verdadero valor.

Seis en el segundo puesto significa:

Ellos soportan y toleran,

esto significa ventura para los vulgares.

Al gran hombre el Estancamiento le sirve para el logro.

Los vulgares se muestran dispuestos a adular de un modo rastrero a sus
jefes. Tolerarían también al noble si éste les ayudara a disipar la
confusión. Sería la salvación para ellos. El gran hombre, empero,
soporta con calma las consecuencias del estancamiento. Él no se mezcla a
las hordas de los vulgares. Su lugar, no está entre ellos. De este modo,
asumiendo personalmente el sufrimiento, procura éxito a sus principios.

Seis en el tercer puesto significa:

Ellos sobrellevan la vergüenza.

Los vulgares, que han alcanzado ilegítimamente sus posiciones, sienten
que no están a la altura de la responsabilidad que han asumido. Así
comienzan —por lo pronto sin dar muestras de ello hacia afuera— a
avergonzarse en secreto. Éste es el principio de un viraje hacia la
mejoría.

Nueve en el cuarto puesto significa:

Quien obra obedeciendo la orden del Altísimo

permanece sin falla.

Los que congenian con él disfrutarán de la bendición.

El tiempo del estancamiento se aproxima a un vuelco. El hombre que desea
restaurar el orden, ha de sentirse llamado a hacerlo y gozar del
necesario prestigio. Quien quisiera imponerse como restaurador por su
propia voluntad y decisión, podría ocasionar errores y fracasos. Pero el
que está predestinado verá que las condiciones del momento lo favorecen,
y su bendición será compartida por todos los que profesen las mismas
ideas.

Nueve en el quinto puesto significa:

El Estancamiento cede. ¡Ventura para el gran hombre!

“¡Y si se malograra, si se malograra!”

De este modo lo ata a un haz de vástagos de morera.

El tiempo cambia. Ha llegado el hombre justo capaz de restaurar el
orden. Por lo tanto: ¡Ventura! Mas precisamente tales tiempos de
transición requieren el temor y temblor. El éxito se afirmará únicamente
en virtud de una extrema preocupación que sin cesar imponga la
reflexión: “¡Y si se malograra!” Cuando se trunca de un tajo a un
arbolillo de morera, brota de su raíz una serie de retoños
particularmente firmes. Por ese motivo la consolidación del éxito se
simboliza mediante la imagen de atarlo a una mata de vástagos de morera.

Confucio dice al respecto: “Surge peligro allí donde uno se siente
seguro en su sitio. Amenaza el hundimiento donde uno trata de conservar
su perduración. Surge la confusión allí donde uno mantiene todo en
orden. Por eso el noble, cuando se siente seguro, no olvida el peligro,
ni olvida el hundimiento cuando siente estabilidad, ni la confusión
cuando lo rodea el orden. De tal modo logra su propia seguridad y
también se preserva el reino.”

Al tope un nueve significa:

El estancamiento cesa.

Primero estancamiento, luego ventura.

El estancamiento no dura eternamente. Es cierto que no cesa por sí
mismo; antes bien es necesario que aparezca el hombre adecuado que le
pondrá fin. Es esta la diferencia entre La Paz y El Estancamiento: La
Paz requiere para mantenerse un duradero esfuerzo; abandonada a sí misma
se convertiría en estancamiento y decadencia. El tiempo de decadencia,
en cambio, no se convierte por sí mismo en paz y florecimiento, sino que
requiere un esfuerzo para ser eliminado. Con ello se señala la actitud
creadora del hombre, indispensable para que el mundo alcance el orden.`

names[13] = `T’ung Jen / Comunidad con los Hombres`

texts[13] = `arriba Ch’ien, Lo Creativo, el Cielo

abajo Li, Lo Adherente, la llama

La imagen del signo primario superior, Ch’ien, es el Cielo, la del
inferior, Li, es la llama. Por su naturaleza el fuego llamea hacia
arriba, hacia el cielo. Esto sugiere la idea de comunidad. Es la segunda
línea la que, gracias a su carácter central, reúne en torno de sí los
cinco trazos fuertes. Este signo es un opuesto complementario del N^(o)
7, El Ejército. Allí: en lo interior peligro, en lo exterior obediencia
como cualidad esencial del ejército beligerante, el cual requiere para
su cohesión a alguien fuerte entre los muchos débiles. Aquí: en lo
interior claridad, en lo exterior fuerza, como cosa esencial para la
pacífica unión de los hombres, que para su cohesión requiere a uno que
sea blando entre los muchos firmes.

EL DICTAMEN

Comunidad con hombres en lo libre: éxito.

Es propicio atravesar las grandes aguas.

Propicia es la perseverancia del noble.

La real comunidad entre los hombres ha de llevarse a cabo sobre la base
de una participación cósmica. No son los fines particulares del yo, sino
las metas de la humanidad lo que produce una duradera comunidad entre
los hombres; por eso está dicho: comunidad con hombres en lo libre tiene
éxito. Cuando predomina la unión de este tipo, pueden llevarse a cabo
aun las tareas difíciles y peligrosas, como el cruce de las grandes
aguas. Mas para poder encaminar la existencia de tal comunidad, hace
falta un conductor perseverante y esclarecido, cuyas metas sean claras,
evidentes y entusiasmadoras y a las que sepa convertir en realidad, con
toda energía. (El trigrama interior significa claridad, el exterior
fuerza.)

LA IMAGEN

Cielo junto con fuego:

la imagen de La Comunidad con los Hombres.

Así estructura el noble las tribus y discrimina las cosas.

El cielo posee la misma dirección de movimiento que el fuego, y, sin
embargo, se distingue de éste. Así como los cuerpos luminosos del cielo
sirven para la partición y estructuración del tiempo, también la
sociedad humana y todas las cosas que realmente forman conjuntos, han de
estar orgánicamente estructuradas. La comunidad no ha de ser una mezcla
de individuos ni una mezcla de cosas —esto sería caos y no comunidad—,
sino que requiere una estructurada diversificación si es que ha de
conducir al orden.

LAS DIFERENTES LÍNEAS

Al comienzo un nueve significa:

Comunidad con hombres en el portal. Ningún defecto.

El comienzo de una unión de hombres debe tener lugar ante la puerta.
Todos se hallan igualmente próximos entre sí. Todavía no existen
aspiraciones particulares de ninguna especie, y así no se comete falta
alguna. Los fundamentos de toda unión han de ser accesibles de igual
modo a todos los participantes. Eventuales convenios secretos acarrean
desventura.

Seis en el segundo puesto significa.

Comunidad con hombres en el clan: humillación.

Aquí aparece el peligro de un partido separatista, basado en intereses
personales y egoístas. Semejantes partidismos exclusivistas, que no
ofrecen lugar a todos, que necesariamente condenan a una parte de los
hombres con el fin de juntar a los restantes, tienen su origen en
motivos bajos y, por lo tanto conducen, a la larga, a la humillación.

Nueve en el tercer puesto significa:

Esconde armas en el matorral,

sube a la alta colina que está delante.

Durante tres años no se levanta.

La comunidad se ha convertido en desconfianza. Uno recela de los demás,
establece una emboscada secreta y trata de espiar al otro desde lejos.
Tiene que habérselas con un adversario duro sobre el que no se puede
triunfar de este modo. Quedan señalados aquí obstáculos que obstruyen el
camino hacia la comunidad con otros. Uno mismo abriga segundas
intenciones, y ocasionalmente trata de ganarle al otro por sorpresa.
Pero esto precisamente es lo que provoca la desconfianza: trata uno de
descubrir las mismas astucias también en el adversario e intenta
encontrarlas mediante el espionaje. En consecuencia se aleja cada vez
más de una verdadera comunidad. Cuanto más dure este estado tanto más se
alejará uno convirtiéndose en un extraño.

Nueve en el cuarto puesto significa:

Él sube a su muralla, no puede atacar. ¡Ventura!

En este punto, viene acercándose la reconciliación después de la
desavenencia. Ciertamente subsisten todavía murallas separadoras, desde
cuya altura se enfrentan unos con otros. Pero las dificultades son
demasiado grandes. Uno experimenta una emergencia, y esta emergencia lo
hace reflexionar. No es posible luchar, y en eso precisamente se basa la
ventura.

Nueve en el quinto puesto significa:

Los hombres en comunidad primero lloran y se lamentan, pero luego ríen.

Después de grandes luchas logran encontrarse.

Se trata de dos personas exteriormente separadas, pero unidas en sus
corazones. Sus posiciones en la vida los mantienen separados. Se
levantan entre ellos muchos obstáculos e impedimentos que los
entristecen. Pero no permiten que ningún obstáculo los desuna, y
permanecen fieles el uno al otro. Y aunque la superación de tales
obstáculos involucre graves luchas, ellos vencerán, a pesar de todo, y
entonces su tristeza se transformará en alegría una vez que puedan
reencontrarse.

Kung Tse dice al respecto:

“La vida conduce al hombre serio por abigarrados y tortuosos senderos

A menudo frena la fuerza de la andanza, luego vuelve a enderezarse

Ya un elocuente contenido logra verterse libremente en palabras

Ya la pesada carga del saber debe encerrarse en el silencio.

Mas allí donde dos hombres están acordes en lo hondo de su corazón.

Quiebran la fortaleza aun de bronces o aceros.

Y allí donde dos hombres se entienden plenamente en lo hondo de su
corazón,

Sus palabras son dulces y fuertes como aroma de orquídeas.”

Al tope un nueve significa:

Comunidad con hombres en la pradera: no hay arrepentimiento.

Aquí falta la cálida adhesión del corazón. En verdad el afectado ya se
encuentra más allá de la comunidad con otros. Pero uno se adhiere. La
comunidad no abarca a todos, sino tan sólo a los que exteriormente
conviven juntos. La pradera es el campo de pastoreo delante de la
ciudad. La última meta de la unión de la humanidad no se ha alcanzado
aquí todavía. Pero uno no tiene por qué reprocharse nada. Se adhiere a
la sociedad sin objetivos particulares.`

names[14] = `Ta Yu / La Posesión de lo Grande`

texts[14] = `arriba Li, Lo Adherente, la llama

abajo Ch’ien, Lo Creativo, el Cielo

El fuego en lo alto del Cielo alumbra a lo lejos, y todas las cosas
pasan a la luz y se manifiestan. El débil trazo quieto ocupa el puesto
de honor y todos los demás trazos, fuertes, están en correspondencia con
él. Quien, ocupando un puesto elevado, es modesto y benévolo, lo obtiene
todo como si acudiera a sus manos.

EL DICTAMEN

La Posesión de lo Grande: Elevado Logro.

Los dos signos primarios indican que la fuerza y la claridad se unen. La
Posesión de lo Grande está predeterminada por el destino y en
correspondencia con el tiempo. ¿Cómo es posible que ese débil trazo
tenga la fuerza suficiente como para retener y poseer a los trazos
fuertes? Lo es gracias a su desinteresada modestia. Es éste un tiempo
propicio. Hay fortaleza en lo interior, y claridad y cultura en lo
exterior. La fuerza se manifiesta con finura y autodominio. Esto
confiere elevado logro y riqueza.

LA IMAGEN

El Fuego en lo alto del Cielo:

la imagen de La Posesión de lo Grande.

Así el noble frena el mal y fomenta el bien,

obedeciendo con ello la buena voluntad del Cielo.

El sol en lo alto del cielo que alumbra todo lo terrenal, es el símbolo
de la posesión en gran escala. Mas semejante posesión ha de ser
correctamente administrada. El sol saca a la luz del día lo malo y lo
bueno. El hombre debe combatir y refrenar el mal y fomentar y favorecer
el bien. Únicamente de este modo corresponde uno a la buena voluntad de
Dios que sólo quiere el bien y no el mal.

LAS DIFERENTES LÍNEAS

Al comienzo un nueve significa:

Ninguna relación con lo dañino, esto no es un defecto.

Si permanece uno consciente de la dificultad,

quedará libre de defecto.

Una gran posesión que aún se encuentra en su período inicial y no ha
sido atacada en modo alguno, permanece sin tacha; pues aún no se da la
ocasión de cometer faltas. Pero hay muchas dificultades que deben
vencerse todavía. Únicamente manteniendo alerta su conciencia ante tales
dificultades llega uno a ser de verdad interiormente libre de toda
posibilidad de arrogancia o malversación y ha prevenido así, en
principio, toda posible falla.

Nueve en el segundo puesto significa:

Un gran carruaje para cargarlo.

Se puede emprender algo. Ningún defecto.

Una gran posesión consiste no sólo en la cantidad de bienes que uno
tiene a su disposición, sino y ante todo en su movilidad y
aplicabilidad. En este caso, podrá uno utilizarlos en bien de empresas a
realizar y permanecerá libre de escrúpulos y de faltas. El gran carruaje
que puede cargarse con muchas cosas y con el que puede viajarse lejos,
sugiere la existencia de hábiles ayudantes que tiene uno a su lado,
idóneos para su tarea. A gente así puede confiarse la carga de una gran
responsabilidad, lo cual es realmente necesario cuando se trata de
empresas importantes.

Nueve en tercer puesto significa:

Un príncipe lo ofrenda al Hijo del Cielo.

Un hombre pequeño no sabe hacerlo.

Es cosa de un hombre magnánimo y de pensamiento libérrimo el no
considerar su posesión como propiedad exclusivamente personal y de
ponerla más bien a disposición del soberano o del bien público. Adopta
así un punto de vista correcto frente a la posesión que, en cuanto
propiedad privada, jamás puede ser duradera. Un hombre de corazón
estrecho, un hombre mezquino, ciertamente no es capaz de semejante
actitud. En su ruso una gran posesión acarrea daños, puesto que en vez
de sacrificar él intenta conservar.

Nueve en el cuarto puesto significa:

Establece una diferencia entre sí y su prójimo.

No hay defecto.

Esto caracteriza una situación que surge entre vecinos ricos y poderosos
y que acarrea peligro. Es cuestión entonces de no mirar ni a derecha ni
a izquierda, sino de permanecer libre de envidia y del intento de lograr
lo mismo que otros. Así quedará uno libre de fallas.

Seis en el quinto puesto significa:

Aquél cuya verdad es afable y sin embargo digna,

tendrá ventura.

La situación es sumamente favorable. Sin coacción externa y sólo en
virtud de una franqueza espontánea, conquista uno a los hombres, al
punto de que también ellos respondan con simpatía y franca sinceridad.
No obstante, en tiempos de posesión de lo grande la mera mansedumbre no
es suficiente, pues podría surgir, paulatinamente, la impertinencia.
Esta aparición de la impertinencia ha de ser dignamente mantenida dentro
de sus límites y entonces la ventura será cierta.

Al tope un nueve significa:

Él es bendecido desde el Cielo. ¡Ventura!

Nada que no fuese propicio.

En la plenitud de la posesión y del poder conserva uno la modestia y
honra al sabio que se mantiene apartado del ajetreo mundanal. Con tal
actitud, se coloca uno bajo el influjo de las bendiciones que llegan del
cielo, y todo irá bien.

Confucio dice acerca de este trazo: “Bendecir significa ayudar. El Cielo
ayuda al que se entrega, los hombres ayudan al veraz. Quien se conduce
con veracidad y es abnegado en su pensar, y además tiene en alta estima
a los dignos, ése recibe la bendición del Cielo. Encuentra Ventura y no
hay nada que no sea propicio.”`

names[15] = `Ch’ien / La Modestia`

texts[15] = `arriba K’un, Lo Receptivo, la Tierra

abajo Ken, El Aquietamiento, la montaña

El signo se compone de Ken, el Aquietamiento, la montaña, y K’un. La
montaña es el hijo menor de lo Creativo, el representante del Cielo
sobre la Tierra. Ella dispensa las bendiciones del Cielo, nubes y lluvia
que se acumulan en torno a su cumbre, derivándolas hacia abajo, y luego
brilla transfigurada en la luz celestial. Esto enseña la modestia y sus
efectos cuando se da en hombres elevados y fuertes. En lo alto se halla
K’un, la Tierra. El atributo de la Tierra es su bajura, mas precisamente
por eso se la representa en este signo en situación elevada, puesto que
se encuentra en lo alto, por encima de la montaña. Esto enseña el efecto
de la modestia tratándose de hombres sencillos y de baja condición: de
este modo ellos se ven enaltecidos.

EL DICTAMEN

La Modestia va creando el éxito.

El noble lleva a buen término.

La ley del Cielo vacía lo lleno y llena lo modesto: cuando el sol se
halla en su punto más alto, debe declinar, de acuerdo con la ley del
Cielo; y cuando se encuentra en lo más hondo bajo la tierra, se encamina
hacia un nuevo ascenso. Conforme a la misma ley, la luna, una vez llena,
comienza a decrecer, y estando vacía vuelve a aumentar. Esta ley celeste
actúa también y tiene sus efectos en el sino de los hombres. La ley de
la Tierra es modificar lo lleno y afluir hacia lo modesto: las altas
montañas son derruidas por las aguas y los valles se rellenan. La ley de
los poderes del sino es dañar lo lleno y dispensar la dicha a lo
modesto. Y también los hombres odian lo lleno y aman lo modesto.

Los destinos se guían por leyes fijas que actúan y se cumplen con
necesariedad. El hombre, empero, tiene en sus manos el recurso de
configurar su destino, y su éxito en ello depende de si se expone
mediante comportamiento al influjo de las fuerzas cargadas de bendición
o de destrucción. Si el hombre está en elevada posición y se muestra
modesto, resplandece con la luz de la sabiduría. Cuando está en baja
posición y se muestra modesto, no puede ser pasado por alto. De este
modo logra el noble llevar a término su obra sin vanagloriarse de lo
hecho.

LA IMAGEN

En medio de la tierra hay una montaña:

la imagen de La Modestia.

Así disminuye el noble lo que está de más

y aumenta lo que está de menos.

Sopesa las cosas y las iguala.

La tierra, en cuyo interior se oculta una montaña, no ostenta su
riqueza, pues la altura de la montaña sirve para compensación de las
hondonadas y cavidades. Así se complementan lo alto y lo profundo, y el
resultado es la llanura. Éste es el símbolo de la modestia, que señala
que aquello que ha requerido una prolongada acción y efecto, aparece
como obvio y fácil. Así procede el noble cuando establece el orden sobre
la tierra. Él compensa los opuestos sociales que son fuente de desunión,
de falta de paz, y crea con ello condiciones justas y llanas.^([20])

LAS DIFERENTES LÍNEAS

Al comienzo un seis significa:

Un noble modesto en su modestia

bien puede atravesar las grandes aguas. ¡Ventura!

Una empresa peligrosa como el cruce de una gran corriente de agua se ve
sumamente dificultada cuando deben tomarse en cuenta grandes exigencias
y consideraciones. Resulta fácil, en cambio, cuando se la realiza con
prontitud y sencillez. Por eso la disposición de ánimo de la modestia,
enteramente exenta de pretensiones, resulta apta para llevar a cabo aun
empresas difíciles, porque ella no implica exigencias ni condiciones
previas, sino que con facilidad y derechura lleva la cosa a su término;
pues donde no se manifiestan pretensiones, no surgen tampoco
resistencias.

Seis en el segundo puesto significa:

Modestia que se manifiesta. La perseverancia trae ventura.

Cuando alguien tiene lleno el corazón, se le rebasa también la boca. Si
alguien es interiormente tan modesto que esa predisposición aparece
visible en su comportamiento externo, tal cosa redunda en venturoso
beneficio para él: pues de esta manera obtiene por sí mismo la
posibilidad de una acción perseverante que nadie puede reprimir.

Nueve en el tercer puesto significa:

Un noble meritorio por su modestia lleva a buen término.

¡Ventura!

He aquí el centro del signo, donde se enuncia su secreto. Mediante
grandes realizaciones, bien pronto adquiere uno gran renombre. Si se
dejara encandilar por la fama, aparecería muy pronto la crítica y se
presentarían dificultades. Si, en cambio, a pesar de los méritos,
permanece modesto, será bien querido, se hará popular y conquistará las
fuerzas auxiliares necesarias para conducir a buen término la obra
emprendida.

Seis en el cuarto puesto significa:

Nada que no sea propicio

para la modestia en movimiento.

Todo tiene su medida. También la modestia en la conducta puede resultar
exagerada. En este caso es perfectamente adecuada, puesto que la
situación entre un ayudante meritorio, abajo, y un gobernante benévolo,
arriba, trae consigo una enorme responsabilidad. No debe abusarse de la
confianza del superior, y los méritos del inferior no deben ocultarse.
Existen por cierto funcionarios que no se destacan. Ellos encuentran
respaldo en la letra de las ordenanzas, declinan toda responsabilidad,
aceptan remuneraciones sin rendir lo que corresponde, ostentan títulos
que en realidad no tienen significado alguno. La modestia que aquí se
menciona es lo contrario de todo esto. En una situación semejante la
modestia se manifiesta precisamente en que uno cumple su labor con
interés.

Seis en el quinto puesto significa:

No hacer gala de riqueza frente a su prójimo.

Es propicio atacar con violencia.

Nada que no sea propicio.

La modestia difiere de la condición del débil bonachón que deja que todo
siga su curso. Si uno ocupa un puesto responsable, en ciertas
circunstancias también se hace necesario intervenir enérgicamente y a
fondo. Mas para ello hace falta que uno no trate de actuar jactándose de
su superioridad; más bien es preciso tener certeza con respecto a
quienes forman el medio ambiente. La intervención a fondo ha de ser
puramente objetiva y no debe implicar nada que pueda herir a alguien
personalmente. Así se evidenciará la modestia aun en el rigor.

Al tope un nueve significa:

Modestia que se manifiesta.

Es propicio hacer que se pongan en marcha ejércitos,

a fin de castigar la propia ciudad y el propio país.

El que realmente toma en serio su modestia ha de procurar que ésta se
ponga de manifiesto en la realidad. En este sentido debe proceder con
gran energía. Si surge alguna hostilidad, nada más fácil que buscar la
culpa en el otro. Un hombre débil acaso se retire entonces, ofendido,
refugiándose en sí mismo, sintiendo autocompasión y tomando por modestia
su actitud de no defenderse. La verdadera modestia se manifiesta
procediendo uno vigorosamente a poner orden, y en ese sentido comenzará
con el propio yo y con su círculo más estrecho al aplicar los castigos.
Únicamente cuando uno tiene el valor necesario para hacer marchar sus
ejércitos contra sí mismo, podrá realizarse algo vigoroso.`

names[16] = `Yü / El Entusiasmo`

texts[16] = `arriba Chen, Lo Suscitativo, el Trueno

abajo K’un, Lo Receptivo, la Tierra

La línea fuerte en el cuarto puesto, el del funcionario director,
encuentra solicitud y obediencia por parte de todas las demás líneas que
son débiles. El signo superior primario, Chen, tiene por atributo el
movimiento; el inferior, K’un, la obediencia, la fervorosa entrega.
Comienza, pues, un movimiento que se encuentra con el fervor y actúa en
consecuencia en forma que apasiona, entusiasma. Gran significación tiene
además la ley del movimiento en la línea de menor resistencia, que en
este signo se expresa como ley del acontecer natural y de la vida
humana.

EL DICTAMEN

El Entusiasmo. Es propicio

designar ayudantes y hacer marchar ejércitos.

El tiempo del Entusiasmo se funda en la presencia de un hombre
importante que se halla en empatía con el alma del pueblo y actúa en
concordancia con ella. Por tal motivo se le brinda una obediencia
voluntaria y general. Con el fin de despertar el entusiasmo es
necesario, por lo tanto, que en sus disposiciones se atenga a la índole
de los conducidos. En esta regla del movimiento que sigue la línea de
menor resistencia se funda la inviolabilidad de las leyes naturales.
Éstas no constituyen algo externo a las cosas, sino la armonía del
movimiento inmanente en las cosas. Por esta causa los cuerpos celestes
no se desvían de sus órbitas y todo el acontecer natural tiene lugar con
firme regularidad. De un modo parecido se presentan las cosas en la
sociedad humana. También en su seno podrán imponerse únicamente aquellas
leyes que se hallan arraigadas en el sentir del pueblo, pues las leyes
que contradicen ese sentir solo suscitan el resentimiento.

El Entusiasmo hace asimismo posible que se designen ayudantes para la
ejecución de las tareas, sin que sea necesario prevenir reacciones
secretas. Por otra parte, el Entusiasmo es capaz de unificar los
movimientos de masas, como en caso de guerra, al punto que obtengan la
victoria.

LA IMAGEN

El trueno surge estruendoso de la tierra:

la imagen del Entusiasmo.

Así los antiguos reyes hacían música

para honrar los méritos,

y la ofrendaban con magnificencia al Dios supremo,

invitando a sus antepasados a presenciarlo.

Cuando, al comenzar el verano, el trueno, la fuerza eléctrica, vuelve a
surgir rugiendo de la tierra y la primera tormenta refresca la
naturaleza, se disuelve una prolongada tensión. Se instalan el alivio y
la alegría. De un modo parecido, la música posee el poder de disolver
las tensiones del corazón surgidas de la vehemencia de oscuros
sentimientos. El entusiasmo del corazón se manifiesta espontáneamente en
la voz del canto, en la danza y el movimiento rítmico del cuerpo. Desde
antiguo el efecto entusiasmador del sonido invisible, que conmueve y une
los corazones de los hombres, se percibía como un enigma. Los soberanos
aprovechaban esta propensión natural a la música. La elevaban y ponían
orden en ella. La música se tenía por algo serio, sagrado, que debía
purificar los sentimientos de los hombres. Debía cantar loas a las
virtudes de los héroes y tender así el puente hacia el mundo invisible.
En el templo se acercaba uno a Dios con música y pantomimas (sobre cuya
base se desarrolló más tarde el teatro). Los sentimientos religiosos
frente al creador del mundo se unían a los más sagrados sentimientos
humanos, los sentimientos de veneración a los antepasados. Éstos eran
invitados, con motivo de tales servicios religiosos, como huéspedes del
Señor del Cielo y representantes de la humanidad en aquellas altas
regiones. Al enlazarse así, en solemnes momentos de entusiasmo
religioso, el pasado propio con la divinidad, se celebraba la alianza
entre la divinidad y la humanidad. El soberano, que en sus antepasados
veneraba a la divinidad, se constituía con ello en Hijo del Cielo, en el
cual se tocaban místicamente el mundo celestial y el mundo terrenal.
Tales pensamientos constituyen la última y más alta síntesis de la
cultura china. El propio maestro Kung (Confucio) decía, refiriéndose al
gran sacrificio durante el cual se cumplían estos ritos: “Quien
comprendiera por completo este sacrificio, podría gobernar el mundo como
si girara en su propia mano.”

LAS DIFERENTES LÍNEAS

Al comienzo un seis significa:

Entusiasmo que se exterioriza trae desventura.

Alguien en posición subordinada tiene relaciones distinguidas de las que
se jacta, entusiasmado. En razón de esta petulancia atrae sobre sí,
necesariamente, la desventura. El entusiasmo jamás ha de ser un
sentimiento egoísta; antes bien tan sólo se justifica en cuanto
disposición de ánimo general que forma un eslabón de unión con otros.

Seis en el segundo puesto significa:

Firme como una roca. Ni un día entero.

La perseverancia trae ventura.

Aquí se caracteriza alguien que no se deja engatusar por ninguna clase
de ilusiones. Mientras que otros permiten que los encandile el
entusiasmo, éste reconoce con absoluta claridad los primeros signos del
tiempo, del momento. De tal modo, no se muestra adulador hacia los de
arriba, ni negligente hacia los de abajo. Permanece firme como una roca.
No bien se presente el primer indicio de un malestar, una desavenencia,
él sabrá retirarse a tiempo, sin perder siquiera un solo día. La
perseverancia en una actitud semejante aporta ventura.

Confucio dice al respecto: “Conocer los gérmenes es sin duda una
facultad divina. El noble, en el trato hacia arriba no es adulador, en
el trato hacia abajo no es arrogante. Él conoce bien los gérmenes. Los
gérmenes son el primer comienzo imperceptible del movimiento, aquello
que primero se muestra como señal de ventura (y de desventura). El noble
ve los gérmenes e inmediatamente actúa. No se le ocurre aguardar un día
entero. En el Libro de las Mutaciones está dicho:

Firme como una roca. Ni un día entero. La perseverancia trae ventura.

Firme como una roca, ¿para qué un día entero?

El Dictamen puede saberse.

El noble conoce lo secreto y lo manifiesto.

Conoce lo débil, también conoce lo fuerte:

Por eso las multitudes levantan hacia él la mirada.”

Seis en el tercer puesto significa:

Entusiasmo que mira hacia arriba engendra arrepentimiento.

Vacilación trae arrepentimiento.

He aquí lo contrario de la línea anterior: allí autonomía, aquí el
entusiasmo de mirar hacia arriba. Si uno vacila durante demasiado
tiempo, también eso origina arrepentimiento. En el acercamiento es
cuestión de atrapar el momento correcto; únicamente así se atinará a
encontrar lo recto.

Nueve en el cuarto puesto significa:

La fuente de origen del Entusiasmo; alcanza grandes cosas.

No dudes.

Los amigos se agrupan rodeándote,

como una presilla para el pelo.

Alguien capaz de suscitar entusiasmo gracias a su propia seguridad y
carencia de escrúpulos; por el hecho de ser enteramente veraz y no
abrigar dudas, atrae a los hombres. Al brindarles confianza, los
conquista a fin de que colaboren con él con entusiasmo, y de este modo
logra el éxito. Como una hebilla que presta sostén a los cabellos
manteniéndolos unidos, así él reúne a los hombres mediante el sostén que
les da.

Seis en el quinto puesto significa:

Perseverantemente enfermo y sin embargo nunca muere.

Aquí el entusiasmo se ve impedido. Se halla uno bajo una constante
presión que en ningún momento le deja respirar aliviado. Pero hay
circunstancias en que esta presión tiene su lado bueno. Uno se ve así
preservado de que sus fuerzas se agoten en vacuo entusiasmo. De este
modo esa constante presión puede servir, precisamente, para conservar la
vida.

Al tope un seis significa:

Entusiasmo cegado.

Pero si después del encandilamiento logra uno el cambio, eso no será una
falla.

Si uno se deja cegar por el entusiasmo, la cosa tendrá malas
consecuencias. Pero aun si tal encandilamiento ha llegado a ser un hecho
consumado y uno todavía está en condiciones de cambiar, quedará libre de
error. Llegar a serenarse luego de un falso entusiasmo es perfectamente
posible y muy favorable.`

names[17] = `Sui / El Seguimiento`

texts[17] = `arriba Tui, Lo Sereno, el lago

abajo Chen, Lo Suscitativo, el trueno

Arriba se encuentra Lo Sereno cuya característica es la alegría, y abajo
está Lo Suscitativo, lo excitante, cuya característica es el movimiento.
Alegría durante el movimiento conduce al Seguimiento. Lo Sereno es la
hija menor, Lo Suscitativo el hijo mayor. Un hombre ya mayor se coloca
por debajo de una muchacha joven y tiene consideración para con ella. De
este modo la mueve al seguimiento, a la sucesión.

EL DICTAMEN

El Seguimiento tiene elevado éxito.

Es propicia la perseverancia. No hay defecto.

A fin de obtener seguimiento, hace falta en primer lugar que uno sepa
adaptarse. Únicamente mediante el servicio llega uno a dominar; pues
únicamente así se logra el consentimiento alegre y sereno de los de
abajo, indispensable para el seguimiento. Allí donde se pretende obtener
seguimiento a la fuerza, mediante la astucia o la violencia, mediante la
conspiración o el partidismo, se suscitará siempre resistencia, que
impedirá un seguimiento solícito y voluntario.

Sin embargo, un movimiento alegre también puede conducir a malas
consecuencias. Por eso se añade como condición: “Es propicia la
perseverancia”, vale decir, ser consecuente en lo recto, y “sin falla”.
Del mismo modo que uno debe requerir seguimiento sólo bajo esta
condición, también es lícito que siga a otros sólo bajo la misma
condición para no sufrir daño.

La idea del Seguimiento, condicionado por la adaptación a lo que exige
el tiempo, es grande e importante y por lo tanto también el texto del
Dictamen añadido es tan favorable.

LA IMAGEN

En medio del Lago está el Trueno: la imagen del Seguimiento.

Así el noble a la hora del atardecer

se recoge para su recreo y descanso.

En el otoño la electricidad vuelve a retirarse hacia el interior de la
tierra y descansa. Sirve aquí como símbolo el trueno en medio del lago:
no el trueno en movimiento, sino el trueno del descanso invernal. El
Seguimiento se deduce de este símbolo en el sentido de la adaptación a
las exigencias del tiempo, de la época. El trueno en medio del lago
indica tiempos de oscuridad y reposo. Así el noble, luego de un día de
infatigable actividad, se permite en horas de la noche el recreo y el
reposo. Cualquier situación se torna buena únicamente cuando uno sabe
adaptarse a ella y no malgasta sus fuerzas en falsas
resistencias.

LAS DIFERENTES LÍNEAS

Al comienzo un nueve significa:

Lo decisivo se modifica. La perseverancia trae ventura.

Salir de la puerta para el trato engendra obras.

Hay estados de excepción, durante los cuales la relación entre conductor
y conducido se modifica. La idea de la adaptación y del seguimiento
implica que, si uno quiere conducir a otros, ha de ser siempre accesible
e influenciable por las opiniones de los subordinados. Sólo que es
necesario conservar al respecto principios firmes, para no entrar en
vacilación cuando tan sólo se trata de opiniones efímeras, válidas para
el día que corre. Dispuesto a escuchar las opiniones de otros, uno no ha
de juntarse siempre únicamente con personas de ideas idénticas, con sus
partidarios; antes bien deberá salir de su recinto y entablar
desprejuiciadamente relaciones con gente de toda índole, ya sean amigos
o enemigos. Únicamente así se podrá llevar a cabo alguna obra.

Seis en el segundo puesto significa;

Si uno adhiere al varoncito,

perderá al hombre fuerte.

En lo tocante a la amistad y los vínculos estrechos hay que observar una
cautelosa elección. Se rodea uno o bien de buena o bien de mala
compañía. No se puede tener a ambas a un tiempo. Si uno se malgasta a sí
mismo en el trato con gente indigna, perderá la conexión con gente
espiritualmente valiosa, capaz de estimularlo en el buen sentido.

Seis en el tercer puesto significa:

Si uno adhiere al hombre fuerte,

pierde al varoncito.

Mediante el seguimiento encuentra uno lo que busca.

Es propicio permanecer perseverante.

Si uno ha encontrado la conexión debida con gente valiosa, es natural
que, como consecuencia, experimente ciertas pérdidas. Es necesario
separarse de lo inferior, de lo superficial. Sin embargo, uno se sentirá
satisfecho en su fuero íntimo al haber hallado aquello que busca y
necesita para fomentar la evolución de su personalidad. Lo único que
hace falta es permanecer firme. Uno debe saber lo que quiere y no
dejarse confundir y extraviar por inclinaciones de momento.

Nueve en el cuarto puesto significa:

El Seguimiento crea éxito. La perseverancia acarrea desventura.

Recorrer el camino con veracidad

aporta claridad.

¿Cómo podría haber en ello una falla?

A menudo, ejerciendo una cierta influencia, logra uno obtener
seguidores, expresándose con afabilidad hacia los de abajo. Los hombres
que en tal caso se le adhieren no abrigan, sin embargo, intenciones
honestas. Procuran su ventaja personal y tratan de hacerse
imprescindibles recurriendo a la adulación y al servilismo. Si se
acostumbra uno a semejantes partidarios, al punto de ya no poder pasarse
sin ellos, atraerá sobre sí la desventura. Tan sólo un hombre
enteramente libre de su propio ego, que con toda convicción persiga
únicamente lo recto, lo concreto, adquirirá la necesaria visión clara
para desenmascarar a tales personas, y así se librará de cometer faltas.

Nueve en el quinto puesto significa:

Verdaderamente en el bien. ¡Ventura!

Todo hombre debe tener algo a lo cual seguir, algo que le sirva de
estrella orientadora. Quien con convicción va en pos de lo bello y lo
bueno, podrá sentirse fortalecido por esta sentencia.

Al tope un seis significa:

Él halla firme adhesión,

y por añadidura se siente comprometido.

El rey lo presenta a la Montaña Occidental.

Se trata de un hombre que personalmente ya ha dejado a sus espaldas los
afanes del mundo: un elevado sabio. Pero aparece un seguidor que lo
comprende y no lo suelta, no se desprende de él. Así regresa una vez más
al mundo y ayuda a éste en la ejecución de su obra. De este modo surge
entre ellos un enlace de índole eterna.

La parábola procede de la dinastía Chou. Esa dinastía honraba a sus
ayudantes meritorios otorgándoles un sitio en el templo de los ancestros
de la familia gobernante, en la Montaña Occidental. De tal modo eran
acogidos en el ámbito del destino de la casa reinante.`

names[18] = `Ku / El Trabajo en lo Echado a Perder`

texts[18] = `arriba Ken, El Aquietamiento, la montaña

abajo Sun, Lo Suave, el viento

El ideograma chino Ku representa una escudilla en cuyo contenido
prosperan gusanos. Esto significa lo echado a perder. Se ha producido a
raíz de que la suave indiferencia del trigrama inferior se ha juntado
con la rígida inercia del trigrama superior, y así se originaron las
condiciones para el estancamiento. Como esto implica culpa, las
circunstancias dadas imponen la exhortación a que se las elimine. Por
eso la significación del signo no es simplemente “Lo Echado a Perder”,
sino “Lo Echado a Perder como Tarea”, “El Trabajo en lo Echado a
Perder”.

EL DICTAMEN

El Trabajo en lo Echado a Perder tiene elevado éxito.

Es propicio atravesar las grandes aguas.

Antes del punto inicial tres días,

después del punto inicial tres días.

Lo que se ha echado a perder por culpa humana, puede también subsanarse
mediante el trabajo humano. No se trata de un sino inexorable, como el
que aparece en el tiempo del Estancamiento, sino de una consecuencia del
abuso de la libertad humana, lo cual ha conducido al estado de
putrefacción. Por lo tanto, el trabajo destinado al mejoramiento tiene
buenas perspectivas, puesto que se realiza en concordancia con las
posibilidades del tiempo. Pero es necesario que uno no se arredre ante
el trabajo y el peligro —simbolizado por el cruce de las grandes aguas—;
es necesario tomar cartas enérgicamente. No obstante, es condición
previa del éxito una adecuada reflexión. Esto se expresa en la sentencia
añadida: “Antes del punto inicial tres días, después del punto inicial
tres días.” En primer término deben conocerse las causas que han
conducido a la corrupción, antes de que ésta pueda subsanarse: de ahí la
necesaria atención durante el período anterior al tiempo inicial. Luego
hay que preocuparse de que todo se encarrile bien por la nueva vía, para
evitar una recaída: de ahí la necesaria atención en el período que sigue
al punto inicial. La indiferencia y la inercia que han conducido al
estado de corrupción deben ser reemplazadas por la decisión y la
energía, a fin de que un nuevo comienzo pueda suceder a la terminación
de tal estado.

LA IMAGEN

Abajo, al borde de la montaña, sopla viento: la imagen del echarse a
perder.

Así el noble sacude a las gentes y fortalece su espíritu.

Al soplar el viento en lo bajo, al borde de la montaña, se ve rechazado
y echa a perder las plantas. Esto contiene una exhortación al
enmendamiento. Lo mismo ocurre también con las disposiciones de ánimo
inferiores, y con las modas: introducen corrupción en la sociedad
humana. Para eliminarla, el noble ha de renovar la sociedad. Los métodos
para ello se extraen igualmente de ambos signos primarios, sólo que sus
efectos se despliegan entonces en ordenada secuencia. El noble ha de
eliminar el estancamiento sacudiendo a la opinión pública (tal como el
viento sacude con su acción) y fortalecer luego el carácter de la gente,
tranquilizándolo (como es el caso de la montaña que brinda tranquilidad
y alimento a todo lo que crece a su alrededor).

LAS DIFERENTES LÍNEAS

Al comienzo un seis significa:

Rectificar lo echado a perder por el padre.

Cuando hay un hijo,

no afecta falta alguna al padre difunto que retornó a su origen.

Peligro. Finalmente ventura.

Una rígida, inmóvil adhesión a lo tradicional tuvo por consecuencia esta
corrupción. Pero el proceso de echarse a perder no se ve profundamente
arraigado, y por eso todavía resulta fácil remediarlo. Es como si un
hijo restableciera el equilibrio en ese proceso de echarse a perder que
subrepticiamente se ha introducido bajo el gobierno paterno. En este
caso, ninguna mácula seguirá afectando la memoria del padre. Pero es
menester no pasar por alto el peligro y no tomarse la cosa demasiado a
la ligera. Únicamente si uno cobra conciencia del peligro que implica
toda reforma, todo irá bien finalmente.

Nueve en el segundo puesto significa:

Rectificar lo echado a perder por la madre.

No se debe ser demasiado perseverante.

Se trata de fallas que por debilidad han causado esta corrupción. De ahí
el símbolo de lo echado a perder por la madre. En este caso, al buscar
el equilibrio hace falta una cierta delicada consideración. No se debe
proceder con excesiva rudeza, que podría herir.

Nueve en el tercer puesto significa:

Rectificar lo echado a perder por el padre.

Habrá un poco de arrepentimiento. No hay falla grande.

Aquí se caracteriza a alguien que, al tratar de rectificar los errores
del pasado, procede con un ligero exceso de energía. Por esta causa
surgirán seguramente, de tanto en tanto, pequeñas desavenencias y
desazones. Pero es mejor el exceso que la carencia de energía. Por lo
tanto, aun cuando alguna vez haya motivos de arrepentirse un poco, uno
se mantendrá sin embargo libre de toda falla seria.

Seis en el cuarto puesto significa:

Tolerar lo echado a perder por el padre.

Al continuar así se afrontará la humillación.

Se indica aquí una situación en la cual, por su debilidad, uno no se
enfrenta con lo echado a perder que procede del pasado, sino que deja
que la corrupción siga su curso. Si esto continúa así, la humillación
será la consecuencia.

Seis en el quinto puesto significa:

Rectificar lo echado a perder por el padre.

Uno cosecha elogios.

Un hombre se ve enfrentado a algo echado a perder debido a negligencias
cometidas en épocas anteriores. No posee la energía necesaria como para
remediarlo solo, pero encuentra ayudantes capaces, con cuyo apoyo, si
bien no podrá lograrse un nuevo comienzo en un sentido creativo, por lo
menos se llevará a cabo una reforma a fondo, cosa que también es digna
de elogio.

Al tope un nueve significa:

No está al servicio de reyes y príncipes.

Se propone metas más elevadas.

No todos los hombres están obligados a mezclarse en los asuntos
mundanales. Existen también quienes ya han evolucionado interiormente a
tal punto que tienen el derecho a dejar que el mundo siga su curso, sin
inmiscuirse en la vida política como reformadores. Mas con ello no
quiere decirse que han de asumir una actitud pasiva, inactiva o
meramente crítica. Tan sólo el trabajo dedicado a las metas más altas de
la humanidad, que uno ejecuta sobre su propia persona, da una
justificación para semejante estado de retiro. Pues aun cuando el sabio
se mantiene apartado del cotidiano trajín, va creando incomparables
valores para la humanidad del porvenir.`

names[19] = `Lin / El Acercamiento`

texts[19] = `arriba K’un, Lo Receptivo, la Tierra

abajo Tui, Lo Sereno, el lago

La palabra china Lin tiene una serie de significados imposibles de
abarcar con una sola palabra de un idioma occidental. Las antiguas
explicaciones del Libro de las Mutaciones dan como primera connotación:
“agrandarse”, “hacerse grande”. Lo que se hace grande son los dos trazos
fuertes que desde abajo ingresan creciendo en el signo. Con ellos se
extiende la fuerza luminosa. De allí la idea avanza hacia el concepto de
Acercamiento, o sea de Acercamiento de lo fuerte, de lo superior a lo
inferior. Finalmente significa también la condescendencia de un Superior
para con el pueblo, y, además, encarar activamente los negocios. El
signo se adjudica al duodécimo mes (enero-febrero), cuando, después del
solsticio, la fuerza luminosa ha vuelto a emprender su ascensión.

EL DICTAMEN

El Acercamiento tiene elevado éxito.

Es propicia la perseverancia.

Al llegar el octavo mes habrá desventura.

El signo, en su conjunto, alude a un tiempo de esperanzado progreso. Se
aproxima la primavera. La alegría y la transigencia van acercando entre
sí a altos y bajos. El éxito es seguro. Lo único que hace falta es la
realización de una labor resuelta y tesonera capaz de aprovechar
plenamente los favores del tiempo. Y otra cosa más: el tiempo de
primavera no dura eternamente. Llegado el octavo mes los aspectos se
invierten. Quedan entonces tan sólo dos líneas fuertes, que empero no
están avanzando, sino retirándose (cf. el hexagrama que sigue). Es
necesario tener en cuenta a tiempo este viraje y meditar sobre él. Si
uno de este modo se enfrenta con el mal antes de que se manifieste como
fenómeno, más aún, ante de que haya comenzado a dar señales, llegará a
dominarlo.

LA IMAGEN

Por encima del lago está la Tierra: la imagen del Acercamiento.

Así el noble es inagotable en su intención de enseñar,

y en soportar y proteger al pueblo no conoce límites.

La tierra linda desde lo alto con el lago: es este el símbolo del
Acercamiento y de la condescendencia de alguien superior con los de
posición inferior: de las dos partes que conforman la Imagen surge su
comportamiento frente a estos hombres. Así como aparece inagotable la
profundidad del lago, así es inagotable la solicitud del sabio para
instruir a los hombres: y así como la tierra es vasta sin límites y
portadora y protectora de todas las criaturas, así el sabio es portador
y protector de los hombres, sin poner fronteras de ninguna clase que
puedan excluir parte alguna de la humanidad.

LAS DIFERENTES LÍNEAS

Al comienzo un nueve significa:

Acercamiento conjunto. La perseverancia trae ventura.

El bien comienza a imponerse y encuentra beneplácito en lugar
influyente. De allí parte la incitación a acercarse dirigida al hombre
capaz. En tal caso será bueno adherirse a la tendencia ascendente; pero
habrá que tener buen cuidado de no extraviarse, de no perderse a sí
mismo en esa corriente del tiempo, sino de permanecer con perseverancia
en lo recto: esto aportará ventura.

Nueve en el segundo puesto significa:

Acercamiento conjunto. ¡Ventura! Todo es propicio.

Puesto que uno se encuentra en la situación de verse incitado a acudir
desde arriba, y que posee dentro de sí mismo la fortaleza y
responsabilidad necesaria y no requiere advertencia alguna, tendrá
ventura. El porvenir no ha de causar ninguna preocupación. El hombre
sabe ciertamente que todo lo terrenal es pasajero y que a toda ascensión
sigue el ocaso; pero no permite que ese sino general lo confunda e
induzca a error. Todo es propicio. Por lo tanto uno recorrerá con
prontitud, rectitud y audacia los caminos de la vida.

Seis en el tercer puesto significa:

Acercamiento confortable. Nada que fuese propicio.

Si uno llega a entristecerse por ello, quedará exento de error.

Todo avanza alegremente. Un hombre logra poder e influencia. Pero esto
esconde el peligro de que, confiando en su posición, se sienta demasiado
cómodo, y que este ánimo de confortable negligencia cobre preponderancia
en el trato con la gente. Esto será nocivo desde todo punto de vista.
Sin embargo, está dada la posibilidad de un vuelco. Si uno llega a
sentir tristeza a causa de semejante actitud contraria a la que
corresponde, si asume la responsabilidad que su posición influyente
implica, se verá libre de cometer faltas.

Seis en el cuarto puesto significa:

Acercamiento cabal. No hay defecto.

Mientras que las tres líneas de abajo caracterizan la ascensión hacia el
poder y la influencia, las tres de arriba enseñan el comportamiento de
los superiores frente a los inferiores, a quienes dotan de influencia.
Se señala aquí la manera enteramente desprejuiciada con la que alguien
que está en posición superior se acerca a un hombre capacitado, al que
atrae entablando el trato con él, sin reparar en prejuicios de clase.
Esto es muy favorable.

Seis en el quinto puesto significa:

Acercamiento sabio. Es lo que corresponde a un gran príncipe.

¡Ventura!

Un príncipe o alguien situado en posición conductora debe poseer la
necesaria sabiduría como para atraer hacia su ámbito a hombres aptos,
expertos en el manejo de los asuntos. Su sabiduría consiste tanto en
saber seleccionar a la gente adecuada como en dejar hacer a quienes ha
elegido, sin inmiscuirse personalmente en sus asuntos. Pues únicamente
mediante una reserva de ese orden podrá encontrar las personas
necesarias y expertas para dar cumplimiento a todos los requerimientos.

Al tope un seis significa:

Acercamiento magnánimo. Ventura. No hay falla.

Un sabio que ha superado al mundo e interiormente ya siente cumplida su
existencia, puede, en determinadas circunstancias, verse en situación de
tener que reingresar una vez más en este mundo acercándose a los otros
hombres. La consecuencia será una gran ventura para estos últimos, pues
les brindará su enseñanza y su ayuda. Pero aun para él mismo ese acto de
humildad, de magnánimo rebajamiento de sí mismo, no implica ningún
error, ningún defecto.`

names[20] = `Kuan / La Contemplación (La Vista)`

texts[20] = `arriba Sun, Lo Suave, el viento

abajo K’un, Lo Receptivo, la Tierra

El nombre chino del signo, con una ligera variación de acento adquiere
una doble connotación. Por un lado significa el contemplar, por otro el
ofrecerse a la vista, el modelo. Tales ideas son sugeridas por el hecho
de que el signo puede ser concebido como imagen de una torre, como las
que se veían con frecuencia en la antigua China. Desde esas torres o
atalayas se abarcaba una amplia perspectiva en derredor, y por otra
parte una torre de ese tipo situada sobre una montaña, era visible desde
lejos. De este modo el hexagrama simboliza a un soberano que hacia lo
alto contempla la ley del Cielo, y hacia abajo las costumbres del
pueblo; pero que, además, dado su buen gobierno, constituye un elevado
modelo para las masas.

El signo se adjudica al octavo mes (setiembre-octubre). La fuerza
luminosa va retirándose, la oscura se encuentra una vez más en ascenso.
Este aspecto, sin embargo, no se toma en cuenta para la explicación
total del signo.

EL DICTAMEN

La Contemplación.

Se ha cumplido la ablución, pero aún no la ofrenda.

Pleno de confianza levantan la mirada hacia él.

El acto sacrificial comenzaba en China con una ablución y una libación,
con lo cual se convocaba a la divinidad. Luego se ofrendaban los
sacrificios. El lapso que media entre ambos actos es el más sagrado,
pues es el momento de máximo recogimiento interior. Cuando la devoción
está plena de fe y es sincera, el contemplarla ejerce un efecto
transformador sobre quienes son sus testigos.

Así puede observarse una sagrada seriedad en la naturaleza, en la
regularidad con que transcurren todos los acontecimientos naturales. A
un hombre predestinado a influir sobre la humanidad la contemplación del
sentido divino del acaecer universal le confiere los medios para
ejercitar idénticos efectos. Para ello hace falta un recogimiento
interior como el que produce la contemplación religiosa en hombres
grandes y fuertes en su fe. Así contemplan ellos las misteriosas leyes
divinas de la vida y, mediante la máxima seriedad de su recogimiento
interior, dan lugar a que estas leyes se cumplan en su propia persona.
En consecuencia, de la visión que ellos presentan de sí mismos, surge un
misterioso poder espiritual que actúa sobre los hombres y los conquista
sin que ellos adquieran conciencia de cómo ocurre.

LA IMAGEN

El viento planea sobre la tierra:

la imagen de La Contemplación.

Así los antiguos reyes visitaban las regiones del mundo,

contemplaban al pueblo y brindaban enseñanza.

Cuando el viento sopla sobre la tierra llega a todas partes y la hierba
se inclina ante su poder: dos procesos que encuentran su confirmación en
este signo. Adquirían realidad en las instituciones de los antiguos
reyes, pues éstos, por una parte, emprendían viajes regulares para poder
contemplar a su pueblo, de modo que nada que fuese una costumbre viva en
el seno del pueblo pudiera escapárseles; por otra parte, ponían en vigor
su influencia gracias a la cual tales costumbres, si eran desatinadas,
se modificaban.

El conjunto alude al poder de una personalidad superior. Tal
personalidad abarcará con su visión a la gran muchedumbre de los hombres
y percibirá sus verdaderas disposiciones y pensamientos, de manera que
ningún engaño sea posible ante él, y por otra parte su mera existencia,
lo imponente de su personalidad, producirá en ellos una poderosa
impresión, de modo que se guiarán por su orientación como la hierba se
orienta de conformidad con el viento.

LAS DIFERENTES LÍNEAS

Al comienzo un seis significa:

Contemplación de párvulo.

Para un hombre inferior no es defecto.

Para un noble es humillante.

Una contemplación de lejos, carente de comprensión, es la que aquí se
caracteriza. Hay alguien que actúa, pero sus acciones no son
comprendidas por los hombres comunes. Esto no tiene gran importancia con
respecto a la masa. Comprendan ellos o no los actos del sabio que
gobierna: tales actos redundarán en su beneficio. Mas para un hombre
superior algo así es humillante. Éste no ha de contentarse con una necia
e irreflexiva contemplación de los influjos reinantes. Deberá
contemplarlos y tratar de comprenderlos en sus nexos y relaciones.

Seis en el segundo puesto significa:

Contemplación a través del resquicio de la puerta.

Propicio para la perseverancia de una mujer.

A través del resquicio de la puerta se tiene una visión restringida. Se
mira desde adentro hacia afuera. El modo de contemplar aparece aquí
subjetivamente limitado. Uno lo refiere todo a sí mismo; no es capaz de
colocarse en el lugar del otro, de sentir sus móviles. Esto está bien
para una buena ama de casa. No hace falta que ella entienda nada de los
asuntos del mundo. Pero para un hombre que debe actuar en la vida
pública, semejante forma de contemplación limitada y egoísta tendrá,
desde luego, malas consecuencias.

Seis en el tercer puesto significa:

Contemplación de mi vida

decide sobre progreso o retroceso.

Llegamos aquí al punto de transición. Ya no mira uno hacia afuera para
obtener imágenes más o menos restringidas o confusas, sino que la
contemplación la dirige sobre sí mismo para obtener una orientación con
respecto a sus decisiones. Esta contemplación adentrada constituye
precisamente el modo de superación del ingenuo egotismo en alguien que
todo lo contempla únicamente desde su propio punto de vista. Así llega a
la reflexión y con ello a la objetividad. El autoconocimiento, empero,
no consiste en ocuparse de los propios pensamientos, sino de los efectos
que emanan de uno. Únicamente los efectos producidos por la vida ofrecen
una imagen que nos autoriza a decidir qué es progreso o retroceso.

Seis en el cuarto puesto significa:

Contemplación de la luz del reino.

Es propicio actuar como huésped de un rey.

Aquí se alude a un hombre que conoce los secretos para llevar a un reino
a su florecimiento. Un hombre así ha de ser colocado en un puesto
decisivo desde el que pueda actuar. Debe ser un huésped, por así
decirlo; esto es, debe poder actuar con autonomía, y merece que se lo
honre y que no se lo use como instrumento.

Nueve en el quinto puesto significa:

Contemplación de mi vida.

El noble está libre de fallas.

Un hombre que ocupa un puesto de autoridad y hacia quien los demás
elevan la mirada, ha de estar constantemente dispuesto al autoexamen. La
forma correcta de hacerlo no consiste, empero, en ponerse a meditar
pasivamente sobre sí mismo, sino antes bien en el examen de los efectos
que emanan de uno. Únicamente siendo buenos tales efectos y ejerciendo
uno una buena influencia sobre otros, la contemplación de la propia vida
le dará la satisfacción de verse libre de faltas.

Al tope un nueve significa:

Contemplación de su vida.

El noble está libre de tacha.

Mientras que la línea anterior representaba a un hombre que se contempla
a sí mismo, en este punto, en la posición más alta, queda excluido todo
lo personal, todo lo que se refiere al propio yo. Se presenta aquí a un
sabio que liberado del yo y más allá del trajín mundanal, contempla las
leyes de la vida, descubriendo así, como cosa suprema, la posibilidad de
quedar libre de fallas.`

names[21] = `Shih Ho / La Mordedura Tajante`

texts[21] = `arriba Li, Lo Adherente, el fuego

abajo Chen, Lo Suscitativo, el trueno

El signo representa una boca abierta (cf. N^(o) 27, I), entre cuyos
dientes hay un obstáculo (en el cuarto puesto). Por consiguiente no
pueden juntarse los labios. Para poder hacerlo es necesario atravesar el
obstáculo mordiéndolo enérgicamente. El hexagrama se compone además de
los signos que indican trueno y rayo, mostrando así cómo en la
naturaleza los obstáculos se eliminan violentamente. El hecho de
atravesar el obstáculo mordiéndolo con energía supera el impedimento que
se opone a la unión. La tormenta, con truenos y rayos, vence la tensión
perturbadora presente en la atmósfera. Recurrir al proceso judicial y la
penalidad correspondiente vence las perturbaciones de la armoniosa
convivencia, ocasionadas por criminales y calumniadores. A diferencia
del signo N^(o) 6, El Pleito, donde se trata de procesos civiles, en
este caso se trata del proceso penal.

EL DICTAMEN

La Mordedura Tajante tiene éxito.

Es propicio administrar justicia.

Cuando un obstáculo se opone a la unión, el éxito se obtiene
atravesándolo con una enérgica mordedura. Esto rige en todas las
circunstancias. En todos los casos en que no se logra la unidad, ello se
debe a que es demorada por un entrometido, un traidor, un
obstaculizador, alguien que frena. Entonces es necesario intervenir a
fondo y con energía, para que no surja ningún perjuicio duradero. Tales
obstáculos conscientes no desaparecen por sí mismos. El enjuiciamiento y
castigo se hacen necesarios para provocar la intimidación y la
consiguiente eliminación.

Pero es preciso proceder al respecto de un modo adecuado. El signo se
compone de Li, claridad, y Chen, conmoción. Li es blando, Chen es duro.
La dureza y la conmoción sin más serían demasiado vehementes al aplicar
castigos. A su vez, la claridad y la blandura serían demasiado débiles.
Pero los atributos de ambos trigramas unidos generan la medida justa. Es
importante que el hombre que decide, representado por el quinto trazo,
sea de naturaleza bondadosa, aun cuando en virtud de su posición,
inspire una actitud de gran respeto.

LA IMAGEN

Trueno y rayo: la imagen de la Mordedura Tajante.

Así los reyes de antaño

afirmaban las leyes mediante penalidades claramente establecidas.

Las penalidades son aplicaciones ocasionales de las leyes. Las leyes
contienen el registro de los castigos. Reina claridad cuando al
establecer los castigos se discrimina entre leves y graves de acuerdo
con los correspondientes delitos. Esto lo simboliza la claridad del
relámpago. La afirmación de las leyes se lleva a cabo mediante la justa
aplicación de los castigos. Esto es simbolizado por el terror del
trueno. Claridad y severidad cuyo objetivo es mantener a los hombres en
la observación del debido respeto. Los castigos no son importantes en sí
mismos. Los obstáculos en la convivencia de los hombres se acrecientan
siempre por la falta de claridad en las determinaciones penales y debido
a la negligencia en su ejecución. Únicamente mediante la claridad y una
resuelta rapidez en la ejecución de los castigos se afirman las leyes.

LAS DIFERENTES LÍNEAS

Al comienzo un nueve significa:

Tiene metido los pies en el cepo, al punto de desaparecer sus dedos.

No hay defecto.

Cuando alguien, ya en el primer intento de cometer algo malo, sufre
inmediatamente el castigo, la pena suele ser leve. Tan sólo los dedos de
los pies son cubiertos por el cepo. De este modo se le impide seguir
pecando y logra liberarse de faltas. Es esta una advertencia para
detenerse a tiempo en el camino del mal.

Seis en el segundo puesto significa:

Muerde a través de carne blanda, al punto de desaparecerle la nariz.

No hay defecto.

Es fácil distinguir en el presente caso entre justicia e injusticia. Es
como cuando uno muerde a través de carne blanda. Pero se topa con un
pecador duro, empedernido, y entonces, debido a la excitación, se excede
un poco en su cólera. La desaparición de la nariz durante la dentellada
significa que uno pierde el delicado sentido del olfato a causa de su
indignación. Pero esto no perjudica gran cosa, pues el castigo como tal
es justo.

Seis en el tercer puesto significa:

Muerde carne vieja desecada, y se topa con algo venenoso.

Pequeña humillación. No hay defecto.

Alguien debe ejecutar un castigo y no dispone para ello de suficiente
poder y prestigio. Por lo tanto, los castigados no se someten. Se trata
de una causa vieja —simbolizada por carne de venado con sal— y al
respecto uno choca con dificultades. La vieja carne está echada a
perder. Uno atrae sobre sí, al ocuparse del asunto, venenosas
manifestaciones de odio; a causa de ello cae en una situación un tanto
vergonzosa. Mas como el requerimiento del tiempo fue castigar,
permanecerá libre de tacha a pesar de todo.

Nueve en el cuarto puesto significa:

Muerde carne seca cartilaginosa.

Obtiene flechas metálicas.

Es propicio

tener presente las dificultades y ser perseverante.

¡Ventura!

Deben vencerse dificultades muy grandes. Poderosos adversarios han de
ser castigados. Esto es muy fatigoso. Sin embargo se logra. Es
necesario, empero, ser duro como el metal y recto como una flecha, para
vencer tales dificultades. Si uno las conoce y persevera, alcanzará la
ventura. Finalmente la difícil tarea obtendrá éxito.

Seis en el quinto puesto significa:

Muerde carne fibrosa desecada.

Obtiene oro amarillo.

Ser consciente del peligro, con perseverancia.

No hay defecto.

Tiene uno que resolver un caso por cierto nada fácil, pero claro. El
carácter propio tiende sin embargo a la benevolencia. Por eso es
necesario concentrarse, para ser como el oro amarillo, vale decir
imparcial —el amarillo es el color del centro— y leal como el oro.
Únicamente si uno se mantiene constantemente consciente de los peligros
que surgen de la responsabilidad que uno ha tomado sobre sí, permanecerá
libre de faltas.

Al tope un nueve significa:

Tiene metido el cuello en el collar de madera

al punto de desaparecerle las orejas.

¡Desventura!

En este caso, a diferencia de la línea inicial, se trata de un hombre
incorregible. Lleva como castigo el collar de madera. Pero sus orejas
desaparecen dentro del mismo. Ya no oye las advertencias, se muestra
sordo frente a ellas. Este empecinamiento conduce a la
desventura.`

names[22] = `Pi / La Gracia (Lo Agraciado)`

texts[22] = `arriba Ken, El Aquietamiento, la montaña

abajo Li, Lo Adherente, el fuego

El signo muestra un fuego que prorrumpe de las secretas profundidades de
la tierra y, llameando hacia lo alto, ilumina y embellece la montaña, la
celestial altura. La Gracia, la forma bella, es necesaria en toda unión,
a fin de que ésta sea ordenada y afable y no caótica y desordenada.

EL DICTAMEN

La Gracia tiene éxito.

En lo pequeño es propicio emprender algo.

La Gracia aporta el éxito. Mas no constituye lo esencial, el fundamento,
sino tan sólo la ornamentación. Por eso sólo se la debe aplicar con
moderación y en pequeña medida. En el trigrama inferior, el fuego, una
línea blanda se introduce entre dos líneas fuertes y las embellece;
ahora bien, las líneas fuertes constituyen la esencia, la línea débil es
la forma embellecedora. En el trigrama superior, la montaña, la línea
fuerte se coloca de un modo determinante en la cúspide, de modo que
también se la considera como decisiva en este caso. En la naturaleza, se
observa en el cielo la fuerte luz del sol, en la que se basa la vida del
mundo. Pero esta condición de lo fuerte, lo esencial, se ve transmutada:
encuentra una variación graciosa por la presencia de la luna y las
estrellas. En la vida humana la forma bella consiste en el hecho de
existir ordenamientos sólidos, que se mantienen firmes como montañas, y
sé tornan afables gracias a la clara belleza. La contemplación de las
formas que hay en el cielo confiere la capacidad de comprender el tiempo
con sus cambiantes exigencias. La contemplación de las formas que se
observan en la vida humana confiere la posibilidad de configurar el
mundo.

LA IMAGEN

Abajo, al pie de la montaña, está el fuego: la imagen de La Gracia.

Así procede el noble al aclarar

asuntos corrientes,

mas no osa decidir de este modo los asuntos conflictuales.

El fuego, cuyo brillo ilumina y da gracia a la montaña, no alumbra a
gran distancia. De este modo, si bien la forma agraciada resulta
suficiente como para decantar y aclarar asuntos menores, no es posible
resolver así problemas importantes. Éstos requieren una mayor seriedad.

LAS DIFERENTES LÍNEAS

Al comienzo un nueve significa:

Confiere gracia a los dedos de sus pies, abandona el carruaje y camina.

Una posición inicial y en un puesto subordinado obliga a que uno tome
sobre sí los afanes que requiere el avance. Si bien tendría la
posibilidad de procurarse subrepticiamente un alivio —representado por
el símbolo del carruaje—, un hombre íntegro desdeñará semejantes
facilidades adquiridas de manera dudosa. Encuentra que es más agraciado
andar a pie que viajar en coche sin tener derecho a ello.

Seis en el segundo puesto significa:

Confiere gracia a su pera.

La barba no es algo independiente. Sólo puede ser movida junto con el
mentón. El símbolo significa, pues, que la forma ha de tomarse en cuenta
sólo como añadidura, como fenómeno acompañante del contenido.

La barba es un adorno superfluo. Su cultivo independiente —sin tomar en
consideración el contenido interno que se ha de adornar— sería pues
señal de una cierta vanidad.

Nueve en el tercer puesto significa:

Agraciado y húmedo.

Perseverancia duradera trae ventura.

Uno se encuentra en una situación de la vida sumamente agraciada. Está
rodeado de gracia y de un húmedo resplandor transfigurado. Una gracia
semejante puede ciertamente ser un adorno, pero también puede conducir
al hundimiento. De ahí la advertencia de no hundirse en esa húmeda
sensación confortable, a mantener antes bien un estado de duradera
perseverancia. En ello se basa la ventura.

Seis en el cuarto puesto significa:

¿Gracia o sencillez?

Un caballo blanco llega como volando.

Él no es un raptor,

se propone cortejar en el plazo debido.

Uno se encuentra en una situación en la cual surgen dudas acerca de si
debe seguir buscando la gracia del brillo externo, o si no sería mejor
que retornase a la sencillez. Esa duda ya implica la respuesta. Desde
afuera se anuncia una confirmación. Viene llegando como un blanco
caballo alado. El color blanco alude a la sencillez. Y si bien, en un
primer momento, podría resultar decepcionante tener que prescindir de
las comodidades que de la otra manera acaso se obtendrían, se encuentra
tranquilidad gracias a la leal unión con el amigo y cortejante. El
caballo alado es el símbolo de los pensamientos que vuelan más allá de
toda limitación de tiempo y espacio.

Seis en el quinto puesto significa:

Gracia en colinas y jardines.

La madeja de seda es pobre y pequeña.

Humillación, mas finalmente ventura.

Se retrae uno del trato con los hombres del bajo mundo que sólo buscan
lujo y ostentación, y se refugia en la soledad de las alturas. Allí
encuentra a un hombre hacia el cual levanta la mirada y al que quisiera
tener por amigo. Pero los obsequios de visitante que puede ofrecerle son
escasos e insignificantes, y siente vergüenza. Sin embargo, lo que
importa no es la dádiva exterior, sino la verdadera actitud interior:
por eso finalmente todo sale bien.

Al tope un nueve significa:

Gracia sencilla.

Ningún defecto.

Aquí, en la etapa más alta, se desprende uno de todo adorno. Ya la forma
no oculta el contenido, sino que permite que éste alcance su plena
valía. La gracia suprema no consiste en una ornamentación exterior de la
materia, sino que es sencilla, objetiva conformación.`

names[23] = `Po / La Desintegración`

texts[23] = `arriba Ken, El Aquietamiento, la montaña

abajo K’un, Lo Receptivo, la Tierra

Las líneas oscuras están a punto de trepar hacia arriba y de provocar la
caída hasta del último trazo firme y luminoso, ejerciendo sobre él su
influencia corrosiva. Lo vulgar, lo oscuro lucha contra lo noble, lo
fuerte; no lo hace directamente, sino que lo socava lentamente con su
acción hasta que finalmente se derrumba.

El signo representa la imagen de una casa. El trazo del tope es el
techo. Al romperse el techo, la casa se derrumba.

El signo se adjudica al noveno mes (octubre-noviembre). La fuerza Yin se
aproxima, penetrando con creciente poder, y está a punto de desplazar
por completo a la fuerza Yang.

EL DICTAMEN

La Desintegración. No es propicio ir a parte alguna.

Es una época en que avanzan los vulgares y se encuentran precisamente a
punto de desplazar a los últimos vigorosos y nobles que quedan. Por eso,
fundándose estas condiciones en la corriente del tiempo, no resulta
favorable para el noble emprender algo en tales circunstancias. De los
símbolos y sus atributos debe deducirse el correcto comportamiento que
ha de observarse en semejantes épocas adversas. El trigrama inferior
significa la Tierra, cuyo atributo es la docilidad y la entrega; el
trigrama superior significa la montaña, cuyo atributo es la quietud, la
calma. Esto sugiere el consejo de resignarse, de adaptarse a la mala
época y de mantenerse quieto. No se trata en este caso del hacer humano,
sino de condiciones temporales que, de acuerdo con las leyes del Cielo,
denotan el cambio entre incremento y mengua, entre plenitud y vacío. No
es posible obrar en contra de semejantes condiciones de la época. Por lo
tanto, no se trata de cobardía, sino de sabiduría, si uno se aviene
dócilmente a evitar la acción.

LA IMAGEN

La montaña descansa sobre la tierra: la imagen de la Desintegración.

Así únicamente mediante ricas dádivas a los inferiores pueden los
superiores asegurar su posición.

La montaña descansa sobre la tierra. Cuando es empinada y angosta y
carece de base ancha, tendrá que derrumbarse. Únicamente elevándose
desde la tierra, ancha y grande, y no orgullosa y abrupta, ve asegurada
su posición. Así también los gobernantes descansan sobre la ancha base
del pueblo. También en su caso es cuestión de ser generoso y magnánimo
como lo es la tierra, portadora de todas las cosas; entonces harán que
su posición sea tan segura como la que tiene una montaña en su
tranquilidad.

LAS DIFERENTES LÍNEAS

Al comienzo un seis significa:

El lecho se desintegra por la pata.

Los perseverantes son aniquilados. Desventura.

Se allegan los hombres vulgares y comienzan subrepticiamente con su
destructiva acción de intriga subterránea, para de esta manera socavar
desde abajo el sitio en que se halla el noble. Los adictos al soberano
que permanecen leales a él, son aniquilados mediante calumnias y toda
clase de posibles maquinaciones. La situación es desventurada. Pero no
se puede hacer otra cosa más que aguardar.

Seis en el segundo puesto significa:

El lecho se desintegra por el borde.

Los perseverantes son aniquilados. Desventura.

Crece el poder de los viles. Ya el peligro se viene acercando a la
propia persona. Ya se presentan síntomas nítidos. Se ve perturbada la
calma. Además de encontrarse en esta peligrosa situación, uno carece de
todo auxilio y solidaridad tanto desde arriba como desde abajo. En tal
situación de aislamiento se impone una extrema cautela. Es necesario
orientarse de acuerdo con el requerimiento del tiempo y de apartarse
oportunamente. Si quisiera uno mantener inflexiblemente y con
perseverancia su punto de vista, esta actitud lo llevaría a su
perdición.

Seis en el tercer puesto significa:

Él desintegra su ligazón con ellos. No hay tacha.

Se halla uno en medio de un mal ambiente, con el cual lo ligan
relaciones externas. Existe empero un vínculo interior con un hombre
superior. Así consigue el sostén interior que le hace posible liberarse
de la índole de los hombres que lo rodean. Ciertamente se entra así en
antagonismo con ellos, pero esto no es un error.

Seis en el cuarto puesto significa:

El lecho se desintegra hasta la piel. Desventura.

La desgracia alcanza aquí al propio cuerpo, ya no sólo al sitio de
descanso. No se ha añadido ninguna advertencia, ninguna palabra
suplementaria. La desventura ha alcanzado su culminación: ya no es
posible contrarrestarla.

Seis en el quinto puesto significa:

Un cardumen de peces. Por las damas de palacio llegan favores.

Todo es propicio.

Aquí, en inmediata proximidad del principio fuerte y luminoso situado
arriba, la índole de lo oscuro se transforma. Ya no enfrenta con
rencillas al principio fuerte, sino que se somete a su guía. Más aún,
encabezando a los demás trazos débiles los conduce a todos hacia el
trazo fuerte, tal como una princesa reinante conduce a sus servidoras
hacia su esposo como si fuesen un cardumen de peces, logrando así su
favor. Al subordinarse de este modo lo inferior a lo superior, encuentra
su dicha, y lo superior a su vez impone su derecho. Por eso todo va
bien.

Al tope un nueve significa:

Hay un gran fruto todavía no comido.

El noble obtiene un carruaje.

Al vulgar se le desintegra la casa.

Aquí se ha alcanzado el fin de la desintegración. Cuando la desventura
agota su furia, llegan nuevamente tiempos mejores. Todavía queda la
simiente del bien. Precisamente al caer el fruto sobre la tierra, de su
semilla vuelve a crecer el bien. El noble recupera otra vez su
influencia y su actuación eficiente. Es sostenido por la opinión pública
como por un carruaje. El vulgar, en cambio, sufre como una venganza la
consecuencia de su propia malignidad. Su casa se desintegra. Ahí actúa
una ley de la naturaleza. El mal no sólo es nefasto para el bien, sino
que en sus últimas consecuencias se destruye a sí mismo; pues el mal,
que vive únicamente de la negación, no puede existir por sí mismo.
También para el hombre vulgar es mejor verse disciplinado por un noble.`

names[24] = `Fu / El Retorno (El Tiempo del Solsticio)`

texts[24] = `arriba K’un, Lo Receptivo, la Tierra

abajo Chen, Lo Suscitativo, el trueno

El tiempo del solsticio, del retorno solar, queda sugerido por el hecho
de que, luego de haber desalojado las líneas oscuras a las luminosas,
impulsando a todas éstas a salir por arriba, ahora vuelve a entrar en el
signo un trazo luminoso que llega desde abajo. El tiempo de la oscuridad
ha pasado. El solsticio trae el triunfo de la luz. El signo se adjudica
al undécimo mes, el mes del solsticio (diciembre-enero).

EL DICTAMEN

El Retorno. Éxito.

Salida y entrada sin falla.

Llegan amigos sin tacha.

Va y viene el camino.

Al séptimo día llega el retorno.

Es propicio tener adonde ir.

Luego de una época de derrumbe llega el tiempo del solsticio, de la
vuelta. La fuerte luz que antes fuera expulsada, vuelve a ingresar. Hay
movimiento, y este movimiento no es forzado. El trigrama superior K’un
se caracteriza por la entrega. Se trata, pues, de un movimiento natural
de aparición espontánea. Por eso también resulta enteramente fácil la
transformación de lo viejo. Lo viejo es eliminado, se introduce lo
nuevo: ambas cosas corresponden al tiempo y por lo tanto no causan
perjuicios. Se forman asociaciones de personas que profesan ideas
iguales. Y esa alianza se realiza con pleno conocimiento público;
corresponde al tiempo, por lo tanto toda aspiración particular y egoísta
queda excluida y tales asociaciones no implican falta alguna. El retorno
tiene su fundamento en el curso de la naturaleza. El movimiento es
circular, cíclico. El camino se cierra sobre sí mismo. No hace falta,
pues, precipitarse en ningún sentido artificialmente. Todo llega por sí
mismo tal como lo requiere el tiempo. Tal es el sentido de Cielo y
Tierra.

Todos los movimientos se realizan en seis etapas. La séptima etapa trae
luego el retorno. De este modo, al correr del séptimo mes después del
solsticio de verano, a partir de lo cual el año desciende, llega el
solsticio de invierno, y del mismo modo una vez pasada la séptima hora
doble siguiente a la puesta del sol, llega la salida del sol. Por esta
causa el número siete es el número de la luz joven, que se genera por el
hecho de que el número seis, que es el de la gran oscuridad, se
incremente por el uno. De este modo se introduce el movimiento en la
quietud, en la detención.

LA IMAGEN

El trueno en medio de la tierra: la imagen del Tiempo del Solsticio.

Así, durante el tiempo del retorno solar, los antiguos reyes clausuraban
los pasos.

Mercaderes y forasteros no se trasladaban,

y el soberano no viajaba visitando las comarcas.

El solsticio de invierno se celebra en la China desde épocas remotas
como período de descanso del año: una costumbre que se ha conservado
hasta hoy, en el período de descanso de Año Nuevo. En el invierno la
energía vital —simbolizada por Lo Suscitativo, el trueno— se encuentra
todavía bajo tierra. El movimiento se halla en sus primeros comienzos.
Por eso es necesario fortalecerlo mediante el reposo a fin de que no lo
desgaste un consumo prematuro. Este principio fundamental, de hacer que
la energía resurgente se fortifique mediante el descanso, rige con
respecto a todas las circunstancias correlacionadas. La salud que
retorna después de una enfermedad, el entendimiento que retorna después
de una desunión: todo debe tratarse en sus primeros comienzos con
protección y delicadeza, para que el retorno conduzca así a la
floración.

LAS DIFERENTES LÍNEAS

Al comienzo un nueve significa:

Retorno desde poca distancia.

No ha menester ningún arrepentimiento.

¡Gran Ventura!

Pequeñas desviaciones del bien no pueden evitarse. Lo único que hace
falta es emprender a tiempo la vuelta, antes de que se haya ido
demasiado lejos. Esto es particularmente importante en cuanto a la
formación del carácter. Todo pensamiento maligno, por leve que sea, debe
ser inmediatamente eliminado, antes de que avance demasiado y se afirme.
De este modo no habrá necesidad de arrepentimiento y todo marchará a la
perfección.

Seis en el segundo puesto significa:

Tranquilo retorno. ¡Ventura!

El volverse atrás requiere siempre una decisión y es un acto de
autodominio. Se ve facilitado encontrándose uno en buena compañía. Si se
aviene a condescender y a buscar su orientación entre gente buena, eso
aportará ventura.

Seis en el tercer puesto significa:

Reiterado retorno. Peligro. Ningún defecto.

Hay personas que denotan cierta inestabilidad interior. Necesitan
volverse atrás sin cesar, en lo que respecta al rumbo de su voluntad. En
ese permanente apartarse del bien debido a inclinaciones indominables, y
volverse nuevamente hacia el bien por haber logrado enmendar su
decisión, reside un peligro. Pero ya que de esta manera no se produce,
por otra parte, una afirmación del mal, ello no excluye la tendencia
general hacia una eliminación del defecto.

Seis en el cuarto puesto significa:

Deambulando en medio de los demás,

uno retorna solo.

Alguien se halla en medio de compañías de gente inferior, pero posee
vínculos internos con un amigo fuerte y bueno. Por esta causa emprende
sólo el retorno. Aun cuando no se habla de recompensa, ni de castigo,
esto sin duda es favorable, pues semejante resolución a dirigirse hacia
el bien lleva su recompensa en sí misma.

Seis en el quinto puesto significa:

Magnánimo retorno. Ningún arrepentimiento.

Llegado el tiempo de volverse, es menester no ocultarse tras mezquinos
pretextos, sino de recurrir a la introspección y autoexaminarse. Y si
uno ha cometido algún error, deberá reconocer su falta con magnánima
decisión. He ahí un camino del que nadie habrá de arrepentirse.

Al tope un seis significa:

Extravío en el retomo. Desventura.

Desgracia desde fuera y desde adentro.

Si de este modo hace uno marchar ejércitos,

sufrirá finalmente una gran derrota,

y esto será nefasto para el soberano del país.

Durante diez años ya no estará uno en condiciones de atacar.

Cuando alguien pierde el momento justo para volverse, caerá en la
desventura. Tal desdicha se funda interiormente en una falsa posición
frente a los nexos universales. La desdicha externa será consecuencia de
esta falsa posición. Es la tozudez y su enjuiciamiento lo que aquí se
describe.`

names[25] = `Wu Wang / La Inocencia (Lo Inesperado)`

texts[25] = `arriba Ch’ien, Lo Creativo, el Cielo

abajo Chen, Lo Suscitativo, el trueno

En lo alto está Ch’ien, el Cielo, abajo se halla Chen, el movimiento. El
trigrama inferior, Chen, se define por el trazo fuerte que ha recibido
desde arriba, desde el Cielo. Si, conforme a ello, el movimiento
responde a la ley del Cielo, el hombre es inocente y sin falsía. He ahí
lo genuino, lo natural, que ninguna clase de reflexiones o de segundas
intenciones ha enturbiado. Allí donde se nota la intención, se pierde la
verdad y la inocencia de la naturaleza. Naturaleza sin la directiva del
espíritu no es verdadera naturaleza, sino naturaleza degenerada.
Partiendo de la idea de lo natural, la formación de ideas prosigue
todavía parcialmente, y así el hexagrama llega a abarcar también la idea
de lo no intencionado, lo inesperado.

EL DICTAMEN

La Inocencia. Elevado éxito.

Es propicia la perseverancia.

Si alguien no es recto tendrá desdicha,

y no será propicio emprender algo.

El hombre ha recibido desde el Cielo su naturaleza originalmente buena,
inocente, con el designio de que ésta lo guíe en todos sus movimientos.
Al entregarse a esta índole divina que tiene dentro de sí, alcanza el
hombre una límpida inocencia, la cual, sin segundas intenciones en
cuanto a recompensas y ventajas, hace sencillamente y con instintiva
certeza lo que es recto. Esta certeza instintiva obra elevado éxito, y
es propicia mediante la perseverancia. Pero no todo es naturaleza
instintiva en ese elevado sentido de la palabra, sino que lo es tan sólo
lo recto, aquello que concuerda con la voluntad del Cielo. Sin observar
lo recto en este sentido, un modo de obrar instintivo e irreflexivo, tan
sólo acarreará desgracia. El Maestro Kung dijo al respecto: “El que se
aparta de la inocencia, ¿a dónde irá a llegar? La voluntad y la
bendición del Cielo no acompañan sus acciones.”

LA IMAGEN

Bajo el cielo va el trueno:

Todas las cosas alcanzan el estado natural de la inocencia.

Así, ricos en virtud y en correspondencia con el tiempo,

cultivaban y alimentaban los antiguos reyes a todos los seres.

Cuando el trueno —la energía vital— vuelve a agitarse bajo el cielo
durante la primavera, todo brota y crece y todas las criaturas reciben
de la naturaleza creadora la inocencia infantil de la esencia
primigenia. Así obran también los buenos gobernantes de los hombres: con
la riqueza interior de su ser cuidan ellos de todo lo que vive, y de
toda cultura, y realizan a su debido tiempo todo lo que es necesario
para su cultivo.

LAS DIFERENTES LÍNEAS

Al comienzo un nueve significa:

¡Andanza inocente trae ventura!

Los móviles del corazón primeros y originarios son siempre buenos, de
modo que puede seguírselos sin preocupación, en la seguridad de que se
tendrá suerte y se logrará llevar a cabo lo que se intente.

Seis en el segundo puesto significa:

Si cuando se ara no se piensa en cosechar

ni en el uso del campo cuando se desmonta:

entonces será propicio emprender algo.

Toda labor debe realizarse por ella misma, tal como el tiempo y el lugar
lo requieran y sin codiciar de reojo un posible éxito, pues de ese modo
dará su fruto y lo que se emprenda tendrá éxito.

Seis en el tercer puesto significa:

Inmerecida desgracia:

la vaca que alguien dejara estacada,

es ganancia del andariego, pérdida del ciudadano.

A veces la desgracia cae sobre uno sin que tenga culpa alguna, pues se
trata de una desgracia causada por otro, como por ejemplo cuando un
hombre pasa por el camino y se lleva consigo una vaca que encuentra
atada a un poste. Su ganancia es la pérdida del dueño. En todas las
acciones, aun en las inocentes, es necesario orientarse de acuerdo con
el tiempo justo, pues si no una inesperada desgracia cae sorpresivamente
sobre uno.

Nueve en el cuarto puesto significa:

El que es capaz de perseverar, permanecerá sin tacha.

Lo que a uno le pertenece realmente no se puede perder aunque se lo
tire. Por eso no hace falta preocuparse en absoluto al respecto.
Solamente hay que cuidar de permanecer uno leal a su propia esencia sin
escuchar a otros.

Nueve en el quinto puesto significa:

En caso de enfermedad sin culpa propia,

no utilices medicamento alguno.

Eso mejorará por sí solo.

Si desde afuera, por azar, nos llega un mal inesperado, no causado por
la propia naturaleza de uno, ni teniendo en ésta su punto de apoyo, no
hemos de echar mano de medios externos para su eliminación; antes bien
debe dejarse que la naturaleza siga tranquilamente su curso y entonces
todo mejorará por sí mismo.

Al tope un nueve significa:

Actuación inocente trae desgracia.

Nada es propicio.

Encontrándose uno en una situación en la cual, de conformidad con el
tiempo, ya no puede haber progreso alguno, será cuestión de aguardar
tranquilamente y sin segundas intenciones. Si uno actúa irreflexivamente
con la intención de avanzar contra el destino, no podrá obtener éxito
alguno.`

names[26] = `Ta Ch’u / La Fuerza Domesticadora de lo Grande`

texts[26] = `arriba Ken, El Aquietamiento, la montaña

abajo Ch’ien, Lo Creativo, el Cielo

Lo “creativo” es domesticado, amansado, por el “aquietamiento”. Esto
confiere gran fuerza, de modo muy distinto de lo que sucede en el N^(o)
9, donde sólo lo “suave” amansa a lo “creativo”. Mientras allí es un
solo trazo débil el que ha de domar a los cinco trazos fuertes, aquí se
trata de dos; aparte del ministro, está además el príncipe. De ahí que
su fuerza domesticadora sea mucho más poderosa. Este signo implica un
triple significado: el cielo en medio de la montaña da la idea de firme
sostenimiento, de sujeción = mantener junto, unido; el signo Ken, que
mantiene quieto al signo Ch’ien, da la idea de firme sostenimiento o
sujeción = detener, mantener detenido; por lo demás, al ser el rector
del signo en lo alto un trazo fuerte al que se honra y atiende como a un
sabio, surge la idea de firme sostenimiento o sujeción = dar sustento,
alimentar, atender, criar. Esta última idea cobra vigencia especialmente
en el caso del rector del signo, el fuerte trazo superior que representa
al sabio.

EL DICTAMEN

La Fuerza Domesticadora de lo Grande.

Es propicia la perseverancia.

Trae ventura no comer en casa.

Es propicio atravesar las grandes aguas.

Para sujetar y acumular fuerzas grandes y creadoras se requiere un
hombre fuerte y lúcido al que honra el gobernante. El signo Ch’ien
indica una potente fuerza creadora, el signo Ken firmeza y verdad; ambos
indican luz y claridad y una diaria regeneración del carácter. Sólo
mediante tal autorregeneración cotidiana permanece uno en la cúspide de
su vigor. Mientras que en épocas tranquilas la fuerza de la costumbre
contribuye a mantener el orden, en épocas grandes (excepcionales) como
ésta, de acumulación de fuerzas, todo dependerá del poder de la
personalidad. Mas, puesto que los dignos se ven honrados, como lo
demuestra la fuerte personalidad a quien el gobernante ha confiado la
conducción, resulta que es favorable no comer en casa, sino ganarse el
pan en la vida pública, mediante la aceptación de un cargo, de una
función. Uno se encuentra en armonía con el cielo; por eso se obtiene
éxito aun en empresas difíciles y riesgosas como el cruce de las grandes
aguas.

LA IMAGEN

El cielo en medio de la montaña:

La imagen de La Fuerza Domesticadora de lo Grande.

Así el noble se familiariza con multitud de dichos de tiempos remotos y
de hechos del pasado,

a fin de afirmar de esta suerte su carácter.

El cielo en el centro de la montaña señala tesoros ocultos. Del mismo
modo, en las palabras y los hechos del pasado se esconde un tesoro que
puede ser utilizado para lograr la afirmación y el acrecentamiento del
propio carácter. He ahí la recta manera de estudiar: la que no se limita
al saber histórico, sino que transforma cada vez lo histórico en
actualidad, mediante la aplicación de ese saber.

LAS DIFERENTES LÍNEAS

Al comienzo un nueve significa:

Hay peligro. Es propicio desistir.

Bien desearía uno un enérgico avance. Las circunstancias, empero,
implican un impedimento. Uno se ve sujetado, detenido. Así, querer
forzar el progreso conduciría a la desgracia. Por lo tanto, será mejor
entrar en razón y esperar hasta que a las energías acumuladas se les
abra una salida.

Nueve en el segundo puesto significa:

Al carruaje se le quitan los bujes del eje.

Aquí el avance se ve frenado de un modo parecido a lo que ocurre en el
caso de La Fuerza Domesticadora de lo Pequeño (N^(o) 9, nueve en el
tercer puesto). Pero mientras que allí el poder obstructor es pequeño, y
se produce un conflicto entre lo que puja hacia adelante y lo que frena,
y en consecuencia al carro se le saltan los rayos de las ruedas, aquí
ese poder es indiscutiblemente superior. De ahí que no haya lucha. Uno
se somete y, por lo pronto, se le quitan al carruaje los soportes de los
ejes, vale decir que por el momento se limita uno a esperar, Así va
concentrándose la elástica fuerza de tensión, necesaria para un enérgico
avance ulterior.

Nueve en el tercer puesto significa:

Un buen caballo que sigue a otros.

Es propicio tener conciencia del peligro y perseverar.

Día a día ejercítate en el gobierno del carruaje

y la defensa armada.

Es propicio tener a dónde ir.

Se despeja el camino. La inhibición ha cesado. Uno está vinculado a una
fuerte voluntad que opera en un sentido coincidente. Se avanza como un
buen caballo que sigue a otro. Pero aún continúa la amenaza de peligro
ante la cual debe uno permanecer alerta, a fin de no permitir que lo
despojen de su firmeza. Así, por una parte, es preciso ejercitarse en lo
que lleva hacia adelante y, por otra parte, en lo que protege contra
cualquier ataque inesperado. En tal caso es bueno tener una meta hacia
la cual encaminarse con todo empeño.

Seis en el cuarto puesto significa:

La tablilla protectora de un joven toro.

¡Gran ventura!

Esta línea y la subsiguiente son las que doman y refrenan a las de
abajo, empeñadas en avanzar. Antes de que a un toro le crezcan los
cuernos, se coloca sobre su frente una tablilla protectora cuya función
es la de impedir que, una vez crecidos los cuernos, éstos puedan
lastimar. Prevenir el brote de ferocidad antes que se manifieste es una
buena forma de domesticación. De este modo se obtiene un éxito fácil y
grande.

Seis en el quinto puesto significa:

El diente de un jabalí capón. ¡Ventura!

Aquí la doma de lo que puja impetuosamente hacia adelante se ha logrado
de un modo indirecto. El colmillo del jabalí es de por sí peligroso;
pero si la naturaleza del jabalí se modifica, éste pierde su
peligrosidad. Así, pues, no hay que combatir la ferocidad directamente,
aun tratándose de seres humanos; antes bien es preciso extirpar las
raíces de la ferocidad.

Al tope un nueve significa:

Se alcanza el camino del cielo. Éxito.

El tiempo de la represión ha pasado. La fuerza largamente acumulada
gracias a la represión, se abre camino y obtiene gran éxito. Se trata de
un sabio, honrado por el gobernante, cuyos principios llegan a imponerse
y modelan el mundo.`

names[27] = `I / Las Comisuras de la Boca (La Nutrición)`

texts[27] = `arriba Ken, El Aquietamiento, la montaña

abajo Chen, Lo Suscitativo, el trueno

El signo es la imagen de una boca abierta: arriba y abajo los labios
firmes y, entre ellos, la abertura de la boca. De la imagen de la boca,
por la que uno recibe los alimentos con el fin de nutrirse, pasa la idea
a la nutrición propiamente dicha. En las tres líneas de abajo se
representa la nutrición en sí, vale decir la alimentación corporal; con
las tres líneas superiores se representa la nutrición y el cuidado
brindados a los demás, vale decir la alimentación espiritual, o
superior.

EL DICTAMEN

Las Comisuras de la Boca. Perseverancia trae ventura.

Presta atención a la nutrición, y a aquello con que

trata de llenar su boca uno mismo.

Al dispensar cuidados y alimentos es importante que uno se ocupe de
personas rectas y se preocupe en cuanto a su propia alimentación, del
modo recto de realizarla. Cuando se quiere conocer a alguien, sólo es
menester prestar atención a quién dispensa sus cuidados y cuáles son los
aspectos de su propio ser que cultiva y alimenta. La naturaleza nutre
todos los seres. El gran hombre alimenta y cultiva a los experimentados
y capaces, valiéndose de ellos para velar por todos los hombres.

Mong Tse (VI, A, 14) dice al respecto: “Para reconocer si alguien es
capaz o incapaz, no hace falta observar ninguna otra cosa sino a qué
parte de su naturaleza concede particular importancia. El cuerpo tiene
partes nobles e innobles, partes importantes y partes nimias. No debe
perjudicarse lo importante a favor de lo nimio, ni perjudicar lo noble a
favor de lo innoble. El que cultiva las partes nimias de su ser, es un
hombre nimio. El que cultiva las partes nobles de su ser, es un hombre
noble.”

LA IMAGEN

Abajo, junto a la montaña, está el trueno: la imagen de La Nutrición.

Así el noble presta atención a sus palabras

y es moderado en el comer y el beber.

“Dios surge en el signo de Lo Suscitativo.” Cuando con la primavera se
agitan nuevamente las energías vitales, vuelven a engendrarse todas las
cosas. “Él consuma en el signo del Aquietamiento.” Así, a comienzos de
la primavera, cuando las semillas caen hacia la tierra, todas las cosas
se tornan cabales. Esto da la imagen de La Nutrición expresada en el
movimiento y la quietud. El noble toma esto por modelo en lo relativo a
la alimentación y al cultivo del carácter. Las palabras son un
movimiento que va desde adentro hacia afuera. El comer y el beber son el
movimiento que va desde afuera hacia adentro. Las dos modalidades del
movimiento han de moderarse mediante la quietud, el silencio. Así el
silencio hace que las palabras que salen de la boca no sobrepasen la
justa medida y que tampoco sobrepase la justa medida el alimento que
entra por la boca. De este modo se cultiva el carácter.

LAS DIFERENTES LÍNEAS

Al comienzo un nueve significa:

Dejas escapar a tu tortuga mágica

y me miras a mí, caídas las comisuras de los labios.

¡Desventura!

La tortuga mágica es un ser que no requiere alimento terrestre alguno,
pues posee un poder mágico tal que le permite vivir del aire. La imagen
sugiere que uno, de acuerdo con su naturaleza y su posición, podría
vivir perfectamente en libertad e independencia, por sí mismo. Pero en
lugar de hacerlo renuncia a esta autonomía interior y mira con envidia y
disgusto hacia otros que se encuentran en situación más elevada y que
exteriormente lo pasan mejor. Esta baja envidia, empero, sólo provoca en
el otro un sentimiento de burla y desprecio, y acarrea malas
consecuencias.

Seis en el segundo puesto significa:

Dirigirse hacia la cumbre en busca de alimento.

Apartarse del camino para buscar alimento

de la colina:

continuar así traerá desventura.

Lo normal es que uno mismo se ocupe de su alimentación, o bien que
permita que aquellos que tienen el deber y el derecho de hacerlo, lo
alimenten de un modo correcto. Si a raíz de su debilidad interior
alguien no es capaz de procurarse sólo su alimento, se suscita
fácilmente una inquietud, por cuanto mediante recursos que eluden la
adquisición correcta, admite que gente de posición más alta le obsequie
sus favores y le brinde manutención. Esto es indigno, pues así uno se
desvía de su naturaleza, y si lo hace en forma permanente, el infortunio
será el resultado.

Seis en el tercer puesto significa:

Desviarse de la nutrición.

La perseverancia trae desventura.

Durante diez años no obres de este modo. Nada es propicio.

Quien busca el alimento que no alimenta, irá tambaleándose del deseo al
goce, y en el goce se desvivirá por el deseo. Una apasionada embriaguez
destinada a satisfacer los sentidos no conduce jamás a la meta. Jamás
(diez años constituyen un período cabal) se debe obrar así. Nada bueno
saldrá de ello.

Seis en el cuarto puesto significa:

Dirigirse hacia la cumbre en busca de alimento trae ventura.

Espiar en torno como un tigre, con ojos aguzados e insaciable avidez. No
hay defecto.

A diferencia de seis en el segundo puesto, que representa a un hombre
que se afana pensando solo en su propia ventaja, esta línea simboliza a
un hombre que, desde una posición alta aspira a que su luz brille y
alumbre. Para ello requiere fuerzas auxiliares, puesto que él solo no
podrá alcanzar meta tan elevada. Ávido como un tigre hambriento se
empeñará en encontrar la gente apta, recta. Mas como no actúa así en
procura de su propio bien, sino del bien público, semejante empeño no
constituye una falta.

Seis en el quinto puesto significa:

Desviarse del camino.

Permanecer perseverante trae ventura.

No debe atravesarse las grandes aguas.

Uno es consciente de una carencia; debería cuidar de la alimentación de
los hombres, pero no posee la necesaria energía para ello. Por lo tanto
se impone el desviarse del camino acostumbrado, y acudir a un hombre
espiritualmente superior, aunque exteriormente insignificante, en
procura de consejo y ayuda. Si observa perseverantemente tal actitud,
obtendrá éxito y ventura. Pero tendrá que tener siempre presente su
propio estado de dependencia. No deberá empeñarse en destacar su propia
persona con la pretensión de emprender grandes obras, como por ejemplo
el cruce de las grandes aguas.

Al tope un nueve significa:

La fuente de la nutrición.

Conciencia del peligro aporta ventura.

Es propicio atravesar las grandes aguas.

Aparece aquí un sabio de la más elevada especie, del cual emanan todos
los influjos que velan por la nutrición de los demás. Semejante posición
acarrea una grave responsabilidad; si se mantiene consciente de esa
responsabilidad, tendrá ventura y podrá emprender, confiado, aun obras
grandes y difíciles, como el cruce de las grandes aguas. Tales obras
aportarán una dicha general, tanto para él como para todos los demás.`

names[28] = `Ta Kuo / La Preponderancia de lo Grande`

texts[28] = `arriba Tui, Lo Sereno, el lago

abajo Sun, Lo Suave, el viento, la madera

El signo se compone de cuatro trazos fuertes en lo interior y dos líneas
débiles en lo exterior. Cuando los fuertes se hallan afuera y los
débiles adentro, todo está bien y no hay sobrecarga o preponderancia; no
se presenta nada extraordinario. En este caso ocurre lo inverso. El
signo representa una viga gruesa y pesada en su parte media, pero
demasiado débil en las puntas. Esto no es un estado duradero. Debe
modificarse, es necesario que pase, pues de otro modo amenaza la
desventura.

EL DICTAMEN

La Preponderancia de lo Grande.

La viga maestra se dobla por el medio.

Es propicio tener a dónde ir.

Logro.

Lo grande tiene sobrepeso. La carga es excesiva para las fuerzas
portadoras. La viga maestra sobre la cual descansa toda la techumbre, se
dobla por el medio, porque sus puntas de sostén son demasiado débiles
para la carga. Se trata de un “tiempo” con una situación que requiere
medidas extraordinarias para ser superada, pues constituye de por sí un
tiempo de excepción. Por eso hay que actuar, tratar de encontrar cuanto
antes una transición: eso promete el éxito; pues si bien prepondera lo
fuerte, ocupa sin embargo el medio, vale decir el centro de gravedad
situado en el interior, de modo que no hay motivo para temer alguna
revolución. Sin embargo nada se logrará con la aplicación de medidas
violentas. Es necesario desatar el nudo penetrando suavemente en el
sentido de la situación (tal como lo sugiere el atributo característico
del trigrama interior Sun); entonces la transición hacia otras
condiciones tendrá éxito. Esto requiere una gran superioridad; por eso
el tiempo de la Preponderancia de lo Grande es realmente un tiempo
grande.

LA IMAGEN

El lago pasa por encima de los árboles:

La imagen de la Preponderancia de lo Grande.

Así el noble, cuando permanece solo, no se aflige, y si debe renunciar
al mundo, no desespera.

Tales tiempos extraordinarios de Preponderancia de lo Grande se asemejan
a una inundación que hace que el lago cubra los árboles. Pero se trata
de situaciones pasajeras. En los diferentes trigramas se indica la
actitud correcta que corresponde adoptar en tales épocas de excepción:
el símbolo de Sun es el árbol que permanece firme aun siendo un árbol
solitario, y la cualidad de Tui es la serenidad que se muestra
impertérrita aun cuando deba renunciar al mundo.

LAS DIFERENTES LÍNEAS

Al comienzo un seis significa:

Colocar debajo un lecho de blanco carrizo. No hay defecto.

Si uno ha de dar comienzo a alguna empresa en épocas extraordinarias,
debe procurar que predomine una cautela también extraordinaria, como
cuando algo pesado que debe apoyarse en el suelo es cuidadosamente
asentado sobre una capa de brotes de junco, a fin de que nada se rompa.
Semejante cautela podría parecer exagerada, pero no implica ningún
error. Toda empresa extraordinaria sólo puede lograrse mediante la
aplicación de una extrema cautela en lo relativo a sus comienzos y sus
bases.

Nueve en el segundo puesto significa:

Un álamo seco hace brotar un retoño de raíz.

Un hombre mayor obtiene una mujer joven.

Todo es propicio.

La madera se sitúa junto al agua; de ahí proviene la imagen de un viejo
álamo que engendra un retoño raigal. Es esta una extraordinaria
revivificación del proceso de crecimiento. La misma situación
extraordinaria se produce cuando un hombre mayor obtiene por esposa a
una muchacha joven que es apropiada para él. A pesar de lo
extraordinario de la situación, todo va bien.

Desde un punto de vista político el sentido es que, en tiempos
extraordinarios, resulta favorable atenerse a los inferiores, pues entre
ellos se da la posibilidad de una renovación.

Nueve en el tercer puesto significa:

La viga maestra se dobla por el medio. Desventura.

Se caracteriza aquí una personalidad que en tiempos de la Preponderancia
de lo Grande trata de imponerse violentamente. No acepta consejos de
otros, por lo tanto los otros tampoco están dispuestos a dar su apoyo.
Con ello crece la carga y así llega al doblamiento o al quebranto. En
tiempos peligrosos, una intervención testaruda y arbitraria tan sólo
acelera el derrumbe.

Nueve en el cuarto puesto significa:

La viga maestra recibe sostén. Ventura.

Si hay segundas intenciones, es humillante.

Valiéndose de relaciones amistosas con los inferiores, un hombre
responsable logra hacerse dueño de la situación. Mas si se propusiera
abusar de sus relaciones para lograr poder y éxito para sí
personalmente, en lugar de preocuparse tan sólo de la salvación de la
totalidad, sería cosa humillante.

Nueve en el quinto puesto significa:

Un álamo reseco da flores.

Una mujer entrada en años obtiene marido.

No hay tacha. No hay elogio.

Un álamo reseco que da flores agota así sus fuerzas y sólo se acerca más
a su fin. Una mujer ya mayor vuelve una vez más a tomar marido. Pero no
se produce ninguna renovación. Todo sigue siendo estéril. Así lo único
que queda es la situación curiosa aun cuando todo se cumpla
honorablemente.

En un sentido político se alude a que, cuando en tiempos inciertos
abandona uno el nexo con los de abajo y sólo se atiene a sus vínculos
con los rangos superiores, va creando con ello un estado nada duradero.

Al tope un seis significa:

Hay que atravesar el agua. Ésta llega a cubrir la coronilla.

Desventura. No hay tacha.

Se describe aquí la situación en la cual lo extraordinario ha llegado a
su colmo. Un hombre valiente se dispone a dar cumplimiento a su tarea
cueste lo que cueste. Así cae en el peligro. El agua pasa por sobre él.
He ahí la desventura. Pero dejar la vida en aras de imponer el bien y lo
recto, es un comportamiento intachable. Hay cosas más importantes que la
vida.`

names[29] = `K’an / Lo Abismal, El Agua`

texts[29] = `arriba K’an, Lo Abismal, el agua

abajo K’an, Lo Abismal, el agua

El signo consiste en la repetición del trigrama K’an. Es uno de los ocho
hexagramas formados por duplicación. El trigrama K’an significa el
precipitarse dentro de algo. Un trazo Yang se ha precipitado cayendo
entre dos trazos Yin y es encerrado por éstos como el agua en la
hondonada de un valle. Es el hijo del medio. Lo Receptivo ha logrado el
trazo medio de Lo Creativo y así se engendra K’an. Como imagen es el
agua, vale decir el agua que llega desde arriba y se pone en movimiento
sobre la tierra, en rios y correntadas, y origina toda vida en la
tierra. Aplicado al hombre representa el corazón, el alma encerrada en
el cuerpo, lo luminoso contenido en el interior de lo oscuro, la razón.
El nombre del signo, como se encuentra repetido, lleva anexada la
sentencia: “repetición del peligro”. Con ello el signo se encarga de
señalar una situación objetiva a la cual es necesario acostumbrarse, y
no una subjetiva actitud mental. Pues el peligro en cuanto actitud
mental subjetiva o bien equivale a intrepidez o bien a una astuta
perfidia. Por eso el peligro también se simboliza como hondonada o
quebrada, esto es, como un estado en el que uno se halla como el agua en
una quebrada, de la cual se logra salir como el agua si se adopta una
adecuada conducta.

EL DICTAMEN

Lo Abismal repetido.

Si eres veraz, tendrás logro en tu corazón,

y lo que hicieres tendrá éxito.

Con la repetición del peligro uno va acostumbrándose a él. El agua da un
ejemplo para la conducta correcta que corresponde en tales condiciones.
Fluye y fluye y rellena todos los lugares por los que pasa hasta sus
bordes y nada más; no retrocede ante ningún sitio peligroso, ante
ninguna caída, y nada le hace perder su índole propia y esencial. En
todas las circunstancias permanece leal a sí misma. Así la veracidad
hace que en circunstancias difíciles uno perciba interiormente, con el
corazón, el fondo de la situación. Y una vez que se ha llegado a ser
interiormente dueño de una situación, fácilmente se logrará por sí mismo
que las acciones exteriores se vean acompañadas por el éxito. En
cuestiones de peligro se trata de poseer la necesaria escrupulosidad que
ayude a despachar realmente todo lo que debe hacerse, y de tener
asimismo la posibilidad de avanzar para no perecer por quedarse uno en
medio del peligro.

Mediante una aplicación activa, el peligro puede adquirir una importante
significación en cuanto medida de protección. Así el cielo posee una
altura peligrosa que lo protege contra todo intento de intervención. Así
la tierra posee montañas y aguas que con sus peligros separan a los
países. Asimismo los soberanos utilizan el peligro como medida de
defensa con el fin de protegerse de los ataques que vienen de afuera y
de los disturbios que vienen de adentro.

LA IMAGEN

El agua fluye ininterrumpidamente y llega a la meta:

la imagen de Lo Abismal reiterado.

Así el noble observa una conducta de constante virtud

y ejerce el negocio de la enseñanza.

El agua alcanza su meta fluyendo sin interrupción. Rellena todo hueco
antes de seguir fluyendo. Lo mismo hace el noble. Él estima como valioso
que el camino del bien se convierta en una cualidad firme de su
carácter, que no sea cosa casual y aislada. También en la enseñanza
brindada a otros, todo es cuestión de ser consecuente, pues únicamente
por la repetición la materia se convierte en propiedad del que aprende.

LAS DIFERENTES LÍNEAS

Al comienzo un seis significa:

Repetición de Lo Abismal.

Dentro del abismo se cae en un hoyo. Desventura.

El acostumbramiento a lo peligroso puede hacer que el peligro se
introduzca en la propia naturaleza del hombre. Uno pretende saber a qué
atenerse, y así se acostumbra al mal. Con ello ha perdido el camino
recto y la desventura será la lógica consecuencia.

Nueve en el segundo puesto significa:

El abismo tiene peligro.

Sólo debe aspirarse a alcanzar cosas pequeñas.

Hallándose en medio del peligro, no debe uno tratar de salir de él sin
más, cueste lo que cueste; por lo pronto tendrá que conformarse con que
el peligro no lo venza. Deberán sopesarse con calma las circunstancias
del tiempo dado y uno se dará por satisfecho con logros pequeños, ya que
por el momento no es posible obtener un éxito grande. También un
manantial al comienzo fluye con escasez y le lleva cierto tiempo
labrarse una vía despejada.

Seis en el tercer puesto significa:

Adelante y atrás, abismo sobre abismo.

En semejante peligro primero detente,

pues si no caerás en un hoyo dentro del abismo.

No actúes así.

Cada paso, hacia adelante y hacia atrás, conduce al peligro. Imposible
pensar en alguna forma de escapar. Por eso es necesario no dejarse
inducir a la acción, con la cual uno solo se hundiría más aún en el
peligro. Antes bien, por desagradable que pueda resultar permanecer en
semejante situación, por el momento es preciso detenerse, hasta que
aparezca alguna salida.

Seis en el cuarto puesto significa:

Una jarra de vino, una escudilla de arroz^([30]) por añadidura, vajilla
de barro cocido,

sencillamente alcanzados por la ventana.

En modo alguno constituye esto una falla.

En tiempos de peligro se acaban las formalidades convencionales y
rebuscadas. Lo principal es una disposición mental veraz. Un
funcionario, antes de ser designado, recurre usualmente a determinados
obsequios de introducción y a recomendaciones. Aquí todo se ve
simplificado al máximo. Los regalos son escasos, no existe ningún
recomendante, uno se presenta solo, y sin embargo no corresponde
avergonzarse por todo esto, con tal que uno abrigue la sincera intención
de practicar la mutua ayuda en el peligro.

También otra idea se sugiere aquí: la ventana es el lugar por el cual
entra la claridad en el cuarto. Si en tiempos difíciles quiere uno
esclarecer a alguien, ha de empezar por aquello que sin más resulte
claro y evidente, y a partir de allí será cosa simple proseguir.

Nueve en el quinto puesto significa:

El abismo no se llena hasta rebasar,

sólo se llena hasta el borde.

No hay defecto.

El peligro surge del hecho de pretender uno llegar demasiado alto. El
agua en la quebrada no se acumula, sino que tan sólo llega hasta el
borde más bajo, el que le permite salir. De tal modo, en medio del
peligro, también sólo hace falta proceder siguiendo la línea de menor
resistencia para alcanzar la meta. Grandes obras no pueden realizarse en
tales épocas; basta con que uno escape del peligro.

Al tope un seis significa:

Atado con sogas y maromas,

encerrado entre muros carcelarios, cercados de espinas:

durante tres años no logra uno orientarse.

¡Desventura!

Un hombre que, en medio de un peligro extremo, ha errado el camino y se
ha enredado, irrescatablemente, en sus pecados, no tiene perspectiva
alguna de salir del peligro. Se asemeja a un criminal, encadenado tras
murallas de cárcel, cercadas por espinosos matorrales.`

names[30] = `Li / Lo Adherente, El Fuego`

texts[30] = `arriba Li, Lo Adherente, el fuego

abajo Li, Lo Adherente, el fuego

También éste es un signo duplicado. El signo simple Li significa “estar
adherido a algo”, “estar condicionado”, “basarse en algo”, “claridad”.
Una línea oscura está adherida a un trazo claro arriba y a otro igual
abajo: la imagen de un espacio vacío entre dos trazos fuertes, por lo
cual éstos se vuelven claros. Es la hija del medio. Lo Creativo ha
acogido dentro de sí la línea central de lo Receptivo y así se engendra
Li. Como símbolo es el fuego. El fuego no tiene forma definida, sino que
adhiere a las cosas que arden y así brilla en su claridad. Como el agua
desciende desde el cielo, así el fuego asciende llameante desde la
tierra. Mientras que K’an simboliza el alma encerrada en el cuerpo, Li
simboliza la naturaleza en su radiante transfiguración.

EL DICTAMEN

Lo Adherente. Es propicia la perseverancia,

pues aporta el éxito. Dedicarse al cuidado de la vaca trae ventura.

Lo oscuro adhiere a lo luminoso y perfecciona así la claridad de lo
luminoso. Lo claro, al irradiar la luz, requiere la presencia de lo
perseverante en su interior, para no quemarse del todo y estar en
condiciones de iluminar en forma duradera. Todo lo que expande luz en el
mundo, depende de algo a lo cual quedar adherido para poder alumbrar de
un modo duradero.

Así el sol y la luna adhieren al cielo; los granos, las hierbas y los
árboles adhieren a la tierra. Así la doble claridad del hombre
predestinado adhiere a lo recto, y por consiguiente es apto para modelar
al mundo. El hombre que permanece condicionado en el mundo y no es
independiente, al reconocer este condicionamiento y al entrar en
dependencia de las fuerzas armoniosas y benignas del orden universal,
obtiene el éxito. La vaca es símbolo de máxima docilidad. Al cultivar el
hombre dentro de sí esta docilidad, esta voluntaria dependencia logrará
una claridad nada hiriente y encontrará su puesto en el mundo.

Nota: Una curiosa coincidencia digna de observarse es que tanto en este
caso como en el de la religión parsi aparecen asociados entre sí el
fuego y el cuidado de la vaca.

LA IMAGEN

La Claridad se eleva dos veces: la imagen del Fuego.

Así el gran hombre alumbra, perpetuando esta claridad,

las cuatro regiones cardinales del mundo.

Cada uno de los dos signos parciales representa al sol en un cielo
diurno. Así se representa, pues, una reiterada actividad del sol. Con
ello se alude a la acción temporal de la luz. El gran hombre continúa en
el mundo humano la obra de la naturaleza. En virtud de la claridad de su
ser hace que la luz se extienda cada vez más en el interior de la
naturaleza humana.

LAS DIFERENTES LÍNEAS

Al comienzo un nueve significa:

Las huellas de los pies corren entrecruzadas a troche y moche.

Si al respecto uno se mantiene serio, no hay tacha.

Es temprano por la mañana. Comienza la labor. Luego de haber permanecido
el alma apartada del mundo externo durante el sueño, recomienzan ahora
las relaciones con el mundo. Se entrecruzan las huellas de las
impresiones. Reina un apresurado trajín. Es importante conservar
entonces la concentración interior, no dejarse arrastrar por el
torbellino de la vida. Si uno es serio y concentrado, alcanza la
necesaria claridad para enfrentarse con las numerosas impresiones que lo
acometen. Precisamente en los comienzos resulta particularmente
importante esa concentrada seriedad, pues el comienzo ya contiene los
gérmenes de todo lo que sigue.

Seis en el segundo puesto significa:

Resplandor amarillo. Elevada ventura.

Se ha alcanzado el mediodía, el centro del ciclo diario. El sol brilla
con resplandor amarillo. El amarillo es el color del medio y de la
medida. Resplandor amarillo es pues símbolo de la perfección en la
cultura y el arte, cuya máxima armonía consiste en la justa medida.

Nueve en el tercer puesto significa:

Al resplandor del sol poniente

los hombres o bien golpean la olla y cantan,

o bien suspiran ruidosamente porque se aproxima la senectud.

Desventura.

Aquí se señala el fin del día. El resplandor del sol descendente
recuerda el condicionamiento y lo perecedero de la vida. A causa de esa
falta de libertad exterior, los hombres generalmente se tornan faltos de
libertad también en su interior. Ya la transitoriedad les sirve de
impulso para manifestaciones de desenfrenada alegría, para gozar de la
vida mientras todavía exista, ya dejan que los invada la tristeza, y con
sus quejas sobre la cercana vejez echan a perder su tiempo valioso.
Ambas situaciones acarrean el mal. Para el noble no es indiferente que
la muerte sea temprana o tardía. Él cultiva su persona, aguarda su sino,
y afirma con ello su destino.

Nueve en el cuarto puesto significa:

Súbita es su llegada:

se inflama, se extingue, es arrojado lejos.

La claridad de la inteligencia guarda la misma relación con la vida que
el fuego con la madera. El fuego adhiere a la madera, pero también la
consume. La claridad del intelecto arraiga en la vida, pero también
puede devorar la vida. Es cuestión de cómo se manifiesta su actividad.
En ese caso, aparece la imagen de un meteoro, o de un fuego de paja. Se
trata de un carácter agitado, inquieto, que logra un rápido ascenso.
Pero faltan los efectos perdurables. En tales circunstancias acarreará
malas consecuencias el hecho de que uno se gaste demasiado pronto y se
consuma como un meteoro.

Seis en el quinto puesto significa:

Llorando a torrentes, suspirando y lamentando.

¡Ventura!

Se ha alcanzado en este punto la culminación de la vida. Sin advertencia
se consumiría uno en esta posición como una llama. Si, al contrario,
abandona uno todo temor y toda esperanza y, reconociendo la nimiedad de
todo, llora y suspira sólo preocupado por conservar su claridad, esa
tristeza aportará la ventura. Se trata de una verdadera vuelta atrás, un
verdadero arrepentimiento, y no, como en el caso de nueve en el tercer
puesto, meramente de una pasajera disposición de ánimo.

Al tope un nueve significa:

El rey lo emplea para que se ponga en marcha y castigue.

Lo mejor será entonces matar a los cabecillas

y hacer prisioneros a los secuaces. No hay tacha.

El objetivo de la punición es imponer disciplina, y no administrar
castigos ciegamente. Es cuestión de subsanar el mal atacándolo en su
raíz. En la vida pública estatal, se impone eliminar a los que encabezan
la conspiración, pero perdonar a los secuaces. En la formación de uno
mismo, es cuestión de extirpar los malos hábitos, y de tolerar, en
cambio, las costumbres inocuas. Pues un ascetismo excesivamente
riguroso, al igual que los tribunales excesivamente severos, no conducen
a un buen éxito.`

names[31] = `Hsien / El Influjo (El Cortejo)`

texts[31] = `arriba Tui, Lo Sereno, el lago

abajo Ken, El Aquietamiento, la montaña

El nombre del hexagrama significa “en general”, “corrientemente”,
“universal”, y en sentido figurado “influir”, “incitar”. El signo de
arriba es Tui, lo sereno, el de abajo Ken, el aquietamiento. El rígido
trigrama de abajo, por su acción perseverante, aquietante, incita al
trigrama débil de arriba el cual serena y alegremente corresponde a esta
incitación. Ken, el signo de abajo, es el hijo menor, el de arriba, Tui,
la hija menor. En este sentido, ha de tomar la iniciativa lo masculino y
colocarse por debajo de lo femenino al cortejarlo.

Así como la primera sección del libro comienza con los signos de Cielo y
Tierra en cuanto fundamento de todo lo existente, la segunda sección se
inicia con los signos que corresponden a cortejo y matrimonio como
fundamentos de todas las relaciones sociales.

EL DICTAMEN

El Influjo. Logro.

Es propicia la perseverancia.

Tomar una muchacha trae ventura.

Lo débil se halla arriba, lo fuerte abajo; de este modo sus fuerzas se
atraen hasta unirse. Esto procura el logro, el éxito. Pues todo logro se
basa en una acción de atracción mutua. La quietud interior, junto a la
alegría exterior, consigue que la alegría no se exceda, que más bien
permanezca dentro de los límites de lo recto. He ahí el sentido de la
advertencia agregada: es propicio perseverar. Pues es así como se
distingue de la seducción el cortejo, en el cual el hombre fuerte se
coloca por debajo de la débil muchacha, mostrándole consideración. Esta
atracción por lo electivamente afín constituye una ley general de la
naturaleza. El Cielo y la Tierra se atraen recíprocamente y así se
engendran todos los seres. Mediante una atracción de esta índole influye
el sabio sobre los corazones de los hombres y el mundo logra la paz. Por
las atracciones que ejerce algo puede reconocerse la naturaleza de todos
los seres que hay en el cielo y sobre la tierra.

LA IMAGEN

Sobre la montaña hay un lago: la imagen del influjo.

Así el noble, en virtud de su disposición receptiva

deja que los hombres se acerquen a él.

Una montaña, que tiene encima un lago, obtiene estímulo gracias a la
humedad de éste. Tal ventaja le es dada por el hecho de que su cumbre no
sobresale, que es una cumbre ahuecada. El símbolo da el consejo de que
uno se mantenga interiormente bajo, vale decir humilde, y libre,
permaneciendo de este modo receptivo frente a los buenos consejos. Al
que pretende saberlo todo mejor, los hombres pronto dejan de
aconsejarlo.

LAS DIFERENTES LÍNEAS

Al comienzo un seis significa:

El Influjo se manifiesta en el dedo gordo del pie.

Un movimiento, antes de realizarse efectivamente, se manifiesta primero
en los dedos de los pies. La idea del influjo ya existe, pero por de
pronto no se pone en evidencia frente a los demás. Mientras la intención
no tenga efectos visibles, carece de importancia para el mundo exterior.
No conduce ni al bien, ni al mal.

Seis en el segundo puesto significa:

El Influjo se manifiesta en las pantorrillas.

¡Desventura!

Quedarse trae ventura.

La pantorrilla sigue al pie en su movimiento. No puede avanzar por sí
misma, ni detenerse por su cuenta. Se trata de un movimiento que no es
independiente, que es desafortunado por no ser dueño de sí mismo. Uno
debe aguardar, tranquilamente, hasta que un verdadero influjo lo mueva a
actuar, y entonces quedará libre de daños.

Nueve en el tercer puesto significa:

El Influjo se manifiesta en los muslos.

Se atiene a lo que le sigue.

Proseguir es humillante.

Todo sentimiento del corazón induce a un movimiento. Los muslos corren
sin reflexionar hacia aquello a que aspira el corazón; adhieren al
corazón al cual siguen. Sin embargo, trasladado a la vida humana, este
modo de movilizarse, inmediatamente, en seguimiento del influjo de
cualquier capricho, no es lo correcto y si uno actúa constantemente así
lleva a la humillación. Surge de ello un pensamiento triple: no se debe
correr sin mayor motivo tras toda persona sobre la cual quisiera uno
ejercer influencia; en ciertas condiciones debe uno saber contenerse.
Asimismo, no debe uno acceder a todos los caprichos de aquéllos a cuyo
servicio está. Y finalmente, no debe desdeñar nunca la posibilidad de
refrenar los humores de su propio corazón: una posibilidad en la cual se
basa la libertad humana.

Nueve en el cuarto puesto significa:

La perseverancia trae ventura.

Se desvanece el arrepentimiento.

Cuando el pensamiento de uno se agita en inquieto vaivén,

sólo le seguirán aquellos amigos

hacia quienes dirija pensamientos conscientes.

Se ha alcanzado aquí el sitio del corazón. La incitación, el estímulo
que parte de este punto es el más importante. Ha de cuidarse sobre todo
que el influjo sea permanente y bueno, pues así, a pesar del peligro que
surge de la gran movilidad del corazón humano, ya no será necesario el
arrepentimiento. Allí donde actúa la propia fuerza tranquila de la
naturaleza de uno, los efectos son normales. Todos los hombres sensibles
a las vibraciones de un espíritu semejante recibirán su influjo. Este
influjo sobre los demás no ha de manifestarse como una acción deliberada
y consciente ejercida sobre ellos, pues semejante agitación consciente,
con su perpetuo vaivén, excita y desgasta. Por otra parte, en ese caso
los efectos se limitarán a aquellos hombres hacia los cuales dirige uno
conscientemente sus pensamientos.

Nueve en el quinto puesto significa:

El Influjo se manifiesta en la nuca.

No hay arrepentimiento.

La nuca es la parte más inmóvil del cuerpo. Cuando el influjo se
manifiesta en ella, la voluntad permanece firme por cierto, y tal
influjo no conduce a la confusión. De ahí que en este caso no sea en
absoluto cuestión de arrepentirse. Lo que acontece en estas
profundidades del ser, en lo subconsciente, la conciencia no puede ni
provocarlo ni impedirlo. Pero ciertamente, si uno mismo no es
influenciable, tampoco le será posible influir sobre el mundo externo.

Al tope un seis significa:

El Influjo se manifiesta en las mandíbulas, las mejillas

y la lengua.

La forma más exterior de empeñarse en adquirir influencia sobre otros es
la de conseguirlo mediante la mera locuacidad, sin que nada real
sostenga a las palabras. Semejante estímulo, ejercido por el solo
movimiento de los instrumentos del habla, será necesariamente
insignificante. Por eso no se añade nada acerca de una posible dicha o
desdicha.`

names[32] = `Heng / La Duración`

texts[32] = `arriba Chen, Lo Suscitativo, el trueno

abajo Sun, Lo Suave, el viento

El fuerte signo Chen se encuentra arriba, el débil Sun abajo. El
hexagrama hace juego con el anterior: allí el influjo, aquí la unión
como estado duradero. Las imágenes son el trueno y el viento, fenómenos
que a su vez se presentan apareados en forma duradera. El signo de abajo
indica suavidad en lo interno, el de arriba movilidad en lo externo.

Aplicado el signo al dominio de las relaciones sociales, nos vemos
frente a la institución del matrimonio en cuanto unión duradera de los
sexos. Mientras que, en el caso del cortejo, el hombre joven se coloca
por debajo de la muchacha, en el matrimonio, representado por la junta
del hijo mayor con la hija mayor, el hombre aparece como movilizador y
conductor hacia afuera, y la mujer como suave y obediente en lo
interior.

EL DICTAMEN

Éxito. No hay falla.

Es propicia la perseverancia.

Es propicio que uno tenga a dónde ir.

La duración es un estado cuyo movimiento no se atenúa a causa de
impedimentos, de frenos. No es un estado de quietud, pues una simple
detención constituye de por sí un retroceso. Duración es, antes bien, el
movimiento de un todo rigurosamente organizado y acabado en sí mismo,
que se lleva a cabo según leyes fijas, concluye en sí mismo y, por
tanto, se renueva a cada momento: un movimiento en el cual cada
terminación es seguida por un nuevo comienzo. El fin es alcanzado por el
movimiento dirigido hacia adentro: la inspiración del aliento, la
sístole, la concentración; ese movimiento se vuelca hacia un nuevo
comienzo, en el cual el impulso se dirige hacia afuera: la espiración,
la diástole, la expansión.

Así los cuerpos celestes conservan sus órbitas en el cielo y en
consecuencia pueden alumbrar de modo duradero. Las estaciones obedecen a
una rigurosa ley de cambio y transformación y por esa razón pueden obrar
de modo duradero.

Y así también el hombre de vocación, el predestinado, encuentra en su
camino un sentido duradero y gracias a ello el mundo cumple su formación
cabal. Por aquello en lo cual las cosas tienen su duración, puede
reconocerse la naturaleza de todos los seres en el cielo y sobre la
tierra.

LA IMAGEN

Trueno y viento: la imagen de la duración.

Así el noble permanece firme y no modifica su rumbo.

El trueno retumba y el viento sopla: ambas manifestaciones representan
lo sumamente móvil, de modo que, según las apariencias, se trataría de
algo opuesto a la duración. Sin embargo, su aparición y desaparición, su
avance y retroceso, su ida y venida, obedece a leyes duraderas. Así la
independencia del hombre noble tampoco se basa en inmovilidad o rigidez.
Siempre vive de acuerdo con el tiempo y varía con éste. Lo duradero es
el rumbo firme, la ley interior de su ser, la que determina todos sus
actos.

LAS DIFERENTES LÍNEAS

Al comienzo un seis significa:

Pretender la duración demasiado pronto acarrea

persistente desventura.

Nada que fuese propicio.

Algo duradero sólo puede conseguirse poco a poco, mediante prolongado
trabajo y cuidadosa reflexión. “Si se desea comprimir algo, es necesario
dejar que primero se distienda debidamente”, dice en este sentido Lao
Tse. Quien exige demasiado de una vez y en el acto, obra
precipitadamente. Y puesto que pretende demasiado, finalmente no logra
nada.

Nueve en el segundo puesto significa:

El arrepentimiento se desvanece.

La situación es anormal. La fuerza de carácter es superior al poder
material de que se dispone. En tales condiciones podría uno acaso temer
dejarse arrastrar hacia algo que supere sus fuerzas. Mas como el tiempo
que rige es el de la duración, se logra dominar la fuerza interior como
para evitar toda demasía, con lo que se desvanece todo motivo de
arrepentimiento.

Nueve en el tercer puesto significa:

Al que no confiere duración a su carácter

lo cubren de vergüenza.

Persistente humillación.

Cuando uno se ve conturbado en su fuero interno por estados de ánimo
provocados desde el mundo externo mediante temores y esperanzas, pierde
la consecuencia interior del propio carácter. Semejante falta de
consecuencia interior conduce constantemente a penosas experiencias. Se
trata de humillaciones que a menudo proceden de alguna zona que no se
había tenido en cuenta. No constituyen tanto efectos del mundo externo,
como nexos naturales puestos en acción por la propia naturaleza de uno.

Nueve en el cuarto puesto significa:

Ningún venado en el campo.

Si durante una cacería se desea llegar a tener a tiro algún venado, es
necesario proceder con corrección desde un comienzo. Si se persiste en
acechar a las piezas de caza en un lugar donde no existen, no se
encontrará ninguna, por mucho que se la aguarde. La duración en la
búsqueda no es suficiente. Lo que no se busca como corresponde, no se
encuentra.

Seis en el quinto puesto significa:

Dar duración al propio carácter mediante la perseverancia

es venturoso para una mujer; para un hombre es desventurado.

Una mujer ha de seguir a un hombre toda su vida, el hombre en cambio
debe atenerse a lo que es su deber en cada caso; dejarse guiar de un
modo duradero por la mujer sería un error para él.

En este sentido, para una mujer será bastante bueno atenerse de modo
conservador a lo tradicional. El hombre en cambio debe mantenerse ágil y
capaz de adaptarse, y sólo ha de permitir que influya sobre él de modo
decisivo aquello que en cada caso exige su deber.

Al tope un seis significa:

El desasosiego como estado duradero trae desventura.

Hay personas constantemente sumidas en una arrebatada agitación, que no
logran descanso, sosiego interior. El desasosiego no sólo impide toda
solidez y seriedad, sino que incluso llega a constituir un peligro en sí
mismo cuando se produce en gente que ocupa posiciones de
responsabilidad, de autoridad.`

names[33] = `Tun / La Retirada`

texts[33] = `arriba Ch’ien, Lo Creativo, el Cielo

abajo Ken, El Aquietamiento, la montaña

La fuerza de lo sombrío está en ascenso. Ante su avance lo luminoso se
retira, poniéndose a buen recaudo, de modo que aquella fuerza no pueda
afectarlo. No se trata, en lo que se refiere a esta retirada, de una
arbitrariedad humana, sino del cumplimiento de leyes que rigen el
acontecer en la naturaleza. De ahí que en este caso sea La Retirada el
modo correcto de actuar, que no desgasta las energías.

En calidad de signo mensual, el hexagrama se adjudica al sexto mes
(julio-agosto), época en la cual ya recomienzan a mostrar sus efectos
las fuerzas invernales.

EL DICTAMEN

La Retirada. Éxito.

En lo pequeño es propicia la perseverancia.

Las circunstancias señalan que las fuerzas hostiles, favorecidas por el
tiempo, han tomado la delantera. En este caso lo que corresponde es la
retirada, y es precisamente gracias a la retirada que se obtiene el
logro. El éxito consiste en el hecho de que pueda realizarse
correctamente la retirada. Es menester no confundir retirada con huida,
una fuga que sólo tiene en cuenta la propia salvación, a cualquier
precio. La retirada es signo de fortaleza. Es necesario no dejar pasar
el momento indicado, mientras uno esté en plena posesión de su vigor y
conserve su posición. De este modo sabrá interpretar a tiempo los signos
pertinentes y emprenderá los preparativos para una retirada provisional
en lugar de trabarse en una desesperada lucha de vida o muerte. De este
modo tampoco se abandona sin más el campo a merced del enemigo, sino que
más bien se dificulta a éste el avance, mostrando todavía una
persistencia en ciertos aspectos. De tal manera, en la retirada ya va
preparándose el viraje, el cambio. No es fácil comprender las leyes de
semejante retirada activa. El sentido que se oculta en un tiempo como
éste es importante y significativo.

LA IMAGEN

Bajo el cielo está la montaña:

la imagen de La Retirada.

Así el noble mantiene a distancia al vulgar,

no con ira, sino con mesura.

La montaña se eleva bajo el cielo, pero su naturaleza implica que
finalmente se detenga. El cielo, en cambio, se retira ante ella hacia
lejanas alturas y así permanece inalcanzable. He ahí la imagen de cómo
el noble se comporta frente al vulgo que viene subiendo. Se retira de
él, en su fuero interno. No lo odia, pues el odio es una forma de
participación interior mediante la cual uno se ve ligado al objeto que
odia. El noble muestra su fortaleza (Cielo) en el hecho de provocar,
gracias a su mesura, la detención (montaña) del vulgar.

LAS DIFERENTES LÍNEAS

Al comienzo un seis significa:

Durante la Retirada, en la cola: esto es peligroso.

No debe pretenderse emprender algo.

Puesto que el signo es la imagen de algo que va retirándose, el primer
trazo representa la cola, y el más alto la cabeza. Durante la retirada
es ventajoso hallarse adelante. En este caso se encuentra uno atrás, en
contacto inmediato con los enemigos que vienen pisándole los talones.
Esto es peligroso. En condiciones tan riesgosas no es aconsejable
emprender nada. El modo más fácil de sustraerse al amenazante peligro es
el de quedarse quieto, de detenerse.

Seis en el segundo puesto significa:

Lo sujeta firmemente con cuero de buey amarillo.

Nadie es capaz de arrancarlo.

Amarillo es el color del centro. Indica lo correcto, lo que corresponde
al deber. El cuero de buey es firme e irrompible.

Mientras los nobles se retiran, y a sus espaldas avanza con empuje el
vulgo, se caracteriza aquí a un hombre común que se aferra a los nobles
con tanta firmeza y tenacidad que a estos últimos les resulta imposible
desprenderse de él. Y como ambiciona lo que es justo, y es tan fuerte su
voluntad, logra finalmente su objetivo. De esta manera el trazo
confirma la sentencia del Dictamen: “En lo pequeño (en este caso
equivalente a: ‘para el hombre pequeño’, común) es propicia la
perseverancia."

Nueve en el tercer puesto significa:

Una retirada con demora es penosa y arriesgada.

Mantener a la gente en calidad de siervos y criadas trae ventura.

Cuando, llegado el momento de retirarse, lo retienen a uno, la situación
resulta desagradable y al mismo tiempo peligrosa, puesto que así se nos
priva de nuestra libertad de acción. En un caso semejante, la única
salida consiste en que uno tome a su servicio, por así decirlo, a
quienes le impiden partir, a fin de conservar de este modo cuando menos
la propia iniciativa. De otro modo caería indefenso bajo el dominio de
ellos. Pero aun ofreciendo una salida, la situación no por eso se torna
grata. Pues ¿qué podrá uno lograr con semejantes sirvientes?

Nueve en el cuarto puesto significa:

Retirada voluntaria trae ventura al noble,

ruina la vulgar.

En un caso de retirada, el hombre superior procede a despedirse, con
toda amabilidad y con agrado. Aun en su fuero íntimo la retirada le
resulta fácil, ya que de este modo no necesita violentar sus
convicciones. A quien tales circunstancias harán sufrir es únicamente el
inferior, del cual él se retira y quien sin la dirección del noble caerá
necesariamente en la ruina.

Nueve en el quinto puesto significa:

Retirada amistosa. La perseverancia trae ventura.

Es cosa del noble reconocer a tiempo cuándo es el momento de retirarse.
Si uno elige para su retirada el momento adecuado, ésta podrá realizarse
en forma perfecta, amistosa, sin que haya ocasión de que se produzcan
desagradables discusiones. Mas pese a toda complacencia en cuanto a las
formalidades externas, hace falta una total firmeza de decisión para no
dejarse inducir a error, atendiendo consideraciones no pertinentes.

Al tope un nueve significa:

Retirada alegremente serena. Todo es favorable.

La situación es inequívoca. El desprendimiento interior es un hecho
inamovible. Así se logra la libertad de partir. Cuando uno percibe ante
sus ojos su camino con plena claridad y libre de toda duda, se instala
en su ánimo una actitud serena que, sin la menor vacilación, escoge lo
justo. Un camino tan claro conduce siempre hacia el bien.`

names[34] = `Ta Chuang / El Poder de lo Grande`

texts[34] = `arriba Chen, Lo Suscitativo, el trueno

abajo Ch’ien, Lo Creativo, el Cielo

Las líneas grandes, vale decir luminosas, fuertes, son aquí poderosas.
Cuatro líneas luminosas han penetrado en el signo desde abajo y están a
punto de seguir ascendiendo. El semisigno de arriba es Chen, lo
Suscitativo, lo excitativo; el de abajo es Ch’ien, lo Creativo. Lo
Creativo es fuerte, lo excitativo es movilizante. La unión de movimiento
y fuerza da el sentido de Poder de lo Grande. El signo se adjudica al
segundo mes (marzo-abril).

EL DICTAMEN

El Poder de lo Grande. Es propicia la perseverancia.

El signo señala un tiempo en el cual ascienden formidablemente y llegan
al poder valores interiores. Pero la fuerza ya ha sobrepasado el centro.
Por eso corresponde pensar en el peligro que implica el confiar en el
propio poder, sin preocuparse en todo momento por lo recto; en el
peligro de embarcarse en el movimiento sin aguardar el tiempo adecuado.
Por este motivo se añade la sentencia: es propicia la perseverancia.
Pues un poder realmente grande es aquel que no degenera en mera fuerza
prepotente, sino que antes bien permanece íntimamente ligado a los
principios de derecho y justicia. Si se comprende este punto —o sea que
grandeza y justicia han de presentarse inseparablemente unidas—, se
comprenderá el verdadero sentido de todo acontecer universal, en el
cielo y sobre la tierra.

LA IMAGEN

El trueno se halla en lo alto del cielo:

la imagen del Poder de lo Grande.

Así el noble no pisa los caminos

que no correspondan al orden.

El trueno, la fuerza eléctrica, asciende en primavera hacia lo alto.
Este movimiento guarda armonía con la dirección del movimiento del
Cielo. Es, pues, un movimiento coincidente con el Cielo, lo cual origina
un gran poder. Pero la verdadera grandeza se funda en el estar en
armonía con lo que es recto. Por eso el noble, en tiempos de gran poder,
se cuida de hacer algo que no esté en concordancia con lo que
corresponde al orden.

LAS DIFERENTES LÍNEAS

Al comienzo un nueve significa:

Poder en los dedos de los pies.

Persistir trae desventura.

Esto es sin duda cierto.

Los dedos de los pies se encuentran abajo del todo, y están dispuestos a
avanzar. De este modo, un poder grande que ocupa un puesto inferior se
ve dispuesto a obtener el progreso por la fuerza. Pero tal intención, si
se persistiera en ella, llevaría con seguridad a la desventura. Por eso,
como consejo, se añade una advertencia.

Nueve en el segundo puesto significa:

La perseverancia trae ventura.

Se supone que en esta situación comienzan a abrirse las puertas del
éxito. La resistencia comienza a ceder. Se avanza poderosamente. Es este
el punto donde con toda facilidad se introduce una desenfrenada
arrogancia. De ahí el oráculo que la perseverancia —vale decir en lo
relativo al equilibrio interior, sin exagerada manifestación de poder—
trae ventura.

Nueve en el tercer puesto significa:

El hombre vulgar actúa usando el poder,

el noble no actúa así.

Persistir es peligroso.

Un macho cabrío arremete contra una cerca

y enreda sus cuernos.

Hacer alarde de poder conduce a enredos, a complicaciones, tal como
enreda sus cuernos un macho cabrío que arremete contra una cerca.
Mientras que el hombre vulgar, una vez en posesión del poder, se regodea
gozando del mismo, el noble no procede así. Tiene conciencia del peligro
que implica persistir en esa actitud cueste lo que cueste, y renuncia
por lo tanto a un mero despliegue de poder.

Nueve en el cuarto puesto significa:

La perseverancia trae ventura.

Desaparece el arrepentimiento.

La cerca se abre, no hay enredo.

El poder reside en el eje de un gran carruaje.

Cuando tranquilamente y con perseverancia se empeña uno en superar las
resistencias, finalmente lo logrará. Las trabas ceden y la causa
de arrepentimiento, surgida de un empleo exagerado del poder, se
desvanece.

El poder no se muestra en lo exterior, pero por su efecto podrán
transportarse pesadas cargas como en un gran carruaje cuya fortaleza
radica en su eje. Cuanto menos se aplique el poder hacia afuera, tanto
más fuerte será su efecto.

Seis en el quinto puesto significa:

Pierde el carnero en su ligereza.

Ningún arrepentimiento.

El carnero se caracteriza por su dureza exterior que va unida a una
debilidad interior. Ahora bien: tal como se presenta la situación, todo
resulta sumamente fácil: ya no hay resistencia alguna. Entonces puede
uno deshacerse de su modalidad de carnero, belicosa y obstinada, y no se
arrepentirá.

Al tope un seis significa:

Un carnero arremete contra una cerca.

No puede retroceder, no puede avanzar.

Nada es propicio.

Si advierte uno la dificultad, eso traerá ventura.

Cuando alguien se atreve a avanzar demasiado, llega a un punto muerto
desde el cual no puede desplazarse ni hacia adelante ni hacia atrás, y
todo sólo sirve para complicar más todavía las cosas. Con semejante
obcecación se mete uno en dificultades insuperables. Mas si uno
comprende la situación desiste de continuar en ella y trata de calmarse;
entonces, con el tiempo todo volverá a sus cauces.`

names[35] = `Chin / El Progreso`

texts[35] = `arriba Li, Lo Adherente, el fuego

abajo K’un, Lo Receptivo, la Tierra

El signo representa al sol que va elevándose sobre la tierra; da por lo
tanto la imagen de un progreso rápido, fácil, que al mismo tiempo
equivale a una expansión y claridad de alcance cada vez mayor.

EL DICTAMEN

El Progreso:

El fuerte príncipe es honrado con caballos en gran número.

En un solo día se lo recibe tres veces.

Como ejemplo de la situación se describe un tiempo en que un fuerte
príncipe feudal reúne a los demás príncipes en torno al soberano, el
Gran Rey, en paz y obediencia; el Gran Rey lo distingue con generosos
obsequios y lo atrae brindándole confianza en su círculo más inmediato.

Esto implica una doble idea: la acción del progreso propiamente dicho
emana de un hombre en posición dependiente, en quien los demás ven a uno
de los suyos, gracias a lo cual lo siguen voluntaria y dócilmente. Este
conductor posee la suficiente claridad interior como para no abusar de
la gran influencia que ejerce, sino para antes bien utilizarla en favor
de su soberano. Éste, por su parte, libre de celos de cualquier índole,
agasaja al gran hombre con ricos regalos y lo atrae para tenerlo siempre
cerca de sí. Un amo iluminado y un siervo obediente, he aquí las
condiciones para un gran progreso.

LA IMAGEN

El sol se eleva por sobre la tierra:

la imagen del Progreso.

Así el noble ilumina por sí solo sus claros talentos.

La luz del sol que se expande sobre la tierra es clara por naturaleza,
pero cuanto más asciende el sol, tanto más emerge de entre las turbias
brumas hasta brillar en su pureza original, iluminando un ámbito cada
vez mayor. Así también la verdadera esencia del hombre, que es
originalmente buena, se enturbia por su contacto con lo terrenal y
requiere por tanto una purificación, para poder alumbrar con la claridad
que originalmente le corresponde.

LAS DIFERENTES LÍNEAS

Al comienzo un seis significa:

Progresando, pero rechazado.

La perseverancia trae ventura.

Al no encontrar confianza, conserve uno su calma.

Ninguna falta.

En tiempos en que todo empuja hacia el progreso, uno se encuentra
todavía en la incertidumbre acerca de si acaso se verá rechazado durante
el progreso. Entonces es cuestión de continuar simplemente la acción con
toda rectitud: esto finalmente traerá la ventura. Puede suceder que a
alguien no se le brinde confianza. No se ambicione en tal caso
conquistar la confianza a toda costa; será preciso permanecer tranquilo
y sereno y no dejarse irritar hasta estallar de ira. Así seguirá uno
actuando sin cometer errores.

Seis en el segundo puesto significa:

Progresando, pero con tristeza.

La perseverancia trae ventura.

Luego obtendrá uno gran felicidad de su antepasada.

El progreso está detenido; uno se encuentra impedido de entrar en
contacto con el hombre en posición directiva con el cual uno mantiene
relaciones. Esto es causa de tristeza. Pero en un caso así es cuestión
de permanecer perseverante y entonces se obtendrá una gran felicidad
brindada con maternal benevolencia por aquella personalidad. Esta dicha
que llega es bien merecida, pues la mutua simpatía no se basa en motivos
egoístas o partidistas, sino en principios fundamentales, firmes y
correctos.

Seis en el tercer puesto significa:

Todos están de acuerdo.

Se desvanece el arrepentimiento.

Uno se esfuerza por avanzar y lo hace en comunidad con otros por cuya
aprobación se siente alentado. De este modo desaparece el motivo de
lamentación que consistiría en no poseer uno mismo autonomía suficiente
como para afrontar y vencer sólo toda posible adversidad.

Nueve en el cuarto puesto significa:

Progreso como el de un hámster acaparador.

La perseverancia acarrea peligro.

En épocas de progreso les resulta fácil a los hombres fuertes, cuando
ocupan una posición que no les corresponde, juntar y acumular muchas
cosas. Semejante conducta, empero, es enemiga de la luz. Y puesto que
las épocas de progreso son asimismo siempre tiempos en que el sol saca a
la luz del día toda maquinación que teme la luz, el persistir en una
actuación semejante atrae necesariamente el peligro.

Seis en el quinto puesto significa:

Se desvanece el arrepentimiento.

No tomes a pecho ganancia ni pérdida.

Las empresas traen ventura.

Todo es propicio.

Se señala aquí una situación en que una persona benevolente y reservada
ocupa un puesto importante y decisivo, en una época de progreso. Podría
uno reprocharse no haber aprovechado con la debida energía la coyuntura
del momento para procurarse toda clase de posibles ventajas. Sin
embargo, el remordimiento se desvanece. No debe tomarse uno a pecho
pérdidas ni ganancias. Éstas son cosas de orden inferior. Más importante
es que, de este modo, uno se haya asegurado posibilidades de acción
benéfica y exitosa.

Al tope un nueve significa:

Progresar con los cuernos es lícito únicamente

para castigar la propia comarca.

Tener conciencia del peligro trae ventura.

No hay tacha.

La perseverancia trae humillación.

Progresar usando los cuernos, es decir, proceder agresivamente, en
tiempos como los de que aquí se trata, se puede únicamente cuando es
preciso oponerse a las fallas de la gente que lo rodea a uno. Al hacerlo
así, no debe olvidarse que semejante proceder agresivo implica siempre
un peligro. Así se evitarán las fallas y errores que de otro modo nos
amenazan, y se logrará lo que se ha pretendido. Una perseverante
persistencia, en cambio, en una actitud excesivamente enérgica —sobre
todo frente a personas no muy cercanas— acarreará humillación.`

names[36] = `Ming I / El Oscurecimiento de la Luz`

texts[36] = `arriba K’un, Lo Receptivo, la Tierra

abajo Li, Lo Adherente, el fuego

Aquí el sol se ha hundido bajo la tierra; por lo tanto, se ha
oscurecido, eclipsado. El nombre del signo equivale en realidad a Lesión
de lo Claro, de ahí que las líneas individuales mencionen reiteradamente
lesiones. La situación se presenta como exactamente opuesta a la del
signo anterior. Allí vemos a un hombre sabio en calidad de jefe, que
dispone de asistentes capaces y entre todos avanzan mancomunadamente;
aquí en cambio aparece ocupando el puesto de autoridad un hombre
tenebroso, y el hombre capaz y sabio sufre daño por él.

EL DICTAMEN

El Oscurecimiento de la luz.

Es propicio ser perseverante en la emergencia.

Es preciso que ni aun en medio de circunstancias adversas se deje uno
arrastrar indefenso hacia un doblegamiento interior de su voluntad y
conducta. Esto es posible cuando se posee claridad interior y se observa
hacia afuera una actitud transigente y dócil. Mediante tal actitud es
posible superar aun el peor estado de necesidad. Ciertamente, en
determinadas circunstancias dadas, se hace necesario que uno oculte su
luz con el fin de poder preservar su voluntad frente a las dificultades
que surgen en el contorno inmediato, y a pesar de ellas. La
perseverancia ha de subsistir en lo más íntimo de la conciencia sin
llegar a destacarse hacia afuera. Únicamente así podrá uno conservar su
voluntad en medio de las contrariedades.

LA IMAGEN

La luz se ha sumergido en la tierra:

La imagen del Oscurecimiento de la Luz.

Así el noble convive con la gran muchedumbre;

oculta su resplandor y permanece lúcido sin embargo.

En tiempo de tinieblas es cuestión de ser cauteloso y reservado. No debe
uno atraer inútilmente sobre sí poderosas enemistades por causa de una
conducta o de modales desconsiderados. Si bien en tales épocas no debe
uno compartir las costumbres de la gente, tampoco deben éstas sacarse
críticamente a la luz. Son momentos en que es necesario no pretender, en
el trato con la gente, que uno lo sabe todo. Muchas cosas hay que deben
dejarse como están sin acceder, no obstante, al embaucamiento y caer así
en el engaño.

LAS DIFERENTES LÍNEAS

Al comienzo un nueve significa:

Oscurecimiento de la luz durante el vuelo.

Él baja las alas.

En su peregrinación el noble no come nada por tres días,

mas tiene a dónde ir.

El hostero tiene ocasión de chismear sobre él.

Con formidable resolución pretende uno elevarse por encima de todos los
obstáculos. Pero tropieza con el destino hostil. Entonces se retira, se
aparta, se hace a un lado. Son tiempos difíciles. Es preciso seguir
avanzando presurosamente y sin descanso, sin que uno encuentre una
morada duradera. Cuando alguien se niega interiormente a asumir
compromisos y prefiere seguir siendo leal a sus principios, debe
afrontar la necesidad, la indigencia. Sin embargo, mantendrá con toda
firmeza la meta a la cual se empeña en llegar, aun cuando la gente en
cuya casa se aloja no lo comprenda o lo difame.

Seis en el segundo puesto significa:

El oscurecimiento de la luz lo hiere en el muslo izquierdo.

Él aporta ayuda con la fuerza de un caballo. Ventura.

Aquí el regente de la luz ocupa una posición subordinada. Es herido por
el regente de las tinieblas. Pero la lesión no pone en peligro su vida,
tan sólo constituye un impedimento. La salvación es todavía posible. El
afectado no piensa en sí mismo, sino únicamente en la salvación de los
demás que también se ven amenazados. Por eso, con todas sus fuerzas, se
empeña en salvar lo que pueda salvarse. En esta forma de obrar
consecuente con el deber reside la ventura.

Nueve en el tercer puesto significa:

Oscurecimiento de la luz durante la cacería en el Sur.

Se captura a su cabecilla principal.

No debe esperarse demasiado pronto la perseverancia.

Al parecer está obrando una contingencia del azar. Mientras el hombre
leal y fuerte interviene con empeñosa actividad con el objeto de
establecer el orden, sin ninguna clase de segundas intenciones, se topa
como por pura casualidad con el cabecilla del desorden y lo captura. De
este modo se logra la victoria. Pero la supresión de los abusos no ha de
procurarse con excesiva precipitación. Tal actitud traería malas
consecuencias, ya que los abusos se habían desorbitado durante demasiado
tiempo.

Seis en el cuarto puesto significa:

Él penetra en la cavidad izquierda del abdomen.

Se obtiene el corazón del oscurecimiento de la luz,

y se abandona el portón y el cortijo.

Se encuentra uno en la proximidad del caudillo de las tinieblas y se
entera así de sus pensamientos más secretos. De este modo se llega a
saber que ya no debe esperarse mejoría alguna y que se está a tiempo y
en condiciones de abandonar el lugar de la calamidad antes de que ésta
irrumpa.

Seis en el quinto puesto significa:

Oscurecimiento de la luz como en el caso del príncipe Chi.

Es propicia la perseverancia.

El príncipe Chi vivía en la corte del tenebroso tirano Chou Hsin, el
cual, sin ser nombrado, sirve como ejemplo histórico de base para toda
la situación. El príncipe Chi era pariente del tirano, motivo por el
cual no le era posible retirarse de la corte, de modo que ocultó su
disposición bondadosa y simuló locura. Así se lo mantuvo como esclavo,
sin que las adversidades exteriores lograran desviarlo de sus
convicciones.

Surge de ello una enseñanza para quienes en época de tinieblas no pueden
abandonar su sitio. Junto a una invencible perseverancia en lo interior
deben duplicar su cautela hacia afuera, para sustraerse al peligro.

Al tope un seis significa:

No luz, sino oscuridad.

Primero se elevó hacia el cielo,

luego se precipitó a las simas de la tierra.

Se ha alcanzado aquí el colmo de las tinieblas. La potencia tenebrosa
tuvo al comienzo tan alta posición que pudo herir a todos los seres
buenos y esclarecidos. Pero al fin ella perece, a consecuencia de sus
propias tinieblas, pues el mal ha de hundirse en el mismo instante en
que vence plenamente al bien, consumiéndose así la fuerza a la cual
hasta ese momento debió su existencia.`

names[37] = `Chia Jen / El Clan (La Familia)`

texts[37] = `arriba Sun, Lo Suave, el viento

abajo Li, Lo Adherente, el fuego

El signo representa las leyes que reinan dentro del clan familiar. El
trazo fuerte del tope representa al padre, el de más abajo al hijo, el
quinto trazo fuerte representa al esposo, la segunda línea blanda a la
esposa. Por otra parte, las dos líneas fuertes en el quinto y en el
tercer puesto representan a dos hermanos, las líneas débiles que las
acompañan en el cuarto y segundo puesto a sus mujeres, de suerte que
todas las relaciones y condiciones alcanzan dentro del clan la expresión
adecuada a su respectiva naturaleza. Cada uno de los trazos posee la
naturaleza que corresponde al lugar que ocupa. El hecho de que en el
sexto puesto, donde podría esperarse la presencia de una línea blanda,
aparezca con todo un trazo fuerte, señala con suma claridad el poderoso
dominio que debe emanar del jefe del clan. El trazo no debe
considerarse, en este caso, en su condición de línea sexta, sino en su
condición de trazo más elevado entre todos. El clan muestra las leyes
que operan en el interior de la casa y que, transferidas al exterior,
mantienen el orden en el Estado y en el mundo. El influjo que desde el
interior del clan actúa hacia afuera, es representado mediante el
símbolo del viento engendrado por el fuego.

EL DICTAMEN

El clan. Es propicia la perseverancia de la mujer.

Lo que constituye las bases del clan son las relaciones entre esposo y
esposa. El lazo que mantiene unido al clan radica en la fidelidad y
perseverancia de la mujer. El sitio de ella se halla en el interior
(segunda línea), el sitio del hombre en el exterior (quinta línea). Que
el hombre y la mujer ocupen sus puestos correctos es un hecho que se
conforma a las grandes leyes de la naturaleza. El clan requiere una
firme autoridad: la constituyen los padres. Cuando el padre es realmente
padre y el hijo, hijo, cuando el hermano mayor cumple su papel de
hermano mayor y el menor el suyo de hermano menor, cuando el esposo es
realmente esposo y la esposa, esposa, entonces hay orden en el clan.
Estando en orden el clan, se ordena la totalidad de las relaciones
sociales entre los hombres. De las cinco relaciones sociales tres se
sitúan dentro del clan: la relación entre padre e hijo: el amor; entre
hombre y mujer: la disciplina y el recato; entre hermano mayor y menor:
el orden. La amante veneración del hijo se transfiere luego al príncipe
en forma de lealtad en el fiel cumplimiento del deber, y el orden y el
afecto entre los hermanos se transfieren como fidelidad al amigo y se
presentan como subordinación en la relación con los superiores. El clan
es la célula original de la sociedad, el suelo natural en el que el
ejercicio de los deberes morales se ve facilitado por el afecto natural
de tal modo que en ese círculo restringido se van creando las bases
desde las cuales luego se transfieren las mismas condiciones a las
relaciones humanas en general.

LA IMAGEN

El viento surge del fuego:

la imagen del clan.

Así el noble tiene en sus palabras lo real,

y en su conducta la duración.

El calor genera fuerza; he ahí el significado del viento que es
suscitado por el fuego y surge de éste. Se trata del efecto que va desde
adentro hacia afuera. Exactamente lo mismo hace falta para la regulación
del clan. También en el clan el efecto o influjo, partiendo de la propia
persona, debe dirigirse a otros. A fin de poder ejercer semejante
influjo, es necesario que las palabras estén cargadas de fuerza; esto
sólo es posible cuando se basan en algo real, como la llama en el
combustible. Las palabras ejercen influencia únicamente cuando son
objetivas y se refieren con claridad a determinadas circunstancias.
Discursos, advertencias y exhortaciones generales son enteramente
ineficaces. Por otra parte, las palabras deben sentirse apoyadas por
todo el comportamiento, así como el viento actúa y tiene efecto gracias
a su persistencia y duración. Sólo una actuación firme y consecuente
dejará en otros la necesaria impresión para poder adaptarse a ella y
usarla como pauta y guía. Si la palabra y la conducta no están en
armonía, si no son consecuentes, el efecto no se produce.

LAS DIFERENTES LÍNEAS

Al comienzo un nueve significa:

Firme acuerdo dentro del clan.

Se desvanece el arrepentimiento.

La familia debe formar una unidad firmemente delimitada, dentro de la
cual cada miembro ha de conocer su lugar. Desde el principio debe
acostumbrarse a los niños a normas, o sea regulaciones fijas, y eso
antes de que su voluntad se oriente en otro sentido. Si la imposición
del orden, de la norma, comienza demasiado tarde, cuando la voluntad de
los niños ya ha adquirido malos hábitos y los caprichos y las pasiones
han crecido y ofrecen resistencia, no faltarán motivos para
arrepentirse. Aun si se comienza con la imposición del orden a tiempo,
ciertamente también se presentarán motivos de arrepentimiento. Éstos son
inevitables cuando se convive en medio de un círculo mayor. Pero es un
arrepentimiento que se desvanecerá una y otra vez en cada ocasión. Todo
se arreglará debidamente. Pues no existe nada más fácil de evitar, y a
la vez más difícil de llevar a cabo, que el “quebrantar la voluntad de
los niños”.

Seis en el segundo puesto significa:

No debe ella seguir su capricho.

En el interior ha de velar por el alimento.

La perseverancia trae ventura.

La mujer ha de guiarse siempre por la voluntad del dueño de casa, ya sea
éste el padre, el esposo o el hijo adulto. Su puesto está en el
centro interior de la casa. Allí se le presentan grandes e importantes
deberes sin que tenga que buscarlos. Ha de ocuparse de la alimentación
de sus familiares como asimismo de los alimentos destinados a las
ofrendas rituales. Se convierte así en centro de la vida social y
religiosa de la familia. Su perseverancia en esta posición trae ventura
a toda la casa.

Traducido a circunstancias generales, surge aquí el consejo de no
procurar nada a la fuerza, sino de limitarse tranquilamente al
cumplimiento de los deberes existentes.

Nueve en el tercer puesto significa:

Cuando en el clan se acaloran los ánimos

se origina el arrepentimiento a causa de una excesiva severidad.

Sin embargo: ¡Ventura!

Cuando la mujer y el niño retozan y ríen

esto conducirá finalmente a la humillación.

En el seno de la familia debe reinar el justo equilibrio entre la dureza
y la dejadez. El rigor excesivo contra la propia carne y sangre provoca
el remordimiento. Sin embargo, en caso de duda, la excesiva severidad,
pese a eventuales desaciertos, y porque de todas maneras se conserva así
la disciplina de la familia, es mejor que una excesiva debilidad que
conduce a la vergüenza.

Seis en el cuarto puesto significa:

Ella es la riqueza de la casa.

¡Gran ventura!

La dueña de casa es la persona de quien depende la prosperidad y el
bienestar de la familia. Siempre hay prosperidad cuando los gastos y los
ingresos guardan entre sí una sana proporción. Esto conduce a un estado
de gran ventura. Transferido el concepto a la vida pública, se hace aquí
referencia al administrador fiel que, gracias a sus medidas normativas,
fomenta el bien general.

Nueve en el quinto puesto significa:

Como un rey él se acerca a su clan: no temáis.

¡Ventura!

Un rey es imagen o símbolo de un hombre paternal que posee riqueza
interior. No actúa infundiendo temor, antes bien toda la familia puede
tener confianza en él, pues todo el trato es gobernado por el
amor. Su modo de ser, su carácter, ejerce espontáneamente por sí
mismo la necesaria y justa influencia.

Al tope un nueve significa:

Su labor inspira respeto y veneración.

Finalmente llega la ventura.

El orden de la familia descansa en última instancia en la persona del
amo de la casa. Si éste cultiva su personalidad hasta lograr que ésta se
imponga con la fuerza que da la verdad interior, todo marchará bien en
el seno de la familia. Quien ocupa un puesto directivo, debe asumir las
responsabilidades.`

names[38] = `K’uei / El Antagonismo (La Oposición)`

texts[38] = `arriba Li, Lo Adherente, el fuego

abajo Tui, Lo Sereno, el lago

El signo total se compone del signo primario de arriba, Li, la llama que
flamea hacia arriba, y el signo primario Tui, el lago, abajo, que se
filtra escurriéndose hacia abajo. Estos movimientos son antagónicos
entre sí. Por otra parte, Li es la segunda hija y Tui la hija más joven.
Aun cuando moran en la misma casa, pertenecen sin embargo a distintos
hombres, y sus voluntades no son por lo tanto unánimes y mancomunadas,
sino que tienden a objetivos opuestos, antagónicos.

EL DICTAMEN

El Antagonismo. En cosas pequeñas, ventura.

Cuando los hombres viven en oposición y enajenamiento mutuo como
extraños, no puede llevarse a cabo ninguna gran obra en común. Los
ánimos disienten demasiado entre sí. Ante todo, es necesario no proceder
con rudeza, cosa que agudizaría más aún el antagonismo, más bien es
menester conformarse con los efectos que se obtienen poco a poco, en lo
pequeño. En ese sentido todavía podrá esperarse la ventura, puesto que
la índole de la situación hace que el antagonismo no excluya toda
posibilidad de entendimiento.

El antagonismo, que en su carácter de oposición polarizada dentro de una
totalidad amplia se presenta por lo general como freno, por otra parte,
cumple también funciones benignas e importantes.

Los antagonismos entre Cielo y Tierra, espíritu y naturaleza, hombre y
mujer, generan, gracias a su conciliación, la creación y procreación de
la vida. En el mundo visible de los objetos, el antagonismo posibilita
la separación en especies, mediante la cual se establece un orden en el
mundo.

LA IMAGEN

Arriba el fuego, abajo el lago:

la imagen del Antagonismo.

Así el noble, sea como fuese la vida en comunidad,

conserva su índole singular.

Como los dos elementos fuego y agua, aun cuando se hallan juntos, jamás
se mezclan, sino que conservan su naturaleza propia, tampoco el hombre
culto se dejará llevar a la vulgaridad en ningún momento, inducido a
ello por el trato con gentes de otra índole y por tener con ellos
intereses comunes; pese a toda situación comunitaria, conservará siempre
su peculiar modo de ser.

LAS DIFERENTES LÍNEAS

Al comienzo un nueve significa:

Desaparece el arrepentimiento.

Si pierdes un caballo, no corras tras él.

Volverá por sí mismo.

Si ves mala gente cuídate de cometer faltas.

Aun en épocas de antagonismo es posible actuar teniendo por meta el
permanecer libre de faltas, para que así se desvanezca el
arrepentimiento. Al comenzar el antagonismo, no debe pretenderse
conquistar a la fuerza la unión; así sólo se obtendrá lo contrario, tal
como un caballo se va alejando cada vez más cuando uno corre tras él. Si
se trata de un caballo propio, es cuestión de dejarlo ir tranquilamente,
pues volverá por sí mismo. Así también un hombre, que es de los nuestros
y que momentáneamente se ha apartado de nosotros a causa de un
malentendido, volverá por sí mismo si se lo deja hacer. Por otra parte,
es menester ser precavido cuando acuden a empujones personas malignas
que no son de los nuestros, también como consecuencia de un
malentendido. En tales casos se trata de evitar errores: no intentar
alejarlos con violencia, cosa que provocaría la enemistad en grado
creciente, sino simplemente tolerarlos. Ya se retirarán por sí mismos.

Nueve en el segundo puesto significa:

Se topa uno con su amo y señor en un estrecho callejón.

No hay defecto.

A raíz de los malentendidos no es posible que las personas que por su
naturaleza debieran juntarse, lo hagan de una manera totalmente
correcta. En ese caso, también puede resultar aceptable un encuentro
casual en condiciones informales, con tal de que exista una afinidad
interior.

Seis en el tercer puesto significa:

se ve el carro arrastrado hacia atrás,

los bueyes detenidos,

cortados al hombre cabellos y nariz.

No hay un buen comienzo, pero sí un buen final.

A veces las circunstancias parecerían indicar que todo se ha conjurado
contra uno: el hombre se ve frenado en su progreso, detenido, se siente
insultado y herido (el cortar los cabellos y la nariz constituía un
castigo grave, una deshonra). Pero en estos casos no debe uno dejarse
inducir a error; a pesar de tales antagonismos es necesario aferrarse a
la persona con la que uno se siente afín y unido. Así, pese al mal
comienzo, se arribará finalmente a buen término.

Nueve en el cuarto puesto significa:

Aislado en soledad a causa del antagonismo,

se encuentra uno con un hombre de espíritu afín,

con el que podrá mantener un trato leal.

A pesar del peligro, ninguna tacha.

Cuando se encuentra uno en medio de una sociedad de la cual se siente
separado por oposición interior, cae en el aislamiento. Pero si en una
situación semejante descubre a alguien que, fundamentalmente y conforme
a su naturaleza íntima concuerda con él; alguien a quien, por lo tanto,
puede brindarse plena confianza, se superan todos los peligros del
aislamiento. Nuestra voluntad obtendrá éxito y nos veremos libres de
faltas.

Seis en el quinto puesto significa:

Desaparece el arrepentimiento.

Con los dientes se abre camino el compañero a través del cascarón.

Si uno va hacia él, ¿cómo podría eso ser un error?

Se encuentra a un hombre leal, al que en un principio no se reconoce ni
aprecia debido al enajenamiento general. Pero él, abriéndose camino con
los dientes, atraviesa las envolturas que separan. En este caso, aquél a
quien tal compañero se muestra en su verdadero carácter, tiene el deber
de salir a su encuentro y colaborar con él.

Al tope un nueve significa:

Aislado por el antagonismo, uno ve a su compañero

como un cerdo cubierto de roña,

como un carro repleto de demonios.

Primero se tiende el arco contra él,

luego se deja el arco de lado.

No es un bandido, él va a cortejar cumplido el plazo.

Al acudir cae la lluvia, luego llega la ventura.

Aquí el aislamiento aparece condicionado por malentendidos: no por las
circunstancias externas, sino por estados internos. Uno desconoce a sus
mejores amigos, los considera impuros como si fuesen sucios puercos y
carros cargados de demonios, y adopta una postura de defensa. Pero
finalmente reconoce el error propio, aparta el arco y cae en la cuenta
de que el otro se allega con las mejores intenciones en procura de una
estrecha alianza. Así se disuelve la tensión. La unión disuelve el
antagonismo, tal como la lluvia en su caída viene a relevar el bochorno,
la pesadez anterior a la tormenta. Todo marcha bien, pues precisamente
cuando llega a su culminación el antagonismo se convierte en su
contrario.`

names[39] = `Chien / El Impedimento`

texts[39] = `arriba K’an, Lo Abismal, el agua

abajo Ken, El Aquietamiento, la montaña

Este signo representa un riesgoso abismo que se abre delante de uno y
que a sus espaldas tiene una empinada e inaccesible montaña. Así es
cuando alguien se ve rodeado por impedimentos. Pero en la virtud de la
montaña de mantenerse quieta reside al mismo tiempo una indicación de
cómo es posible salir de entre los impedimentos. El hexagrama representa
impedimentos que van apareciendo con el correr del tiempo, pero que
deben y pueden ser superados. De ahí que todo el texto se oriente en el
sentido de superar los impedimentos.

EL DICTAMEN

El Impedimento. Es propicio el Sudoeste.

No es propicio el Nordeste.

Es propicio ver al gran hombre.

La perseverancia trae ventura.

El sudoeste es la región de la retirada, el nordeste la región de la
avanzada. Se trata de una situación en la cual uno se enfrenta con
impedimentos que no pueden ser superados directamente. En este caso, en
vista del peligro, será sabio detenerse y retirarse. Sin embargo, esta
retirada es tan sólo una preparación para la superación de los
obstáculos. Es necesario en estos casos juntarse con amigos de ideas
coincidentes y subordinarse a las directivas de un hombre que pueda
hallarse a la altura de la situación, pues de este modo se logrará
eliminar los impedimentos. Tal objetivo requiere una actitud de
perseverancia, precisamente en momentos en que uno parecería verse
obligado a hacer algo que lo desviaría de la meta. Semejante orientación
interior inconmovible traerá finalmente la ventura. El impedimento que
sólo dura cierto tiempo es un factor valioso para la formación de la
propia personalidad. Se trata del valor de la adversidad.

LA IMAGEN

Sobre la montaña se encuentra el agua: la imagen del impedimento.

Así el noble se orienta hacia su propia persona y va formando su
carácter.

Las dificultades y los obstáculos arrojan al hombre de vuelta hacia sí
mismo. Pero mientras el hombre común busca la culpa afuera, es decir en
otros hombres, y acusa a su destino, el noble busca la falla en sí
mismo, y en virtud de este ensimismamiento el impedimento externo se
transforma para él en motivo de formación y enriquecimiento interior.

LAS DIFERENTES LÍNEAS

Al comienzo un seis significa:

Ir conduce al impedimento; venir encuentra alabanza.

Al hallarse uno frente a un impedimento, un obstáculo, es cuestión de
reflexionar acerca de cuál será el mejor modo de ponerle fin. Cuando nos
amenaza un peligro, no hemos de tratar de avanzar ciegamente, a toda
costa; esto sólo nos acarrearía complicaciones. Lo justo será más bien
retirarse antes que nada, no con el fin de abandonar la lucha, sino para
aguardar el momento preciso para la acción.

Seis en el segundo puesto significa:

El servidor del rey encuentra impedimento sobre impedimento.

Pero no es por su propia culpa.

Mientras que normalmente lo mejor que puede hacerse es dar un rodeo para
eludir el obstáculo y tratar así de superarlo en la línea de menor
resistencia, hay sin embargo algún caso en el cual es menester salir al
encuentro de la dificultad, aun cuando se acumulen más y más
dificultades. Esto sucede cuando el camino del deber conduce a una
situación en la cual uno no puede obrar de acuerdo con su libre
decisión, sino que, al contrario, el deber lo obliga a salir y afrontar
el peligro en aras de una causa superior. En tal caso debe procederse
así con absoluta tranquilidad interior, ya que uno no ha buscado esta
difícil situación ni se ve metido en ella por su propia culpa.

Nueve en el tercer puesto significa:

Ir conduce a impedimentos: entonces él regresa.

Mientras que la línea anterior da el ejemplo de un funcionario obligado
a tomar por el camino del peligro en aras del deber, aquí se muestra el
caso de un hombre que debe actuar como padre de familia o jefe de los
suyos. Si él quisiera, con ligereza, precipitarse en el peligro, sería
sin duda inútil, dado que los seres confiados a su cuidado no podrían
arreglárselas solos. Si en cambio se retira, y luego retorna nuevamente
hacia los suyos, éstos lo saludarán con gran regocijo.

Seis en el cuarto puesto significa:

Ir conduce a impedimentos,

venir conduce a la unión.

También para este caso se describe una situación en la cual uno solo no
puede estar a la altura de las circunstancias. En una situación
semejante el camino recto no suele ser el más corto. Si uno se
propusiera tratar de avanzar confiando en sus propias fuerzas y sin los
preparativos necesarios, no encontraría el apoyo que ha menester y
comprendería demasiado tarde que a veces los cálculos engañan, puesto
que las condiciones con que uno esperaba poder contar resultan ser harto
débiles. De ahí que, en este caso, sea más correcto y acertado, por lo
pronto, mantenerse en reserva y reunir en su torno compañeros de
confianza en los cuales sea dable apoyarse, para así lograr la
superación de los impedimentos.

Nueve en el quinto puesto significa:

En medio de los mayores impedimentos acuden amigos.

Aquí vemos al hombre llamado a poner coto a la emergencia. No debería
empeñarse en eludir los impedimentos, por grande que sea el peligro de
que tales impedimentos se acumulen ante él. Pues, como realmente es
dueño de una vocación superior, su poder espiritual es lo
suficientemente vigoroso como para atraer hacia sí a los hombres, a fin
de que se alleguen y le ayuden. Pues él es el hombre capaz de
organizados realmente, mediante una planificada distribución de tareas y
la cooperación de todos los interesados, con el fin de que así se supere
el impedimento.

Al tope un seis significa:

Ir conduce a impedimentos,

venir conduce a una gran ventura.

Es propicio ver al gran hombre.

En esté caso se describe a un hombre que ha dejado atrás todo lo
mundanal con sus turbulentos afanes. Si en tales momentos surge en el
mundo una época de impedimentos, podría parecer que lo más sencillo para
él sería dar simplemente las espaldas y refugiarse en el más allá. Pero
este camino le está vedado. Él no tiene derecho a entrar sólo en la
bienaventuranza, abandonando el mundo a merced de la necesidad. Antes
bien, su deber lo reclama y lo hará retornar una vez más al torbellino
del mundo. Precisamente su experiencia y su libertad interior le darán
en tales casos la posibilidad de crear algo grande y maduro que traerá
la salvación, la ventura. Así pues, será propicio ver al gran hombre a
cuyo lado podrá consumarse la obra de salvación.`

names[40] = `Hsieh / La Liberación`

texts[40] = `arriba Chen, Lo Suscitativo, el trueno

abajo K’an, Lo Abismal, el agua

Aquí el movimiento se abre paso y sale del peligro. El impedimento quedó
eliminado, las dificultades están en vías de solución. La liberación no
se ha cumplido todavía, sino que precisamente ahora se inicia, y sus
diversos estadios encuentran expresión en este signo.

EL DICTAMEN

La Liberación. Es propicio el Sudoeste.

Si ya no queda nada a donde uno debiera ir,

es venturoso el regreso.

Si todavía hay algo  a donde uno debiera ir,

entonces es venturosa la prontitud.

Se trata de una época en la cual comienzan a disolverse, a disiparse
tensiones y complicaciones. En tales momentos es preciso retirarse
cuanto antes hacia las condiciones comunes o normales: he aquí el
significado del Sudoeste. Tales épocas de viraje son muy importantes.
Semejante a una lluvia liberadora que afloja y disuelve la tensión de la
atmósfera haciendo estallar brotes y pimpollos, también un tiempo de
liberación de cargas oprimentes obtiene efectos salvadores y
estimuladores que se manifiestan en la vida. Pero hay por cierto algo
muy importante al respecto: en tales épocas es necesario que nadie
intente exagerar el valor del triunfo. Es cuestión de no avanzar más
allá de lo indispensable. Retornar al orden de la vida no bien alcanzada
la liberación, he ahí lo que aporta ventura. Cuando aún quedan restos
por elaborar es cuestión de hacerlo lo más pronto posible, a fin de que
todo quede bien aclarado y no se presenten demoras o dilaciones.

LA IMAGEN

Trueno y lluvia se levantan:

la imagen de la Liberación.

Así el noble perdona las faltas y exime de culpa.

La acción de la tormenta purifica la atmósfera. Así procede también el
noble con respecto a las faltas y los pecados de los hombres que
provocan estados de tensión. Mediante su claridad promueve él la
liberación. Sin embargo, cuando las transgresiones surgen a la luz del
día, no se detiene para insistir en ella; sencillamente pasa por alto
las faltas, las transgresiones involuntarias, tal como va perdiéndose el
sonido reverberante del trueno, y perdona la culpa, las transgresiones
deliberadas, al igual que el agua que limpia todas las cosas y quita
toda suciedad.

LAS DIFERENTES LÍNEAS

Al comienzo un seis significa:

Sin mácula.

De conformidad con la situación, no se gastan muchas palabras. El
impedimento ha pasado, ha llegado la liberación. Uno se repone
tranquilamente y se mantiene quieto. En épocas que siguen a dificultades
ya superadas, esto es exactamente lo que conviene hacer.

Nueve en el segundo puesto significa:

En el campo uno cobra tres zorros

y recibe una flecha amarilla.

La perseverancia aporta ventura.

El símbolo procede de la caza. El cazador apresa tres astutos zorros y
recibe como recompensa una flecha amarilla. Los obstáculos de la vida
pública son los zorros impostores, aviesos, que tratan de influir en el
ánimo del soberano con su adulación. Éstos deben ser previamente
eliminados para que la liberación pueda producirse. Mas esta lucha no
puede librarse con armas indebidas. El color amarillo indica el justo
medio del criterio que ha de aplicarse en el procedimiento contra los
enemigos, en tanto que la flecha señala la recta dirección. Cuando de
todo corazón dedica uno sus esfuerzos a la tarea de la liberación, su
rectitud interior adquiere tal poder que llega a actuar como arma contra
todo lo vil y falso.

Seis en el tercer puesto significa:

Cuando alguien lleva una carga sobre sus espaldas

y sin embargo viaja en coche

da motivo a que se acerquen los bandidos.

La perseverancia lleva a la humillación.

Un hombre que había estado en condiciones de indigencia, ha alcanzado
una posición acomodada, viéndose libre de toda necesidad. Si en tal
situación pretende instalarse a sus anchas, como hacen los advenedizos,
sin que a su modo de ser le cuadren condiciones tan cómodas, atraerá
hacia sí a los salteadores de caminos, y si continúa en su actitud caerá
ciertamente en deshonra y vergüenza.

Kung Tse dice al respecto: “Llevar una carga sobre las espaldas, es
asunto de un hombre vulgar, de un plebeyo. Un coche es instrumento
propio de un hombre distinguido. Ahora bien, cuando un hombre común
utiliza el instrumento de un hombre distinguido, los bandidos planean
quitárselo. Cuando alguien se muestra prepotente hacia arriba y duro
hacia abajo, los bandidos planean atacarlo. La conservación negligente
de las cosas seduce a los bandidos y los lleva a robar. Las suntuosas
alhajas de una doncella tientan a robarle su virtud.”

Nueve en el cuarto puesto significa:

Libérate del dedo gordo de tu pie,

entonces acudirá el compañero

y en él podrás confiar.

En tiempos de paralización sucede que hombres vulgares se adhieran a un
hombre superior y que, debido al acostumbramiento diario, se amalgamen
con él al punto de volverse indispensables como lo es el dedo gordo para
el pie, ya que facilita el andar. Pero cuando se aproxima el tiempo de
la liberación con su llamado a la acción, se hace necesario desprenderse
de semejantes vínculos casuales que lo unen a gente con la cual uno al
fin y al cabo no tiene ninguna afinidad interior. Pues si esto no
ocurriera, los amigos de mentalidad afín, en los que se puede confiar
realmente y en cuya compañía podría uno realizar algo, se mantendrán
apartados, con evidente desconfianza.

Seis en el quinto puesto significa:

Con tal que el noble sólo pueda liberarse, esto traerá ventura.

Demostrará así a los viles que la cosa le va en serio.

Las épocas de liberación exigen una decisión interior. A los viles no
puede alejárselos con prohibiciones o recursos externos. Si uno quiere
deshacerse de ellos, primero es menester desprenderse interiormente y
por completo de su presencia; entonces se darán cuenta por sí mismos que
la cosa va en serio y se retirarán.

Al tope un seis significa:

El príncipe dispara sobre un azor apostado en un alto muro.

Lo abate. Todo es propicio.

El azor sobre un alto muro da la imagen de un hombre común pero que
ocupa una posición elevada e impide la liberación. Resiste el efecto de
influencias interiores, porque su malignidad lo ha endurecido. Es
preciso eliminarlo violentamente y ello requiere los correspondientes
medios.

Kung Tse dice al respecto: “El azor es el objetivo de la caza. Arco y
flecha son las herramientas, los medios. El arquero es el hombre que ha
de utilizar correctamente los medios para lograr el fin. El noble
alberga los medios en su persona. Aguarda el debido momento y entonces
actúa. Por eso no tiene más que dar un paso y salir, y ya abate la
presa. Tal es la condición de un hombre que actúa luego de haber dado
término a la preparación de los medios.”`

names[41] = `Sun / La Merma`

texts[41] = `arriba Ken, El Aquietamiento, la montaña

abajo Tui, Lo Sereno, el lago

El hexagrama representa una merma del trigrama inferior a favor del
trigrama superior, habiéndose trasladado hacia arriba el tercer trazo
originariamente fuerte, y ocupando su lugar el trazo del tope
originariamente débil. De este modo lo de abajo, lo inferior, se
ve mermado, disminuido, a costa de lo de arriba, lo superior. Y esto,
por antonomasia, significa lisa y llanamente disminución. Cuando se
aminora el fundamento de una construcción y se refuerzan sus muros en lo
alto, el conjunto pierde firmeza y estabilidad. Del mismo modo también
una disminución del bienestar del pueblo a favor del gobierno constituye
lisa y llanamente una merma. Y toda la tendencia del signo propende a
señalar cómo puede tener lugar ese desplazamiento de factores de
bienestar sin que por ello se agoten las fuentes de bienestar del pueblo
y de sus capas inferiores.

EL DICTAMEN

La merma unida a la veracidad

obra elevada ventura sin tacha.

Puede perseverarse en ello.

Es propicio emprender algo.

¿Cómo se pone esto en práctica?

Dos escudillas pequeñas pueden usarse para el sacrificio.

Merma no significa necesariamente y en todos los casos algo malo. El
Aumento y La Merma llegan cada cual a su tiempo. Es cuestión de
adaptarse entonces al momento, sin pretender encubrir la pobreza
mediante una huera apariencia. Cuando, en virtud de un tiempo de cosas
menores llega a manifestarse una verdad interior, no es lícito
avergonzarse de la sencillez. En tales momentos la sencillez es
precisamente lo indicado, lo que confiere fuerza interior gracias a la
cual podrá uno volver a emprender algo. No deben abrigarse escrúpulos ni
siquiera cuando la belleza exterior de lo cultural, más aún, la
conformación de las relaciones religiosas, se ven obligadas a sufrir
desmedro a causa de la sencillez. Es necesario recurrir a la fortaleza
de la actitud interior para compensar la indigente apariencia externa.
Entonces la fuerza del contenido ayudará a sobreponerse a la modestia de
la forma. Ante Dios no hace falta ninguna falsa apariencia. Aun con
medios escasos puede uno manifestar los sentimientos de su
corazón.

LA IMAGEN

Abajo junto a la montaña está el lago:

la imagen de la Merma.

Así el noble reprime su cólera y refrena sus impulsos.

El lago, situado abajo, al pie de la montaña, se evapora. Por ello se ve
mermado a favor de la montaña, enriquecida gracias a su humedad. La
montaña da la imagen de una fuerza testaruda que puede acumularse y
condensarse hasta caer en la iracundia; el lago da la imagen de un
incontrolado regocijo que puede desarrollarse hasta formar impulsos
pasionales, cuando ese desarrollo se realiza a costa de las energías
vitales. Entonces es preciso mermar: la ira debe disminuirse mediante el
aquietamiento, los impulsos deben frenarse mediante la restricción. En
virtud de esta merma de las fuerzas anímicas inferiores se enriquecen
los aspectos superiores del alma.

LAS DIFERENTES LÍNEAS

Al comienzo un nueve significa:

Una vez concluidos los negocios, acudir pronto allí

no es un error.

Pero ha de considerarse

hasta dónde es lícito mermar a los demás.

Es cosa abnegada y buena que luego de despachar sus tareas inmediatas e
importantes, ponga uno sus energías al servicio de los demás, ayudando
rápidamente donde se puede, sin grandes aspavientos y sin jactarse de
ello. Pero a su vez el hombre en posición superior a quien así se ayuda
ha de reflexionar y sopesar debidamente cuánto tiene derecho a aceptar
sin perjudicar sustancialmente al solícito servidor o amigo, únicamente
allí donde se da esa delicada consideración, podrá uno brindarse
incondicionalmente y sin vacilación.

Nueve en el segundo puesto significa:

Es propicia la perseverancia.

Emprender algo trae desventura.

Sin mermarse a sí mismo

puede uno acrecentar a los demás.

Una noble conciencia de sí mismo y una consecuente e intransigente
seriedad para consigo mismo, es la actitud interior necesaria cuando se
quiere servir a los demás. El que se rebaja con el fin de conformarse a
la voluntad de un superior, disminuye por cierto su propia posición, mas
sin ser útil al otro en forma duradera. Y esto acarrea el mal. Servir al
otro sin renegar de sí mismo, he ahí únicamente el verdadero servicio de
valor duradero.

Seis en el tercer puesto significa:

Cuando tres personas marchan juntas,

se disminuyen en una persona.

Cuando una persona marcha sola

encuentra a su compañero.

Donde se juntan tres, hay celos. Entonces uno de ellos tiene que ceder e
irse. Un enlace muy estrecho sólo es posible entre dos. Ahora bien,
cuando alguien está en soledad, encontrará seguramente al compañero que
lo complemente.

Seis en el cuarto puesto significa:

Cuando uno disminuye sus defectos,

hace que el otro acuda presuroso y se alegre.

No hay tacha.

A menudo nuestros defectos impiden aun a la gente bien intencionada
acercarse a nosotros. Tales defectos se ven con frecuencia reforzados y
empeorados a causa del ambiente en que nos hallamos. Si uno logra en sí
mismo la humildad necesaria como para deshacerse de esos defectos,
liberará a los amigos bien intencionados de un peso interior y
conseguirá que ellos se acerquen cuanto antes, para mutua alegría.

Seis en el quinto puesto significa:

Sin duda alguien está incrementándolo.

Diez pares de tortugas no pueden oponerse a ello.

¡Elevada ventura!

Cuando alguien está predestinado a la dicha, ésta llega en forma
irresistible. Todos los oráculos, como por ejemplo los que se obtienen
por medio de caparazones de tortugas, habrán de coincidir a su favor
mediante signos propicios. Nada debe temer, pues su felicidad obedece a
un designio superior.

Al tope un nueve significa:

Cuando uno es aumentado sin merma de los demás,

esto no es un defecto.

La perseverancia trae ventura.

Es propicio emprender algo.

Uno consigue servidores,

pero ya no posee un hogar particular.

Hay personas que dispensan bendiciones a todo el mundo. Todo incremento
de energía, todo aumento que les es conferido redunda en bien de todos
los hombres y por lo tanto no implica ninguna merma para los demás.
Mediante el trabajo diligente y perseverante se tendrá éxito y se
encontrará a los ayudantes que serán como uno los necesita. Mas lo que
uno va creando no constituye ninguna ventaja personal, ningún privilegio
particular limitado; más bien es algo abierto y accesible a todo el
mundo.`

names[42] = `I / El Aumento`

texts[42] = `arriba Sun, Lo Suave, el viento

abajo Chen, Lo Suscitativo, el trueno

La idea de Aumento se expresa mediante el hecho de haber descendido el
trazo fuerte inferior del semisigno superior, colocándose debajo del
semisigno inferior.^([40]) El pensamiento fundamental del Libro de las
Mutaciones encuentra su expresión también en esta concepción. El
verdadero gobernar debe ser una forma de servir. Un sacrificio de lo
superior que tiene por efecto un aumento de lo inferior, se denomina
Aumento por antonomasia para insinuar de este modo la única índole del
espíritu capaz de ayudar al mundo.

EL DICTAMEN

El Aumento. Es propicio emprender algo.

Es propicio atravesar las grandes aguas.

Debido al sacrificio operante desde lo alto en aras del aumento de lo
inferior, surge en el pueblo una disposición de ánimo caracterizada por
la alegría y la gratitud, sumamente valiosa para el florecimiento del
bien público. Cuando de este modo sienten los hombres afecto por sus
príncipes, bien puede emprenderse algo y aun en los asuntos difíciles y
riesgosos se logrará éxito. Por eso, en tales épocas ascendentes, cuyo
desarrollo se ve acompañado por el éxito, es cuestión de trabajar y de
aprovechar el tiempo. La época es similar al tiempo en que celebran sus
bodas el Cielo y la Tierra; en que la Tierra se hace partícipe de la
energía creadora del Cielo, dando forma y realidad a los seres
vivientes. El tiempo del Aumento no dura, por lo tanto es menester
utilizarlo mientras está.

LA IMAGEN

Viento y trueno: la imagen del Aumento.

Así el noble: cuando ve el bien, lo imita,

si tiene defectos, se deshace de ellos.

Al observar cómo el trueno y el viento se aumentan y se refuerzan
recíprocamente, aprende uno cómo encontrar el camino hacia el aumento de
sí mismo, hacia el propio mejoramiento. Cuando algo bueno se descubre en
los demás, debe uno emularlo, haciendo suyo de este modo todo el bien
que hay sobre la tierra. Cuando uno observa algo malo en sí mismo, debe
quitárselo de encima. Así se libera uno del mal. Semejante modificación
ética constituye el aumento más importante de la personalidad.

LAS DIFERENTES LÍNEAS

Al comienzo un nueve significa:

Es propicio llevar a cabo grandes hechos.

¡Elevada ventura! Ningún defecto.

Cuando uno experimenta un gran estímulo que procede de lo alto, deberá
utilizar el incremento de energía así obtenido para realizar algo
grande, para lo cual de otro modo quizás no habría hallado ni la fuerza,
ni entusiasmo por tanta responsabilidad. Por el hecho de hallarse uno
libre de egoísmo, se opera una gran ventura, y al lograr esa gran
ventura, uno permanecerá libre de recriminaciones.

Seis en el segundo puesto significa:

Sin duda alguien lo incrementa.

Diez pares de tortugas no pueden oponerse a ello.

Una constante perseverancia trae ventura.

El rey lo presenta ante Dios. ¡Ventura!

El verdadero aumento se produce por el hecho de crear uno dentro de sí
las condiciones necesarias: disposición receptiva y amor al bien. Con
ello lo que se ambiciona adviene por sí mismo, con la infalibilidad de
una ley de la naturaleza. Allí donde el aumento se manifiesta en armonía
con las más altas leyes cósmicas, ninguna constelación de casualidades
puede obstaculizarlo. Todo depende, eso sí, de que la inesperada dicha
no lo incline a uno a la frivolidad y negligencia; que antes bien haga
suya esa dicha merced a su fortaleza interior y perseverancia. En este
caso obtendrá significación ante Dios y los hombres, y podrá llevar a
cabo alguna obra para bien del mundo.

Seis en el tercer puesto significa:

Uno se ve incrementado por sucesos infaustos.

No hay tacha si eres veraz

y caminas por el medio

e informas al príncipe, provisto de un sello.

Un tiempo de bendición y enriquecimiento es tan poderoso en sus efectos
que hasta acontecimientos en otro caso desventurados tienen que redundar
en beneficio de aquéllos a quienes afectan. Ellos se liberan de sus
defectos y, como obran de acuerdo con la verdad, conquistan tal
autoridad interior que llegan a ejercer influencia como si estuviesen
autorizados por un mandato escrito y sellado.

Seis en el cuarto puesto significa:

Si andas por el medio

e informas al príncipe,

él te seguirá.

Es propicio ser utilizado

en el traslado de la capital.

Es importante que haya personas mediadoras entre conductores y
conducidos. Han de ser personalidades desinteresadas, más aún cuando se
trata de tiempos de aumento, y el beneficio ha de emanar del conductor
hacia el pueblo. De la bendición nada debe retenerse en forma egoísta,
pues es realmente preciso que redunde en beneficio de aquéllos a quienes
está destinada. Semejante personalidad mediadora, que ejerce su buena
influencia también sobre el conductor, es especialmente importante en
épocas que imponen grandes empresas decisivas para el porvenir y que
requieren la conformidad interior de todos los interesados.

Nueve en el quinto puesto significa:

Si tienes de verdad un corazón bondadoso,

no preguntes. ¡Elevada ventura!

De cierto la bondad será reconocida como tu virtud.

La verdadera bondad no calcula, ni pide dignidad y gratitud; más bien
sus efectos se despliegan según una necesidad interna. Semejante corazón
realmente bondadoso ya se siente recompensado al encontrar
reconocimiento, y de tal modo el influjo de la bendición se expandirá
sin impedimentos.

Al tope un nueve significa:

Él no trae aumento para nadie.

Acaso hasta llegue alguien a golpearlo.

No mantiene duraderamente firme su corazón. ¡Desventura!

El sentido de la situación es que los superiores deben aumentar a los
inferiores mediante su renunciación. Al perder uno la oportunidad de
cumplir con ese deber y al no servir para bien de nadie, se sustrae
asimismo al influjo estimulante de los demás, viéndose muy pronto
aislado. De ese modo atrae ataques sobre sí. Una mentalidad que no
permanece siempre en armonía con* las exigencias del tiempo, acarreará
necesariamente la desventura.

Confucio dice acerca de esta línea: “El noble aquieta a su persona antes
de moverse; se recoge, se concentra en su mente antes de hablar; afirma
sus relaciones antes de solicitar algo. Al poner en orden estos tres
aspectos, gozará de plena seguridad. Mas cuando uno es impensado y
brusco en sus movimientos, la gente no coopera. Si uno es agitado en sus
palabras, éstas no encuentran eco en la gente. Si uno pide algo sin
haber establecido relaciones previas, la gente no se lo da. Cuando nadie
se queda junto a uno, se acercan los malhechores.”`

names[43] = `Kuai / El Desbordamiento (La Resolución)`

texts[43] = `arriba Tui, Lo Sereno, el lago

abajo Ch’ien, Lo Creativo, el Cielo

El signo representa, por una parte, una irrupción que se produce luego
de una tensión condensada durante largo tiempo, como la irrupción de un
río henchido que rompe sus diques, o la descarga de una lluvia
torrencial. Transferido a circunstancias humanas significa, por otra
parte, el tiempo en el cual poco a poco van extinguiéndose los vulgares.
Su influencia está en disminución y, mediante una acción decidida,
irrumpe un cambio de condiciones. Se adjudica este signo al tercer mes
(abril-mayo).

EL DICTAMEN

El Desbordamiento.

Resueltamente el asunto ha de darse a conocer

en la corte del rey.

Ha de proclamarse conforme a la verdad. ¡Peligro!

Hay que dar aviso a la propia ciudad.

No es propicio tomar las armas.

Es propicio emprender algo.

Cuando en la ciudad ocupa un puesto gobernante aunque fuese un solo
hombre vil, éste podrá oprimir a los nobles. Cuando en el corazón anida
una sola pasión siquiera, ésta es capaz de entenebrecer la razón. Pasión
y razón no pueden coexistir, por eso se hace absolutamente necesaria una
lucha incondicional si uno está dispuesto a contribuir a que llegue a
gobernar el bien. Empero, para una decidida lucha por el bien destinada
a eliminar el mal, existen determinadas reglas precisas que no pueden
dejarse de lado si se pretende obtener el triunfo. 1^(o): La decisión
debe fundarse en un enlace entre la fuerza y la afabilidad. 2^(o): Un
compromiso con el mal no es viable; éste debe quedar desacreditado sean
cuales fueren las circunstancias. Del mismo modo, no es tampoco lícito
que uno disimule o embellezca sus propias pasiones y defectos. 3^(o): La
lucha no debe ser conducida por medio de la violencia directa. Allí
donde el mal se ve descubierto y estigmatizado, lucubra las armas a que
debe recurrir, y cuando uno le hace el juego de combatirlo golpe por
golpe, sale perdiendo, puesto que en esta forma uno mismo queda enredado
en odios y pasiones. Por tanto, es cuestión de comenzar mirando por
casa: mantenerse personalmente alerta en cuanto a los defectos
estigmatizados. Así las armas del mal perderán por sí solas su filo, al
no toparse con ningún adversario. Del mismo modo, tampoco los defectos
propios han de combatirse directamente. Mientras uno siga debatiéndose
con ellos a golpes, permanecerán siempre victoriosos. 4^(o): La mejor
manera de combatir el mal es un enérgico progreso en el sentido del
bien.

LA IMAGEN

El lago ha subido al Cielo:

la imagen del Desbordamiento.

Así el noble dispensa riquezas hacia abajo

y recela cobijarse en su virtud.

Cuando el agua del lago se ha elevado al cielo, ello hace temer que se
desencadene una lluvia torrencial. Esto el noble lo considera una
advertencia, tomando a tiempo las medidas necesarias para prevenir una
catástrofe, un violento derrumbe. Quien intentara atesorar riquezas
únicamente para sí solo, sin pensar en otros, experimentaría sin duda la
violencia de su derrumbe. Pues a toda recolección sigue la distribución.
Por eso el noble, ya mientras recolecta, distribuye. De igual modo, en
la formación de su carácter tiene buen cuidado de no empecinarse en
cuestiones de amor propio, sino de mantenerse en condiciones de causar
buena impresión gracias a un constante y riguroso autoexamen.

LAS DIFERENTES LÍNEAS

Al comienzo un nueve significa:

Poderoso en los dedos de los pies que avanzan.

Si uno acude sin estar a la altura de la cuestión

comete una falta.

En épocas de decidido avance resulta particularmente difícil el primer
paso. Se siente uno entusiasmado como para emprender un decidido avance.
Pero la resistencia es muy fuerte todavía. Es cuestión de sopesar
entonces la propia fuerza y de intervenir tan sólo hasta el punto en que
uno pueda estar seguro del éxito. Una ciega arremetida será perjudicial,
pues precisamente en los comienzos puede una inesperada recaída acarrear
las más funestas consecuencias.

Nueve en el segundo puesto significa:

Llamada de alarma.

Al atardecer y durante la noche armas.

No temas nada.

Estar dispuesto lo es todo. La decisión marcha inseparablemente unida a
la precaución. Cuando uno es cauteloso y circunspecto, no tiene por qué
asustarse ni agitarse. Permaneciendo vigilante a toda hora, mientras
todavía no hay peligro alguno, se encontrará uno armado y protegido para
cuando el peligro se acerque, y no habrá nada que temer. El noble se
mantiene sobre aviso y en guardia ante lo que todavía no es visible, y
anda con cuidado frente a lo que todavía no puede oírse; así permanece
en medio de las dificultades como si no fuesen dificultades. Cuando
alguien cultiva su carácter, la gente se le subordina por sí misma. Al
vencer la razón, las pasiones se retiran por sí mismas. Ser circunspecto
y no olvidar la armadura, he ahí el recto camino hacia la seguridad.

Nueve en el tercer puesto significa:

Ser poderoso en las mandíbulas trae desventura.

El noble está firmemente resuelto.

Anda solitario y se encuentra bajo la lluvia.

Es salpicado y se murmura contra él.

Ninguna tacha.

La situación en que uno se halla es ambigua. Mientras que todos están
embarcados en una resuelta lucha contra lo vil, hay alguien que se
encuentra solo, manteniendo determinada relación con un hombre vulgar.
Si en tal caso quisiera mostrarse fuerte exteriormente y, antes de que
maduraran las circunstancias, pretendiese enfrentarse con aquél, sólo
lograría poner en peligro la situación total; pues el plebeyo adoptaría
entonces, con anticipación, medidas contrarrestantes. La tarea del
hombre superior se ve aquí sumamente dificultada. Él ha de estar
firmemente decidido en su fuero íntimo y, mientras conserve el trato con
ese hombre vulgar, deberá, con todo, mantenerse apartado de cualquier
participación en sus manifestaciones vulgares. A causa de ello, desde
luego lo desconocerán, lo menospreciarán. La gente pensará que forma
parte del partido del hombre vulgar. Se encontrará totalmente solo,
puesto que nadie lo comprenderá. Sus relaciones con el hombre vulgar lo
mancillan a los ojos de la multitud, y las gentes se vuelven contra él
con murmuraciones. Sin embargo, él sobrelleva el desconocimiento y no
comete error alguno, pues permanece fiel a sí mismo.

Nueve en el cuarto puesto significa:

En los muslos no hay piel y resulta difícil el caminar.

Si uno se dejara guiar como una oveja se desvanecería el
arrepentimiento.

Pero al escuchar estas palabras, no se creerá en ellas.

Uno padece una inquietud interior, de modo que no puede quedarse en su
sitio. Quisiera avanzar a toda costa, y al intentarlo se topa con
obstáculos insuperables. Así entra en conflicto con su propia situación
interior. Esto proviene del amor propio con el cual uno pretende imponer
su voluntad. Si se desprendiera de ese amor propio, todo marcharía bien.
Pero este consejo, como tantos buenos consejos, será pasado por alto.
Pues el amor propio hace que, si bien tiene oídos, uno no pueda oír.

Nueve en el quinto puesto significa:

Ante la cizaña se requiere una firme decisión.

Andar por el medio queda libre de tacha.

La cizaña vuelve a crecer una y otra vez y es difícil extirparla. Así
también la lucha contra un hombre común encumbrado requiere una firme
resolución. Uno mantiene relaciones con él y en vista de ello podría
temerse que llegue a abandonar la lucha por considerar que ésta es una
lucha sin esperanza. Pero esto no debe suceder. Es necesario seguir,
decididamente, sin dejarse desviar del camino. Únicamente así quedará
uno libre de faltas.

Al tope un seis significa:

¡Ningún llamado!

Finalmente llega la desventura.

Al parecer se ha conquistado la victoria. Únicamente queda un saldo del
mal, cuyo decidido exterminio está a la orden del día. Todo parece
sumamente fácil. Mas precisamente en ello consiste el peligro. Cuando
uno no está en guardia, el mal logra escapar mediante encubrimientos, y
una vez que ha logrado fugarse, surge una renovada desventura de los
gérmenes que ha dejado: pues el mal no muere fácilmente. También en lo
que se refiere al mal radicado en el propio carácter, debe realizarse un
trabajo a fondo. Si negligentemente dejara uno subsistir algún resto,
brotarían nuevos males.`

names[44] = `Kou / El Ir al Encuentro (La Complacencia)`

texts[44] = `arriba Ch’ien, Lo Creativo, el Cielo

abajo Sun, Lo Suave, el viento

El signo alude a una situación en la cual el principio oscuro vuelve a
introducirse subrepticia e inesperadamente, luego de haber sido
desalojado. Lo femenino va por sí mismo al encuentro de los varones. Es
esta una situación peligrosa y nada favorable, debido a sus posibles
consecuencias y es cuestión de reconocerla a tiempo para ponerle freno.

Este signo se adjudica al quinto mes (junio-julio), puesto que con el
solsticio de verano el principio oscuro comienza paulatinamente a
ascender de nuevo.

EL DICTAMEN

El Ir al Encuentro. La muchacha es poderosa.

No debe uno casarse con semejante muchacha.

El ascenso de lo vulgar queda bosquejado como imagen de una descarada
muchacha que se entrega con ligereza, arrebatando de este modo para sí
el dominio de la situación. Esto no sería posible si lo fuerte y
luminoso no la complaciese a su vez yendo a su encuentro. Lo vulgar
ofrece una apariencia tan inocente y es tan adulador que suele causar
alegría. Su aspecto es tan pequeño y débil que uno cree que puede
gastarle bromas sin preocuparse.

Así el hombre vulgar se encumbra únicamente porque el noble lo considera
inofensivo y le otorga poder. Si se lo enfrentara desde un primer
comienzo, no podría llegar a tener influencia jamás.

Sin embargo, el tiempo de la complacencia, del ir al encuentro, tiene
también otra faz que merece atención. Si bien la complacencia de lo
débil frente a lo fuerte no debe constituir una norma, hay no obstante
épocas o momentos en los cuales cobra una gran significación. Cuando el
Cielo y la Tierra se complacen mutuamente y van mutuamente a su
encuentro, todas las criaturas entran en un período de prosperidad.
Cuando salen a su mutuo encuentro el príncipe y su ayudante, el mundo
entra en orden. Así un recíproco acudir al encuentro entre los
principios predestinados el uno para el otro y dependientes el uno del
otro, es necesario. Sólo que debe permanecer libre de segundas
intenciones impuras, pues si no engendrará el mal.

LA IMAGEN

Bajo el Cielo se encuentra el viento:

la imagen del Ir al Encuentro.

Así procede el príncipe al difundir sus órdenes

proclamándolas hacia los cuatro puntos cardinales.

La situación es parecida a la del signo “Vista” (N^(o) 20). Allí el
viento sopla por sobre la tierra, aquí sopla por debajo del cielo. En
ambas ocasiones llega a todas partes. Mas si allí el viento se hallaba
abajo, sobre la tierra, daba como resultado la imagen de cómo el
gobernante se entera de las condiciones reinantes. Aquí el viento sopla
desde lo alto, lo cual alude al influjo que ejerce el gobernante por
medio de sus órdenes. El Cielo se mantiene lejos de las cosas
terrenales, pero las moviliza mediante el Viento. El gobernante se
mantiene lejos del pueblo, pero lo moviliza mediante sus órdenes y las
manifestaciones de su voluntad.

LAS DIFERENTES LÍNEAS

Al comienzo un seis significa:

Hay que frenarlo con galga de bronce.

La perseverancia trae ventura.

Si uno lo deja seguir su curso, sufrirá desventura.

También un cerdo flaco tiene propensión

a embravecerse y hacer estragos.

Cuando subrepticiamente se ha entrometido un elemento inferior, es
necesario ponerle freno de inmediato y con energía. Al lograr frenarlo
de una manera consecuente podrán evitarse efectos malignos. Si se le
deja curso libre, sobrevendrá ciertamente la desgracia. No debe uno
dejarse seducir y tomar a la ligera aquello que furtivamente se va
introduciendo, por considerarlo de poca monta. Mientras un cerdo es
todavía joven y flaco no podrá alborotar gran cosa, pero una vez que
haya devorado lo suficiente como para saciarse y fortalecerse, cobrará
vigencia su verdadera naturaleza, si con anterioridad no se le han
impuesto las debidas restricciones.

Nueve en el segundo puesto significa:

En el recipiente hay un pez. ¡Ningún defecto!

No es propicio para huéspedes.

Al elemento bajo no se le aplica violencia, sino que se lo mantiene bajo
una mansa vigilancia. En tal caso nada malo debe temerse. Pero es
preciso cuidar que no vaya a juntarse con personas extrañas, ya que —una
vez suelto y dejado en libertad— desplegaría con desenfreno sus malas
inclinaciones.

Nueve en el tercer puesto significa:

En los muslos no hay piel

y resulta difícil el caminar.

Si se tiene siempre presente el peligro

no se cometerá una falta grande.

Uno se siente interiormente tentado a trabar relaciones con el elemento
maligno que abiertamente se le brinda. Es esta una situación muy
peligrosa. Por fortuna, las circunstancias constituyen un impedimento:
bien quisiera uno… pero no puede. Esto da por resultado una dolorosa
indecisión cuando es necesario actuar. Pero si se comprende claramente
lo peligroso de la situación, por lo menos se evitará cometer faltas
mayores.

Nueve en el cuarto puesto significa:

En el recipiente no hay ningún pez.

De ello surge desventura.

A la gente pequeña hay que tolerarla, a fin de que siga siendo benévola
con uno. Así también se la podrá utilizar cuando en algún momento se
necesite de ella. Cuando uno se aparta y no va a su encuentro, esa gente
se aleja y no estará a disposición si alguna vez se la necesita; en tal
caso uno deberá atribuirse la consecuencia a sí mismo.

Nueve en el quinto puesto significa:

Un melón cubierto de hojas de sauce:

líneas ocultas.

Entonces la cosa le llega a uno como caída del cielo.

El melón es símbolo del principio oscuro. Es dulce, pero se pudre
fácilmente, debido a lo cual se lo cubre con hojas de sauce para
protegerlo. La situación es tal que un hombre fuerte, elevado, afirmado
en sí mismo, protege con tolerancia a los inferiores que son sus
subalternos. Él posee dentro de sí las líneas firmes del orden y la
belleza. Pero no hace ostentación de ellas. Prefiere no causar molestias
a los otros con apariencias externas e ingratas amonestaciones; los deja
en plena libertad, confiando firmemente en el poder de transformación
interior que mora en una personalidad fuerte y pura. Y ¡he aquí que el
destino se muestra favorable! Los inferiores responden a este influjo y
caen en sus manos como frutos maduros.

Al tope un nueve significa:

Va al encuentro usando los cuernos.

Humillación. No hay tacha.

Si uno se ha retirado del mundo, el torbellino mundanal suele hacérsele
insoportable. Hay a menudo gente que, con noble orgullo, se mantiene
apartada de todo lo vulgar, rechazándolo con brusquedad dondequiera le
salga al encuentro. A tales hombres se los tilda de orgullosos e
inaccesibles, mas dado que ya no se hallan atados al mundo por deberes
de acción, esto no tiene mayor gravedad. Ellos saben sobrellevar con
entereza la animadversión de la muchedumbre.`

names[45] = `Ts’ui / La Reunión (La Recolección)`

texts[45] = `arriba Tui, Lo Sereno, el lago

abajo K’un, Lo Receptivo, la Tierra

De acuerdo con su forma y significado el signo tiene afinidad con el
signo Pi, La Solidaridad (N^(o) 8). Allí vemos el agua sobre la tierra,
aquí es el lago que está sobre la tierra. El lago es el punto de reunión
de las aguas; de ahí que la idea de reunión se exprese en este signo de
un modo más acentuado aún que en aquél. La misma idea fundamental surge
por otra parte del hecho de que aquí dos trazos fuertes, en cuarto y
quinto puesto, sean los que generan la reunión, mientras que allí un
solo trazo, en el quinto puesto, aparece en medio de los demás trazos
débiles.

EL DICTAMEN

La Reunión. Éxito.

El rey se acerca a su templo.

Es propicio ver al gran hombre.

Esto trae éxito. Es propicia la perseverancia.

Ofrendar grandes sacrificios engendra ventura.

Es propicio emprender algo.

La reunión que forman los hombres en sociedades mayores es ora natural,
como sucede en el seno de la familia, ora artificial, como ocurre en el
Estado. La familia se reúne en torno del padre como jefe. La continuidad
de esta reunión tiene efecto en razón de las ofrendas a los antepasados,
celebraciones durante las cuales se reúne todo el clan. En virtud de un
acto de piadoso recogimiento los antepasados se concentran en el
espíritu de los deudos, para no dispersarse y disolverse.

Donde es cuestión de reunir a los hombres, se requieren las fuerzas
religiosas. Pero también ha de existir una cabeza humana como centro de
la reunión. Para poder reunir a otros, ese centro de la reunión debe
primero concentrarse en sí mismo. Sólo mediante una concentrada fuerza
moral es posible unificar al mundo. En tal caso, grandes épocas de
unificación como ésta dejarán también el legado de grandes obras. Es
éste el sentido de los grandes sacrificios ofrendados. Por cierto
también en el terreno mundano las épocas de reunión exigen grandes
obras.

LA IMAGEN

El lago está por sobre la tierra:

la imagen de la reunión.

Así el noble renueva sus armas

para afrontar lo imprevisto.

Cuando el agua se reúne en el lago elevándose por sobre la tierra,
existe la amenaza de un desbordamiento. Hay que tomar medidas de
precaución contra ello. Así también donde se juntan hombres en gran
número surgen fácilmente querellas; donde se juntan bienes se produce
fácilmente un robo. Por eso es preciso, en épocas de reunión, armarse a
tiempo, con el fin de defenderse de lo inesperado. La aflicción terrenal
se presenta en la mayoría de los casos a causa de acontecimientos
inesperados para los que uno no está preparado. Si uno se halla
preparado y en guardia, la aflicción puede evitarse.

LAS DIFERENTES LÍNEAS

Al comienzo un seis significa:

Si eres veraz, mas no hasta el fin,

habrá ya confusión, ya reunión.

Si llamas, después de un solo apretón podrás volver a reír.

No lamentes nada. Acudir carece de tacha.

La situación es tal que uno participa del deseo de reunirse en torno de
un conductor hacia el cual se levantan las miradas. Pero uno se halla en
compañía numerosa y permite que ésta influya en él y así se producen
vacilaciones en la decisión. De este modo no se encuentra un centro
firme para la reunión. Pero si uno manifiesta, expresamente, esta
emergencia y clama por ayuda, bastará un gesto del conductor para
subsanar cualquier emergencia. Por lo tanto es necesario no dejarse
inducir a error. Adherir a aquel conductor es, sin más, lo correcto.

Seis en el segundo puesto significa:

Dejarse llevar trae ventura y permanece sin tacha.

Si uno es veraz,

es también propicio brindar una pequeña ofrenda.

En épocas de reunión no debe uno elegir arbitrariamente su camino. Están
obrando fuerzas secretas que conducen a la unión a los hombres que
armonizan entre sí. Es menester abandonarse a esta atracción, pues así
no se cometerá ningún error. Donde existen relaciones interiores no
hacen falta grandes preparativos ni formalidades. Hay sin más una mutua
comprensión, como cuando la divinidad acepta graciosamente aun una
pequeña ofrenda, si ésta proviene del corazón.

Seis en el tercer puesto significa:

Reunión entre suspiros. Nada que sea propicio.

Acudir carece de tacha. Pequeña humillación.

Uno siente a menudo una necesidad de adhesión, pero ya todos los demás
que lo rodean se han reunido entre sí, en círculo cerrado, y uno queda
aislado. La situación toda, tal como se presenta, es insostenible. Es
cuestión entonces de orientarse hacia el progreso, de adherirse
decididamente a un hombre que se halla más próximo al centro de la
reunión para que lo introduzca a uno en el círculo cerrado. Esto no será
un error aun cuando, como individuo marginado, ocupara uno por lo tanto
una posición un tanto humillante.

Nueve en el cuarto puesto significa:

¡Gran ventura! Ningún defecto.

Queda señalado aquí un nombre que, en nombre de su soberano, reúne a la
gente en torno de él. Puesto que no ambiciona ventajas particulares para
sí, sino que trabaja desinteresadamente a favor de la unidad general, su
labor se ve coronada por el éxito y todo se encamina hacia el bien.

Nueve en el quinto puesto significa:

Si al reunir ocupa uno su posición,

ello no acarrea ningún defecto.

Si algunos no adhieren todavía de verdad,

se requiere una elevada y constante perseverancia,

pues así se desvanece el arrepentimiento.

Cuando los hombres se reúnen espontáneamente alrededor de alguien, y tal
cosa le acontece a uno sin que lo busque, sólo podrá ser para bien. Se
adquiere así una cierta influencia que podrá resultar sumamente útil.
Pero con ello naturalmente se da también la posibilidad de que se reúnan
alrededor de uno personas que no se allegan movidos por un sentimiento
de confianza interior, sino únicamente a causa de la influyente posición
en que uno se halla. Esto es ciertamente lamentable. Frente a tales
gentes no hay más remedio que conquistar su confianza mediante una
incrementada e invariable constancia y lealtad al deber. Así la secreta
desconfianza se supera poco a poco y se elimina todo motivo de
arrepentimiento.

Al tope un seis significa:

Quejumbre y suspiros, torrentes de lágrimas.

Ningún defecto.

Puede suceder que uno bien quisiera adherir, pero los otros desconocen
sus buenas intenciones. Luego uno se entristece y se queja. Pero éste es
el camino que corresponde. Pues así puede suceder que el otro entre en
razón y uno, a pesar de todo, encuentre todavía la tan buscada y
dolorosamente extrañada posibilidad de adhesión.`

names[46] = `Sheng / La Subida (El empuje hacia arriba)`

texts[46] = `arriba K’un, Lo Receptivo, la Tierra

abajo Sun, Lo Suave, el viento, la madera

El signo de abajo, Sun, tiene por imagen la madera, el de arriba, Kun,
significa la tierra. Se asocia con ello la idea de que la madera va
creciendo hacia arriba dentro de la tierra. Esta “subida”,
contrariamente al “progreso” (N^(o) 35), implica un esfuerzo, así como
la planta requiere energía para elevarse a través de la tierra. Por eso
este signo, aun cuando asociado al éxito, se vincula con el esfuerzo de
la voluntad. El “progreso” muestra una mayor expansión, la “subida” una
mayor ascensión rectilínea desde el anonimato y la condición inferior
hacia el poder y la influencia.

EL DICTAMEN

La subida tiene elevado éxito.

Hay que ver al gran hombre.

¡No temas!

La partida hacia el sur trae ventura.

La ascensión de los elementos aptos no tropieza con ningún obstáculo;
por eso se ve acompañada de un gran éxito. La modalidad que posibilita
la ascensión no es violenta, sino modesta y dócil, pero como uno es
apoyado por el favor de los tiempos, avanza. Hay que movilizarse e ir en
busca de las personas que deciden. Esto no debe infundir temores, pues
no fallará el éxito. Sólo que es necesario poner manos a la obra; pues
la actividad (es este el significado del sur) aporta ventura.

LA IMAGEN

En medio de la tierra crece la madera:

La imagen de la subida.

Así el noble, con gran dedicación, acumula lo pequeño

para lograr lo elevado y lo grande.

La madera en la tierra crece sin prisa y sin pausa hacia la altura,
doblándose dócilmente para eludir los obstáculos. Así el noble es
abnegado en su carácter y no descansa jamás en su progreso.

LAS DIFERENTES LÍNEAS

Al comienzo un seis significa:

La subida que encuentra confianza trae gran ventura.

Se presenta aquí la posición inicial del ascenso. Así como la madera
extrae la energía para su ascensión de la raíz que de por sí se halla
muy abajo, también la energía para elevarse procede de esta posición. Es
baja y desconocida. Pero existe un parentesco íntimo esencial con los
que arriba gobiernan, y esta comunión le procura a uno la confianza que
se necesita para llegar a realizar algo.

Nueve en el segundo puesto significa:

Cuando uno es veraz,

es también propicio ofrendar un pequeño sacrificio.

Ningún defecto.

Se presupone aquí la existencia de un hombre fuerte. Es cierto que no
armoniza con su medio ambiente, por cuanto es demasiado rudo y da muy
poca importancia a las formas. Pero es interiormente sincero y por eso
los otros vienen a su encuentro, y su carencia en cuanto a las
formalidades externas no causa ningún daño. La sinceridad es aquí una
emanación de cualidades sólidas, mientras que referida al trazo
correspondiente del signo anterior es efecto de una humildad interior.

Nueve en el tercer puesto significa:

Uno asciende entrando en una ciudad vacía.

Aquí desaparecen los impedimentos con que el avance se topa en otros
casos. Se va adelante con notable facilidad. Sin preocupación sigue uno
por esta vía a fin de aprovechar el éxito. Contemplado exteriormente
todo se presenta como si estuviera en perfecto orden. Sin embargo, no
encontramos ningún agregado verbal que prometiera ventura. Hay que
preguntarse cuánto tiempo durará semejante éxito sin freno. Pero no es
cuestión de abandonarse a tales escrúpulos, que sólo inhibirían la
energía; más bien es preciso beneficiarse rápidamente con los favores
del momento.

Seis en el cuarto puesto significa:

El rey lo ofrenda al monte Ch’i. Ventura.

Ningún defecto.

El monte Ch’i está situado en China occidental, en la tierra de donde es
oriundo el rey Wen, de cuyo hijo, el duque de Chou, provienen las
palabras que se adjuntan a las líneas individuales. Es esta una
rememoración de las épocas de encumbramiento de la dinastía Chou. En
aquel entonces los grandes asistentes eran presentados por el rey Wen al
dios de la montaña patria, y ellos adquirían su sitio junto al soberano
en los recintos de los antepasados. Se señala aquí una etapa en que la
subida llega a su meta. Uno adquiere fama ante hombres y dioses y es
aceptado en el círculo de los hombres que construyen la vida de la
nación en lo espiritual, obteniendo así una significación perenne y
supratemporal.

Seis en el quinto puesto significa:

La perseverancia trae ventura. Uno asciende sobre gradas.

Al avanzar cada vez más, es importante que uno no se embriague con el
éxito. Precisamente cuando se tiene gran éxito hay que permanecer
constantemente sereno, no se debe pretender pasar por alto ningún
escalón; antes bien, es necesario avanzar lentamente, como vacilante,
paso a paso. Únicamente un progreso así, tranquilo y constante, en el
que nada se hace precipitadamente, conduce a la meta.

Al tope un seis significa:

Ascender a oscuras.

Es propicio ser inconmoviblemente perseverante.

El que sube a ciegas está como hechizado en su fuero íntimo. Únicamente
conoce el progreso, no la retirada. Pero así uno se agota. Importa, en
un caso semejante, pensar incesantemente en que es necesario ser y
mantenerse escrupuloso y consecuente. Sólo así se libera uno de los
impulsos ciegos que invariablemente acarrean el mal.`

names[47] = `K’un / La Desazón (La Opresión) (El Agotamiento)`

texts[47] = `arriba Tui, Lo Sereno, el lago

abajo K’an, Lo Abismal, el agua

Arriba está el lago, debajo del mismo el agua. El lago está vacío y
agotado. También de otro modo surge la idea del agotamiento: arriba un
trazo oscuro que debajo de sí retiene a dos trazos luminosos; abajo se
ve un trazo luminoso enclavado entre dos oscuros. El signo de arriba
forma parte del principio luminoso. Así por doquier los nobles se ven
oprimidos y mantenidos bajo restricciones por los seres vulgares.

EL DICTAMEN

La desazón. Logro. Perseverancia.

El gran hombre obra ventura. Ningún defecto.

Si uno tiene algo que decir, no se le cree.

Épocas de necesidad son lo contrario del éxito. Pero pueden conducir al
éxito si le tocan al hombre adecuado. Cuando un hombre fuerte cae en
necesidad, permanece sereno pese a todo peligro, y esta serenidad es el
fundamento de éxitos ulteriores; es la constancia, que es más fuerte que
el destino. Ciertamente no tendrá éxito quien interiormente se deje
quebrar por el agotamiento. Pero en aquél a quien la necesidad sólo
doblega, ésta engendra una fuerza de reacción que con el tiempo
seguramente habrá de manifestarse. Sin embargo, ningún hombre vulgar es
capaz de eso. Únicamente el hombre grande obra ventura y permanece sin
mácula. Es cierto que, por lo pronto, le queda vedado ejercer influencia
hacia afuera, ya que sus palabras no tienen efecto alguno. De ahí que,
en épocas de necesidad, sea cuestión de permanecer interiormente
vigoroso y hacer poco uso de las palabras.

LA IMAGEN

En el lago no hay agua: la imagen del agotamiento.

Así el noble empeña su vida

con el fin de seguir su voluntad.

Cuando el agua del lago se ha escurrido hacia abajo, éste tiene que
secarse, agotarse. Es su destino. Es también la imagen de designios
adversos en la vida humana. En tales épocas no se puede hacer otra cosa
más que aceptar el destino y permanecer leal a sí mismo. Está en juego
el estrato más profundo de nuestro ser propiamente dicho, pues
únicamente este estrato es superior a todo destino externo.

LAS DIFERENTES LÍNEAS

Al comienzo un seis significa:

Uno está sentado en desazón bajo un árbol seco

y viene a parar a un tenebroso valle.

Durante tres años uno no ve nada.

Cuando a alguien lo acosa la necesidad es ante todo importante ser
fuerte y superar la adversidad interiormente. Pues si uno es débil la
necesidad lo vence. En lugar de seguir andando, se queda uno sentado
bajo un árbol seco y se precipita más y más en las tinieblas y la
melancolía. Así la situación sólo se torna aún más desesperanzada. Esta
actitud es consecuencia de un enceguecimiento interior que debe
superarse a toda costa.

Nueve en el segundo puesto significa:

Uno se siente desazonado junto al vino y los víveres.

Acaba de llegar el hombre de las rodilleras escarlatas.

Es propicio ofrendar sacrificios.

Partir trae desventura.

Ningún defecto.

En este caso la desazón en que uno se encuentra es de índole interior.
Exteriormente todo va bien, uno tiene qué comer y beber, pero se siente
agotado por las trivialidades de la vida, de las que no parece haber
escapatoria. Pero desde arriba llega una ayuda. Un príncipe —en la
antigua China los príncipes llevaban rodilleras de color escarlata— ha
emprendido la búsqueda de ayudantes capaces. Aún quedan, sin embargo,
obstáculos que hay que superar. Por eso es importante enfrentarse con
estos obstáculos en lo invisible mediante sacrificios y oración. Partir
sin estar preparado para ello conduciría a la desgracia, a pesar de que
moralmente no sería incorrecto. En este caso debe superarse una
situación adversa con paciencia interior.

Seis en el tercer puesto significa:

Uno se deja acosar por rocas

y se apoya en espinas y cardos.

Entra en su casa y no ve a su mujer. ¡Desventura!

Aparece aquí un hombre inquieto e indeciso en épocas de adversidad. Su
primer impulso es avanzar; entonces tropieza con obstáculos que, por
cierto, implican la desazón únicamente si se arremete contra ellos de un
modo irreflexivo. Uno da con la cabeza contra un muro pretendiendo
atravesarlo, y en consecuencia se siente abrumado por el muro. Luego se
apoya en cosas que no brindan sostén en sí mismas y sólo ofrecen riesgos
para el que se apoye en ellas. En consecuencia uno se vuelve, indeciso,
y se retira hacia su casa, mas sólo para descubrir con renovado
desengaño que no está allí su mujer.

Kung Tse dice al respecto: “Cuando uno se deja oprimir por algo que no
debiera oprimirlo, su nombre sin duda sufrirá vergüenza. Cuando se apoya
en cosas en que uno no puede apoyarse, su vida sin duda caerá en
peligro. A quien se halla ya humillado y en peligro, se le acerca la
hora de su muerte; ¡cómo entonces podrá ver todavía a su mujer!”

Nueve en el cuarto puesto significa:

Él llega muy quedo, oprimido en áureo carruaje.

Humillación, pero se llega a un fin.

Un hombre próspero ve la necesidad de los de abajo y por cierto mucho le
complacería ayudar. Pero no interviene con rapidez y energía donde es
necesario, sino que aborda el asunto con vacilación y mesura. Entonces
topa con impedimentos. Personas poderosas y ricas de entre sus conocidos
lo atraen hacia sus círculos. Se ve obligado a acceder y no puede
sustraerse a ellos. Por lo tanto se halla en una situación muy
embarazosa. Pero la emergencia es pasajera. La fuerza primitiva de la
naturaleza repara la falta cometida y se alcanza la meta.

Nueve en el quinto puesto significa:

Se le cortan la nariz y los pies.

Uno se ve acosado por el de las rodilleras purpúreas.

Quedamente llega la alegría.

Es propicio ofrendar sacrificios y dádivas.

Alguien que se toma a pecho el bienestar de los hombres se ve oprimido
desde arriba y desde abajo (éste es el sentido de la nariz y los pies
amputados). No se encuentra ayuda entre los hombres cuyo deber sería
cooperar en la obra de salvación (los ministros llevaban rodilleras
purpúreas). Pero las cosas poco a poco van evolucionando hacia su
mejoría. Hasta que ésta se produzca es preciso acudir a Dios, en gran
recogimiento interior, y orar y sacrificar por el bien de la totalidad.

Al tope un seis significa:

Está oprimido por lianas.

Se mueve inseguro, y habla diciendo: “El moverse trae arrepentimiento.”

Si uno siente por eso arrepentimiento y se moviliza, tendrá ventura.

Uno se siente agobiado por lazos fáciles de cortar. La opresión se
aproxima a su fin. Pero todavía hay indecisión. Todavía se siente la
influencia del estado anterior y se piensa que si uno se mueve tendrá
que arrepentirse. Pero no bien llega a comprender la situación y deja de
lado esta actitud mental, tomando una vigorosa decisión logra dominar
esa desazón.`

names[48] = `Ching / El Pozo de Agua`

texts[48] = `arriba K’an, Lo Abismal, el agua

abajo Sun, Lo Suave, el viento, la madera

Abajo está la madera, arriba el agua. La madera desciende al interior de
la tierra a fin de elevar el agua. Es la imagen de un pozo de palanca,
de la antigüedad china. La madera no hace referencia a los cubos que en
la antigüedad eran de barro cocido, sino a la vara de madera mediante
cuyos movimientos se extraía el agua del pozo. La imagen alude asimismo
al mundo vegetal que en sus arterias eleva el agua de la tierra. El pozo
del que se extrae el agua contiene además la idea de un inagotable don
de alimento.

EL DICTAMEN

El Pozo.

Puede cambiarse de ciudad,

mas no puede cambiarse de pozo.

Éste no disminuye y no aumenta.

Ellos vienen y van y recogen del pozo.

Cuando casi se ha alcanzado el agua del pozo

pero todavía no se llegó abajo con la cuerda

o se rompe el cántaro, eso trae desventura.

Las ciudades capitales eran a veces trasladadas en la antigua China, en
parte por motivos de ubicación, en parte al producirse los cambios de
dinastía. El estilo de edificación se modificaba en el curso de los
siglos, pero la forma del pozo sigue siendo la misma desde tiempos
antiquísimos hasta nuestros días. Así el pozo es un símbolo de la
organización social de la humanidad en cuanto a sus necesidades vitales
primarias, e independiente de todas las formaciones políticas. Las
formaciones políticas, las naciones, cambian, pero la vida de los
hombres con sus exigencias sigue siendo eternamente la misma. Esto no
puede modificarse. Asimismo, esa vida es inagotable. No disminuye ni
aumenta y está ahí para todos. Las generaciones vienen y se van y todas
ellas disfrutan de la vida en su inagotable plenitud.

Sin embargo, para una buena organización estatal o social de los hombres
hacen falta dos cosas. Es necesario descender hasta los fundamentos de
la vida. Toda superficialidad en el ordenamiento de la vida, que deje
insatisfechas las más hondas necesidades vitales, es tan imperfecta que
no difiere de un estado en el cual ni siquiera se hubiese hecho algún
intento de ordenamiento. Asimismo, acarrea males una negligencia a causa
de la cual se rompe el cántaro. Cuando la protección militar de un
Estado, por ejemplo, se exagera al punto de provocar guerras por las que
se ve destruido el poderío del Estado, esto equivale a la rotura del
cántaro. También en lo relativo al hombre individual debe tomarse en
consideración este signo. Por diversas que sean las inclinaciones y las
formaciones de los hombres, la naturaleza humana en sus fundamentos es
la misma en todos los casos. Y cada cual puede proveerse durante su
formación, recurriendo a la fuente inagotable de la naturaleza divina de
la esencia humana. Pero también al respecto existe la amenaza de dos
riesgos: en primer lugar, que durante su formación uno no penetre hasta
las verdaderas raíces de lo humano y más bien quede atascado en medio de
las convenciones —semejante semicultura es tan mala como la incultura—,
o bien que súbitamente uno claudique y descuide la formación de su ser.

LA IMAGEN

Sobre la madera está el agua: la imagen del pozo.

Así el noble alienta al pueblo durante el trabajo

y lo exhorta a ayudarse mutuamente.

Abajo está el signo Sun, madera, y encima el signo K’an, agua. La madera
succiona el agua hacia arriba. Así como la madera en cuanto organismo
imita la actividad del pozo que redunda en beneficio de las diferentes
partes de la planta, ordena el noble la sociedad humana, de modo que a
la manera de un organismo vegetal haya una mutua interpenetración para
bien del todo.

LAS DIFERENTES LÍNEAS

Al comienzo un seis significa:

El limo del pozo no se bebe.

A un pozo viejo no acuden animales.

Cuando alguien deambula por bajíos pantanosos, su vida se hunde en el
lodo. Una persona así pierde su importancia para la humanidad. A quien
se abandona a sí mismo, tampoco acuden los demás. Finalmente ya nadie se
ocupa de él.

Nueve en el segundo puesto significa:

Junto al agujero del pozo uno dispara a los peces.

El cántaro está roto y pierde.

El agua en sí misma es clara. Pero no se la utiliza. Así sólo peces
moran en el pozo. Y el que acude sólo llega para recoger peces; sin
embargo, el cántaro está roto, de modo que uno no puede conservar en él
los peces.

Se describe una situación en la que alguien, en principio, tendría
buenas dotes; pero éstas se descuidan. Nadie se preocupa por él ni lo
tiene en cuenta, por consiguiente él decae interiormente. Cultiva el
trato con gente vulgar y ya no podrá realizar nada de valor.

Nueve en el tercer puesto significa:

El pozo se ha limpiado pero no se bebe de él.

Éste es el pesar de mi corazón;

pues se podría tomar de él.

Si el rey fuese preclaro

se disfrutaría conjuntamente de la dicha.

En este caso existe un hombre capaz. Es comparable a un pozo que se ha
limpiado y cuyas aguas se podrían beber. Pero no es utilizado. Esto
causa aflicción a la gente que lo conoce. Reina el deseo de que el
príncipe se entere de ello, pues sería una suerte para todos los
afectados.

Seis en el cuarto puesto significa:

El pozo es revestido; ningún defecto.

Cuando el pozo se revoca, no puede utilizárselo por cierto en ese
ínterin, pero el trabajo no se hace en vano; gracias al revestimiento el
agua permanece clara. Así también en la vida hay épocas en que uno debe
poner orden en su propia persona. Si bien durante esta época nada puede
hacerse por los demás, resulta sin embargo valiosa, puesto que mediante
el perfeccionamiento interno incrementa uno su energía y sus facultades,
y de este modo podrá luego realizar mucho más.

Nueve en el quinto puesto significa:

En el pozo hay una fuente clara y fresca

de la que se puede beber

He aquí un buen pozo que en su fondo guarda una fuente de agua viva. Un
hombre que posea semejantes virtudes ha nacido para salvador y conductor
de los hombres. Él posee el agua de la vida. Sin embargo falta aquí el
signo: ventura. En el caso del pozo todo depende de que el agua sea
extraída. La mejor de las aguas sólo existe como posibilidad de
refrescar a los hombres, mientras no sea llevada hacia arriba. Así
también en el caso de los conductores de la humanidad todo depende de
que se beba de su fuente, de que sus palabras sean transferidas a la
vida.

Al tope un seis significa:

Extraen del pozo sin impedimento.

Se puede confiar en él. ¡Elevada ventura!

El pozo está ahí para todos. Ninguna prohibición detiene a los que sacan
agua de él. Por numerosos que sean los que acuden, encontrarán lo que
necesitan, pues se puede confiar en este pozo. Tiene una fuente y ésta
no se seca; de ahí que aporte gran ventura para todo el país: así es el
hombre realmente grande, inagotablemente rico en cuanto a su acervo
interior. Cuantos más sean los hombres que se nutren de él, tanto más
grande se tornará su riqueza.`

names[49] = `Ko / La Revolución (La Muda)`

texts[49] = `arriba Tui, Lo Sereno, el lago

abajo Li, Lo Adherente, el fuego

El signo se refiere originalmente a una piel animal que, en el
transcurso del año, se modifica en función de la muda. De ahí la palabra
es transferida a las mudas que tienen lugar en la vida estatal, a las
grandes revoluciones que se producen por cambios de gobierno. Las dos
figuras de que se compone el signo son, como en el caso de K’uei, “El
antagonismo” (N^(o) 38), las dos hijas menores Li y Tui. Pero mientras
que allí la mayor de las dos se sitúa arriba, causando así
fundamentalmente tan sólo un antagonismo de tendencias, en este caso se
sitúa arriba la menor, y los efectos son encontrados: las fuerzas se
combaten entre sí como el fuego y el agua (lago), tratando cada una de
ellas de destruir a la otra. De ahí la idea de revolución.

EL DICTAMEN

La Revolución.

En tu propio día encontrarás fe.

Elevado éxito, propicio por la perseverancia.

Se desvanece el arrepentimiento.

Las revoluciones estatales son algo sumamente grave. Hay que recurrir a
ellas únicamente en caso de extrema emergencia, cuando ya no queda otra
salida. No cualquiera está llamado a ejecutarlas, sino únicamente aquel
que goza de la confianza del pueblo, y también éste sólo cuando haya
llegado la hora. Debe procederse al respecto de un modo correcto,
causando alegría en el pueblo e impidiendo, mediante el esclarecimiento,
los excesos. Por otra parte es menester que uno esté libre por completo
de objetivos egoístas y realmente subsane la miseria del pueblo.
Únicamente así no habrá nada de que arrepentirse.

Los tiempos cambian y con ellos las exigencias. Así cambian las
estaciones en el curso del año. Así también en el año cósmico hay
primavera y otoño de pueblos y naciones, que requieren transformaciones
sociales.

LA IMAGEN

En el lago hay fuego: la imagen de la revolución.

Así ordena el noble la cronología

y clarifica las épocas.

El fuego abajo y el lago arriba se combaten y se destruyen
recíprocamente. Así también en el transcurso del año tiene lugar una
lucha de la fuerza luminosa con la oscura, que repercute en las
revoluciones de las estaciones del año. El hombre se hace dueño de los
cambios de la naturaleza cuando reconoce su regularidad y distribuye en
forma correspondiente el curso del tiempo. Con ello se introduce el
orden y la claridad en el cambio, aparentemente caótico, de las
temporadas y uno puede tomar anticipadamente las previsiones necesarias,
de acuerdo con las exigencias de las diferentes épocas.

LAS DIFERENTES LÍNEAS

Al comienzo un nueve significa:

Uno es envuelto en la piel de una vaca amarilla.

Los cambios sólo deben emprenderse cuando ya no queda otra posibilidad.
De ahí que, por lo pronto, sea necesaria una extrema reserva. Uno ha de
afirmarse completamente en su interior, moderarse —amarillo es el color
del centro, la vaca es símbolo de la docilidad— y no emprender nada por
el momento, pues toda arremetida prematura tendrá malas consecuencias.

Seis en el segundo puesto significa:

Llegado el propio día, se puede revolucionar.

Partir trae ventura. Ningún defecto.

Cuando ya se ha ensayado todo con el fin de reformar las circunstancias,
sin obtener éxito, surge la necesidad de una revolución. Empero,
semejante cambio, de profundas consecuencias, debe ser debidamente
preparado. Es preciso que haya un hombre que posea las aptitudes
necesarias y que goce de la confianza pública. Hacia un hombre tal es
dable orientarse en este caso. Esto traerá ventura y no será un error.
Se trata por de pronto de la posición interior que ha de adoptarse
frente a lo nuevo, lo que está por llegar. Hay que salir, por así
decirlo, a su encuentro. Únicamente de este modo se prepara su
advenimiento.

Nueve en el tercer puesto significa:

Partir trae desventura. La perseverancia acarrea peligro.

Cuando la palabra acerca de la revolución se haya proferido

tres veces, será bueno dirigirse a él y se hallará fe.

Cuando se requiere el cambio, hay dos errores que deben evitarse. Uno
consiste en proceder con excesiva celeridad y desconsideración, que
atrae la desventura. El otro es una vacilación superconservadora, que
también resulta peligrosa. No se debe prestar oído a toda voz que
reclama el cambio de lo existente. Pero tampoco deben cerrarse los oídos
a quejas reiteradas y bien fundadas. Cuando por tres veces le llega a
uno el clamor por el cambio, y se ha reflexionado lo suficiente, deberá
prestársele fe y hacérsele caso; entonces también uno encontrará fe y
podrá lograr algo.

Nueve en el cuarto puesto significa:

Se desvanece el arrepentimiento. Se halla fe.

Cambiar el orden estatal trae ventura.

Los cambios que conmueven los cimientos requieren la necesaria
autoridad. Debe disponerse tanto de fuerza interior de carácter, como
asimismo de una posición influyente. Lo que se emprende ha de estar en
concordancia con una verdad superior; no es lícito que surja de
motivaciones arbitrarias o mezquinas. Si se dan estas condiciones, la
empresa aportará gran ventura. Cuando una revolución no se funda en
semejante verdad interior, indefectiblemente acarreará males y no tendrá
éxito. Pues en última instancia los hombres sólo apoyan aquellas
empresas cuya justicia interior perciben instintivamente.

Nueve en el quinto puesto significa:

El gran hombre cambia como un tigre.

Aun antes de indagar el oráculo, encuentra fe.

Una piel de tigre, con sus rayas negras sobre fondo amarillo, bien
visibles, se percibe desde lejos en su nítida estructuración. Lo mismo
ocurre con las revoluciones que lleva a cabo un gran hombre: aparecen
visiblemente grandes y claras líneas directivas, comprensibles para
todos. De este modo, ni siquiera le hace falta consultar el oráculo,
pues por sí mismo el pueblo se le adhiere.

Al tope un seis significa:

El noble cambia como una pantera.

El inferior muda en la cara.

Partir trae desventura.

Permanecer en perseverancia trae ventura.

Luego de haberse resuelto los grandes problemas básicos, todavía
resultan necesarias ciertas transformaciones de detalles y ejecuciones
más precisas. Éstas pueden compararse con las manchas nítidas asimismo,
pero más pequeñas, de la piel de pantera. En consecuencia también entre
los de baja condición se realiza un cambio. También ellos mudan de
acuerdo con el nuevo orden, aunque por cierto esta muda no cala muy
hondo. En verdad tampoco era de esperar tal cosa. Hay que conformarse
con lo que es posible. Si uno quisiera ir demasiado lejos y pretendiera
logros excesivos, provocaría inquietud y desventura. Pues aquello a que
debe aspirarse en virtud de una gran revolución, son condiciones claras
y sólidas que confieran tranquilidad general con lo que por el momento
es posible.`

names[50] = `Ting / El Caldero`

texts[50] = `arriba Li, Lo Adherente, el fuego

abajo Sun, Lo Suave, el viento, la madera

Todo el signo ofrece la imagen de un caldero: abajo las patas, luego el
vientre, luego las orejas, o sea las asas, y arriba las argollas para
portarlo. La imagen del caldero sugiere al mismo tiempo la idea de la
nutrición. El caldero, fundido en bronce, era el utensilio que en el
templo consagrado a los antepasados y durante los festines celebratorios
contenía los alimentos cocidos. El amo de casa los extraía del mismo y
los distribuía en las escudillas de los huéspedes.

También el pozo implica como idea secundaria dispensar alimento, pero
ahí se trata de un alimento destinado más bien al pueblo. El caldero en
cuanto utensilio de una cultura refinada, sugiere el cuidado y la
alimentación de los hombres capaces, un cuidado que redundaba en bien
del gobierno estatal (cf. los cuatro signos de la alimentación, números
5, 27, 48, 50).

Este signo y el signo “Pozo” son los dos únicos en el Libro de las
Mutaciones que representan objetos artificiales concretos. Aunque
también en estos casos la idea tiene su faz abstracta. Abajo Sun es la
madera y el viento, arriba Li es la llama; de modo que representa la
llama avivada por la madera y el viento, que, por su parte, también
sugiere la idea del apronte de los alimentos.

EL DICTAMEN

El caldero. Elevada ventura. Éxito.

Mientras que el pozo trata del fundamento de lo social, que es como el
agua que sirve de alimento a la madera, en este caso se alude a la
superestructura cultural de la sociedad. Aquí es la madera la que sirve
de alimento a la llama, a lo espiritual. Todo lo visible debe
intensificarse y continuarse hasta penetrar en lo invisible. Así obtiene
la debida consagración y la debida claridad, y arraiga firmemente en la
trama de los nexos universales.

De este modo se exhibe aquí la cultura, tal como alcanza su culminación
en la religión. El caldero sirve para los sacrificios ofrecidos a Dios.
Lo más elevado de lo terrenal ha de ser sacrificado a lo divino. Pero lo
verdaderamente divino no se presenta como separado de lo humano. La más
alta revelación de Dios se encuentra en los profetas y los santos. La
devoción que se brinda a éstos es la verdadera devoción hacia Dios. La
voluntad de Dios, que se manifiesta por intermedio de ellos, debe ser
acatada humildemente, y entonces surgirá la iluminación interior y la
verdadera comprensión del mundo que conduce a una gran ventura y al
éxito.

LA IMAGEN

Sobre la madera hay fuego: la imagen del caldero.

Así el noble, rectificando su posición, afirma el destino.

El leño es el destino del fuego; mientras subsiste abajo, el fuego
arderá arriba. Esto es lo que ocurre con la vida humana. También en el
hombre hay un destino que presta fuerzas a su vida. Cuando se logra
asignar a la vida y al destino el sitio correcto, se fortifica el
destino, pues así la vida entra en armonía inmediata con el destino. Se
encuentran en estas palabras alusiones al cultivo de la vida tal como la
transmite por tradición oral la doctrina secreta de la práctica del yoga
chino.

LAS DIFERENTES LÍNEAS

Al comienzo un seis significa:

Un caldero con las patas tumbadas.

Propicio para eliminar lo estancado.

Uno toma una concubina por amor a su hijo.

Ningún defecto.

Si uno vuelca el caldero antes de ponerlo en uso, esto no tiene nada de
malo. Al contrario, de este modo salen los desechos. Una concubina es,
de por sí, de baja condición, mas como tiene un hijo, logra honores.

Estas dos parábolas expresan la idea de que, en épocas de alta cultura
como las indicadas por el signo, todo el que tiene buena voluntad puede
de algún modo alcanzar su meta. Por baja que sea la condición de uno,
con tal de que esté dispuesto a purificarse, será aceptado; alcanzará
una situación en la cual podrá mostrarse fructífero en sus
realizaciones, encontrando reconocimiento por ello.

Nueve en el segundo puesto significa:

En el caldero hay alimento.

Mis compañeros sienten envidia,

pero nada pueden contra mí.

¡Ventura!

En épocas de elevada cultura todo depende de que realmente uno realice
algo. Si uno no confía sino en realizaciones reales, acaso llegue a
tropezar con la envidia y el disfavor, pero esto no es peligroso. Cuanto
más se limite uno a sus propias realizaciones positivas, tanto menos
podrán afectarlo los envidiosos.

Nueve en el tercer puesto significa:

El asa del caldero está alterada.

Uno está impedido en su modo de vivir.

La grasa del faisán no se come.

Sólo cuando se precipite la lluvia,

se agotará el arrepentimiento.

Finalmente llega la ventura.

El asa es el elemento por el cual el caldero es alzado. Si se modifica
el asa, el caldero no puede ser alzado y utilizado, y los finos
alimentos que contiene, como la grasa de faisanes, lamentablemente no
sirven a nadie de alimento.

Ésta es la caracterización de alguien que, en una época de alta cultura,
está en un lugar donde nadie lo tiene en cuenta, y así no encuentra
reconocimiento, lo cual constituye un grave freno para su actuación.
Todas sus buenas cualidades y dotes espirituales se desgastan
inútilmente. Empero, sólo es necesario cuidar de que el hombre albergue
realmente en su interior una posesión espiritual. Entonces sin duda
llegará finalmente la hora en que se desvanecerán los impedimentos y
todo marchará bien.

Como en otros casos, la caída de la lluvia simboliza aquí la
desaparición de la tensión.

Nueve en el cuarto puesto significa:

Al caldero se le rompen las patas.

La comida del príncipe se derrama y se mancilla su figura.

¡Desventura!

Tiene uno por delante una tarea grave, plena de responsabilidad, para
cuyo cumplimiento no está preparado. Como, por otra parte, uno no se
dedica a esta tarea con todas sus fuerzas, sino que mantiene trato con
gentes de baja condición, se malogra el proceso. Con ello uno mismo
atrae sobre sí oprobio y vergüenza.

Kung Tse dice al respecto: “Carácter débil y posición honrada, poco
saber y grandes planes, escasa fuerza y grave responsabilidad —rara vez
escapará a la desventura.”

Seis en el quinto puesto significa:

El caldero tiene asas amarillas, argollas áureas.

Es propicia la perseverancia.

Hay un hombre en posición gobernante, accesible y modesto en su modo de
ser. Gracias a esta actitud interior logra encontrar ayudantes fuertes y
capaces que lo complementan y le ayudan en la ejecución de su obra. Es
importante que en esta actitud, que requiere una constante abnegación
interior, no se deje uno desviar de su rumbo, sino que permanezca
firmemente en él.

Al tope un nueve significa:

El caldero tiene argollas de jade. ¡Gran ventura!

Nada que no sea propicio.

En el texto del trazo anterior se designa a las asas portadoras como
áureas, con el fin de caracterizar su solidez. Aquí se designan como de
jade. El jade se destaca por unir a la dureza un suave brillo. Desde el
punto de vista del hombre accesible a los consejos, éste es un consejo
que actúa como un fuerte estímulo. Se hace referencia a este consejo
desde el punto de vista del sabio que lo dispensa. Aparecerá suave y
purificado como el noble jade. De esta manera la obra encuentra
beneplácito a los ojos de la divinidad dispensadora de gran ventura, y
se torna grata a los hombres, por lo cual todo marchará bien.`

names[51] = `Chen / Lo Suscitativo (La Conmoción, el Trueno)`

texts[51] = `arriba Chen, Lo Suscitativo, el trueno

abajo Chen, Lo Suscitativo, el trueno

El signo Chen es el hijo mayor, quien se adueña del mando con energía y
poder. Un trazo Yang se genera por debajo de dos trazos Yin y asciende
con poderío. Es un movimiento tan vehemente que provoca terror. Aquí
sirve de imagen el trueno que irrumpe desde las entrañas de la tierra
causando temor y temblor con su conmoción.

EL DICTAMEN

La Conmoción trae éxito.

Llega la conmoción: ¡Ju, ju!

Palabras rientes: ¡Ja, ja!

La conmoción aterra a cien millas,

y él no deja caer el cucharón sacrificial, ni el cáliz.

La conmoción que se levanta desde el interior de la tierra a causa de la
manifestación de Dios, hace que el hombre sienta temor, pero este temor
ante Dios es algo bueno, pues su efecto es que luego puedan surgir el
regocijo y la alegría. Si uno ha aprendido interiormente qué es el temor
y el temblor, se siente seguro frente al espanto causado por influjos
externos. Aun cuando el trueno se enfurece al punto de aterrar a través
de cien millas a la redonda, permanece uno interiormente tan sereno y
devoto que no incurre en una interrupción el acto del sacrificio. Tan
honda seriedad interior, que hace que todos los terrores externos
reboten impotentes sobre ella, es la disposición espiritual que deben
tener los conductores de los hombres y los gobernantes.

LA IMAGEN

Trueno continuado: la imagen de la conmoción.

Así el noble, bajo temor y temblor,

rectifica su vida

y se explora a sí mismo.

Con sus sacudidas el trueno continuo ocasiona temor y temblor. Así el
noble permanece siempre en actitud de veneración ante la aparición de
Dios, pone orden en su vida y escruta su corazón indagando si acaso,
secretamente, hay algo en él que esté en contradicción con la voluntad
de Dios. De tal modo, el temor devoto es el fundamento de la verdadera
cultura de la vida.

LAS DIFERENTES LÍNEAS

Al comienzo un nueve significa:

Llega la conmoción: ¡Ju, ju!

Le siguen palabras rientes: ¡Ja, ja!

¡Ventura!

El temor y el temblor de la conmoción embargan a uno antes que a otros,
de modo que se siente en posición de desventaja frente a los demás. Pero
esto es sólo provisional. Una vez asumido y superado el enjuiciamiento,
llega el alivio. Y así precisamente ese mismo terror en el cual uno de
buenas a primeras tiene que sumergirse, en resumidas cuentas trae
ventura.

Seis en el segundo puesto significa:

La conmoción llega con peligro.

De cien mil maneras pierdes tus tesoros

y has de subir a las nueve colinas.

No corras ávidamente tras ellos.

Al cabo de siete días los recuperarás.

Se describe aquí una situación en la cual, a raíz de una conmoción, se
afronta un peligro y se sufren grandes pérdidas. Las circunstancias son
tales que una resistencia sería contraria a la orientación de la marcha
del tiempo, y por lo tanto no tendría éxito. Por eso, simplemente hay
que retirarse hacia regiones altas inaccesibles a los peligros que
amenazan. Las pérdidas de propiedades deben tomarse como parte del
precio que se paga y no hay que preocuparse excesivamente por ellas. Sin
que uno corra tras de su posesión, la recuperará por sí sólo una vez que
pase el lapso cuyas conmociones se la hicieron perder.

Seis en el tercer puesto significa:

Llega la conmoción y causa desconcierto.

Si uno actúa a consecuencia de la conmoción,

quedará libre de desgracia.

Existen tres formas de conmoción: la conmoción del cielo, que es el
trueno; luego la conmoción del destino, y finalmente la conmoción del
corazón.

En este caso se trata menos de una conmoción interior que de una
sacudida del destino. En tales tiempos de conmoción pierde uno muy
fácilmente la serenidad, al punto de ignorar toda posibilidad de
actuación y dejar curso libre al destino, sin decir palabra. Si a raíz
de la conmoción del destino se moviliza uno interiormente, podrá superar
sin mayores esfuerzos los golpes del destino que llegan de afuera.

Nueve en el cuarto puesto significa:

La conmoción se empantana.

El hecho de que el movimiento interior tenga éxito depende en parte
también de las circunstancias. Si éstas son tales que ni siquiera se
advierte una resistencia que pueda combatirse enérgicamente, ni ceden
las condiciones dadas como para poder lograr alguna victoria y todo
sigue siendo espeso e inerte como una ciénaga, el movimiento se
paraliza.

Seis en el quinto puesto significa:

La conmoción va y viene: peligro,

pero no se pierde nada en absoluto,

tan sólo hay negocios, cosas que hacer.

Aquí no se trata meramente de una sacudida única, sino de una conmoción
reiterada que no da tiempo para tomar aliento. No obstante, la conmoción
no acarrea pérdidas, puesto que uno tiene buen cuidado de mantenerse en
el centro del movimiento y verse así libre de la fatalidad de ser
arrojado de un lado para otro, indefenso.

Al tope un seis significa:

La conmoción trae decadencia y un angustiado mirar alrededor.

Avanzar trae desventuras.

Si aún no llega la conmoción hasta el propio cuerpo,

y sólo ha alcanzado al vecino,

entonces no hay defecto.

Los compañeros tienen de qué hablar.

La conmoción interior, cuando ha alcanzado su punto más alto lo priva a
uno de su serenidad y claridad de visión. En medio de semejante sacudida
desde luego no es posible actuar con reflexión. Lo indicado es entonces
mantenerse quieto hasta la recuperación de la necesaria tranquilidad y
claridad.

Pero sólo es posible actuar así mientras no se sufre el contagio de la
agitación, cuando ya en el ambiente pueden observarse los efectos
funestos de semejante excitación. Ahora bien, si uno se retira a tiempo
de la acción, permanecerá libre de errores y perjuicios. Pero en este
caso los compañeros que, en medio de su excitación, ya no aceptan
advertencias, sin duda se mostrarán disconformes con uno. Sin embargo,
esto no debe tomarse en consideración.`

names[52] = `Ken / El Aquietamiento (La Montaña)`

texts[52] = `arriba Ken, El Aquietamiento, la montaña

arriba Ken, El Aquietamiento, la montaña

La imagen del signo es la montaña, el hijo menor de Cielo y Tierra. Lo
masculino se halla arriba, sitio donde ambiciona estar de acuerdo con su
naturaleza; lo femenino está abajo, hacia donde conduce la orientación
de su movimiento. De este modo hay quietud, puesto que el movimiento ha
alcanzado su fin normal.

Aplicado al hombre, se señala aquí el problema que consiste en alcanzar
la quietud del corazón. Es sumamente difícil aquietar el corazón.
Mientras que el budismo aspira a la quietud mediante un desvanecimiento
paulatino de todo movimiento en el nirvana, el punto de vista del Libro
de las Mutaciones sostiene que la quietud es tan sólo un estado de
polaridad que siempre tiene por complemento el movimiento.

Tal vez las palabras de este texto contengan indicaciones para el
ejercicio del yoga.

EL DICTAMEN

Aquietamiento de su espalda,

de modo que él ya no siente su cuerpo.

Va a su patio y no ve a su gente.

Ningún defecto.

La verdadera quietud consiste en mantenerse quieto una vez llegado el
momento de mantenerse quieto, y en avanzar una vez llegado el momento de
avanzar. De esta manera quietud y movimiento están en concordancia con
los requerimientos del tiempo, y así hay luz en la vida.

El signo representa el fin y el comienzo de todo movimiento. Se menciona
la espalda, pues en la espalda se encuentran todos los cordones
nerviosos que transmiten el movimiento. Cuando uno consigue que el
movimiento de estos nervios espinales se aquiete, desaparece por así
decirlo el yo con sus inquietudes. Ahora bien, una vez que el hombre ha
logrado aquietarse así en su interior, puede dirigirse hacia el mundo
externo. Ya no verá en él la lucha y el torbellino de los seres
individuales, y será dueño de la verdadera quietud necesaria para
comprender las grandes leyes del acontecer universal y el modo de actuar
como corresponde. El que actúe partiendo de esta posición abisal no
cometerá ninguna falta.

LA IMAGEN

Montañas, una junto a otra: la imagen del aquietamiento.

Así el noble no va en sus pensamientos más allá de su situación.

El corazón piensa constantemente. Esto no puede cambiarse. Empero, los
movimientos del corazón, vale decir los pensamientos, han de limitarse a
la situación actual de la vida. Todo pensar que trasciende el momento
dado tan sólo hiere al corazón.

LAS DIFERENTES LÍNEAS

Al comienzo un seis significa:

Aquietamiento de los dedos de sus pies.

Ningún defecto.

Es propicia una constante perseverancia.

El quedarse quietos los dedos de los pies significa una forma de
detenerse aun antes de comenzar uno a moverse. El comienzo es el tiempo
en que se cometen pocas faltas. Uno se encuentra todavía en concordancia
con el estado de inocencia original. Se aprecian las cosas
intuitivamente tales como son, y todavía no influye el ensombrecimiento
causado por los intereses y la avidez. Quien se detiene al comienzo,
antes de haber abandonado la verdad, encuentra lo debido. Pero hace
falta una constante firmeza para no dejarse arrastrar —falto de voluntad
propia— por corrientes sin rumbo.

Seis en el segundo puesto significa:

Aquietamiento de sus pantorrillas.

No puede salvar a quien él sigue.

Su corazón no está contento.

La pierna no puede moverse independientemente, ya que en su movimiento
depende del movimiento del cuerpo. Cuando el cuerpo se halla en
pronunciado movimiento y la pierna súbitamente se detiene, el movimiento
del cuerpo, que continúa, provoca la caída del hombre.

Lo mismo le sucede a un hombre que se encuentra en el séquito de una
personalidad más fuerte. Se ve arrastrado. Aun cuando él se detenga en
la mala senda de la injusticia, no podrá sin embargo retener al otro,
pues su movimiento es muy fuerte. Allí donde el amo empuja hacia
adelante, su servidor no podrá salvarlo por buenas que sean sus
intenciones.

Nueve en el tercer puesto significa:

Aquietamiento de sus caderas.

Rigidez en su sacro.

Peligroso.

Se sofoca el corazón.

Se trata en este caso de una quietud forzada. El corazón, sumido en
inquietud, ha de ser dominado con violencia. Pero el fuego,
violentamente rechazado, se convierte en un humo acre que se extiende en
forma asfixiante.

Por eso no se debe proceder con violencia en los ejercicios de
meditación y concentración. Antes bien ha de desarrollarse la quietud a
partir de un estado de recogimiento interior. Cuando se pretende obtener
quietud a la fuerza, con violencia y con ayuda de una rigidez
artificial, la meditación conducirá a graves perturbaciones.

Seis en el cuarto puesto significa:

Aquietamiento de su tronco.

Ningún defecto.

El mantener quieta la espalda, tal como quedó expresado en las palabras
que acompañan este hexagrama en su totalidad, significa que uno olvida
su yo. Es este el escalón más elevado de la quietud. Aquí este grado de
quietud no se ha alcanzado todavía. Por cierto uno ya está en
condiciones de aquietar su yo, junto con los pensamientos y las
emociones. Sin embargo, todavía no se libera totalmente del yo. De todos
modos, el aquietamiento del corazón cumple una importante función que,
con el tiempo, conduce a la completa eliminación de los impulsos
egoístas. Aun cuando uno todavía no se haya liberado de todos los
peligros de la duda y la inquietud, esta disposición de ánimo no implica
una falta, ya que está en camino hacia aquélla, otra, más elevada.

Seis en el quinto puesto significa:

Aquietamiento de las mandíbulas.

Las palabras guardan orden.

Desaparece el arrepentimiento.

En una situación peligrosa, sobre todo no estando uno a la altura de esa
situación, es muy frecuente que se recurra a palabras y bromas
impertinentes. Pero cuando se habla sin cautela, se cae fácilmente en
situaciones que obligarán más tarde a arrepentirse en más de un sentido.
Empero, cuando al hablar se guarda reserva, las palabras adquieren una
modalidad cada vez más sólida, y todo motivo de arrepentimiento
desaparece.

Al tope un nueve significa:

Aquietamiento magnánimo

¡Ventura!

Aquí se da la cabal consumación del esfuerzo por conquistar la quietud.
Se ha alcanzado la quietud, no en pormenores y de un modo mezquinamente
delimitado; es más bien una estoica resignación general en cuanto al
mundo entero, lo que confiere quietud y ventura frente a todos los
aspectos en particular.`

names[53] = `Chien / La Evolución (Progreso paulatino)`

texts[53] = `arriba Sun, Lo Suave, el viento, la madera

abajo Ken, El Aquietamiento, la montaña

El signo se compone de Sun (madera, penetración) arriba, o sea afuera, y
Ken (montaña, quietud) abajo, o sea adentro. Un árbol sobre la montaña
se desarrolla lentamente, conforme a un orden dado, y en consecuencia se
halla firmemente arraigado. Surge así la idea de la evolución que avanza
paulatinamente, paso a paso. También las cualidades de las figuras lo
señalan así: adentro hay quietud, tranquilidad, que protege de actitudes
irreflexivas, y afuera penetración, que hace posible la evolución y el
progreso.

EL DICTAMEN

La Evolución. Casan a la muchacha. ¡Ventura!

Es propicia la perseverancia.

Es vacilante la evolución que conduce a que la muchacha siga al hombre a
su hogar. Es necesario cumplir las diversas formalidades antes de que se
realice la boda. Esta paulatina evolución puede transferirse también a
otras circunstancias, siempre que se trate de relaciones correctas de
cooperación, por ejemplo cuando se designa a un funcionario. En tales
casos hay que esperar que las cosas se desarrollen correctamente. Un
procedimiento precipitado no sería bueno. Lo mismo ocurre finalmente
cuando se pretende ejercer influencia sobre otros. También en este caso
se trata de una vía evolutiva correcta lograda mediante el cultivo de la
propia personalidad. Todo el influjo ejercido a la manera de los
agitadores carece de efecto duradero.

También en lo interior la evolución ha de emprender el mismo camino, si
se aspira a obtener resultados duraderos.

Lo suave, lo que se adapta, y que sin embargo al mismo tiempo penetra,
es lo externo, que debe surgir de la tranquilidad interna.

Precisamente lo paulatino de la evolución hace necesaria la constancia.
Pues únicamente la constancia logra que a pesar de todo el lento
progreso no se pierda en la arena.

LA IMAGEN

Sobre la montaña hay un árbol: la imagen de la evolución.

Así permanece el noble en digna virtud

a fin de mejorar las costumbres.

El árbol sobre la montaña es visible a lo lejos y su evolución influye
en la imagen del paisaje de toda la comarca. No emerge rápidamente hacia
arriba como las plantas de pantano, antes bien su crecimiento se produce
paulatinamente. También el efecto que se ejerce sobre los hombres tan
sólo puede ser paulatino. Ningún influjo o despertar repentino tiene
efecto persistente. Y para lograr este progreso en la opinión pública,
en las costumbres públicas, es preciso que la personalidad adquiera
gravitación e influencia. Esto se logra mediante un cuidadoso y
constante trabajo dedicado al propio desarrollo moral.

LAS DIFERENTES LÍNEAS

Al comienzo un seis significa:

La oca avanza poco a poco

en su vuelo hacia la ribera.

El joven hijo está en peligro.

Hay habladurías. Ningún defecto.

Las diferentes líneas individuales tienen todas por símbolo el vuelo
paulatino de la oca. La oca es el símbolo de la fidelidad conyugal. Se
dice de ella que luego de la muerte del cónyuge no se une con otros.

La primera línea muestra la primera estación en el vuelo de las aves
acuáticas que parten del agua hacia las alturas. Llegan a la ribera. La
situación es la de una persona joven, solitaria, que quiere comenzar a
realizarse en la vida. Como no tiene a nadie que salga a su encuentro,
sus primeros pasos son lentos y vacilantes, y se ve rodeada de peligros.
Naturalmente, la critican de múltiples maneras. Pero precisamente las
dificultades contribuyen a que no se precipite, y así logra progresar.

Seis en el segundo puesto significa:

La oca avanza poco a poco hacia la roca.

Comer y beber en paz y concordia. ¡Ventura!

La roca es un sitio seguro, junto a la ribera. La evolución ha dado un
paso más. Uno ha superado la incertidumbre inicial, encontrando una
situación segura para su vida, gracias a la cual se tiene un pasar
aceptable. Este primer éxito, que inaugura la vía de la posible
actuación efectiva, confiere al ánimo cierto regocijo, y uno avanza
tranquilizado hacia el porvenir.

Se dice de la oca que llama a sus compañeras cuando encuentra alimento;
he aquí la imagen de paz y dichosa concordia. No tiende uno a conservar
su felicidad para sí solo, sino que se muestra dispuesto a compartirla
con otros.

Nueve en el tercer puesto significa:

La oca avanza poco a poco hacia el altiplano.

El hombre parte y no regresa.

La mujer lleva un niño en su seno pero no lo da a luz.

¡Desventura!

Es propicio defenderse de los bandidos.

El seco altiplano no es bueno para la oca. Si avanza hacia allí, es que
ha extraviado su camino yendo demasiado lejos. Esto contraría la ley de
la evolución.

Lo mismo ocurre también en la vida humana. Cuando no se deja que las
cosas evolucionen tranquilamente, y prematuramente se precipita uno en
la lucha, tal conducta acarreará la desventura. Pone uno en juego su
propia vida y en consecuencia se hunde la familia. Pero esto no es
necesario en absoluto; es mera consecuencia de haber transgredido la ley
de la evolución natural. Si uno no sale por sí mismo en busca de la
lucha, sino más bien se limita a conservar vigorosamente su sitio,
rechazando ataques injustificados, todo irá bien.

Seis en el cuarto puesto significa:

La oca avanza poco a poco hacia el árbol.

Tal vez consiga una rama chata. Ningún defecto.

El árbol no es un lugar apropiado para una oca. Pero si ésta es
inteligente, encontrará una rama plana sobre la cual podrá pararse.
También en la vida se le presentan a uno a menudo, en el transcurso de
la evolución, situaciones que no le corresponden y que uno difícilmente
podrá defender sin peligro. En tal caso es necesario ser juicioso y
transigente. Así, en medio del peligro, podrá hallarse un sitio seguro
en el cual sea posible vivir.

Nueve en el quinto puesto significa:

La oca avanza poco a poco hacia la cumbre.

Durante tres años la mujer no concibe un hijo.

Finalmente, nada puede trabarla. ¡Ventura!

La cumbre es un sitio elevado. Cuando uno ocupa un puesto elevado, se
produce fácilmente el aislamiento. La persona de quien uno depende lo
desconoce: la mujer es ignorada por su marido, el funcionario por su
jefe. Esto ocurre por obra de gente falsa que se ha entrometido. Por
consiguiente, las relaciones permanecen estériles y nada se realiza.
Pero es característico de la evolución que en su curso tales
malentendidos se disipen, y que finalmente se produzca la unión a pesar
de todo.

Al tope un nueve significa:

La oca avanza poco a poco hacia las altas nubes.

Sus plumas pueden utilizarse en la danza sagrada.

¡Ventura!

Aquí la vida aparece concluida. La obra tiene perfección cabal. Su senda
avanza hacia lo alto, hacia el cielo, como el vuelo de las ocas una vez
que han abandonado del todo el suelo terrenal. Ahí vuelan entonces y
mantienen el orden de su vuelo, formando figuras trazadas por rigurosas
líneas.

Y cuando caen sus plumas desde lo alto, éstas pueden ser utilizadas como
adorno durante las pantomimas de las danzas sagradas ofrecidas en el
templo.

Así la vida de un hombre perfecto es una luminaria para los hombres de
la tierra que levantan hacia él la mirada y lo toman por modelo.`

names[54] = `Kuei Mei / La Muchacha que se Casa (La Desposanda)`

texts[54] = `arriba Chen, Lo Suscitativo, el trueno

abajo Tui, Lo Sereno, el lago

Arriba se halla Chen, el hijo mayor, abajo Tui, la hija menor. El hombre
toma la delantera, la muchacha le sigue gozosa. Se describe así el
ingreso de la muchacha en la casa del hombre. Hay en total cuatro signos
que describen las relaciones entre cónyuges. El N^(o) 31, Hsien,
“Influjo omnímodo” describe la atracción que se ejerce recíprocamente en
una joven pareja. El N^(o) 32, Heng, “La Duración”, describe las
condiciones duraderas del matrimonio. El N^(o) 53, Chien, “La
Evolución”, describe los procesos demorados y ceremoniales al
concertarse un matrimonio correcto. Kuei Mei, “El Casamiento de la
Muchacha”, muestra finalmente a un hombre de edad mayor seguido
por una joven muchacha que se va a casar con él.

Observación: Formalmente predomina en China la monogamia. Cada hombre
tiene una sola mujer oficial. Esta alianza, que concierne menos a sus
participantes que a las familias, se celebra bajo estricta observancia
de las formas. Mas el hombre conserva el derecho de prestar oído también
a inclinaciones más tiernas de índole personal y sentimental. Más aún:
constituye el deber más bello de una buena esposa prestarle ayuda al
respecto. De esta manera la relación se torna hermosa y abierta. La
muchacha que, elegida por el hombre, ingresa en la familia, se subordina
modestamente al ama de casa en calidad de hermana menor. Desde luego se
trata de cuestiones sumamente delicadas que requieren mucho tacto por
parte de todos. Pero, cuando las circunstancias son favorables, se
resuelve así un problema para el cual la cultura europea no encontró
solución. Se sobreentiende que la femineidad observada en China
corresponde tan poco al ideal establecido como el promedio de los
matrimonios de Europa corresponde a los ideales conyugales europeos.

EL DICTAMEN

La Desposanda.

Las empresas traen desventura.

Nada que fuese propicio.

Una muchacha recibida en la familia sin ser esposa principal, debe
conducirse con particular cautela y reserva. No debe intentar por sí
sola desplazar al ama, pues esto implicaría desorden y acarrearía
condiciones de vida insostenibles.

Lo mismo es válido para toda clase de relaciones libres entre la gente.
Mientras que las relaciones legalmente ordenadas evidencian un firme
nexo entre deberes y derechos, las relaciones humanas electivas
destinadas a perdurar, se fundan puramente en una actitud de reserva
inspirada en el buen tino.

El principio de tales vínculos por inclinación tiene máxima importancia
en todas las relaciones del mundo. Pues de la alianza de Cielo y Tierra
procede la existencia de la naturaleza toda, de modo que también entre
los hombres la inclinación libre constituye el principio primero y
último de la unión.

LA IMAGEN

Por encima del lago se halla el trueno:

La imagen de la muchacha que se casa.

Así el noble, por la eternidad del fin

reconoce lo perecedero.

El trueno excita las aguas del lago que reverberan a su zaga en olas
rutilantes. Es esta la imagen de la muchacha que sigue al hombre de su
elección. Empero, toda unión entre humanos encierra el peligro de que
subrepticiamente se introduzcan desviaciones que conducen a
malentendidos y desavenencias sin fin. Por lo tanto, es necesario tener
siempre presente el fin. Cuando los seres andan a la deriva, se juntan y
se vuelven a separar, según lo disponen los azares de cada día. Si, en
cambio, apunta uno a un fin duradero, logrará salvar los escollos con
que se enfrentan las relaciones más estrechas entre los humanos.

LAS DIFERENTES LÍNEAS

Al comienzo un nueve significa:

La muchacha que se casa como concubina.

Un cojo que puede pisar con firmeza.

Las empresas traen ventura.

Los príncipes de la antigüedad establecían una firme jerarquía entre las
damas de palacio, subordinadas a la reina como suelen estarlo las
hermanas menores respecto a la mayor. Procedían éstas con frecuencia de
la familia de la reina, y ella misma las conducía hacia su esposo.

Esto significa que una muchacha joven, si de común acuerdo con la esposa
ingresa en una familia, no ocupará exteriormente el mismo rango de
aquélla; modestamente, se mantendrá en segundo plano. Pero sabiendo cómo
integrarse en la relación total, adquirirá una posición enteramente
satisfactoria, y se sentirá protegida por el amor de su esposo, al que
da hijos.

El mismo significado se presenta en las relaciones entre funcionarios.
Un príncipe tal vez disponga de un hombre que es su amigo personal y al
que brinda su confianza. Este hombre, con buen tino, deberá ocupar un
segundo plano a la vera del ministro oficial de Estado. Pero aun cuando,
debido a semejante posición, se encuentre impedido como un lisiado,
podrá con todo llevar a cabo alguna obra gracias a la bondad de su
naturaleza.

Nueve en el segundo puesto significa:

Un tuerto que puede ver.

Es propicia la perseverancia de un hombre solitario.

En la situación presente la muchacha se ha unido a un hombre que la
defrauda. Hombre y mujer han de actuar de consuno como los dos ojos.
Aquí la muchacha se ha quedado sola. El hombre de su elección o bien ya
no le es fiel, o bien ha fallecido. Pero ella no pierde la luz interior
de la fidelidad. Por más que el otro ojo se haya apagado, ella se
mantiene fiel aun en la soledad.

Seis en el tercer puesto significa:

La muchacha que se casa, como esclava.

Se casa como concubina.

Una muchacha de baja posición que no consigue marido, en ciertos casos
todavía podrá arreglárselas como concubina.

La situación indica que uno desea con exceso alegrías que por vías
normales no pueden obtenerse. Así se mete en una situación que no se
aviene del todo con su propia dignidad. No se añade ninguna sentencia,
ni siquiera una advertencia; simplemente se pone a descubierto la
situación como tal, de modo que cada uno pueda extraer por sí mismo la
correspondiente moraleja.

Nueve en el cuarto puesto significa:

La muchacha que se casa prorroga el plazo.

Un casamiento tardío llega a su tiempo.

La muchacha es muy valiosa; no quiere desperdiciarse, y pierde por eso
el momento usual para el matrimonio. Pero esto no es perjudicial. Su
pureza es recompensada y así finalmente encuentra, aunque tarde, al
esposo que le está predestinado.

Seis en el quinto puesto significa:

El regente I casa a su hija.

Y entonces las bordadas vestiduras de la princesa

no fueron tan espléndidas como las de la sierva.

La luna, casi llena, trae ventura.

El regente I es Tang, el Consumador. Él dictó una ley según la cual
también las princesas imperiales debían, en la vida matrimonial,
subordinarse a sus maridos (cf. N^(o) 11, trazo 5). El emperador no
espera cortejantes, sino que da a su hija en matrimonio según su
arbitrio. De ahí que en este caso sea correcto que la familia de la
muchacha tome la iniciativa.

Vemos aquí una muchacha de origen distinguido que, casándose en
condiciones modestas, sabe adaptarse con gracia a la nueva situación.
Está exenta de toda vanidad, expresada en los adornos externos; al
casarse olvida su rango y se subordina al esposo, así como la luna que
todavía no está llena del todo, no se enfrenta directamente con el sol.

Al tope un seis significa:

La mujer sostiene el cesto, pero no hay frutos en él.

El hombre apuñala la oveja, pero no fluye sangre.

Nada que fuese propicio.

Durante el sacrificio ofrendado a los antepasados, a la mujer le
correspondía dar las frutas en un cesto, y al hombre degollar
personalmente el animal del sacrificio. En ese caso las formalidades se
cumplen sólo superficialmente. La mujer toma un cesto vacío, el hombre
apuñala una oveja ya sacrificada anteriormente, con el solo fin de
guardar las formas. Pero esta actitud frívola, nada devota, no promete
dicha alguna en el matrimonio.`

names[55] = `Feng / La Plenitud`

texts[55] = `arriba Chen, Lo Suscitativo, el trueno

abajo Li, Lo Adherente, la llama

Chen es el movimiento; Li es la llama, cuya virtud es la claridad. En lo
interno claridad, hacia afuera movimiento, esto da grandeza y plenitud.
Es una época de alta cultura la que este signo representa. Pero,
ciertamente, la circunstancia de que se trata de una culminación ya
insinúa también la idea de que semejante estado extraordinario de
plenitud no podrá mantenerse en forma duradera.

EL DICTAMEN

La plenitud tiene éxito.

El rey la alcanza.

No estés triste; debes ser como el sol al mediodía.

No cualquier mortal está predestinado a promover una época de máxima
grandeza y plenitud. El que pueda lograr semejante cosa ha de ser un
soberano nato que gobierna a los hombres, pues su voluntad se orienta
hacia lo grande. Una época de tal plenitud es, por lo general, breve. Un
sabio bien podría entristecerse tal vez en vista del ocaso que habrá de
producirse a continuación. Pero semejante tristeza no le cuadra.
Únicamente un hombre interiormente libre de preocupación y aflicción es
capaz de hacer surgir una época de plenitud. Él habrá de ser como el sol
a mediodía, que alumbra y alegra todo lo que hay bajo el cielo.

LA IMAGEN

Trueno y rayo llegan ambos: la imagen de la plenitud.

Así el noble decide los procesos judiciales y ejecuta los castigos.

Este signo tiene cierta afinidad con el signo “La Mordedura Tajante”,
N^(o) 21, donde igualmente se juntan trueno y rayo, aunque en secuencia
inversa. Mientras que allí se fijan las leyes, aquí se ejecutan y se
aplican. La claridad en lo interior posibilita un examen exacto de las
circunstancias, y la conmoción en lo exterior procura una severa y
precisa ejecución de las penas.

LAS DIFERENTES LÍNEAS

Al comienzo un nueve significa:

Cuando uno se encuentra con el amo que le está destinado,

podrá pasar junto a él diez días y no será una falta.

Acudir obtiene reconocimiento.

Para dar lugar a una época de plenitud es necesario que a la claridad se
una un enérgico movimiento. Allí donde se encuentran esas dos cualidades
en dos personas, éstas se corresponden mutuamente, y aun cuando en el
tiempo de la plenitud se juntan durante todo un período de ese ciclo, no
será demasiado y no constituirá una falta. Por eso será bueno acudir
para actuar: se obtendrá el reconocimiento.

Seis en el segundo puesto significa:

La cortina tiene tan densa plenitud

que al mediodía se ven las estrellas polares.

Acudiendo se encontrará desconfianza y odio.

Si uno lo despierta con la verdad, llega la ventura.

Sucede a menudo que entre el gobernante que desea lo grande y el hombre
que podría ejecutarlo, se introduzcan intrigas y rencillas partidistas
cuyo efecto es entenebrecedor como un eclipse solar. En estos casos, en
lugar del sol se ven en el cielo las estrellas boreales. El soberano es
desplazado hacia la sombra por un partido que ha usurpado el dominio. Si
en una época semejante quisiera uno emprender algo con energía, se
toparía tan sólo con desconfianza y envidia que imposibilitarían todo
movimiento. Luego es cuestión de mantenerse interiormente al servicio
del poder de la verdad, la que finalmente se mostrará tan fuerte que en
lo invisible influirá sobre el soberano, de modo que todo se torne hacia
el bien.

Nueve en el tercer puesto significa:

El matorral tiene tal plenitud

que a mediodía se ven las pequeñas estrellas.

Él se rompe el brazo derecho. Ningún defecto.

Se describe aquí como símbolo el progresivo ocultamiento del sol. En
este punto el eclipse alcanza la totalidad, de ahí que al mediodía se
perciban hasta las pequeñas estrellas.

Traducido a circunstancias sociales, el príncipe está en este caso tan
entenebrecido que aun la gente más insignificante puede llegar a
destacarse. En tal caso a un hombre capaz, que podría ser la mano
derecha del soberano, le resulta imposible emprender algo. Es como si
esa mano estuviese quebrada. Pero no es por su culpa si de este modo se
ve impedido de actuar.

Nueve en el cuarto puesto significa:

La cortina tiene tal plenitud

que al mediodía se ven las estrellas polares.

Él se encuentra con su amo que es su par. ¡Ventura!

Aquí las tinieblas ya están disminuyendo, por eso todo lo que mutuamente
se corresponde, se junta. También en este caso ha de encontrarse la
complementación: a la alegría de actuar debe unirse la necesaria
sabiduría. Entonces todo irá bien. Aquí se toma en cuenta una
complementación inversa de la que se observa en el texto del primer
trazo. Allí la sabiduría había de complementarse con la energía, aquí es
la energía a la que debe unirse la sabiduría.

Seis en el quinto puesto significa:

Llegan líneas, se acerca la bendición y la gloria. ¡Ventura!

El hombre gobernante es modesto y por lo tanto abierto al consejo de los
capaces. Así se allegan a su ámbito hombres que le encarecen las líneas
orientadoras de la actuación. Esto promueve el advenimiento de la
bendición, la gloria y la ventura para él y todo el pueblo.

Al tope un seis significa:

Su casa se halla en plenitud.

Él oculta a su clan.

Espía a través del portón y ya no advierte a nadie.

Durante tres años no ve nada. ¡Desventura!

Se describe aquí a un hombre que por su soberbia y amor propio alcanza
lo contrario de aquello a que aspira. Busca plenitud y esplendor para su
vivienda. A toda costa pretende ser el amo en su casa. Pero con ello
consigue que su familia se aparte de él de modo que finalmente se
encuentra en la más absoluta soledad.`

names[56] = `Lü / El Andariego`

texts[56] = `arriba Li, Lo Adherente, el fuego

abajo Ken, El Aquietamiento, la montaña

La montaña (Ken) se mantiene quieta; arriba el fuego (Li) llamea y no
permanece. Por lo tanto no quedan juntos. La tierra extraña, la
separación, es la suerte del andariego.

EL DICTAMEN

El Andariego. Éxito por lo pequeño.

Al andariego la perseverancia le trae ventura.

Como viajero y extranjero uno no debe mostrarse brusco ni pretender
subir demasiado alto. No dispone uno de un gran círculo de relaciones;
no hay, pues, motivo de jactarse. Es necesario ser precavido y
reservado; de este modo uno se protegerá del mal. Si uno se muestra
atento con los demás, conquistará éxitos. El andariego no tiene morada
fija, la carretera es su hogar. De ahí que ha de preocuparse por
conservar interiormente su rectitud y firmeza, y cuidar de detenerse
únicamente en lugares adecuados manteniendo trato tan sólo con gente
buena. Entonces tendrá ventura y podrá seguir viaje sin ser molestado.

LA IMAGEN

Sobre la montaña hay fuego: la imagen del andariego.

Así el noble aplica con claridad y cautela las penalidades

y no arrastra pendencias.

Cuando el pasto sobre la montaña se quema, da un claro resplandor. Pero
el fuego no permanece allí, sino que continúa su andanza en busca de
nuevo alimento. Es un fenómeno muy fugaz. Lo mismo ha de suceder con los
castigos y los pleitos. Es necesario que se trate de fenómenos muy
fugaces y que éstos no se arrastren a otros lugares. Las prisiones han
de ser algo que sólo acoge a la gente en forma pasajera, como si fuesen
huéspedes. No deben convertirse en morada de los hombres.

LAS DIFERENTES LÍNEAS

Al comienzo un seis significa:

Cuando el andariego se dedica a nimiedades

atrae sobre sí la desgracia.

Un andariego no debe perder su dignidad ocupándose en el camino de cosas
vulgares. Precisamente cuanto más baja e indefensa sea su posición hacia
el exterior, tanto más ha de guardar interiormente su dignidad. Pues
cuando un extranjero piensa que encontrará una acogida amable si se
muestra dispuesto a bromas y ridiculeces, se equivoca. Las únicas
consecuencias serán el desprecio y un trato ofensivo.

Seis en el segundo puesto significa:

El andariego llega al hospedaje.

Lleva consigo lo que posee.

Consigue la perseverancia de un joven sirviente.

El andariego que aquí se describe es modesto y reservado. En su fuero
interno no se pierde a sí mismo, y así encuentra un lugar de descanso.
En lo exterior, no pierde la simpatía de la gente; por eso todos lo
estimulan, de modo que puede adquirir posesiones. Además, se allega a él
un sirviente leal y de confianza, de inestimable valor para un
andariego.

Nueve en el tercer puesto significa:

Al andariego se le quema su albergue.

Pierde la perseverancia de su joven sirviente.

Peligro.

Un extranjero violento no sabe conducirse. Se entromete en asuntos y
querellas que nada le importan. De este modo pierde su lugar de
descanso. Trata a su sirviente como a un extraño y de modo altanero. Así
pierde su lealtad. Cuando, en su condición de extranjero, uno ya no
tiene a nadie en quien poder confiar, la situación resulta muy
peligrosa.

Nueve en el cuarto puesto significa:

El andariego descansa en un aposentamiento.

Obtiene su propiedad y un hacha.

Mi corazón no está contento.

Se describe aquí a un andariego que, exteriormente, sabe conformarse,
aun cuando interiormente es fuerte e intempestivo. Por eso encuentra al
menos un albergue donde pueda morar. También logra adquirir bienes. Pero
no se siente en seguridad con su posesión. Ha de estar siempre en
guardia, dispuesto a defenderse a mano armada. Por eso no se siente
cómodo. En todo momento tiene conciencia de ser un extraño en tierra
extraña.

Seis en el quinto puesto significa:

Dispara sobre un faisán. Con la primera flecha cae.

Finalmente esto le rinde alabanzas y un cargo.

Los estadistas viajeros solían presentarse ante los príncipes mediante
el obsequio de un faisán. En este caso el andariego desea entrar al
servicio de un príncipe. Con este motivo dispara sobre un faisán y lo
derriba al primer tiro. Así encuentra amigos que lo elogian y
recomiendan, y es finalmente aceptado por el príncipe que le confiere un
cargo.

A veces las circunstancias mueven a un hombre a buscar su hogar en
tierra extranjera. Si uno sabe aprovechar la situación e introducirse
del modo debido, podrá encontrar aun en el extranjero un círculo de
amigos y un ámbito para su actuación.

Al tope un nueve significa:

Al pájaro se le quema el nido:

El andariego primero ríe,

luego tiene motivos de quejarse y llorar.

En su ligereza pierde la vaca. ¡Desventura!

La imagen del pájaro al que se le incendia el nido muestra la pérdida
del lugar de descanso. Si el pájaro, durante la construcción de su nido,
procedió con ligereza y falta de cuidado, podrá pasarle esa desgracia.
Lo mismo puede esperar también el andariego. Si se abandona a bromas y
risas no acordándose que es sólo un andariego, tendrá por qué lamentarse
y llorar más tarde. Pues cuando debido a su ligereza pierde uno su vaca,
esto es, su modesta capacidad de adaptación, el mal será la
consecuencia.`

names[57] = `Sun / Lo Suave (Lo Penetrante, El Viento)`

texts[57] = `arriba Sun, Lo Suave, el viento, la madera

abajo Sun, Lo Suave, el viento, la madera

Sun es uno de los ocho signos dobles. Es la hija mayor, tiene por imagen
el viento y la madera, y su atributo es la suavidad que, no obstante,
penetra como el viento o como la madera con sus raíces.

Lo oscuro, de por sí rígido e inmóvil, se ve disuelto por la penetración
del principio luminoso, al que se subordina con suavidad y dulzura. En
la naturaleza lo que dispersa las nubes acumuladas y da lugar a una
serena claridad del cielo, es el viento. En la vida humana, se trata de
la penetrante claridad del juicio que aniquila todas las sombrías
segundas intenciones. En la vida de la comunidad es el poderoso influjo
de una eminente personalidad que pone al descubierto y dispersa todas
las maquinaciones que huyen de la luz.

EL DICTAMEN

Lo suave. Éxito por lo pequeño.

Es propicio tener a dónde ir.

Es propicio ver al gran hombre.

La insistente penetración engendra efectos paulatinos y poco aparentes.
No es cuestión de obrar recurriendo a métodos violatorios, sino al
ejercicio de una ininterrumpida influencia. Tales efectos llaman menos
la atención que aquellos que se obtienen mediante la acción sorpresiva,
pero son más persistentes y cabales. A fin de poder obrar de este modo
es preciso tener una meta definida; pues únicamente por el hecho de que
el insistente influjo actúe siempre en una misma dirección puede
lograrse algún objetivo.

Lo pequeño es capaz de lograr algo únicamente cuando se subordina a un
hombre que posee la facultad de instaurar el orden.

LA IMAGEN

Vientos que se siguen uno a otro:

la imagen de lo suavemente penetrante.

Así el noble difunde sus mandamientos

y da cumplimiento a sus asuntos.

Lo insistentemente penetrante del viento se basa en su acción incesante.
Por ella se hace tan poderoso. Recurre al tiempo como medio para su
acción. Así también el pensamiento del soberano debe penetrar en el alma
del pueblo. También esto requiere la acción de un constante influjo por
medio de la ilustración y el mandamiento. Tan sólo cuando el mandamiento
ha penetrado en el alma del pueblo se hace posible una actuación
correspondiente. Una acción no preparada no hace más que amedrentar a la
gente y su efecto es de rechazo.

LAS DIFERENTES LÍNEAS

Al comienzo un seis significa:

Al avanzar y al retroceder

es propicia la perseverancia de un guerrero.

La suavidad y dulzura del carácter conduce a menudo a la indecisión. Uno
no siente la fuerza necesaria para avanzar resueltamente. Surgen mil
escrúpulos. Pero tampoco tiene uno ganas de retirarse, de modo que se
deja arrastrar por un indeciso vaivén. En un caso semejante, lo adecuado
es tomar una resolución de tipo militar, con el fin de hacer
decididamente aquello que exige el orden. Una disciplina resuelta es
mucho mejor que una indecisa falta de rigor.

Nueve en el segundo puesto significa:

Penetrar bajo la cama.

Se emplea a sacerdotes y magos en gran número.

¡Ventura! Ningún defecto.

A veces tiene uno que habérselas con enemigos ocultos, con influencias
inasibles que se esconden en los rincones más oscuros y desde allí
ejercen su influjo sugestivo sobre las gentes. En tales casos es
menester investigar y escudriñar estas cosas hasta llegar a los rincones
más secretos, a fin de establecer de qué influencias se trata —es esta
la tarea de los sacerdotes—, y de eliminarlas —tarea de los magos.
Precisamente lo anónimo de tales merodeos exige una energía
particularmente infatigable, pero este esfuerzo se verá recompensado.
Pues una vez sacados a la luz y estigmatizados, tales influjos
incontrolables habrán perdido su poder sobre los hombres.

Nueve en el tercer puesto significa:

Penetración reiterada. Humillación.

La penetrante e insistente lucubración no ha de llevarse demasiado
lejos, pues frenaría la facultad de tomar decisiones. Una vez que un
asunto ha sido debidamente sometido a la reflexión, es cuestión de
decidir y actuar. Pensar y cavilar con reiterada insistencia provoca el
aporte de escrúpulos una y otra vez y, por consiguiente, la humillación,
puesto que uno se muestra inepto para la acción.

Seis en el cuarto puesto significa:

Se desvanece el arrepentimiento.

Durante la cacería prende uno tres clases de venado.

Cuando alguien une a su innata modestia, en razón del puesto de
responsabilidad que ocupa y de las experiencias que ha atesorado, una
enérgica actividad, obtendrá sin duda un gran éxito. Las tres clases de
animales servían para los sacrificios votivos ofrecidos a los dioses,
para agasajo de los huéspedes y para el consumo diario. Cuando alguien
cobraba presas adecuadas para los tres objetivos, el resultado de la
caza era considerado particularmente bueno.

Nueve en el quinto puesto significa:

La perseverancia trae ventura. El arrepentimiento se desvanece.

Nada que no fuese propicio.

No hay principio, pero sí un fin.

Antes del cambio tres días, después del cambio tres días. ¡Ventura!

Mientras que en “El trabajo en lo echado a perder” (N^(o) 18) es
necesario crear un punto de partida completamente nuevo, aquí tan sólo
se trata de reformas. El comienzo no fue bueno, pero se ha llegado a un
punto en que se puede tomar un nuevo rumbo. Es necesario cambiar y
mejorar. Esto debe emprenderse con constancia, vale decir con una
actitud recta y firme, y entonces se obtendrá éxito y se desvanecerá el
arrepentimiento. Sólo que debe tenerse en cuenta que tales mejorías
requieren cuidadosa reflexión, y una vez producido el cambio, también es
necesario investigar todavía durante un tiempo y con todo cuidado cuáles
son los aspectos que ofrecen en realidad los mejoramientos. Semejante
labor, cuidadosamente llevada a cabo, se ve acompañada por el éxito.

Al tope un nueve significa:

Penetración bajo la cama.

Él pierde su posesión y su hacha.

La perseverancia trae desventura.

El conocimiento obtenido es harto penetrante. Se penetra tras los
influjos perjudiciales persiguiéndolos hasta los rincones más secretos.
Pero uno ya no tiene fuerzas para combatirlos resueltamente. En este
caso todo intento de penetrar en las regiones personales de las
tinieblas sólo acarreará males.`

names[58] = `Tui / Lo Sereno, El Lago`

texts[58] = `arriba Tui, Lo Sereno, el lago

abajo Tui, Lo Sereno, el lago

Como Sun, Tui es otro de los ocho signos duplicados. Tui significa la
hija menor y tiene por imagen el lago sonriente y su atributo es la
alegría. La alegría no se funda, como bien podría parecer, en la
blandura que se destaca en la línea superior. La cualidad del principio
blando, o bien oscuro, no es la alegría, sino la melancolía. Antes bien,
la alegría se funda en que en lo interior haya dos trazos fuertes que se
manifiestan por mediación de la blandura.

La verdadera alegría se basa pues en la condición de que por dentro haya
firmeza y fuerza, y en que estas cualidades, hacia afuera, se presenten
con suavidad y dulzura.

EL DICTAMEN

Lo Sereno. Éxito. Es propicia la perseverancia.

El ánimo alegre es contagioso, por lo tanto tiene éxito. Pero la alegría
requiere como fundamento la constancia, con el fin de que no degenere en
algo indominable. En el corazón han de morar la verdad y la fortaleza,
mientras que en el trato, a la luz del día y hacia afuera, debe aparecer
la dulzura. De este modo adoptará uno la actitud correcta frente a Dios
y los hombres y así podrá lograr algo. Por el mero amedrentamiento, sin
dulzura, puede en ciertos casos lograrse algún resultado momentáneo,
pero no será duradero. Cuando, en cambio, uno conquista los corazones de
los hombres gracias a su amabilidad, el efecto será que ellos asuman de
buen grado todas las circunstancias penosas, más aún, que no se arredren
ni siquiera ante la muerte. Tan grande es el poder que la alegría ejerce
sobre los hombres.

LA IMAGEN

Lagos que reposan uno sobre el otro: la imagen de lo sereno.

Así el noble se reúne con sus amigos para la discusión y la
ejercitación.

Un lago se evapora hacia arriba y así paulatinamente se agota. Pero
cuando dos lagos se enlazan no será fácil que se agoten, pues uno
enriquece al otro. Lo mismo ocurre en el campo científico. La ciencia ha
de ser una energía refrescante, vivificante, y únicamente puede llegar a
serlo en el trato estimulante entre amigos de ideas afines, con los que
uno platica y se ejercita en la aplicación de las verdades vitales. Así
el saber adquiere múltiples aspectos y cobra una serena liviandad, a
diferencia del saber de los autodidactas que denota siempre una
característica un tanto pesada y unilateral.

LAS DIFERENTES LÍNEAS

Al comienzo un nueve significa:

Serenidad contenta. ¡Ventura!

Una alegría tranquila, sin palabras, recogida en sí misma, que no desea
nada de afuera y se contenta de todo, permanece libre de toda simpatía y
antipatía de índole egoísta. En esta libertad reside la ventura, pues
ella alberga la reposada certidumbre del corazón afirmado en sí mismo.

Nueve en el segundo puesto significa:

Verdadera serenidad. ¡Ventura! El arrepentimiento se desvanece.

A menudo se relaciona uno con personas inferiores, en cuya compañía se
siente atraído por alegrías y placeres que no cuadran al hombre
superior. Si uno intentara participar de tales placeres, ello sin duda
tendría por consecuencia el arrepentimiento; pues un hombre superior no
puede satisfacerse realmente con alegrías de índole baja. Cuando en
virtud de este conocimiento no permite que nada lo desvíe de su
voluntad, y no llega a complacerse con tales tentaciones, entonces ni
siquiera compañías dudosas se atreverán a ofrecerle placeres innobles,
puesto que de todos modos él no los disfrutaría. Y con ello queda
eliminada toda ocasión de tener que lamentar algo.

Seis en el tercer puesto significa:

Serenidad que se allega. ¡Desventura!

La verdadera alegría ha de manar del propio fuero interno. Pero cuando
uno es interiormente vacuo, al punto de abandonarse a merced de la
atracción del mundo externo, las alegrías vanas se allegan desde afuera.
Es esto lo que muchos celebran como distracción. Las personas que debido
a una falta de sostén interior sienten necesidad de distracción,
encontrarán siempre ocasión de distraerse. Con la vacuidad de su
naturaleza atraen hacia sí las alegrías exteriores. Así se encuentran
cada vez más perdidas, cosa que naturalmente acarrea males.

Nueve en el cuarto puesto significa:

Serenidad ponderada no está en calma.

Luego de deshacerse de los defectos uno halla alegría.

A menudo el hombre se encuentra en medio de diversas formas de alegría.
Mientras no ha decidido todavía qué forma de alegría ha de elegir, la
más elevada o la más baja, predominará en él la inquietud interior. Tan
sólo luego de advertir con toda claridad que la pasión trae sufrimiento
podrá uno decidirse, en el sentido de deshacerse de lo bajo y aspirar a
las alegrías más elevadas. Una vez sellada esta decisión se habrá
encontrado la verdadera serenidad, la calma interior, y el conflicto
interior se verá superado.

Nueve en el quinto puesto significa:

Enfrentar con veracidad lo corrosivo, es peligroso.

Aun al mejor de los hombres se le pueden aproximar elementos peligrosos.
Si uno les da acceso, su influjo corrosivo tendrá un efecto muy lento
pero seguro, e inevitablemente provocará a su zaga los peligros que
implica. Mas el que reconoce la situación y sabe descubrir el peligro
también sabrá cómo cuidarse y quedará libre de daño.

Al tope un seis significa:

Serenidad seductora.

Si uno es interiormente vanidoso, atraerá las alegrías de la diversión y
tendrá que sufrir por su causa (cf. seis en el tercer puesto). Si uno
carece de firmeza interior, las alegrías del mundo externo, a las que no
se sustrae, ejercen un influjo tan fuerte que lo arrastra. En este caso
ya no se habla de peligro, de ventura o desventura. Uno ha cedido el
timón de su vida, y lo que ahora le espera dependerá del azar y de
influencias externas.`

names[59] = `Huan / La Disolución (La Dispersión)`

texts[59] = `arriba Sun, lo Suave, el viento

abajo K’an, lo Abismal, el agua

El viento que planea sobre la superficie de las aguas las dispersa y
disuelve en espuma y bruma. Esto implica también la idea de que la
energía vital, cuando se acumula en el hombre (cosa que por el atributo
del signo inferior es señalada como peligro), vuelve a ser dispersada y
disuelta por la suavidad.

EL DICTAMEN

La Disolución. Éxito.

El rey se acerca a su templo.

Es propicio cruzar las grandes aguas.

Es propicia la perseverancia.

El signo, en su texto, ofrece similitud con el signo Ts’ui, “La Reunión”
(N^(o) 45). Allí se trata de la reunión de lo separado, o sea de cómo
las aguas se reúnen sobre la tierra en lagos. Aquí se trata de la
dispersión y la disolución del egoísmo separador. El signo “La
Disolución” señala, por así decirlo, el camino que conduce a la reunión.
De ahí se explica la similitud del texto.

Para superar el egoísmo separador de los hombres es menester recurrir a
las fuerzas religiosas. La celebración comunitaria de las grandes
fiestas sacrificiales y de los grandes servicios religiosos, que al
mismo tiempo fueron expresión del nexo y de la estructuración social
entre familia y Estado, era el medio que aplicaban los grandes soberanos
para suscitar en los corazones una emoción mancomunada gracias a la
música sacra y la magnificencia de las ceremonias, y hacer que ésta los
despertara a la conciencia del origen común de todos los seres. Así se
vencía la separación y se disolvía la rigidez. Otro recurso para el
mismo fin lo constituye la cooperación en grandes empresas llevadas a
cabo en común, que brindan a la voluntad una gran meta y, por
requerimiento de esa meta, disuelven todo lo que separa, tal como en un
barco que cruza una gran corriente todos los que están a bordo han de
unirse en la faena colectiva.

Sin embargo, sólo un hombre libre él mismo de todo pensamiento parásito
egoísta, y que está arraigado en la justicia y constancia, es capaz de
lograr semejante disolución de la dureza del egoísmo.

LA IMAGEN

El viento planea sobre el agua: la imagen de la disolución.

Así los antiguos reyes ofrecían sacrificios al Señor y erigían templos.

En otoño e invierno el agua comienza a congelarse y a convertirse en
hielo. Al llegar los aires suaves de la primavera, se disuelve la
congelación y lo disperso en bloques de hielo vuelve a reunirse. Lo
mismo acontece también con el ánimo del pueblo. A causa de la dureza y
del egoísmo se congela el corazón y esa rigidez lo separa de todo lo
demás. El egoísmo y la avidez aíslan a los hombres. Por eso es necesario
que una devota emoción se apodere del corazón humano. Éste ha de
soltarse en sagrados estremecimientos de eternidad que lo sacudan con la
intuición de la presencia del Creador de todos los seres, y lo unifiquen
gracias al poder de los sentimientos de comunidad durante la sagrada
celebración de la adoración de lo divino.

LAS DIFERENTES LÍNEAS

Al comienzo un seis significa:

Él aporta ayuda con la fuerza de un caballo.

¡Ventura!

Aquí se trata de superar la separación en sus primeros comienzos aun
antes de que se haya iniciado; de dispersar las nubes aun antes de que
se conviertan en tormenta y lluvia. En tales épocas, en que se presentan
en las disposiciones de ánimo desviaciones ocultas, que tienen por
consecuencia malentendidos mutuos, es necesario actuar pronto y con
vigor, a fin de disolver estos malentendidos y la mutua desconfianza.

Nueve en el segundo puesto significa:

Durante la disolución él corre hacia su sostén.

El arrepentimiento se desvanece.

Cuando uno descubre en sí mismo los comienzos de su apartamiento de los
demás, de misantropía y de mal humor, es cuestión de dispersar tales
estancamientos. Es preciso que uno tome interiormente la iniciativa y se
encamine rápidamente hacia lo que es para él un apoyo. Semejante sostén
no reside jamás en el odio, sino siempre en una apreciación mesurada y
justa de los hombres, mezclada con benevolencia. Una vez recuperada esta
visión libre referente a la humanidad y dispersado todo bilioso mal
humor, desaparece todo motivo de arrepentimiento.

Seis en el tercer puesto significa:

Él disuelve su yo. No hay arrepentimiento.

Bajo ciertas circunstancias las tareas suelen tornarse tan pesadas que
uno ya no puede pensar en si mismo. Entonces debe dejar completamente de
lado su propia persona, dispersar todo lo que el yo quisiera acumular en
su torno como barrera, con fines de separación. Tan sólo sobre la base
de un gran renunciamiento se conquista la fuerza necesaria para lograr
grandes realizaciones. Teniendo uno su meta fuera de sí mismo, y puesta
en una gran causa, podrá alcanzar esta actitud.

Seis en el cuarto puesto significa:

Él se aparta de su grey. ¡Elevada ventura!

Por la disolución se obtiene acumulación.

Esto es algo en que los hombres comunes no piensan.

Cuando uno trabaja en una tarea destinada a la gran totalidad, deberá
dejar de lado todas sus amistades privadas. Únicamente si se eleva por
encima de los partidismos podrá realizar algo decisivo. Quien se atreva
a esta renuncia a lo próximo, ganará lo lejano. Pero para poder
comprender este punto de vista le hará falta una amplia visión de la
trama de la vida, como solo la logran hombres fuera de lo común.

Nueve en el quinto puesto significa:

Disolventes como sudor son sus altos clamores.

¡Disolución! Un rey permanece sin mácula.

En épocas de general disolución y separación, un gran pensamiento forma
el núcleo que permite emprender la organización de una mejoría. Así como
una enfermedad llega a su crisis gracias al disolvente sudor, así en
tiempos de general estancamiento un pensamiento grande y sugestivo es
una verdadera salvación. Los hombres tienen entonces algo en torno a lo
cual pueden reunirse: un hombre gobernante capaz de disipar
malentendidos.

Al tope un nueve significa:

Él disuelve su sangre.

Alejarse, mantenerse apartado, salir afuera, es sin defecto.

La disolución de la sangre significa disolver, eliminar lo que podría
causar sangre y heridas: evitar el peligro. Mas no se expresa aquí la
idea de que en este caso uno elude las dificultades sólo para sí, sino
de que también salva a los suyos, les ayuda a alejarse aun antes de que
aparezca el peligro, a mantenerse apartados de un peligro existente y a
encontrar la salida de un peligro que ya se ha apoderado de ellos. De
este modo hará lo recto.`

names[60] = `Chieh / La Restricción`

texts[60] = `arriba K’an, Lo Abismal, el agua

abajo Tui, Lo Sereno, el lago

El lago dispone de un espacio restringido, delimitado. Cuando entra en
él mayor cantidad de agua, se desborda. Por eso hay que ponerle vallas.
El símbolo presenta agua abajo y agua arriba, y entre las aguas el
firmamento como valla, como restricción.

La palabra china por restricción denota en verdad los firmes eslabones o
nudos en que están divididos los tallos de bambú. En la vida común se
alude con ello a la economía, al ahorro que impone límites fijos a los
gastos. En la vida moral son las firmes restricciones que el noble
impone a sus actos, los límites puestos por la lealtad y la abnegación.

EL DICTAMEN

La Restricción. Éxito.

No se debe ejercer con persistencia una restricción amarga.

Las limitaciones son penosas. Pero algo se consigue con ellas. En la
vida común, gracias al ahorro queda uno preparado para épocas de
necesidad. Gracias a una actitud reservada, se ahorra uno humillaciones.
Mas asimismo son indispensables las limitaciones en el ordenamiento de
las relaciones universales. La naturaleza dispone de límites firmes para
el verano y el invierno, el día y la noche, y estas limitaciones dan su
significación al año. Del mismo modo la ahorratividad mediante firmes
restricciones en los gastos, sirve para que se conserven los bienes y
los hombres no se vean perjudicados.

Sin embargo, también con respecto a la restricción es necesario observar
mesura. Si uno procediera a imponer a su propia naturaleza barreras
excesivamente amargas, el sufrimiento sería la consecuencia. Frente a la
pretensión de llevar demasiado lejos la restricción de los demás, éstos
se sublevarían. De ahí que también dentro de la restricción misma sean
necesarias las restricciones, las barreras.

LA IMAGEN

Por encima del lago hay agua:

La imagen de la restricción.

Así el noble crea el número y la medida e investiga

qué es la virtud y la recta conducta.

El lago es finito; el agua es inagotable. El lago únicamente puede dar
cabida a una determinada medida del agua infinita. En ello consiste su
particularidad. Mediante la discriminación y la erección de vallas,
también el individuo adquiere su significación en la vida. Aquí se
trata, pues, de establecer con toda claridad estas discriminaciones que,
por así decirlo, constituyen la columna vertebral de la moralidad. Las
posibilidades irrestrictas no son aptas para el hombre. Con ellas su
vida no haría más que diluirse en lo ilimitado. Para llegar a ser
fuerte, se requiere una libre fijación de límites, impuestos por el
deber. Únicamente al rodearse el individuo de tales restricciones y
establecer libremente para sí mismo el mandato del deber, adquiere
significación como huésped libre.

LAS DIFERENTES LÍNEAS

Al comienzo un nueve significa:

No salir abandonando portón y patio, no es falla.

A menudo quisiera uno emprender algo, pero se enfrenta con vallas
insuperables. Entonces es cuestión de advertir dónde debe uno detenerse.
Si comprende esto como es debido y no va más allá de las vallas que le
han sido impuestas, acumulará el vigor necesario para ser capaz de obrar
enérgicamente una vez que llegue el momento para ello. Durante la
preparación de cosas sustanciales, la discreción es de capital
importancia.

Kung Tse dice al respecto: “Allí donde surge el desorden, las palabras
forman el escalón que conduce al mismo. Cuando el príncipe no es
discreto, pierde a su servidor. Cuando el servidor no es discreto,
pierde su vida. Cuando no se tratan con discreción los asuntos en
germen, se perjudicará su consumación. Por eso el noble es escrupuloso
en cuanto a guardar discreción y no sale afuera.”

Nueve en el segundo puesto significa:

No salir abandonando portón y patio, trae desventura.

Una vez llegado el momento de actuar, hay que poner rápidamente manos a
la obra. Así como el agua al comienzo se concentra en un lago sin
desbordar hacia afuera, pero con toda seguridad se abrirá una salida
estando el lago lleno, así suceden también las cosas en la vida humana.
Está muy bien vacilar mientras no haya llegado la hora, pero no por más
tiempo. Una vez eliminados los obstáculos de modo que sea posible obrar,
una vacilación medrosa será un defecto que sin duda acarreará
desventura, ya que hará que se pierda la oportunidad.

Seis en el tercer puesto significa:

Quien no conoce restricción alguna tendrá que lamentarse.

No hay falla.

Cuando sólo se piensa en alegrías y goces, se pierde fácilmente la
sensibilidad en cuanto a las limitaciones necesarias. Y si uno se
abandona a la prodigalidad, al despilfarro, tendrá que lamentarlo, pues
sufrirá las consecuencias. No será lícito buscar fallas en los demás.
Únicamente cuando se reconoce la propia falta, contribuirán estas
ingratas experiencias a que uno se libere de errores.

Seis en el cuarto puesto significa:

Restricción complacida. Éxito.

Toda restricción tiene su valor, pero cuando la restricción requiere un
constante esfuerzo, implica un excesivo gasto de energía. Ahora bien,
donde la restricción es cosa natural —como por ejemplo es condición de
la naturaleza del agua fluir hacia abajo—, conducirá necesariamente al
éxito, puesto que, en este caso, implica un ahorro de energía. La
energía que de otro modo se agota en vana lucha con el objeto, en tal
caso redunda plenamente en beneficio de la causa dada, y el éxito no
puede fallar.

Nueve en el quinto puesto significa:

Dulce restricción trae ventura.

Ir allí trae estima.

La restricción, para tener efecto, debe llevarse a cabo de un modo
conveniente. Si uno pretende únicamente imponer a los demás
restricciones y personalmente trata de sustraerse a ellas, esas
restricciones se sentirán siempre con amargura y provocarán resistencia.
Si en cambio, alguien que ocupa un puesto directivo comienza por
aplicarse él mismo restricciones sin exigir grandes realizaciones a su
gente, y llega a realizar algo con recursos modestos, el resultado será
la ventura. Allí donde actúa semejante modelo, encontrará adeptos; luego
tendrá que salir bien lo que se emprenda.

Al tope un seis significa:

Restricción amarga: la perseverancia trae desventura.

Se desvanece el arrepentimiento.

Cuando se ejerce excesiva severidad al aplicar la restricción, la gente
no lo soporta. Cuanto más consecuente se muestre uno en ese rigor,
mayores serán los males provocados, pues a la larga no podrá evitarse la
reacción. Así también tomará su venganza el cuerpo martirizado si se
pretende imponerle un ascetismo demasiado severo. Sin embargo, aun
cuando tan desconsiderada severidad no sea algo que pueda aplicarse con
regularidad o constantemente, puede haber épocas en que éste sea el
único recurso para evitar la culpabilidad y el arrepentimiento. Se trata
de situaciones en que la desconsideración para con la propia persona
constituye el único medio de salvar el alma, pues de otro modo ésta se
hundiría en la insuficiencia y la tentación.`

names[61] = `Chung Fu / La Verdad Interior`

texts[61] = `arriba Sun, Lo Suave, el viento

abajo Tui, Lo Sereno, el lago

Por sobre el lago sopla el viento y remueve la superficie del agua. Así
se manifiestan efectos visibles de lo invisible. El signo se compone de
trazos firmes arriba y abajo, mientras que el centro se halla abierto.
Esto señala que el corazón está libre de prejuicios, de modo que está
capacitado para acoger la verdad. En cambio, los dos signos parciales
(trigramas) contienen en su centro sendos trazos firmes. Esto indica el
vigor de la verdad interior manifiesto en sus efectos.

Las cualidades de los signos parciales son: arriba suavidad,
transigencia frente a los inferiores, abajo aceptación regocijada de la
obediencia para con los superiores. Tales condiciones crean la base de
una confianza mutua que posibilita los éxitos.

El carácter (ideograma) para Fu (Verdad) presenta en realidad la imagen
de una pata de pájaro sobre un pichón. Contiene la idea del empollar. El
huevo es hueco. Es preciso que la fuerza de lo luminoso actúe en forma
vivificante desde afuera. No obstante, en lo interior ya ha de existir
un germen de vida, para que la vida pueda ser despertada. Especulaciones
de vasto alcance pueden asociarse con estas ideas.

EL DICTAMEN

Verdad Interior. Cerdos y peces. ¡Ventura!

Es propicio cruzar las grandes aguas.

Es propicia la perseverancia.

Los cerdos y los peces son los animales menos espirituales y por lo
tanto los más difíciles de ser influidos. Es preciso que el poder de la
verdad interior haya alcanzado un alto grado antes de que su influjo
alcance también a semejantes seres. Cuando uno se halla frente a
personas tan indómitas y tan difíciles de ser influidas, todo el secreto
del éxito consiste en encontrar el camino adecuado para dar con el
acceso a su ánimo. En primer lugar, interiormente hay que liberarse por
completo de los propios prejuicios. Se debe permitir, por así decirlo,
que la psiquis del otro actúe sobre uno con toda naturalidad; entonces
uno se le acercará íntimamente, lo comprenderá y adquirirá poder sobre
él, de modo que la fuerza de la propia personalidad llegará a cobrar
influencia sobre el otro a través de esa pequeña puerta abierta. Cuando
luego ya no haya obstáculos insuperables de ninguna clase, podrán
emprenderse aun las cosas más riesgosas —como la travesía del agua
grande— y se obtendrá éxito. Pero es importante comprender en qué se
funda la fuerza de la verdad interior. Ésta no se identifica con una
simple intimidad o con una solidaridad clandestina. Vínculos íntimos
también pueden darse entre bandidos. También en este caso significa, por
cierto, una fuerza. Pero no es una fuerza venturosa puesto que no es
invencible. Toda asociación basada en intereses comunes sólo puede
llegar hasta un punto determinado. Donde cesa la comunidad de intereses,
también termina la solidaridad, y la amistad más íntima se transforma a
menudo en odio. Tan sólo allí donde lo recto, la constancia, constituye
el fundamento, la unión seguirá siendo tan sólida que triunfará de todo.

LA IMAGEN

Por sobre el lago está el viento:

La imagen de la verdad interior.

Así el noble discute los asuntos penales,

con el fin de detener las ejecuciones.

El viento mueve el agua porque es capaz de penetrar en sus intersticios.
Así el noble, cuando debe juzgar faltas cometidas por los hombres, trata
de penetrar en su fuero interno con gran comprensión para formarse un
concepto caritativo de las circunstancias. Toda la antigua
jurisprudencia de los chinos tenía por guía esa idea. La más elevada
comprensión, que sabe perdonar, se consideraba como la más alta
justicia. Semejante procedimiento judicial no carecía de éxito; pues se
procuraba que la impresión moral fuese tan fuerte como para no dar
motivos de temer abusos como consecuencia de tal lenidad. Pues ésta no
era fruto de la flaqueza, sino de una claridad superior.

LAS DIFERENTES LÍNEAS

Al comienzo un nueve significa:

Estar dispuesto trae ventura.

Si hay segundas intenciones, es inquietante.

Lo principal para el ejercicio de la fuerza de la verdad interior
consiste en hallarse uno en sí mismo firme y dispuesto. De tal actitud
interior emergerá la conducta correcta frente al mundo externo. Si, en
cambio, se pretendiera cultivar relaciones secretas de índole
particular, sería motivo de verse uno privado de su independencia
interior y cuanto más seguro se sintiera en la convicción de hallar en
otros su respaldo, tanto más se hundiría en la inquietud y la
preocupación de saber si tales uniones secretas son realmente
consistentes. Con lo cual perdería la paz interior y la fuerza de la
verdad interior.

Nueve en el segundo puesto significa:

Una grulla que clama en la sombra.

Su pichón le responde.

Tengo una buena copa. Quiero compartirla contigo.

Se trata aquí del influjo involuntario que la naturaleza interior ejerce
sobre personas anímicamente afines. No es necesario que la grulla
aparezca mostrándose sobre una alta colina. Aun oyendo su llamado desde
lo más oculto, el pichón percibe su voz, la reconoce y le da respuesta.
Donde reina un ánimo alegre, también aparece un compañero para compartir
con uno una copa de vino.

Así se manifiesta el eco que la simpatía despierta en los hombres. Allí
donde una disposición anímica, un sentimiento, se anuncia con verdad y
pureza, donde un acto es clara expresión de la actitud interior, tales
manifestaciones actúan misteriosamente y a distancia, en primer término
sobre quienes se hallan interiormente receptivos. Pero tales círculos
van ampliándose. La raíz de todo influjo reside en el propio interior.
Cuando el interior se expresa con plena verdad y vigor, tanto en las
palabras como en los actos, es grande el influjo. Ese influjo es, pues,
sólo la imagen refleja de aquello que surge del propio pecho. Así toda
intención de ejercer un influjo sólo destruiría ese mismo influjo.

Kung Tse dice al respecto: “El noble permanece en su cuarto. Cuando
expresa bien sus palabras, encuentra aprobación a una distancia de más
de mil millas. ¡Cuánto más aún en la cercanía! Si el noble permanece en
su cuarto y no expresa bien sus palabras, encuentra oposición a una
distancia de mil millas. ¡Cuánto más aún en la cercanía! Las palabras
parten de la propia persona y actúan sobre las gentes. Las obras se
generan en la cercanía y son visibles desde lejos. Palabras y obras son
los goznes de la puerta del noble, son el resorte de su arcabuz. Al
moverse estos goznes y este resorte, acarrean ya honor, ya vergüenza.
Mediante sus palabras y sus obras el noble mueve cielo y tierra. ¿No hay
que ser cauteloso entonces?”

Seis en el tercer puesto significa:

Él se encuentra con un compañero,

ya toca el tambor, ya cesa de hacerlo,

ya solloza, ya canta.

Aquí la fuente de energía no se halla en el propio yo, sino en la
relación con otros. Por grande que sea la intimidad que uno tenga con
otros hombres, si nuestro centro de gravedad descansa en ellos, no
podremos evitar vernos ora invadidos por la alegría, ora sumidos en la
aflicción. Saltar de alegría hasta el cielo, apesadumbrarse hasta sentir
la muerte, he ahí el destino de quienes dependen de la concordancia
interior con otros seres a los que aman. Aquí sólo se enuncia esta ley;
se afirma que es así. El que este estado sea sentido como penoso o como
una dicha suprema de amor, es algo que queda librado al juicio subjetivo
del afectado.

Seis en el cuarto puesto significa:

La luna que está casi llena.

Se pierde el caballo de yunta.

No hay falla.

A fin de acrecentar la fuerza de la verdad interior, es necesario
dirigirse hacia lo superior, hacia aquello de lo cual pueda obtenerse
iluminación como la que recibe la luna del sol. Para ello, sin embargo,
hace falta una cierta humildad, tal como la posee la luna no del todo
llena. Cuando la luna se enfrenta directamente con el sol como luna
llena, comienza inmediatamente a menguar. Si bien, por una parte, hay
que sentir veneración y humildad ante la fuente de iluminación
espiritual, por otra parte es preciso renunciar a partidismos humanos.
Únicamente cuando uno avanza por su camino como un caballo que corre
derecho hacia adelante sin mirar de soslayo hacia su compañero apareado,
se conserva la libertad interior que hace avanzar.

Nueve en el quinto puesto significa:

Él posee la verdad que une con cadenas.

No hay falla.

Se alude aquí al soberano que, en virtud de la fuerza de su naturaleza,
lo mantiene todo unido. Únicamente cuando su fortaleza de carácter es
tan abarcadora que puede ejercer su influjo en todos los que forman
parte de su dominio, él será tal como debe ser. Del soberano debe emanar
una fuerza de sugestión. Ésta anudará y unirá firmemente a todos los
suyos. Sin esta fuerza central toda unificación exterior es tan sólo una
falacia que se derrumbará en el momento decisivo.

Al tope un nueve significa:

Clamor de gallo que se eleva al cielo.

La perseverancia trae desventura.

En el gallo se puede confiar. Llama cuando clarea la mañana. Pero él
mismo no puede volar hacia el cielo. Sólo hace oír su quebrada voz. Así
se pretende infundir fe con meras palabras. Tal cosa ocasionalmente se
logra, sin duda. Pero cuando se persiste en esta actitud, las
consecuencias serán malas.`

names[62] = `Hsiao Kuo / La Preponderancia de lo Pequeño`

texts[62] = `arriba Chen, Lo Suscitativo, el trueno

abajo Ken, El Agrietamiento, la montaña

Mientras que en el signo “La Preponderancia de lo Grande” (N^(o) 28)
tienen preponderancia los trazos fuertes, colocados adentro, encerrados
entre los dos trazos del comienzo y del final, en este caso la
preponderancia es de los trazos débiles, que asimismo se hallan afuera,
mientras que los fuertes están adentro. En ello precisamente reside el
estado de excepción. Hallándose afuera los trazos fuertes, tenemos los
signos I, la Alimentación, y Chung Fu, la Verdad Interior, que no
designan, ninguno de los dos, estados de excepción. Cuando los fuertes
tienen preponderancia en el interior, deben imponerse. Esto da origen a
luchas y estados de excepción en gran escala. Aquí, en cambio, lo débil
ha de hacerse necesariamente cargo de la representación hacia afuera.
Cuando alguien posee una naturaleza que en verdad no se halla a la
altura de la posición directiva que ocupa, se presenta la necesidad de
una extraordinaria precaución.

EL DICTAMEN

Preponderancia de lo Pequeño. Éxito.

Es propicia la perseverancia.

Pueden hacerse cosas pequeñas, no deben hacerse cosas grandes.

El pájaro volador trae el mensaje:

no es bueno aspirar hacia lo alto,

es bueno permanecer abajo. ¡Gran ventura!

Una extraordinaria modestia y escrupulosidad se verá sin duda
recompensada por el éxito; sólo es importante que tales virtudes no se
conviertan en huera fórmula y en un modo de ser rastrero; que antes bien
se observen acompañadas por la debida dignidad en el comportamiento
personal, de modo que uno no se envilezca. Es preciso comprender cuáles
son las exigencias del tiempo a fin de poder encontrar la debida
compensación para las carencias y los daños que afligen este tiempo. De
todas maneras, no deben esperarse grandes éxitos, puesto que para
obtenerlos falta la fuerza necesaria. Por eso es tan importante el
mensaje que aconseja no aspirar a cosas elevadas, sino atenerse más bien
a las de abajo. El hecho de que este mensaje sea traído por un pájaro se
desprende de la figura del signo. Los cuatro trazos fuertes y pesados en
el interior, sólo apoyados afuera por dos trazos débiles, en el caso de
Ta Kuo, N^(o) 28, dan la imagen de la pesada viga maestra del tejado. En
el caso presente se encuentran afuera, y en número mayor, los trazos
livianos portadores: esto da la imagen del pájaro que planea. Pero el
pájaro no debe soberbiamente pretender volar hacia el sol, antes bien ha
de descender hacia la tierra donde se halla su nido. Con ello da el
mensaje que enuncia el signo.

LA IMAGEN

Sobre la montaña está el trueno:

La imagen de La Preponderancia de lo Pequeño.

Así el noble, en su conducta

da preponderancia a la veneración.

En casos de duelo da preponderancia al duelo.

En sus gastos da preponderancia

a la economía.

El trueno sobre la montaña es distinto del de la planicie. En las
montañas el trueno es mucho más cercano, mientras que fuera de las
regiones montañosas es menos audible que el trueno de una tormenta
común. Por eso el noble extrae de esta imagen la exhortación de examinar
cuál es el deber en todas las ocasiones, más de cerca y en forma más
directa que la gente sumida en la vida cotidiana, a pesar de que, por
esa razón, vista de afuera su conducta pueda parecer mezquina. Él es
particularmente escrupuloso en sus actos. En casos de duelo lo afecta
mucho más el sobrecogimiento interior que todo formalismo pequeño y
externo, y en las expensas destinadas a su propia persona se muestra
sencillo y sin pretensiones, de manera extraordinaria. A causa de todo
esto, a los ojos de la mayoría de la gente aparece como un fenómeno de
excepción. Pero lo esencial de esta excepción radica en el hecho de que
en su manifestación exterior se ubica del lado del hombre común.

LAS DIFERENTES LÍNEAS

Al comienzo un seis significa:

El pájaro, por volar, cae en la desventura.

Primeramente el pájaro, hasta que sepa volar, debe permanecer en el
nido. Si pretende volar antes, atraerá sobre sí la desventura. Medidas
extraordinarias sólo deben tomarse cuando ya no hay más remedio. Antes,
y mientras de algún modo sea posible, hay que conformarse con lo
tradicional, pues de lo contrario uno se gasta a sí mismo y consume su
energía sin lograr nada a pesar del esfuerzo.

Seis en el segundo puesto significa:

Ella pasa de largo junto a su antepasado y encuentra a su antepasada.

Él no llega hasta su príncipe y encuentra al funcionario.

No hay falla.

Se menciona aquí dos casos de excepción: en el templo consagrado a los
antepasados, donde transcurre la alternancia de las generaciones, el
nieto se coloca del mismo lado que el abuelo; por eso guarda con él la
relación más estrecha. Aquí se alude a la esposa del nieto, que en el
servicio sacrificial pasa junto al antepasado y se dirige hacia la
antepasada. No obstante, esta conducta extraordinaria es expresión de su
modestia. Ella se atreve más bien a presentarse ante la antepasada,
hacia la cual siente el parentesco del sexo; de ahí que esta desviación
de la regla no constituya una falta.

Otra representación es la del funcionario que, conforme a las reglas,
solicita en primer lugar una audiencia con su príncipe. Pero si no logra
ver a éste, no trata de forzar las cosas violentamente, sino que se
aviene a un escrupuloso cumplimiento de su deber, y a ocupar el lugar
que le corresponde en las filas de los funcionarios. Tampoco esta
extraordinaria discreción es una falta en épocas de excepción. (Por
regla general todo funcionario debe tener, en primer término, una
audiencia con el príncipe que le da el cargo. En este caso, el que
otorga el cargo es el ministro.)

Nueve en el tercer puesto significa:

Si uno no toma precauciones extraordinarias,

acaso llegue alguien de atrás y le pegue.

¡Desventura!

Hay tiempos en que se hace absolutamente imprescindible una
extraordinaria cautela. Pero precisamente en tales situaciones de la
vida hay personalidades rectas y fuertes que, conscientes de su buen
derecho desdeñan precaverse, pues lo consideran una mezquindad. Más
bien, orgullosos y despreocupados, prosiguen su camino. Pero esta
confianza en sí mismo los engaña. Hay peligros que los acechan desde una
emboscada y que ellos no están en condiciones de afrontar.

De todos modos, se trata de un peligro al que uno no se ve
ineludiblemente expuesto; podrá evitarse si se comprende la situación
del momento tal como está dada, una situación que exige que se preste
extraordinaria atención a lo pequeño, a lo insignificante.

Nueve en el cuarto puesto significa:

No hay falla. Sin pasar, él lo encuentra.

Acudir trae peligro. Hay que estar en guardia.

No actúes. De modo duradero sé perseverante.

La dureza del carácter se ve suavizada por la blandura de la posición,
de modo que no se comete ninguna falta. Se encuentra uno en una
situación en la que debe guardar extrema reserva. Uno no debe emprender
nada por sí mismo con el propósito de alcanzar lo deseado. Y si uno
pretendiera acudir a donde correspondiese, decidido a alcanzar
forzadamente la meta, caería en peligro. Por eso es necesario cuidarse y
no actuar, pero observando constantemente la perseverancia interior.

Seis en el quinto puesto significa:

Densas nubes,

ninguna lluvia de nuestra región del Oeste.

El príncipe tira y alcanza al que está en la cueva.

Como aquí se trata de un puesto elevado, la imagen del pájaro en vuelo
se ha convertido en la de nubes en vuelo. Pero por densas que sean, las
nubes planean en lo alto del cielo y no dispensan ninguna lluvia. Así,
en épocas extraordinarias, puede sin duda existir un gobernante nato,
predestinado a traer orden al mundo, pero nada podrá lograr, ni brindar
su bendición al pueblo, puesto que se halla solo y no tiene ningún
ayudante.

En tales tiempos es menester salir en busca de ayudantes con los cuales,
mancomunadamente, podrá llevarse a cabo la obra. Pero es preciso buscar
a tales ayudantes modestamente, en los escondites hacia los cuales se
han retirado. No es cuestión de que tengan fama o renombre; lo que
importa son realizaciones verdaderas.

Gracias a esa modestia encuentra uno al hombre adecuado y se encuentra
en condiciones de llevar a cabo la obra extraordinaria, pese a todas las
dificultades.

Al tope un seis significa:

Sin encontrarlo, pasa de largo junto a él.

El pájaro volador lo abandona. ¡Desventura!

Esto significa desdicha y daño.

Cuando uno apunta y tira más allá del blanco, no podrá alcanzarlo.
Cuando el pájaro no quiere ir a su nido y pretende volar cada vez más
alto, caerá finalmente en la red del cazador. Quien, en tiempos de lo
extraordinario, no sabe detenerse en lo pequeño e inquietamente pretende
avanzar cada vez más, atrae sobre sí el infortunio que procede tanto de
los dioses como de los hombres, puesto que se aparta del orden de la
naturaleza.`

names[63] = `Chi Chi / Después de la Consumación`

texts[63] = `arriba, K’an, Lo Abismal, el agua

abajo Li, Lo Adherente, el fuego

Este signo es una elaboración del signo T’ai, La Paz (N^(o) 11). La
transición de la confusión al orden ha quedado consumada y, también en
los detalles, todo se halla ahora en su sitio. Los trazos fuertes se
encuentran en los puestos fuertes, los trazos débiles en los puestos
débiles. Es esta una constelación muy favorable. No obstante, da que
pensar. Precisamente una vez alcanzado el equilibrio cabal, cualquier
movimiento puede hacer que del estado de orden surja nuevamente la
decadencia. Al único trazo fuerte que se ha trasladado hacia arriba,
llevando así a la perfección ese orden en sus pormenores, le siguen por
su natural tendencia los otros, y así se vuelve a generar súbitamente el
hexagrama P’i, El Estancamiento (N^(o) 12). De modo que este
signo indica condiciones vigentes en un tiempo de culminación, que
requieren extrema cautela.

EL DICTAMEN

Éxito en lo pequeño. Es propicia la perseverancia.

Al principio ventura, al cabo confusiones.

La transición que va del tiempo viejo al tiempo nuevo ya ha sido llevada
a cabo. En principio ya todo está en regla y sólo en los pormenores
puede obtenerse algún éxito. Pero para ello hace falta observar la
actitud que corresponde. Todo sigue su marcha como por sí mismo. Esto
seduce fácilmente a un relajamiento de la tensión y a dejar su curso a
las cosas, sin que uno se preocupe mucho de los diversos aspectos. Tal
indiferencia, empero, es raíz de todos los males. De ella surgen
necesariamente fenómenos de decadencia. Se enuncia aquí la regla que
suele predominar en la historia. Pero esta regla no constituye una ley
inexorable. Quien la comprenda será capaz de eludir sus efectos mediante
una incesante perseverancia y cautela.

LA IMAGEN

El agua está por encima del fuego:

La imagen del estado Después de la Consumación.

Así el noble reflexiona sobre la desgracia

y por anticipado se arma contra ella.

Cuando el agua, en la marmita, cuelga sobre el fuego, ambos elementos
están en mutua relación y debido a este hecho se genera energía. (Cf. la
producción de vapor.) No obstante, la tensión que así se produce impone
adoptar precauciones. Si el agua se desborda, se extingue el fuego y se
pierde su función energética. Cuando el calor es excesivo, el agua se
transforma en vapor y se pierde en el aire. Los elementos que en este
caso están en relación recíproca y engendran así la energía, por su
naturaleza guardan entre sí una recíproca hostilidad. Únicamente una
extrema cautela puede evitar el daño. Así también en la vida hay
circunstancias en que todas las fuerzas se equilibran y obran de
consuno, y por lo tanto todo parecería estar en perfecto orden. Tan sólo
el sabio reconoce en tales épocas los momentos de peligro y sabe
dominarlos mediante precauciones tomadas a tiempo.

LAS DIFERENTES LÍNEAS

Al comienzo un nueve significa:

Él frena sus ruedas.

Se le hunde la cola en el agua.

No hay falta.

En épocas que siguen a una gran transición todo procura el progreso y
desarrollo y empuja hacia adelante. Pero este empuje inicial no es bueno
y conduce con seguridad a la pérdida y la caída, porque se apunta
demasiado lejos y el tiro sobrepasa el blanco. Un carácter fuerte, por
lo tanto, no se deja contaminar por el embaucamiento general y frena a
tiempo su marcha. De este modo, si bien no lo dejarán del todo intacto
las desdichadas consecuencias del empuje general, éstas sin embargo sólo
lo alcanzarán en su espalda —como a un zorro que ya ha atravesado el
agua sólo llega a mojársele la cola—, pero esto no podrá perjudicarlo
mayormente, ya que atinó a conducirse como correspondía.

Seis en el segundo puesto significa:

La mujer pierde la cortina de su carruaje.

No corras tras ella; al séptimo día la obtendrás.

Cuando una mujer viajaba o se trasladaba en carruaje, disponía de una
cortina que la ocultaba de las miradas de los curiosos. Si esta cortina
se extraviaba, habría sido contrario a las buenas costumbres seguir
viaje. Traducido a términos de la vida pública esto significa que a
alguien deseoso de realizar algo se le brinda, donde corresponde, la
necesaria confianza que, por así decirlo, le hace falta para su
protección personal. Precisamente en tiempos después de la consumación
puede darse el caso de que los gobernantes se vuelvan presumidos y
autoritarios y ya no se ocupen de prestar atención a hombres talentosos,
pero desconocidos.

De ello surge por regla general la falsa ambición, el arribismo. Cuando
a alguien no se le brinda confianza desde las esferas superiores, tiende
a buscar recursos y modos de conquistarla y de hacerse notar. Aquí pues
se aconseja no optar por semejante procedimiento indigno. “No lo
busques.” No te abandones a merced del mundo externo; antes bien
aguarda, tranquilamente, y cultiva con independencia tu valor personal.
Los tiempos cambian. Una vez transcurridas las seis etapas del
hexagrama, llegará la nueva era. Lo que a uno le pertenece, a la larga
no puede perderse. Acudirá sin duda por sí mismo. Lo único que hace
falta es saber esperar.

Nueve en el tercer puesto significa:

El ilustre antepasado castiga la tierra diabólica.

Al cabo de tres años la vence.

No se debe utilizar a los vulgares.

El “alto —o ilustre— antepasado” es el título dinástico del soberano Wu
Ting de la dinastía Yin. Una vez que, con mano fuerte, hubo ordenado las
condiciones de vida del reino, mantuvo prolongadas y arduas campañas
bélicas coloniales con el fin de someter las regiones limítrofes
septentrionales, habitadas por los hunos. Éstos representaban una
constante amenaza de invasión. La situación descrita es la que indica
que, luego de épocas de consumación, cuando ha surgido un nuevo poder y
todo se halla en orden en el interior, comienza casi fatalmente la
expansión colonial. En tal sentido, por regla general se debe contar con
prolongadas luchas. A este respecto es particularmente importante una
adecuada política colonial. No es lícito considerar las regiones
duramente conquistadas como una institución para asilo de la gente que
de algún modo se ha hecho intolerable en la patria, pero que todavía es
suficientemente buena como para servir en las colonias. Así, por
anticipado, se echaría a perder toda posibilidad de éxito. Esto rige
tanto para asuntos de gran escala como para los pequeños asuntos; pues
no sólo los Estados en vías de ascenso practican la política colonial.
Toda empresa que aspira a ascender implica el impulso de expansión y los
peligros que éste acarrea.

Seis en el cuarto puesto significa:

Las más bellas vestimentas se convierten en harapos.

Sé cauteloso todo el día.

En épocas de florecimiento cultural suelen producirse a veces
conmociones que ponen a descubierto cierta corrupción interior de la
sociedad, provocando entonces, en el primer momento, un gran revuelo.
Sin embargo, puesto que la situación general es favorable, tales daños
pueden remendarse sin dificultad para disimularlos ante la opinión
pública. Entonces se desvanece todo recuerdo de esas cuestiones y las
cosas parecen estar otra vez en perfecta paz. Pero al hombre avisado
tales sucesos le sirven de serio indicio y no los descuida. Sólo así
podrán eludirse las malas consecuencias.

Nueve en el quinto puesto significa:

El hombre del Este que sacrifica a un buey

no recibe tanta dicha verdadera

como el hombre del Oeste con su pequeña ofrenda.

La actitud religiosa también se ve influida, en los tiempos después de
la consumación, por la correspondiente disposición de ánimo. A las
sencillas formas antiguas de los servicios religiosos, las sustituye una
elaboración cada vez más rica y una pompa exterior cada vez mayor. Pero
a tal despliegue de magnificencia le falta toda seriedad interior. La
arbitrariedad humana reemplaza a la escrupulosa observancia de la
voluntad divina. Ahora bien, mientras que el hombre ve lo que tiene
delante de los ojos, Dios contempla el corazón. Por eso no desciende
tanta bendición sobre una grandiosa pero fría ceremonia religiosa, como
la que se posa sobre una ofrenda sencilla y devota.

Al tope un seis significa:

Se le hunde la cabeza en el agua. Peligro.

Para finalizar, todavía se añade aquí una advertencia. Después de
atravesar las aguas, sólo se le puede hundir a uno la cabeza cuando con
frivolidad vuelve a dirigirse hacia el agua. Mientras uno marcha hacia
adelante sin mirar atrás, se salva de este peligro. Pero hay cierta
atracción seductora en el deseo de detenerse para mirar hacia atrás y
contemplar el peligro superado. Lo cierto es que semejante vanidosa
autocontemplación, como en un espejo, no aporta ninguna dicha. Esto sólo
conduce al peligro y si uno no se decide a tiempo a avanzar
incesantemente hacia adelante, será víctima de ese peligro.`

names[64] = `Wei Chi / Antes de la Consumación`

texts[64] = `arriba Li, Lo Adherente, la llama

abajo K’an, Lo Abismal, el agua

Este signo señala el tiempo en el cual todavía no se ha consumado la
transición del desorden al orden. La transformación, por cierto, ya está
preparada, puesto que todos los trazos del trigrama de arriba guardan
relación con los del trigrama de abajo. Pero todavía no se hallan en su
sitio. Mientras que el signo anterior se asemeja al otoño que forma la
transición del verano al invierno, este signo es como la primavera que,
partiendo del período de estancamiento del invierno, conduce hacia el
tiempo fértil del verano. Con esta esperanzada perspectiva concluye el
Libro de las Mutaciones.

EL DICTAMEN

Antes de la Consumación. Logro.

Pero si al pequeño zorro,

cuando casi ha consumado la travesía,

se le hunde la cola en el agua,

no hay nada que sea propicio.

Las circunstancias son difíciles. La tarea es grande y llena de
responsabilidad. Se trata nada menos que de conducir al mundo para
sacarlo de la confusión y hacerlo volver al orden. Sin embargo, es una
tarea que promete éxito, puesto que hay una meta capaz de reunir las
fuerzas divergentes. Sólo que, por el momento, todavía hay que proceder
con sigilo y cautela. Es preciso proceder como lo hace un viejo zorro al
atravesar el hielo. En la China es proverbial la cautela con que el
zorro camina sobre el hielo. Atentamente ausculta el crujido y elige
cuidadosamente y con circunspección los puntos más seguros. Un zorro
joven que todavía no conoce esa precaución, arremete con audacia, y
entonces puede suceder que caiga al agua cuando ya casi la ha
atravesado, y se le moje la cola. En tal caso, naturalmente, todo el
esfuerzo ha sido en vano.

En forma análoga, en tiempos anteriores a la consumación, la reflexión y
la cautela constituyen la condición fundamental del éxito.

LA IMAGEN

El fuego está por encima del agua:

la imagen del estado anterior a la transición.

Así el noble es cauteloso en la discriminación de las cosas,

a fin de que cada una llegue a ocupar su lugar.

Cuando el fuego, que de todas maneras puja hacia lo alto, se halla
arriba, y el agua, cuyo movimiento es descendente, se halla abajo, sus
efectos divergen y quedan sin mutua relación. Si se desea obtener un
efecto, es necesario investigar en primer lugar cuál es la naturaleza de
las fuerzas que deben tomarse en consideración y cuál es el sitio que
les corresponde. Cuando a las fuerzas se las hace actuar en el sitio
correcto, surtirán el efecto deseado y se alcanzará la consumación. Pero
a fin de poder manejar debidamente las fuerzas exteriores, es menester
ante todo que uno mismo adopte un punto de vista correcto, pues sólo
desde esa mira podrá actuar adecuadamente.

LAS DIFERENTES LÍNEAS

Al comienzo un seis significa:

Se le hunde la cola en el agua.

Humillante.

En tiempos de desorden se siente uno tentado a descollar cuanto antes, a
fin de realizar algo notable. Pero semejante entusiasmo no conduce más
que al fracaso y a la humillación, mientras no haya llegado el momento
de actuar. En tales épocas será prudente guardar reserva, para eludir
así la afrenta del fracaso. (Obsérvese la diferencia entre esta
situación y la del primer trazo del signo anterior.)

Nueve en el segundo puesto significa:

Él frena sus ruedas.

La perseverancia trae ventura.

Tampoco en este caso ha llegado, hasta ahora, el momento de actuar. Pero
la paciencia que es menester no debe implicar una espera inerte, un modo
de vivir al día. Esto, a la larga, no procuraría éxito alguno. Antes
bien, es necesario cultivar en uno mismo la fuerza que pueda capacitar
para el avance. Es como si, para llevar a cabo la transición, hubiese
que disponer de un carruaje, pero que por el momento sea necesario
frenarlo. La paciencia, en su sentido más lato, es energía refrenada.
Por eso uno no debe quedarse dormido perdiendo de vista el objetivo,
pues si se mantiene fuerte y constante en su resolución, finalmente todo
marchará bien.

Seis en el tercer puesto significa:

Antes de la consumación el ataque trae desventura.

Es propicio atravesar las grandes aguas.

Ha llegado el momento de la transición. Pero uno no posee la energía
necesaria para llevar a cabo esa travesía. Si intentara lograrlo a la
fuerza, el resultado sería desventurado, precisamente porque en ese caso
el derrumbe sería inevitable. ¿Qué debe hacerse entonces? Hace falta
crear una nueva situación; atraer la energía de ayudantes capaces, para
dar juntos el paso decisivo: atravesar las grandes aguas. Entonces la
consumación será posible.

Nueve en el cuarto puesto significa:

La perseverancia trae ventura. Se desvanece el arrepentimiento.

Conmoción para castigar la tierra diabólica.

Durante tres años habrá recompensas con grandes reinos.

Ha llegado el tiempo del combate. La transición debe llevarse a cabo. Es
necesario afirmarse enteramente en el mantenimiento de la decisión; esto
traerá ventura. Todos los escrúpulos que uno pudiera concebir en tan
graves momentos de combate deben acallarse. Es cuestión de librar una
lucha denodada para conmover y castigar la tierra diabólica, o sea los
poderes del derrumbe. Pero la lucha también encontrará su recompensa.
Ahora es el momento de echar los cimientos de poder y dominio para el
futuro.

Seis en el quinto puesto significa:

La perseverancia trae ventura. No hay arrepentimiento.

La luz del noble es verdadera.

¡Ventura!

Se ha conquistado la victoria. La fuerza de la constancia no se vio
defraudada. Todo anduvo bien. Todos los escrúpulos se han superado. El
éxito ha dado la razón a la acción. Brilla nuevamente la luz de una
personalidad noble que se impone entre los hombres y logra que crean en
esa luz y la rodeen. Ha llegado el tiempo nuevo, y con él la ventura. Y
así como después de la lluvia el sol alumbra con redoblada belleza, o
como el bosque, después de un incendio, resurge de las ruinas
carbonizadas con multiplicado frescor, así el tiempo nuevo se destaca
con acentuado resplandor por sobre la miseria del tiempo que pasó.

Al tope un nueve significa:

En verdadera confianza se bebe vino.

No hay falta en ello. Pero cuando uno se moja la cabeza,

en verdad la perderá.

Antes de la consumación, en el umbral de los tiempos nuevos, se junta
uno con los suyos, en plena confianza mutua, y deja que transcurra el
tiempo de la espera disfrutando de una copa de vino. Puesto que la nueva
época ya está en cierne y comenzará inmediatamente, no hay falta en
ello. Sin embargo, al proceder así, es necesario cuidarse de exceder la
justa medida. Si en un exceso de ímpetu travieso se vierte el vino sobre
la cabeza, se pierde la situación favorable por falta de moderación.

Nota: Así como el signo “Después de la Consumación” representa la
transición paulatina que partiendo de los tiempos del ascenso y pasando
por el apogeo cultural llega a la época del estancamiento, el signo
“Antes de la Consumación” representa la transición del caos al orden.
Este signo se sitúa al final del Libro de las Mutaciones. Esto alude al
hecho de que todo final encierra un nuevo comienzo. Así este signo
ofrece esperanza a los hombres. El Libro de las Mutaciones es un libro
de lo futuro.`
