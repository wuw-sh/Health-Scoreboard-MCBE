import * as server from "@minecraft/server"

const players_health: () => {
    playerName: server.Player['name'];
    health: number;
}[] = () => server.world.getAllPlayers().map(pl => {
    return {
        playerName: pl.name,
        health: (<server.EntityHealthComponent>pl.getComponent(server.EntityHealthComponent.componentId)).currentValue
    }
});

server.system.runInterval(async () => {
    for (const scoreboard of (await import('config')).config.scoreboards) {
        const scoreObj = server.world.scoreboard.getObjective(scoreboard.objectiveId)
        if (!scoreObj) server.world.scoreboard.addObjective(scoreboard.objectiveId, scoreboard.displayName)
        for (const data of players_health()) {
            server.world.getPlayers({ name: data.playerName })[0].runCommandAsync(`scoreboard players set "${data.playerName}" "${scoreboard.objectiveId}" ${data.health}`)
        }
    }
}, 1)