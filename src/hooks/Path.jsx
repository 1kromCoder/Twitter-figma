import { BookmarksIcon, ExploreIcon, HomeIcon, ListsIcon, MessagesIcon, MoreIcon, NotificationIcon, ProfileIcon } from "../assets/icons"
import { Bookmarks, Explore, Home, Lists, Messages, More, Notifications, Profile } from "../pages"

export const paths = {
    login: "/",
    home: "/",
    explore: "/explore",
    notification: "/notification",
    message: "/message",
    bookmark: "/bookmark",
    list: "/list",
    profile: "/profile",
    more: "/more",
}

export const navListRoute = [
    {
        id: 1,
        title: "Home",
        path: paths.home,
        icon: <HomeIcon />,
        element: <Home />
    },
    {
        id: 2,
        title: "Explore",
        path: paths.explore,
        icon: <ExploreIcon />,
        element: <Explore />

    },
    {
        id: 3,
        title: "Notifications",
        path: paths.notification,
        icon: <NotificationIcon />,
        element: <Notifications />

    },
    {
        id: 4,
        title: "Messages",
        path: paths.message,
        icon: <MessagesIcon />,
        element: <Messages />

    },
    {
        id: 5,
        title: "Bookmarks",
        path: paths.bookmark,
        icon: <BookmarksIcon />,
        element: <Bookmarks />

    },
    {
        id: 6,
        title: "Lists",
        path: paths.list,
        icon: <ListsIcon />,
        element: <Lists />

    },
    {
        id: 7,
        title: "Profile",
        path: paths.profile,
        icon: <ProfileIcon />,
        element: <Profile />

    },
    {
        id: 8,
        title: "More",
        path: paths.more,
        icon: <MoreIcon />,
        element: <More />

    }
]