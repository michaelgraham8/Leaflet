// MapUtil is used by Utils. Utils lower level functions are dependent on MapUtil
// Map and handler references

import * as Util from '../core/Util';

export function extend(options, event) {
    let handleEventRequest = Util.extend(options, event);
    return handleEventRequest;
}

export function setOptions(target, options) {
    return Util.setOptions(target, options);
}

export function bind(eventHandler, target) {
    return Util.bind(eventHandler, target);
}

export function requestAnimFrame(frame, target) {
    return Util.requestAnimFrame(frame,target);
}

export function cancelAnimFrame(eventToCancel) {
    return Util.cancelAnimFrame(eventToCancel);
}

export function stamp(container) {
    return Util.stamp(container);
}

export function indexOf(mouseEvent, eventType) {
    return Util.indexOf(mouseEvent, eventType);
}

export var mapUtilFalseFn = () => {
    return false;
}

export var mapUtilTrueFn = () => {
    return true;
}
