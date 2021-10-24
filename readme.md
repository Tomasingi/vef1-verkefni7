# Verkefni 7

Verkefni 7 snýst um að útbúa skæri, blað, steinn leik.

Gefin er grunnur að verkefni:

* `.editorconfig`, `.gitattributes`, og `.gitignore`
* `package.json` með uppsetningu á `browser-sync`
* `index.html` með leiðbeiningum og tengingu við `scripts.js`
* `scripts.js` með grunni að forriti, athugasemdir og tillögur að útfærslum eru í skjalinu

Skjölun á föllum og breytum notar [`jsdoc`](https://jsdoc.app/). Einnig er _assert_ kóði kommentaður út í grunn. Ef komment eru fjarlægð koma einföld assert próf á kóðann: svo lengi sem fyrsta argument í [`console.assert`](https://developer.mozilla.org/en-US/docs/Web/API/console/assert) er satt er allt í góðu, en ef það er ekki satt, er villa skrifuð út í console.

Fyrir inntak og til að birta notendum gögn skal nota `alert` `confirm` og `prompt` föllin ásamt `console`.

## Skæri, blað, steinn

Boðið skal upp á að spila skæri, blað, steinn ef farið er í `console` og kallað í `play()` fallið.

### Spila leik

Byrja skal á að biðja notanda um hversu marga leiki í „best-of“ skuli spila, jákvæða oddatölu minni en `MAX_BEST_OF` (sjá gefinn kóða). Ef það er ekki gert skal skrifa með `console.error` að um ógilt gildi sé að ræða og hætta. Ef `Cancel` er valið (eða ýtt á `ESC`) skal hætta leik.

Meðan ekki er búið að spila nógu margar umferðir til að finna sigurvegara (t.d. tvo sigra í best-of-3 eða fjóra sigra í best-of-7) skal spila umferð.

Umferð biður notanda um að velja skæri, blað, eða stein þar sem skæri er táknað með `1`, blað með `2`, steinn með `3`. Velja skal af handahófi `1`, `2`, eða `3` fyrir tölvu, sigurvegari finnst út frá hvað er valið:

* Skæri vinnur blað
* Blað vinnur stein
* Steinn vinnur skæri
* Ef sama er valið er jafntefli og umferð spiluð aftur

Birta skal hvað bæði spilari og tölvu valdi og hvernig umferð fór.

Ef ógilt gildi er slegið inn vinnur tölva. Ef `Cancel` er valið (eða ýtt á `ESC`) skal hætta leik.

### Staða

Þegar kallað er í `games()` fallið skal birta upplýsingar um spilaða leiki í `console` með fjölda sigra, fjölda tapa og hlutfall, t.d.:

```text
Þú hefur spilað 11 leiki.
Þú hefur unnið 3, eða 27.27% af heild.
Þú hefur tapað 8, eða 72.73% af heild.
```

Brotum skal skila með tveim aukastöfum.

Ef engin leikkur hefur verið spilaður skal bara birta „Þú hefur spilað 0 leiki“. 

EKki er krafa um að birta texta með réttri fallbeygingu með tilliti til tölu, það má birta „Þú hefur spilað 1 leiki.“.

## Netlify

Skila skal verkefninu keyrandi á Netlify. Gera þarf breytingar þannig að `build` script sé skilgreint í `package.json` og setja upp build ferli þ.a. mappa sem verður til í `build` ferli sé notuð fyrir vef.

## „Snyrtilegur“ kóði

Þegar verið er að skrifa JavaScript kóða gildir það sama og þegar við skrifum HTML og CSS, að passa upp á inndrátt og skipuleggja og skila af okkur læsilegum og „snyrtilegum“ kóða.

Dæmi um kóða sem uppfyllir þessar kröfur ekki:

```javascript
function bla(a, b)
{
if (a) {
  let x = a + 1
    return x
}
else {
return a +b;
}
}
```

og sami kóði „lagfærður“:

```javascript
function calculate(a, b) {
  if (a) {
    let x = a + 1;
    return x;
  } else {
    return a + b;
  }
}
```

## Mat

* 10% Snyrtilegur JavaScript kóði
* 10% Verkefni sett upp á Netlify
* 20% `games()` virkni og utanumhald um spilaða leiki
* 30% Tekið við inntaki notanda og það staðfest skv. forskrift
* 30% `play()` virkni útfærð skv. forskrift

## Sett fyrir

Verkefni sett fyrir í fyrirlestri mánudaginn 18. október 2021.

## Skil

Skila skal í Canvas í seinasta lagi fyrir lok dags fimmtudaginn 28. október 2021. Athugið ekki eru sein skil, verkefni

Skil skulu innihalda:

* Slóð á GitHub repo fyrir verkefni, og dæmatímakennurum skal hafa verið boðið í repo ([sjá leiðbeiningar](https://docs.github.com/en/free-pro-team@latest/github/setting-up-and-managing-your-github-user-account/inviting-collaborators-to-a-personal-repository)). Notendanöfn þeirra eru:
  * `alli959`
  * `einarpalsson`
  * `HallurKrist`
  * `oscar6662`
  * `thth168`
* Slóð á verkefnið keyrandi á Netlify

## Einkunn

Sett verða fyrir tíu minni verkefni þar sem átta bestu gilda 5% hvert, samtals 40% af lokaeinkunn.

Sett verða fyrir tvö hópverkefni þar sem hvort um sig gildir 10%, samtals 20% af lokaeinkunn.
