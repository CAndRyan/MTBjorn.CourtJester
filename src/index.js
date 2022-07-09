import nlp from 'compromise';

const sourceUrl = "https://dag.knoxcountytn.gov/press-release/stepfather-convicted-of-molesting-eleven-year-old/";
const text = 'Prosecutors in DA Charme Allen’s Child Abuse Unit obtained convictions against a stepfather who molested his stepdaughter and sent her text messages soliciting sexual activity.  Cristobal Jose Vasquez, 39, was convicted of Solicitation of a Minor and Aggravated Sexual Battery.  Judge Steve Sword revoked Vasquez’s bond, ordered him into custody, and set the case for sentencing on August 11.';
const doc = nlp(text);
const sentences = doc.sentences().out('array');
const data = {
    sourceUrl,
    sentences
};

console.log(data);
