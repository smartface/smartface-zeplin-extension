import {
    generateColorMap,
    generateTextStyleCatalog
} from "./lib";

function colors(context) {
    let colorMap = generateColorMap(context.project.colors);
    return {
        code: JSON.stringify(colorMap, null, "\t"),
        language: "javascript"
    };
}

function textStyles(context) {
    let colorMap = generateColorMap(context.project.colors);
    let textStyleCatalog = generateTextStyleCatalog(context.project.textStyles, colorMap);
    return {
        code: JSON.stringify(textStyleCatalog, null, "\t"),
        language: "javascript"
    };
}

function exportColors(context) {
    let colorMap = generateColorMap(context.project.colors);
    return {
        code: JSON.stringify(colorMap, null, "\t"),
        filename: "variables.json",
        language: "javascript"
    };
}

function exportTextStyles(context) {
    let textStyleCatalog = generateTextStyleCatalog(context.project.textStyles);
    return {
        code: JSON.stringify(textStyleCatalog, null, "\t"),
        filename: "textStyleCatalog.json",
        language: "javascript"
    };
}

export default {
    colors,
    textStyles,
    exportColors,
    exportTextStyles
};
