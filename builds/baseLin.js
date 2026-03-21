module.exports = {
    extends: "builds/base.js",
    include: "builds/features/linearAdvance.js",
    meta: {
        stable_name: "ender_3_skr_e3v3-{{marlin_version}}-base_lin-{{uid}}",
        nightly_name: "ender_3_skr_e3v3-{{current_date}}-base_lin-{{uid}}"
    }
};
