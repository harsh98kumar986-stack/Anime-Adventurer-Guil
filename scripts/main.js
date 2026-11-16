import { world, system } from "@minecraft/server";

const PREFIX = "§6[ADVENTURER GUILD] §r";

world.afterEvents.playerSpawn.subscribe((event) => {
    if (!event.initialSpawn) return;

    const player = event.player;

    player.sendMessage(`${PREFIX} Welcome, Adventurer!`);
    player.sendMessage("§eUse /scriptevent guild:menu to open your guild.");
});

system.afterEvents.scriptEventReceive.subscribe((event) => {
    const player = event.sourceEntity;

    if (!player || player.typeId !== "minecraft:player") return;

    if (event.id === "guild:menu") {
        player.sendMessage("§6===== ADVENTURER GUILD =====");
        player.sendMessage("§eRank: §fF Rank");
        player.sendMessage("§eGuild XP: §f0");
        player.sendMessage("§eCoins: §f0");
        player.sendMessage("§aWelcome to the Adventurer Guild!");
    }
});
