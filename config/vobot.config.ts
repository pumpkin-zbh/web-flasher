import D1 from "../assets/img/d1.png";


export const VobotOfflineHardwareList = [
  {
    hwModel: 1,
    hwModelSlug: "TBEAM_S3_CORE",
    platformioTarget: "tbeam-s3-core",
    architecture: "esp32-s3",
    activelySupported: true,
    model: "D1",
    displayName: "Mini Dock",
    displayImage: D1
  }
];

export const vobotFirmwareList = [
  {
    model: "D1",
    pullRequests: [],
    release: {
      stable: [
        {
          id: "v1.2.0",
          title: "Mini Dock 1.2.0 RELEASE",
          page_url: "",
          zip_url: "",
          download_url: "https://file.mocreo.com/firmware/mini_dock/firmware/firmware-dock-hub-1.2.0-prd.bin",
          release_notes:
            "\r\n## New Features\r\n- Added brightness control options for screen, LED clock, and ambient light\r\n- Added privacy mode\r\n- App settings on the web page support more configurations\r\n\r\n## Optimizations\r\n- Optimized network error dialog logic\r\n- PC H/W Monitoring now supports displaying FPS\r\n- Improved Wi-Fi connectivity\r\n- Enhanced some app UI and error messages\r\n\r\n## Bug Fixes\r\n- Fixed an error when accessing the Application Settings web page\r\n- Fixed the issue where the system minimum version was not checked when updating the app market\r\n- Fixed the issue where spaces at the end of Wi-Fi names were removed in the input field after clicking the list in the web\r\n- Fixed display issues on the homepage when there are only two apps\r\n- Fixed the issue where files with certain special names in the game app could not be deleted\r\n\r\n"        }
      ],
      alpha: [
        {
          model: "D1",
          id: "v2.3.15.deb7c27",
          title: "Meshtastic Firmware 2.3.15.deb7c27 Alpha",
          page_url: "https://github.com/meshtastic/firmware/releases/tag/v2.3.15.deb7c27",
          zip_url:
            "https://github.com/meshtastic/firmware/releases/download/v2.3.15.deb7c27/firmware-2.3.15.deb7c27.zip",
          release_notes:
            '\r\n## Bug fixes\r\n* Fix "watch GPIOs" feature of Remote Hardware module by @GUVWAF in https://github.com/meshtastic/firmware/pull/3047\r\n* Don\'t reboot after removing node from DB by @thebentern in https://github.com/meshtastic/firmware/pull/3065\r\n* Fix LED pinout for T-Echo board marked v1.0, date 2021-6-28 by @Mictronics in https://github.com/meshtastic/firmware/pull/3051\r\n* Allow button press if CannedMessage `updown1` or `rotary1` are not enabled by @GUVWAF in https://github.com/meshtastic/firmware/pull/3067\r\n\r\n## Enhancements\r\n* Add Malaysia Region by @aminhusni in https://github.com/meshtastic/firmware/pull/3053\r\n* RP2040 Enter uf2 DFU mode by @thebentern in https://github.com/meshtastic/firmware/pull/3062\r\n* Remove gps_attempt_time and use broadcast interval instead by @thebentern in https://github.com/meshtastic/firmware/pull/3064\r\n* Update exception decoder for other platforms by @GUVWAF in https://github.com/meshtastic/firmware/pull/3070\r\n* Heltec paper by @thebentern in https://github.com/meshtastic/firmware/pull/3069\r\n* Add SX1262 to M5Stack CoreInk by @markbirss in https://github.com/meshtastic/firmware/pull/3078\r\n* Cherry-picked TFT fix by @thebentern in https://github.com/meshtastic/firmware/pull/3077\r\n\r\n## New Contributors\r\n* @aminhusni made their first contribution in https://github.com/meshtastic/firmware/pull/3053\r\n\r\n**Full Changelog**: https://github.com/meshtastic/firmware/compare/v2.2.17.dbac2b1...v2.2.18.e9bde80'
        }
      ]
    }
  }
];
