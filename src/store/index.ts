import { createStore, AnyAction } from 'redux';
import { MakeStore, createWrapper, Context, HYDRATE } from 'next-redux-wrapper';
import { saveState, PERSIST_REDUX } from './persist';
import * as cookies from 'js-cookie';

export enum StoreActions {
    LogOut = 'DESTROY_SESSION',
    SetAuthJWT = 'SET_AUTH_JWT',
    SetAuthUser = 'SET_AUTH_USER',
    SetBotUser = 'SET_BOT_USER',
}

export interface IState {
    authenticationJwt?:string
}

const initialState = {};
const reducer = (state:IState=initialState, action:AnyAction) => {
    switch (action.type) {
        case PERSIST_REDUX:
            return { ...state, ...action.payload }
        case HYDRATE:
            return saveState({ ...state, ...action.payload })
        case StoreActions.LogOut:
            cookies.set('jwt', '')
            cookies.remove('jwt')
            return saveState({
                ...state,
                authenticationJwt: null,
            })
        case StoreActions.SetAuthJWT:
            cookies.set('jwt', action.payload)
            return saveState({
                ...state,
                authenticationJwt: action.payload
            })
        default:
            return state
    }
};
// create a makeStore function
const makeStore: MakeStore<IState> = (context:Context) => createStore(reducer);

// export an assembled wrapper
export const reduxWrapper = createWrapper<IState>(makeStore, { debug: false });
