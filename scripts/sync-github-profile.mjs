import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const username = process.env.GITHUB_USERNAME || "lijiaqing1234";
const token = process.env.GITHUB_TOKEN;
const root = process.cwd();
const avatarPath = path.join(root, "assets", "media", "authors", "me.png");
const authorPath = path.join(root, "data", "authors", "me.yaml");

async function syncAvatar() {
  const response = await fetch(`https://github.com/${username}.png?size=600`, {
    headers: {
      Accept: "image/png",
      "User-Agent": "Jiaqing-Li-Academic-Blog",
    },
  });

  if (!response.ok) {
    throw new Error(`GitHub avatar request failed with ${response.status}`);
  }

  const contentType = response.headers.get("content-type") || "";
  if (!contentType.startsWith("image/")) {
    throw new Error(`Unexpected avatar content type: ${contentType}`);
  }

  await writeFile(avatarPath, Buffer.from(await response.arrayBuffer()));
  console.log(`Synced GitHub avatar for @${username}`);
}

async function fetchGitHubStatus() {
  if (!token) {
    console.log("GITHUB_TOKEN is not set; keeping the default profile status icon.");
    return null;
  }

  const response = await fetch("https://api.github.com/graphql", {
    method: "POST",
    headers: {
      Accept: "application/vnd.github+json",
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
      "User-Agent": "Jiaqing-Li-Academic-Blog",
    },
    body: JSON.stringify({
      query: `
        query ProfileStatus($login: String!) {
          user(login: $login) {
            status {
              emoji
              message
            }
          }
        }
      `,
      variables: { login: username },
    }),
  });

  if (!response.ok) {
    throw new Error(`GitHub status request failed with ${response.status}`);
  }

  const payload = await response.json();
  if (payload.errors?.length) {
    throw new Error(payload.errors.map((error) => error.message).join("; "));
  }

  return payload.data?.user?.status || null;
}

async function syncStatus() {
  let status;
  try {
    status = await fetchGitHubStatus();
  } catch (error) {
    console.warn(`Could not sync GitHub status: ${error.message}`);
    return;
  }

  if (!status?.emoji) {
    console.log("No public GitHub profile status is set; keeping the default icon.");
    return;
  }

  let author = await readFile(authorPath, "utf8");
  const icon = JSON.stringify(status.emoji.trim());
  author = author.replace(
    /status:\r?\n  icon: .*/,
    `status:\n  icon: ${icon}`,
  );

  const accessibleLabel = status.message?.trim()
    ? `GitHub status: ${status.message.trim()}`
    : "GitHub profile";
  author = author.replace(
    /(- icon: brands\/github\r?\n    url: [^\r\n]+\r?\n    label: ).*/,
    `$1${JSON.stringify(accessibleLabel)}`,
  );

  await writeFile(authorPath, author);
  console.log(`Synced GitHub profile status for @${username}`);
}

try {
  await syncAvatar();
} catch (error) {
  console.warn(`Could not sync GitHub avatar: ${error.message}`);
}

await syncStatus();
