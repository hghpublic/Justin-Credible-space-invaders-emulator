// https://learn.microsoft.com/en-us/dotnet/framework/install/how-to-determine-which-versions-are-installed

Console.WriteLine($"Version: {Environment.Version}");

// https://learn.microsoft.com/en-us/dotnet/api/system.runtime.interopservices.runtimeinformation
Console.WriteLine($"FrameworkDescription: {System.Runtime.InteropServices.RuntimeInformation.FrameworkDescription}");
Console.WriteLine($"OSArchitecture: {System.Runtime.InteropServices.RuntimeInformation.OSArchitecture}");
Console.WriteLine($"OSDescription: {System.Runtime.InteropServices.RuntimeInformation.OSDescription}");
Console.WriteLine($"ProcessArchitecture: {System.Runtime.InteropServices.RuntimeInformation.ProcessArchitecture}");
Console.WriteLine($"RuntimeIdentifier: {System.Runtime.InteropServices.RuntimeInformation.RuntimeIdentifier}");
Console.WriteLine($"OSPlatform Linux: {System.Runtime.InteropServices.RuntimeInformation.IsOSPlatform(System.Runtime.InteropServices.OSPlatform.Linux)}");
