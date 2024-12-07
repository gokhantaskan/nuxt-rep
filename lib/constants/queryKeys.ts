export const QUERY_KEYS = {
  "things/:id": (thingId: string) => `/api/things/${thingId}`,
} as const;
