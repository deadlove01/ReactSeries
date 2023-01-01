namespace EcomAPI.Configs;

public static class AppSetup
{
    public static IApplicationBuilder AddApps(this IApplicationBuilder app, IConfiguration configuration)
    {
        
        return app;
    }
}