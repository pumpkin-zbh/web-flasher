import H5Lite from "../assets/img/h5-lite.png";
import NS1 from "../assets/img/ns1.png";

export const MocreoOfflineHardwareList = [
  // {
  //   hwModel: 1,
  //   hwModelSlug: "TBEAM_S3_CORE",
  //   platformioTarget: "tbeam-s3-core",
  //   architecture: "esp32-s3",
  //   activelySupported: true,
  //   model: "H5-Pro",
  //   displayName: "H5-Pro",
  //   displayImage: H5Lite
  // },
  {
    hwModel: 2,
    hwModelSlug: "TBEAM_S3_CORE",
    platformioTarget: "tbeam-s3-core",
    architecture: "esp32-s3",
    activelySupported: true,
    model: "H5-Lite",
    displayName: "H5-Lite",
    displayImage: H5Lite
  },
  {
    hwModel: 3,
    hwModelSlug: "RAK11200",
    platformioTarget: "rak11200",
    architecture: "esp32-c3",
    activelySupported: true,
    model: "NS1",
    displayName: "NS1",
    displayImage: NS1
  }
];

export const mocreoFirmwareList = [
  {
    model: "NS1",
    pullRequests: [],
    release: {
      stable: [
        {
          id: "v1.0.5",
          title: "NS1 1.0.5 RELEASE",
          page_url: "",
          zip_url: "",
          download_url: "https://file.mocreo.com/firmware/ns1/firmware/firmware-ns1-1.0.5-prd.bin",
          release_notes:
            "\r\n## Bug Fixes\r\n- Fixed some underlying environment defects.\r\n"
        }
      ],
      alpha: [
        {
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
  },
  {
    model: "H5-Lite",
    pullRequests: [],
    release: {
      stable: [
        {
          id: "v1.1.1",
          title: "H5-Lite 1.1.1 RELEASE",
          page_url: "",
          zip_url: "",
          download_url: "https://file.mocreo.com/firmware/h5_lite/firmware/firmware-mocreo-hub-1.1.1-prd.bin",
          release_notes: "\r\n# 1.1.0\r\n\r\n## New features\r\n- Support ST8, MS2\r\n- Sensor App supports automatic scrolling of cards\r\n- Sensor App supports displaying room names (in leaflets and details pages)\r\n\r\n## Optimization function\r\n- Firmware OTA logic optimization\r\n- Optimize the data synchronization speed of sensor app\r\n- Optimize some data reporting logic\r\n- Optimize some display UI\r\n\r\n## Bug Fixes\r\n- Fixed some basic environment bugs. \r\n- Fixed the problem of encoder failure\r\n- Fixed the issue where Schedule Alarm start and end time > end time configuration does not take effect\r\n- Fixed the problem of abnormal display of sensor app icon\r\n- Fixed some alarm exception issues\r\n\r\n## Enhancements\r\n- ESP-IDF version updated to v5.3.1. \r\n- lvgl version updated to v9.1.1. \r\n\r\n# 1.1.1\r\n\r\n## Bug Fixes\r\n- Fix other known issues\r\n- Fix the problem of LED abnormally displaying 8888\r\n"        }
      ],
      alpha: [
        {
          id: "v2.3.15.deb7c27",
          title: "Meshtastic Firmware 2.3.15.deb7c27 Alpha",
          page_url: "https://github.com/meshtastic/firmware/releases/tag/v2.3.15.deb7c27",
          zip_url:
            "https://github.com/meshtastic/firmware/releases/download/v2.3.15.deb7c27/firmware-2.3.15.deb7c27.zip",
          release_notes: "\r\n## Bug fixes\r\n* - Fixed known issues"
        }
      ]
    }
  }
  // {
  //   model: "H5-Pro",
  //   pullRequests: [],
  //   release: {
  //     stable: [
  //       {
  //         id: "v1.0.5",
  //         title: "H5 1.0.3 RELEASE",
  //         page_url: "",
  //         zip_url: "",
  //         download_url: "https://dock-file.myvobot.com/firmware/mini_dock/firmware/firmware-dock-hub-1.0.5-prd.bin",
  //         release_notes:
  //           '\r\n## Bug fixes\r\n* Fix "watch GPIOs" feature of Remote Hardware module by @GUVWAF in https://github.com/meshtastic/firmware/pull/3047\r\n* Don\'t reboot after removing node from DB by @thebentern in https://github.com/meshtastic/firmware/pull/3065\r\n* Fix LED pinout for T-Echo board marked v1.0, date 2021-6-28 by @Mictronics in https://github.com/meshtastic/firmware/pull/3051\r\n* Allow button press if CannedMessage `updown1` or `rotary1` are not enabled by @GUVWAF in https://github.com/meshtastic/firmware/pull/3067\r\n\r\n## Enhancements\r\n* Add Malaysia Region by @aminhusni in https://github.com/meshtastic/firmware/pull/3053\r\n* RP2040 Enter uf2 DFU mode by @thebentern in https://github.com/meshtastic/firmware/pull/3062\r\n* Remove gps_attempt_time and use broadcast interval instead by @thebentern in https://github.com/meshtastic/firmware/pull/3064\r\n* Update exception decoder for other platforms by @GUVWAF in https://github.com/meshtastic/firmware/pull/3070\r\n* Heltec paper by @thebentern in https://github.com/meshtastic/firmware/pull/3069\r\n* Add SX1262 to M5Stack CoreInk by @markbirss in https://github.com/meshtastic/firmware/pull/3078\r\n* Cherry-picked TFT fix by @thebentern in https://github.com/meshtastic/firmware/pull/3077\r\n\r\n## New Contributors\r\n* @aminhusni made their first contribution in https://github.com/meshtastic/firmware/pull/3053\r\n\r\n**Full Changelog**: https://github.com/meshtastic/firmware/compare/v2.2.17.dbac2b1...v2.2.18.e9bde80'
  //       }
  //     ],
  //     alpha: [
  //       {
  //         id: "v2.3.15.deb7c27",
  //         title: "Meshtastic Firmware 2.3.15.deb7c27 Alpha",
  //         page_url: "https://github.com/meshtastic/firmware/releases/tag/v2.3.15.deb7c27",
  //         zip_url:
  //           "https://github.com/meshtastic/firmware/releases/download/v2.3.15.deb7c27/firmware-2.3.15.deb7c27.zip",
  //         release_notes:
  //           '\r\n## Bug fixes\r\n* Fix "watch GPIOs" feature of Remote Hardware module by @GUVWAF in https://github.com/meshtastic/firmware/pull/3047\r\n* Don\'t reboot after removing node from DB by @thebentern in https://github.com/meshtastic/firmware/pull/3065\r\n* Fix LED pinout for T-Echo board marked v1.0, date 2021-6-28 by @Mictronics in https://github.com/meshtastic/firmware/pull/3051\r\n* Allow button press if CannedMessage `updown1` or `rotary1` are not enabled by @GUVWAF in https://github.com/meshtastic/firmware/pull/3067\r\n\r\n## Enhancements\r\n* Add Malaysia Region by @aminhusni in https://github.com/meshtastic/firmware/pull/3053\r\n* RP2040 Enter uf2 DFU mode by @thebentern in https://github.com/meshtastic/firmware/pull/3062\r\n* Remove gps_attempt_time and use broadcast interval instead by @thebentern in https://github.com/meshtastic/firmware/pull/3064\r\n* Update exception decoder for other platforms by @GUVWAF in https://github.com/meshtastic/firmware/pull/3070\r\n* Heltec paper by @thebentern in https://github.com/meshtastic/firmware/pull/3069\r\n* Add SX1262 to M5Stack CoreInk by @markbirss in https://github.com/meshtastic/firmware/pull/3078\r\n* Cherry-picked TFT fix by @thebentern in https://github.com/meshtastic/firmware/pull/3077\r\n\r\n## New Contributors\r\n* @aminhusni made their first contribution in https://github.com/meshtastic/firmware/pull/3053\r\n\r\n**Full Changelog**: https://github.com/meshtastic/firmware/compare/v2.2.17.dbac2b1...v2.2.18.e9bde80'
  //       }
  //     ]
  //   }
  // }
];
