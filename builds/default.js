module.exports = {
    board_env: "STM32G0B1RE_btt",
    min_version: "2.1.0",
    meta: {
        stable_name: "ender_3_skr_e3v3-{{marlin_version}}-default-{{uid}}",
        nightly_name: "ender_3_skr_e3v3-{{current_date}}-default-{{uid}}"
    },
    based_on: {
        repo: "https://github.com/leonardcoutinho/ender_3_btt_mini_e3_v3_firmware/",
        path: "/config/examples/Creality/Ender-3/BigTreeTech_SKR_Mini_E3_3.0/",
        stable_branch: "release-{{marlin_version}}",
        nightly_branch: "bugfix-2.1.x"
    }
};
