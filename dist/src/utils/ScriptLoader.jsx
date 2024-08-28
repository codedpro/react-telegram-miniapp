/* eslint-disable react/display-name */
import { useEffect } from 'react';
var isNextJs = function () {
    try {
        require.resolve('next/script');
        return true;
    }
    catch (error) {
        return false;
    }
};
var Script;
if (isNextJs()) {
    Script = require('next/script').default;
}
else {
    Script = function (_a) {
        var src = _a.src;
        useEffect(function () {
            var script = document.createElement('script');
            script.src = src;
            script.async = true;
            document.head.appendChild(script);
            return function () {
                document.head.removeChild(script);
            };
        }, [src]);
        return null;
    };
}
export default Script;
