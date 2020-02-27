function reverseObject(obj) {
    const ret = {};
    Object.keys(obj).forEach(key => {
        ret[obj[key]] = key;
    });
    return ret;
}

function beautifyStyleName(textStyleName) {
    let newName = textStyleName.replace(/[^a-z]/gi, "");
    newName = newName.charAt(0).toLowerCase() + newName.substring(1);
    return `.${newName}`;
}

export {
    reverseObject,
    beautifyStyleName
};
