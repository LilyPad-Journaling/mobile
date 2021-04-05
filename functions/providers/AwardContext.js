import React, { useContext, createContext, useEffect, useState, useMemo } from "react";

import { UserContext } from "../../functions/providers/UserContext";



// all the possible awards a user can recieve
// accounted for
const firstEntry = {
    id: 1,
    description: "You filled out your first journal entry",
    image: "https://www.pngfind.com/pngs/m/46-464326_pink-lotus-png-in-watercolor-large-sacred-lotus.png"
}

// accounted for
const starredEntry = {
    id: 2,
    description: "You starred a journal entry",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlb9AeSq5cy6I9_FyRM4BBQWLLxwFpC1Y-Cg&usqp=CAU"
}

const tenEntries = {
    id: 3,
    description: "You created 10 journal entries",
    image: "https://www.pngitem.com/pimgs/m/526-5268889_lotus-water-color-hd-png-download.png"
}

//accounted for
const privateEntry = {
    id: 4,
    description: "You made a journal entry private",
    image: "https://images.squarespace-cdn.com/content/v1/5b96f88f266c07dbd64e7abd/1599224636516-BZ2QTFL0JT9OTWT0KE0U/ke17ZwdGBToddI8pDm48kPH1dCwaWf2EWCHDd_SPsqR7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QHyNOqBUUEtDDsRWrJLTmp7z4I4wUUQuXS-oSoDNFmKDs0B2MQ1m8WkEG1Am3MBgd-B4fmEJBJsLGfWhOflkH/image-asset.png?format=500w"
}

//accounted for
const privateAndStarredEntry = {
    id: 5,
    description: "You made a single journal entry private and starred it",
    image: "https://i.pinimg.com/originals/44/1a/1c/441a1ce6fc4fff5190bea20c7ee5b7bb.png"
}


export const awardsSchemes = {
    firstEntry, starredEntry, tenEntries, privateEntry, privateAndStarredEntry
}

export const useAwards = () => {
    const { awards } = useContext(UserContext);

    return {
        awards
    }
}

export const AwardsContext = createContext("");

export const Awards = ({ children }) => {
    const { awards } = useAwards();

    const awardsProvider = useMemo(() => ({ awards }), [
        awards
    ]);

    return (
        <AwardsContext.Provider value={awardsProvider}>
            {children}
        </AwardsContext.Provider>
    );
}




