import { getParser, KNOX_COUNTY_TN_ROOT_URL } from './parser/parser';

const execute = async () => {
    const parser = getParser(KNOX_COUNTY_TN_ROOT_URL);
    const subPageUrls = await parser.getSubPageUrls(parser.rootUrl);
    console.log(subPageUrls);

    const data = await parser.parseSubPage('https://dag.knoxcountytn.gov/press-release/stepfather-convicted-of-molesting-eleven-year-old/');
    console.log(data);
};

execute();
