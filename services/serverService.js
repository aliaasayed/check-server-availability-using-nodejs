const servers = require('../serverData');
const fetch = require('node-fetch');

// servers = []

function findServer() {
    return new Promise(function (resolve, reject) {
        Promise.all(servers.map(server =>
            fetch(server.url)
                .then(checkStatus)
        )).then(onlineServers => {
            var priority = servers[0].priority;
            var lowestServerUrl = servers[0].url;

            for (var i in onlineServers)
                for (var j in servers)
                    if (onlineServers[i].url == servers[j].url.toLowerCase())
                        if (servers[j].priority <= priority) {
                            lowestServerUrl = onlineServers[i].url;
                            priority = servers[j].priority;
                        }

            var lowestServer = {
                url: lowestServerUrl,
                priority: priority
            }
            resolve(lowestServer)
        });
    });
}

function checkStatus(res) {
    if (res.ok && res.status >= 200 && res.status <= 299)
        return Promise.resolve(res);
    else
        return Promise.reject(new Error(res.statusText));
}

module.exports = findServer;