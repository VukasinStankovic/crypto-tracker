import {baseUrl} from "../utils/constants";
import {useQuery} from "@tanstack/react-query";


const apiUrl = `${baseUrl}/bitfinex-pubticker/`;

async function fetchSymbols(symbol: string) {
    const response = await fetch(`${apiUrl}${symbol}`);
    if (!response.ok) {
        throw new Error('Nisu pronađeni simboli.');
    }
    const data = await response.json();
    return data.slice(0, 5);
}

function useSymbolData() {
    return useQuery({queryKey: ['getSymbolData'], queryFn: () => fetchSymbols});
}
export default useSymbolData();