export const config: Config = {
    scoreboards: [
        {
            objectiveId: "hp",
            displayName: "Players Haealth"
        },
        // {
        //     objectiveId: "health",
        //     displayName: "Health"
        // }
    ]
}

interface Config {
    scoreboards: Scoreboard;
}

type Scoreboard = Array<ScoreboardInfo>;

type ScoreboardInfo = Record<"objectiveId" | "displayName", string>