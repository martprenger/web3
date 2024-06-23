<?php

namespace ContainerC2PzDai;

use Symfony\Component\DependencyInjection\Argument\RewindableGenerator;
use Symfony\Component\DependencyInjection\ContainerInterface;
use Symfony\Component\DependencyInjection\Exception\RuntimeException;

/**
 * @internal This class has been auto-generated by the Symfony Dependency Injection Component.
 */
class getCache_GlobalClearerService extends App_KernelDevDebugContainer
{
    /**
     * Gets the public 'cache.global_clearer' shared service.
     *
     * @return \Symfony\Component\HttpKernel\CacheClearer\Psr6CacheClearer
     */
    public static function do($container, $lazyLoad = true)
    {
        include_once \dirname(__DIR__, 4).'/vendor/symfony/http-kernel/CacheClearer/CacheClearerInterface.php';
        include_once \dirname(__DIR__, 4).'/vendor/symfony/http-kernel/CacheClearer/Psr6CacheClearer.php';

        return $container->services['cache.global_clearer'] = new \Symfony\Component\HttpKernel\CacheClearer\Psr6CacheClearer(['cache.app' => ($container->services['cache.app'] ?? $container->load('getCache_AppService')), 'cache.system' => ($container->services['cache.system'] ?? $container->load('getCache_SystemService')), 'cache.annotations' => ($container->privates['cache.annotations'] ?? self::getCache_AnnotationsService($container)), 'cache.validator_expression_language' => ($container->services['cache.validator_expression_language'] ?? $container->load('getCache_ValidatorExpressionLanguageService')), 'cache.security_expression_language' => ($container->privates['cache.security_expression_language'] ?? self::getCache_SecurityExpressionLanguageService($container)), 'cache.security_is_granted_attribute_expression_language' => ($container->services['cache.security_is_granted_attribute_expression_language'] ?? self::getCache_SecurityIsGrantedAttributeExpressionLanguageService($container)), 'cache.doctrine.orm.default.result' => ($container->privates['cache.doctrine.orm.default.result'] ??= new \Symfony\Component\Cache\Adapter\ArrayAdapter()), 'cache.doctrine.orm.default.query' => ($container->privates['cache.doctrine.orm.default.query'] ??= new \Symfony\Component\Cache\Adapter\ArrayAdapter()), 'api_platform.cache.route_name_resolver' => ($container->privates['api_platform.cache.route_name_resolver'] ?? $container->load('getApiPlatform_Cache_RouteNameResolverService')), 'api_platform.cache.metadata.resource' => ($container->privates['api_platform.cache.metadata.resource'] ?? self::getApiPlatform_Cache_Metadata_ResourceService($container)), 'api_platform.cache.metadata.resource.legacy' => ($container->privates['api_platform.cache.metadata.resource.legacy'] ?? self::getApiPlatform_Cache_Metadata_Resource_LegacyService($container)), 'api_platform.cache.metadata.property.legacy' => ($container->privates['api_platform.cache.metadata.property.legacy'] ?? self::getApiPlatform_Cache_Metadata_Property_LegacyService($container)), 'api_platform.cache.subresource_operation_factory' => ($container->privates['api_platform.cache.subresource_operation_factory'] ?? self::getApiPlatform_Cache_SubresourceOperationFactoryService($container)), 'api_platform.cache.identifiers_extractor' => ($container->privates['api_platform.cache.identifiers_extractor'] ?? self::getApiPlatform_Cache_IdentifiersExtractorService($container))]);
    }
}
