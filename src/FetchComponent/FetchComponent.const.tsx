import { RequestTypes } from "./FetchComponent.types";

export const REQUEST_TYPES_WITH_BODIES = [RequestTypes.POST, RequestTypes.PUT, RequestTypes.DELETE, RequestTypes.PATCH];
export const REQUEST_TYPES_WITH_PARAMS = [RequestTypes.GET, RequestTypes.DELETE];
