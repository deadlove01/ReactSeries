namespace EcomAPI.Domains.Common;

public class AuditedEntity
{
    public virtual Guid Id { get; set; }
    public DateTimeOffset? AddedOnDate { get; set; }
    public Guid? AddedBy { get; set; }
    public DateTimeOffset? UpdatedOnDate { get; set; }
    public Guid? UpdatedBy { get; set; }
}