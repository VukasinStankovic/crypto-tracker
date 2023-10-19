import { baseUrl } from "../utils/constants";
import { useQuery } from "@tanstack/react-query";

const apiUrl = `${baseUrl}/v1/symbols`;

async function fetchTop5Symbols() {
    const response = await fetch(apiUrl);
    if (!response.ok) {
        throw new Error('Nisu pronađeni simboli.');
    }
    const data = await response.json();
    return data.slice(0, 5);
}

function useTop5Symbols() {
    return useQuery({queryKey: ['top5Symbols'], queryFn: fetchTop5Symbols});
}

export default useTop5Symbols;
