export const isEvent = (optionName: string) => optionName?.length > 2 && optionName.slice(0, 2) === 'on' && optionName[2] === optionName[2].toUpperCase();

export const render = async (raw, childRenderer = null, renderedArr = [], events = {}, parent = '') => {

    async function parseFnType(item) {
        if (typeof item.type === 'function') {
            const rendered = await item.type(item.props);
            return parseFnType(rendered);
        }
        return item;
    }

    async function traverse(arr, renderedArr = [], parent) {
        for (let item of (Array.isArray(arr) ? arr : [arr])) {
            if (typeof item?.type === 'symbol') {
                await traverse(item.props?.children, renderedArr, parent);
            } else if (item?.type) {
                if (typeof item.type === 'function') {
                    const rendered = await parseFnType(item);
                    item = { ...rendered };
                }
                const result = await childRenderer?.(item.type, `${parent}/${renderedArr.length}/${item.type}`, item.props);
                if (result) {
                    await render(result, childRenderer, renderedArr, events, `${parent}`);
                } else {
                    const type = (item.type === 'container' || item.type === 'html') ? 'div' : item.type;
                    const { children, style, ...rest } = item.props || {};
                    const options = rest || {};
                    const itemName = `${parent}/${renderedArr.length}/${type}`;
                    for (const optionKey of Object.keys(options)) {
                        if (isEvent(optionKey)) {
                            // const eventId = Object.keys(events).length;
                            events[`${itemName}/${optionKey}`] = options[optionKey];
                            options[optionKey] = true;
                        }
                    }
                    const newItem = {
                        options: options,
                        style: formatStyle(style) || null,
                        type,
                        children: [],
                        key: itemName,
                    };
                    renderedArr.push(newItem);
                    await traverse(children, newItem.children, itemName);
                }
            } else if (Array.isArray(item)) {
                await traverse(item, renderedArr, `${parent}`);
            } else if (typeof item === 'string' || typeof item === 'number') {
                const lastArrItem = renderedArr[renderedArr.length - 1];
                if (lastArrItem?.type === 'text') {
                    lastArrItem.options.text += item;
                } else {
                    renderedArr.push({
                        options: { text: item },
                        style: null,
                        type: 'text',
                        children: [],
                        key: `${parent}/${renderedArr.length}/text`,
                    });
                }
            }
            // if (item?.props?.children) {
            //     await traverse(item.props.children, renderedArr);
            // }
        }
    }
    await traverse(raw, renderedArr, parent);

    return { tree: renderedArr, events };
}

const formatStyle = (style) => {
    if (!style) {
        return null;
    }
    const newStyle = {};
    for (const prop of Object.keys(style || {})) {
        if (typeof style[prop] === 'number' && !isUnitlessNumber[prop]) {
            style[prop] = `${style[prop]}px`;
        }
        newStyle[toKebabCase(prop)] = style[prop];
    }
    return newStyle;
}

const isUnitlessNumber = {
    animationIterationCount: true,
    borderImageOutset: true,
    borderImageSlice: true,
    borderImageWidth: true,
    boxFlex: true,
    boxFlexGroup: true,
    boxOrdinalGroup: true,
    columnCount: true,
    columns: true,
    flex: true,
    flexGrow: true,
    flexPositive: true,
    flexShrink: true,
    flexNegative: true,
    flexOrder: true,
    gridRow: true,
    gridRowEnd: true,
    gridRowSpan: true,
    gridRowStart: true,
    gridColumn: true,
    gridColumnEnd: true,
    gridColumnSpan: true,
    gridColumnStart: true,
    fontWeight: true,
    lineClamp: true,
    lineHeight: true,
    opacity: true,
    order: true,
    orphans: true,
    tabSize: true,
    widows: true,
    zIndex: true,
    zoom: true,
    fillOpacity: true,
    floodOpacity: true,
    stopOpacity: true,
    strokeDasharray: true,
    strokeDashoffset: true,
    strokeMiterlimit: true,
    strokeOpacity: true,
    strokeWidth: true,
};

const toKebabCase = (string) => {
    return string.replace(/\B(?:([A-Z])(?=[a-z]))|(?:(?<=[a-z0-9])([A-Z]))/g, '-$1$2').toLowerCase();
}