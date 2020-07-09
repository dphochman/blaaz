# blaaz

foreign words in Talmud

## Source text

* [https://raw.githubusercontent.com/Sefaria/Sefaria-Export/master/json/Talmud/Bavli/Commentary/Rashi/Seder%20Moed/Rashi%20on%20Shabbat/Hebrew/merged.json]
* `בלע\"ז`
* `בלע\\\"ז`
* [https://www.sefaria.org/search?q=%D7%91%D7%9C%D7%A2%22%D7%96&tab=text&tvar=1&tsort=relevance&svar=1&ssort=relevance]

## Links

* [https://www.sefaria.org/texts]
* [https://groups.google.com/forum/#!forum/sefaria-dev]
* [https://github.com/Sefaria/Sefaria-Project]
  * [https://github.com/Sefaria/Sefaria-Project/wiki#developers]
* [https://github.com/Sefaria/Sefaria-Export]
  * [https://raw.githubusercontent.com/Sefaria/Sefaria-Export/master/json/Talmud/Bavli/Commentary/Rashi/Seder%20Moed/Rashi%20on%20Shabbat/Hebrew/merged.json]

## Commands

in or parallel to Sefaria-Export repo:

* `find ../Sefaria-Export/json -name merged.json | grep Rashi | grep Hebrew`
  * 81 files
* `grep -H -n 'בלע\\\"ז' "../Sefaria-Export/json/Talmud/Bavli/Commentary/Rashi/Seder Moed/Rashi on Shabbat/Hebrew/merged.json" "../Sefaria-Export/json/Tanakh/Commentary/Rashi/Torah/Rashi on Genesis/Hebrew/merged.json"`
  * 100 lines. Hebrew text is backward (left-to-right).
