module.exports = {
    extends: "builds/default.js",
    meta: {
        stable_name: "ender_3_skr_e3v3-{{marlin_version}}-base-{{uid}}",
        nightly_name: "ender_3_skr_e3v3-{{current_date}}-base-{{uid}}"
    },
    configuration: {
        enable: [
            ["MOTHERBOARD", "BOARD_BTT_SKR_MINI_E3_V3_0"],
            ["STRING_CONFIG_H_AUTHOR", "(Ender-3, Btt, leonardcoutinho)"],
            //standard leveling menu helper
            "LCD_BED_TRAMMING",
            "BED_TRAMMING_INCLUDE_CENTER",
            ["X_BED_SIZE", 230], //adjust my bedsize to my extruder not go outside
            ["Y_BED_SIZE", 230],
            ["Y_MIN_POS", -4] //set offset to my extruder can reach all of bed and not go outside
        ]
    },
    configuration_adv: {
        enable: [
            //octoprint
            "HOST_ACTION_COMMANDS"
        ]
    }
};
