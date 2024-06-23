<?php

namespace ContainerC2PzDai;

use Symfony\Component\DependencyInjection\Argument\RewindableGenerator;
use Symfony\Component\DependencyInjection\ContainerInterface;
use Symfony\Component\DependencyInjection\Exception\RuntimeException;

/**
 * @internal This class has been auto-generated by the Symfony Dependency Injection Component.
 */
class getMonolog_Logger_DeprecationService extends App_KernelDevDebugContainer
{
    /**
     * Gets the public 'monolog.logger.deprecation' shared service.
     *
     * @return \Symfony\Bridge\Monolog\Logger
     */
    public static function do($container, $lazyLoad = true)
    {
        $container->services['monolog.logger.deprecation'] = $instance = new \Symfony\Bridge\Monolog\Logger('deprecation');

        $instance->pushHandler(($container->privates['monolog.handler.deprecation'] ?? $container->load('getMonolog_Handler_DeprecationService')));
        $instance->pushHandler(($container->privates['monolog.handler.error'] ?? self::getMonolog_Handler_ErrorService($container)));

        return $instance;
    }
}
