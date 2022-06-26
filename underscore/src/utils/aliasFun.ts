//  内置函数别名
export const nativeIsArray = Array.isArray;
export const nativeKeys = Object.keys;
export const nativeCreate = Object.create;

const ArrayProto = Array.prototype;
const ObjProto = Object.prototype;

export const push = ArrayProto.push;
export const slice = ArrayProto.slice;
export const toString = ObjProto.toString;
export const hasOwnProperty = ObjProto.hasOwnProperty;
