::mods_hookClass("ui/screens/tooltip/tooltip_events", function(te) {
	local general_queryUIElementTooltipData = te.general_queryUIElementTooltipData;

	te.general_queryUIElementTooltipData = function(_entityId, _elementId, _elementOwner) {
		switch(_elementId) {
			case "menu-screen.new-campaign.DefaultExploration": {
				return [
					{ id = 1, type = "title", text = "Explored Map" },
					{ id = 2, type = "description", text = "The standard exploration option. All settlements and the lands in between are revealed at the start of the campaign." }
				];
			}
            case "menu-screen.new-campaign.PartialExploration": {
                return [
                    { id = 1, type = "title", text = "Partially Explored Map" },
                    { id = 2, type = "description", text = "A more difficult exploration option where only the settlements of the nearest faction are visible to you at the start of your campaign, and you'll have to discover the rest on your own. This will make your campaign more difficult, but potentially also more exciting.\n\nSouthern city states are treated as a single faction for the purposes of this setting.\n\nRecommended only for experienced players that know what they're doing." }
                ];
            }
			case "menu-screen.new-campaign.UnexploredExploration": {
                return [
                    { id = 1, type = "title", text = "Unexplored Map" },
                    { id = 2, type = "description", text = "A more difficult exploration option where the map is entirely unexplored and not visible to you at the start of your campaign. You'll have to discover everything on your own, which makes your campaign more difficult, but potentially also more exciting.\n\nRecommended only for experienced players that know what they're doing." }
                ];
            }
		}

		return general_queryUIElementTooltipData(_entityId, _elementId, _elementOwner);
	}
});
