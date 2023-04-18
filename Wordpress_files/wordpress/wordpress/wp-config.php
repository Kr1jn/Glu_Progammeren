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
define( 'DB_NAME', 'module_7' );

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
define( 'AUTH_KEY',         'S<PZ@}Skq1M^aRbW3/-E(Ly>Kr*)VptVH^l.MVODQa@hM1nT&n~3AD]fVHh3-HOz' );
define( 'SECURE_AUTH_KEY',  'o35`H`8Y{&Vye~LG@_[.O5ti3S[$__]XizA-id13`9ErAH^7lq|ac4x~c2od%7~w' );
define( 'LOGGED_IN_KEY',    '9<6&ZD7`8Wv*>d&D]H[LJ*bJkk{6W>:Sa)-e^3#p6zmAtI^Cip]tm;[4$^fLz_y=' );
define( 'NONCE_KEY',        'BBoGtF2cC7<_9kBh!Hh~o;vk+a<}/c!gNc%FainTG9P[[2pZed;N C&#Go(NzbdC' );
define( 'AUTH_SALT',        '>WNs@e[XV8cc&=np5n7|~/W}O%x5^eyVyk81IV8sqPlN|VY~zQ=8Vq`q>[~6^)8d' );
define( 'SECURE_AUTH_SALT', 'YGp1.DiykF8CU}L!@3X{%`g8+8xrAyg%^^]S<O$Y +C-SVU6NKC: |c1K75Qz?X]' );
define( 'LOGGED_IN_SALT',   '}LJs&e,L).sM4gHWSP559/%E4[A{>0>+n`}``QeTCi6wcJ}4m/*J{KN;O526ULBY' );
define( 'NONCE_SALT',       'T`GiwEag4S{EQ7CO(5-.7Ssd,Zzz:>te.RVtRSzqY-.HL_1T<dyoUO2>HdHI~*09' );

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
