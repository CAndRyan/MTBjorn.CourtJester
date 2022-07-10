import { renderElementAsAppend } from '@mtbjorn/hypotenuse/ui';
import ParserApp from './ui/parserApp';

const renderUi = (parentElementId) => {
    renderElementAsAppend(<ParserApp />, parentElementId);
};

export {
    renderUi
};

