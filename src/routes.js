import { OPENED_REQUESTS, CLOSED_REQUESTS, SEND_REQUEST } from "./utils/consts";
import SendRequest from "./components/SendRequest";
import OpenedRequestsContainer from "./components/OpenedRequests/OpenedRequestsContainer";
import ClosedRequestsContainer from "./components/ClosedRequests/ClosedRequestsContainer";

export const publicRoutes = [
    {
        path : SEND_REQUEST,
        Component : SendRequest
    }
]

export const privateRoutes = [
    {
        path : SEND_REQUEST,
        Component : SendRequest
    },
    {
        path : OPENED_REQUESTS,
        Component : OpenedRequestsContainer
    },
    {
        path : CLOSED_REQUESTS,
        Component : ClosedRequestsContainer
    }
]