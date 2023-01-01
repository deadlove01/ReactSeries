using EcomAPI.Domains.Common;

namespace EcomAPI.Domains.Entities;

public class User : AuditedEntity
{
    public string Username { get; set; }
    public string Password { get; set; }
    public string Email { get; set; }
}