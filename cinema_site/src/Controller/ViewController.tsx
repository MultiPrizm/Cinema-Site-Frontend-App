
interface GlobalState<T>{
    state: T;
    setter: React.Dispatch<React.SetStateAction<T>>;
}

interface GlobalStateStack{
    [key: string]: GlobalState<any>;
}

let globalState: GlobalStateStack = {};

export function AddGlobalState<T>(key: string, _state: any, _setter: React.Dispatch<React.SetStateAction<T>>){
    if(!(key in globalState)){
        globalState[key] = {state: _state, setter: _setter}
    }
}

export default globalState;