import H5Lite from "../assets/img/h5-lite.png";
import H5Pro from "../assets/img/h5-pro.png";
import NS1 from "../assets/img/ns1.png";

export const MocreoOfflineHardwareList = [
  {
    hwModel: 4,
    hwModelSlug: "TBEAM_S3_CORE",
    platformioTarget: "tbeam-s3-core",
    architecture: "esp32-s3",
    activelySupported: true,
    model: "H5-Pro",
    displayName: "H5-Pro",
    displayImage: H5Pro
  },
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
          id: "v1.0.6",
          title: "NS1 1.0.6 RELEASE",
          page_url: "",
          zip_url: "",
          download_url: "https://file.mocreo.com/firmware/ns1/firmware/firmware-ns1-1.0.6-prd.bin",
          release_notes:
            "\r\n# 1.0.6\r\n\r\n## Optimization function\r\n- Adjust the setup process.\r\n- Add FAQ link to the support page.\r\n- Change Wi-Fi connection method to full channel scanning.\r\n\r\n## Bug Fixes\r\n- Enhance compatibility for special cases during measurement data reporting.\r\n"
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
          id: "v1.2.1",
          title: "H5-Lite 1.2.1 RELEASE",
          page_url: "",
          zip_url: "",
          download_url: "https://file.mocreo.com/firmware/h5_lite/firmware/firmware-mocreo-hub-1.2.1-prd.bin",
          release_notes: "\r\n# 1.2.1\r\n\r\n## Optimization function\r\n- Rule Inheritance: Override/repeat rules inherit active rule's repeatInterval to save resources.\r\n- Dismiss Fix: Dismiss skips hierarchical rule reports, reducing noise.\r\n- Data Filter: Reports only on changes for levels, ignoring duplicates.\r\n\r\n"        }
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
  },
  {
    model: "H5-Pro",
    pullRequests: [],
    release: {
      stable: [
        {
          id: "v1.2.1",
          title: "H5-Pro 1.2.1 RELEASE",
          page_url: "",
          zip_url: "",
          download_url: "https://file.mocreo.com/firmware/h5_pro/firmware/firmware-mocreo-hub-1.2.1-prd.bin",
          release_notes: "\r\n# 1.2.1\r\n\r\n## Optimization function\r\n- Rule Inheritance: Override/repeat rules inherit active rule's repeatInterval to save resources.\r\n- Dismiss Fix: Dismiss skips hierarchical rule reports, reducing noise.\r\n- Data Filter: Reports only on changes for levels, ignoring duplicates.\r\n\r\n"
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
  }
];
