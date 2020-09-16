const log = console.log;

function getZodiacSign(month, day) {
  if (month == "december") {
    if (day < 22) log(("Sagittarius"));
    else log(("capricorn"));
  }

  if (month == "january") {
    if (day < 20) log(("Capricorn"));
    else log(("aquarius"));
  }

  if (month == "february") {
    if (day < 19) log(("Aquarius"));
    else log(("pisces"));
  }
  

  if (month == "march") {
    if (day < 21) log(("Pisces"));
    else log(("aries"));
  }
  if (month == "april") {
    if (day < 20) log(("Aries"));
    else log(("taurus"));
  }

  if (month == "may") {
    if (day < 21) log(("Taurus"));
    else log(("gemini"));
  }

  if (month == "june") {
    if (day < 21) log("Gemini");
    else log("cancer");
  }

  if (month == "july") {
    if (day < 23) log("Cancer");
    else log("leo");
  }

  if (month == "august") {
    if (day < 23) log("Leo");
    else log("virgo");
  }

  if (month == "september") {
    if (day < 23) log("Virgo");
    else log("libra");
  }

  if (month == "october") {
    if (day < 23) log("Libra");
    else log("scorpio");
  }

  if (month == "november") {
    if (day < 22) log("scorpio");
    else log("sagittarius");
  }
}
getZodiacSign("march", 31);
