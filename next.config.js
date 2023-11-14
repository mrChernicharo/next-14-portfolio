/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      // {
      //   protocol: "https",
      //   hostname: "lh3.googleusercontent.com",
      // },
      // {
      //   protocol: "https",
      //   hostname: "img.icons8.com",
      // },
      // {
      //   protocol: "https",
      //   hostname: "ionicframework.com",
      // },
      // {
      //   protocol: "https",
      //   hostname: "picsum.photos",
      // },
      // {
      //   protocol: "https",
      //   hostname: "daisyui.com",
      // },
      {
        protocol: "https",
        hostname: "string7devfiles.s3.amazonaws.com",
      },
      {
        protocol: "https",
        hostname: "seeklogo.com",
      },
    ],
  },
};

module.exports = nextConfig;
