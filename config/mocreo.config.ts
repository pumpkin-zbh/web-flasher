import H5Lite from "../assets/img/h5-lite.png";
import H5Pro from "../assets/img/h5-pro.png";
import NS1 from "../assets/img/ns1.png";
import NS2 from "../assets/img/ns2.png";

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
  }
];

export const mocreoFirmwareList = [
  {
    model: "NS1",
    pullRequests: [],
    release: {
      stable: [
        {
          id: "v1.0.7",
          title: "NS1 1.0.7 RELEASE",
          page_url: "",
          zip_url: "",
          download_url: "https://file.mocreo.com/firmware/ns1/firmware/firmware-ns1-1.0.7-prd.bin",
          release_notes:
            "\r\n# 1.0.7\r\n\r\n## Optimizations\r\n- Adjust the setup process.\r\n- Added screen-off feature.\r\n- Added WPA authentication support for Wi-Fi.\r\n\r\n## Bug Fixes\r\n- Fixed known issues.\r\n"
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
          id: "v1.2.3",
          title: "H5-Lite 1.2.3 RELEASE",
          page_url: "",
          zip_url: "",
          download_url: "https://file.mocreo.com/firmware/h5_lite/firmware/firmware-mocreo-hub-1.2.3-prd.bin",
          release_notes: 
            '\r\n# 1.2.3\r\n\r\n## Build Environment\r\n- ESP-IDF Update: Upgraded to V5.4.3.\r\n- Factory Firmware: Factory firmware updated accordingly.\r\n\r\n## New Features\r\n- MS2 Support: Added support for MS2.\r\n- Hybrid Mode: Supports cloud + local hybrid mode.\r\n- Static IP: Added support for static IP configuration.\r\n- NTP Source: Supports changing NTP server sources.\r\n- Automation Rules: Added support for automation rules.\r\n\r\n## Optimizations\r\n- Temperature Sync: Temperature unit is now synchronized directly from the cloud; local configuration entry removed.\r\n- CoAP /ping Backoff: Added exponential backoff with randomness when CoAP /ping fails.\r\n- CoAP Check: Verify CoAP connection status before invoking the /ping interface.\r\n- Adaptive Ping Interval: When subscription fails, automatically decrease the underlying CoAP ping–pong interval.\r\n- H5 Diagnostic Mode: Optimized prompt messages after scan completion.\r\n- H5 OTA (Factory Partition): Added a failure notification page when OTA fails.\r\n- MS2 Alarm Broadcast: When alarm state 101 is received via Bluetooth broadcast, stop data reporting without reporting probe status as -2.\r\n- Sensor Battery Reporting: Hub immediately reports when a significant battery level change is detected (≥10%).\r\n- Setup Flow: When Hub is on an error page, provide a button to return to the first setup page.\r\n- Weather App Interaction:\r\n  - Polling interval adjusted to 30 minutes + 0–5 minutes random delay.\r\n  - Added manual refresh button.\r\n  - Added time display.\r\n- Wi-Fi Reconnect: When Wi-Fi disconnects (STA_DISCONNECTED from network diagnostics), automatically rescan nearby networks and retry connection.\r\n- Network Reboot Mechanism: Added reboot logic after network disconnection (Wi-Fi or Ethernet) persists for a period of time.\r\n- CoAP Subscription Recovery: Added reboot mechanism after continuous CoAP subscription failures for a period of time.\r\n- Network Diagnostics Optimization:\r\n  - Added external UDP access test.\r\n  - Added CoAP whoami access test.\r\n  - Added log upload test.\r\n- CoAP Disconnect Alert: Added popup notification when device disconnects from CoAP and times out.\r\n- Public IP Sync:\r\n  - Sync public IP after setup completion.\r\n  - Supports command-triggered synchronization.\r\n- Pagination Logic: Added validation checks to the paginated retrieval logic.\r\n\r\n## Bug Fixes\r\n- Network Recovery Fix: Fixed issue where LED effects were not updated after network reconnection.\r\n\r\n'
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
          id: "v1.2.3",
          title: "H5-Pro 1.2.3 RELEASE",
          page_url: "",
          zip_url: "",
          download_url: "https://file.mocreo.com/firmware/h5_pro/firmware/firmware-mocreo-hub-1.2.3-prd.bin",
          release_notes: 
            '\r\n# 1.2.3\r\n\r\n## New Features\r\n- Device Support: Added support for the LB1 device.\r\n- Alert Rules: Added support for deploying alert rules for LS1/LS2 models.\r\n\r\n## Optimizations\r\n- System Diagnosis & OTA: Improved diagnostic completion prompts and added a specific failure interface for H5 factory partition OTA errors.\r\n- Device Reporting: Optimized MS2 status reporting and implemented immediate Hub reports for significant sensor battery changes (10% threshold).\r\n- Setup & UI: Added a "Return to First Page" button for Hub setup errors and enhanced the Weather App with a manual refresh button, timestamps, and randomized polling.\r\n- Network Resilience: Implemented auto-reconnection for Wi-Fi, scheduled reboots for persistent disconnections, and stability fixes for CoAP subscription failures.\r\n- Connectivity & Data: Added automatic and manual Public IP syncing and validated pagination logic for data retrieval.\r\n\r\n## Bug Fixes\r\n- Light Effects: Fixed an issue where lighting effects failed to update correctly upon network restoration.\r\n- Synchronization: Resolved a bug preventing timely server updates for LS1/LS2 configuration changes.\r\n\r\n'
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
          id: "v1.0.2",
          title: "NS2 1.0.2 RELEASE",
          page_url: "",
          zip_url: "",
          download_url: "https://file.mocreo.com/firmware/ns2/firmware/firmware-ns2-1.0.2-prd.bin",
          release_notes:
            "\r\n# 1.0.2\r\n\r\n## Bug Fixes\r\n- Fixed known issues.\r\n"
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
