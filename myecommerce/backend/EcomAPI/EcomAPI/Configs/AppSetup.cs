namespace EcomAPI.Configs;

public static class AppSetup
{
    public static IApplicationBuilder AddApps(this IApplicationBuilder app, IConfiguration configuration)
    {
        app.UseCors(x => x
            .AllowAnyMethod()
            .AllowAnyHeader()
            .SetIsOriginAllowed(origin => true) // allow any origin
            .AllowCredentials()); // allow credentials
        
        app.UseAuthentication();
        app.UseAuthorization();
        return app;
    }
}