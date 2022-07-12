import { getParser, KNOX_COUNTY_TN_ROOT_URL, RHODE_ISLAND_STATE_ROOT_URL } from './parser/parser';
import { writeToFile } from './parser/fileSystem';

const parsers = [
    getParser(KNOX_COUNTY_TN_ROOT_URL),
    getParser(RHODE_ISLAND_STATE_ROOT_URL)
];

const parseSubPage = async (parser, url) => {
    const data = await parser.parseSubPage(url);
    console.log(data.title);

    return data;
};

const parseFromRoot = async (parser) => {
    const subPageUrls = await parser.getSubPageUrls(parser.rootUrl);
    console.log(`${subPageUrls.length} press releases`);

    const tasks = subPageUrls.map((url) => parseSubPage(parser, url));
    return await Promise.all(tasks);
};

const execute = async () => {
    const tasks = parsers.map(parseFromRoot);
    const results = (await Promise.all(tasks)).flatMap((result) => result);
    const json = JSON.stringify(results);
    await writeToFile('TODO: Add', json);
};

console.time('execute');
execute().then(() => {
    console.timeEnd('execute');
});
