import { color } from 'd3-color';
import { getAccessibleColor } from './contrastUtils';
export const getColor = (colorStr)=>{
    const modColorStr = colorStr.replace(/\s/g, ''); // replace spaces
    return color(modColorStr);
};
export const getBrand600Color = (colorStr)=>{
    return getAccessibleColor(colorStr, [
        0,
        150
    ]);
};
export const getBrand700Color = (colorStr)=>{
    return getAccessibleColor(colorStr, [
        0,
        250
    ]);
};
export const getFormTextHoverColor = (rawColorInput)=>{
    return getAccessibleColor(rawColorInput, [
        0,
        200
    ]);
};

//# sourceMappingURL=utils.js.map
