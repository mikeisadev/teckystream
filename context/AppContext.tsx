import { createContext, ReactElement, useState } from "react";

/**
 * App context type.
 */
interface AppContextProps {
    themeMode: 'light' | 'dark';
    header: {
        isSearchActive: boolean,
        searchResults: object[],
        isMenuActive: boolean
    }
}

interface AppContextState extends AppContextProps{
    setSearchStatus: (status: boolean) => void,
    setSearchResults: (data: object[], isSearchActive: boolean) => void,
    setMenuStatus: (status: boolean) => void
}

/**
 * App provider props.
 */
type AppProviderProps = {
    children?: string | ReactElement | ReactElement[],
}

/**
 * App Context.
 */
export const AppContext = createContext<AppContextState|null>(null);

/**
 * Context component.
 */
export function AppProvider({children}: AppProviderProps) {
    const [App, setApp] = useState<AppContextProps>({
        themeMode: 'light',
        header: {
            isSearchActive: false,
            searchResults: [{}],
            isMenuActive: false
        }
    });

    function setSearchStatus(status: boolean) {
        setApp({
            ...App,
            header: {
                ...App.header,
                isSearchActive: status,
            }
        })
    }

    function setSearchResults(data: object[], isSearchActive: boolean) {
        setApp({
            ...App,
            header: {
                ...App.header,
                isSearchActive: isSearchActive,
                searchResults: data
            }
        })
    }

    function setMenuStatus(status: boolean) {
        setApp({
            ...App,
            header: {
                ...App.header,
                isMenuActive: status
            }
        })
    }

    return (
        <AppContext.Provider value={{...App, setSearchStatus, setSearchResults, setMenuStatus}}>
            {children}
        </AppContext.Provider>
    )
}