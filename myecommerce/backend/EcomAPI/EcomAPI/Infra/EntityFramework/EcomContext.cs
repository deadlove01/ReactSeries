using EcomAPI.Domains.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;

namespace EcomAPI.Infra.EntityFramework;

public class EcomContext : DbContext
{
    public EcomContext()
    {
        
    }

    public EcomContext(DbContextOptions<EcomContext> options)
        : base(options)
    {

    }

    public DbSet<User> Users { get; set; }
}