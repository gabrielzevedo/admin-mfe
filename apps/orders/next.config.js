// eslint-disable-next-line @typescript-eslint/no-var-requires
const withNx = require('@nrwl/next/plugins/with-nx');
const NextFederationPlugin = require('@module-federation/nextjs-mf');
let merge = require('webpack-merge');

/**
 * @type {import('@nrwl/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  nx: {
    // Set this to true if you would like to to use SVGR
    // See: https://github.com/gregberge/svgr
    svgr: false,
  },
  webpack(config, options) {
    const { isServer } = options;

    if (isServer) {
      // ignore it on SSR, realistically you probably wont be SSRing Fmodules, without paid support from @ScriptedAlchemy
      Object.assign(config.resolve.alias, {
        orders: false,
        shell: false,
      });
    } else {
      config.plugins.push(
        new NextFederationPlugin({
          name: 'orders',
          filename: 'static/chunks/remoteEntry.js',
          remotes: {
            shell: `shell@${process.env.NEXT_PUBLIC_SHELL_URL}/_next/static/chunks/remoteEntry.js`,
            orders: `orders@${process.env.NEXT_PUBLIC_ORDERS_URL}/_next/static/chunks/remoteEntry.js`,
          },
          exposes: {
            './details-button': './components/details-button/details-button.tsx',
          },
          shared: {},
        }),
      );
    }

    return merge.merge(config, {
      entry() {
        return config.entry().then(entry => {
          return entry;
        });
      },
    });
  },
};

module.exports = withNx(nextConfig)
