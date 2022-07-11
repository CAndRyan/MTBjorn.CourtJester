import { getParser, KNOX_COUNTY_TN_ROOT_URL } from './parser/parser';

const parser = getParser(KNOX_COUNTY_TN_ROOT_URL);

const parseSubPage = async (url) => {
    const data = await parser.parseSubPage(url);
    console.log(data.title);

    return data;
};

const execute = async () => {
    const subPageUrls = await parser.getSubPageUrls(parser.rootUrl);
    console.log(`${subPageUrls.length} press releases`);

    const tasks = subPageUrls.map(parseSubPage); // TODO: limit the number of parallel tasks?
    await Promise.all(tasks);
};

console.time('execute');
execute().then(() => {
    console.timeEnd('execute');
});
