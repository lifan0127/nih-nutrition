/***********************************************************************************************
 * User Configuration.
 **********************************************************************************************/
/** Map relative paths to URLs. */
const map: any = {
  '@angular2-material': 'vendor/@angular2-material',
  'iscroll': 'vendor/iscroll/build'
};

/** User packages configuration. */
const materialPackages:string[] = [
  'core',
  'toolbar',
  'icon',
  'button',
  'sidenav',
  'list',
  'card',
  'input',
  'radio',
  'checkbox',
  'tabs'
];

const packages:any = createCustomConfig(materialPackages);

function createCustomConfig(packages: string[]): any {
  return packages.reduce((packageConfig: any, packageName: string) => {
    packageConfig[`@angular2-material/${packageName}`] = {
      format: 'cjs',
      defaultExtension: 'js',
      main: packageName
    };
    return packageConfig;
  }, {});
}

/** User packages configuration. */
packages['iscroll'] = {
    main: 'iscroll.js',
    format: 'cjs'
};

////////////////////////////////////////////////////////////////////////////////////////////////
/***********************************************************************************************
 * Everything underneath this line is managed by the CLI.
 **********************************************************************************************/
const barrels: string[] = [
  // Angular specific barrels.
  '@angular/core',
  '@angular/common',
  '@angular/compiler',
  '@angular/http',
  '@angular/router',
  '@angular/platform-browser',
  '@angular/platform-browser-dynamic',

  // Thirdparty barrels.
  'rxjs',

  // App specific barrels.
  'app',
  'app/shared',
  'app/modal-window',
  'app/visual/timeline',
  'app/shared/json-viewer',
  'app/visual/pie-circle',
  'app/visual/piecircle',
  'app/+nih-nutrition',
  'app/+visual-gallery',
  'app/+ichnr-roadmap',
  /** @cli-barrel */
];

const cliSystemConfigPackages: any = {};
barrels.forEach((barrelName: string) => {
  cliSystemConfigPackages[barrelName] = { main: 'index' };
});

/** Type declaration for ambient System. */
declare var System: any;

// Apply the CLI SystemJS configuration.
System.config({
  map: {
    '@angular': 'vendor/@angular',
    'rxjs': 'vendor/rxjs',
    'main': 'main.js'
  },
  packages: cliSystemConfigPackages
});

// Apply the user's configuration.
System.config({ map, packages });
