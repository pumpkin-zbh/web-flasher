import H5Lite from "../assets/img/h5-lite.png";
import H5Pro from "../assets/img/h5-pro.png";
import NS1 from "../assets/img/ns1.png";
import NS2 from "../assets/img/ns2.png";
import NS3 from "../assets/img/ns3.png";

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
  },
  {
    hwModel: 5,
    hwModelSlug: "RAK11200",
    platformioTarget: "rak11200",
    architecture: "esp32-c3",
    activelySupported: true,
    model: "NS2",
    displayName: "NS2",
    displayImage: NS2
  },
  {
    hwModel: 6,
    hwModelSlug: "RAK11200",
    platformioTarget: "rak11200",
    architecture: "esp32-c3",
    activelySupported: true,
    model: "NS3",
    displayName: "NS3",
    displayImage: NS3
  }
];

export const mocreoFirmwareList = [
  {
    model: "NS1",
    pullRequests: [],
    release: {
      stable: [
        {
          id: "v1.1.0",
          title: "NS1 1.1.0 RELEASE",
          page_url: "",
          zip_url: "",
          download_url: "https://file.mocreo.com/firmware/ns1/firmware/firmware-ns1-1.1.0-prd.bin",
          release_notes:
            "\r\n# 1.1.0\r\n\r\n## Optimizations\r\n- Optimized some internal logic.\r\n\r\n## Bug Fixes\r\n- Fixed known issues.\r\n"
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
          id: "v1.3.0",
          title: "H5-Lite 1.3.0 RELEASE",
          page_url: "",
          zip_url: "",
          download_url: "https://file.mocreo.com/firmware/h5_lite/firmware/firmware-mocreo-hub-1.3.0-prd.bin",
          release_notes: 
            '\r\n# 1.3.0\r\n\r\n## New Features\r\n- Sensor Support: Added support for MS3 and SD1 sensors.\r\n\r\n## Optimizations\r\n- Display: Lowered the minimum screen brightness.\r\n- System: Optimized some internal logic.\r\n\r\n## Bug Fixes\r\n- General: Fixed known issues.\r\n'
        }
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
          id: "v1.3.0",
          title: "H5-Pro 1.3.0 RELEASE",
          page_url: "",
          zip_url: "",
          download_url: "https://file.mocreo.com/firmware/h5_pro/firmware/firmware-mocreo-hub-1.3.0-prd.bin",
          release_notes: 
            '\r\n# 1.3.0\r\n\r\n## New Features\r\n- Sensor Support: Added support for MS3 and SD1 sensors.\r\n\r\n## Optimizations\r\n- Display: Lowered the minimum screen brightness.\r\n- System: Optimized some internal logic.\r\n\r\n## Bug Fixes\r\n- General: Fixed known issues.\r\n'
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
    model: "NS2",
    pullRequests: [],
    release: {
      stable: [
        {
          id: "v1.1.0",
          title: "NS2 1.1.0 RELEASE",
          page_url: "",
          zip_url: "",
          download_url: "https://file.mocreo.com/firmware/ns2/firmware/firmware-ns2-1.1.0-prd.bin",
          release_notes:
            "\r\n# 1.1.0\r\n\r\n## Optimizations\r\n- Optimized some internal logic.\r\n\r\n## Bug Fixes\r\n- Fixed known issues.\r\n"
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
    model: "NS3",
    pullRequests: [],
    release: {
      stable: [
        {
          id: "v1.1.0",
          title: "NS3 1.1.0 RELEASE",
          page_url: "",
          zip_url: "",
          download_url: "https://file.mocreo.com/firmware/ns3/firmware/firmware-ns3-1.1.0-prd.bin",
          release_notes:
            "\r\n# 1.1.0\r\n\r\n## Optimizations\r\n- Optimized some internal logic.\r\n\r\n## Bug Fixes\r\n- Fixed known issues.\r\n"
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
];
