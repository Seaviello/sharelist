const presets = [
    "next/babel"
];
const plugins = [
    "styled-components",
    {
        "ssr": true,
        "displayName": true
    }
];
if (process.env === 'test') {
    presets.push({
        "preset-env": {
            "modules": "commonjs"
        }
    });
}

module.exports = {presets, plugins};