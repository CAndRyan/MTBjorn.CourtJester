import { getDomFromUrl } from './network';
import { getSentences } from './nlp';

export const KNOX_COUNTY_TN_ROOT_URL = 'https://dag.knoxcountytn.gov/media-public-info/press-releases/';

const parserDictionary = {
    [KNOX_COUNTY_TN_ROOT_URL]: {
        rootUrl: KNOX_COUNTY_TN_ROOT_URL,
        getSubPageUrls: async (rootUrl) => {
            const dom = await getDomFromUrl(rootUrl);

            return [...dom.getElementsByClassName('wpsp-read-more')].map((readMoreElement) => {
                const linkElement = readMoreElement.getElementsByTagName('a')[0];
                return linkElement.href;
            });
        },
        parseSubPage: async (url) => {
            const dom = await getDomFromUrl(url);
            const articleElement = dom.getElementsByTagName('article')[0];
            const title = articleElement.getElementsByTagName('h1')[0].textContent;
            const postedDate = articleElement.getElementsByClassName('date')[0].textContent.replace('Posted on', '').trim();
            const rawText = [...articleElement.getElementsByTagName('p')].map((pElement) => pElement.textContent).join('\n');

            return {
                url,
                title,
                date: (new Date(postedDate)).toDateString(),
                text: getSentences(rawText)
            };
        }
    }
};

export const getParser = (rootUrl) => parserDictionary[rootUrl];
