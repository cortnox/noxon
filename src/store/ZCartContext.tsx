import { createContext, ReactNode, useContext, useReducer } from "react";



export class AddressCl {
    id?: string; //name: keyof typeof plotOptions;
    guid?: string;
    name?: string;
    description?: string;
    street?: string;
    suburb?: string;
    city?: string;
    country?: string;
    postalcode?: string;
    stamp?: Date;
    created?: Date;
    userId?: string;
}


export interface Taskobj {
    name?: string;
    id?: string;
    //task: {
    text: string;
    //}
}

export interface Taskpac {
    tasks: Taskobj[];
};

export class TaskCl {
    id?: string; //name: keyof typeof plotOptions;
    //id: number;
    text: string;
    description?: string;
    guid?: string;
    completed?: boolean;
    stamp?: Date;
    value?: number;
    amount?: number;
    created?: Date;
    userId?: string;
}

export class ToDoCl {
    title: string;
    description: string;
    amount: number;
    stamp: Date;
    value?: number;
    created?: Date;
    completed?: boolean;
    userId?: number;
    guid?: string;
    id?: string;
    constructor(title: string, description: string, value: number) {
        this.title = title;
        this.description = description;
        this.value = value;
    }
}

//1.declare the typings needed to facilitate the data that will provide context
//construct of stock item used in item array for CartState
export class Stock {
    guid?: string;
    id: string;
    category?: string;
    code?: string;
    name: string;
    description: string;
    price: number;
    quantity?: number;
    amount: number;
    userId?: number;
    value?: number;
    created?: Date;
    stamp?: Date;
    DAmount?: number;
    constructor(name: string, description: string, price: number) {
        this.name = name;
        this.description = description;
        this.price = price;
        this.DAmount = 1;
    }
}



export type StockType = {
    id: '',
    name: '',
    description: '',
    amount: 0,
    price: 0,
    addItem: (item: Stock) => {},
    removeItem: (id: string) => {}

}
export type CartType = {
    items: Stock[],
    totalAmount: 0,
    counter: 0,
    addItem: (item: Stock) => {},
    removeItem: (id: string) => {}

}
export class OrderCl {
    guid?: string;
    id: string;
    created?: Date;
    stamp?: Date;
    totalAmount: number;
    items:Stock[];
    userId?: number;
}
//2CartState will hold stockitems picked 
export class CartState {
    guid?: string;
    id?: string;
    items: Stock[];
    totalAmount: number;
    counter: number;
    created?: Date;
    stamp?: Date;
    userId?: number;
    address?: AddressCl;
    addItem?: (item: Stock) => void;
    removeItem?: (id: string) => void;
    constructor(counter: number) {
        this.counter = counter;
    }
}
export class ClientCl {
    address?: AddressCl;
    guid?: string;
    id?: string;
    name: string;
    email: string;
    created?: Date;
    stamp?: Date;
    addressid?:string;
} 
export class ClientMessageCl {
    message: string;
    name: string;
    context: ClientCl;
}

//3 instantiate the State that holds the context
//const defaultState = new CartState(0);

const defaultAddress:AddressCl = {};

const defaultState: CartState = {
    items: [],
    totalAmount: 0,
    counter: 0,
    address: defaultAddress
    //addItem: (item: Stock) => { },
    //removeItem: (id: string) => { }
};
//define the posibble actions 
export type Action = { type: 'ADD', item: Stock } | { type: 'REMOVE', id: string } | { type: 'FLOAT' };

//export the State in the form of it defined type: State
export type State = typeof defaultState;
//
export type Dispatch = (action: Action) => void;

//let stockitems: Stock[] = [];

/*let stateitem: CartState = {
    items: [] as Stock[],
    totalAmount: 0,
    counter: 0,
    addItem: (item: Stock) => { },
    removeItem: (id: string) => { }
}*/


//let floatdispatch = { type: 'FLOAT' }

//let statedispatch = { stateitem, floatdispatch }

const ZCartContext = createContext<
    {
        state: State;
        dispatch: Dispatch;
    } | undefined>(undefined);
//} | undefined>(stateitem);

const cartReducer = (state: State, action: Action) => {
    switch (action.type) {
        case 'ADD':
            {
                if (!action.item.DAmount) {
                    action.item.DAmount = 1;
                }
                const nextTotalAmount = state.totalAmount + action.item.price * action.item.DAmount;
                const itemIndex = state.items.findIndex((item: Stock) => item.id === action.item.id);
                const existingItem = state.items[itemIndex];
                let nextItems;

                if (existingItem) {

                    const nextItem = {
                        ...existingItem,
                        amount: existingItem.amount + action.item.DAmount//action.item.amount
                    };
                    nextItems = [...state.items];
                    nextItems[itemIndex] = nextItem;
                } else {
                    nextItems = state.items.concat(action.item);
                }
                const snapshot: CartState = {
                    items: nextItems,
                    totalAmount: nextTotalAmount,
                    counter: state.counter + 1
                }
                return snapshot;
            }
        case 'REMOVE':
            {
                const itemIndex = state.items.findIndex((item: Stock) => item.id === action.id);
                const existingItem = state.items[itemIndex];
                const nextTotalAmount = state.totalAmount - existingItem.price;
                let nextItems;
                if (existingItem.amount === 1) {
                    nextItems = state.items.filter((item: Stock) => item.id !== action.id);
                } else {
                    const nextItem = {
                        ...existingItem,
                        amount: existingItem.amount - 1
                    }
                    nextItems = [...state.items];
                    nextItems[itemIndex] = nextItem;
                }
                const snapshot: CartState = {
                    items: nextItems,
                    totalAmount: nextTotalAmount,
                    counter: state.counter + 1
                };
                return snapshot;
            }
        /*case 'FLOAT':
            {
                console.log('Awaiting next dispatch instruction:');
            }
        */
        default:
            {
                console.log('Awaiting next dispatch instruction:');
                return defaultState;
            }
    }
}

const ZCartProvider = ({ children }: { children: ReactNode }) => {
    const [state, dispatch] = useReducer(cartReducer, defaultState);
    /*const addItemHandler = (item: Stock) => {
        dispatch({ type: 'ADD', item: item });
    };
    const removeItemHandler = (id: string) => {
        dispatch({ type: 'REMOVE', id: id });
    };
    const cartContext = {
        items: state.items,
        totalAmount: state.totalAmount,
        addItem: addItemHandler,
        removeItem: removeItemHandler
    };*/
    //<ZCartContext.Provider value={{ state, dispatch }}></ZCartContext.Provider>
    return (
        <ZCartContext.Provider value={{ state, dispatch }}>
            {children}
        </ZCartContext.Provider>
    );
}

export const useCart = () => {
    const context = useContext(ZCartContext);
    if (!context) {
        throw new Error(`useCart must be contained within a ZCartProvider`);
    }
    return context;
}

export default ZCartProvider;



/*
export const ZCartContext: CartState = createContext<
    {
        state: State;
        dispatch: Dispatch;
    }>({
        items: [],
        totalAmount: 0,
        addItem: (item) => { },
        removeItem: (id) => { }
    });
*/