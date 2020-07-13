# blaaz

foreign words in Talmud

## Source text

* [https://raw.githubusercontent.com/Sefaria/Sefaria-Export/master/json/Talmud/Bavli/Commentary/Rashi/Seder%20Moed/Rashi%20on%20Shabbat/Hebrew/merged.json]
* `בלע\"ז` & `בלע\\\"ז`
* `בלשון`
* [https://www.sefaria.org/search?q=%D7%91%D7%9C%D7%A2%22%D7%96&tab=text&tvar=1&tsort=relevance&svar=1&ssort=relevance]

## Links

* [https://www.sefaria.org/texts]
* [https://groups.google.com/forum/#!forum/sefaria-dev]
* [https://github.com/Sefaria/Sefaria-Project]
  * [https://github.com/Sefaria/Sefaria-Project/wiki]
  * [https://github.com/Sefaria/Sefaria-Project/wiki#developers]
  * [https://github.com/Sefaria/Sefaria-Project/wiki/API-Documentation]
  * [https://github.com/Sefaria/Sefaria-Project/wiki/Sefaria.js]
* [https://github.com/Sefaria/Sefaria-Export]
  * [https://raw.githubusercontent.com/Sefaria/Sefaria-Export/master/json/Talmud/Bavli/Commentary/Rashi/Seder%20Moed/Rashi%20on%20Shabbat/Hebrew/merged.json]

## API Links

* [https://www.sefaria.org/api/words/%D7%92%D6%B4%D6%BC%D7%93%D6%B5%D6%BC%D7%93]
* [https://www.sefaria.org/api/words/%D7%90%D7%99%D7%9F]
* [https://www.sefaria.org/api/index/Rashi%20on%20Avoda%20Zarah]
* [https://www.sefaria.org/api/index/titles/]

## Commands

in or parallel to Sefaria-Export repo:

* `find ../Sefaria-Export/json -name merged.json | grep Rashi | grep Hebrew`
  * 81 files
* `grep -H -n 'בלע\\\"ז' "../Sefaria-Export/json/Talmud/Bavli/Commentary/Rashi/Seder Moed/Rashi on Shabbat/Hebrew/merged.json" "../Sefaria-Export/json/Tanakh/Commentary/Rashi/Torah/Rashi on Genesis/Hebrew/merged.json"`
  * 100 lines. Hebrew text is backward (left-to-right).
* `deno run --unstable --allow-read src/read1.ts`
