          // Local
// const protocol = "http";
// const host = "192.168.29.89:5013/api/v1/";

          // Live

const protocol = "https";
const host = "api.siluna.rejoicehub.com/api/v1";

// const host = "api.blockcreator.rejoicehub.com/api/v1"; 


const port = "";
const trailUrl = "";

const hostUrl = `${protocol}://${host}${port ? ":" + port : ""}/`;
const endpoint = `${protocol}://${host}${port ? ":" + port : ""}${trailUrl}`;

export default {
  protocol: protocol,
  host: host,
  port: port,
  apiUrl: trailUrl,
  endpoint: endpoint,
  hostUrl: hostUrl,
};
