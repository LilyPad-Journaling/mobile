const { AsyncStorage } = require("react-native");

const queryLogin = async id => {
    // Make firebase query
    const user = {
        id: id,
        name: "Hayden"
    };
    return user;
}

const init = ({ setUser }) => {
    AsyncStorage.getItem("id", async id => {
        if (id !== null && id !== "") {
            const data = await queryLogin(id);
            setUser(data);
        } else {
            setUser(null);
        }
    });
}

exports.userInit = init;