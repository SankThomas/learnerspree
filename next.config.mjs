/** @type {import('next').NextConfig} */

import nextra from "nextra";

const withNextra = nextra({
  // search: { codeblocks: false },
});

const nextConfig = {
  /* config options here */
  reactCompiler: true,
};

export default withNextra(nextConfig);
