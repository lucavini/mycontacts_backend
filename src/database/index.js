const { Client } = require('pg');

const client = new Client({
  user: 'avnadmin',
  password: 'AVNS_2AN84DP7xWLq71WQ73H',
  host: 'mycontacts-mycontacts.d.aivencloud.com',
  port: 18603,
  database: 'mycontacts',
  ssl: {
    rejectUnauthorized: true,
    ca: `-----BEGIN CERTIFICATE-----
MIIEQTCCAqmgAwIBAgIUTKAPq3U0cKm9OrwVlLce/I5wjdYwDQYJKoZIhvcNAQEM
BQAwOjE4MDYGA1UEAwwvMDNiNTRlNGQtMDVhMS00ZjI0LWJiZmUtOWQwZTMxNjk3
MzgyIFByb2plY3QgQ0EwHhcNMjQwOTI5MTExMDI1WhcNMzQwOTI3MTExMDI1WjA6
MTgwNgYDVQQDDC8wM2I1NGU0ZC0wNWExLTRmMjQtYmJmZS05ZDBlMzE2OTczODIg
UHJvamVjdCBDQTCCAaIwDQYJKoZIhvcNAQEBBQADggGPADCCAYoCggGBAM0AYLO+
qY02kITuAtmmZoWTiZ9ibpS2HoxpMJRV2xSkSXDZ5WI0cx5x0fESJvrb02kBWq05
kZh41WyKLGFlJN14ZV4LBjtgJnV//EpCEYnnGPgxABn+pI3z9xcMQ4mtJ/CPuPr1
HOE9RhJAMTolKCDbZsT0MDC2P9riEmCtT3ZpclZGsErJCe0oK8ClneaTUdd8W1Fw
6F5KEagCuyHHeQixrvrk3xGOWAJjGfCL5k3m4Q+Uz1lNsm7dNO3b8vcy6xo7xj8D
SV2BPnMSBk6PnZsZv2s7Y8t3gn9sl7/Jh/w3TCA9fdSNJOJbbNQyIQs+tsKWbAex
fwSqrY271Y+fbQusiV8Uz6x6KlrO4cliaRrAvqOz0pmRYDzCyZaYUJEYVHVxKwYS
6zubfdzrbG4/z47pgjfFXyNchErGws4on2MsOFbefRPa29G/Oz9e5iPTbm2KGvY0
Dd5hahUVnyolS7XUWSAix1tY2gOkgRnzd0S7z4aSEyUxqSW7ISN5CxTzZQIDAQAB
oz8wPTAdBgNVHQ4EFgQUFwImCd49X3aIuhdyvsudTKHHwbkwDwYDVR0TBAgwBgEB
/wIBADALBgNVHQ8EBAMCAQYwDQYJKoZIhvcNAQEMBQADggGBAASmthhwzQ7rGvHG
FTWQoSHbq8GV/hQNauziT3OXrGS3PYFrZb9+aViv1xv1jkRcsMnlOgHrHwBWh1ee
VxKtqb85zNAvOsrjIytu3INf8c54j4NDnq+MmKD9YRKl7ctmIg4AKu9QHng+5zub
Wp/+PloqQ/UsZEvN3u46O/8MU7zCzkRpwIvlh8UYGGXc7JGLVmGfHcUscPWvHkU+
4NkOJ8Ah4y26TQZNMZ99WETWnDAsExw7MIInPVATIX5/6ezxJGfxIMibXloZHsk/
Iu0Iyo/iLGZGL1iURdgXYws7khrn+CwZVlNtal9u5WqjiDr5Yt276YM8FedZmA8L
3DgwPIIqBhk2NlHu/yLmSCYiT3qPieoOGLa5vGnGFZDH0EVlmYpQaIXRNPY6PzFq
ck2kAXlly91csni3R1mt4Z3BVupg1Khii4jvxb8TjhnbObDmHKHI527z25KrryW+
ZJShlj6JTT1+TaGFL2Vr8mGl56xUw2tPuQJNeTlZRQo5Dbrq0w==
-----END CERTIFICATE-----`,
  },
});

client.connect();

exports.query = async (_query, values) => {
  const { rows } = await client.query(_query, values);
  return rows;
};
