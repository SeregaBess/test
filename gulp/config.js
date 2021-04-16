const srcPath = 'src';
const destPath = 'build';

const config = {
  src: {
    root: srcPath,
    sass: `${srcPath}/scss`,
    js: `${srcPath}/js`,
    fonts: `${srcPath}/assets/fonts`,
    image: `${srcPath}/assets/images`,
    iconMono: `${srcPath}/assets/mono`,
    iconMulti: `${srcPath}/assets/multi`,
    pug: `${srcPath}/pug`,
  },

  dest: {
    root: destPath,
    html: destPath,
    css: `${srcPath}/css`,
    js: `${srcPath}/js`,
    fonts: `${srcPath}/fonts`,
    images: `${srcPath}/images`,
  },

  setEnv() {
    this.isProd = process.argv.includes('--prod');
    this.isDev = !this.isProd;
  },
};

export default config;
