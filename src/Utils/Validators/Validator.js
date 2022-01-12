export const required = (value) => {
    if(value)
        return undefined;
    return "Field is required";
}

export const accuracyCheck = (value) => {
    let RegExp = /^((ftp|http|https):\/\/)?(www\.)?([A-Za-zА-Яа-я0-9]{1}[A-Za-zА-Яа-я0-9\-]*\.?)*\.{1}[A-Za-zА-Яа-я0-9-]{2,8}(\/([\w#!:.?+=&%@!\-\/])*)?/;
    debugger
    if(RegExp.test(value) || value === "")
        return undefined;
    return "Input correct URL";
}

export const maxLengthCreator = (maxLength) => (value) => {
    if(value.length > maxLength)
        return `Max length is ${maxLength} symbols`;
    return undefined;
}