<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'breakingbad' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'wlq7F{m`r#i;HtIi*>4pIoNf%8*S r-mmN0gtT*f%liz`;|;_J`#g!xj:k;k`uxL' );
define( 'SECURE_AUTH_KEY',  'Xb._}|uvlbMxu.Ad?cf9pH4Z.hEG8PqgCQv;f/iyryoz A6wzX}mUOs?D5Dc9UUP' );
define( 'LOGGED_IN_KEY',    'Al(*F`n5Mb s;tc*as@C>Tr:c02/T]MF4|D7)o8Hz:ysxZ*uqfP4oMd[sg{A:F#4' );
define( 'NONCE_KEY',        '|%q< Hr$4{t_OI&bO{KXG)[SlU;=w+Y|Z.c+=[f|vp2V.ylK[HG1n{r0kuwMJHVB' );
define( 'AUTH_SALT',        '`>FG*{,[E<0$(0<)Nq5{gFD5(sLd(mB<|1CQXZCe}mIn6ti*.UEK.KTi3Ba >^J)' );
define( 'SECURE_AUTH_SALT', ']j~F|RhsxXPNam]adjiuY/6gN[Q<{dE+NdAE;c4])[=|wEU5H!4n+p9*w=Mhx2Hc' );
define( 'LOGGED_IN_SALT',   'fUCJ!NG[`drCROzjc!g7;OtjHwt57,|&cX__`{%p{f]1per6yuQqt/#NRTdZgBkN' );
define( 'NONCE_SALT',       'TvammX|c%1n}<N/)z38sDeHUtXHv:-r^-+Cp<vc~{%(WSQtJiFqG^kAUg>kJ/0k.' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
