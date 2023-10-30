::mods_registerMod("partially_explored_map", 1.1, "Sato's Partially Explored Map");

::mods_queue("partially_explored_map", null, function() {
	::mods_registerJS("mod_pem_shim.js");

	::include("script_hooks/mod_pem_faction_manager");
	::include("script_hooks/mod_pem_new_campaign_menu_module");
	::include("script_hooks/mod_pem_tooltips");
});
