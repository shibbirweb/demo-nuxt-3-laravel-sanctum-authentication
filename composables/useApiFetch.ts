import type {UseFetchOptions} from "nuxt/app";


export async function useApiFetch<T>(
    path: string,
    options: UseFetchOptions<T> = {}
) {
    const runtimeConfig = useRuntimeConfig()
    console.log("=>(useApiFetch.ts:9) runtimeConfig", runtimeConfig);

    let headers: any = {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    };

    const token = useCookie("_token");

    if (token.value) {
        headers = {
            ...headers,
            Authorization: `Bearer ${token.value}`,
        };
    }

    return useFetch(
        runtimeConfig.public.apiBaseURL + path,
        {
          watch: false,
          ...options,
          headers: {
            ...headers,
            ...options?.headers,
          },
        }
    );
}
