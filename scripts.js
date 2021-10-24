/**
 * Skæri, blað, steinn.
 * Spilað gegnum console.
 */

/** Hámarks fjöldi best-of leikja, ætti að vera jákvæð heiltala stærri en 0 */
const MAX_BEST_OF = 10;

/** Global breyta sem heldur utan um heildar sigra */
let wins = 0;

/** Global breyta sem heldur utan um heildar töp */
let losses = 0;

/**
 * Athugar hvort gefin tala sé gild sem best-of gildi.
 * @param {number} bestOf Tala sem skal athuga
 * @return {boolean} true eða false
 */
function isValidBestOf(bestOf) {
  return (bestOf % 2 === 1 && 0 < bestOf && bestOf < MAX_BEST_OF)
}
// console.assert(isValidBestOf(1) === true, '1 er valid best of');
// console.assert(isValidBestOf(2) === false, '2 er ekki er valid best of');
// console.assert(isValidBestOf(9) === true, '9 er valid best of');

function playAsText(play) {
  switch (play) {
    case '1':
      return 'Skæri';
    case '2':
      return 'Blað';
    case '3':
      return 'Steinn';
    default:
      return 'Óþekkt';
  }
}
// console.assert(playAsText('1') === 'Skæri', '1 táknar skæri');
// console.assert(playAsText('2') === 'Blað', '2 táknar blað');
// console.assert(playAsText('3') === 'Steinn', '3 táknar steinn');
// console.assert(playAsText('foo') === 'Óþekkt', 'Annað er óþekkt');

/**
 * Athugar hvort spilari eða tölva vinnur.
 * @param {number} player Það sem spilari spilaði
 * @param {number} computer Það sem tölva spilaði
 * @returns -1 ef tölva vann, 0 ef jafntefli, 1 ef spilari vann
 */
function checkGame(player, computer) {
  // Notar eiginleika leiksins yfir bauginn Z/3Z
  let result = (computer - player + 3) % 3;
  if (result === 2) {
    return -1;
  }
  return result;
}
// console.assert(checkGame('1', '2') === 1, 'Skæri vinnur blað');
// console.assert(checkGame('2', '3') === 1, 'Blað vinnur stein');
// console.assert(checkGame('3', '1') === 1, 'Steinn vinnur skæri');
// console.assert(checkGame('1', '1') === 0, 'Skæri og skæri eru jafntefli');
// console.assert(checkGame('1', '3') === -1, 'Skæri tapar fyrir stein');

/**
 * Spilar einn leik.
 * @return {boolean} -1 ef tölva vann, 0 ef jafntefli, 1 ef spilari vann
 */
function round() {
  let result = 0;
  // 1. Spyrja um hvað spilað, ef cancel, hætta
  let input = prompt('Hvað skal spila?');
  // 2. Ef ógilt, tölva vinnur
  if (input === 'Cancel' || input == null) {
    return 'Cancel';
  }
  if (!['1', '2', '3'].includes(input)) {
    result = -1;
  }
  // 3. Velja gildi fyrir tölvu með `Math.floor(Math.random() * 3) + 1` sem skilar heiltölu á [1, 3]
  let computer = Math.floor(Math.random() * 3) + 1;
  // 4. Nota `checkGame()` til að finna hver vann
  result = checkGame(input, computer);
  // 5. Birta hver vann
  if (result === 0) {
    alert(`Leikmaður: ${input}, tölva: ${computer}. Jafntefli.`)
  } else {
    let winner = '';
    if (result === 1) {
      winner = 'Leikmaður';
    } else {
      winner = 'Tölva';
    }
    alert(`Leikmaður: ${input}, tölva: ${computer}. ${winner} vann.`);
  }
  // 6. Skila hver vann
  return result;
}
// Hér getum við ekki skrifað test þar sem fallið mun biðja notanda um inntak!

/**
 * Spilar leik og bætir útkomu (sigur eða tap) við í viðeigandi global breytu.
 */
function play() {
  // 1. Spyrja um fjölda leikja
  let bestOf = prompt('Hversu marga leiki skal spila?');
  // 2. Staðfesta að fjöldi leikja sé gilt gildi
  if (bestOf === 'Cancel') {
    return 0;
  }

  if (!isValidBestOf(bestOf)) {
    console.error('Ógildur fjöldi leikja.');
    return 1;
  }
  // 3. Keyra fjölda leikja og spila umferð þar til sigurvegari er krýndur
  let playerWins = 0, computerWins = 0;
  while (playerWins < (bestOf / 2) && computerWins < (bestOf / 2)) {
    let winner = round();
    if (winner === 'Cancel') {
      return 0;
    }

    if (winner === 1) {
      playerWins++;
    } else if (winner === -1) {
      computerWins++;
    }
  }
  // 4. Birta hvort spilari eða tölva vann
  let overallWinner = (playerWins > computerWins) ? 'Leikmaður' : 'Tölva';
  alert(`${overallWinner} vann leikinn!`);

  // Uppfæra heildarfjölda vinninga
  (playerWins > computerWins) ? wins++ : losses++;
}
// Hér getum við ekki skrifað test þar sem fallið mun biðja notanda um inntak!

/**
 * Birtir stöðu spilara.
 */
function games() {
  let total = wins + losses;
  if (total % 10 === 1 && total % 100 !== 11) {
    console.log(`Þú hefur spilað ${total} leik.`);
  } else {
    console.log(`Þú hefur spilað ${total} leiki.`);
  }
  if (total > 0) {
    console.log(`Þú hefur unnið ${wins}, eða ${(wins / total * 100).toFixed(2)}% af heild.`);
    console.log(`Þú hefur tapað ${losses}, eða ${(losses / total * 100).toFixed(2)}% af heild.`);
  }
  return 0;
}
// Hér getum við ekki skrifað test þar sem fallið les úr global state
