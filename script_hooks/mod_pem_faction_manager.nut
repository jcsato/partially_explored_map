::mods_hookClass("factions/faction_manager", function(fm) {
	local uncoverSettlements = fm.uncoverSettlements;

	fm.uncoverSettlements = function(_explorationMode) {

		logDebug("Exploration diff: " + World.State.m.CampaignSettings.ExplorationDifficulty)
		if (World.State.m.CampaignSettings.ExplorationDifficulty == 1) {
			local settlements = World.EntityManager.getSettlements();
			local nearestSettlement = null;
			local lowestDist = 9000;
			local nearestFaction = null;
			local isSouthern = false;

			foreach (settlement in settlements) {
				local d = settlement.getTile().getDistanceTo(World.State.getPlayer().getTile());

				if (d <= lowestDist) {
					nearestSettlement = settlement;
					lowestDist = d;
				}
			}

			if (nearestSettlement != null)
				nearestFaction = nearestSettlement.getOwner();
			else
				return null;

			if (nearestFaction.getType() == Const.FactionType.OrientalCityState)
				isSouthern = true;

			foreach (settlement in settlements) {
				if (settlement.getOwner().getID() == nearestFaction.getID() || (isSouthern && settlement.getOwner().getType() == Const.FactionType.OrientalCityState)) {
					settlement.setDiscovered(true);
					World.uncoverFogOfWar(settlement.getTile().Pos, 900.0);
				}
			}
		} else
			uncoverSettlements(_explorationMode);
	};
});
