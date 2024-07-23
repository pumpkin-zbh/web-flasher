export interface FirmwareResource {
	model?: string;
	id: string;
	title: string;
	page_url?: string;
	zip_url?: string;
	download_url?: string;
	release_notes?: string;
}

export interface FirmwareReleases {
	releases: {
		stable: FirmwareResource[];
		alpha: FirmwareResource[];
	};
	pullRequests: FirmwareResource[];
}

export interface DeviceHardware {
	model: string;
	hwModel: number;
	hwModelSlug: string;
	platformioTarget: string;
	architecture: string;
	activelySupported: boolean;
	displayName: string;
}

export function getCorsFriendyReleaseUrl(url: string) {
	const zipName = url.split('/').slice(-1)[0];
	const firmwareName = zipName.replace('.zip', '')
	return `https://raw.githubusercontent.com/meshtastic/meshtastic.github.io/master/${firmwareName}`;
}
