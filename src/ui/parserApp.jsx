import { getParser, KNOX_COUNTY_TN_ROOT_URL } from '../parser/parser';

const execute = () => {
    const parser = getParser(KNOX_COUNTY_TN_ROOT_URL);
    const subPageUrls = parser.getSubPageUrls(parser.rootUrl);
    console.log(subPageUrls);

    const data = parser.parseSubPage('https://dag.knoxcountytn.gov/press-release/stepfather-convicted-of-molesting-eleven-year-old/');
    console.log(data);
};

const ParserApp = () => (
    <div>
        <h1>Court Jester | Parser</h1>
        <button onClick={execute}>Execute</button>
    </div>
);

export default ParserApp;
