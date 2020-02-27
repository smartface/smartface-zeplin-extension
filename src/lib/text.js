import {
    generateColor
} from "./color";

import {
    reverseObject,
    beautifyStyleName
} from "./utils";

function generateTextStyleCatalog(textStyles, colorMap) {
    let reversedColorMap = reverseObject(colorMap);
    let textStyleCatalog = {};
    textStyles
        .forEach(textStyle => {
            let {
                fontSize,
                color,
                fontFamily,
                name,
                weightText
            } = textStyle;
            let textColor = generateColor(color);
            if (reversedColorMap[textColor]) {
                let colorName = reversedColorMap[textColor];
                textColor = `\${${colorName}}`;
            }
            let styleObject = {
                font: {
                    family: fontFamily,
                    style: weightText,
                    size: fontSize
                    // TODO: bold: true, italic: true etc
                },
                textColor
            };
            textStyleCatalog[beautifyStyleName(name)] = styleObject;
        });
    return textStyleCatalog;
}

export {
    generateTextStyleCatalog
};
