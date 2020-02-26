import {
    generateColor
} from "./color";

function generateTextStyleCatalog(textStyles) {
    let textStyleCatalog = {};
    textStyles
        .forEach(textStyle => {
            let {
                fontSize,
                color,
                fontFamily,
                name, // TODO: Convert class name
                weightText
            } = textStyle;
            let styleObject = {
                font: {
                    family: fontFamily,
                    style: weightText,
                    size: fontSize
                    // TODO: bold: true, italic: true etc
                },
                textColor: generateColor(color) // TODO: Match with variable
            };
            textStyleCatalog[name] = styleObject;
        });
    return textStyleCatalog;
}

export {
    generateTextStyleCatalog
};
