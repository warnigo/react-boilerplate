"use client"

import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"

import { type FCRC } from "@shared/types"

// Number of retry attempts if a query fails
const QUERY_RETRY_COUNT = 1

// Time conversion for staleTime (5 seconds → milliseconds)
const SECONDS_IN_MS = 1000
const STALE_TIME_SECONDS = 5
const STALE_TIME_MS = STALE_TIME_SECONDS * SECONDS_IN_MS

// Create a QueryClient with custom default options
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnMount: false, // Disable refetching when component mounts
      refetchOnReconnect: false, // Disable refetching on network reconnect
      refetchOnWindowFocus: false, // Disable refetching when window regains focus
      retry: QUERY_RETRY_COUNT, // Set number of retry attempts
      staleTime: STALE_TIME_MS, // Data is considered fresh for 5 seconds
    },
  },
})

// QueryProvider wraps components with React Query client and devtools
export const QueryProvider: FCRC = ({ children }) => (
  <QueryClientProvider client={queryClient}>
    {children}
    <ReactQueryDevtools initialIsOpen={false} />
  </QueryClientProvider>
)
