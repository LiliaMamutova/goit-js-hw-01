function getElementWidth(content, padding, border) {
    const contentWidth = Number.parseInt(content);
    const paddingWidth = Number.parseInt(padding);
    const borderWidth = Number.parseFloat(border);

    return contentWidth + (paddingWidth * 2) + (borderWidth * 2);
}

console.log(getElementWidth("50px", "8px", "4px"));
console.log(getElementWidth("60px", "12px", "8.5px"));
console.log(getElementWidth("200px", "0px", "0px"));
