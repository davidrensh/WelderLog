/***********************************************************************************************
 * User Configuration.
 **********************************************************************************************/
/** Map relative paths to URLs. */
var map = {
    'firebase': 'vendor/firebase/lib/firebase-web.js',
    'angularfire2': 'vendor/angularfire2',
    '@angular2-material': 'vendor/@angular2-material',
    'ng2-bootstrap': 'vendor/ng2-bootstrap'
};
/** User packages configuration. */
var packages = {
    'angularfire2': {
        defaultExtension: 'js',
        main: 'angularfire2.js'
    },
    '@angular2-material': {
        defaultExtension: 'js'
    },
    'ng2-bootstrap': {
        defaultExtension: 'js',
        main: 'ng2-bootstrap.js'
    }
};
////////////////////////////////////////////////////////////////////////////////////////////////
/***********************************************************************************************
 * Everything underneath this line is managed by the CLI.
 **********************************************************************************************/
var barrels = [
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
    'app/+home',
    'app/+reports',
    'app/+tools',
    'app/+settings',
    'app/+more',
    'app/+home/+login',
    'app/+weldentry',
    'app/+ndebatch',
    'app/+ab83batch',
    'app/+import',
    'app/+export',
    'app/+transferwelddata',
    'app/+project',
    'app/+childweldtype',
    'app/+interchangeableprocess',
    'app/+pipeheat',
    'app/+schedule',
    'app/+schedulewallthickness',
    'app/+lineclass',
    'app/+sevicetype',
    'app/+weldersymbol',
    'app/+welderentry',
    'app/+welderqualification',
    'app/+weldprocedure',
    'app/+usersetup',
    'app/+myprofile',
    'app/+about',
    'app/+signup',
    'app/+servicetype',
    'app/+parameter',
    'app/+parametertype',
];
var cliSystemConfigPackages = {};
barrels.forEach(function (barrelName) {
    cliSystemConfigPackages[barrelName] = { main: 'index' };
});
// Apply the CLI SystemJS configuration.
System.config({
    map: {
        '@angular': 'vendor/@angular',
        'rxjs': 'vendor/rxjs',
        'main': 'main.js',
        '@angular2-material': 'vendor/@angular'
    },
    packages: cliSystemConfigPackages
});
// Apply the user's configuration.
System.config({ map: map, packages: packages });
//# sourceMappingURL=system-config.js.map