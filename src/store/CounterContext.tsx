import { createContext, ReactNode, useContext, useReducer } from "react";

export type Action = 'INCREMENT' | 'DECREMENT'
const defaultState = { count: 0 };
export type State = typeof defaultState;
export type Dispatch = (action: Action) => void;

const CounterContext = createContext<
    {
        state: State;
        dispatch: Dispatch;
    } | undefined
>(undefined);

const counterReducer = (state: State, action: Action) => {
    switch (action) {
        case 'INCREMENT':
            return {
                count: state.count + 1
            };
        case 'DECREMENT':
            return {
                count: state.count - 1
            };
    }
};

const CounterProvider = ({ children }: { children: ReactNode }) => {
    const [state, dispatch] = useReducer(counterReducer, defaultState);
    return <CounterContext.Provider value={{ state, dispatch }}>
        {children}
    </CounterContext.Provider>
};

export default CounterProvider;

export const useCounter = () => {
    const context = useContext(CounterContext)
    if (!context) {
        throw new Error('useCounter must be used inside a CounterProvider');
    }
    return context;
};

//export default useCounter;