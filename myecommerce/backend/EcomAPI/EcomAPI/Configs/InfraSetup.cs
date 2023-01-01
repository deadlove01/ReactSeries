using EcomAPI.Infra.EntityFramework;
using Microsoft.EntityFrameworkCore;

namespace EcomAPI.Configs;

public static class InfraSetup
{
    public static IServiceCollection AddInfras(this IServiceCollection services, IConfiguration configuration)
    {
        services.AddDbContext<EcomContext>(op =>
        {
            op.UseSqlServer(configuration.GetConnectionString("EcomContext"));
            op.EnableSensitiveDataLogging();
        });
        
        return services;
    }
}