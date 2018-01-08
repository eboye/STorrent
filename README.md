# STorrent - Search for torrents on multiple sites

<p><strong>Electron multi platform desktop application.</strong></p>

Torrent search providers are:<br><br>
torrentSearch.disableProvider('ThePirateBay');	// public<br>
torrentSearch.disableProvider('Yggtorrent');	// authentication<br>
torrentSearch.disableProvider('KickassTorrents');	// public<br>
torrentSearch.disableProvider('TorrentProject');	// public<br>
torrentSearch.disableProvider('Rarbg');	// public<br>
torrentSearch.disableProvider('Torrent9');	// public<br>
torrentSearch.enableProvider('Torrentz2');	// public<br>
torrentSearch.disableProvider('IpTorrents');	// authentication<br>
torrentSearch.disableProvider('TorrentLeech');	// authentication<br>
torrentSearch.disableProvider('1337x');	// public<br>
torrentSearch.disableProvider('ExtraTorrent');	// public<br>

You can toggle the state of providers by renaming '...disableProvider...' to '...enableProvider...' in js/myScript.js file.

Only one provider is enabled because the speed of output results, but you can always enable providers as you wish.

This application is still in development, but it has a basic working functionality and can be useful!

You don't have to visit torrent sites any more for downloading a torrent file.

To start the application, download, cd to app folder and run 'npm start' in terminal.

New features and improvements will be implemented as time goes by.

STorrent is based on the 'torrent-search-api' by Jimmy Laurent:<br>
https://github.com/JimmyLaurent/torrent-search-api

For customization options please follow the link above.

Thank you for taking an interest for this app.

Feel free to contact me at any time.