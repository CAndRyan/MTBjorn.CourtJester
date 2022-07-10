import nlp from 'compromise';

export const getSentences = (text) => {
    const doc = nlp(text);
    const sentences = doc.sentences().out('array');

    return sentences;
};
