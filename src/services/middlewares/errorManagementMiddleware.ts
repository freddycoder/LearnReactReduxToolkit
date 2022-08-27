import { AnyAction } from 'redux';

export const errorManagementMiddleware = (store:any) => (next:Function) => (action: AnyAction) => {
    console.log("store", store)
    console.log("action", action)
    if (action.type === '@@redux-toolkit/INIT') {
        return next(action);
    }
    const result = next(action);
    console.log("result", result)
    return result;
}