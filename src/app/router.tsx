import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "../pages/Home";
import TimelinePage from "../features/timeline/TimelinePage";
import GalleryPage from "../features/gallery/GalleryPage";
import BirthdayPage from "../features/birthday/BirthdayPage";
import GuestbookPage from "../features/guestbook/GuestbookPage";
import { LockGate } from "../features/lock/LockGate";
import { ProtectedRoute } from "../features/lock/ProtectedRoute";
import ReasonsPage from "../features/reasons/ReasonsPage";
import BucketListPage from "../features/bucketlist/BucketListPage";

export const router = createBrowserRouter([
    {
        path: "/lock",
        element: <LockGate />,
    },
    {
        element: <ProtectedRoute />,
        children: [
            {
                element: <App />,
                children: [
                    {
                        path: "/",
                        element: <Home />,
                    },
                    {
                        path: "/timeline",
                        element: <TimelinePage />,
                    },
                    {
                        path: "/gallery",
                        element: <GalleryPage />,
                    },
                    {
                        path: "/birthday",
                        element: <BirthdayPage />,
                    },
                    {
                        path: "/guestbook",
                        element: <GuestbookPage />,
                    },
                    {
                        path: "/reasons",
                        element: <ReasonsPage />,
                    },
                    {
                        path: "/bucket-list",
                        element: <BucketListPage />,
                    },
                ],
            },
        ],
    },
]);
