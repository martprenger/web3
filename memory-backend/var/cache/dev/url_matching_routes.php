<?php

/**
 * This file has been auto-generated
 * by the Symfony Routing Component.
 */

return [
    false, // $matchHost
    [ // $staticRoutes
        '/api/admin/aggregate' => [[['_route' => 'app_admin_aggregatedata', '_controller' => 'App\\Controller\\AdminController::aggregateData'], null, ['GET' => 0], null, false, false, null]],
        '/api/admin/players' => [[['_route' => 'app_admin_players', '_controller' => 'App\\Controller\\AdminController::players'], null, ['GET' => 0], null, false, false, null]],
        '/api/admin/dates' => [[['_route' => 'app_admin_getaggregatedbydate', '_controller' => 'App\\Controller\\AdminController::getAggregatedByDate'], null, ['GET' => 0], null, false, false, null]],
        '/' => [[['_route' => 'app_default_index', '_controller' => 'App\\Controller\\DefaultController::index'], null, ['GET' => 0], null, false, false, null]],
        '/frontend' => [[['_route' => 'app_default_demo', '_controller' => 'App\\Controller\\DefaultController::demo'], null, ['GET' => 0], null, false, false, null]],
        '/api/login_check' => [[['_route' => 'app_default_login', '_controller' => 'App\\Controller\\DefaultController::login'], null, ['POST' => 0], null, false, false, null]],
        '/scores' => [[['_route' => 'app_default_scores', '_controller' => 'App\\Controller\\DefaultController::scores'], null, ['GET' => 0], null, false, false, null]],
        '/register' => [[['_route' => 'app_default_register', '_controller' => 'App\\Controller\\DefaultController::register'], null, ['POST' => 0], null, false, false, null]],
        '/game' => [[['_route' => 'app_game_index', '_controller' => 'App\\Controller\\GameController::index'], null, null, null, true, false, null]],
        '/game/all' => [[['_route' => 'app_game_getallgames', '_controller' => 'App\\Controller\\GameController::getAllGames'], null, ['GET' => 0], null, false, false, null]],
        '/game/save' => [[['_route' => 'app_game_savegame', '_controller' => 'App\\Controller\\GameController::saveGame'], null, ['POST' => 0], null, false, false, null]],
        '/api/player/' => [[['_route' => 'app_player_index', '_controller' => 'App\\Controller\\PlayerController::index'], null, null, null, true, false, null]],
    ],
    [ // $regexpList
        0 => '{^(?'
                .'|/api(?'
                    .'|/\\.well\\-known/genid/([^/]++)(*:43)'
                    .'|(?:/(index)(?:\\.([^/]++))?)?(*:78)'
                    .'|/(?'
                        .'|docs(?:\\.([^/]++))?(*:108)'
                        .'|contexts/([^.]+)(?:\\.(jsonld))?(*:147)'
                        .'|games(?'
                            .'|(?:\\.([^/]++))?(?'
                                .'|(*:181)'
                            .')'
                            .'|/([^/\\.]++)(?:\\.([^/]++))?(?'
                                .'|(*:219)'
                            .')'
                        .')'
                        .'|player(?'
                            .'|s(?'
                                .'|(?:\\.([^/]++))?(?'
                                    .'|(*:260)'
                                .')'
                                .'|/([^/\\.]++)(?:\\.([^/]++))?(?'
                                    .'|(*:298)'
                                .')'
                            .')'
                            .'|/(?'
                                .'|(\\d+)(*:317)'
                                .'|(\\d+)/games(*:336)'
                                .'|(\\d+)/preferences(*:361)'
                                .'|(\\d+)/email(*:380)'
                            .')'
                        .')'
                    .')'
                .')'
                .'|/_error/(\\d+)(?:\\.([^/]++))?(*:420)'
                .'|/game/(\\d+)(*:439)'
            .')/?$}sDu',
    ],
    [ // $dynamicRoutes
        43 => [[['_route' => 'api_genid', '_controller' => 'api_platform.action.not_exposed', '_api_respond' => 'true'], ['id'], null, null, false, true, null]],
        78 => [[['_route' => 'api_entrypoint', '_controller' => 'api_platform.action.entrypoint', '_format' => '', '_api_respond' => 'true', 'index' => 'index'], ['index', '_format'], null, null, false, true, null]],
        108 => [[['_route' => 'api_doc', '_controller' => 'api_platform.action.documentation', '_format' => '', '_api_respond' => 'true'], ['_format'], null, null, false, true, null]],
        147 => [[['_route' => 'api_jsonld_context', '_controller' => 'api_platform.jsonld.action.context', '_format' => 'jsonld', '_api_respond' => 'true'], ['shortName', '_format'], null, null, false, true, null]],
        181 => [
            [['_route' => 'api_games_get_collection', '_controller' => 'api_platform.action.get_collection', '_format' => null, '_stateless' => null, '_api_resource_class' => 'App\\Entity\\Game', '_api_identifiers' => ['id'], '_api_has_composite_identifier' => false, '_api_exception_to_status' => [], '_api_operation_name' => 'api_games_get_collection', '_api_collection_operation_name' => 'get'], ['_format'], ['GET' => 0], null, false, true, null],
            [['_route' => 'api_games_post_collection', '_controller' => 'api_platform.action.post_collection', '_format' => null, '_stateless' => null, '_api_resource_class' => 'App\\Entity\\Game', '_api_identifiers' => ['id'], '_api_has_composite_identifier' => false, '_api_exception_to_status' => [], '_api_operation_name' => 'api_games_post_collection', '_api_collection_operation_name' => 'post'], ['_format'], ['POST' => 0], null, false, true, null],
        ],
        219 => [
            [['_route' => 'api_games_get_item', '_controller' => 'api_platform.action.get_item', '_format' => null, '_stateless' => null, '_api_resource_class' => 'App\\Entity\\Game', '_api_identifiers' => ['id'], '_api_has_composite_identifier' => false, '_api_exception_to_status' => [], '_api_operation_name' => 'api_games_get_item', '_api_item_operation_name' => 'get'], ['id', '_format'], ['GET' => 0], null, false, true, null],
            [['_route' => 'api_games_delete_item', '_controller' => 'api_platform.action.delete_item', '_format' => null, '_stateless' => null, '_api_resource_class' => 'App\\Entity\\Game', '_api_identifiers' => ['id'], '_api_has_composite_identifier' => false, '_api_exception_to_status' => [], '_api_operation_name' => 'api_games_delete_item', '_api_item_operation_name' => 'delete'], ['id', '_format'], ['DELETE' => 0], null, false, true, null],
            [['_route' => 'api_games_put_item', '_controller' => 'api_platform.action.put_item', '_format' => null, '_stateless' => null, '_api_resource_class' => 'App\\Entity\\Game', '_api_identifiers' => ['id'], '_api_has_composite_identifier' => false, '_api_exception_to_status' => [], '_api_operation_name' => 'api_games_put_item', '_api_item_operation_name' => 'put'], ['id', '_format'], ['PUT' => 0], null, false, true, null],
            [['_route' => 'api_games_patch_item', '_controller' => 'api_platform.action.patch_item', '_format' => null, '_stateless' => null, '_api_resource_class' => 'App\\Entity\\Game', '_api_identifiers' => ['id'], '_api_has_composite_identifier' => false, '_api_exception_to_status' => [], '_api_operation_name' => 'api_games_patch_item', '_api_item_operation_name' => 'patch'], ['id', '_format'], ['PATCH' => 0], null, false, true, null],
        ],
        260 => [
            [['_route' => 'api_players_get_collection', '_controller' => 'api_platform.action.get_collection', '_format' => null, '_stateless' => null, '_api_resource_class' => 'App\\Entity\\Player', '_api_identifiers' => ['id'], '_api_has_composite_identifier' => false, '_api_exception_to_status' => [], '_api_operation_name' => 'api_players_get_collection', '_api_collection_operation_name' => 'get'], ['_format'], ['GET' => 0], null, false, true, null],
            [['_route' => 'api_players_post_collection', '_controller' => 'api_platform.action.post_collection', '_format' => null, '_stateless' => null, '_api_resource_class' => 'App\\Entity\\Player', '_api_identifiers' => ['id'], '_api_has_composite_identifier' => false, '_api_exception_to_status' => [], '_api_operation_name' => 'api_players_post_collection', '_api_collection_operation_name' => 'post'], ['_format'], ['POST' => 0], null, false, true, null],
        ],
        298 => [
            [['_route' => 'api_players_get_item', '_controller' => 'api_platform.action.get_item', '_format' => null, '_stateless' => null, '_api_resource_class' => 'App\\Entity\\Player', '_api_identifiers' => ['id'], '_api_has_composite_identifier' => false, '_api_exception_to_status' => [], '_api_operation_name' => 'api_players_get_item', '_api_item_operation_name' => 'get'], ['id', '_format'], ['GET' => 0], null, false, true, null],
            [['_route' => 'api_players_delete_item', '_controller' => 'api_platform.action.delete_item', '_format' => null, '_stateless' => null, '_api_resource_class' => 'App\\Entity\\Player', '_api_identifiers' => ['id'], '_api_has_composite_identifier' => false, '_api_exception_to_status' => [], '_api_operation_name' => 'api_players_delete_item', '_api_item_operation_name' => 'delete'], ['id', '_format'], ['DELETE' => 0], null, false, true, null],
            [['_route' => 'api_players_put_item', '_controller' => 'api_platform.action.put_item', '_format' => null, '_stateless' => null, '_api_resource_class' => 'App\\Entity\\Player', '_api_identifiers' => ['id'], '_api_has_composite_identifier' => false, '_api_exception_to_status' => [], '_api_operation_name' => 'api_players_put_item', '_api_item_operation_name' => 'put'], ['id', '_format'], ['PUT' => 0], null, false, true, null],
            [['_route' => 'api_players_patch_item', '_controller' => 'api_platform.action.patch_item', '_format' => null, '_stateless' => null, '_api_resource_class' => 'App\\Entity\\Player', '_api_identifiers' => ['id'], '_api_has_composite_identifier' => false, '_api_exception_to_status' => [], '_api_operation_name' => 'api_players_patch_item', '_api_item_operation_name' => 'patch'], ['id', '_format'], ['PATCH' => 0], null, false, true, null],
        ],
        317 => [[['_route' => 'app_player_getuserdata', '_controller' => 'App\\Controller\\PlayerController::getUserData'], ['id'], null, null, false, true, null]],
        336 => [[['_route' => 'app_player_getplayergames', '_controller' => 'App\\Controller\\PlayerController::getPlayerGames'], ['id'], ['GET' => 0], null, false, false, null]],
        361 => [[['_route' => 'app_player_getplayerpreferences', '_controller' => 'App\\Controller\\PlayerController::getPlayerPreferences'], ['id'], ['GET' => 0, 'POST' => 1], null, false, false, null]],
        380 => [[['_route' => 'app_player_playeremail', '_controller' => 'App\\Controller\\PlayerController::playerEmail'], ['id'], ['GET' => 0, 'PUT' => 1], null, false, false, null]],
        420 => [[['_route' => '_preview_error', '_controller' => 'error_controller::preview', '_format' => 'html'], ['code', '_format'], null, null, false, true, null]],
        439 => [
            [['_route' => 'app_game_getgame', '_controller' => 'App\\Controller\\GameController::getGame'], ['id'], ['GET' => 0], null, false, true, null],
            [null, null, null, null, false, false, 0],
        ],
    ],
    null, // $checkCondition
];
