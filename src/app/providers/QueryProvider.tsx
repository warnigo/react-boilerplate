import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"

import { type FCRequiredChildren } from "@shared/types"

const QUERY_RETRY_COUNT = 1
const SECONDS_IN_MS = 1000
const STALE_TIME_SECONDS = 5
const STALE_TIME_MS = STALE_TIME_SECONDS * SECONDS_IN_MS

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnMount: false,
      refetchOnReconnect: false,
      refetchOnWindowFocus: false,
      retry: QUERY_RETRY_COUNT,
      staleTime: STALE_TIME_MS,
    },
  },
})

export const QueryProvider: FCRequiredChildren = ({ children }) => (
  <QueryClientProvider client={queryClient}>
    {children}

    <ReactQueryDevtools initialIsOpen={false} />
  </QueryClientProvider>
)
