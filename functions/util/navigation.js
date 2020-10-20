const noNavScreens = ["Journal", "Track", "TrackJournal"];

const showNav = navigation => {
    let routeName = navigation.state.routes[navigation.state.index].routeName;
    return !noNavScreens.includes(routeName);
}

const showHeader = navigation => {
    const state = navigation.state;
    let actualRoute = state.routes[state.index];
    while (actualRoute.routes) {
        actualRoute = actualRoute.routes[actualRoute.index];
    }
    return !noNavScreens.includes(actualRoute.routeName);
}

exports.showNav = showNav;
exports.showHeader = showHeader;