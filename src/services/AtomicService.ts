import fetch from "cross-fetch";

export class AtomicService {
  async test(endpoint: string) {
    const endsWithSlash = endpoint.endsWith("/") ? endpoint : `${endpoint}/`;
    const str = `${endsWithSlash}atomicassets/v1/collections?page=1&limit=100&order=desc&sort=created`;

    try {
      const response = await fetch(str);
      await response.json();

      console.log({ status: "This endpoint is working." });
    } catch (error) {
      console.log({ status: "This endpoint may have problems." });
    }
  }
}
