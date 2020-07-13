#!/usr/bin/env deno

import { existsSync, readFileStrSync } from 'https://deno.land/std/fs/mod.ts';
const READFILE_OPTIONS = { encoding: 'utf8' };

type IComment = string;
type ILine = IComment[];
type IDaf = ILine[];

const BLAAZ = 'בלע\"ז';
const BLASHON = 'בלשון';
const PHRASES = [
    'בלשון לעז',
    'בלשון לטי\"ן',
    'בלשון יוני',
    'בלשון ארמי',
    'בלשון ערבי',
    'בלשון אשכנז',
    'בלשון ישמעאל'
];

// TODO Convert mixed-direction string for console.
const isRTL = (function(){
    const re = /[\u0590-\u07FF\u200F\u202B\u202E\uFB1D-\uFDFD\uFE70-\uFEFC]/;
    return (str: string) => re.test(str);
})();
const toConsole = (str: string) => {
    return isRTL(str) ?
        str.split('').reverse().join('') : str;
};
// console.log(...BLAAZ.split('').map(isRTL));

// TODO Get filename(s)/criteria from command line.
const filename = '../Sefaria-Export/json/Talmud/Bavli/Commentary/Rashi/Seder Moed/Rashi on Shabbat/Hebrew/merged.json';
const filecontent: string = readFileStrSync(filename, READFILE_OPTIONS);
const filejson = JSON.parse(filecontent);
const title = filejson.title;

filejson.text.forEach((daf: IDaf, dafIndex: number) => {
    if (daf && daf.length) {
        const blat = Math.floor( dafIndex / 2 ) + 1;
        const amud = dafIndex % 2 === 0 ? 'a' : 'b';
        const dafId = blat.toString().concat(amud);
        daf.forEach((line, lineIndex) => {
            if (line && line.length) {
                line.forEach((comment, commentIndex) => {
                    if (comment && comment.length) {
                        if (comment.indexOf(BLAAZ) >= 0) {
                            comment = toConsole(comment);
                            // TODO Display link: {filejson.versionSource}.{dafId}.{lineNumber}.{commentNumber}
                            console.log(title, dafId, (lineIndex + 1), (commentIndex + 1), comment);
                        }
                    }
                });
            }
        });
    }
});
