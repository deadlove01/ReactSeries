using EcomAPI.Domains.Entities;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;

namespace EcomAPI.Infra.EntityFramework;

public class EcomContext : IdentityUserContext<IdentityUser>
{
    public EcomContext()
    {
        
    }

    public EcomContext(DbContextOptions<EcomContext> options)
        : base(options)
    {

    }

    public DbSet<User> Users { get; set; }

    protected override void OnModelCreating(ModelBuilder builder)
    {
        base.OnModelCreating(builder);
    }
}