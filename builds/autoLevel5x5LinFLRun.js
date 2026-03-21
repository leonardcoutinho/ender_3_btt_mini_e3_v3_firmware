module.exports = {
    extends: "builds/baseLin.js",
    include: [
        "builds/features/autoLevel.js",
        "builds/features/fl_detect.js"
    ],
    meta: {
        stable_name: "ender_3_skr_e3v3-{{marlin_version}}-autoLevel5x5LinFLRun-{{uid}}",
        nightly_name: "ender_3_skr_e3v3-{{current_date}}-autoLevel5x5LinFLRun-{{uid}}"
    },
    configuration: {
        enable: [
            ["GRID_MAX_POINTS_X", 5],
            "PIDTEMPBED",
            "NOZZLE_PARK_FEATURE"
        ]
    }
};
