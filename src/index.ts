export interface Global {
  /*
    /top10/[statName]
    /racing/map/[id]
    /config/[resourceName]
    /iteminfo/[itemid]
    /alive
    /charges.json
    /economy.csv
    /skillrotation.json
    /sotd.json
    /racing/tracks.json
    /dealership.json
  */
}

export interface User {
  /*
    /snowflake2user/[discordId]
    /streak/[vRPid]
    /getuserbiz/[vRPid]
    /ownedvehicles/[vRPid]
    /trunks/[vRPid]
    /stats/[vRPid]
    /storages/[vRPid]
    /racing/races/[vRPid]
    /dataadv/[vRPid]
    /chest/[chestName]
    /wealth/[vRPid]
    /deadliest_catch.json // requires public key
    /businesses.json // requires public key
  */
}

export interface Server {
  /*
    /weather.json
    /forecast.json
    /airline.json
    /players.json
    /map/positions.json
    /widget/players.json
  */
}

export interface Faction {
  /*
    /getuserfaq/[vRPid]
    /faction/size.json
    /faction/members.json
    /faction/perks.json
    /faction/balance.json
    /faction/info.json
  */
}

function init() {
  // Unimplemented
  // Initialize any cron jobs or other first-time setup links here
}