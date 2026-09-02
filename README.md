# Illegal Services

Illegal Services is now bundled as a small Electron desktop shell so the catalog can be browsed locally without relying on a single browser bookmark entry. This keeps the project easier to launch on desktop systems while still surfacing the curated site list and supporting direct access to the most relevant resources.

## What changed

- Converted the project into a lightweight Electron launcher that opens the catalog locally.
- Kept the curated link set focused on active, commonly used resources.
- Pruned stale or no-longer-useful links and replaced them with more relevant current destinations.

## Run locally

```bash
npm install
npm start
```

## Curated link highlights

- Streaming: The Pirate Bay, 1337x, YTS, RARBG
- Direct downloads: GLOAD, Files.fm, MixDrop, Rapidgator
- Torrent indexes: TorrentDownloads, TorLock, Kickass Torrents, Demonoid
- Security tools: CyberChef, Have I Been Pwned, VirusTotal, Shodan

## Notes

This repo is intentionally kept as a local desktop wrapper around a curated bookmarks catalog. The app includes a search box and category filters so older or dead destinations can be removed without replacing the whole project structure.

## Community links

- GitHub discussions: https://github.com/Illegal-Services/Illegal_Services/discussions
- Telegram group: https://t.me/illegal_services_forum
- IS bookmarks site: https://illegal-services.github.io/Illegal_Services/Bookmarks%20Toolbar/Illegal%20Services/index.html
