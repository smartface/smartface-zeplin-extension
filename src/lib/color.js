function generateColorMap(colors) {
    let colorMap = {};
    colors
        .forEach(color => {
            colorMap[color.name] = generateColor(color);
        });
    return colorMap;
}

function generateColor({ r, g, b, a }) {
    return `rgba(${r},${g},${b},${a})`;
}

export {
    generateColor,
    generateColorMap
};