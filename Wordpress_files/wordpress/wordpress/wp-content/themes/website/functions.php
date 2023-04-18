<?php

function arphabet_widgets_init(){

    register_sidebar( array(
        'name'          => 'Sidebar',
        'id'            => 'sidebar-widgets',
        'before_widget' => '<div class="side-widget">',
        'after_widget'  => '</div>',
        'before_title'  => '<h3 class="rounded">',
        'after_title'   => '</h3>',
    ) );

    }
add_action( 'widgets_init', 'arphabet_widgets_init' );

?>

<?php
add_action( 'widgets_init', 'my_register_sidebars' );
function my_register_sidebars() {
	register_sidebar(
		array(
			'id'            => 'primary',
			'name'          => __( 'Primary Sidebar' ),
			'description'   => __( 'A short description of the sidebar.' ),
			'before_widget' => '<div id="%1$s" class="widget %2$s">',
			'after_widget'  => '</div>',
			'before_title'  => '<h3 class="widget-title">',
			'after_title'   => '</h3>',
		)
	);
}
