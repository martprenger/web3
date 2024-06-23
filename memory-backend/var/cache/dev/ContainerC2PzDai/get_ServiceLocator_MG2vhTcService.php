<?php

namespace ContainerC2PzDai;

use Symfony\Component\DependencyInjection\Argument\RewindableGenerator;
use Symfony\Component\DependencyInjection\ContainerInterface;
use Symfony\Component\DependencyInjection\Exception\RuntimeException;

/**
 * @internal This class has been auto-generated by the Symfony Dependency Injection Component.
 */
class get_ServiceLocator_MG2vhTcService extends App_KernelDevDebugContainer
{
    /**
     * Gets the private '.service_locator.mG2vhTc' shared service.
     *
     * @return \Symfony\Component\DependencyInjection\ServiceLocator
     */
    public static function do($container, $lazyLoad = true)
    {
        return $container->privates['.service_locator.mG2vhTc'] = new \Symfony\Component\DependencyInjection\Argument\ServiceLocator($container->getService ??= $container->getService(...), [
            'App\\Controller\\AdminController::aggregateData' => ['privates', '.service_locator.o6sN0hZ', 'get_ServiceLocator_O6sN0hZService', true],
            'App\\Controller\\AdminController::getAggregatedByDate' => ['privates', '.service_locator.o6sN0hZ', 'get_ServiceLocator_O6sN0hZService', true],
            'App\\Controller\\AdminController::players' => ['privates', '.service_locator.o6sN0hZ', 'get_ServiceLocator_O6sN0hZService', true],
            'App\\Controller\\DefaultController::index' => ['privates', '.service_locator.Q9_Ua5J', 'get_ServiceLocator_Q9Ua5JService', true],
            'App\\Controller\\DefaultController::register' => ['privates', '.service_locator.o6sN0hZ', 'get_ServiceLocator_O6sN0hZService', true],
            'App\\Controller\\DefaultController::scores' => ['privates', '.service_locator.o6sN0hZ', 'get_ServiceLocator_O6sN0hZService', true],
            'App\\Controller\\GameController::getAllGames' => ['privates', '.service_locator.o6sN0hZ', 'get_ServiceLocator_O6sN0hZService', true],
            'App\\Controller\\GameController::getGame' => ['privates', '.service_locator.o6sN0hZ', 'get_ServiceLocator_O6sN0hZService', true],
            'App\\Controller\\GameController::saveGame' => ['privates', '.service_locator.o6sN0hZ', 'get_ServiceLocator_O6sN0hZService', true],
            'App\\Controller\\PlayerController::getPlayerGames' => ['privates', '.service_locator.o6sN0hZ', 'get_ServiceLocator_O6sN0hZService', true],
            'App\\Controller\\PlayerController::getPlayerPreferences' => ['privates', '.service_locator.o6sN0hZ', 'get_ServiceLocator_O6sN0hZService', true],
            'App\\Controller\\PlayerController::getUserData' => ['privates', '.service_locator.o6sN0hZ', 'get_ServiceLocator_O6sN0hZService', true],
            'App\\Controller\\PlayerController::playerEmail' => ['privates', '.service_locator.o6sN0hZ', 'get_ServiceLocator_O6sN0hZService', true],
            'App\\Kernel::loadRoutes' => ['privates', '.service_locator.y4_Zrx.', 'get_ServiceLocator_Y4Zrx_Service', true],
            'App\\Kernel::registerContainerConfiguration' => ['privates', '.service_locator.y4_Zrx.', 'get_ServiceLocator_Y4Zrx_Service', true],
            'kernel::loadRoutes' => ['privates', '.service_locator.y4_Zrx.', 'get_ServiceLocator_Y4Zrx_Service', true],
            'kernel::registerContainerConfiguration' => ['privates', '.service_locator.y4_Zrx.', 'get_ServiceLocator_Y4Zrx_Service', true],
            'App\\Controller\\AdminController:aggregateData' => ['privates', '.service_locator.o6sN0hZ', 'get_ServiceLocator_O6sN0hZService', true],
            'App\\Controller\\AdminController:getAggregatedByDate' => ['privates', '.service_locator.o6sN0hZ', 'get_ServiceLocator_O6sN0hZService', true],
            'App\\Controller\\AdminController:players' => ['privates', '.service_locator.o6sN0hZ', 'get_ServiceLocator_O6sN0hZService', true],
            'App\\Controller\\DefaultController:index' => ['privates', '.service_locator.Q9_Ua5J', 'get_ServiceLocator_Q9Ua5JService', true],
            'App\\Controller\\DefaultController:register' => ['privates', '.service_locator.o6sN0hZ', 'get_ServiceLocator_O6sN0hZService', true],
            'App\\Controller\\DefaultController:scores' => ['privates', '.service_locator.o6sN0hZ', 'get_ServiceLocator_O6sN0hZService', true],
            'App\\Controller\\GameController:getAllGames' => ['privates', '.service_locator.o6sN0hZ', 'get_ServiceLocator_O6sN0hZService', true],
            'App\\Controller\\GameController:getGame' => ['privates', '.service_locator.o6sN0hZ', 'get_ServiceLocator_O6sN0hZService', true],
            'App\\Controller\\GameController:saveGame' => ['privates', '.service_locator.o6sN0hZ', 'get_ServiceLocator_O6sN0hZService', true],
            'App\\Controller\\PlayerController:getPlayerGames' => ['privates', '.service_locator.o6sN0hZ', 'get_ServiceLocator_O6sN0hZService', true],
            'App\\Controller\\PlayerController:getPlayerPreferences' => ['privates', '.service_locator.o6sN0hZ', 'get_ServiceLocator_O6sN0hZService', true],
            'App\\Controller\\PlayerController:getUserData' => ['privates', '.service_locator.o6sN0hZ', 'get_ServiceLocator_O6sN0hZService', true],
            'App\\Controller\\PlayerController:playerEmail' => ['privates', '.service_locator.o6sN0hZ', 'get_ServiceLocator_O6sN0hZService', true],
            'kernel:loadRoutes' => ['privates', '.service_locator.y4_Zrx.', 'get_ServiceLocator_Y4Zrx_Service', true],
            'kernel:registerContainerConfiguration' => ['privates', '.service_locator.y4_Zrx.', 'get_ServiceLocator_Y4Zrx_Service', true],
        ], [
            'App\\Controller\\AdminController::aggregateData' => '?',
            'App\\Controller\\AdminController::getAggregatedByDate' => '?',
            'App\\Controller\\AdminController::players' => '?',
            'App\\Controller\\DefaultController::index' => '?',
            'App\\Controller\\DefaultController::register' => '?',
            'App\\Controller\\DefaultController::scores' => '?',
            'App\\Controller\\GameController::getAllGames' => '?',
            'App\\Controller\\GameController::getGame' => '?',
            'App\\Controller\\GameController::saveGame' => '?',
            'App\\Controller\\PlayerController::getPlayerGames' => '?',
            'App\\Controller\\PlayerController::getPlayerPreferences' => '?',
            'App\\Controller\\PlayerController::getUserData' => '?',
            'App\\Controller\\PlayerController::playerEmail' => '?',
            'App\\Kernel::loadRoutes' => '?',
            'App\\Kernel::registerContainerConfiguration' => '?',
            'kernel::loadRoutes' => '?',
            'kernel::registerContainerConfiguration' => '?',
            'App\\Controller\\AdminController:aggregateData' => '?',
            'App\\Controller\\AdminController:getAggregatedByDate' => '?',
            'App\\Controller\\AdminController:players' => '?',
            'App\\Controller\\DefaultController:index' => '?',
            'App\\Controller\\DefaultController:register' => '?',
            'App\\Controller\\DefaultController:scores' => '?',
            'App\\Controller\\GameController:getAllGames' => '?',
            'App\\Controller\\GameController:getGame' => '?',
            'App\\Controller\\GameController:saveGame' => '?',
            'App\\Controller\\PlayerController:getPlayerGames' => '?',
            'App\\Controller\\PlayerController:getPlayerPreferences' => '?',
            'App\\Controller\\PlayerController:getUserData' => '?',
            'App\\Controller\\PlayerController:playerEmail' => '?',
            'kernel:loadRoutes' => '?',
            'kernel:registerContainerConfiguration' => '?',
        ]);
    }
}
