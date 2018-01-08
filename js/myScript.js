// 'use strict';

const TorrentSearchApi = require('torrent-search-api');
const torrentSearch = new TorrentSearchApi();
const $ = require('jquery');

// Search providers

torrentSearch.disableProvider('ThePirateBay');	// public
torrentSearch.disableProvider('Yggtorrent');	// authentication
torrentSearch.disableProvider('KickassTorrents');	// public
torrentSearch.disableProvider('TorrentProject');	// public
torrentSearch.disableProvider('Rarbg');	// public
torrentSearch.disableProvider('Torrent9');	// public
torrentSearch.enableProvider('Torrentz2');	// public
torrentSearch.disableProvider('IpTorrents');	// authentication
torrentSearch.disableProvider('TorrentLeech');	// authentication
torrentSearch.disableProvider('1337x');	// public
torrentSearch.disableProvider('ExtraTorrent');	// public

let searchTerm = document.getElementById('search-term');
let buttonClick = document.getElementById('btn-search');

searchTerm.addEventListener('keypress', function enterSearch() {
	if (event.keyCode === 13) {
		document.getElementById('spinner').style.display = 'flex';
		searchResults();
	}
});

buttonClick.addEventListener('click', function clickSearch() {
	document.getElementById('spinner').style.display = 'flex';
	searchResults();
});

function searchResults() {

	torrentSearch.search(searchTerm.value, '', 5)
		.then(torrents => {

			// Dynamic URL creation from JSON output
			let magnetString = JSON.stringify(torrents['0'].magnet).substr(1).slice(0, -1);
			let magnetLink = '<a href="' + magnetString + '" class="btn btn-default btn-xs btn-block" role="button"' + '>Download</a>';

			document.getElementById('title-1').innerHTML = JSON.stringify(torrents['0'].title).substr(1).slice(0, -1);
			document.getElementById('title-2').innerHTML = JSON.stringify(torrents['1'].title).substr(1).slice(0, -1);
			document.getElementById('title-3').innerHTML = JSON.stringify(torrents['2'].title).substr(1).slice(0, -1);
			document.getElementById('title-4').innerHTML = JSON.stringify(torrents['3'].title).substr(1).slice(0, -1);
			document.getElementById('title-5').innerHTML = JSON.stringify(torrents['4'].title).substr(1).slice(0, -1);

			document.getElementById('time-1').innerHTML = JSON.stringify(torrents['0'].time).substr(1).slice(0, -1);
			document.getElementById('time-2').innerHTML = JSON.stringify(torrents['1'].time).substr(1).slice(0, -1);
			document.getElementById('time-3').innerHTML = JSON.stringify(torrents['2'].time).substr(1).slice(0, -1);
			document.getElementById('time-4').innerHTML = JSON.stringify(torrents['3'].time).substr(1).slice(0, -1);
			document.getElementById('time-5').innerHTML = JSON.stringify(torrents['4'].time).substr(1).slice(0, -1);

			// document.getElementById('seeds-1').innerHTML = JSON.stringify(torrents['0'].seeds);
			// document.getElementById('seeds-2').innerHTML = JSON.stringify(torrents['1'].seeds);
			// document.getElementById('seeds-3').innerHTML = JSON.stringify(torrents['2'].seeds);
			// document.getElementById('seeds-4').innerHTML = JSON.stringify(torrents['3'].seeds);
			// document.getElementById('seeds-5').innerHTML = JSON.stringify(torrents['4'].seeds);

			document.getElementById('peers-1').innerHTML = JSON.stringify(torrents['0'].peers);
			document.getElementById('peers-2').innerHTML = JSON.stringify(torrents['1'].peers);
			document.getElementById('peers-3').innerHTML = JSON.stringify(torrents['2'].peers);
			document.getElementById('peers-4').innerHTML = JSON.stringify(torrents['3'].peers);
			document.getElementById('peers-5').innerHTML = JSON.stringify(torrents['4'].peers);

			document.getElementById('size-1').innerHTML = JSON.stringify(torrents['0'].size).substr(1).slice(0, -1);
			document.getElementById('size-2').innerHTML = JSON.stringify(torrents['1'].size).substr(1).slice(0, -1);
			document.getElementById('size-3').innerHTML = JSON.stringify(torrents['2'].size).substr(1).slice(0, -1);
			document.getElementById('size-4').innerHTML = JSON.stringify(torrents['3'].size).substr(1).slice(0, -1);
			document.getElementById('size-5').innerHTML = JSON.stringify(torrents['4'].size).substr(1).slice(0, -1);

			document.getElementById('url-1').innerHTML = magnetLink;
			document.getElementById('url-2').innerHTML = magnetLink;
			document.getElementById('url-3').innerHTML = magnetLink;
			document.getElementById('url-4').innerHTML = magnetLink;
			document.getElementById('url-5').innerHTML = magnetLink;

			document.getElementById('provider-1').innerHTML = JSON.stringify(torrents['0'].provider).substr(1).slice(0, -1);
			document.getElementById('provider-2').innerHTML = JSON.stringify(torrents['1'].provider).substr(1).slice(0, -1);
			document.getElementById('provider-3').innerHTML = JSON.stringify(torrents['2'].provider).substr(1).slice(0, -1);
			document.getElementById('provider-4').innerHTML = JSON.stringify(torrents['3'].provider).substr(1).slice(0, -1);
			document.getElementById('provider-5').innerHTML = JSON.stringify(torrents['4'].provider).substr(1).slice(0, -1);

			// Call for torrent objects output used for troubleshooting purposes
			// let stringify = document.getElementById('json-output-stringify').innerHTML = JSON.stringify(torrents['0']);
			// document.getElementById('json-output-parse').innerHTML = JSON.parse(stringify);

		})

		.then(function () {
			document.getElementById('spinner').style.display = 'none';
		})

		.catch(err => {
			window.alert('Error occurred!' + '\r\n' + err + '\r\n' + 'Please, try again.');
			document.getElementById('spinner').style.display = 'none';
		});
}



// Check for providers
// document.getElementById('providers').innerHTML = JSON.stringify(torrentSearch.getProviders());
// document.getElementById('active-providers').innerHTML = JSON.stringify(torrentSearch.getActiveProviders());
