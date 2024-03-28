import fetch from "cross-fetch";
import { JsonRpc } from "eosjs";

export class RPCService {
  async test(endpoint: string) {
    const rpc = new JsonRpc(endpoint, { fetch });
    const options = {
      code: "eosio.token",
      scope: "eosio.token",
      table: "accounts",
      json: true,
      limit: 1,
    };

    try {
      await rpc.get_table_rows(options);

      console.log({ status: "This endpoint is working." });
    } catch (error) {
      console.log({ status: "This endpoint may have problems." });
    }
  }
}
