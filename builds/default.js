module.exports = {
    board_env: "STM32G0B1RE_btt",
    min_version: "2.1.2",
    meta: {
        stable_name: "ender_3_skr_e3v3-{{marlin_version}}-default-{{uid}}",
        nightly_name: "ender_3_skr_e3v3-{{current_date}}-default-{{uid}}"
    },
    based_on: {
        repo: "https://github.com/MarlinFirmware/Configurations/",
        path: "/config/examples/Creality/Ender-3/'BigTreeTech SKR Mini E3 3.0'/",
        stable_branch: "release-{{marlin_version}}",
        nightly_branch: "bugfix-2.1.x"
    }
};
