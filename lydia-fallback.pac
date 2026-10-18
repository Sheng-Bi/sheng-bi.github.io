// Use the Mac proxy first; allow direct access if connecting to it fails.
// This does not detect every failure of the VPN's upstream connection.
function FindProxyForURL(url, host) {
    host = host.toLowerCase();
    var ipv4 = /^(\d{1,3}\.){3}\d{1,3}$/.test(host);

    // Keep local names and literal private IPv4 addresses directly reachable.
    if ((isPlainHostName(host) && host.indexOf(":") === -1) ||
        dnsDomainIs(host, ".local") ||
        (ipv4 && (/^127\./.test(host) || /^10\./.test(host) ||
        /^192\.168\./.test(host) ||
        /^172\.(1[6-9]|2[0-9]|3[01])\./.test(host) ||
        /^169\.254\./.test(host))) ||
        host === "::1" || host === "[::1]") {
        return "DIRECT";
    }

    return "PROXY lydia.local:7890; DIRECT";
}
