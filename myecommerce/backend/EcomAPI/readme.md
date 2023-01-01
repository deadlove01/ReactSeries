#init migration
dotnet ef migrations add Init -s EcomAPI/EcomAPI.csproj -p EcomAPI/EcomAPI.csproj -o Infra/Migrations

#update migration
dotnet ef database update -s EcomAPI/EcomAPI.csproj -p EcomAPI/EcomAPI.csproj

