/**
 * 用于区分 MOCREO 和 Vobot 的配置文件
 */
import { MocreoOfflineHardwareList } from "./mocreo.config";
import { mocreoFirmwareList } from "./mocreo.config";
import { VobotOfflineHardwareList } from "./vobot.config";
import { vobotFirmwareList } from "./vobot.config";

export const OfflineHardwareList = (() => {
  if (location.host.includes("vobot")) {
    return VobotOfflineHardwareList;
  }
  return MocreoOfflineHardwareList;
})();

export const firmwareList = (() => {
  if (location.host.includes("vobot")) {
    return vobotFirmwareList;
  }
  return mocreoFirmwareList;
})();
