import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { createReduxStore } from 'app/providers/StoreProvider/config/store';
import { StateShema } from 'app/providers/StoreProvider/config/StateShema';

interface StoreProviderProps {
    children ?: ReactNode;
    initialState?: StateShema
}

export function StoreProvider(props: StoreProviderProps) {
    const {
        children,
        initialState,
    } = props;

    const store = createReduxStore(initialState);

    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
}
